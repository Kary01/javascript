const API_URL = 'https://swapi.dev/api/';
const PEOPLE_URL = 'people/:id/';


const CALL_API = {crossDomain: true};

function callback(value){
    // console.log(arguments); .... check the parameters
    
    document.write(`Hola soy ${value.name}`);
};

function people(id){
    const ID_URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;

    $.get(ID_URL, CALL_API, callback);
};

people(1);
people(2);
people(3);

