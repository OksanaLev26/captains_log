const React = require('react');

const myStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  padding: "20px",
  color: "#ffffff",
  backgroundColor: "#673ab7",
  minHeight: "100vh",
};

class DefaultLayout extends React.Component {
  render() {
    return (
      <html>
        <head><title>{this.props.title}</title></head>
        <link rel="stylesheet" href="/css/app.css" /> 
        <body style={myStyle}>
        <h1>{this.props.title}</h1>
        {this.props.children}
        </body>
      </html>
    );
  }
}

module.exports = DefaultLayout;