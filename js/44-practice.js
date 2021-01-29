const API_URL = 'https://swapi.dev/api/';
const PEOPLE_URL = 'people/:id/';

// request to change the id and call to the api
const ID_URL = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`;
const CALL_API = {crossDomain: true};

function callback(value){
    // console.log(arguments); .... check the parameters
    
    document.write(`Hola soy ${value.name}`);
};

$.get(ID_URL, CALL_API, callback);

