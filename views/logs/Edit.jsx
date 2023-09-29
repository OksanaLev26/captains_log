const React = require("react");
const DefaultLayout = require("../layouts/Default");

const buttonStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "200px",
  height: "45px",
  cursor: "pointer",
  border: "1px solid white",
  borderRadius: "8px",
  color: "black",
  marginTop: "20px",
  fontSize: "20px",
  backgroundColor: "white",
};

const formStyles = {
  fontSize: "25px",
  width: "50%",
};

const inputStyle = {
  fontSize: "20px",
  marginBottom: "20px",
};

const linkStyles = {
  textDecoration: "none",
  color: "white",
  fontSize: "20px",
};

const footerStyles = {
  display: "flex",
  justifyContent: "space-evenly",
};

class Edit extends React.Component {
  render() {
    return (
      <DefaultLayout title="Logs Edit Page">
        <form
          style={formStyles}
          action={`/logs/${this.props.log._id}?_method=PUT`}
          method="POST"
        >
          Title:{" "}
          <input
            style={inputStyle}
            type="text"
            name="title"
            defaultValue={this.props.log.title}
          />
          <br />
          Entry:{" "}
          <input
            style={inputStyle}
            type="textarea"
            name="entry"
            defaultValue={this.props.log.entry}
          />
          <br />
          Is Ship Broken:{" "}
          {this.props.log.shipIsBroken ? (
            <input
              style={inputStyle}
              type="checkbox"
              name="shipIsBroken"
              defaultChecked
            />
          ) : (
            <input style={inputStyle} type="checkbox" name="shipIsBroken" />
          )}
          <br />
          <div style={footerStyles}>
          <a href="/logs" style={linkStyles}>
              <div style={buttonStyles}>Back</div>
            </a>
            <input style={buttonStyles} type="submit" name="" value="Submit Changes" />
          </div>
        </form>
      </DefaultLayout>
    );
  }
}
module.exports = Edit;
