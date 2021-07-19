import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { TextInput } from 'react-native-gesture-handler';
import { Container, Sos } from '../styles/Avisos';
import {Button, ButtonText} from '../components'

export default function Avisos() {
   
    return (
        <Container>
            <Sos 
                source={
                    require("../../assets/img/sos.png")
                }
            />
            
        </Container>
    );
}