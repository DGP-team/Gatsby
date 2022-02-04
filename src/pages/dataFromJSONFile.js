import * as React from 'react'
import GatsbyElementJSON from "../components/GatsbyElement_JSON"
import Layout from '../components/layout'
import { Container, Row } from 'react-bootstrap'

const DataFromJSONFile = () => {
  return (
    <Layout>
      <Container>
        <Row>
          <GatsbyElementJSON/>
        </Row>
      </Container>
    </Layout>
  )
}

export default DataFromJSONFile
