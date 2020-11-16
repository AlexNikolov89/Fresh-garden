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
    padding-bottom: ${theme.spaceDefault};
    
     @media (max-width: 360px){
       width: 100%;
       padding-left: ${theme.spaceXS};
    }
    
    @media (max-width: ${theme.mediaQueryScreenWidth}){
       width: 100$;
       //padding-left: ${theme.spaceXS};
    }
`;

export const TitleContainer = styled.div `
  padding-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${theme.colorBackgroundColor};
  display: flex;
  
   @media (max-width: 360px){
       width: 100%;
       
`;

export const MainTitle = styled.h2 `
 font-size: ${theme.fontSizeXXL};
 color: ${theme.colorTitle};
 padding:0 550px;  
 
  @media (max-width: 360px){
       font-size: ${theme.fontSizeXL};
       padding: 0 50px;;
    }   
    
    @media (max-width: ${theme.mediaQueryScreenWidth}){
       font-size:  ${theme.fontSizeL};
       padding: 0 100px;
    } 
`;

export const LogOut = styled(GenericButton) `
 width: 170px;
 height: 40px;
 
  @media (max-width: 360px){
       width: 100px;
       //padding-left: ${theme.spaceXS};
    }
    
    @media (max-width: ${theme.mediaQueryScreenWidth}){
       width: 100px;
    }
 
`;

export const UserProfileContainer = styled.div `
    background-color: #fff;
    width: 50%;
    height: 350px;
    display: flex;
    border-radius: ${theme.borderRadiusDefault};
    margin-top: ${theme.controlHeightS};
    box-shadow: ${theme.boxShadowLight};
    
     @media (max-width: 360px){
       width: 100%;
    }
    
    @media (max-width: ${theme.mediaQueryScreenWidth}){
       width: 80%;
    }
    
`;

export const AvatarContainer = styled.div `
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 0 20px;
    
  @media (max-width: 360px){
       width: 100%;
       //padding-left: ${theme.spaceXS};
    }

    @media (max-width: ${theme.mediaQueryScreenWidth}){
       width: 30%;
       
    }
`;

export const Avatar = styled.img `
    width: 140px;
    border-radius: 50%;
    
    @media (max-width: 360px){
       width: 100%;
       //padding-left: ${theme.spaceXS};
    }
    
    @media (max-width: ${theme.mediaQueryScreenWidth}){
       width: 80%;
       
    }
`;

export const Name = styled.p `
    font-size: ${theme.fontSizeDefault};
    padding-top: ${theme.spaceDefault};
    font-weight: bold;
    
    @media (max-width: ${theme.mediaQueryScreenWidth}){
       font-size: ${theme.fontSizeS};
    }
    
    @media (max-width: ${theme.mediaQueryScreenWidth}){
       font-size: ${theme.fontSizeM}
    }
`;

export const Email = styled(Name) `
padding-bottom: ${theme.spaceM};
font-weight: normal;

@media (max-width: ${theme.mediaQueryScreenWidth}){
       font-size: ${theme.fontSizeS}
    }
 `;

export const ButtonEdit = styled(GenericButton) `
    width: 150px;

    @media (max-width: ${theme.mediaQueryScreenWidth}){
       width: 100px;
       font-size: ${theme.fontSizeXS};
    }
    
    @media (max-width: 360px){
       //width: 100%;
       width: 100px;
       height: 30px;
       font-size: ${theme.fontSizeXS};
    }
    
`;

export const UserInfoContainer = styled.div `
    height: 100%;
    width: 100%;
    margin-left: 20px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    padding: ${theme.spaceM};

    @media (max-width: ${theme.mediaQueryScreenWidth}){
       // flex-direction: column-reverse;
       // flex-direction: column;
       padding: 15px 0;
       align-items: center;
       
    }
    
   @media (max-width: 360px){
       width: 100%;
       padding: 0;
    }
`;

export const Title = styled.h2 `
    /* justify-content: center;
    text-align: center; */
    padding: 15px;
    color: ${theme.colorTitle};
    
     @media (max-width: 360px){
      padding: 9px 0;
      font-size: ${theme.fontSizeDefault} 
    }
    
    @media (max-width: ${theme.mediaQueryScreenWidth}){
      padding: 10px 0;
      margin-right: 110px;
      border: 1px solid green;
    }
`
export const AboutGarden = styled.p `
    font-size: ${theme.fontSizeDefault};
    margin-left: ${theme.spaceDefault};
    height: 63px;
    width: 80%;
    border: 1px solid red;

    @media (max-width: ${theme.mediaQueryScreenWidth}){
       font-size: ${theme.fontSizeS};
       
    }
    
    @media (max-width: 360px){
      margin: 0;
      font-size: ${theme.fontSizeS} 
    }
`;

export const Info = styled.div `
    // display: flex;
    // flex-direction: row;
    // justify-content: space-between;
    // // margin-left: ${theme.spaceDefault};
    height: 83px;
    
    @media (max-width: ${theme.mediaQueryScreenWidth}){
        width: 75%;
    }
   
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
    margin-left: ${theme.spaceDefault};
`;

export const Mobile = styled.p `
    font-size: ${theme.fontSizeDefault};

    @media (max-width: ${theme.mediaQueryScreenWidth}){
       font-size: ${theme.fontSizeS};
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
