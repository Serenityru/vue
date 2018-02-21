/**
 * Created by Serenity on 2017/11/9.
 */
var fs = require('fs');
var path = require('path');
async = (dir, callback, finish) => {
    fs.readdir(dir,function(err,files){
        (function next(i){
            if(i<files.length){
                var pathname = path.join(dir,files[i]);
                fs.stat(pathname, function (err,stats){
                    if(stats.isDirectory()){
                        async(pathname,callback,function(){
                            next(i+1);
                        })
                    } else {
                        console.log(pathname);
                       callback(pathname,function () {
                           console.log(i);
                           next(i);
                       });
                    }
                });
            }else{
                finish && finish();
            }
        }(0));
    });
};
async('./src',function(i){
    console.log(i);
});