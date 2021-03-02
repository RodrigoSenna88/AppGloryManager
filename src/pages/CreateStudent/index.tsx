import React from 'react';
import { View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {
  Container,
  Title,
  SubTitle,
  BackToSignIn,
  BackToSignInText,
} from './styles';

const CreateStudent: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView keyboardShouldPersistTaps="handled">
          <Container>
            <View style={{ alignItems: 'center' }}>
              <Title>Glory Manager</Title>

              <SubTitle>Nova Matrícula</SubTitle>
            </View>

            <Input name="name" icon="user" placeholder="Nome" />

            <Input name="responsável" icon="user" placeholder="Responsável" />

            <Input name="phone" icon="phone" placeholder="Telefone" />

            <Input
              name="startDate"
              icon="calendar"
              placeholder="Data de matrícula"
            />

            <Input name="schedule" icon="clock" placeholder="Turno" />

            <Button
              onPress={() => {
                console.log('foi');
              }}
            >
              Matricular
            </Button>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <BackToSignIn onPress={() => navigation.navigate('Dashboard')}>
        <Icon name="arrow-left" size={20} color="#941FBD" />
        <BackToSignInText>Voltar para dasboard</BackToSignInText>
      </BackToSignIn>
    </>
  );
};

export default CreateStudent;
