function chessBoard(num) {
  var result = '';

  for (var i = 0; i < num; i++) {
    for (var j = 0; j < num; j++) {
      if (result.length % 2 === 0) {
        result += ' ';
      } else {
        result += '#';
      }
    }
    result += '\n';
  }

  return result;
}

console.log(chessBoard(8));
