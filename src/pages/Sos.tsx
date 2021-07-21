import React from 'react';
import { useNavigation } from '@react-navigation/core';
import {Button, ButtonText} from '../components';
import { Container, Text, Ballon} from '../styles/Sos';

export default function Sos() {
    const navigation = useNavigation();
    function handleAvisos() {
        navigation.navigate("Avisos");
    }
    return (
        <Container>
            <Ballon>
            Deseja ativar o sistema de alerta?
            Enviaremos um alerta com sua localização para todos os seus contatos no aplicativo.
            </Ballon>
            <Text>
                    ATIVAR MEU ALERTA
            </Text>

            <Button title="Voltar" onPress={handleAvisos} />
        </Container>
    );
}