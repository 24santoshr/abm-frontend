const express = require('express')
const app = express()
const proxy = require('http-proxy-middleware');
app.use(express.static('abm-frontend5/abm/dist'))
app.use('/rest', proxy({target: 'https://abm.cs.upb.de/', changeOrigin: true}));

app.listen(3000, () => console.log('Example app listening on port 3000!'))  
