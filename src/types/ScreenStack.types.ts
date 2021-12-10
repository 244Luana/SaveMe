import { StackNavigationProp } from "@react-navigation/stack"

export type LoginStackParamList = {
    Login: undefined
    Cadastrar: undefined
    HomeStack: undefined
  }
  type LoginScreenNavigationProp = StackNavigationProp<LoginStackParamList>
  export type LoginTypes = {
    navigation: LoginScreenNavigationProp
  }