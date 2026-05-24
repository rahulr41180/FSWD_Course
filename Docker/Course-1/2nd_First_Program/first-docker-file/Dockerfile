
# From command means Start building this/your container using an base image that already has Node.js installed. This image comes from Docker Hub(registry).
# FROM node:18 Use Node.js version 18 image
# FROM node:18-alpine Lightweight Node image

FROM node:23.11.1-alpine

# In a Dockerfile, WORKDIR sets the working directory inside the container.
# All commands that come after it (COPY, RUN, CMD, etc.) will execute inside that folder.
# WORKDIR /app means: “Inside the container, go to the /app folder and run the next commands there.”
# If /app does not exist, Docker automatically creates it.


WORKDIR /app

# COPY . /app means
# COPY is used to copy files from your local machine or from your repositery or from host file system into the Docker container filesystem.
# COPY <source> <destination>
# | Part   | Meaning                                 |
# | ------ | --------------------------------------- |
# | `COPY` | Docker instruction                      |
# | `.`    | current directory (your project folder) |
# | `/app` | destination folder inside container     |
# Copy all files from the current project folder into the /app directory inside the container.
# project
# │
# ├── server.js
# ├── package.json
# ├── routes
# │     └── user.js
# └── Dockerfile

# One more important Docker mistake many developers make is with this line:
# which can accidentally copy node_modules, .env, .git, logs and make the image 2-5GB bigger.
# If you want, I can show you how professionals fix this using .dockerignore and why it matters in production.

COPY . /app 

# --------------------------------------------------------

# When would apt-get install nodejs be used?
# Only if you start from a plain OS image like this:
# FROM ubuntu:latest
# RUN apt-get update && apt-get install -y nodejs npm
# Here you must install Node manually.
# Since you already wrote:
# FROM node:23.11.1
# you do NOT need:
# RUN apt-get update && apt-get install -y node:23.11.1

# RUN apt-get update && apt-get install -y nodejs npm

# ------------------------------------------------------------

# ENV is a Docker instruction used to set environment variables inside the container.
# So this line means:
# Create an environment variable called *NAME* with value *WORLD* inside the container.
# It becomes available to any process running in that container.
# 1️⃣ Syntax of `ENV`
# General syntax:
# ENV <variable_name> <value>
# Example:
# ENV PORT 3000
# Now inside the container:
# PORT=3000
# Your application can read it.
# 2️⃣ Example with Node.js
# Suppose you have a Node server.
# `server.js`
# console.log("Hello " + process.env.NAME);
# Dockerfile:
# FROM node:23.11.1
# WORKDIR /app
# COPY . /app
# ENV NAME WORLD
# When container runs:
# Hello WORLD
# Because `NAME=WORLD`.
# 3️⃣ How environment variables work inside containers
# When Docker builds the image:
# ENV NAME WORLD
# Docker internally sets:
# NAME=WORLD
# for all processes running in that container.
# 4️⃣ Real World Example (Backend API)
# In real backend systems developers use environment variables for:
# * database URL
# * API keys
# * ports
# * environment mode
# Example:
# ENV NODE_ENV production
# ENV PORT 5000
# ENV DB_HOST mongodb
# Node server:
# const port = process.env.PORT;
# app.listen(port);
# This makes the app **configurable without changing code**.
# 5️⃣ Multiple ENV variables
# You can write them like this:
# ENV NODE_ENV=production
# ENV PORT=3000
# ENV API_URL=https://api.example.com
# Or in one line:
# ENV NODE_ENV=production PORT=3000
# 6️⃣ Real Production Example
# Typical Dockerfile for Node backend:
# FROM node:20-alpine
# WORKDIR /app
# COPY package.json .
# RUN npm install
# COPY . .

# ENV NODE_ENV production
# ENV PORT 3000
# Application reads configuration using `process.env`.
# 7️⃣ How to check ENV variables inside container
# Run container shell:
# ```bash
# docker exec -it container_id sh
# ```
# Then:
# ```bash
# env
# ```
# You will see:
# NAME=WORLD
# PORT=3000
# NODE_ENV=production
# 8️⃣ Simple mental model
# Think of `ENV` like setting variables in Linux:
# export NAME=WORLD
# Docker equivalent:
# ENV NAME WORLD
# ✅ **One-line definition**
# `ENV NAME WORLD` means:
# Create an environment variable `NAME` with value `WORLD` inside the Docker container.
# 💡 If you're learning Docker deeply, the **next extremely important concept** is:
# Difference between
# ENV
# ARG
# Most developers **confuse these two**, but they behave very differently during **build time vs runtime**. I can explain that with real examples if you want.

