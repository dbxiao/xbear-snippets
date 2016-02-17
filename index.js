/**
 * @author [dbxiao]
 * @date   [2016-02]
 * @desc   [xbear-snippets supprot developer snippets texts and file]
 */

'use strict';

exports.name = 'xbear-snippets';
exports.desc = 'text and file snippets tools';

exports.register = function(commander) {

    commander
        .option('-r, --root <path>', 'set snippets path')
        .action(function(){
            var argv = Array.prototype.slice.call(arguments);
            var options = argv.pop();
            var cmd = argv.shift();
            console.log("-----------------------------");
            console.log("-------xbear snippets--------");
            console.log(cmd);
        });
}