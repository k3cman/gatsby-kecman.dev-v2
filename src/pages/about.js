import React from "react"
import styled from "styled-components"
import Layout from "../components/layout";
import SEO from "../components/seo"
import PageHeader from "../components/shared/pageHeader";

import Photo from '../../content/assets/photo.jpg';

const Avatar = styled.img`
box-sizing: border-box;
margin: 0px;
min-width: 0px;
max-width: 100%;
width: 300px;
height: auto;
border-radius: 100%;
float: right;
padding: 16px;
`

const About = () => {
      return (
        <Layout>
            <SEO title="about" />
            <PageHeader>
                About
            </PageHeader>
            <main>
 <Avatar src={Photo} />
            <p>Hi, there! I'm Front-end developer, working full time on Angular applications, and exploring world of programming and javascript in my free time.</p>

<p>I've always had a passion for creating small things, around the house, but when I discovered Photoshop, and ability to start from blank canvas and create something awesome. For many years before going into programming, I developed small Wordpress sites for local businesses and did small graphic design jobs.
</p>

<p>Having worn many hats in my career between business developement, marketing management, 3D vizuelization, graphic design, I use my experience to be more than just a coder, and I'm trying to at the same time think as UX designer, marketing specialist with customers needs and habits on mind.
 </p>
           </main>
        </Layout>
        )
}

export default About;