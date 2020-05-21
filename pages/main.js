import Head from 'next/head';
import { makeStyles } from '@material-ui/core/styles';
import styles from '../assets/jss/pages/main';
import Header from '../components/Header/Header';
import HeaderLinks from '../components/Header/HeaderLinks';
import GridContainer from '../components/Grid/GridContainer';
import GridItem from '../components/Grid/GridItem';
import Parallax from '../layouts/Parallax';
import TimelineSection from './sections/TimelineSection';
import Brand from '../components/Logo';

export default function Main() {
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
        <title>GEDAAM</title>
      </Head>
      <Parallax
        // Rendering function to allow setting the id of element to be scrolled inside Parallax element
        header={scrollTargetId => (
          <Header
            brand={<Brand showSideText />}
            color="transparent"
            rightLinks={<HeaderLinks />}
            changeColorOnScroll={{
              color: 'rose',
              scrollTargetId
            }}
            fixed
          />
        )}
        imageSrc="/img/landing.jpg"
        content={
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Estude diferente.</h1>
                <h4 className={classes.subtitle}>
                  O GEDAAM é o maior grupo de estudos da Faculdade de Medicina da UFMG. Aqui nós
                  discutimos sobre novas abordagens para o ensino e aprendizado.
                </h4>
              </div>
            </GridItem>
          </GridContainer>
        }
      >
        <TimelineSection />
      </Parallax>
    </>
  );
}
