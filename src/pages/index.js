import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Jumproup from "../videos/jumproup.mp4"


import Layout from "../components/layout"
import Seo from "../components/seo"


const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
        <section class="showcase">

          <div class="content">
                <h1>Cristian Molinas</h1>
                <h3>Personal trainer</h3>
                <a href="#about" class="btn">Contáctame</a>
          </div>
        </section>

        <section class="video-container">
        <div>
            <video autoPlay loop muted
            style={{
                position: "absolute",
                width: "100%",
                left: "50%",
                top: "50%",
                height: "100%",
                objectfit: "cover",
                tranform: "translate(-50%, -50%)",
                zindex: "-1",

            }}
            >
            <source src={Jumproup} type="video/mp4" />
            </video>
        </div>
        </section>

        <section id="about">
          <h1>Contácto</h1>

          <h2>Mis redes</h2>
			
        </section>

</Layout>
)

export default IndexPage
