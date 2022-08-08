import styled from 'styled-components';

export const Friend = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: ${props => props.theme.space[3]}px;
    padding: ${props => props.theme.space[2]}px;
    box-shadow: ${props => props.theme.shadow};
`
export const Avatar = styled.img`
    width: 56px;
    margin-right: ${props => props.theme.space[3]}px;
    border-radius: ${props => props.theme.radii.normal};
    box-shadow: ${props => props.theme.shadow};
`

export const Status = styled.span`
    width: 16px;
    height: 16px;
    margin-left: ${props => props.theme.space[2]}px;
    margin-right: ${props => props.theme.space[3]}px;
    border-radius: ${props => props.theme.radii.round};
    background-color: ${p => (p.isOnline ? 'green' : 'red')};
`