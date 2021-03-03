/* eslint-disable no-unused-expressions */
import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';

import {
  Container,
  Header,
  HeaderTitle,
  UserName,
  ProfileButton,
  UserAvatar,
} from './styles';

const Dashboard: React.FC = () => {
  const { navigate } = useNavigation();

  const navigateToProfile = useCallback(() => {
    navigate('Profile');
  }, [navigate]);
  return (
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
    </Container>
  );
};

export default Dashboard;
