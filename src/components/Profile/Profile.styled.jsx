import styled from 'styled-components'; 

export const Card = styled.div`
    width: 286px;
    margin-bottom: ${props => props.theme.space[3]}px;
    
    text-align: center;
    box-shadow: ${props => props.theme.shadow};
    border-radius: ${props => props.theme.radii.normal};
`
export const Name = styled.p`
    padding-bottom: ${props => props.theme.space[3]}px;

    font-weight: ${props => props.theme.fontWeights.bold};
    font-size: ${props => props.theme.fontSizes.m};
`
export const Tag = styled.p`
    padding-bottom: ${props => props.theme.space[3]}px;

    color: ${props => props.theme.colors.secondaryText};
`
export const Location = styled.p`
    color: ${props => props.theme.colors.secondaryText};
`
export const Avatar = styled.img`
    width: 96px;
    padding-bottom: ${props => props.theme.space[4]}px;

    border-radius: ${props => props.theme.radii.round};
`
export const InfoItems = styled.li`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-top: ${props => props.theme.space[4]}px;
    padding-bottom: ${props => props.theme.space[4]}px;

    border: ${props => props.theme.borders.normal} ${props => props.theme.colors.darkGrey};
    background-color: ${props => props.theme.colors.grey};
`
export const Label = styled.span`
    font-size: ${props => props.theme.fontSizes.xs};
    color: ${props => props.theme.colors.secondaryText};
`
export const Quantity = styled.span`
    font-weight: ${props => props.theme.fontWeights.bold};
`