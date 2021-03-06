const API_URL = 'https://swapi.dev/api/';
const PEOPLE_URL = 'people/:id/';
const CALL_API = {crossDomain: true};


function loadCall(value, callback){
    const ID_URL = `${API_URL}${PEOPLE_URL.replace(':id', value)}`;

    $.get(ID_URL, CALL_API, callback).fail(function(){
            alert(`Lo sentimos no se encontro el personaje`);
    });
};


loadCall(1, function(people){
    alert(`Hola soy ${people.name}`);

    loadCall(2, function(people){
        alert(`Hola soy ${people.name}`);

        loadCall(3, function(people){
            alert(`Hola soy ${people.name}`);

            loadCall(4, function(people){
                alert(`Hola soy ${people.name}`);

                loadCall(5, function(people){
                    alert(`Hola soy ${people.name}`);
                });
            });
        });
    });
});
