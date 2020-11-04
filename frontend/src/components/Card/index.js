import React, {Fragment} from 'react'
import {CardContainer, TopContainer, Image, BottomConatiner, Text, Price, Info} from '../../style/Card';
import Carrot from '../../assets/carot.jpg'

const Card = () => {
    return (
        <Fragment>

            <CardContainer>
                <TopContainer>
                    <Image src={Carrot} />
                </TopContainer>

                <BottomConatiner>
                    <Info>
                        <Text>Fresh Carror</Text>
                        <Price><span>CHF</span> 2.50-</Price>
                    </Info>
                    <i class="fas fa-shopping-basket"></i>
                </BottomConatiner>
            </CardContainer>

        </Fragment>
    )
}

export  default Card;