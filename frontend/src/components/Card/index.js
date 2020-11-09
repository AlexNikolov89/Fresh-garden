import React, {Fragment} from 'react'
import {CardContainer, TopContainer,
         Image, BottomConatiner,
         Text, Price, Info, Date, Wrapp, KG} from '../../style/Card';
import Carrot from '../../assets/carot.jpg'
import { useState } from 'react';

const Card = () => {

    const [count, setCount] = useState(0);
    const countClick = () => setCount(count +1)
    return (
        <Fragment>

            <CardContainer>
                <TopContainer>
                    <Image src={Carrot} />
                </TopContainer>

                <BottomConatiner>
                    <Info>
                        <Text>Fresh Carror</Text>

                        <Wrapp>
                            <Price><span>CHF</span> 3.95-</Price>
                            <KG>3.95/1Kg</KG>
                        </Wrapp>

                        <Date>Expiry Date</Date>
                        <i class="fas fa-shopping-basket"></i>
                    </Info>
                </BottomConatiner>
            </CardContainer>

        </Fragment>
    )
}

export  default Card;