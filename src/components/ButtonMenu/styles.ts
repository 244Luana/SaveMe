import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const ButtonStyle = styled.TouchableHighlight`
    background-color: ${colors.almwhite};
    font-size: 5;
    border-radius: 10;
    margin-top: 10;
    flex-direction: row;
`
export const ButtonStyleText = styled.Text`
    color: ${colors.black};
    padding: 10px;
`
/*colocar eles um do lado do outro*/