import React, {Fragment} from 'react'
import {Form, Input, Button} from '../../style/SearchBar'

const SearchBar = () => {
    return (
        <Fragment>
            <Form>
                <Input type='text' value='' placeholder='Search...' />
                <Button> <i class="fas fa-search" /></Button>
            </Form>
        </Fragment>
    )
}

export default SearchBar;
