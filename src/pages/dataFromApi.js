import * as React from 'react'
import GatsbyElementAPI from "../components/GatsbyElement_API"
import Layout from '../components/layout'
import { Container, Row } from 'react-bootstrap'

const DataFromApi = () => {
  return (
    <Layout>
      <Container>
        <Row>
          <GatsbyElementAPI/>
        </Row>
      </Container>
    </Layout>
  )
}

export default DataFromApi
