import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px;
  margin-top: 40px;
`;

export const Title = styled.Text`
  color: #941fbd;
  font-size: 36px;
  font-family: 'RobotoSlab-Medium';
  margin-top: 40px;
`;

export const SubTitle = styled.Text`
  color: #941fbd;
  font-size: 24px;
  font-family: 'RobotoSlab-Regular';
  margin: 54px 0 24px;
`;

export const BackToSignIn = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background: #e6b9f6;
  border-top-width: 1px;
  border-color: #941fbd;
  padding: 16px 0;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const BackToSignInText = styled.Text`
  color: #941fbd;
  font-size: 18px;
  font-family: 'Robotoslab-Medium';
  margin-left: 16px;
`;
