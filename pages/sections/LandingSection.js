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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit molestiae expedita, autem
          quibusdam odit aliquid perspiciatis dolorum reprehenderit earum mollitia libero obcaecati
          repellat consectetur rerum sunt quaerat quae quasi! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Cupiditate expedita beatae sit dolor perferendis neque tempora eaque
          ipsum saepe nulla consequuntur voluptates, amet ab minima iusto dolorum corrupti tempore
          dolorem! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi incidunt eveniet
          nihil rem ab iusto animi aspernatur sunt, adipisci possimus debitis. Maiores porro, quidem
          quibusdam officiis incidunt cum alias provident.
        </div>
      </div>
    </div>
  );
}
