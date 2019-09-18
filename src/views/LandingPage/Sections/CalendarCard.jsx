
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
// var calendarEl = document.getElementById('calendar');

// let calendar = new Calendar(calendarEl, {
//     plugins: [googleCalendarPlugin, listPlugin],
//     googleCalendarApiKey: 'AIzaSyAM_a9dcech-cruVTLCBdkZIUeNQ6k77IY',
//     defaultView: 'listWeek',
//     events: {
//         googleCalendarId: 'newportorchestra@gmail.com'
//     }
// });


class CalendarCard extends React.Component {
    render() {
        const { classes } = this.props;
        return (

            // style={{ width: "20rem" }}
            <Card>

                <div>
                    <iframe src="https://feed.mikle.com/widget/v2/116568/" height="402px" width="100%" class="fw-iframe" scrolling="no" frameborder="0"></iframe>
                    <Link to='/calendar'><Button color={Constants.mainColor} round>Calendar</Button></Link>
                </div>
            </Card>
        );
    }
}

export default withStyles(style)(CalendarCard);