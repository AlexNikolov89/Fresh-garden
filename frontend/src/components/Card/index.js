import React, {Fragment} from 'react'
import {
    CardContainer, TopContainer,
    Image, Text, Price, Info, Date, Wrapp, KG, BottomContainer
} from '../../style/Card';
import Carrot from '../../assets/images/carot.jpg'
import { useState } from 'react';

const Card = () => {

    const [count, setCount] = useState(0);
    return (
        <Fragment>
            <CardContainer>
                <TopContainer>
                    <Image src={Carrot} />
                </TopContainer>

                <BottomContainer>
                    <Info>
                        <Text>Thurgauer Rüebli</Text>

                        <Wrapp>
                            <Price><span>CHF</span> 3.95-</Price>
                            <KG>3.95 / Kg</KG>
                        </Wrapp>

                        <Date>Expiry Date</Date>
                        <i class="fas fa-shopping-basket"></i>
                    </Info>
                </BottomContainer>
            </CardContainer>
        </Fragment>
    )
}

export  default Card;