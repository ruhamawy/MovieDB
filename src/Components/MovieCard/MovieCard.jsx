import React from "react";
import style from "./MovieCard.module.css";
import { FaPlayCircle } from "react-icons/fa";
import { BsPlusCircleFill } from "react-icons/bs";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { GoCheckCircleFill } from "react-icons/go";
import { LiaEtsy } from "react-icons/lia";

function MovieCard() {
  let geners = ["Adventure", "Action", "Thriller"];
  return (
    <div>
      {/* image poster*/}
      <img src="" alt="" />

      {/* image on hover  div*/}
      <div>
        {/* image on hover */}
        <img src="" alt="" />

        {/* badge */}
        <div>Recently added</div>

        {/* button row */}
        <div>
          <FaPlayCircle color="white" size={40} />
          <BsPlusCircleFill color="white" size={40} />
          <GoCheckCircleFill color="white" size={40} />
          <IoIosArrowDropdownCircle color="white" size={40} />
        </div>
        {/* meta data */}
        <div>
          <span>U/A 16+</span>
          <span>Movie</span>
          <span>HD</span>
        </div>
        {/*  movie gener */}
        <div>
          {geners.map((g, index) => {
            return (
              <span key={index}>
                {g}
                {index < geners.length - 1 && <span>.</span>}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
