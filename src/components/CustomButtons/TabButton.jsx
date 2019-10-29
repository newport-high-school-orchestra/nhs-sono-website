import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import * as Constants from "views/Vars.jsx";
import { Link } from "react-router-dom";
import Button from "components/CustomButtons/Button.jsx";
import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function TabButton({ ...props }) {
  // tipText,
  const { classTop } = props;
  const classes = classTop.classes;
  const iconType = classTop.icon;
  iconType.className = classes.icons;
  return (
    <ListItem className={classes.listItem}>
      <Tooltip
        title={classes.tipText}
        placement={window.innerWidth > 959 ? "top" : "left"}
        classes={{ tooltip: classes.tooltip }}
      >
        <Button color="transparent" className={classes.navLink}>
          <Link
            to={classes.link}
            variant="inherit"
            className={classes.navLinkSetup}
          >
            {iconType} {classes.buttonText}
          </Link>
        </Button>
      </Tooltip>
    </ListItem>
  );
}

export default withStyles(headerLinksStyle)(TabButton);
