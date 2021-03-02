import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px;
`;


export const Title = styled.Text`
  color: #941FBD;
  font-size: 36px;
  font-family: 'RobotoSlab-Medium';
`;

export const SubTitle = styled.Text`
  color: #941FBD;
  font-size: 24px;
  font-family: 'RobotoSlab-Regular' ;
  margin: 64px 0 24px;

`;

export const ForgotPassword = styled.TouchableOpacity`
  margin-top: 24px;
`;

export const ForgotPasswordText = styled.Text`
  color: #941FBD;
  font-size: 18px;
  font-family: 'Robotoslab-Regular';
`;

export const CreateAccountButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background: #E6B9F6;
  border-top-width: 1px;
  border-color: #941FBD;
  padding: 16px 0;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const CreateAccountButtonText = styled.Text`
  color: #941FBD;
  font-size: 18px;
  font-family: 'Robotoslab-Medium';
  margin-left: 16px;
`;

