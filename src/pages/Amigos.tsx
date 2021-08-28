import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { Ballon, Container, Text, Space, Ballon2 } from '../styles/Avisos';
import {Button, SosButton} from '../components'

export default function Avisos() {
    const navigation = useNavigation();
    function handleSos() {
        navigation.navigate("Sos");
    }   
    return (
        <Container>
            <SosButton title="SOS" onPress={handleSos} />

            <Text>
                Meus Amigos
            </Text>

        </Container>
    );
}