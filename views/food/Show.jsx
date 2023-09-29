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

const foodStyle = {
  fontSize: "24px"
}

class Show extends React.Component {
  render() {
    const food = this.props.food;

    return (
      <DefaultLayout title="Food Log Show Page">
        <div style={foodStyle}>
          Name: {food.name} <br />
          Meal Time: {food.mealTime} <br />
          {food.mealIsDelicious
            ? "The food is delicious"
            : "The food is not delicious"}{" "}
          <br />
          Date of food log creation:{" "}
          {moment(food.createdAt).format("MMM Do YYYY, h:mm a")} <br />
          {moment(food.createdAt) < moment(food.updatedAt) && (
            <>
              Date of food log editing:{" "}
              {moment(food.updatedAt).format("MMM Do YYYY, h:mm a")} <br />
            </>
          )}
        </div>
        <a style={linkStyles} href="/food">
          <div style={buttonStyles}>Back</div>
        </a>
      </DefaultLayout>
    );
  }
}
module.exports = Show;
