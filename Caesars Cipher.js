function rot13(str) { // LBH QVQ VG!
  var x = 0;
  var y = 0;
  var z = [];
  var a = [];
  while (x < str.length){
    var b = str.charCodeAt(x);
    z.push(b);
    x++;
  }
  while (y < z.length){
    if (z[y] < 78 && z[y] > 64){
      var c = z[y] +13;
      a.push(c);
    }
    if (z[y] > 77 && z[y] < 91){
      var d = z[y] - 13;
      a.push(d);
    }if( z[y] < 65 || z[y] > 90) {
      a.push(z[y]);
    }
    y++;
  }
  var e = 0;
  var g = [];
  while (e < str.length){
    var f = String.fromCharCode(a[e]);
    g.push(f);
    e++;
  }

  var h = g.join("");

  return h;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
