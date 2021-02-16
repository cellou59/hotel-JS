 import NouveauClient from './module/NouveauClient.js';

 let form = document.querySelector("#addCustomer");
 let names = document.querySelector(".name");
 let lastName = document.querySelector(".lastName")
 let NbJour = document.querySelector(".NbJour")
 let Chambre = document.querySelector(".chambre")
 let dej = document.querySelector("#dejeunerT")
 console.log(dej.value)
     // Créer un tableau de clients
 const clients = new Array();

 form.addEventListener("submit", e => {

     // Annuler le comportement par défaut du formulaire (envoi des données à la page spécifiée dans l'attribut action -> si vide il envoie le formulaire à la même page)
     e.preventDefault();

     // Form => Variables => Nouveau Client => (variables) => tx[client] 
     // form => variables => tx[depart Client] => Nouveau Client <=> tx [depart Client] => Cout selon NbNuit,Chbre,Dej. => trigers contenue payement(display)
     clients.push(new NouveauClient(names.value, lastName.value, NbJour.value, Chambre.value, dej.value));
     console.log(clients);
 })

 let FormOut = document.querySelector("#outCustomer");
 let namesOut = document.querySelector(".nameOut");
 let lastNameOut = document.querySelector(".lastNameOut");
 const clientsOut = new Array();
 formOut.addEventListener("submit", e => {

     e.preventDefault();
     clientsOut.push("")

 })