import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #1b1c29;
  padding-left: 35px;
  padding-right: 35px;
`;
export const BoxContainer = styled.View`
  background-color: #11121d;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 8px;
  margin-top: 30px;
`;
export const ContainerInput = styled.View`
  margin-bottom: 10px;
  background-color: #1b1c29;
  border-radius: 8px;
`;
export const ContainerSignature = styled.View`
  margin-bottom: 10px;
  background-color: #1b1c29;
  border-radius: 8px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;
export const Input = styled.TextInput`
  margin-left: 10px;
  color: #fff;
`;
export const Text = styled.Text`
  color: #fff;
  padding-top: 15px;
  padding-bottom: 15px;
  margin-left: 15px;
  font-weight: 500;
`;
export const BoxSignature = styled.TouchableOpacity`
  background-color: #11121d;
  width: 30%;
  align-items: center;
  margin-right: 10px;
  border-radius: 10px;
`;
export const TextSignature = styled.Text`
  color: #fff;
  padding-top: 8px;
  padding-bottom: 8px;
  font-weight: 500;
`;
export const ButtonChange = styled.TouchableOpacity`
  border: 2px;
  border-color: #12bc42;
  width: 100%;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 50px;
  margin-bottom: 15px;
`;
export const ButtonChangeDisabled = styled.TouchableOpacity`
    border: 2px;
  border-color: #9d1919;
  width: 100%;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 50px;
  margin-bottom: 15px;
`
export const TextChange = styled.Text`
  color: #12bc42;
  font-size: 16px;
  font-weight: 500;
`;
