import React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = () => {

  return (
    <Layout>
      <Seo title="404: Not Found" />
      <h1>Raptured!</h1>
      <p>The page you're looking for cannot be found.</p>
    </Layout>
  )
}

export default NotFoundPage
