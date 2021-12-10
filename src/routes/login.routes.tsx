import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Login, Cadastro } from "../pages";
import HomeStack from "./rotas.routes";
import { LoginStackParamList } from "../types/ScreenStack.types";

const Stack = createStackNavigator<LoginStackParamList>();

export default function LoginRoute() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastrar" component={Cadastro} />
      <Stack.Screen name="HomeStack" component={HomeStack} />
    </Stack.Navigator>
  );
}