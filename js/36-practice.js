//make an array
let style = ['Jazz','Blues'];
alert(style);

// add a value to the end
style.push('Rock-n-roll');
alert(style);

//remplace the value in the middle
for (let i = 0; i < style.length; i++) {
     if(i % 2 == 0){
         
     }else {
        style[1] = 'Classics';
        alert(style);
     }
 }

 //remove the first value
 style.shift();
 alert(style);

 //add values to the array
 style.unshift('Rap','Reggae');
 alert(style);