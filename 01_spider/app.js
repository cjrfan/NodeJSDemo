/**
 * Created by Administrator on 2017/8/15 0015.
 */

var express = require('express');
var app = express();
var request = require('request');
var cheerio = require('cheerio');


app.get('/', function (req, res) {
    // 统计京东侧边栏类目数量
    request('https://www.jd.com', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            $ = cheerio.load(body);
            res.json({
                cat: $('.cate_menu_item').length
            });
        }
    });


});

var server = app.listen(3000, function () {
    console.log('listening at 3000');
});