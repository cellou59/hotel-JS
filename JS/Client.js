export default class Client {
    constructor(fullName, nbNuits, room, startDate, breakfast) {
        this.fullName = fullName;
        this.nbNuits = nbNuits;
        this.room = room;
        this.startDate = startDate;
        this.breakfast = breakfast;
    }

    getBillValue(roomPrice) {
        // calcul prix / nombre de nuits
        let total = this.nbNuits * roomPrice;

        // option petit dej
        if (this.breakfast) {
            total += this.nbNuits * 7;
        }

        // Départ après 11h = majoration de 10€
        let endDate = new Date();
        if (endDate.getHours() > 11) {
            total += 10;
        }

        return total;
    }
}