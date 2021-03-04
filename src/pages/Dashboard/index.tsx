/* eslint-disable no-unused-expressions */
import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import Icon from 'react-native-vector-icons/Feather';

import Button from '../../components/Button';

import {
  Container,
  Header,
  HeaderTitle,
  UserName,
  ProfileButton,
  UserAvatar,
  StudentList,
  StudentContainer,
  StudentInfo,
  StudentName,
  StudentScheduleIcon,
  StudentSchedule,
  LogOutButton,
  LogOutButtonText,
  ButtonContainer,
} from './styles';

const Dashboard: React.FC = () => {
  const { navigate } = useNavigation();

  const navigateToProfile = useCallback(() => {
    navigate('Profile');
  }, [navigate]);
  return (
    <>
      <Container>
        <Header>
          <HeaderTitle>
            Olá, {'\n'}
            <UserName>Rodrigo Senna</UserName>
          </HeaderTitle>

          <ProfileButton
            onPress={() => {
              navigateToProfile;
            }}
          >
            <UserAvatar
              source={{
                uri:
                  'https://avatars.githubusercontent.com/u/56227526?s=400&u=2074ddcc5a2198c3778cdc643518afcd5ee67c7e&v=4',
              }}
            />
          </ProfileButton>
        </Header>

        <StudentList>
          <StudentContainer
            onPress={() => {
              console.log('foi');
            }}
          >
            <StudentInfo>
              <StudentName>Rodrigo Senna</StudentName>

              <StudentScheduleIcon>
                <Icon name="clock" size={14} color="#B776B0" />

                <StudentSchedule>Manhã</StudentSchedule>
              </StudentScheduleIcon>
            </StudentInfo>
          </StudentContainer>

          <StudentContainer
            onPress={() => {
              console.log('foi');
            }}
          >
            <StudentInfo>
              <StudentName>Rafael Senna</StudentName>

              <StudentScheduleIcon>
                <Icon name="clock" size={14} color="#B776B0" />

                <StudentSchedule>Tarde</StudentSchedule>
              </StudentScheduleIcon>
            </StudentInfo>
          </StudentContainer>
        </StudentList>
        <ButtonContainer>
          <Button
            onPress={() => {
              console.log('foi');
            }}
          >
            Criar nova matrícula
          </Button>
        </ButtonContainer>
      </Container>

      <LogOutButton
        onPress={() => {
          console.log('foi');
        }}
      >
        <Icon name="log-in" size={20} color="#941FBD" />
        <LogOutButtonText>Sair da aplicação</LogOutButtonText>
      </LogOutButton>
    </>
  );
};

export default Dashboard;
