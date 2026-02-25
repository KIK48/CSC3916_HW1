const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.raw({ type: '*/*' }));

app.post('/', (req, res) => {
 
    const contentType = req.get('Content-Type') || 'text/plain';
    

    res.set('Content-Type', contentType);
    

    const body = (req.body && (Buffer.isBuffer(req.body) || typeof req.body === 'string')) 
                 ? req.body 
                 : '';
    
    res.send(body);
});

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Echo server listening on port ${PORT}`);
    });
}

module.exports = app;