/**
 * @author [dbxiao]
 * @date   [2016-02]
 * @desc   [xbear-snippets supprot developer snippets texts and file]
 */

'use strict';

var $options = {};
var $fs = require("fs");
var $path = require("path");

function snippets(avgs){
    $options = {
        snippetsType   : avgs[3],   // 类型 [widget]
        snippetsAction : avgs[4],   // 事件 [add，remove]
        snippetsName   : avgs[5],   // 文件名称 [wgt]
        path           : avgs[3] +"/"+avgs[5], // 文件路径 [widget/wgt]

        fileType       : ["html", "js", "css"]    // 操作文件属性
    };

    console.log($options);

    snippets.fn.existWidget();
}

/**
 * [existWidget 检查当前模块是否存在widget]
 * @return {[type]} [description]
 */
snippets.prototype = {

    /**
     * [existWidget description]
     */
    existWidget : function(){
        var path = $options.path;

        $fs.exists("fis-conf.js", function(res){
            if(res == true){
                $fs.exists(path, function(res){
                    if(res == true){
                        console.log("[Error-1001] This path:"+path+" exists");
                    }else{
                        snippets.fn.appFolder(path);
                    }
                });
            }else{
                console.log("[Error-1002] In this folder that can't build widget or page folders");
            }
        });
    },

    /**
     * [appFolder 新建widget或者page目录]
     * @param  {String} path [目录地址]
     */
    appFolder : function(path){
        $fs.mkdirSync(path);
        $fs.mkdirSync(path+"/images");
        snippets.fn.addFile(path);
    },

    /**
     * [writeFile 写入数据]
     */
    writeFile : function(_path, _type, _str){
        var file = $options.path+"/"+_path+"."+_type;
        $fs.appendFile(file, _str, 'utf8');
    },

    /**
     * [extTpl description]
     * @param  {String} files [文件数据]
     * @param  {String} name  [文件后缀]
     */
    extTpl : function(files, name){
        var reg = /(_STYLE_NAME_|_SCRIPT_NAME_)/gi;
        var tpl = files.replace(reg, function(m,$1,$2){
            if(m == "_STYLE_NAME_"){
                return name;
            }else if(m == "_SCRIPT_NAME_"){
                return name;
            }else{
                return m;
            }
        });
        return tpl;
    },

    /**
     * [firstUpper 首字母大写]
     * @param  {String} text [字符串]
     */
    firstUpper : function(text){
        text = text.replace(/(^|\s+)\w/g,function(s){
            return s.toUpperCase();
        });
        return text;
    },

    /**
     * [addFile 增加配置文件]
     * @param {[type]} _path [文件路径]
     */
    addFile : function(_path){
        var str = "";
        var x, y;
        var path= $options.snippetsName;
        

        for(x in $options.fileType){
            var files = $fs.readFileSync( $path.join(__dirname, "view/widget_tpl." + $options.fileType[x]), "utf8");

            if($options.fileType[x] == "html" || $options.fileType[x] == "css"){
                files = snippets.fn.extTpl(files, $options.snippetsName);
            }else if($options.fileType[x] == "js"){
                var fileName = $options.snippetsName.split("-");
                for(y in fileName){
                    if(y == 0){
                        continue;
                    }else{
                        fileName[y] = snippets.fn.firstUpper(fileName[y]);
                    }
                };
                fileName = fileName.join("");
                files = snippets.fn.extTpl(files, fileName);
            }else{
                return;
            }

            snippets.fn.writeFile(path, $options.fileType[x], files);
        };

        console.log("[Success] "+path+" is builded success!");
    }
};

snippets.fn = snippets.prototype;


module.exports = snippets;