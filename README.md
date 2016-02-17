# xbear-snippets
自动化代码工具

##关于xbear-snippets

#####xbear-snippets是xbear扩展插件，提供开发者自动生成page和widget命令集。开发者可以通过xbear widget add wgt命令，自动在widget目录下生成wgt目录，并在目录中建立同名.html、.css、.js和images目录，并自动形成依赖关系。

##版本更新
      [0.0.1] create by dbxiao

##常用命令
      xbear widget add wgt                 // 在widget目录新增wgt目录，并自动生成对应html、js、css和images目录
      xbear widget add wgt [wgt, one, two] // 在widget目录新增wgt目录，并自动生成对应wgt、one、two静态文件
      xbear widget remove wgt              // 在widget目录下删除wgt目录及相关文件
      
      xbear page add wgt                   // 在page目录新增wgt目录，并自动生成对应html、js、css和images目录
      xbear page add wgt [wgt, one, two]   // 在page目录新增wgt目录，并自动生成对应wgt、one、two静态文件
      xbear page remove wgt                // 在page目录下删除wgt目录及相关文件
      
