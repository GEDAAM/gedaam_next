/* styles.js */
import css from 'styled-jsx/css';

export default css`
  .timeline {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .timeline-title {
    box-sizing: border-box;
    padding: 4rem;
    text-align: center;
  }

  .timeline-wrapper {
    margin: 0 2rem;
    position: relative;
    padding: 2rem 0;
  }

  .timeline-wrapper::before {
    /* vertical line */
    content: '';
    position: absolute;
    top: 2rem;
    left: 50%;
    transform: translateX(-50%);
    height: calc(100% - 6rem);
    width: 0.25rem;
    background-color: var(--gedaam-secondary, teal); /* need to further setup */
    filter: opacity(20%) grayscale(20%);
  }

  .timeline-block {
    position: relative;
    margin: 2rem 2rem;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
  }

  .timeline-block:first-child {
    margin-top: 0;
  }

  .timeline-block:last-child {
    margin-bottom: 0;
  }

  .bubble {
    box-sizing: border-box;
    margin: 0 2rem;
    width: 4rem;
    height: 4rem;
    z-index: 5;
    border-radius: 50%;
    box-shadow: 0 0 0 4px white, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05);
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    order: 2;
  }

  .bubble > .icon {
    box-sizing: inherit;
    font-size: 1.6rem !important;
  }

  .timeline-aside {
    width: 40%;
  }

  .balloon > h4 {
    font-weight: 500;
  }

  .balloon {
    background: #fff;
    margin-top: -0.5rem;
    max-height: 12rem;
    border-radius: 0.5rem;
    box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    z-index: 6;
    padding: 1.6rem;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  .date {
    margin-top: calc(2rem - 0.6em);
    opacity: 0.7;
  }

  .timeline-block:nth-child(even).balloon {
    order: 3;
  }

  .timeline-block:nth-child(odd).balloon {
    order: 1;
  }

  .timeline-block:nth-child(even).date {
    order: 1;
    text-align: right;
  }

  .timeline-block:nth-child(odd).date {
    order: 3;
    text-align: left;
  }

  .balloon::after {
    /* balloon tip */
    content: '▲';
    position: absolute;
    font-size: 1.5rem;
    color: var(--bg-color-clear, white);
    top: 1rem;
    border: 0;
    background-color: transparent;
  }

  .timeline-block:nth-child(even).balloon::after {
    left: calc(50% + 4rem - 1.5rem + 3px);
    transform: rotate(-90deg);
    text-shadow: -1px -2px 2px rgba(0, 0, 0, 0.24);
  }

  .timeline-block:nth-child(odd).balloon::after {
    left: calc(50% - 4rem - 3px);
    transform: rotate(90deg);
    text-shadow: 1px -2px 2px rgba(0, 0, 0, 0.24);
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
