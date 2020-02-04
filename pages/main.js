import Head from 'next/head';
import { makeStyles } from '@material-ui/core/styles';
import styles from '../assets/jss/nextjs-material-kit/pages/components';

import Header from '../components/Header/Header';
import HeaderLinks from '../components/Header/HeaderLinks';
import GridContainer from '../components/Grid/GridContainer';
import GridItem from '../components/Grid/GridItem';

import LandingSection from './sections/LandingSection';

import Parallax from '../layouts/Parallax';

export default function Main() {
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  return (
    <div>
      <Head>
        <meta name="viewport" content="initial-scale=1.2, width=device-width" key="viewport" />
        <title>GEDAAM</title>
      </Head>
      <Parallax
        header={
          <Header
            brand="GEDAAM"
            color="transparent"
            changeColorOnScroll={{
              height: 400,
              color: 'primary'
            }}
            rightLinks={<HeaderLinks />}
            fixed
            callerId="parallax-wrapper"
          />
        }
        image="/img/landing.jpg"
        overlayColor="#00000066"
        content={
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Estude diferente.</h1>
              </div>
            </GridItem>
          </GridContainer>
        }
      >
        <LandingSection />
      </Parallax>
    </div>
  );
}
