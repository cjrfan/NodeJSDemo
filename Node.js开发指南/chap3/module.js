/**
 * Created by Administrator on 2017/8/23 0023.
 */

var name;
exports.setName = function (tname) {
    name = tname;
};

exports.sayHello = function () {
    console.log('hello ' + name);
};