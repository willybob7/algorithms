function chessBoardCellColor(cell1, cell2) {
  var thing1 = cell1.split("");
  var thing2 = cell2.split("");
  var code1 = cell1.charCodeAt(0);
  var code2 = cell2.charCodeAt(0);
  var color1;
  var color2;
  if (thing1[1] % 2 !== 0) {
    if (code1 % 2 !== 0) {
      color1 = 0;
    } else {
      color1 = 1;
    }
  } else {
    if (code1 % 2 === 0) {
      color1 = 0;
    } else {
      color1 = 1;
    }
  }
  if (thing2[1] % 2 !== 0) {
    if (code2 % 2 !== 0) {
      color2 = 0;
    } else {
      color2 = 1;
    }
  } else {
    if (code2 % 2 === 0) {
      color2 = 0;
    } else {
      color2 = 1;
    }
  }
  if (color1 == color2) {
    return true;
  } else {
    return false;
  }

}

// problem description: https://app.codesignal.com/arcade/intro/level-6/t97bpjfrMDZH8GJhi
