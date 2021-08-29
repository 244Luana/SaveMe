import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { Container, Text, User, Space, Atention, Ballon } from '../styles/Alerta';
import {Button, SosButton} from '../components'

export default function Alerta() {
    const navigation = useNavigation();
    function handleAmigos() {
        navigation.navigate("Amigos");
    }   
    return (
        <Container>
            
            <Atention> ATENÇÃO !! </Atention>

            <Text>
                O SEU ALERTA FOI ATIVADO
            </Text>

            <Space />

            <User 
                source={
                    require("../../assets/img/User.png")
                }
            />

            <Text> Sua localização foi enviada para seus amigos! </Text>

            <Ballon>
                Para maior auxilio, contate as autoridades competentes!
            </Ballon>

            <Text> Clique aqui para acessar sua lista de amigos: </Text>

            <Button title="Amigos" onPress={handleAmigos}/>

        </Container>
    );
}