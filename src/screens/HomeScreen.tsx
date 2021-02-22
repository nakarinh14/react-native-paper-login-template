import React, { memo } from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';
import { Navigation } from '../types';
import { theme } from '../core/theme';


type Props = {
  navigation: Navigation;
};

const HomeScreen = ({ navigation }: Props) => {
  return (
    <Background>
      <Logo />
      <Header>Login Template</Header>

      <Paragraph>
        The most advanced calculator on this entire project
      </Paragraph>
      <Button color={theme.colors.primary} mode="contained" onPress={() => navigation.navigate('LoginScreen')}>
        Login
      </Button>
      <Button
        mode="outlined"
        color='black'
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        Sign Up
      </Button>
    </Background>
  );
}


export default memo(HomeScreen);
