import React, {Fragment} from 'react'
import Card from "../Card";


const PromotedProducts = () => {
    return (

        <Fragment>
            <Card promoted={true} />
            <Card promoted={true} />
        </Fragment>
    )
}

export default PromotedProducts;
