import styled from 'styled-components';

export default styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 90%;
    margin: 0.1em;
    color: white;
    :hover {
        height: 110%;
        box-shadow: 0 0 3px grey;
        border-radius: 1em;
    }
`