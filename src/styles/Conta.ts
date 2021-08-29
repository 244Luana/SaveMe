import styled from 'styled-components/native';
import colors from './colors';


export const Container = styled.View`
    flex: 1;
    background-color: ${colors.cyan};
    align-items: center;
    justify-content: center;
`
export const Text = styled.Text`
    align-items: center;
    font-size: 26px;
    text-align: center;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 15px;
    padding: 15px;
`
export const MinText = styled.Text`
    align-self: flex-start;
    width: 250px;
    font-size: 18px;
    text-decoration: underline;
    text-align: start;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 15px;
    padding: 15px;
`
export const User = styled.Image`
    align-self: center;
    width: 100px;
    height: 100px;
    margin-bottom: 10px;
`
export const Space = styled.Text`
    padding-top: 1px;
    padding: 1px;
`
