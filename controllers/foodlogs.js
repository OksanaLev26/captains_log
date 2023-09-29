const express = require('express');
const router = express.Router();

const Food = require("../models/food");

// Remember INDUCES))

// index
router.get("/food", async (req, res) => {
    try {
      const food = await Food.find();
      res.render("food/Index", {
        food: food,
      });
    } catch (error) {
      console.log(error);
    }
  });
  
  // new
  router.get("/food/new", async (req, res) => {
    try {
      res.render("food/New");
    } catch (error) {
      console.log(error);
    }
  });
  
  // delete
  router.delete("/food/:id", async (req, res) => {
    try {
      await Food.findByIdAndRemove(req.params.id);
      res.redirect("/food");
    } catch (error) {
      console.log(error);
    }
  });
  
  // update
  router.put("/food/:id", async (req, res) => {
      try {
        if (req.body.mealIsDelicious === "on") {
          req.body.mealIsDelicious = true;
        } else {
          req.body.mealIsDelicious = false;
        }
        await Food.findByIdAndUpdate(req.params.id, req.body);
        res.redirect("/food");
      } catch (error) {
        console.log(error);
      }
    });
  
  // create
  router.post("/food", async (req, res) => {
    try {
      if (req.body.mealIsDelicious === "on") {
        req.body.mealIsDelicious = true;
      } else {
        req.body.mealIsDelicious = false;
      }
      await Food.create(req.body);
      res.send(req.body);
      res.redirect("/food");
    } catch (error) {
      console.log(error);
    }
  });
  
  // edit
  router.get("/food/:id/edit", async (req, res) => {
      try {
        const foundFood = await Food.findById(req.params.id);
        res.render("food/Edit", { food: foundFood });
      } catch (error) {
        console.log(error);
      }
    });
  
  // show
  router.get("/food/:index", async (req, res) => {
    try {
      const food = await Food.findById(req.params.index);
      res.render("food/Show", {
        food: food,
      });
    } catch (error) {
      console.log(error);
    }
  });

  module.exports = router;