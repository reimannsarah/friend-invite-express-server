function authenticateApiKey(req, res, next) {
  const apiKey = req.headers['x-api-key'];

  if(apiKey && apiKey === process.env.API_KEY) {
    next();
  }else{
    res.status(403).json({error: 'Invalid API key'})
  }
};

module.exports = authenticateApiKey;