var express = require('express'),
    app = express(),
    serveStatic = require('serve-static'),
    port = process.env.PORT || 777;
app.use(serveStatic(__dirname));
app.listen(port, function() {
    console.log(`Example app listening on port ${port}!`);
});
