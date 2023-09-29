const express = require('express');
const router = express.Router();

const Log = require("../models/logs");

// Remember INDUCES))

// index
router.get("/logs", async (req, res) => {
    try {
      console.log('Log', Log)
      const logs = await Log.find();
      res.render("logs/Index", {
        logs: logs,
      });
    } catch (error) {
      console.log(error);
    }
  });
  
  // new
  router.get("/logs/new", async (req, res) => {
    try {
      res.render("logs/New");
    } catch (error) {
      console.log(error);
    }
  });
  
  // delete
  router.delete("/logs/:id", async (req, res) => {
    try {
      await Log.findByIdAndRemove(req.params.id);
      res.redirect("/logs");
    } catch (error) {
      console.log(error);
    }
  });
  
  // update
  router.put("/logs/:id", async (req, res) => {
      try {
        if (req.body.shipIsBroken === "on") {
          req.body.shipIsBroken = true;
        } else {
          req.body.shipIsBroken = false;
        }
        await Log.findByIdAndUpdate(req.params.id, req.body);
        res.redirect("/logs");
      } catch (error) {
        console.log(error);
      }
    });
  
  // create
  router.post("/logs", async (req, res) => {
    try {
      if (req.body.shipIsBroken === "on") {
        req.body.shipIsBroken = true;
      } else {
        req.body.shipIsBroken = false;
      }
      await Log.create(req.body);
      res.send(req.body);
      res.redirect("/logs");
    } catch (error) {
      console.log(error);
    }
  });
  
  // edit
  router.get("/logs/:id/edit", async (req, res) => {
      try {
        const foundLog = await Log.findById(req.params.id);
        res.render("logs/Edit", { log: foundLog });
      } catch (error) {
        console.log(error);
      }
    });
  
  // show
  router.get("/logs/:index", async (req, res) => {
    try {
      const log = await Log.findById(req.params.index);
      res.render("logs/Show", {
        log: log,
      });
    } catch (error) {
      console.log(error);
    }
  });

  module.exports = router;