import React, {Fragment, useState, useRef} from 'react';
import {AddProductContainer, TopContainer, Image, Slogan, BottomConatiner,
        AddCardForm, CardOverview, Form, Unit, Dropdown, Option, Select, DropdownContainer, DropDownHeader,
        DropDownListContainer, DropdownList, List, Price,
        Delivery, Button, ButtonContainer, SliderConatiner, Input,
        CategoryContainer, CategoryLabel, Vegetable, Fruit, Label, Slider,
        Upload, UploadLabel, ButtonUpload, Description, DescriptionLabel, TextArea, Title, Submit, UploadImage} from '../style/Addproduct'
import Footer from '../components/Footer/index.js'
import Header from '../components/Header/index';
import Card from '../components/Card/index.js'


const Addproduct = () => {

    const options = ['Kg', 'Pc.']
    const [isActive, setIsActive] = useState(false);
    const [selectedOption, setSelectOption] = useState(null);
    const [value, setValue] = useState([0, 20]);
    const [image, setImage] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
    }

    const onClick = () => setIsActive(!isActive);

    const onOptionClicked = value => () => {
        setSelectOption(value);
        setIsActive(false);
        console.log(selectedOption);
    }

    const updateRange = (e, data) => {
        setValue(data);
    }

    const onChangePicture = e => {
        setImage(URL.createObjectURL(e.target.files[0]));
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
                        <Title>Upload your vegetable and fruits</Title>

                        <Form>
                            <Input type='text' placeholder=' Add your product name' />
                            <Input type='text' placeholder='Give your location' />
                        </Form>

                        <Description>
                            <DescriptionLabel>Add some desription</DescriptionLabel>
                            <TextArea  />
                        </Description>

                        <Unit>
                            <Label>Price</Label>
                            <Price type='text' min='0' max='4' />
                            <Label>CHF</Label>

                            <Dropdown>
                                <Select value={isActive} onChange={(e) => {setIsActive(e.target.value)}}>
                                    <Option value='Kg'>Kg</Option>
                                    <Option value='Pc'>Pc</Option>
                                </Select>
                            </Dropdown>
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

                        <Upload>
                            <UploadLabel>Add product image</UploadLabel>
                            <UploadImage type='file' onChange={onChangePicture} />
                        </Upload>

                        <Submit value='Submit'>Confirm</Submit>

                    </AddCardForm>
                    {/*<AddCardForm>
                        <Title>Advertise Your product</Title>
                        <Form onSubmit={handleSubmit}>
                            <Input type='text' placeholder='Name...' onChange={(e) => setName(e.target.value)} />
                            <Input type='text' placeholder='name@email.com...' onChange={(e) => setEmail(e.target.value)} />
                            <Input type='text' placeholder='z.b Zurich..' onChange={(e) => setLocation(e.target.value)} />

                            <Unit>
                                <Label>Price:</Label>
                                <Price type='text' min='0' max='4' />
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

                            <Upload>
                                <UploadLabel>Add product image</UploadLabel>
                                <UploadImage type='file' onChange={onChangePicture} />
                                <ButtonUpload>Upload</ButtonUpload>
                            </Upload>

                            <Description>
                                <DescriptionLabel>Add some desription</DescriptionLabel>
                                <TextArea  />
                            </Description>

                            <Submit value='Submit'>Confirm</Submit>
                        </Form>
                        
                                            </AddCardForm>*/}
                    
                    <CardOverview>
                        <Card />
                    </CardOverview>
                </BottomConatiner>
            
            </AddProductContainer>
            <Footer />
        </Fragment>
    )
}

export default Addproduct;
