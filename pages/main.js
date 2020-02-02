import { makeStyles } from '@material-ui/core/styles';
import styles from '../assets/jss/nextjs-material-kit/pages/components';

import GridContainer from '../components/Grid/GridContainer';
import GridItem from '../components/Grid/GridItem';

import SectionBasics from '../pages-sections/Components-Sections/SectionBasics';

import Parallax from '../layouts/Parallax';

export default function Main() {
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  return (
    <div>
      <Parallax
        title={
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
        }
        content={<SectionBasics />}
      />
    </div>
  );
}
