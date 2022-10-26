
export default (req, res) => {
  res.setHeader('cache-control', 'public, s-maxage=31536000')
  res.setHeader('repository', 'https://github.com/amio/echo-path.vercel.app')
  res.send(req.url)
}
