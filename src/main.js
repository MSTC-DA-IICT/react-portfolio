import ImageLoader from './components/ImageLoader';
import master from './master'
import React from "react";
import "./css/Loader.css"

function Main(){
  const mainimg = process.env.PUBLIC_URL + '/images/mainimg.jpg'
  const {hasLoaded} = ImageLoader(mainimg)
    return(
        <>
            {/* MAIN */}

        <section className="main" id="main">
            <div className="main-container">
              <div className="center">
              <span id="lineintro"></span>
              </div>
              <div className="main-content">
                <h1 className="text-1">Hello, I am </h1>
                <h1 className="text-2">{master.firstname}</h1>
              </div>
              <div className="main-image">
                {!hasLoaded &&
                  <div class="image">
                    <div class="loader"/>
                  </div>
                }
                {hasLoaded && <img src={mainimg} alt="image" className="image" />}
              </div>
            </div>
        </section>
        </>
    );
}

export default Main;
