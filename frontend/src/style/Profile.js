import styled from 'styled-components';
import {theme} from './index'
import {GenericButton, StandardButton} from './Buttons'


export const BottomContainer = styled.div `
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: ${theme.colorBackgroundColor};
    padding-bottom: ${theme.spaceDefault};
    min-width: 360px;
    
     @media (max-width: 360px){
       width: 100%;
       padding: 0;
    }
    
    @media (max-width: ${theme.mediaQueryScreenWidth}){
       width: 100%;
       //padding-left: ${theme.spaceXS};
    }
`;

export const TitleContainer = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${theme.colorBackgroundColor};
  
   @media (max-width: 360px){
       width: 100%; 
      }  
`;

export const MainTitle = styled.h2 `
 font-size: ${theme.fontSizeXXL};
 color: ${theme.colorTitle};
 padding 20px; 
 
  @media (max-width: 360px){
       width: 200px;
      } 
    
    @media (max-width: ${theme.mediaQueryScreenWidth}){
       font-size:  ${theme.fontSizeL};
       padding: 10px 100px;
    } 
`;
export const LogOut = styled(StandardButton) `
  @media (max-width: 360px){
       width: 100px;
       font-size: 12px;
    }
`;

export const UserProfileContainer = styled.div `
    background-color: #fff;
    width: 40%;
    height: 350px;
    display: flex;
    border-radius: ${theme.borderRadiusDefault};
    box-shadow: ${theme.boxShadowLight};
    
     @media (max-width: 360px){
       width: 100%;
    }
    
    @media (max-width: ${theme.mediaQueryScreenWidth}){
       width: 80%;
    }
    
`;

export const AvatarContainer = styled.div `
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 0 20px;
   
  @media (max-width: 360px){
       display: flex;
       flex-direction: row;
    }

    @media (max-width: ${theme.mediaQueryScreenWidth}){
       width: 40%;
    }
`;

export const Avatar = styled.img `
    width: 140px;
    border-radius: 50%;
    
   
    @media (max-width: ${theme.mediaQueryScreenWidth}){
       width: 80%; 
    }
`;

export const Name = styled.p `
    font-size: ${theme.fontSizeDefault};
    padding-top: ${theme.spaceDefault};
    font-weight: bold;
    color: ${theme.colorDefaultText};
    padding-bottom: 40px;
    
    @media (max-width: 360px){
       font-size: ${theme.fontSizeS};
    }
    
    @media (max-width: ${theme.mediaQueryScreenWidth}){
       font-size: ${theme.fontSizeM}
    }
`;

export const Email = styled(Name) `
padding-bottom: ${theme.spaceM};
font-weight: normal;
font-size: ${theme.fontSizeS};

@media (max-width: ${theme.mediaQueryScreenWidth}){
       font-size: ${theme.fontSizeS}
    }
 `;

export const EmailContainer = styled.div `
 
`;

export const ButtonEdit = styled(StandardButton) `
   font-size: ${theme.fontSizeS};

    @media (max-width: ${theme.mediaQueryScreenWidth}){
       width: 100px;
       font-size: ${theme.fontSizeXS};
    }
    
    @media (max-width: 360px){
       font-size: ${theme.fontSizeXS};
    }
    
`;

export const UserInfoContainer = styled.div `
    height: 100%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    padding: ${theme.spaceS} 0;

    @media (max-width: ${theme.mediaQueryScreenWidth}){
       // flex-direction: column-reverse;
       // flex-direction: column;
       padding: 15px 0;
    }
    
   @media (max-width: 360px){
       padding-left: 15px; 
       width: 100%;
    }
`;

export const TitleGarden = styled.h2 `
    padding: 10px 0;
    color: ${theme.colorTitle};
    
     @media (max-width: 360px){
      padding: 9px 0;
      font-size: ${theme.fontSizeS};
      width: 100%;
    }
`;

export const AboutGarden = styled.div `
    margin-left: ${theme.spaceDefault};
    height: 30%;
    width: 80%;

    @media (max-width: ${theme.mediaQueryScreenWidth}){
       font-size: ${theme.fontSizeS};
       
    }
    
    @media (max-width: 360px){
      margin: 0;
      font-size: ${theme.fontSizeS} 
    }
`;

export const AboutText = styled.p `
 font-size: ${theme.fontSizeS}
`;

export const TitleLocation = styled(TitleGarden) `
`;


export const Info = styled.div `
    margin-left: ${theme.spaceDefault};
    height: 83px;
   padding: 10px 0;
    
    @media (max-width: ${theme.mediaQueryScreenWidth}){
        width: 80%;
        padding: 0;
        margin: 0;
    }
   
`;

export const AddressInfo = styled.div `
 display: flex;
 flex-direction: row;
`;

export const TelContainer = styled.div ``;

export const Address = styled.p `
    font-size: ${theme.fontSizeDefault};

    @media (max-width: ${theme.mediaQueryScreenWidth}){
       font-size: ${theme.fontSizeS};
    }

`;

export const City = styled(Address) ``;

export const ZipCode = styled(Address) `
 padding-right: 30px; 
`;

export const Contact = styled.div `
    margin-left: ${theme.spaceDefault};
    
    @media (max-width: 360px) {
    margin: 0;
    padding-top: 15px;
    }
`;

export const Mobile = styled.p `
    font-size: ${theme.fontSizeS};
   
    @media (max-width: ${theme.mediaQueryScreenWidth}){
       font-size: ${theme.fontSizeS};
    }
`;

export const TitleTel = styled(TitleGarden) `
  @media (max-width: ${theme.mediaQueryScreenWidth}){
       
    }
`;

export const CardContainer = styled.div `
  // display: flex;
  // flex-direction
  //
  // @media (max-width: 360px){
  //    
  //   }
`;
