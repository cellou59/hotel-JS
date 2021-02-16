export default class NouveauClient {
    constructor(prenom, nom, nombreNuit, chambre, dejeuner) {

        this.prenom = prenom;
        this.nom = nom;
        this.nombreNuit = nombreNuit
        this.chambre = chambre
        this.dejeuner = dejeuner
    }
    display() {
        return `${this.prenom} ${nom} ${this.nombreNuit} ${this.chambre} ${this.dejeuner}`
    }

}