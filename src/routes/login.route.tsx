import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {Login, Cadastro, Avisos, Sos } from '../pages';

const Stack = createStackNavigator()

export default function LoginRoute() {
    return (
        <Stack.Navigator headerMode={"none"}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Cadastro" component={Cadastro} />
            <Stack.Screen name="Avisos" component={Avisos} />
            <Stack.Screen name="Sos" component={Sos} />
        </Stack.Navigator>
    )
}