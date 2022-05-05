#!/usr/bin/env node
const fs = require('fs-extra')
const path = require('path')
const consola = require('consola')

fs.copySync(
  path.resolve(__dirname, 'template'),
  proccess.cwd(),
  { overwrite: true }
)

consola.log('项目初始化成功')
consola.log(`
1. npm i
2. npm run dev
`)


