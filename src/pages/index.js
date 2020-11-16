import React from 'react'
import { Redirect } from '@reach/router' // highlight-line

const IndexPage = () => <Redirect to={`/home`} /> // highlight-line

export default IndexPage
