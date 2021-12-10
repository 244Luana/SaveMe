import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/core';
import { TextInput } from 'react-native-gesture-handler';
import { Container, FormRow, Label, Logo } from '../styles/Login';
import {Button, ButtonText} from '../components'
import { useAuth } from '../hook/auth';
import { IAuthenticate } from '../interfaces/User.interface';

export default function Login() {
    const {signIn} = useAuth();
    const [data, setData] = useState<IAuthenticate>();
    const navigation = useNavigation();

    function handleCadastro() {
        navigation.navigate("Cadastro");
    }
    function handleAvisos() {
        navigation.navigate("Avisos");
    }
    function handleChange(item:IAuthenticate) {
        setData({...data, ...item})
        console.log({...data, ...item})
    }
    async function handleSignIn() {
      try{

      }  catch (error) {

      }
    }
    return (
        <Container>
            <Logo 
                source={
                    require("../../assets/img/SvLogo.png")
                }
            />
            
            <FormRow>
                <TextInput placeholder="E-MAIL"
                onChangeText = {(i) => handleChange({email: i})}
                ></TextInput>
            </FormRow>

            <FormRow>
                <TextInput placeholder="SENHA"></TextInput>
            </FormRow>

            <FormRow>
                <Label> ESQUECI A SENHA </Label>
            </FormRow>

            <Button title="ENTRAR" onPress={handleSignIn} />

            <ButtonText title="Cadastre-se aqui" onPress={handleCadastro} />
            
        </Container>
    );
}