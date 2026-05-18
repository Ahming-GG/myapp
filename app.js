const http = require("http")

const name = process.env.NAME || "unknown"

const server = http.createServer((req, res) => {
  if (req.url === "/health") {
    res.end("OK")
    return
  }

  res.end(`Hello Auto Deploy`)
})

server.listen(3000, () => {
  console.log("server running on port 3000")
})