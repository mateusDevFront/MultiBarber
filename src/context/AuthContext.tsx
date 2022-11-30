import React, {useState, createContext, ReactNode, useEffect} from 'react';
import {api} from '../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
import {useNavigation} from '@react-navigation/native';

interface AuthContextData {
  user: UserProps;
  isAuthenticated: boolean;
  signIn: (credentials: SignInProps) => Promise<void>;
  signUp: (credentials: SignUpProps) => Promise<void>;
  loadingAuth: boolean;
  loading: boolean;
  signOut: () => Promise<void>;
}
interface UserProps {
  id: string;
  name: string;
  email: string;
  token: string;
  endereco?: string | null;
  subscriptions?: SubscriptionProps | null;
}
interface SubscriptionProps {
  id: string;
  status: string;
}
type AuthProviderProps = {
  children: ReactNode;
};
interface SignInProps {
  email: string;
  password: string;
}
interface SignUpProps {
  name: string;
  email: string;
  password: string;
}
export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({children}: AuthProviderProps) {
  const [user, setUser] = useState<UserProps>({
    id: '',
    name: '',
    email: '',
    token: '',
  });

  const [loadingAuth, setLoadingAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  const isAuthenticated = !!user.name;

  useEffect(() => {
    async function getUser() {
      //pegando as informações do usuário
      const userInfo = await AsyncStorage.getItem('@multiBarberToken');
      let hasUser: UserProps = JSON.parse(userInfo || `{}`);

      //Verificando se recebeu as informações do usuário
      if (Object.keys(hasUser).length > 0) {
        api.defaults.headers.common[
          'Authorization'
        ] = `Bearer ${hasUser.token}`;

        setUser({
          id: hasUser.id,
          name: hasUser.name,
          email: hasUser.email,
          token: hasUser.token,
        });
      }
      setLoading(false);
    }
    getUser();
  }, []);

  //função de login
  async function signIn({email, password}: SignInProps) {
    setLoadingAuth(true);

    try {
      const response = await api.post('/auth', {
        email,
        password,
      });
      /* console.log(response.data) */

      const {id, name, token} = response.data;

      const data = {
        //pegando o restante
        ...response.data,
      };
      //transformando o data em string
      await AsyncStorage.setItem('@multiBarberToken', JSON.stringify(data));

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setUser({
        id,
        name,
        token,
        email,
      });
      setLoadingAuth(false);
    } catch (err) {
      Toast.show({
        type: 'error',
        text1: 'Ops! esse usuário não existe :(',
      });
      setLoadingAuth(false);
    }
  }

  //Função para cadastrar barbearia
  async function signUp({name, email, password}: SignUpProps) {
    try {
      const response = await api.post('/users', {
        name,
        email,
        password,
      });
      Toast.show({
        type: 'success',
        text1: 'Barbearia criada com sucesso, faça login :)',
      });
      /* navigation.goBack() */
    } catch (err) {
      console.log('erro ao cadastrar', err);
    }
  }
  //Função para deslogar
  async function signOut() {
    await AsyncStorage.clear().then(() => {
      setUser({
        id: '',
        name: '',
        email: '',
        token: '',
        endereco: '',
      });
    });
  }
  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        signIn,
        signUp,
        loading,
        loadingAuth,
        signOut,
      }}>
      {children}
    </AuthContext.Provider>
  );
}
