"use strict";

var arg1 = process.argv[0];
function main(arg1) {
/*
* ここにnameに"World"が入力された時、この関数が"Hello World!"と返すような実装をします。
* nameが"codecheck"の場合には、"Hello codecheck!"が返されます。
*/
  //ここにHelloworldを実装します。
  arg1="Hello " + arg1 + "!";
  console.log(arg1);  
}

module.exports = main;