
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

import googleCalendarPlugin from '@fullcalendar/google-calendar';
import dayGridPlugin from '@fullcalendar/daygrid';
import FullCalendar from '@fullcalendar/react';

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

                <CardBody>
                    <iframe style={{ fontFamily: 'Open Sans' }} src="https://calendar.google.com/calendar/b/4/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FLos_Angeles&amp;src=bmV3cG9ydG9yY2hlc3RyYUBnbWFpbC5jb20&amp;color=%23039BE5&amp;mode=AGENDA&amp;title=%20&amp;showTitle=0&amp;showPrint=0&amp;showTz=1&amp;showTabs=0&amp;showCalendars=0" height="500" frameborder="0" scrolling="no"></iframe>
                    <Link to='/calendar'><Button color={Constants.mainColor} round>Calendar</Button></Link>
                </CardBody>
            </Card>
        );
    }
}

export default withStyles(style)(CalendarCard);