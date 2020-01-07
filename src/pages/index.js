import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Connects Cast | Welcome to the new wave of influential sound." />
    <section className="welcome">
      <div className="content">
        <h1 className="logo"><img src="/icons/logo_with_type.png" alt="Connects Cast" /></h1>
        <h2 className="message">Welcome to the new wave of influential sound.</h2>
        <h2 className="description">Connects Cast is here to help you find your voice: a podcasting agency, delivering media that influences <br /><br />Brought to you by <a href="https://seenconnects.com/" target="_blank" rel="noopener noreferrer"><strong>SEEN Connects</strong></a>.</h2>
      </div>
      <div className="wave">
      </div>
    </section>
    <section className="about">
      <div className="content">
        <img alt="" src="/icons/logo.png" />
        <p><strong>We make sure your voice is heard, and your views are verified.</strong> Our podcasts are original – just like you.</p>
      </div>
    </section>
    <section className="how-it-works" id="how-it-works">
      <div className="content">
        <h2>How it works</h2>
        <ol>
          <li>
            <h3>1. Podcast Production</h3>
            <p>End to end podcast production, from conception to delivery and all the way through to a social marketing plan that compliments your sound.</p>
          </li>
          <li>
            <h3>2. Securing Guest Speakers</h3>
            <p>We’re the match dot com of podcasts – our network is unrivalled and when it comes to creating relationships between influencers, brands and fans alike, we opt for a long-term approach.</p>
          </li>
          <li>
            <h3>3. Podcast Sponsorships / Partnerships</h3>
            <p>Fostering meaningful relationships with brands is paramount to authenticity, so if you’re looking for the a perfectly aligned host or the right match to sponsor your podcast, we’re your go-to.</p>
          </li>
          <li>
            <h3>4. Voice Plug-Ins</h3>
            <p>The shifting landscape of media consumption means being audio content experts is important. We like to make things easy, so with Connects Cast voice plug-ins, listeners will only have to ask Alexa, Siri or Google, and your podcast will play.</p>
          </li>
        </ol>
      </div>
    </section>
    <section className="contact-form" id="get-in-touch">
      <div className="content">
        <h2>Thinking of podcasting? Drop us a line and we’ll be in touch.</h2>
        <form action="https://formspree.io/hello@connectscast.com" method="POST">
          <div className="row">
            <div>
              <label htmlFor="first-name">First Name</label>
              <input type="text" id="first-name" name="first-name" required placeholder="First name" />
            </div>
            <div>
              <label htmlFor="last-name">Last Name</label>
              <input type="text" id="last-name" name="last-name" required placeholder="Last name" />
            </div>
          </div>
          <div className="row">
            <div>
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" required placeholder="Email address" />
            </div>
            <div>
              <label htmlFor="company">Company</label>
              <input type="text" id="company" name="company" required placeholder="Company" />
            </div>
          </div>
          <div className="row">
            <div>
              <label htmlFor="message">How can we help you get your voice heard?</label>
              <textarea name="message" id="message" placeholder="How can we help you get your voice heard?"></textarea>
            </div>
          </div>
          <div className="row privacy-policy">
            <div>
              <input type="checkbox" id="privacy-policy" name="privacy-policy" className="checkbox" required />
              <label htmlFor="privacy-policy">Please tick if you accept our <a href="privacy-policy">privacy policy</a></label>
            </div>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
    <section className="why-a-podcast" id="why-to-podcast">
      <div className="content">
        <h2>Why is it time to podcast?</h2>
        <p>Podcast listeners are the perfect audience: <a href="https://musicoomph.com/podcast-statistics/" target="_blank" rel="noopener noreferrer">according to stats</a>, they’re diverse, gender neutral, and high net worth individuals with plenty of disposable income.
          <br /><br /><br /> <strong>Still need convincing?</strong>
        </p>
        <ul>
          <li>80% of podcast users listen to all or most of the episodes they follow, at an average of seven shows a week.</li>
          <li>63% of podcast listeners have made a purchase based on something the host has recommended.</li>
          <li>50% of all homes are podcast fans, meaning that’s over 60 million homes currently a part of the audio interface space.</li>
        </ul>
        <p>All stats sourced via <a href="https://www.podcastinsights.com/podcast-statistics/" target="_blank" rel="noopener noreferrer">Podcast Insights</a></p>
      </div>
    </section>
    <section className="listen-to-ours">
      <div className="content">
        <h3>Listen to ours</h3>
        <p>We love podcasting so much that we made our own. <a href="https://www.verifiedviews.co/" target="_blank">Listen to Verified Views</a> now, the insider influencer scoop on what the social space is really like through fun, honest storytelling.</p>
      </div>
    </section>
  </Layout>
)

export default IndexPage
