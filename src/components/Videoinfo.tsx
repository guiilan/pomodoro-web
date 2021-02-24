
import React from "react";

import ReactYotube from "../services/ReactYoutube";
import style from '../styles/components/VideoInfo.module.css'



export function VideoInfo( ) { 
    return (
      <div >
        <div  className={style.container}>
          <ReactYotube videoId="hfxfJ7Qa4sg" />
        </div>
      </div>
    );
}


