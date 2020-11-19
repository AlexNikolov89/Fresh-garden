import React, {Fragment} from 'react';

import {useHistory, useLocation} from "react-router-dom";
import {
    CenterContainer,
    ConstructionContainer,
    GoBackButton,
    Icons, Message,
    MessageContainer
} from "../../style/UnderConstruction";

const UnderConstruction = ({text}) => {
    const history = useHistory();
    const location = useLocation();

    return (
        <Fragment>
            <ConstructionContainer>
                <CenterContainer>
                    <Icons>
                        <i className="fas fa-tools"/>
                        <i className="fas fa-file-code"/>
                    </Icons>
                    <MessageContainer>
                        <i className="fas fa-exclamation-triangle"/>
                        <Message>{text}</Message>
                        <GoBackButton onClick={() => history.goBack()}>Previous</GoBackButton>
                    </MessageContainer>
                </CenterContainer>
            </ConstructionContainer>
        </Fragment>
    )
}
export default UnderConstruction;
