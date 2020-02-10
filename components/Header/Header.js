import { useState, useEffect } from 'react';
import Link from 'next/link';
// nodejs library that concatenates classes
import classNames from 'classnames';
// nodejs library to set properties for components
import PropTypes from 'prop-types';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
// @material-ui/icons
import Menu from '@material-ui/icons/Menu';
// core components
import styles from 'assets/jss/components/headerStyle.js';

const useStyles = makeStyles(styles);

export default function Header(props) {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const headerColorChange = () => {
    const { color, changeColorOnScroll } = props;
    const targetScroller = changeColorOnScroll.scrollTargetId
      ? document.getElementById(changeColorOnScroll.scrollTargetId).scrollTop
      : window.scrollY;

    const effectHeight = changeColorOnScroll.height || window.innerHeight * 0.7;

    if (targetScroller > effectHeight) {
      document.body.getElementsByTagName('header')[0].classList.remove(classes[color]);
      document.body
        .getElementsByTagName('header')[0]
        .classList.add(classes[changeColorOnScroll.color]);
    } else {
      document.body.getElementsByTagName('header')[0].classList.add(classes[color]);
      document.body
        .getElementsByTagName('header')[0]
        .classList.remove(classes[changeColorOnScroll.color]);
    }
  };

  useEffect(() => {
    const { changeColorOnScroll } = props;
    const scrollTargetEl = changeColorOnScroll.scrollTargetId
      ? document.getElementById(changeColorOnScroll.scrollTargetId)
      : window;

    if (changeColorOnScroll) {
      scrollTargetEl.addEventListener('scroll', headerColorChange);
    }
    return function cleanup() {
      if (changeColorOnScroll) {
        scrollTargetEl.removeEventListener('scroll', headerColorChange);
      }
    };
  });

  const { color, rightLinks, leftLinks, brand, fixed, absolute } = props;
  const appBarClasses = classNames({
    [classes.appBar]: true,
    [classes[color]]: color,
    [classes.absolute]: absolute,
    [classes.fixed]: fixed
  });

  const brandComponent = (
    <Link href="/" as="/">
      <Button className={classes.title}>{brand}</Button>
    </Link>
  );

  const hiddenComponent = (
    <Hidden smDown implementation="css">
      {rightLinks}
    </Hidden>
  );
  return (
    <AppBar className={appBarClasses}>
      <Toolbar className={classes.container}>
        {leftLinks ? brandComponent : null}
        <div className={classes.flex}>{leftLinks ? hiddenComponent : brandComponent}</div>
        <Hidden smDown implementation="css">
          {rightLinks}
        </Hidden>
        <Hidden mdUp>
          <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerToggle}>
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>
      <Hidden mdUp implementation="js">
        <Drawer
          variant="temporary"
          anchor={'right'}
          open={mobileOpen}
          classes={{
            paper: classes.drawerPaper
          }}
          onClose={handleDrawerToggle}
        >
          <div className={classes.appResponsive}>
            {leftLinks}
            {rightLinks}
          </div>
        </Drawer>
      </Hidden>
    </AppBar>
  );
}

Header.defaultProps = {
  color: 'white'
};

Header.propTypes = {
  color: PropTypes.oneOf([
    'primary',
    'info',
    'success',
    'warning',
    'danger',
    'transparent',
    'white',
    'rose',
    'dark'
  ]),
  rightLinks: PropTypes.node,
  leftLinks: PropTypes.node,
  brand: PropTypes.node || PropTypes.string,
  fixed: PropTypes.bool,
  absolute: PropTypes.bool,
  changeColorOnScroll: PropTypes.shape({
    scrollTargetId: PropTypes.string,
    height: PropTypes.number,
    color: PropTypes.oneOf([
      'primary',
      'info',
      'success',
      'warning',
      'danger',
      'transparent',
      'white',
      'rose',
      'dark'
    ]).isRequired
  })
};
