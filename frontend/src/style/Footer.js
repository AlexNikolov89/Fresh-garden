import styled from 'styled-components'
import {theme} from './index'

export const FooterContainer = styled.footer `
    height: ${theme.controlHeightL};
    width: 100%;
    background-color: ${theme.colorDarkOliveGreen};
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;    
`;

export const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 50%;
    height: 100%;
    padding-left: ${theme.spaceS}
    padding-right: ${theme.spaceS}
`;

export const RightContainer = styled(LeftContainer)`
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
`;

export const Text = styled.p`
    color: ${theme.colorMiddleGreenYellowVeryLight};
    font-size: ${theme.fontSizeS};
`;

export const SwissMade = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    color: ${theme.colorDarkRed};
    font-size: ${theme.fontSizeS};
    font-weight: ${theme.fontWeightBold};

    i {
        color: ${theme.colorDarkRed};
        font-size: ${theme.fontSizeM};
        
        &:hover, :focus, &.active {
            color: red;
        }
    }
`;

export const SocialIcons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;

    i {
        box-shadow: ${theme.boxShadowLight};
        margin-left: ${theme.spaceS};
        color: ${theme.colorMiddleGreenYellowLight};
        font-size: ${theme.fontSizeM};

        &:hover, :focus, &.active {
            color: ${theme.colorMiddleGreenYellowVeryLight};
            box-shadow: ${theme.boxShadowInset};
        }
    }
`;

export const GithubLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    background-color: ${theme.colorDarkOliveGreen};

`;

export const LinkedInLink = styled(GithubLink)``;
export const TwitterLink = styled(GithubLink)``;
export const SwissMadeLink = styled(GithubLink)``;
