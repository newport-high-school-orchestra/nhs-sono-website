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
// @material-ui/icons
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import { Email } from "@material-ui/icons";
import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";
import * as Constants from "views/Vars.jsx";

import { Videocam, Camera, MusicNote } from "@material-ui/icons/";

class PerformancePage extends React.Component {
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
          <div>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                    <div justify="center">
                      <h2 className={classes.title} justify="center">
                        Performance
                      </h2>
                    </div>
                  </div>
                </GridItem>
                <GridItem xs={12} sm={12} md={8} lg={10}>
                  <NavPills
                    color={Constants.mainColor}
                    tabs={[
                      {
                        tabButton: "Audio",
                        tabIcon: MusicNote,
                        tabContent: (
                          <span>
                            <p>
                              Collaboratively administrate empowered markets via
                              plug-and-play networks. Dynamically procrastinate
                              B2C users after installed base benefits.
                            </p>
                            <br />
                            <p>
                              Dramatically visualize customer directed
                              convergence without revolutionary ROI.
                              Collaboratively administrate empowered markets via
                              plug-and-play networks. Dynamically procrastinate
                              B2C users after installed base benefits.
                            </p>
                            <br />
                            <p>
                              Dramatically visualize customer directed
                              convergence without revolutionary ROI.
                              Collaboratively administrate empowered markets via
                              plug-and-play networks. Dynamically procrastinate
                              B2C users after installed base benefits.
                            </p>
                          </span>
                        )
                      },
                      {
                        tabButton: "Video",
                        tabIcon: Videocam,
                        tabContent: (
                          <span>
                            <p>
                              Efficiently unleash cross-media information
                              without cross-media value. Quickly maximize timely
                              deliverables for real-time schemas.
                            </p>
                            <br />
                            <p>
                              Dramatically maintain clicks-and-mortar solutions
                              without functional solutions. Dramatically
                              visualize customer directed convergence without
                              revolutionary ROI. Collaboratively administrate
                              empowered markets via plug-and-play networks.
                              Dynamically procrastinate B2C users after
                              installed base benefits.
                            </p>
                          </span>
                        )
                      },
                      {
                        tabButton: "Photo",
                        tabIcon: Camera,
                        tabContent: (
                          <span>
                            <p>
                              Collaboratively administrate empowered markets via
                              plug-and-play networks. Dynamically procrastinate
                              B2C users after installed base benefits.
                            </p>
                            <br />
                            <p>
                              Dramatically visualize customer directed
                              convergence without revolutionary ROI.
                              Collaboratively administrate empowered markets via
                              plug-and-play networks. Dynamically procrastinate
                              B2C users after installed base benefits.
                            </p>
                            <br />
                            <p>
                              Dramatically visualize customer directed
                              convergence without revolutionary ROI.
                              Collaboratively administrate empowered markets via
                              plug-and-play networks. Dynamically procrastinate
                              B2C users after installed base benefits.
                            </p>
                          </span>
                        )
                      }
                    ]}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer justify="center">
                <GridItem
                  xs={12}
                  sm={12}
                  md={8}
                  className={classes.navWrapper}
                ></GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

PerformancePage.propTypes = {
  classes: PropTypes.object
};

export default withStyles(profilePageStyle)(PerformancePage);
