let a = 5 > 4;
let b = "apple" > "pineapple";
let c = "2" > "12";
let d = undefined == null;
let e = undefined === null;
let f = null == "\n0\n";
let g = null === +"\n0\n";

alert(a); // true
alert(b); // false
alert(c); // true
alert(d); // true
alert(e); // false
alert(f); // false
alert(g); // false