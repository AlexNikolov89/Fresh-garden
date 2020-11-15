import React, {Fragment, useState, useRef} from 'react';
import {AddProductContainer, TopContainer, Image, Slogan, BottomConatiner,
        AddCardForm, CardOverview, Form, Unit, Dropdown, Option, Select, ButtonDelivery, ButtonPickUp, DropdownContainer, DropDownHeader,
        Left, Right, DropDownListContainer, DropdownList, List, Price,
        Delivery, Button, ButtonContainer, SliderConatiner, Input,
        CategoryContainer, CategoryLabel, Vegetable, Fruit, Label, Slider,
        Upload, UploadLabel, ButtonUpload, Description, DescriptionLabel, TextArea, Title, Submit, UploadImage} from '../style/Addproduct'
import Footer from '../components/Footer/index.js'
import Header from '../components/Header/index';
import Card from '../components/Card/index.js'
import {useSelector} from "react-redux";


const Addproduct = () => {
    // TODO build here a fetch function and in the store the userAction, userReducer for the "author" object
    // const author = useSelector(state => state.userReducer.userInfo)

    const [product, setProduct] = useState({
        name: 'Sweet Sugar Pumpkin',
        location: 'Rapperswil-Jona',
        description: '',
        price: "12.90",
        selectedOption: '',
        image: null,
        units: 'piece',
        author: {
            first_name: 'Fred',
            last_name: 'Willis',
        },
    })

    const [category, setCategory] = useState('')
    const [changeIcon, setChangeIcon] = useState('');
    const [value, setValue] = useState([0, 20]);
    const [submit, setSubmit] = useState(false);

    const changeHandler = e => {
        setProduct({...product, [e.target.name]: e.target.value});
        //setProduct({...product, [e.target.name]: e.target.files[0]})
    }
    const handleSubmit = e => {
        e.preventDefault();
        setSubmit(true);
    }
    const updateRange = (e, data) => {
        setValue(data);
    }
    // const onChangeImage = e => {
    //     setImage(URL.createObjectURL(e.target.files[0]));
    // }
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
                    <AddCardForm onChange={handleSubmit}>
                        <Title>Want to sell your Vegetables?</Title>
                        <Form>
                            <Input
                                type='text'
                                placeholder='Sweet Sugar Pumpkin'
                                required='Required'
                                name='name'
                                onChange={changeHandler}/>
                            <Input
                                type='text'
                                placeholder='Rapperswil-Jona, St.Gallen'
                                name='location'
                                onChange={changeHandler}/>
                        </Form>
                        <Description>
                            <DescriptionLabel>Describe your products and how grew them...</DescriptionLabel>
                            <TextArea
                                type='text'
                                name='description'
                                placeholder={'This year my sweet pumpkins (Pumpkin Field Trip F1) grew up to 5kg and are perfect for cakes and soups...'}
                                onChange={changeHandler}
                            />
                        </Description>
                        <Unit>
                            <Label>Price</Label>
                            <Price
                                type='number'
                                step=".05" min='0'
                                placeholder={'12.90'}
                                name='price'
                                onChange={changeHandler}
                                required={'Required'} />
                            <Label>CHF</Label>
                            <Dropdown>
                                <Select name='units' onChange={changeHandler}>
                                    <Option value={'piece'}>pc.</Option>
                                    <Option value={'kg'}>Kg</Option>
                                </Select>
                            </Dropdown>
                        </Unit>
                        <ButtonContainer>
                            <ButtonDelivery onClick={() => setChangeIcon("delivery")}>Delivery</ButtonDelivery>
                            <ButtonPickUp onClick={() => setChangeIcon("pickup")}>Pick up</ButtonPickUp>
                        </ButtonContainer>
                        <SliderConatiner>
                            <Left>1.5 km</Left>
                            <Slider
                                type='range'
                                min={0.5} max={50}
                                value={value}
                                onChange={updateRange}/>
                            <Right>50 km</Right>
                        </SliderConatiner>
                        {/*<CategoryLabel>Select category</CategoryLabel>*/}
                        <CategoryContainer required={'Required'}>
                            {/*TODO make an "other" option for mushrooms for example*/}
                            <Vegetable onClick={() => setCategory('vegetable')}>Vegetable</Vegetable>
                            <Fruit onClick={() => setCategory('fruit')}>Fruit</Fruit>
                        </CategoryContainer>
                        <Upload>
                            <UploadLabel>Add product image</UploadLabel>
                            <UploadImage type='file'
                            name='image'
                            onClick={changeHandler}
                            required='Required'
                            />
                        </Upload>
                        <Submit value='Submit'>Confirm</Submit>
                        {/*TODO add expiration date input*/}
                    </AddCardForm>
                    <CardOverview>
                        {/*TODO try do everything in variable "product" with "setProduct(...product, [variableName]: newValue"*/}
                        {/*TODO with this approach you only have to give the "product" as props - nothing else*/}
                        <Card product={product} changeIcon={changeIcon} category={category}/>
                    </CardOverview>
                </BottomConatiner>
            </AddProductContainer>
            <Footer />
        </Fragment>
    )
}
export default Addproduct;
