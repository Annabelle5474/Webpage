import { Container, Row, Col } from "react-bootstrap";
// the astrounaut
import headerImg from "../assets/img/photo.jpg";
// import { ArrowRightCircle } from "react-bootstrap-icons";
// import 'animate.css';
import { useState, useEffect } from "react";

export const Banner = () => {
  // setting the number sequence for web developer web deisgner...
  const [loopNum, setLoopNum] = useState(0);
  // we start by typing word
  const [isDeleting, setIsDeleting] = useState(false);
  // animation for the letter display
  const [text, setText] = useState("");
  // how fast the letter being printed
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Hi! My name is Yi Yun Khor", "CO-OP Spring seeker", "Full-time"];
  // the period of showing the words
  const period = 2000;

  useEffect(() => {
    // This creates a recurring timer using setInterval, which repeatedly
    //executes the tick() function at a fixed interval defined by delta (in milliseconds).
    let ticker = setInterval(() => {
      tick();
    }, delta);
    // This returns a cleanup function, which calls
    //clearInterval(ticker) to stop the setInterval timer when it's no longer needed
    return () => {
      clearInterval(ticker);
    };
    // The text inside the dependency array [text] is used to trigger
    // this effect. Whenever text changes, this code runs again: it clears the previous interval and starts a new one.
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length; //three positions
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      {/* using bootstrap */}
      <Container>
        {/* allign it in center */}
        <Row className="aligh-items-center">
        <Col xs={12} md={6} xl={5}>
            {/* <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                > */}
            <div
            className="img-content"
              style={{
                width: "400px",
                height: "400px",
                borderRadius: "50%",
                overflow: "hidden",
              }}
            >
              <img
                src={headerImg}
                alt="Header Img"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            {/* </div>
              )}
            </TrackVisibility> */}
          </Col>
          <Col xs={12} md={6} xl={7}>
            {/* <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                > */}
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              {/* {`Hi! I'm Yi Yun`}{" "} */}
              <span
                className="txt-rotate"
                dataPeriod="1000"
                // data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'
                data-rotate='[ "Hi! My name is Yi Yun Khor", "Web Designer", "UI/UX Designer" ]'
              >
                <span className="wrap">{text}</span>
              </span>
            </h1>
            <p>
            I’m a senior-year Computer Science student at Iowa State University, with a passion for full-stack development, 
            AI projects, and creating impactful solutions.
            With experience ranging from front-end development to water runoff simulations, I aim to combine technology
             with creativity to solve real-world problems.
            </p>
            {/* <button onClick={() => console.log("connect")}>
                    Let’s Connect <ArrowRightCircle size={25} />
                  </button> */}
            {/* </div>
              )}
            </TrackVisibility> */}
          </Col>
          
        </Row>
      </Container>
    </section>
  );
};
