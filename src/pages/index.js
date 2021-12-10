import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Jumproup from "../videos/jumproup.mp4"
import instagramSection from "../components/instagramSection"

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

          

          <h2>Contácto</h2>
            <section class="spotlight">
                <a href="https://wa.me/+54911341287123" alt="Ups no anda el linkmandame un whatsapp al 1157320253 " target="_blank" rel="noopener noreferrer" class="button">
            Chat de Whatsapp</a>
            
            </section>
			
        </section>

</Layout>
)

export default IndexPage