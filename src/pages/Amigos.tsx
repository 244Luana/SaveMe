import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { Ballon, Container, Text, Space, Ballon2, MinText } from '../styles/Amigos';
import {ButtonMenu, SosButton} from '../components'

export default function Amigos() {
    const navigation = useNavigation();
    function handleSos() {
        navigation.navigate("Sos");
    }     
    function handleAvisos() {
        navigation.navigate("Avisos");
    }   
    function handleAmigos() {
        navigation.navigate("Amigos");
    }   
    function handleConta() {
        navigation.navigate("Conta");
    }

    return (
        <Container>
            <SosButton title="SOS" onPress={handleSos} />

            <Text>
                Meus Amigos
            </Text>

            <Ballon>
                Encontre seus amigos  próximos para ver suas localizações
                e receber seus alarmes..
            </Ballon>

            <Space></Space>

            <MinText>
                Nós somos sua primeira amizade!
                Podemos receber seus alarmes e ver sua localização
                se você ativar o alarme de emergencia.
            </MinText>

            <ButtonMenu title="Avisos" onPress={handleAvisos}/>

            <ButtonMenu title="Amigos" onPress={handleAmigos}/>

            <ButtonMenu title="Conta" onPress={handleConta} />

        </Container>
    );
}