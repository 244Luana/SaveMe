import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const ButtonStyle = styled.TouchableHighlight`
    background-color: ${colors.cyan};
    margin-top: 10px;
`
export const ButtonStyleText = styled.Text`
    color: ${colors.black};
    text-decoration: underline;
    font-size: 20px;
    padding: 10px;
`