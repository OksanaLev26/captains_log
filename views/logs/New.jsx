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

class New extends React.Component {
  render() {
    return (
      <DefaultLayout title="New Log Page">
        <form style={formStyles} action="/logs" method="POST">
          Title: <input style={inputStyle} type="text" name="title" />
          <br />
          Entry: <input style={inputStyle} type="textarea" name="entry" />
          <br />
          Is Ship Broken: <input style={inputStyle} type="checkbox" name="shipIsBroken" />
          <br />
          <div style={footerStyles}>
            <a style={linkStyles} href="/logs">
              <div style={buttonStyles}>Back</div>
            </a>
            <button style={buttonStyles} type="submit">
              Create Log
            </button>
          </div>
        </form>
      </DefaultLayout>
    );
  }
}

module.exports = New;