# ---------------------------------------------------------

# RUN npm install
# 1️⃣ What `RUN npm install` does
# This command runs **during the image build phase** and installs all dependencies from `package.json` using **npm for **Node.js.
# Example `package.json`:
# {
#   "dependencies": {
    # "express": "^4.18.2"
#   }
# }
# When Docker executes:
# RUN npm install
# It installs dependencies like:
# node_modules/
#    express
#    body-parser
#    cookie-parser
# inside the container.

# 2️⃣ What happens if you DON'T run it
# Your Dockerfile:
# FROM node:23.11.1
# WORKDIR /app
# COPY . /app
# CMD ["node","server.js"]

# Now when container runs:
# Error: Cannot find module 'express'
# Because `node_modules` were never installed.

# 3️⃣ What happens during Docker build

# When you run:

# docker build -t myapp .
# Docker executes steps sequentially:

### Step 1
# FROM node:23.11.1
# Pulls image from **Docker Hub.

### Step 2
# WORKDIR /app
# Creates `/app`.

### Step 3
# COPY . /app
# Copies your project.

### Step 4
# RUN npm install

# Installs dependencies.
# Container filesystem becomes:
# /app
#    package.json
#    server.js
#    node_modules
    #   express

# 4️⃣ Real-world example
# Suppose your project:
# backend
#  ├── server.js
#  ├── package.json
#  └── Dockerfile

# `server.js`

# const express = require("express");
# const app = express();

# app.get("/", (req,res)=>{
#   res.send("API running");
# });

# app.listen(3000);

# Dockerfile:

# FROM node:23.11.1
# WORKDIR /app
# COPY . /app
# RUN npm install
# CMD ["node","server.js"]

# Now container starts the API successfully.

# # 5️⃣ Production Best Practice (VERY IMPORTANT)

# Professionals rarely do:

# COPY . /app
# RUN npm install

# Instead they do **layer caching optimization**:

# FROM node:23.11.1
# WORKDIR /app
# COPY package.json .
# RUN npm install
# COPY . .
# CMD ["node","server.js"]

# Why?
# Because Docker caches layers.
# If only code changes but `package.json` stays the same:
# npm install will NOT run again
# This makes builds **much faster**.

# # 6️⃣ Final recommended Dockerfile

# For a Node backend:

# FROM node:23.11.1
# WORKDIR /app
# COPY package.json .
# RUN npm install
# COPY . .
# CMD ["node","server.js"]

# # 7️⃣ One more important improvement
# Many developers also use:

# .dockerignore
# to avoid copying:

# node_modules
# .git
# .env
# logs

# ✅ **Final Answer**

# Yes, you **should keep**:

# RUN npm install

# because it installs project dependencies required by your application.

# 💡 Since you're learning Docker step-by-step, the **next extremely important concept** is something many developers misunderstand:

# Why this is dangerous

# COPY . .

# and how it can accidentally make your Docker image **3-5GB bigger** in production. I can show you the real production issue if you want.

RUN npm install

# ----------------------------------------------------------------

# Let’s understand this Dockerfile line **very clearly and deeply**:

# CMD ["node","server.js"]

# # 1️⃣ What `CMD` means

# `CMD` tells Docker:

# > **Which command should run when the container starts.**

# So this line means:

# > When the container runs, execute `node server.js`.

# Here:

# | Part        | Meaning                     |
# | ----------- | --------------------------- |
# | `CMD`       | Docker instruction          |
# | `node`      | run Node runtime            |
# | `server.js` | start your application file |

# The runtime comes from the base image like **Node.js** which you usually pull from **Docker Hub**.

# # 2️⃣ Simple Example

# Project:
# project
#  ├── server.js
#  ├── package.json
#  └── Dockerfile

# `server.js`
# const http = require("http");
# http.createServer((req,res)=>{
#   res.end("Hello Docker");
# }).listen(3000);

# Dockerfile:

# FROM node:23.11.1
# WORKDIR /app
# COPY . /app
# RUN npm install
# CMD ["node","server.js"]

# # 3️⃣ What happens when container starts

