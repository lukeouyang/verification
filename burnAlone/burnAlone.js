var wrap = require('./wrap');
var write2D = require('./../utils/write2D');

var ROWS = 100;
var COLS = 100;


var ignMap = wrap(ROWS,COLS,7,1.2,135, printMap, null);

function printMap(ignitionMap){

  write2D(ignitionMap, ROWS, COLS, 'ignMapFGM'+ ROWS.toString()+'.csv');

}


