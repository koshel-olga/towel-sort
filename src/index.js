
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let newarr = [];
  if ( !matrix ) { return newarr; }
  for(let i=0; i < matrix.length; i++){
    newarr = ( i % 2 == 0 ) ? newarr.concat( matrix[i] ) : newarr.concat( matrix[i].sort((a,b) => b-a ) );   
  }
  return newarr;
}
