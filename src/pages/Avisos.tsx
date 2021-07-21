import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { Ballon, Container, Text, Sos, Ballon2 } from '../styles/Avisos';
import {Button, ButtonText} from '../components'

export default function Avisos() {
    const navigation = useNavigation();
    function handleSos() {
        navigation.navigate("Sos");
    }   
    return (
        <Container>
            <Sos 
                source={
                    require("../../assets/img/sos.png")
                }
            />

            <Ballon>
                Clique aqui em casos de emergência para enviar um alerta para seus amigos
            </Ballon>

            <Text>
                O app foi desenvolvido para situações de risco, por isso suas funcionalidades buscam facilitar o seu acesso!!
            </Text>
            
            <Ballon>
                ATENÇÃO!! Esse aplicativo requer autorização para o uso de algumas funções do seu celular.
            </Ballon>

            <Ballon2>
                É indicado colocar o SaveMe como aplicativo de acesso direto, na sua tela de bloqueio.
            </Ballon2>

            <Button title="SOS" onPress={handleSos} />
        </Container>
    );
}