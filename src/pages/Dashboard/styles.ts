import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  padding: 24px;
  background: #e6b9f6;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  color: #b776b0;
  font-size: 24px;
  font-family: 'RobotoSlab-Regular';
  line-height: 28px;
`;

export const UserName = styled.Text`
  color: #941fbd;
  font-family: 'RobotoSlab-Medium';
`;

export const ProfileButton = styled.TouchableOpacity``;

export const UserAvatar = styled.Image`
  width: 56px;
  height: 56px;
  border-radius: 28px;
`;

export const StudentList = styled.View`
  padding: 32px 24px 16px;
`;

export const StudentContainer = styled(RectButton)`
  background: #e6b9f6;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 16px;
  flex-direction: row;
  align-items: center;
`;

export const StudentInfo = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const StudentName = styled.Text`
  font-family: 'RobotoSlab-Medium';
  font-size: 18px;
  color: #941fbd;
`;

export const StudentScheduleIcon = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`;

export const StudentSchedule = styled.Text`
  font-family: 'RobotoSlab-Regular';
  font-size: 18px;
  color: #b776b0;
  margin-left: 5px;
`;

export const LogOutButton = styled.TouchableOpacity`
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

export const LogOutButtonText = styled.Text`
  color: #941fbd;
  font-size: 18px;
  font-family: 'Robotoslab-Medium';
  margin-left: 16px;
`;

export const ButtonContainer = styled.View`
  padding: 20px;
`;
