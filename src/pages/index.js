import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <section class="showcase">
			<div class="video-container">
				<video src="" autoplay muted loop></video>
			</div>
			<div class="content">
				<h1>Shoot For The Stars</h1>
				<h3>Full screen video landing page</h3>
				<a href="#about" class="btn">Read More</a>
			</div>
		</section>

		<section id="about">
			<h1>About</h1>
			<p>
				This is a landing page with a full screen video background. Feel free to
				use this landing page in your projects. keep adding sections, change the
				video, content , etc
			</p>

			<h2>Follow Me On Social Media</h2>

			<div class="social">
			<a href="https://twitter.com/traversymedia" target="_blank"><i class="fab fa-twitter fa-3x"></i></a>
				<a href="https://facebook.com/traversymedia" target="_blank"><i class="fab fa-facebook fa-3x"></i></a>
				<a href="https://github.com/bradtraversy" target="_blank"><i class="fab fa-github fa-3x"></i></a>
				<a href="https://www.linkedin.com/in/bradtraversy" target="_blank"><i class="fab fa-linkedin fa-3x"></i></a>
			</div>
		</section>



    
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    
  </Layout>
)

export default IndexPage
