import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import LoginRoute from './rotas.routes';
import HomeStack from "./rotas.routes"
import { useAuth } from "../hook/auth";

export default function Routes() {
    const {access_token} = useAuth()
    useAuth()
    return (
        <NavigationContainer>
            {access_token ? <HomeStack /> : <LoginRoute />}
        </NavigationContainer>
    );
}
