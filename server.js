const express = require('express');
const app = express();
const port = 3021;

app.get('/example', (req, res) => {
    res.type('application/octet-stream');
    res.set('Content-Disposition', 'inline;filename=desksite.nrl');
    res.send('DMS.HOLLANDHART.COM\n!nrtdms:0:!session:DMS.HOLLANDHART.COM:!database:worksite:!page:263077:');
});

app.listen(port, () => console.log(`nrl-test listening on port ${port}`));
