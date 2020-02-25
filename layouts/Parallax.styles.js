import css from 'styled-jsx/css';

const parallax3d = {
  perspective: 300,
  translate: -300
};

export const parallax = css`
  .wrapper {
    height: 100vh;
    width: 100vw;
    overflow-x: hidden;
    overflow-y: auto;
    perspective: ${parallax3d.perspective}px;
    transform-style: preserve-3d;
  }

  .section {
    position: relative;
    height: 90vh;
    max-height: 1000px;
    transform-style: inherit;
    z-index: -5; /* Any number will do, so long as it's lower than the parallax */
    display: flex;
    align-items: center;
  }

  .parallax::before {
    content: '';
    height: 100vh;
    position: absolute;
    z-index: -2;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: 0;
    padding: 0;
    border: 0;
    background-position: center top;
    background-size: cover;
    background-repeat: no-repeat;
    transform-style: inherit;
    transform: translate3d(-10px, 0, ${parallax3d.translate}px)
      scale(${1 - parallax3d.translate / parallax3d.perspective});
  }

  @media (max-width: 700px) {
    .parallax::after {
      background-size: auto 100%;
    }
  }
`;
