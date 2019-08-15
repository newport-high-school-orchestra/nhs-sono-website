
import React from "react";
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Button from "components/CustomButtons/Button.jsx";
import { Link } from "react-router-dom";
import imagesStyles from "assets/jss/material-kit-react/imagesStyles.jsx";
import * as Constants from "views/Vars.jsx"
import { cardTitle } from "assets/jss/material-kit-react.jsx";

const style = {
    ...imagesStyles,
    cardTitle,
};

class CalendarCard extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            // style={{ width: "20rem" }}
            <Card>
                <p>
                    Need to add cards for calendar, KIV, and other info here
                </p>
                <CardBody>
                    {/* <h4 className={classes.cardTitle}>Calendar</h4> */}
                    <Link to='/calendar'><Button color={Constants.mainColor} round>Calendar</Button></Link>
                </CardBody>
            </Card>
        );
    }
}

export default withStyles(style)(CalendarCard);