const API_URL = 'https://swapi.dev/api/';
const PEOPLE_URL = 'people/:id/';


const CALL_API = {crossDomain: true};

function callback(value){
    // console.log(arguments); ....  parameters
    
    alert(`Hola soy ${value.name}`);
};

function people(id){
    const ID_URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;

    $.get(ID_URL, CALL_API, callback);
};

for (let i = 1; i <= 5; i++) {
    people(i);
}

