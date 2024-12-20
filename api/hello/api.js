/*
//Enabling CORS in a single Node.js Serverless Function
//https://vercel.com/guides/how-to-enable-cors#enabling-cors-in-a-single-node.js-serverless-function
const allowCors = fn => async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  // another common pattern
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )
  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }
  return await fn(req, res)
}

const root = (req, res) => {
  res.json({ message: 'Hello' });
};

export default allowCors(root);
*/
///*
const root = (req, res) => {
  res.json({ message: 'Hello' });
};

export default {
  root
};
//*/
