import React, {Fragment, useState} from 'react'

const Slides = () => {
    const location = useLocation();
    const history = useHistory();
    const [indexer, setIndexer] = useState(1)

    return (
        <Fragment>
            <SlidesContainer>
                {location.pathname === '/slides/1' && <Slide></Slide>}
            </SlidesContainer>
            <ButtonsContainer>
                <Previous to={`/slides/${indexer}`} onClick={() => {if(indexer > 1) setIndexer(indexer - 1)}}><i className="fas fa-arrow-left"/></Previous>
                <Page to={'/shop'}>Logo pending</Page>
                <Next to={`/slides/${indexer}`} onClick={() => setIndexer(indexer + 1)}><i className="fas fa-arrow-right"/></Next>
            </ButtonsContainer>
        </Fragment>
    )
}
export  default Slides;
