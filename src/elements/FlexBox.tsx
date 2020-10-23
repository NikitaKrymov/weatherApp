import styled from 'styled-components';

export default styled.div`
    display: flex;
    justify-content: ${props => props.theme.justifyContent};
    flex-direction: ${props => props.theme.flexDirection};
    text-align: ${props => props.theme.textAlign};
    align-items: ${props => props.theme.alignItems};
    margin: ${props => props.theme.margin};
    padding-right: ${props => props.theme.paddingRight};
    padding-top: ${props => props.theme.paddingTop};
    padding-left: ${props => props.theme.paddingLeft};
    padding-bottom: ${props => props.theme.paddingBottom};
    position: ${props => props.theme.position};
`