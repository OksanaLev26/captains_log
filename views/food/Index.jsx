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

const logStyles = {
  display: "flex",
  alignItems: "flex-start",
};

class Index extends React.Component {
  render() {
    const food = this.props.food;
    return (
      <DefaultLayout title={"Food Logs Index Page"}>
        <nav>
          <a style={linkStyles} href="/food/new">
            <div style={buttonStyles}>Create a New Food Log</div>
          </a>
        </nav>
        {food.map((item, i) => {
          return (
            <ul key={item.name}>
              <div style={logStyles}>
                <li style={liStyles} key={i}>
                  <a style={linkStyles} href={`/food/${item.id}`}>
                    {item.name}
                  </a>
                  <form
                    action={`/food/${item._id}?_method=DELETE`}
                    method="POST"
                  >
                    <input
                      type="submit"
                      value="DELETE"
                      style={logButtonStyles}
                    />
                  </form>
                  <a href={`/food/${item._id}/edit`} style={logButtonStyles}>
                    Edit Food Log
                  </a>
                </li>
              </div>
            </ul>
          );
        })}
      </DefaultLayout>
    );
  }
}

module.exports = Index;
