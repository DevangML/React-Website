import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Timeline() {
  useEffect(() => {
    AOS.init({duration : 700});
    AOS.refresh();
  }, []);
  return (
    <div className='tim-cont'>
      <section className="timeline">
        <h1 className='tim-h1'>Timeline of my life</h1>
        <div className="demo-card-wrapper">
          <div className="demo-card demo-card--step1" data-aos="fade-right">
            <div className="head">
              <div className="number-box">
                <span>01</span>
              </div>
              <h2>
                <span className="small">Subtitle</span> Technology
              </h2>
            </div>
            <div className="body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
                reiciendis deserunt doloribus consequatur, laudantium odio
                dolorum laboriosam.
              </p>
              <img src="http://placehold.it/1000x500" alt="Graphic" />
            </div>
          </div>

          <div className="demo-card demo-card--step2" data-aos="fade-left">
            <div className="head">
              <div className="number-box">
                <span>02</span>
              </div>
              <h2>
                <span className="small">Subtitle</span> Confidence
              </h2>
            </div>
            <div className="body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
                reiciendis deserunt doloribus consequatur, laudantium odio
                dolorum laboriosam.
              </p>
              <img src="http://placehold.it/1000x500" alt="Graphic" />
            </div>
          </div>

          <div className="demo-card demo-card--step3" data-aos="fade-right">
            <div className="head">
              <div className="number-box">
                <span>03</span>
              </div>
              <h2>
                <span className="small">Subtitle</span> Adaptation
              </h2>
            </div>
            <div className="body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
                reiciendis deserunt doloribus consequatur, laudantium odio
                dolorum laboriosam.
              </p>
              <img src="http://placehold.it/1000x500" alt="Graphic" />
            </div>
          </div>

          <div className="demo-card demo-card--step4" data-aos="fade-left">
            <div className="head">
              <div className="number-box">
                <span>04</span>
              </div>
              <h2>
                <span className="small">Subtitle</span> Consistency
              </h2>
            </div>
            <div className="body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
                reiciendis deserunt doloribus consequatur, laudantium odio
                dolorum laboriosam.
              </p>
              <img src="http://placehold.it/1000x500" alt="Graphic" />
            </div>
          </div>

          <div className="demo-card demo-card--step5" data-aos="fade-right">
            <div className="head">
              <div className="number-box">
                <span>05</span>
              </div>
              <h2>
                <span className="small">Subtitle</span> Conversion
              </h2>
            </div>
            <div className="body">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
                reiciendis deserunt doloribus consequatur, laudantium odio
                dolorum laboriosam.
              </p>
              <img src="http://placehold.it/1000x500" alt="Graphic" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Timeline;
