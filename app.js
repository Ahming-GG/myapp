const http = require("http")

const name = process.env.NAME || "unknown"

const server = http.createServer((req, res) => {
  if (req.url === "/health") {
    res.end("OK")
    return
  }

<<<<<<< HEAD
  res.end(`Hello ${name}`)
=======
  res.end(`Hello Auto`)
>>>>>>> parent of 9b5caea (Update app.js)
})

server.listen(3000, () => {
  console.log("server running on port 3000")
})