# When you run:

# docker run myapp
# Docker executes:

# node server.js
# Inside the container.
# So the container runs your server.

# # 4️⃣ What happens internally

# Container filesystem:

# /
#  ├── bin
#  ├── usr
#  └── app
#       ├── server.js
#       └── package.json
# Docker runs:

# node /app/server.js

# The server starts.

# # 5️⃣ Real World Example (Backend API)

# Suppose you built a **Node REST API**.

# Project:

# user-service
#  ├── src
#  │    └── server.js
#  ├── package.json
#  └── Dockerfile

# Dockerfile:

# FROM node:20-alpine
# WORKDIR /app
# COPY package.json .
# RUN npm install
# COPY . .
# CMD ["node","src/server.js"]

# When container runs:

# node src/server.js
# Your API starts.
# ---

# # 6️⃣ Real Production Example

# Many apps start using npm scripts.
# `package.json`
# {
#   "scripts": {
#     "start": "node src/server.js"
#   }
# }

# Dockerfile:

# CMD ["npm","start"]

# This runs:

# npm start

# Which starts your backend server.

# # 7️⃣ Why CMD is important
# Without CMD:

# docker run myapp

# The container starts and **immediately stops**.

# Because Docker doesn’t know **what process to run**.

# CMD ensures a **main process keeps running**.

# Example:

# Node server
# Database
# Worker
# Cron job

# # 8️⃣ Exec form vs Shell form

# Docker supports two formats.

# Exec form (recommended)

# CMD ["node","server.js"]

# Advantages:

# * faster
# * no shell
# * better signal handling

# Shell form

# CMD node server.js

# Docker runs:

# sh -c "node server.js"

# Exec form is preferred.

# # 9️⃣ Very important rule

# A Dockerfile can have **only one CMD**.

# If multiple exist:

# CMD ["node","server.js"]
# CMD ["npm","start"]

# Only the **last CMD runs**.

# # 🔟 Simple mental model

# Think of Docker like this:

# Dockerfile → Image → Container

# `CMD` defines:

# What the container runs after starting

# Example:
# Computer → double click app → program runs
# Container → CMD → program runs

# ✅ **One-line definition**

# `CMD ["node","server.js"]` means:

# > When the container starts, run the command `node server.js`.

# 💡 Since you're learning Docker deeply, the **next concept that even senior developers confuse is**:

# **Difference between**

# RUN
# CMD
# ENTRYPOINT

# Understanding this will make **Docker architecture completely clear**.

CMD ["node", "server.js"]

# -------------------------------------------

# How to Run This on Your Local System
# Step 1 — Build Docker Image

# Run inside the project folder:

# docker build -t my-first-docker .

# Explanation:
# This whole build command will accept by docker demon and decker demon build the docker image

# docker build → build image
# -t → tag name(means if you have 100s of docker image so to find the correct one that's why we give tag name by default tag name will be latest we can provide our own tag name as well)
# my-first-docker → image name
# . → current folder

# Step 2 — Run the Container
# docker run -p 3000:3000 my-first-docker

# Explanation:

# Part	Meaning
# -p 3000:3000	map container port to local port
# my-first-docker	image name

# Ulternative we have 
# docker run -it dockerImageName

# Explanation:
# -it that means iteractive terminal


# Step 3 — Open in Browser

# Open: http://localhost:3000

# You should see:

# Hello Docker
# 6️⃣ Verify Container is Running

# Run: docker ps
# You should see something like:

# CONTAINER ID   IMAGE              PORTS
# abcd1234       my-first-docker    0.0.0.0:3000->3000/tcp
# 7️⃣ Stop the Container

# Press: CTRL + C

# Or run:

# docker stop container_id
# 8️⃣ What You Just Achieved

# You successfully:

# 1️⃣ Created a Node.js server
# 2️⃣ Built a Docker image
# 3️⃣ Ran a Docker container

# Using **Docker with **Node.js.

# 9️⃣ Small Professional Improvements (Optional)

# Create .dockerignore:

# node_modules
# .git
# npm-debug.log

# This keeps the image small.
# ✅ Final Verdict

# Your project is correct and will run successfully.
# Only small improvements were suggested for best practices.

# 💡 If you want, I can show you the next step that makes Docker really powerful:

# Running Node + MongoDB together using Docker Compose (this is how real backend systems are run).