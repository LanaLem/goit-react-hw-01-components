import styled from 'styled-components';

export const SectionStatistics = styled.section`
    width: 286px;
    margin-bottom: ${props => props.theme.space[3]}px;

    text-align: center;
    border-radius: ${props => props.theme.radii.normal};
    box-shadow: ${props => props.theme.shadow};
`

export const Title = styled.h2`
    padding: ${props => props.theme.space[5]}px;

    color: ${props => props.theme.colors.secondaryText};
    text-transform: uppercase;
`

export const ItemStatics = styled.li`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-top: ${props => props.theme.space[4]}px;
    padding-bottom: ${props => props.theme.space[4]}px;

    color: ${props => props.theme.colors.white};
`