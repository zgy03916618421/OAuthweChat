/**
 * Created by Administrator on 2016/7/9.
 */
var express=require(express);
var url=require('url');
var app=express();
app.get('/code',function (req,res) {
    var code=url.parse(req.url,true).query;
    console.log(code);
})
var server=app.listen(10000,function () {
    console("connecting");
})