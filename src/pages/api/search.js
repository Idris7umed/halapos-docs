import { navigation } from '../_app'
const { randomUUID } = require('crypto')

let links = []
navigation.map((n) => {
  links = [...links, ...n.links]
})
links = links.map((l) => ({ ...l, id: randomUUID() }))

export default (req, res) => {
  const results = req.query.q
    ? links?.filter((p) => p.title.toLowerCase().includes(req.query.q))
    : []
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({ results }))
}
