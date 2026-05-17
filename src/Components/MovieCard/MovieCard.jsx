import React from "react";
import style from "./MovieCard.module.css";
import { FaPlayCircle } from "react-icons/fa";
import { BsPlusCircleFill } from "react-icons/bs";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { GoCheckCircleFill } from "react-icons/go";

const Image_Base = "https://image.tmdb.org/t/p/w500";

function MovieCard({movie}) {
  let geners = ["Adventure", "Action", "Thriller"];
  return (
    <div className={style.Cardwrapper}>
      {/* image poster*/}
      <img
        className={style.poster}
        src={`${Image_Base}${movie?.poster_path}`}
        alt="poster image"
      />

      {/* image on hover  div*/}
      <div className={style.hovercard}>
        {/* image on hover */}
        <img
          className={style.hoverImage}
          src={`${Image_Base}${movie?.poster_path}`}
          alt="hover image"
        />

        {/* badge */}
        <div className={style.badge}>Recently added</div>

        {/* button row */}
        <div className={style.buttonrow}>
          <FaPlayCircle className={style.circlebtn} color="white" size={40} />
          <BsPlusCircleFill
            className={style.circlebtn}
            color="white"
            size={40}
          />
          <GoCheckCircleFill
            className={style.circlebtn}
            color="white"
            size={40}
          />
          <IoIosArrowDropdownCircle
            className={style.circlebutton}
            color="white"
            size={40}
          />
        </div>
        {/* meta data */}
        <div className={style.metaRow}>
          <span className={style.tag}>U/A 16+</span>
          <span className={style.tag}>Movie</span>
          <span className={style.tag}>HD</span>
        </div>
        {/*  movie gener */}
        <div className={style.gener}>
          {geners.map((g, index) => {
            return (
              <span key={index}>
                {g}
                {index < geners.length - 1 && (
                  <span className={style.dot}>•</span>
                )}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
