var app=require('express')();
var http=require('http').Server(app);
var io=require('socket.io')(http);

app.get('/',function(req,res){
	//res.send('<h1>Hello World</h1>');
	res.sendfile('index.html');
});

io.on('connection',function(socket){
	console.log('One user connected');
	socket.on('chat message',function(msg){
		console.log('messgae : '+msg);
	});
	socket.on('disconnect',function(){
		console.log('user Disconnected');
	});
	socket.on('chat message',function(msg){
		io.emit('chat message',msg);
	});
});


http.listen(3000,function(){
	console.log('Listening on port 3000');
});