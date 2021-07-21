import styled from 'styled-components/native';
import colors from './colors';


export const Container = styled.View`
    flex: 1;
    background-color: ${colors.cyan};
    align-items: center;
    justify-content: center;
`
export const Sos = styled.Image`
    align-self: flex-start;
    align-items: flex-start;
    justify-content: flex-start;
    margin-left: 10px;
    margin-top: 10px;
    width: 50px;
    height: 50px;
`
export const Ballon = styled.Text`
    align-self: flex-end;
    width: 250px;
    font-size: 18px;
    text-align: center;
    border-radius: 10px;
    border-color: ${colors.black};
    border-width: 1px;
    padding: 15px;
    background-color: ${colors.purple};
`
export const Text = styled.Text`
    align-items: center;
    font-size: 26px;
    text-align: center;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 20px;
    padding: 20px;
`
export const Ballon2 = styled.Text`
    align-self: flex-start;
    width: 250px;
    font-size: 18px;
    text-align: center;
    border-radius: 10px;
    border-color: ${colors.black};
    border-width: 1px;
    padding: 15px;
    background-color: ${colors.purple};
`