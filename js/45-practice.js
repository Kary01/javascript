const API_URL = 'https://swapi.dev/api/';
const PEOPLE_URL = 'people/:id/';
const CALL_API = {crossDomain: true};


function loadCall(value){
    return new Promise((resolve, reject) => {
        const ID_URL = `${API_URL}${PEOPLE_URL.replace(':id', value)}`;
        $.get(ID_URL, CALL_API, function(data){
            resolve(data);
        })
        .fail(() => reject(value))
    });
};

function onError(value) {
    alert("Error");
};

loadCall(1)
    .then(function(people) {
        alert(`The first person is: ${people.name}`);
    })
    .catch(onError);