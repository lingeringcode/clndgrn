const fs = require('fs')
fs.writeFileSync('./.env', `MAPBOX_API_KEY=${process.env.MAPBOX_API_KEY}\n`)
