import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Card from "../components/card"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Container from "../components/container"
const detail = {
  icon:"https://dl.airtable.com/.attachments/7dcf5d007c785cb8274f4bc117089040/263fb82a/Screenshot2021-05-31at12.20.31AM.png",
  heading: "Web Scraper API",
  description:"The Webscraper API can scrape (almost) any web page. It includes the whole package of proxy",
  category:"Data Access"

}
const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Container>
      <Card data={detail}/>
      <Card data={detail}/>
      <Card data={detail}/>
      <Card data={detail}/>
      <Card data={detail}/>
      <Card data={detail}/> 
    </Container>
    
  </Layout>
)

export default IndexPage
