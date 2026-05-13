import React from 'react'
import NetflixbannerLogo from "./../../assets/image/logo.png"
import { Play, Info } from 'lucide-react'
import style from './Banner.module.css'
 function Banner() {
  return (
    <div className={style.banner}>
          <div className={style.contents}>
              {/* netflix image */}
              <img className={style.logoimg} src={NetflixbannerLogo} alt="Netflix logo" />

              {/* tittli */}
              <h1 className={style.title}>Bridgerton</h1>


              {/* description */}
              <h1 className={style.description}>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec consectetur ex ac viverra finibus. Sed s mollis nisl. Praesent vel odio nec risus rutrum tempor. lectus.
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




    </div>
  )
}
export default Banner