import { cloneElement } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import styles from '../assets/jss/pages/main';

import Footer from '../components/Footer/Footer';

export default function Parallax(props) {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const parallax = {
    perspective: 300,
    translate: -300
  };

  return (
    <div>
      <div>
        {cloneElement(props.header, {
          changeColorOnScroll: {
            color: 'secondary',
            scrollTargetId: 'parallax-wrapper'
          }
        })}
        <div className="wrapper" id="parallax-wrapper">
          <div className="section parallax">
            <div className={classes.container}>{props.content}</div>
          </div>
          <div className={classNames(classes.main, classes.mainRaised)}>{props.children}</div>
          <Footer />
        </div>
      </div>
      <style jsx>{/* CSS */ `
        .wrapper {
          height: 100vh;
          width: 100vw;
          overflow-x: hidden;
          overflow-y: auto;
          perspective: ${parallax.perspective}px;
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
          background-image: url(${props.image});
          transform-style: inherit;
          transform: translate3d(-10px, 0, ${parallax.translate}px)
            scale(${1 - parallax.translate / parallax.perspective});
        }

        .parallax::after {
          content: '';
          height: 100vh;
          position: absolute;
          z-index: -1;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          margin: 0;
          padding: 0;
          border: 0;
          background: ${props.overlayColor};
          transform-style: inherit;
          transform: translate3d(-10px, 0, ${parallax.translate}px)
            scale(${1 - parallax.translate / parallax.perspective});
        }

        @media (max-width: 700px) {
          .parallax::after {
            background-size: auto 100%;
          }
        }
      `}</style>
    </div>
  );
}

Parallax.defaultProp = {
  overlayColor: '#ffffff00'
};

Parallax.propTypes = {
  children: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
  header: PropTypes.node.isRequired,
  image: PropTypes.string.isRequired,
  overlayColor: PropTypes.string
};
