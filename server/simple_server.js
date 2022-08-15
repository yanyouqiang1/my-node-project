import http from 'http'
// const http = require('http');
import url from 'url'
import querystring from 'querystring'
function service(req,response){
    //获取返回的url对象的query属性值
    var arg = url.parse(req.url).query;

    //将arg参数字符串反序列化为一个对象
    var params = querystring.parse(arg);

    //请求的方式
    console.log("method - " + req.method);

    //请求的url
    console.log("url - " + req.url);

    //获取参数id
    console.log("id- " + params.id);


    //创建空字符叠加数据片段
    var data = '';

    //2.注册data事件接收数据（每当收到一段表单提交的数据，该方法会执行一次）
    req.on('data', function (chunk) {
        // chunk 默认是一个二进制数据，和 data 拼接会自动 toString
        data += chunk;
    });

    // 3.当接收表单提交的数据完毕之后，就可以进一步处理了
    //注册end事件，所有数据接收完成会执行一次该方法
    req.on('end', function () {

        //（1）.对url进行解码（url会对中文进行编码）
        data = decodeURI(data);
        console.log(data);

        /**post请求参数不能使用url模块解析，因为他不是一个url，而是一个请求体对象 */

            //（2）.使用querystring对url进行反序列化（解析url将&和=拆分成键值对），得到一个对象
            //querystring是nodejs内置的一个专用于处理url的模块，API只有四个，详情见nodejs官方文档
        var dataObject = querystring.parse(data);
        console.log(dataObject);
    });

    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello Node.Js!              '+data);
}
var server = http.createServer(service);
server.listen(8088);