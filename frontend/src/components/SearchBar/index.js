import React, {Fragment} from 'react'
import {Form, Input, InputStart, Middle, InputEnd, Button} from '../../style/SearchBar'

const SearchBar = () => {
    return (
        <Fragment>
            <Form>
                <InputStart type='text' />
                <Middle type='text' />
                <InputEnd type='text' />
               {/* <Input type='text' value='' placeholder='Search...' />
                <Button> <i class="fas fa-search" /></Button>  */}
            </Form>
        </Fragment>
    )
}

export default SearchBar;
