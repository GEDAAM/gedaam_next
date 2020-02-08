import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import styles from 'assets/jss/pages/componentsSections/basicsStyle.js';

const useStyles = makeStyles(styles);
export default function LandingSection() {
  const classes = useStyles();

  return (
    <div className={classes.sections}>
      <div className={classes.container}>
        <div className={classes.title}>
          <h2>Basic Elements</h2>
        </div>
        <div id="buttons">
          <div className={classes.title}>
            <h3>
              Buttons
              <br />
              <small>Pick your style</small>
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit molestiae expedita, autem
              ea quibusdam odit aliquid perspiciatis dolorum reprehenderit earum mollitia libero
              obcaecati repellat consectetur rerum sunt quaerat quae quasi!
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus eius optio officiis
              commodi accusamus debitis consequatur dolore adipisci est dolores fugit deserunt, hic
              numquam unde, eos cupiditate culpa, veniam tempora.
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas in ipsum qui quo
              quae est dicta ipsam debitis expedita, earum eum modi quod. Ex accusantium nesciunt,
              sed fugiat voluptas quod.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
