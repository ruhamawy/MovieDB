// import React from 'react'
import React, { useEffect,useState } from "react";

import NetflixbannerLogo from "./../../assets/image/logo.png"
import { Play, Info } from 'lucide-react'
import style from './Banner.module.css'
import { movieInstance } from "../../Utility/MovieInstance";
import requests from "../../Utility/requestUrls";
const BANNER_BASE = "https://image.tmdb.org/t/p/original/";
function Banner() {
     
const [bannerImage, setBannerImage] = useState({});
console.log(bannerImage);
useEffect(() => {
  async function fetchBannerImage() {
    const request = await movieInstance.get(requests.fetchNetflixOriginals);
    setBannerImage(
      request.data.results[
        Math.floor(Math.random() * request.data.results.length)
      ]
    );
  }

  fetchBannerImage();
}, []);

  function truncate(str, n) {
  return str?.length>n ?str.substr(0,n-1)+"...":str
}
  return (
    <div className={style.banner}
      style={{
        backgroundsize: "cover",
        backgroundImage: `url(${BANNER_BASE}${bannerImage.backdrop_path})`
      }}>
          <div className={style.contents}>
              {/* netflix image */}
              <img className={style.logoimg} src={NetflixbannerLogo} alt="Netflix logo" />

              {/* tittli */}
        <h1 className={style.title}>{ bannerImage?.original_name}</h1>


              {/* description */}
              <h1 className={style.description}>
                {truncate(bannerImage?.overview,120)}
              </h1>

              {/* buttons */}
              <div className={style.buttonContainer}>
                  <button className={style.button}>
                      <Play size={30} />
                      play
                  </button>
                  <button className={style.button}>
                      <Info size={30} />
                      My list
                  </button>
               </div>
          </div>
  {/* fading */}
          <div className={style.fadeBottom}>
            
      </div>
      <div>
        test
      </div>




    </div>
  )
}
export default Banner