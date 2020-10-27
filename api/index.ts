
export default (req, res) => {
  res.setHeader('cache-control', 'public, s-maxage=31536000')
  res.send(req.url)
}
