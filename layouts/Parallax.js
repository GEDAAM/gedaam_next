import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';
import styles from '../assets/jss/nextjs-material-kit/pages/components';

import Header from '../components/Header/Header';
import HeaderLinks from '../components/Header/HeaderLinks';
import Footer from '../components/Footer/Footer';

export default function Prallax(props) {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const parallax = {
    perspective: 300,
    translate: -300
  };

  return (
    <div>
      <div>
        {/* {React.cloneElement(props.header, { callerId: "parallax-wrapper" })} */}
        {
          <Header
            brand="NextJS Material Kit"
            rightLinks={<HeaderLinks />}
            fixed
            color="transparent"
            changeColorOnScroll={{
              height: 400,
              color: 'white'
            }}
            callerId="parallax-wrapper"
          />
        }
        <div className="wrapper" id="parallax-wrapper">
          <div className="section parallax">
            <div className={classes.container}>{props.title}</div>
          </div>
          <div className={classNames(classes.main, classes.mainRaised)}>
            {props.content}
          </div>
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
          /* For text formatting. */
          display: flex;
          align-items: center;
        }

        .parallax::before {
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
          background-position: center top;
          background-size: cover;
          background-repeat: no-repeat;
          background-image: url(${require('assets/img/nextjs_header.jpg')});
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
