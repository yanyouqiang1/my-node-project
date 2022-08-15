import https from 'https'
import fs from 'fs'
// import http = require('http');
// const fs = require('fs');

function downloadFile(uri, dest, cb){
    // 确保dest路径存在
    const file = fs.createWriteStream(dest);

    const options = {
        hostname: ,
        path: '/todos',
        method: 'POST',
        headers: {
            "accept": "*/*",
            "accept-language": "zh-CN,zh;q=0.9",
            "if-none-match": "4e799eb511e5700b361bbd1d84d10ade",
            "sec-fetch-dest": "script",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-site": "cross-site"
        },
    }
    https.get(uri, (res)=>{
        if(res.statusCode !== 200){
            cb(response.statusCode);
            return;
        }

        res.on('end', ()=>{
            console.log('download end');
        });

        // 进度、超时等

        file.on('finish', ()=>{
            console.log('finish write file')
            file.close(cb);
        }).on('error', (err)=>{
            fs.unlink(dest);
            if(cb) cb(err.message);
        })

        res.pipe(file);
    });
}

export default downloadFile

fetch("http://nodejs.cn/api/n-api.html", {
    "headers": {
        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "accept-language": "zh-CN,zh;q=0.9",
        "upgrade-insecure-requests": "1"
    },
    "referrer": "http://nodejs.cn/api/",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": null,
    "method": "GET",
    "mode": "cors",
    "credentials": "include"
}); ;
fetch("http://static0.nodejs.cn/_static/css/api.css?t=20220728214325", {
    "referrer": "http://nodejs.cn/",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": null,
    "method": "GET",
    "mode": "cors",
    "credentials": "omit"
}); ;
fetch("http://img.nodejs.cn/wxpaycode.png", {
    "referrer": "http://nodejs.cn/",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": null,
    "method": "GET",
    "mode": "cors",
    "credentials": "omit"
}); ;
fetch("http://static0.nodejs.cn/_static/js/api.js?t=20220728214325", {
    "referrer": "http://nodejs.cn/",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": null,
    "method": "GET",
    "mode": "cors",
    "credentials": "omit"
}); ;
fetch("http://hm.baidu.com/hm.js?499f4c3231c1e5a1e72d19d00e822f09", {
    "headers": {
        "accept": "*/*"
    },
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": null,
    "method": "GET",
    "mode": "cors",
    "credentials": "omit"
}); ;
fetch("https://hm.baidu.com/hm.js?499f4c3231c1e5a1e72d19d00e822f09", {
    "headers": {
        "accept": "*/*",
        "accept-language": "zh-CN,zh;q=0.9",
        "if-none-match": "4e799eb511e5700b361bbd1d84d10ade",
        "sec-fetch-dest": "script",
        "sec-fetch-mode": "no-cors",
        "sec-fetch-site": "cross-site"
    },
    "referrer": "http://nodejs.cn/",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": null,
    "method": "GET",
    "mode": "cors",
    "credentials": "include"
}); ;
fetch("https://hm.baidu.com/hm.gif?hca=E3F97B563B989C98&cc=1&ck=1&cl=24-bit&ds=2560x1440&vl=1289&ep=3190%2C2061&et=3&ja=0&ln=zh-cn&lo=0&lt=1659445968&rnd=70718457&si=499f4c3231c1e5a1e72d19d00e822f09&v=1.2.96&lv=2&sn=34439&r=0&ww=1234&u=http%3A%2F%2Fnodejs.cn%2Fapi%2F", {
    "headers": {
        "accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
        "accept-language": "zh-CN,zh;q=0.9",
        "sec-ch-ua": "\".Not/A)Brand\";v=\"99\", \"Google Chrome\";v=\"103\", \"Chromium\";v=\"103\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Linux\"",
        "sec-fetch-dest": "image",
        "sec-fetch-mode": "no-cors",
        "sec-fetch-site": "cross-site"
    },
    "referrer": "http://nodejs.cn/",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": null,
    "method": "GET",
    "mode": "cors",
    "credentials": "include"
}); ;

fetch("https://hm.baidu.com/hm.gif?cc=1&ck=1&cl=24-bit&ds=2560x1440&vl=1289&et=0&ja=0&ln=zh-cn&lo=0&lt=1659445968&rnd=1600514795&si=499f4c3231c1e5a1e72d19d00e822f09&su=http%3A%2F%2Fnodejs.cn%2Fapi%2F&v=1.2.96&lv=2&sn=34443&r=0&ww=602&ct=!!&u=http%3A%2F%2Fnodejs.cn%2Fapi%2Fn-api.html&tt=Node-API%20%7C%20Node.js%20API%20%E6%96%87%E6%A1%A3", {
    "headers": {
        "accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
        "accept-language": "zh-CN,zh;q=0.9",
        "sec-ch-ua": "\".Not/A)Brand\";v=\"99\", \"Google Chrome\";v=\"103\", \"Chromium\";v=\"103\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Linux\"",
        "sec-fetch-dest": "image",
        "sec-fetch-mode": "no-cors",
        "sec-fetch-site": "cross-site"
    },
    "referrer": "http://nodejs.cn/",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": null,
    "method": "GET",
    "mode": "cors",
    "credentials": "include"
});