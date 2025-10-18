// // server.js
// import express from "express";
// import Razorpay from "razorpay";
// import dotenv from "dotenv";
// import cors from "cors";

// dotenv.config();
// const app = express();
// app.use(express.json());
// app.use(cors());

// // Initialize Razorpay instance
// const razorpay = new Razorpay({
//   key_id: process.env.RAZORPAY_KEY_ID,
//   key_secret: process.env.RAZORPAY_KEY_SECRET,
// });

// // POST: Create Subscription
// app.post("/create-subscription", async (req, res) => {
//   try {
//     const { plan_id } = req.body;

//     const subscription = await razorpay.subscriptions.create({
//       plan_id: plan_id,
//       customer_notify: 1,
//       total_count: 12, // 12 months
//     });

//     res.json(subscription);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Failed to create subscription" });
//   }
// });

// app.listen(5000, () => console.log("Server running on port 5000"));







// const express = require("express");
// const Razorpay = require("razorpay");
// const cors = require("cors");
// const dotenv = require("dotenv");

// dotenv.config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// // ✅ Replace with your Razorpay Test Key & Secret
// const razorpay = new Razorpay({
//   key_id: process.env.RAZORPAY_KEY_ID || "rzp_test_yourkeyid",
//   key_secret: process.env.RAZORPAY_SECRET || "yourkeysecret",
// });

// // ✅ Create Subscription Route
// app.post("/create-subscription", async (req, res) => {
//   try {
//     const { planId, customerEmail } = req.body;

//     const subscription = await razorpay.subscriptions.create({
//       plan_id: planId, // Create this plan in Razorpay Dashboard
//       customer_notify: 1,
//       total_count: 12, // e.g. monthly for 12 months
//       notes: {
//         email: customerEmail,
//       },
//     });

//     res.json({
//       id: subscription.id,
//       status: subscription.status,
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Failed to create subscription" });
//   }
// });

// // ✅ Create One-Time Payment Order (optional)
// app.post("/create-order", async (req, res) => {
//   try {
//     const { amount, currency } = req.body;
//     const options = {
//       amount: amount * 100, // amount in paise
//       currency: currency || "INR",
//       receipt: "order_rcptid_11",
//     };
//     const order = await razorpay.orders.create(options);
//     res.json(order);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Failed to create order" });
//   }
// });

// app.get("/", (req, res) => {
//   res.send("✅ Razorpay Server Running...");
// });

// const PORT = 5000;
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));





const express = require("express");
const Razorpay = require("razorpay");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Replace these with your actual Razorpay plan IDs
const PLAN_IDS = {
  Silver: "plan_SilverId",
  Gold: "plan_GoldId",
  Platinum: "plan_PlatinumId",
};

app.post("/create-subscription", async (req, res) => {
  try {
    const { plan } = req.body;

    const subscription = await razorpay.subscriptions.create({
      plan_id: PLAN_IDS[plan],
      customer_notify: 1,
      total_count: plan === "Platinum" ? 12 : plan === "Gold" ? 3 : 1,
      start_at: Math.floor(Date.now() / 1000),
    });

    res.json(subscription);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create subscription" });
  }
});

// Use 0.0.0.0 so other devices can reach this
const PORT = 5000;
app.listen(PORT, "0.0.0.0", () =>
  console.log(`Server running at http://0.0.0.0:${PORT}`)
);
