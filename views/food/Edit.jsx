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
      <DefaultLayout title="Food Edit Page">
        <form
          style={formStyles}
          action={`/food/${this.props.food._id}?_method=PUT`}
          method="POST"
        >
          Name:{" "}
          <input
            style={inputStyle}
            type="text"
            name="name"
            defaultValue={this.props.food.name}
          />
          <br />
          Meal Time:{" "}
          <input
            style={inputStyle}
            type="text"
            name="mealTime"
            defaultValue={this.props.food.mealTime}
          />
          <br />
          Is meal delicious:{" "}
          {this.props.food.mealIsDelicious ? (
            <input
              style={inputStyle}
              type="checkbox"
              name="mealIsDelicious"
              defaultChecked
            />
          ) : (
            <input style={inputStyle} type="checkbox" name="mealIsDelicious" />
          )}
          <br />
          <div style={footerStyles}>
            <a href="/food" style={linkStyles}>
              <div style={buttonStyles}>Back</div>
            </a>
            <input
              type="submit"
              name=""
              value="Submit Changes"
              style={buttonStyles}
            />
          </div>
        </form>
      </DefaultLayout>
    );
  }
}
module.exports = Edit;
