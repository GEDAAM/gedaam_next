/*eslint-disable*/
import React from "react";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";

// core components
import Button from "components/Buttons/Button.js";

import styles from "assets/jss/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks() {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
      <Button color="transparent" href="/" className={classes.navLink}>Inscrição</Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="facebook-tooltip"
          title="Nos siga no Facebook"
          placement="top"
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/gedaam?ref=gedaam"
            target="_blank"
            className={classes.navLink}
          >
            <i className={`${classes.socialIcons} fab fa-facebook`} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Nos siga no Instagram"
          placement="top"
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/gedaam_?ref=gedaam"
            target="_blank"
            className={classes.navLink}
          >
            <i className={`${classes.socialIcons} fab fa-instagram`} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
