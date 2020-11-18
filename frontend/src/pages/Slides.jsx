import React, {Fragment, useState} from 'react'
import {ButtonsContainer, Next, Page, Previous, Slide, SlidePageContainer, SlidesContainer} from "../style/Slides";
import {ReactComponent as Logo} from '../assets/svgs/logo.svg'
import {useHistory, useLocation} from "react-router-dom";
import slide1 from '../assets/slides/1slide.png'
import slide2 from '../assets/slides/2slide.png'
import slide3 from '../assets/slides/2slide.png'

const Slides = () => {
    const location = useLocation();
    const history = useHistory();
    const [indexer, setIndexer] = useState(1)

    return (
        <Fragment>
            <SlidePageContainer>
                <SlidesContainer>
                    {indexer === 1 && <Slide src={slide1}/>}
                    {indexer === 2 && <Slide src={slide2}/>}
                    {indexer === 3 && <Slide src={slide3}/>}
                </SlidesContainer>
                <ButtonsContainer>
                    <Previous onClick={() => {if(indexer > 1) setIndexer(indexer - 1)}}><i className="fas fa-arrow-left"/></Previous>
                    <Page onClick={() => history.push('/shop')}><Logo /></Page>
                    <Next onClick={() => setIndexer(indexer + 1)}><i className="fas fa-arrow-right"/></Next>
                </ButtonsContainer>
            </SlidePageContainer>
        </Fragment>
    )
}
export  default Slides;
