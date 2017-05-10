# xbear-snippets
自动化代码工具

##关于xbear-snippets

#####xbear-snippets是xbear扩展插件，提供开发者自动生成page和widget命令集。开发者可以通过xbear snippets widget add wgt命令，自动在widget目录下生成wgt目录，并在目录中建立同名.html、.css、.js和images目录，并自动形成依赖关系。

## 安装

	1、首先安装xbear
	   npm install -g xbear

    2、再安装xbear-snippets
       npm install -g xbear-snippets

    3、使用：xbear snippets widget add wgt

## 版本更新
      [0.0.5] xbear-snippets已插件形式运行
      [0.0.4] xbear-snippets以内置在xbear库中
      [0.0.1] create by dbxiao

## command
      xbear snippets widget add wgt                 // 在widget目录新增wgt目录，并自动生成对应html、js、css和images目录
      xbear snippets widget add wgt [wgt, one, two] // 在widget目录新增wgt目录，并自动生成对应wgt、one、two静态文件
      xbear snippets widget remove wgt              // 在widget目录下删除wgt目录及相关文件
      
      xbear snippets page add wgt                   // 在page目录新增wgt目录，并自动生成对应html、js、css和images目录
      xbear snippets page add wgt [wgt, one, two]   // 在page目录新增wgt目录，并自动生成对应wgt、one、two静态文件
      xbear snippets page remove wgt                // 在page目录下删除wgt目录及相关文件
      
