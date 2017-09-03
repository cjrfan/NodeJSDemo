/**
 * Created by Administrator on 2017/8/23 0023.
 */

// event  对象注册了事件  some_event  的一个监听器，然后我们通过  setTimeout  在1000毫秒以后向event  对象发送事件  some_event ，此时会调用 some_event 的监听器。
var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();

event.on('some_event',function () {
   console.log('some_event occured.');
});

setTimeout(function () {
    event.emit('some_event');
},2000);