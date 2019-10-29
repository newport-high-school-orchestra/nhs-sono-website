import React from "react";
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Button from "components/CustomButtons/Button.jsx";
import { Link } from "react-router-dom";
import imagesStyles from "assets/jss/material-kit-react/imagesStyles.jsx";
import * as Constants from "views/Vars.jsx";
import { cardTitle } from "assets/jss/material-kit-react.jsx";

const style = {
  ...imagesStyles,
  cardTitle
};

class UpdatesCard extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Card>
        <div>
          <iframe
            class="airtable-embed"
            src="https://airtable.com/embed/shrx3rTftM6yK3iFW?backgroundColor=cyan&layout=card"
            frameborder="0"
            onmousewheel=""
            width="100%"
            height={Constants.cardHeight}
            style={{
              background: "transparent",
              border: "1px solid #ccc"
            }}
          ></iframe>
          <Link to="/updates">
            <Button color={Constants.mainColor} round>
              Full Page
            </Button>
          </Link>
        </div>
      </Card>
    );
  }
}

export default withStyles(style)(UpdatesCard);
