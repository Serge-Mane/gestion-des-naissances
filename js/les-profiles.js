function handleItem(items) {
    console.log(items);

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