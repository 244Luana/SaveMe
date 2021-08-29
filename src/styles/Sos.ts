import styled from 'styled-components/native';
import { ButtonText } from '../components';
import colors from './colors';

export const Container = styled.View`
    flex: 1;
    background-color: ${colors.cyan};
    align-items: center;
    justify-content: center;
`
export const Ballon = styled.Text`
    align-self: center;
    width: 350px;
    font-size: 18px;
    text-align: center;
    border-radius: 10px;
    border-color: ${colors.black};
    border-width: 1px;
    padding: 15px;
    background-color: ${colors.violet};
`
export const Text = styled.Text`
    align-items: center;
    font-size: 20px;
    padding-top: 15px;
    padding: 10px;
    color: ${colors.black};
    text-decoration-line: underline;
`