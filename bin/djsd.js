var connect = require('connect');
var home = process.env[(process.platform === 'win32') ? 'USERPROFILE' : 'HOME'];
var app = connect().use(connect.static(home + '/.js'));

app.listen(3131);
