const React = require("react");
const DefaultLayout = require("../layouts/Default");

const linkStyles = {
  textDecoration: "none",
  color: "white",
  fontSize: "25px",
  margin: "20px",
};

const liStyles = {
  marginBottom: "15px",
  display: "flex",
  alignItems: "baseline",
};

const buttonStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "250px",
  height: "60px",
  cursor: "pointer",
  border: "1px solid white",
  borderRadius: "8px",
  color: "white",
  fontSize: "24px",
};

const logButtonStyles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "150px",
  height: "40px",
  cursor: "pointer",
  border: "1px solid white",
  borderRadius: "8px",
  color: "white",
  fontSize: "20px",
  marginRight: "15px",
  backgroundColor: "#673ab7",
  textDecoration: "none",
};

class Index extends React.Component {
  render() {
    const logs = this.props.logs;
    return (
      <DefaultLayout title={"Logs Index Page"}>
        <nav>
        <a style={linkStyles} href="/logs/new">
            <div style={buttonStyles}>Create a New Log</div>
          </a>
        </nav>
        <ul>
          {logs.map((log, i) => {
            return (
              <li style={liStyles} key={i}>
                <a style={linkStyles} href={`/logs/${log.id}`}>{log.title}</a>
                <form
                  action={`/logs/${log._id}?_method=DELETE`}
                  method="POST"
                >
                  <input style={logButtonStyles} type="submit" value="DELETE" />
                </form>
                <a style={logButtonStyles} href={`/logs/${log._id}/edit`}>Edit This Log</a> 
              </li>
            );
          })}
        </ul>
      </DefaultLayout>
    );
  }
}

module.exports = Index;
