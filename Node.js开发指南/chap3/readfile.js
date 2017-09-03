/**
 * Created by Administrator on 2017/8/23 0023.
 */

//用异步的方式读取一个文件
// var fs = require('fs');
// fs.readFile('file.txt','utf-8',function (err,data) {
//    if (err){
//        console.error(err);
//    }else{
//        console.log(data);
//    }
// });
//
// console.log('end.');


//同步读取文件
// var fs = require('fs');
// var data = fs.readFileSync('file.txt','utf-8');
// console.log(data);
// console.log('end.');


function readFileCallBack(err,data) {
    if (err){
        console.error(err);
    }else{
        console.log(data);
    }
}

var fs = require('fs');
fs.readFile('file.txt','utf-8',readFileCallBack);
console.log('end.');