import styled from 'styled-components';

const StyledText = styled.div`
    color: gray;
    font-size: 15px;
    text-align: left;
    margin-bottom: 20px;
    width: 97%;
    margin-left: 15px;
    justify-content: center;
`;


function Paragrafo(props){

    return(
        <StyledText>{props.text}</StyledText>
    );
}

export default Paragrafo;