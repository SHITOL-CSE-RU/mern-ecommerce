import React from 'react'
import Layout from '../../components/Layout'
import { Jumbotron } from 'react-bootstrap'

/**
* @author
* @function Home
**/

const Home = (props) => {
    return (
        <Layout>
            <Jumbotron>
                <h1> Welcome to Admin Dashboard</h1>
            </Jumbotron>
        </Layout>
    )

}
export default Home