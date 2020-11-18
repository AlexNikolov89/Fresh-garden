import styled from 'styled-components';
import {theme} from './index';
import React from "react";

export const AboutMainContainer = styled.main`
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    width: 100%;
`;

export const HeaderTitleContainer = styled.h1`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    font-size: ${theme.fontSizeXXXL};
    color: ${theme.colorDarkOliveGreen};
    height: 200px;
    margin-bottom: 100px;
`;

export const FirstSectionContainer = styled.div`
    padding: 30px;
`;

export const FirstDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 450px;
`;

export const FirstLeftContainer = styled.h1`
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: left;
    color: ${theme.colorDarkOliveGreen};
    font-size: ${theme.fontSizeL};
    height: 400px;
    width: 600px;
    
  p {
    font-size: ${theme.fontSizeDefault};
    margin-top: ${theme.spaceM};
    color: ${theme.colorDefaultText};
  }
`;


export const FirstRightContainer = styled.div`
  display: flex;
`;

export const SecondDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
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
    text-align: left;
    font-size: ${theme.fontSizeL};
    color: ${theme.colorDarkOliveGreen};
    height: 400px;
    width: 600px;
    
    p {
      font-size: ${theme.fontSizeDefault};
      margin-top: ${theme.spaceM};
      color: ${theme.colorDefaultText};
    }
`;

export const ThirdDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 450px;
`;

export const ThirdLeftContainer = styled.h1`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
    font-size: ${theme.fontSizeL};
    color: ${theme.colorDarkOliveGreen};
    height: 400px;
    width: 600px;
    
    p {
      margin-top: ${theme.spaceM};
      color: ${theme.colorDefaultText};
      font-size: ${theme.fontSizeDefault};
    }
`;


export const ThirdRightContainer = styled.div`
    display: flex;
`;

export const Image = styled.img`
    height: 300px;
    width: 500px;
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
    font-size: ${theme.fontSizeXL};
    color: ${theme.colorDarkOliveGreen};

    p {
      font-size: ${theme.fontSizeDefault};
      color: ${theme.colorDefaultText};
      margin-top: ${theme.spaceM};
      margin-bottom: ${theme.spaceXL};
    }
`;

export const SubscriptionModelContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-self: center;
    height: 450px;
    width: 1200px;
`;

export const SubscriptionPlanOne = styled.div`
  display: flex;
  flex-direction: column;
  height: 450px;
  width: 300px;
  box-shadow: ${theme.boxShadowGradient};
  border-radius: ${theme.borderRadiusS};
  border: 1px solid ${theme.colorMiddleGreenYellowLight};
`;

export const SubscriptionPlanTwo = styled(SubscriptionPlanOne)``
export const SubscriptionPlanThree = styled(SubscriptionPlanOne)``

export const TopSubPart = styled.div`
  display: flex;
  height: 200px;
  width: 300px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const SubscriptionTitle = styled.h2`
  display: flex;
  width: auto;
  height: auto;
  align-self: center;
  justify-content: center;
  font-size: ${theme.fontSizeL};
  font-weight: ${theme.fontWeightRegular};
  border-bottom: 1px solid ${theme.colorMiddleGreenYellowLight};
  border-bottom-width: medium;
`;

export const SubscriptionPrice = styled.h2`
  display: flex;
  height: auto;
  width: 300px;
  justify-content: center;
  font-size: ${theme.fontSizeL};
`;


export const UpperHalveContainer = styled.div`
  display: flex;
  height: 75px;
  width: 300px;
  justify-content: center;
`;

export const UpperHalveBottomContainer = styled.div`
  display: flex;
  height: 125px;
  width: 250px;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid ${theme.colorDefaultGrey};
  border-bottom-width: thin;
`;

export const BottomSubPart = styled(TopSubPart)`
  flex-direction: column;
  width: 300px;
  height: 250px;
  justify-content: flex-end;
`;

export const BottomHalveUpperContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 180px;
  width: 250px;
`;

export const BottomSubscriptionText = styled.p`
   font-size: 1.4rem;
   font-weight: bold;
  
  i {
    margin-right: 10px;
    color: ${theme.colorMiddleGreenYellowLight};
  }
`;

export const SubscriptionButtonContainer = styled.div`
  display: flex;
  width: 250px;
  height: 50px;
  justify-content: center;
  align-items: center;
  justify-items: flex-end;
`;


export const MeetTheTeamContainer = styled.div`
    display: flex;
    align-content: center;
    flex-direction: column;
    width: 100%;
    margin-bottom: 250px;
`;

export const MeetTheTeamHeader = styled.h1`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    font-size: ${theme.fontSizeXL};
    color: ${theme.colorDarkOliveGreen};
    height: 200px;
    width: 100%;
    margin-top: 60px;
`;

export const TheDevTeam = styled.div`
    display: flex;
    flex-direction: row;
    align-self: center;
    justify-self: center;
    width: 65%;
`

export const AlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 400px;
    height: 250px;
`;

export const AleksandraContainer = styled(AlexContainer)``;
export const SamiContainer = styled(AlexContainer)``;

export const NameContainer = styled.div`
  line-height: 25px;
`;

export const DevName = styled.h2`
    font-size: ${theme.fontSizeM};
    color: ${theme.colorDarkOliveGreen};
`;

export const DevRole = styled.p`
    font-size: ${theme.fontSizeM};
`;


export const UpperProfileContainer = styled.div`
`;

export const RightProfileContainer = styled.div`
   display: flex;
   flex-direction: column;
`;

export const LowerProfileContainer = styled.div`
   display: flex;
   flex-direction: column;
`;

export const PersonalQuote = styled.p`
  font-style: italic;
  font-size: ${theme.fontSizeDefault};
  color: ${theme.colorDefaultText};
  margin-top: 10px;
`;

export const ProfileImage = styled.img`
    height: 100%;
    width: -moz-available;
    width: 100%;
    object-fit: cover;
    border-radius: ${theme.borderRadiusS};
`;

export const ProfileImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 270px;
    height: 250px;
    margin-bottom: 10px;
`;


export const SocialLinks = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-top: 10px;
`;

export const LinkedInLink = styled.a`
    display: flex;
    text-decoration: none;
    font-size: ${theme.fontSizeL};
    margin-right: ${theme.spaceXS};
    color: #2867B2;
       
`

export const GitHubLink = styled.a`
    display: flex;
    text-decoration: none;
    font-size: ${theme.fontSizeL};
    color: #24292e;
`

export const BugContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
`;

export const BugTextContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 700px;
    height: 100px;
`;

export const BugText = styled.div`
    font-size: ${theme.fontSizeM};
    color: ${theme.colorDefaultText};
    margin-left: 40px;
`;

export const BugSubmitContainer = styled.div`
    display: flex;
    height: 100px;
    width: 700px;
    justify-content: center;
    align-items: center;
`;

export const DisclaimerContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 150px;
`;

export const DisclaimerTitle = styled.h2`
    display: flex;
    width: 100%;
    justify-content: center;
    color: ${theme.colorDarkOliveGreen};
    font-size: ${theme.fontSizeXL};
`;

export const DisclaimerText = styled.p`
    display: flex;
    width: 100%;
    justify-content: center;
    color: ${theme.colorDefaultText};
    font-size: ${theme.fontSizeDefault};
    margin-top: ${theme.spaceM};
`;