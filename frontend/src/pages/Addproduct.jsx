import React, {Fragment, useState, useRef} from 'react';
import {AddProductContainer, TopContainer, Image, Slogan, BottomConatiner,
        AddCardForm, CardOverview, Form, Unit, DropdownContainer, DropDownHeader,
        DropDownListContainer, DropdownList, List, Price,
        Delivery, Button, ButtonContainer, SliderConatiner, Input,
        CategoryContainer, CategoryLabel, Vegetable, Fruit, Label, Slider} from '../style/Addproduct'
import Background from '../assets/img-five.jpg'
import ProductImg from '../assets/img-one.jpg'
import Header from '../components/Header/index';
import Card from '../components/Card/index.js'
import styled from 'styled-components';

const Addproduct = () => {

    const options = ['Kg', 'Pc.']
    const [isActive, setIsActive] = useState(false);
    const [selectedOption, setSelectOption] = useState(null);
    const [value, setValue] = useState([0, 20])

    const onClick = () => setIsActive(!isActive);

    const onOptionClicked = value => () => {
        setSelectOption(value);
        setIsActive(false);
        console.log(selectedOption);
    }

    const updateRange = (e, data) => {
        setValue(data);
    }

    return (
        <Fragment>

            <AddProductContainer>

                <TopContainer>
                    <Image>
                        <Slogan>Homegrown. Fresh. Earthy.</Slogan>
                    </Image>
                </TopContainer>

                <Header />

                <BottomConatiner>
                    <AddCardForm>
                        <Form>
                            <Input type='text' placeholder='Name...' />
                            <Input type='text' placeholder='name@email.com...' />
                            <Input type='text' placeholder='z.b Zurich..' />

                            <Unit>
                                <Label>Price:</Label>
                                <Price type='number' min='0' max='4' />
                                <Label>CHF</Label>
                                <DropdownContainer>
                                    <DropDownHeader onClick={onClick}>
                                   {selectedOption || 'Units'}
                                    </DropDownHeader>
                                    {isActive && (
                                    <DropDownListContainer>
                                        <DropdownList>
                                            {options.map(option => (
                                                <List onClick={onOptionClicked(option)} key={Math.random()}>
                                                    {option}
                                                </List>
                                            ))}
                                        </DropdownList>
                                    </DropDownListContainer>
                                )}
                                </DropdownContainer>
                            </Unit>
                            
                            <Delivery>Delivery options</Delivery>
                            <ButtonContainer>
                                <Button>Delivery</Button>
                                <Button>Pick up</Button>
                            </ButtonContainer>
                            
                            <SliderConatiner>
                                <Slider type='range' min={0} max={50} value={value} onChange={updateRange} />
                            </SliderConatiner>

                                <CategoryLabel>Select category</CategoryLabel>
                            <CategoryContainer>
                                <Vegetable>Vegetable</Vegetable>
                                <Fruit>Fruit</Fruit>
                            </CategoryContainer>
                        </Form>
                    </AddCardForm>

                    <CardOverview>

                    </CardOverview>
                </BottomConatiner>
            
            </AddProductContainer>
            
        </Fragment>
    )
}

export default Addproduct;
