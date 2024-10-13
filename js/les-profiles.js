let allUsers = [];

function handleItem(items) {
    allUsers = items;
    //appelle la fonction displayItems(items) pour afficher les users
    displayItems(items)
}

function displayItems(items) {

    //destructuration
    items = items.map(
        ({ id, name, email, phone }) =>
            `
        <div class="card " >
     <img src="https://randomuser.me/api/portraits/men/${id}.jpg" data-int="69" data-gender="men" class=" come_in">  <div class="card-body">
    <h5 class="card-title">${name}</h5>
    <p class="card-text">${email}</p>
    <p class="card-text">${phone}</p>
    <a href="/gestion-des-naissances/profiles/${id}" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
        `
    );
    document.getElementById("profiles").innerHTML = items.join("");
}

/**
 * methode sans destructuration
 *  items = items.map(
        (item) =>
            `
        <div class="card " >
     <img src="https://randomuser.me/api/portraits/men/${item.id}.jpg" data-int="69" data-gender="men" class=" come_in">  <div class="card-body">
    <h5 class="card-title">${item.name}</h5>
    <p class="card-text">${item.email}</p>
    <p class="card-text">${item.phone}</p>
    <a href="/gestion-des-naissances/profiles/${item.id}" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
        `
    );
    document.getElementById("profiles").innerHTML = items.join("");
}
 */


function display() {
    const URL = "https://jsonplaceholder.typicode.com/users";
    fetch(URL)
        .then((response) => response.json())
        .then((items) => handleItem(items));
}

//veriffie si les carracteres de l'utilisateur saissie dans query correspondent au nom de l'utilisateur
//(name.toLowerCase().indexOf(query.toLowerCase()) > -1)== compare le user au nom saissie par l'utilisateur
//c'est aussiune fonction classique
function check(user, query) {
    const { name } = user;
    if (name.toLowerCase().indexOf(query.toLowerCase()) > -1) {
        return true;
    }
    return false;
}

//fonction stoker mais meme fonction(role) avec check
const checkUser = function (user, query) {
    const { name } = user;
    return (name.toLowerCase().indexOf(query.toLowerCase()) > -1);
}


//fonction flecher mais meme fonction(role) avec check
const checkOnUser = (user, query) => {
    const { name } = user;
    return (name.toLowerCase().indexOf(query.toLowerCase()) > -1);
}


//cette fonction va toujours recuperer un user puis le transmettre a la fonction check qui veriffie enfin affiche le user
function filter() {
    const query = document.getElementById("search").value;
    const userToDisplay = allUsers.filter((user) => checkUser(user, query));
    displayItems(userToDisplay);
}

//autre facon de filter
function filters() {
    const query = document.getElementById("search").value;
    const userToDisplay = allUsers.filter(
        ({ name }) => name.toLowerCase().includes(query.toLowerCase()));
    displayItems(userToDisplay);
}