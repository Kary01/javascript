const API_URL = 'https://swapi.dev/api/';
const PEOPLE_URL = 'people/:id/';
const CALL_API = {crossDomain: true};


function callback(value, call){
    const ID_URL = `${API_URL}${PEOPLE_URL.replace(':id', value)}`;

    $.get(ID_URL, CALL_API, function(people){
        alert(`Hola soy ${people.name}`);

        if (call) {
            call();
        };
    });
};


callback(1, function(){
    callback(2, function(){
        callback(3, function(){
            callback(4, function(){
                callback(5);
            });
        });
    });
});
