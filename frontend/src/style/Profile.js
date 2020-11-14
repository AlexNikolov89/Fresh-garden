import styled from 'styled-components';
import {theme} from './index'
import {GenericButton} from './Buttons'


export const BottomContainer = styled.div `
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: ${theme.colorBackgroundColor};
    padding-bottom: ${theme.spaceXL};
`;

export const UserProfileContainer = styled.div `
    background-color: #fff;
    width: 60%;
    height: 450px;
    display: flex;
    border-radius: ${theme.borderRadiusDefault};
    margin-top: ${theme.controlHeightL};
    box-shadow: ${theme.boxShadowLight}
`;

export const AvatarContainer = styled.div `
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    @media (max-width: ${theme.mediaQueryScreenWidth}){
       width: 30%;
       padding-left: ${theme.spaceXS};
    }
`;

export const Avatar = styled.img `
    width: 120px;
    border-radius: ${theme.borderRadiusS};
`;

export const Name = styled.p `
    font-size: ${theme.fontSizeDefault};
    padding-top: ${theme.spaceDefault};

    @media (max-width: ${theme.mediaQueryScreenWidth}){
       font-size: ${theme.fontSizeS};
    }
`;

export const Email = styled(Name) `
padding-bottom: ${theme.spaceM};
 `;

export const ButtonEdit = styled(GenericButton) `
    width: 200px;

    @media (max-width: ${theme.mediaQueryScreenWidth}){
       width: 150px;
       font-size: ${theme.fontSizeS};
    }
`;

export const UserInfoContainer = styled.div `
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    padding: ${theme.spaceM};

    @media (max-width: ${theme.mediaQueryScreenWidth}){
       //flex-direction: column-reverse;
       flex-direction: column;
    }
`;

export const Title = styled.h2 `
    /* justify-content: center;
    text-align: center; */
    padding: ${theme.spaceDefault};
    color: ${theme.colorTitle};
`
export const AboutGarden = styled.p `
    font-size: ${theme.fontSizeDefault};
    margin-left: ${theme.spaceDefault};

    @media (max-width: ${theme.mediaQueryScreenWidth}){
       font-size: ${theme.fontSizeS};
    }
`;

export const Info = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: ${theme.spaceDefault};
`;

export const Address = styled.p `
    font-size: ${theme.fontSizeDefault};

    @media (max-width: ${theme.mediaQueryScreenWidth}){
       font-size: ${theme.fontSizeS};
    }

`;

export const City = styled(Address) ``;

export const ZipCode = styled(Address) ``;

export const Contact = styled.div `
    /* display: flex;
    justify-content: center; */
    margin-left: ${theme.spaceDefault};
`;

export const Mobile = styled.p `
    font-size: ${theme.fontSizeDefault};

    @media (max-width: ${theme.mediaQueryScreenWidth}){
       font-size: ${theme.fontSizeS};
    }
`;
