import React, {Fragment, useState, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useHistory, useLocation} from "react-router-dom";
import {AddProductContainer, TopContainer, Image, Slogan, BottomConatiner,
        AddCardForm, CardOverview, Form, Unit, Dropdown, Option, Select, ButtonDelivery, ButtonPickUp, DropdownContainer, DropDownHeader,
        Left, Right, DropDownListContainer, DropdownList, List, Price,
        Delivery, Button, ButtonContainer, SliderConatiner, Input,
        CategoryContainer, CategoryLabel, Vegetable, Fruit, Label, Slider,
        Upload, UploadLabel, ButtonUpload, Description, DescriptionLabel, TextArea, Title, Submit, UploadImage} from '../style/Addproduct'
import Footer from '../components/Footer/index.js'
import Header from '../components/Header/index';
import Card from '../components/Card/index.js'
import {authAction} from '../store/actions/authAction'




const Addproduct = () => {
    const [product, setProduct] = useState({
       name: '',
       location: '',
       description: '',
       price: '',
       image: '',
       selectedOption: '',
       image: null,
    })
    const [category, setCategory] = useState('')
    const [changeIcon, setChangeIcon] = useState('');
    const [unit, setUnit] = useState('')
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
                            <Input type='text'
                             placeholder='Name your vegetables'
                             required='Required'
                             name='name'
                             onChange={changeHandler} />
                            <Input type='text'
                             placeholder='Give your location'
                             name='location'
                              onChange={changeHandler}
                               />
                        </Form>
                        <Description>
                            <DescriptionLabel>Describe your products and how grew them...</DescriptionLabel>
                            <TextArea type='text' 
                            name='description' 
                            onChange={changeHandler} 
                            />
                        </Description>
                        <Unit>
                            <Label>Price</Label>
                            <Price type='number' value="0" step=".5" min='0'
                            name='price' 
                            onChange={changeHandler}   required />
                            <Label>CHF</Label>
                            <Dropdown>
                                <Select>
                                    <Option onClick={() => setUnit('kg')}>Kg</Option>
                                    <Option onClick={() => setUnit('pc')}>pc.</Option>
                                </Select>
                            </Dropdown>
                        </Unit>
                        <ButtonContainer>
                            <ButtonDelivery onClick={() => setChangeIcon("delivery")}>Delivery</ButtonDelivery>
                            <ButtonPickUp onClick={() => setChangeIcon("pickup")}>Pick up</ButtonPickUp>
                        </ButtonContainer>
                        <SliderConatiner>
                            <Left>1.5Km</Left>
                            <Slider type='range' min={1.5} max={50} value={value} onChange={updateRange} />
                            <Right>50Km</Right>
                        </SliderConatiner>
                        <CategoryLabel>Select category</CategoryLabel>
                        <CategoryContainer required>
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
                        <Submit value='Submit'
                        onClick={e =>  window.location.href='/shop'}
                        >
                        Confirm
                        </Submit>
                    </AddCardForm>
                    <CardOverview>
                        <Card product={product} changeIcon={changeIcon} unit={unit} category={category} /> 
                    </CardOverview>
                </BottomConatiner>
            </AddProductContainer>
            <Footer />
        </Fragment>
    )
}
export default Addproduct;