module.exports = function(app, io) {

    var users = [];

    io.on('connection', function(socket) {

        // console.log('a user connected', socket.id);
        // from the barber
        socket.on('barber available', function(userId) {
            console.log('socket object: ' + userId);
            users.push({
                socketId: socket.id,
                userId: userId
            });
            console.log('user array: ' + JSON.stringify(users));
        })

        // from the customer
        socket.on('get barbers', function(socket) {
                
            io.emit('userList', users);
        });

        // incoming message from customer
        socket.on('getMsg', (data) => {

            console.log('getMsg: ' + JSON.stringify(data));

            // forward msg to barber
            socket.broadcast.to(data.toid).emit('sendMsg', {
                msg: data.msg,
                name: data.name
            });

        });

        socket.on('disconnect', function() {
            console.log('user disconnected');
        });

    });

}