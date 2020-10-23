import styled from 'styled-components';

export default styled.div`
    display: grid;
    box-sizing: border-box;
    grid-template-rows: 1fr 2fr;
    margin: 1em;
    :hover {
        cursor: pointer;
        box-shadow: 0 0 2px black;
        border-radius: 1em;
    }
`