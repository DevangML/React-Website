import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Timeline() {
  useEffect(() => {
    AOS.init({ duration: 700 });
    AOS.refresh();
  }, []);
  return (
    <div className="tim-cont">
      <div className="tim-head">Timeline Of My Life</div>
      <div class="section agenda">
        <div class="row column text-center">
          <div class="agenda__month">
            <h2 class="agenda__month__title">
              <time datetime="">Sept 2016</time>
            </h2>
            <ol class="agenda__list">
              <li class="agenda__item toiletteur">
                <article class="agenda__item__article">
                  <span class="agenda__item__date">12</span>
                  <div class="agenda__item__detail">
                    <div class="horaires">
                      <time datetime="">9:15</time>
                    </div>
                    <div class="desc">
                      <h3 class="agenda__item__title">Agenda item title</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                      </p>
                    </div>
                    <button class="edit__btn">
                      <i class="fa fa-pencil"></i>
                    </button>
                  </div>
                </article>
              </li>
              <li class="agenda__item">
                <article class="agenda__item__article">
                  <span class="agenda__item__date">12</span>
                  <div class="agenda__item__detail">
                    <div class="horaires">
                      <time datetime="">9:15</time>
                    </div>
                    <div class="desc">
                      <h3 class="agenda__item__title">Agenda item title</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                      </p>
                    </div>
                    <button class="edit__btn">
                      <i class="fa fa-pencil"></i>
                    </button>
                  </div>
                </article>
              </li>
            </ol>
          </div>
          <div class="agenda__month">
            <h2 class="agenda__month__title">
              <time datetime="">Oct 2016</time>
            </h2>
            <ol class="agenda__list">
              <li class="agenda__item veterinaire">
                <article class="agenda__item__article">
                  <span class="agenda__item__date">12</span>
                  <div class="agenda__item__detail">
                    <div class="horaires">
                      <time datetime="">9:15</time>
                    </div>
                    <div class="desc">
                      <h3 class="agenda__item__title">Agenda item title</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                      </p>
                    </div>
                    <button class="edit__btn">
                      <i class="fa fa-pencil"></i>
                    </button>
                  </div>
                </article>
              </li>
              <li class="agenda__item club">
                <article class="agenda__item__article">
                  <span class="agenda__item__date">12</span>
                  <div class="agenda__item__detail">
                    <div class="horaires">
                      <time datetime="">9:15</time>
                    </div>
                    <div class="desc">
                      <h3 class="agenda__item__title">Agenda item title</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                      </p>
                    </div>
                    <button class="edit__btn">
                      <i class="fa fa-pencil"></i>
                    </button>
                  </div>
                </article>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;
