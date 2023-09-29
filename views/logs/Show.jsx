const React = require("react");
const moment = require("moment");
const DefaultLayout = require("../layouts/Default");

const buttonStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "300px",
  height: "60px",
  cursor: "pointer",
  border: "1px solid white",
  borderRadius: "8px",
  color: "white",
  marginTop: "40px",
  fontSize: "28px",
};

const linkStyles = {
  textDecoration: "none",
  color: "white",
};

const logStyle = {
  fontSize: "24px",
};

class Show extends React.Component {
  render() {
    const log = this.props.log;

    return (
      <DefaultLayout title="Log Show Page">
        <div style={logStyle}>
          Title: {log.title} <br />
          Entry: {log.entry} <br />
          {log.shipIsBroken
            ? "The ship is broken"
            : "The ship is not broken"}{" "}
          <br />
          Date of creation:{" "}
          {moment(log.createdAt).format("MMM Do YYYY, h:mm a")} <br />
          {moment(log.createdAt) < moment(log.updatedAt) && (
            <>
              Date of Editing:{" "}
              {moment(log.updatedAt).format("MMM Do YYYY, h:mm a")} <br />
            </>
          )}
          <a style={linkStyles} href="/logs">
            <div style={buttonStyles}>Back</div>
          </a>
        </div>
      </DefaultLayout>
    );
  }
}
module.exports = Show;
