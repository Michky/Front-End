var http = require("http");
var fs = require('fs');
var path = require('path');



function fnServer(req,res){
console.log(req.url);




if (req.url=="/cosa")
{
var readStream = fs.createReadStream( "book.html", {} );
// Espera a que comience la conversación para entregar el archivo
readStream.on('open', function () {
res.writeHead(200, { 'content-type': 'text/html' })
res.end(readStream);
});

/*fs.readFile('./book.html', function (err, html) {
    if (err) {
        throw err; 
    }
    res.writeHead(200, { 'content-type': 'text/html' })
    res.end(html);

    
})*/

}

else if (req.url=="/")
{
	var readStream = fs.createReadStream( "Index.html", {} );
// Espera a que comience la conversación para entregar el archivo
readStream.on('open', function () {
res.writeHead(200, { 'content-type': 'text/html' })
readStream.pipe(res);
});

}
else if (req.url=="/favicon.ico"){

res.end();
}


else

{

var ext = path.extname(req.url);
var cosaa = req.url;
cosaa=cosaa.substring(1, cosaa.length);
console.log("El heredero " + cosaa);
var readStream = fs.createReadStream(cosaa,{});




if (ext == ".html")
{
	console.log(ext);

readStream.on('open', function () {
res.writeHead(200, { 'content-type': 'text/html' })
readStream.pipe(res);
});
}
else if (ext == ".css")
{
	console.log(ext);
readStream.on('open', function () {
res.writeHead(200, { 'content-type': 'text/css' })
readStream.pipe(res);
});

}
else if (ext ==".jpg")
{
	console.log(ext);
readStream.on('open', function () {
res.writeHead(200, { 'content-type': 'image/jpeg' })
readStream.pipe(res);
});
}
else if (ext ==".png")
{
	console.log(ext);
readStream.on('open', function () {
res.writeHead(200, { 'content-type': 'image/jpeg' })
readStream.pipe(res);
});
}
else if (ext == ".js") 
{
	console.log(ext);
readStream.on('open', function () {
res.writeHead(200, { 'content-type': 'application/javascript' })
readStream.pipe(res);
});

}



}}
var server =http.createServer(fnServer);
server.listen(process.argv[2] || 8080);