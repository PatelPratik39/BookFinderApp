import React from "react";
import "./About.css";
import aboutImg from "../../images/img3.jpg";
const URL = "http://openlibrary.org/search.json?title=";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <div className="section-title">
          <h2> 📚 About 📚</h2>
        </div>

        <div className="about-content grid">
          <div className="about-img">
            <img src={aboutImg} alt="" />
          </div>
          <div className="about-text">
            <h2 className="about-title fs-26 ls-1">📚 About BookHub 📚</h2>
            <p className="fs-20">
              <ul>
                <li>
                  I have created this BookHub Application using Third Party API
                  and you tube reference to learn more about ReactJS. <br />
                  API Link:
                  <a href={URL} class="link">
                    {" "}
                    Link{" "}
                  </a>
                </li>
              </ul>
            </p>
            <div className="fs-17">
              <p>
                Welcome! 📚 <br />
                I'm Pratik, an enthusiastic front-end developer with a passion
                for ReactJS, and I'm thrilled to introduce you to my latest
                project - the Book Finder App.
              </p>
              <p>
                With a focus on accessibility and user experience, I've ensured
                that the Book Finder App is responsive, mobile-friendly, and
                easy to navigate on any device. Whether you're curled up on the
                couch or on the go, your next literary adventure is just a click
                away. But don't take my word for it – experience the magic of
                the Book Finder App for yourself. Join me on this exciting
                journey as we explore the boundless potential of ReactJS and
                celebrate the timeless joy of reading, one page at a time. Let's
                embark on this adventure together and redefine the way the world
                discovers books with ReactJS and the Book Finder App!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
