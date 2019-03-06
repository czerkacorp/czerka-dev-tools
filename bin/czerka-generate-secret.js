#!/usr/bin/env node

const generateSecret = require("../lib/generateSecret")

const [,, ...args]= process.argv

generateSecret(args)