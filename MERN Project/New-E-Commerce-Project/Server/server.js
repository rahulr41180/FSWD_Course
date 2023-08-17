
// const express = require("express");

// module based / ES6 Based
import express from "express";
import morgan from "morgan";
import cors from "cors";
import { connectDB } from "./config/db.js";

// For showing the different colors in terminal.
// const colors = require("colors");

// module based / ES6 Based
import colors from "colors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import categoryRoutes from "./routes/categoryRoute.js";
import productRoutes from "./routes/productRoutes.js";
// Configure .env file

// If .env file is in root directory than we have to configured by
dotenv.config();
// If .env file is inside the folder than we have to configured by
// dotenv.config({path : "./folder directory"})

// rest object for making API

const app = express();
var a = 5;
var b = 5;
console.log(b);

// rest APIs

// middlewares

app.use(cors());
app.use(express.json()); // we enable to send also json data.
app.use(morgan("dev")); // For checking which APIs hits.

// routes

app.use("/api/v1/auth", authRoutes);

app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

app.get("/", (req, res) => {
    res.send("<h1>Hello World</h1>")
})

// PORT

const PORT = process.env.PORT || 8080;

// Funtion for run the server

app.listen(PORT, async () => {
    try {
        console.log(`Server running on ${process.env.DEV_MODE} mode on ${PORT}`.bgCyan.white);

        await connectDB();

    } catch (error) {

        console.log(`Error in server connection on port ${PORT} :`, error);

    }
})