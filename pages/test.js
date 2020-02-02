// nodejs library that concatenates classes
import classNames from 'classnames';
// react components for routing our app without refresh
import Link from 'next/link';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
// @material-ui/icons
// core components
import Header from 'components/Header/Header.js';
import HeaderLinks from 'components/Header/HeaderLinks.js';
import Footer from 'components/Footer/Footer.js';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Button from 'components/CustomButtons/Button.js';
import Parallax from 'components/Parallax/Parallax.js';
// sections for this page
import SectionBasics from 'pages-sections/Components-Sections/SectionBasics.js';
import SectionNavbars from 'pages-sections/Components-Sections/SectionNavbars.js';
import SectionTabs from 'pages-sections/Components-Sections/SectionTabs.js';
import SectionPills from 'pages-sections/Components-Sections/SectionPills.js';
import SectionNotifications from 'pages-sections/Components-Sections/SectionNotifications.js';
import SectionTypography from 'pages-sections/Components-Sections/SectionTypography.js';
import SectionJavascript from 'pages-sections/Components-Sections/SectionJavascript.js';
import SectionCarousel from 'pages-sections/Components-Sections/SectionCarousel.js';
import SectionCompletedExamples from 'pages-sections/Components-Sections/SectionCompletedExamples.js';
import SectionLogin from 'pages-sections/Components-Sections/SectionLogin.js';
import SectionExamples from 'pages-sections/Components-Sections/SectionExamples.js';
import SectionDownload from 'pages-sections/Components-Sections/SectionDownload.js';

import styles from 'assets/jss/nextjs-material-kit/pages/components.js';

export default function Test(props) {
  const useStyles = makeStyles(styles);
  const classes = useStyles();
  const parallax = {
    perspective: 300,
    translate: -300
  };

  return (
    <div>
      <div>
        <Header
          brand="NextJS Material Kit"
          rightLinks={<HeaderLinks />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 400,
            color: 'white'
          }}
          {...props}
        />
        <div className="wrapper">
          <div className="section parallax">
            <div className={classes.container}>
              <GridContainer>
                <GridItem>
                  <div className={classes.brand}>
                    <h1 className={classes.title}>NextJS Material Kit.</h1>
                    <h3 className={classes.subtitle}>
                      A Badass Material Kit based on Material-UI and NextJS.
                    </h3>
                  </div>
                </GridItem>
              </GridContainer>
            </div>
          </div>
          <div className={classNames(classes.main, classes.mainRaised)}>
            <SectionBasics className="section static" />
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
        }

        .section {
          position: relative;
          height: 90vh;
          max-height: 1000px;
          z-index: -5; /* Any number will do, so long as it's lower than the parallax */
          /* For text formatting. */
          overflow: hidden;
          display: flex;
          align-items: center;
          transform-style: preserve-3d;
        }

        .parallax {

        }

        .parallax::before {
          content: "";
          height: 100vh;
          position: absolute;
          z-index: -1;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          margin: 0;
          padding: 0;background: blue
          border: 0;
          background-position: center top;
          background-size: cover;
          background-repeat: no-repeat;
          background-image: url(${require('assets/img/nextjs_header.jpg')});
          transform: translateZ(${parallax.translate}px)
            scale(${1 - parallax.translate / parallax.perspective});
          -moz-transform: scale(1);
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
