import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import styles from '../assets/jss/pages/main';

import Footer from '../components/Footer/Footer';
import { parallaxStyles } from './Parallax.styles';

export default function Parallax({ header, children: section, content, overlayColor, imageSrc }) {
  const useStyles = makeStyles(styles);
  const classes = useStyles();

  return (
    <>
      <div>
        {header('parallax-wrapper')}
        <div className="parallax__wrapper" id="parallax-wrapper">
          <div className="parallax parallax__section">
            <div className={classes.container}>{content}</div>
          </div>
          <section>{section}</section>
          <Footer />
        </div>
      </div>
      <style jsx>{parallaxStyles}</style>
      <style jsx>{/* CSS */ `
        .parallax::before {
          background-image: linear-gradient(${overlayColor}, ${overlayColor}), url(${imageSrc});
        }
      `}</style>
    </>
  );
}

Parallax.defaultProps = {
  overlayColor: 'rgba(255, 255, 255, 0)'
};

Parallax.propTypes = {
  children: PropTypes.node.isRequired,
  content: PropTypes.node.isRequired,
  header: PropTypes.func.isRequired,
  imageSrc: PropTypes.string.isRequired,
  overlayColor: PropTypes.string
};
