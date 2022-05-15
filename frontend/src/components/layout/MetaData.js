import React from 'react'
import { Helmet } from 'react-helmet'

const MetaData = ({ title }) => {
    return (
        <Helmet>
            <title>{`${title} - Online Pizza`}</title>
        </Helmet>
    )
}

export default MetaData