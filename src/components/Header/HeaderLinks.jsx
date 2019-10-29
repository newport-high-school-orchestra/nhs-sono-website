/*!

=========================================================
* Material Kit React - v1.7.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
// import { Link } from "@reach/router";
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import * as Constants from "views/Vars.jsx";
// @material-ui/icons
import {
  People,
  LibraryMusic,
  Event,
  Money,
  CalendarToday,
  ContactPhone,
  Inbox
} from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";
import Header from "components/Header/Header.jsx";
// import TabButton from "components/CustomButtons/TabButton.jsx";
function HeaderFull() {
  return (
    <Header
      color="transparent"
      routes={dashboardRoutes}
      brand="Supporters of NHS Orchestras"
      rightLinks={<HeaderLinks />}
      fixed
      changeColorOnScroll={{
        height: 400,
        color: "white"
      }}
      // {...rest}
    />
  );
}

function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Tooltip
          title="Knights in Vienna"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Link to="/kiv" variant="inherit" className={classes.navLinkSetup}>
            <Button color="transparent" className={classes.navLink}>
              <Event className={classes.icons} /> KIV
            </Button>
          </Link>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          title="Today's PPT"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Link
            to="/updates"
            variant="inherit"
            className={classes.navLinkSetup}
          >
            <Button color="transparent" className={classes.navLink}>
              <Inbox className={classes.icons} /> UPDATES
            </Button>
          </Link>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/calendar" variant="inherit" className={classes.navLinkSetup}>
          <Button color="transparent" className={classes.navLink}>
            <Event className={classes.icons} /> Calendar
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          hoverColor={Constants.mainColor}
          buttonText="About Us"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={People}
          dropdownList={[
            <Link to="/" className={classes.dropdownLink}>
              Officers
            </Link>,
            <Link to="/conductor" className={classes.dropdownLink}>
              Our Conductor
            </Link>,
            <Link to="/" className={classes.dropdownLink}>
              Honors and Accomplishments
            </Link>
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          title="See us in action!"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Link
            to="/performance"
            variant="inherit"
            className={classes.navLinkSetup}
          >
            <Button color="transparent" className={classes.navLink}>
              <LibraryMusic className={classes.icons} /> Performance
            </Button>
          </Link>
        </Tooltip>
      </ListItem>
      {/* <TabButton
        classes={classes}
        icons={<People />}
        tipText="hello"
        buttonText="helo"
      /> */}
      {/* <ListItem className={classes.listItem}>
        <Button
          to="/"
          href="/contact"
          tag={Link}
          color="transparent"
          className={classes.navLink}
        >
          <ContactPhone className={classes.icons} /> Contact
        </Button>
      </ListItem> */}
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/newport_orchestra"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem>
      {/* <ListItem className={classes.listItem}>
        <Tooltip
          title="We greatly appreciate your donations!"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            to="/"
            href="/donate"
            tag={Link}
            color="transparent"
            className={classes.navLink}
          >
            <Money className={classes.icons} /> Donate
          </Button>
        </Tooltip>
      </ListItem> */}
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
