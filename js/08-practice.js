let a = "" + 1 + 0;
let b = "" - 1 + 0;
let c = true + false;
let d = 6 / "3";
let e = "2" * "3";
let f = 4 + 5 + "px";
let g = "$" + 4 + 5;
let h = "4" - 2;
let i = "4px" - 2;
let j = 7 / 0;
let k = "   -9    " + 5;
let l = "   -9    " - 5;
let m = null + 1;
let n = undefined + 1;
let o = " \t \n" - 2;


alert(a); // 10, concatenación
alert(b); // -1
alert(c); // 1 + 0, 1
alert(d); // 2
alert(e); // 6
alert(f); // 9px
alert(g); // $45
alert(h); // 2
alert(i); // NaN
alert(j); // Infinity
alert(k); // -9 5, concatenación
alert(l); // -14
alert(m); // 1 
alert(n); // NaN
alert(o); // -2


