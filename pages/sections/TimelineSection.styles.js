/* styles.js */
import css from 'styled-jsx/css';
import { infoColor } from '../../assets/jss/nextjs-material-kit';

export default css`
  .timeline {
    padding-bottom: 0rem;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .wrapper {
    width: 100vw;
  }

  .timeline-title {
    width: 100%;
    box-sizing: border-box;
    padding: 60px;
    text-align: center;
    font-weight: 400;
  }

  .timeline-wrapper {
    width: 90%;
    max-width: 100vw;
    margin: 0 auto;
    position: relative;
    padding: 2em 0;
    margin-top: 2em;
    margin-bottom: 2em;
  }

  .timeline-wrapper::before {
    /* vertical line */
    content: '';
    position: absolute;
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
    height: calc(90% - 30px);
    width: 4px;
    background-color: ${infoColor};
    filter: opacity(30%) grayscale(20%);
  }

  .timeline-block {
    position: relative;
    top: 0;
    margin: 2em 2em;
    display: grid;
    grid-template: auto / 1fr 80px 1fr;
    grid-template-areas: 'left bubble right';
    grid-gap: 1.6em 1.6em;
    align-items: start;
  }

  .timeline-block:first-child {
    margin-top: 0;
  }

  .timeline-block:last-child {
    margin-bottom: 0;
  }

  .bubble {
    grid-area: bubble;
    box-sizing: border-box;
    justify-self: center;
    width: 60px;
    height: 60px;
    z-index: 5;
    border-radius: 50%;
    box-shadow: 0 0 0 4px #fff, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05);
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .bubble > .icon {
    box-sizing: inherit;
    font-size: 1.6rem !important;
  }

  .balloon > h4 {
    font-weight: 500;
  }

  .balloon {
    background: #fff;
    margin-top: -1em;
    width: 90%;
    max-height: 40vh;
    border-radius: 6px;
    box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    display: flex;
    flex-direction: column;
    overflow-y: hidden;
    padding: 1.6em;
    z-index: 6;
  }

  .date {
    margin: 0;
    margin-top: calc(30px - 0.6em);
    opacity: 0.7;
  }

  .timeline-block:nth-child(even).balloon {
    grid-area: right;
    justify-self: start;
  }

  .timeline-block:nth-child(odd).balloon {
    grid-area: left;
    justify-self: end;
  }

  .timeline-block:nth-child(even).date {
    grid-area: left;
    justify-self: end;
  }

  .timeline-block:nth-child(odd).date {
    grid-area: right;
    justify-self: start;
  }

  .cssanimations .balloon.is-hidden {
    visibility: hidden;
  }

  .cssanimations .balloon.bounce-in {
    visibility: visible;
    animation: cd-bounce-2 0.6s;
  }

  /* inverse bounce effect on even content blocks */
  .cssanimations .wrapper:nth-child(even) .balloon.bounce-in {
    animation: cd-bounce-2-inverse 0.6s;
  }

  @media screen and (max-width: 900px) {
    p {
      font-weight: 350 !important;
      line-height: 1.6 !important;
    }

    .timeline-wrapper::before {
      left: calc(1.4em + 2px); /* sums half the width */
    }

    .timeline-block {
      position: relative;
      top: 0;
      margin: 2em 1em;
      margin-left: -0.4em; /* fix that */
      display: grid;
      grid-template: auto / 60px 1fr;
      grid-template-areas: 'bubble right';
      align-items: start;
    }

    .bubble {
      width: 40px;
      height: 40px;
    }

    .bubble > .icon {
      font-size: 1.2rem !important;
    }

    .balloon {
      grid-area: right !important;
      justify-self: start !important;
      max-height: 70vh;
    }

    /* The style below is a workaround */
    .balloon > p {
      padding-bottom: 3em;
    }

    .date {
      grid-area: right !important;
      justify-self: start !important;
      align-self: end;
      padding: 0;
      margin: 1.6em;
      z-index: 7;
    }
  }

  @keyframes cd-bounce-1 {
    0% {
      opacity: 0;
      transform: scale(0.5);
    }

    60% {
      opacity: 1;
      transform: scale(1.2);
    }

    100% {
      transform: scale(1);
    }
  }

  @keyframes cd-bounce-2 {
    0% {
      opacity: 0;
      transform: translateX(-100px);
    }

    60% {
      opacity: 1;
      transform: translateX(20px);
    }

    100% {
      transform: translateX(0);
    }
  }

  @keyframes cd-bounce-2-inverse {
    0% {
      opacity: 0;
      transform: translateX(100px);
    }

    60% {
      opacity: 1;
      transform: translateX(-20px);
    }

    100% {
      transform: translateX(0);
    }
  }
`;
