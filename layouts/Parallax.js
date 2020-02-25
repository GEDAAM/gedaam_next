import { cloneElement } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import styles from '../assets/jss/pages/main';

import Footer from '../components/Footer/Footer';
import { parallax } from './Parallax.styles';

export default function Parallax(props) {
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  return (
    <div>
      <div>
        {cloneElement(props.header, {
          changeColorOnScroll: {
            color: 'rose',
            scrollTargetId: 'parallax-wrapper'
          }
        })}
        <div className="wrapper" id="parallax-wrapper">
          <div className="section parallax">
            <div className={classes.container}>{props.content}</div>
          </div>
          <div>{props.children}</div>
          <Footer />
        </div>
      </div>
      <style jsx>{parallax}</style>
      <style jsx>{/* CSS */ `
        .parallax::before {
          background-image: linear-gradient(${props.overlayColor}, ${props.overlayColor}),
            url(${props.image});
        }
      `}</style>
    </div>
  );
}

Parallax.defaultProps = {
  overlayColor: 'rgba(255, 255, 255, 0)'
};

Parallax.propTypes = {
  children: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
  header: PropTypes.node.isRequired,
  image: PropTypes.string.isRequired,
  overlayColor: PropTypes.string
};
