import React, {Fragment} from 'react'
import {Form, Input, Container, InputMiddle, Button} from '../../style/SearchBar'

const SearchBar = () => {
    return (
        <Fragment>
            <Form>
                <Container>
                    <Button>
                    <i class="fas fa-map-marker-alt"></i>
                    </Button>
                    <Input type='text' />
                </Container>

                <Container>
                    <Button>
                    <i class="fas fa-sort"></i>
                    </Button>
                    <Input type='text' />
                </Container>
                
                <Container>
                <Button>
                    <i class="fas fa-search"></i>
                    </Button>
                    <Input type='text' />
                </Container>
            </Form>
        </Fragment>
    )
}

export default SearchBar;
