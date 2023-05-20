import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">James Han </span>
            from <span className="purple"> ManSeau QC, Canada.</span>
            <br />Full stack developer with over 8+ years of experience in Java/JS, Angular, Vue, React, Python, Node.js. In improving user engagement by 15%, reducing development and deployment time by 20% and mentoring junior developers, resulting in a 10% improvement in team satisfaction scores. I have also good experiences of teamwork.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Sloving Maths Problems
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Surfing the Internet
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Let's lifeflong learning everything!"{" "}
          </p>
          <footer className="blockquote-footer">apple</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
