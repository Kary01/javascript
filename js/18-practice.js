let userName = prompt("Who's there?");
let userPassword = prompt('Password?');

if (userName === 'Admin') {
    if (userPassword === 'TheMaster') {
        alert('Welcome!');
    }else if (userPassword === '' || userPassword === null) {
        alert('Canceled')
    }else {
        alert('Wrong Password');
    }
}else if (userName === '' || userName === null) {
    alert('Canceled');
}else {
    alert("I don't know you");
}