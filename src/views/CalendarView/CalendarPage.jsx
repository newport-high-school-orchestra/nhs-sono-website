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
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";
import * as Constants from "views/Vars.jsx";

import googleCalendarPlugin from '@fullcalendar/google-calendar';
import dayGridPlugin from '@fullcalendar/daygrid';
import FullCalendar from '@fullcalendar/react';

class CalendarPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    return (
      <div>
        <Header
          color="transparent"
          href="/"
          brand={Constants.siteBrand}
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "white"
          }}
          {...rest}
        />
        <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div> <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.container}>

              </div>
            </GridItem>
          </GridContainer>
            <div className={classes.description}>
              <p>
                Barney Blough currently conducts the Sinfonia Orchestra with the Bellevue Youth Symphony and the Newport High School Orchestra. He has served as Music Director of the Seattle Chamber Orchestra, Assistant Conductor of the Rainier Symphony, and Assistant Conductor of the Lake Union Civic Orchestra. He has been a guest conductor of the Spokane Symphony, Orchestra Seattle, and Emerald City Philharmonic.
                  {" "}
              </p>
              <p>
                Mr. Blough is also an active performer and is currently a member of Orchestra Seattle. He has performed with numerous orchestras and ensembles throughout the Northwest, including Federal Way Symphony, Bellevue Philharmonic, Yakima Symphony, and Wenatchee Symphony.
                  {" "}
              </p>
              <p>
                Mr. Blough holds a Bachelor of Arts degree in Music Performance from Central Washington University, a Teaching Certificate from Seattle Pacific University, and a Professional Certificate from Pacific Lutheran University. He is currently working on his Master’s degree at Central Washington University.{" "}
              </p>
            </div>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <div className={classes.container}>
                  <script type="text/javascript" src="https://feed.mikle.com/js/fw-loader.js" data-fw-param="116568/"></script>
                </div>
              </GridItem>
            </GridContainer>

          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

CalendarPage.propTypes = {
  classes: PropTypes.object
};

export default withStyles(profilePageStyle)(CalendarPage);
