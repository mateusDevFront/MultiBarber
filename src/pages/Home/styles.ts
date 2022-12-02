import styled from 'styled-components/native';

export const ImageBackground = styled.ImageBackground.attrs({
  resizeMode: 'stretch'
})`
  flex: 1;
`
export const Container = styled.View`
  flex: 1;
  justify-content: center;
  padding-left: 50px;
  padding-right: 50px;
`;
export const ContainerAlignCenter = styled.View`
  align-items: center;
`;
export const Title = styled.Text`
  color: #fff;
  font-size: 25px;
  font-weight: 300;
  margin-bottom: 30px;
  padding-left: 5px;
`;
export const StrongTitle = styled.Text`
  font-weight: 700;
  color: #fff;
`;
export const ButtonBorder = styled.TouchableOpacity`
  background-color: #1b1c29;
  border: 2px;
  border-color: #fff;
  width: 100%;
  align-items: center;
  padding-top: 9px;
  padding-bottom: 9px;
  border-radius: 50px;
  margin-top: 15px;
`;
export const ButtonBorderText = styled.Text`
  color: #fff;
  font-size: 16px;
`;
export const Logo = styled.Image`
  justify-content: center;
  align-items: center;
`;
export const ContainerLogo = styled.View`
  align-items: center;
  margin-top: 100px;
`;
