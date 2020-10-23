import styled from 'styled-components';

export default styled.div`
    display: grid;
    grid-template-columns: ${props => props.theme.gridTemplateColumns};
    grid-auto-flow: ${props => props.theme.gridAutoFlow};
    grid-template-rows: ${props => props.theme.gridTemplateRows};
    position: ${props => props.theme.position};
    height: 100%;
    width: 100%;
`