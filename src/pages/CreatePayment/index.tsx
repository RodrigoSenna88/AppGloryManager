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

const CreatePayment: React.FC = () => {
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

              <SubTitle>Adicionar novo pagamento</SubTitle>
            </View>

            <Input name="register_id" icon="user" placeholder="Matrícula" />

            <Input name="month" icon="calendar" placeholder="Mês" />

            <Input name="payment" icon="dollar-sign" placeholder="Pagamento" />

            <Button
              onPress={() => {
                console.log('foi');
              }}
            >
              Registrar pagamento
            </Button>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <BackToSignIn onPress={() => navigation.navigate(`student/:id`)}>
        <Icon name="arrow-left" size={20} color="#941FBD" />
        <BackToSignInText>Voltar para página do aluno</BackToSignInText>
      </BackToSignIn>
    </>
  );
};

export default CreatePayment;
