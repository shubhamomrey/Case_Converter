import React from "react";
import "../App.css";

function About() {
  return (
    <div className="about-section">
      <h1>Shubham Kumar</h1>
      <h3>a software developer</h3>

      
        <img
         className="my-image"
          src={process.env.PUBLIC_URL + "/myimage.jpg"}
          alt="my image1"
          
        />
   

      <div>
        <p>
          <strong>Welcome to my portfolio website!</strong>
        </p>
        <p>
          I am a web developer intern with a passion for creating dynamic and
          user-friendly websites. My skills in front-end and back-end
          development, along with my attention to detail, allow me to create
          websites that are both visually appealing and functional.
        </p>

        <p>
          my experience as a web developer intern, I have gained expertise in
          HTML, CSS, JavaScript, and various content management systems such as
          React and Angular. My knowledge of responsive design, user experience
          optimization, and SEO principles ensure that the websites I create are
          optimized for success.
        </p>

        <p>
          I have worked on a variety of projects, ranging from small business
          websites to large e-commerce platforms. Each project presents its
          unique challenges, and I enjoy finding creative solutions to deliver
          high-quality results that exceed expectations.
        </p>

        <p>
          I invite you to explore my portfolio and discover how I can help you
          bring your website to life. Thank you for visiting my website, and I
          look forward to hearing from you soon.
        </p>
      </div>
    </div>
  );
}

export default About;
