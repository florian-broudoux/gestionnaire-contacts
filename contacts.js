// TABLEAU DES CONTACTS
const contacts = [
    {
        nom: "Giroud",
        prenom: "Olivier",
        email: "olivier.giroud@gmail.com",
        telephone: "0607080910",
        ville: "Lille",
        age: 40,
    },
    {
        nom: "Mbappé",
        prenom: "Kylian",
        email: "kylian.mbappe@gmail.com",
        telephone: "0612345678",
        ville: "Madrid",
        age: 27,
    },
    {
        nom: "Griezmann",
        prenom: "Antoine",
        email: "antoine.griezmann@gmail.com",
        telephone: "0623456789",
        ville: "Orlando",
        age: 35,
    },
    {
        nom: "Dembélé",
        prenom: "Ousmane",
        email: "ousmane.dembele@gmail.com",
        telephone: "0634567890",
        ville: "Paris",
        age: 29,
    },
    {
        nom: "Kanté",
        prenom: "N'Golo",
        email: "ngolo.kante@gmail.com",
        telephone: "0645678901",
        ville: "Istanbul",
        age: 35,
    },
    {
        nom: "Tchouaméni",
        prenom: "Aurélien",
        email: "aurelien.tchouameni@gmail.com",
        telephone: "0656789012",
        ville: "Madrid",
        age: 26,
    },
    {
        nom: "Saliba",
        prenom: "William",
        email: "william.saliba@gmail.com",
        telephone: "0667890123",
        ville: "Londres",
        age: 25,
    },
    {
        nom: "Thuram",
        prenom: "Marcus",
        email: "marcus.thuram@gmail.com",
        telephone: "0678901234",
        ville: "Milan",
        age: 29,
    },
];

// TEST
console.log(`Nombre de contact : ${contacts.length}`);
console.log(`Premier contact : ${contacts[0].prenom} ${contacts[0].nom}`);

// MENU
function lancerMenu() {
    let choix;

    do {
        choix = prompt(
            "1. Ajouter un contact \n" +
                "2. Afficher les contacts \n" +
                "3. Rechercher un contact \n" +
                "4. Filtrer par ville \n" +
                "5. Filtrer par tranche d'âge \n" +
                "6. Trier les contacts \n" +
                "7. Supprimer un contact \n" +
                "8. Statistiques \n" +
                "0. Quitter \n\n" +
                "Votre choix ?",
        );
        switch (choix) {
            case "1":
                break;
            case "2":
                break;
            case "3":
                break;
            case "4":
                break;
            case "5":
                break;
            case "6":
                break;
            case "7":
                break;
            case "8":
                break;
            case "0":
                break;
            case null:
                break;
            default:
                console.log("Veuillez entrer un numéro compris entre 0 et 8");
                break;
        }
    } while (choix !== "0" && choix !== null);
    console.log("Au revoir !");
}

// LANCEMENT DU MENU
lancerMenu();
