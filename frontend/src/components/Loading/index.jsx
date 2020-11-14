import React from 'react'
import {ExternalContainerLoader, Loader} from '../../style/Loading'

export const Loading = () => {

    return (
        <ExternalContainerLoader>
            <Loader id="loader" />
        </ExternalContainerLoader>
    )
}
