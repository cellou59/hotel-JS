import Client from './Client.js';

const rooms = {
    "1p": 65,
    "2p": 89,
    "4p": 139,
    "loft": 189
};

let clients = new Array();
if (localStorage.getItem("clients") != null) {
    // Avec la méthode getItem on récupère systématiquement une chaine
    let clientsString = localStorage.getItem("clients");
    let clientsObject = JSON.parse(clientsString);

    // L'inconvénient du localStorage est qu'avec la manipulation au format JSON nous perdons nos instances de Client (simple objet anonyme) --> on vient recréer dans notre tableau de clients les instances de Client
    clients = clientsObject.map(object => {
        return new Client(object.fullName, object.nbNuits, object.room, object.startDate, object.breakfast)
    });
}

// Arrivée client
let bookingForm = document.querySelector(".booking-form");
bookingForm.addEventListener("submit", e => {
    // Annuler le comportement par défaut (à savoir la soumission du formulaire)
    e.preventDefault();

    let currentDate = new Date();

    // Arrivée à partir de 11h
    if (currentDate.getHours() >= 11) {
        let firstname = document.querySelector("#firstname").value;
        let lastname = document.querySelector("#lastname").value;
        let nbNuits = document.querySelector("#nbNuits").value;
        let room = document.querySelector("#room-select").value;
        let breakfast = document.querySelector("#breakfastYes").checked;

        let client = new Client(`${firstname} ${lastname}`, nbNuits, room, currentDate, breakfast);
        clients.push(client);

        // On souhaite faire persister le client même en actualisant la page
        let clientsStringify = JSON.stringify(clients); // On transforme le tableau en chaine pour pouvoir le stocker dans le localStorage
        localStorage.setItem("clients", clientsStringify);

        console.table(clients);
    }
});

// Départ client
let searchForm = document.querySelector(".search-form");
searchForm.addEventListener("submit", e => {
    e.preventDefault();

    let firstname = document.querySelector("#searchFirstname").value;
    let lastname = document.querySelector("#searchLastname").value;
    let fullname = `${firstname} ${lastname}`;

    // Rendre visible l'encart .facture-client
    let factureClient = document.querySelector(".facture-client");
    factureClient.classList.add("visible");

    let container = document.querySelector(".facture-client .container");

    for (const client of clients) {
        if (client.fullName == fullname) {
            // Client trouvé
            let total = client.getBillValue(rooms[client.room]);

            let facture =
                `<p>
                    Facture du client ${client.fullName} : ${total}€
                </p>`;

            // Affecter notre template facture
            container.innerHTML = facture;

            // On sort de la fonction de callback et donc de la boucle car nous avons trouvé le client pas besoin d'aller plus loin
            return true;
        }
    }

    // Client pas trouvé
    container.innerHTML = `<p>Client introuvable !</p>`;
});