import React, {Fragment} from 'react'

const Slides = () => {
    const location = useLocation();
    const history = useHistory();
    const [indexer, setIndexer] =
    return (
        <Fragment>
            <SlidesContainer>
                your bullshit
            </SlidesContainer>
            <ButtonsContainer>
                <Previous onClick={history.goBack}><i className="fas fa-arrow-left"></i></Previous>
                <Page>Logo pending</Page>
                <Next><i className="fas fa-arrow-right"></i></Next>
            </ButtonsContainer>
        </Fragment>
    )
}
export  default Slides;
