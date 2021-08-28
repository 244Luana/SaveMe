import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { Ballon, Container, Text, Space, Ballon2 } from '../styles/Avisos';
import {Button, ButtonText, SosButton} from '../components'

export default function Avisos() {
    const navigation = useNavigation();
    function handleSos() {
        navigation.navigate("Sos");
    }   
    function handleAmigos() {
        navigation.navigate("Amigos");
    }
    return (
        <Container>
            <SosButton title="SOS" onPress={handleSos} />

            <Ballon>
                Clique aqui em casos de emergência para enviar um alerta para seus amigos
            </Ballon>

            <Text>
                O app foi desenvolvido para situações de risco, por isso suas funcionalidades buscam facilitar o seu acesso!!
            </Text>
            
            <Ballon>
                ATENÇÃO!! Esse aplicativo requer autorização para o uso de algumas funções do seu celular.
            </Ballon>

            <Space />

            <Ballon2>
                É indicado colocar o SaveMe como aplicativo de acesso direto, na sua tela de bloqueio.
            </Ballon2>

            <ButtonText title="Amigos" onPress={handleAmigos} />

        </Container>
    );
}