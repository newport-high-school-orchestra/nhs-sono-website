import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import pillsStyle from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.jsx";
import React from "react";
import PropTypes from "prop-types";
import * as Constants from "views/Vars.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Header from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import classNames from "classnames";
import Footer from "components/Footer/Footer.jsx";
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import List from "@material-ui/icons/List";
import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";

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
                                <GridItem xs={12} sm={12} md={8} lg={6}>
                                    <NavPills
                                        color="primary"
                                        tabs={[
                                            {
                                                tabButton: "Dashboard",
                                                tabIcon: Dashboard,
                                                tabContent: (
                                                    <span>
                                                        <p>
                                                            Collaboratively administrate empowered markets via
                                                            plug-and-play networks. Dynamically procrastinate
                                                            B2C users after installed base benefits.
                </p>
                                                        <br />
                                                        <p>
                                                            Dramatically visualize customer directed convergence
                                                            without revolutionary ROI. Collaboratively
                                                            administrate empowered markets via plug-and-play
                                                            networks. Dynamically procrastinate B2C users after
                                                            installed base benefits.
                </p>
                                                        <br />
                                                        <p>
                                                            Dramatically visualize customer directed convergence
                                                            without revolutionary ROI. Collaboratively
                                                            administrate empowered markets via plug-and-play
                                                            networks. Dynamically procrastinate B2C users after
                                                            installed base benefits.
                </p>
                                                    </span>
                                                )
                                            },
                                            {
                                                tabButton: "Schedule",
                                                tabIcon: Schedule,
                                                tabContent: (
                                                    <span>
                                                        <p>
                                                            Efficiently unleash cross-media information without
                                                            cross-media value. Quickly maximize timely
                                                            deliverables for real-time schemas.
                </p>
                                                        <br />
                                                        <p>
                                                            Dramatically maintain clicks-and-mortar solutions
                                                            without functional solutions. Dramatically visualize
                                                            customer directed convergence without revolutionary
                                                            ROI. Collaboratively administrate empowered markets
                                                            via plug-and-play networks. Dynamically
                                                            procrastinate B2C users after installed base
                                                            benefits.
                </p>
                                                    </span>
                                                )
                                            },
                                            {
                                                tabButton: "Tasks",
                                                tabIcon: List,
                                                tabContent: (
                                                    <span>
                                                        <p>
                                                            Collaboratively administrate empowered markets via
                                                            plug-and-play networks. Dynamically procrastinate
                                                            B2C users after installed base benefits.
                </p>
                                                        <br />
                                                        <p>
                                                            Dramatically visualize customer directed convergence
                                                            without revolutionary ROI. Collaboratively
                                                            administrate empowered markets via plug-and-play
                                                            networks. Dynamically procrastinate B2C users after
                                                            installed base benefits.
                </p>
                                                        <br />
                                                        <p>
                                                            Dramatically visualize customer directed convergence
                                                            without revolutionary ROI. Collaboratively
                                                            administrate empowered markets via plug-and-play
                                                            networks. Dynamically procrastinate B2C users after
                                                            installed base benefits.
                </p>
                                                    </span>
                                                )
                                            }
                                        ]}
                                    />
                                </GridItem>
                            </GridContainer>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}


export default withStyles(profilePageStyle)(PerformancePage);
