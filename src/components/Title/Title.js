import styled from 'styled-components';

const StyledText = styled.div`
    color: blue;
    font-size: 45px;
    text-align: center;

`;

function Teste(props){

    return (<>
        <StyledText>{props.text}</StyledText>
        </>
    );
}

export default Teste;