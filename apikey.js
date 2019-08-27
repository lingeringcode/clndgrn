import { resolve } from "path"
import { config } from "dotenv"
config({ path: resolve(__dirname, "./.env") })

// const fs = require('fs')
// fs.writeFileSync('./.env', `MAPBOX_API_KEY=${process.env.MAPBOX_API_KEY}\n`)
