import React from "react"
import "./Banner.css" // Supposons que le fichier CSS s'appelle Banner.css

function CircleLogo() {
  return (
    <div className="circle">
      <div className="initials">C.H.</div>
      {/* <div className="text">Développeur Web</div> */}
      <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M 20 100 C 20 0, 180 0, 180 100"
          //   d="M 20 100 C 20 20, 90 15, 120 15"
          id="half-circle-path"
          stroke="none"
          fill="transparent"
        />

        <text fontSize="24" fontFamily="League Script" color="white">
          <textPath
            href="#half-circle-path"
            startOffset="100"
            textAnchor="middle"
            stroke="white"
          >
            Développeurs web
          </textPath>
        </text>
      </svg>
    </div>
  )
}

export default function Banner() {
  return (
    <div className="banner">
      <div className="circle-container">
        <CircleLogo />
      </div>
      <div className="name-container">
        <h1 className="title">Christian Humber</h1>
      </div>
    </div>
  )
}
