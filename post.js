var net = require('net');
var http= require('http');

var server=net.createServer(function (socket) {
    socket.on("data",function (data) {
        console.log(data.toString());
    });
    // socket.write('Echo from server: NODE.JS Server \r\n');
    // socket.pipe(socket);
    // socket.end();
})

server.listen(9000,function (st) {
    var data = {
        id: 'test@test.com',
        subject: "test"
    };

    data = require('querystring').stringify(data);
    var opt = {
        method: "POST",
        host: "localhost",
        port: 3000,
        path: "/",
        headers: {
            "Content-Type": 'application/x-www-form-urlencoded',
        }
    }

    var req = http.request(opt, function (back) {
        if (back.statusCode == 200) {
            var id = "32";
            back.on('data', function (data) {
                console.log(data.toString())
            });
            back.on('end', function () {});
        }

    });
    req.write(data + "\n");
    req.end();

})
