import styled from 'styled-components';
import {theme} from './index';

export const AboutMainContainer = styled.main`
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-family: ${theme.fontWeightBold};
    height: 100%;
    width: 100%;
`;

export const HeaderAboutContainer = styled.h1`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    font-size: ${theme.fontSizeXL};
    height: 200px;
    margin-bottom: 50px;
`;

export const FirstDiv = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 450px;
`;

export const FirstLeftContainer = styled.h1`
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    font-size: ${theme.fontSizeL};
    height: 400px;
    width: 600px;
    
  p {
    font-size: ${theme.fontSizeS};
    margin-top: ${theme.spaceM};
  }
`;


export const FirstRightContainer = styled.div`
  display: flex;
`;

export const SecondDiv = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 450px;
`;

export const SecondLeftContainer = styled.div`
    display: flex;
`;


export const SecondRightContainer = styled.h1`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    font-size: ${theme.fontSizeL};
    height: 400px;
    width: 600px;
    
    p {
      font-size: ${theme.fontSizeS};
      margin-top: ${theme.spaceM};
    }
`;

export const ThirdDiv = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 450px;
`;

export const ThirdLeftContainer = styled.h1`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    font-size: ${theme.fontSizeL};
    height: 400px;
    width: 600px;
    
    p {
      font-size: ${theme.fontSizeS};
      margin-top: ${theme.spaceM};
    }
`;


export const ThirdRightContainer = styled.div`
    display: flex;
`;

export const Image = styled.img`
    height: 400px;
    width: 600px;
    box-shadow: ${theme.boxShadowGradient};
    border-radius: ${theme.borderRadiusS};
`;

export const SubscriptionMainContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    margin-top: ${theme.spaceXL};
`;

export const TopSubscriptionText = styled.h1`
    display: flex;
    justify-content: center;
    align-content: center;
    text-align: center;
    flex-direction: column;
    font-size: ${theme.fontSizeL};

    p{
      font-size: ${theme.fontSizeS};
      margin-top: ${theme.spaceM};
    }
`;

export const SubscriptionModelContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-self: center;
    height: 400px;
    width: 1200px;
    background-color: #5E5694;
`;

export const SubscriptionPlanOne = styled.div`
  display: flex;
  background-color: #6DDCBD;
  height: 400px;
  width: 300px;
`;

export const SubscriptionPlanTwo = styled(SubscriptionPlanOne)``
export const SubscriptionPlanThree = styled(SubscriptionPlanOne)``

export const MeetTheTeamContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
`;

export const MeetTheTeamHeader = styled.h1`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    font-size: ${theme.fontSizeL};
    height: 200px;
    width: 100%;
`;

export const TheDevTeam = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const AlexContainer = styled.div`
    display: flex;
    width: 100%;
    height: 300px;
    border: solid 1px rgba(0,0,0,0.05); 
`;

export const AleksandraContainer = styled.div`
    display: flex;
    width: 100%;
    height: 300px;
    border: solid 1px rgba(0,0,0,0.05); 
`;

export const SamiContainer = styled.div`
    display: flex;
    width: 100%;
    height: 300px;
    border: solid 1px rgba(0,0,0,0.05); 
`;

export const LeftProfileContainer = styled.div`
    display: flex;
    height: 100%; 
    width: 319px;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-direction: column;
    border-right: 1px solid rgba(0,0,0,0.05); 
    
    h2 {
      font-size: ${theme.fontSizeM};
      margin-top: ${theme.spaceS};
    }
    
    p {
      font-size: ${theme.fontSizeS}; 
      color: ${theme.colorDefaultGrey};   
    }
`;

export const RightProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: auto;
    justify-content: space-evenly;
    margin-left: ${theme.spaceM};
    
    h4 {
      font-size: ${theme.fontSizeS};
      color: ${theme.colorDefaultGrey};
    }
    
    p {
      font-size: ${theme.fontSizeM};
    }
`;

export const ProfileImage = styled.img`
    display: flex;
    justify-self: center;
    align-self: center;
    height: 170px;
    width: 170px;
    border-radius: 50%;
`;


export const SocialLinks = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`;

export const LinkedInLink = styled.a`
    display: flex;
    text-decoration: none;
    font-size: ${theme.fontSizeL};
    margin-right: ${theme.spaceS};
    color: #2867B2;
       
`

export const GitHubLink = styled.a`
    display: flex;
    text-decoration: none;
    font-size: ${theme.fontSizeL};
    color: #24292e;
`