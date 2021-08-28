import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginRoute from './login.route';
import { Avisos, Sos, Amigos } from '../pages';

export default function Routes() {
    return (
        <NavigationContainer>
            <LoginRoute />
        </NavigationContainer>
    );
}
