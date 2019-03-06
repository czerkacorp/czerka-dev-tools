#!/usr/bin/env node

const generateSecret = require("./lib/generateSecret.js")

const [,, ...args]= process.argv

generateSecret(args)