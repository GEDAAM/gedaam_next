export default function Dev() {
  return (
    <>
      <section id="timeline" className="timeline">
        <div id="cd-timeline" className="timeline cd-container">
          <div className="container cd-timeline-block">
            <div className="cd-timeline-img cd-picture">
              <i className="fa fa-fw fa-play pointer"></i>
              <div className="cd-timeline-content">
                <h2>Start the game</h2>
                <p data-pt-br="Esse é o ponto em que minha história começa :)">
                  This is when my story began :)
                </p>
                <p data-pt-br="Nasci em Belo Horizonte">
                  I was born in Belo Horizonte, MG, Brazil.
                </p>
                <span className="cd-date" data-pt-br="Julho de 1997">
                  Jul 1997
                </span>
              </div>
            </div>
            <div className="cd-timeline-block">
              <div className="cd-timeline-img cd-movie">
                <i className="fa fa-fw fa-gamepad"></i>
              </div>
              <div className="cd-timeline-content">
                <h2 data-pt-br="Mundo Dev? O que é isso?">Dev World? What is that?</h2>
                <p data-pt-br="Minha primeira experiência com código foi em GTA San Andreas Multiplayer. Eu tinha 12 anos e costumava jogar bastante... Os modos de jogo eram programados usando a linguagem <b>Pawn</b>, que é muito parecida com C.">
                  My first code experience was with GTA San Andreas Multiplayer. I was 12 and I used
                  to play it a lot... The gamemodes were programmed using <b>Pawn</b> language,
                  which is very similar to C.
                </p>
                <span className="cd-date" data-pt-br="Janeiro de 2017">
                  Jan 2010
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{/* CSS */ `
        .timeline {
          padding-bottom: 0rem;
          display: block;
          heigh: 200vh;
        }

        .cd-container {
          width: 90%;
          max-width: 100vw;
          margin: 0 auto;
        }

        .cd-container::after {
          /* clearfix */
          content: '';
          display: table;
          clear: both;
        }

        #cd-timeline {
          position: relative;
          padding: 2em 0;
          margin-top: 2em;
          margin-bottom: 2em;
        }

        #cd-timeline::before {
          /* this is the vertical line */
          content: '';
          position: absolute;
          top: 0;
          left: 18px;
          height: 100%;
          width: 4px;
          background: #d7e4ed;
        }

        @media only screen and (min-width: 1170px) {
          #cd-timeline {
            margin-top: 3em;
            margin-bottom: 3em;
          }
          #cd-timeline::before {
            left: 50%;
            margin-left: -2px;
          }
        }

        .cd-timeline-block {
          position: relative;
          margin: 2em 0;
        }

        .cd-timeline-block:after {
          content: '';
          display: table;
          clear: both;
        }

        .cd-timeline-block:first-child {
          margin-top: 0;
        }

        .cd-timeline-block:last-child {
          margin-bottom: 0;
        }

        @media only screen and (min-width: 1170px) {
          .cd-timeline-block {
            margin: 4em 0;
          }
          .cd-timeline-block:first-child {
            margin-top: 0;
          }
          .cd-timeline-block:last-child {
            margin-bottom: 0;
          }
        }

        .cd-timeline-img {
          position: absolute;
          top: 0;
          left: 0;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          box-shadow: 0 0 0 4px white, inset 0 2px 0 rgba(0, 0, 0, 0.08),
            0 3px 0 4px rgba(0, 0, 0, 0.05);
        }

        .cd-timeline-img img,
        .cd-timeline-img i {
          text-align: center;
          display: block;
          width: 24px;
          height: 24px;
          font-size: 24px;
          color: white;
          position: relative;
          left: 50%;
          top: 50%;
          margin-left: -12px;
          margin-top: -12px;
        }

        .cd-timeline-img.cd-picture {
          background: #75ce66;
        }

        .cd-timeline-img.cd-movie {
          background: #c03b44;
        }

        .cd-timeline-img.cd-location {
          background: #f0ca45;
        }

        .cd-timeline-img.cd-blue {
          background: #4582f0;
        }

        @media only screen and (min-width: 1170px) {
          .cd-timeline-img {
            width: 60px;
            height: 60px;
            left: 50%;
            margin-left: -30px;
            /* Force Hardware Acceleration in WebKit */
            -webkit-transform: translateZ(0);
            -webkit-backface-visibility: hidden;
          }
          .cssanimations .cd-timeline-img.is-hidden {
            visibility: hidden;
          }
          .cssanimations .cd-timeline-img.bounce-in {
            visibility: visible;
            -webkit-animation: cd-bounce-1 0.6s;
            -moz-animation: cd-bounce-1 0.6s;
            animation: cd-bounce-1 0.6s;
          }
        }

        @-webkit-keyframes cd-bounce-1 {
          0% {
            opacity: 0;
            -webkit-transform: scale(0.5);
          }
          60% {
            opacity: 1;
            -webkit-transform: scale(1.2);
          }
          100% {
            -webkit-transform: scale(1);
          }
        }

        @-moz-keyframes cd-bounce-1 {
          0% {
            opacity: 0;
            -moz-transform: scale(0.5);
          }
          60% {
            opacity: 1;
            -moz-transform: scale(1.2);
          }
          100% {
            -moz-transform: scale(1);
          }
        }

        @keyframes cd-bounce-1 {
          0% {
            opacity: 0;
            -webkit-transform: scale(0.5);
            -moz-transform: scale(0.5);
            -ms-transform: scale(0.5);
            -o-transform: scale(0.5);
            transform: scale(0.5);
          }
          60% {
            opacity: 1;
            -webkit-transform: scale(1.2);
            -moz-transform: scale(1.2);
            -ms-transform: scale(1.2);
            -o-transform: scale(1.2);
            transform: scale(1.2);
          }
          100% {
            -webkit-transform: scale(1);
            -moz-transform: scale(1);
            -ms-transform: scale(1);
            -o-transform: scale(1);
            transform: scale(1);
          }
        }

        .cd-timeline-content {
          position: relative;
          margin-left: 60px;
          background: white;
          border-radius: 0.25em;
          padding: 1em;
          box-shadow: 0 3px 0 #d7e4ed;
        }

        .cd-timeline-content:after {
          content: '';
          display: table;
          clear: both;
        }

        .cd-timeline-content h2 {
          color: #303e49;
        }

        .cd-timeline-content .cd-date {
          float: left;
          padding: 0.8em 0;
          opacity: 0.7;
        }

        .cd-timeline-content::before {
          content: '';
          position: absolute;
          top: 16px;
          right: 100%;
          height: 0;
          width: 0;
          border: 7px solid transparent;
          border-right: 7px solid white;
        }

        .cd-timeline-content h2 {
          font-size: 20px;
          font-size: 1.4rem;
        }

        @media only screen and (min-width: 1170px) {
          .cd-timeline-content {
            margin-left: 0;
            padding: 1.6em;
            width: 45%;
          }
          .cd-timeline-content::before {
            top: 24px;
            left: 100%;
            border-color: transparent;
            border-left-color: white;
          }
          .cd-timeline-content .cd-read-more {
            float: left;
          }
          .cd-timeline-content .cd-date {
            position: absolute;
            width: 100%;
            left: 122%;
            top: 6px;
            font-size: 16px;
            font-size: 1rem;
          }
          .cd-timeline-block:nth-child(even) .cd-timeline-content {
            float: right;
          }
          .cd-timeline-block:nth-child(even) .cd-timeline-content::before {
            top: 24px;
            left: auto;
            right: 100%;
            border-color: transparent;
            border-right-color: white;
          }
          .cd-timeline-block:nth-child(even) .cd-timeline-content .cd-read-more {
            float: right;
          }
          .cd-timeline-block:nth-child(even) .cd-timeline-content .cd-date {
            left: auto;
            right: 122%;
            text-align: right;
          }
          .cssanimations .cd-timeline-content.is-hidden {
            visibility: hidden;
          }
          .cssanimations .cd-timeline-content.bounce-in {
            visibility: visible;
            -webkit-animation: cd-bounce-2 0.6s;
            -moz-animation: cd-bounce-2 0.6s;
            animation: cd-bounce-2 0.6s;
          }
        }

        @media only screen and (min-width: 1170px) {
          /* inverse bounce effect on even content blocks */
          .cssanimations .cd-timeline-block:nth-child(even) .cd-timeline-content.bounce-in {
            -webkit-animation: cd-bounce-2-inverse 0.6s;
            -moz-animation: cd-bounce-2-inverse 0.6s;
            animation: cd-bounce-2-inverse 0.6s;
          }
        }

        @-webkit-keyframes cd-bounce-2 {
          0% {
            opacity: 0;
            -webkit-transform: translateX(-100px);
          }
          60% {
            opacity: 1;
            -webkit-transform: translateX(20px);
          }
          100% {
            -webkit-transform: translateX(0);
          }
        }

        @-moz-keyframes cd-bounce-2 {
          0% {
            opacity: 0;
            -moz-transform: translateX(-100px);
          }
          60% {
            opacity: 1;
            -moz-transform: translateX(20px);
          }
          100% {
            -moz-transform: translateX(0);
          }
        }

        @keyframes cd-bounce-2 {
          0% {
            opacity: 0;
            -webkit-transform: translateX(-100px);
            -moz-transform: translateX(-100px);
            -ms-transform: translateX(-100px);
            -o-transform: translateX(-100px);
            transform: translateX(-100px);
          }
          60% {
            opacity: 1;
            -webkit-transform: translateX(20px);
            -moz-transform: translateX(20px);
            -ms-transform: translateX(20px);
            -o-transform: translateX(20px);
            transform: translateX(20px);
          }
          100% {
            -webkit-transform: translateX(0);
            -moz-transform: translateX(0);
            -ms-transform: translateX(0);
            -o-transform: translateX(0);
            transform: translateX(0);
          }
        }

        @-webkit-keyframes cd-bounce-2-inverse {
          0% {
            opacity: 0;
            -webkit-transform: translateX(100px);
          }
          60% {
            opacity: 1;
            -webkit-transform: translateX(-20px);
          }
          100% {
            -webkit-transform: translateX(0);
          }
        }

        @-moz-keyframes cd-bounce-2-inverse {
          0% {
            opacity: 0;
            -moz-transform: translateX(100px);
          }
          60% {
            opacity: 1;
            -moz-transform: translateX(-20px);
          }
          100% {
            -moz-transform: translateX(0);
          }
        }

        @keyframes cd-bounce-2-inverse {
          0% {
            opacity: 0;
            -webkit-transform: translateX(100px);
            -moz-transform: translateX(100px);
            -ms-transform: translateX(100px);
            -o-transform: translateX(100px);
            transform: translateX(100px);
          }
          60% {
            opacity: 1;
            -webkit-transform: translateX(-20px);
            -moz-transform: translateX(-20px);
            -ms-transform: translateX(-20px);
            -o-transform: translateX(-20px);
            transform: translateX(-20px);
          }
          100% {
            -webkit-transform: translateX(0);
            -moz-transform: translateX(0);
            -ms-transform: translateX(0);
            -o-transform: translateX(0);
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}