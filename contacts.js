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
                afficherContacts();
                break;
            case "3":
                rechercherContact();
                break;
            case "4":
                filtrerParVille();
                break;
            case "5":
                filtrerParAge();
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

function afficherContacts() {
    console.log(`Liste des contacts (${contacts.length} contacts) : \n\n`);

    // Boucle pour chaque contact
    contacts.forEach((contact) => {
        console.log(
            `${contact.prenom} ${contact.nom} - ${contact.age} ans - ${contact.ville} - Email: ${contact.email} - Tel: ${contact.telephone}`,
        );
    });
}

function rechercherContact() {
    // Saisie de l'utilisateur
    const saisie = prompt(
        "Veuillez entrer le prénom et/ou le nom du contact à rechercher",
    );
    if (!saisie) {
        console.log("Recherche annulée");
        return;
    }
    // On enleve les espaces inutiles + tout en minuscule
    const recherche = saisie.trim().toLowerCase();
    // On cherche dans le tableau en minuscule si il y a le prénom ou le nom
    const resultat = contacts.find(
        (contact) =>
            `${contact.prenom} ${contact.nom}`
                .toLowerCase()
                .includes(recherche) ||
            `${contact.nom} ${contact.prenom}`
                .toLowerCase()
                .includes(recherche),
    );
    // On montre le resultat si un contact est trouvé
    if (resultat) {
        console.log("Contact trouvé");
        console.log(
            `${resultat.prenom} ${resultat.nom} - ${resultat.age} ans - ${resultat.ville} - Email: ${resultat.email} - Tel: ${resultat.telephone}`,
        );
    } else {
        console.log("Aucun contact trouvé");
    }
}

function filtrerParVille() {
    //Saisie de l'utilisateur
    const saisie = prompt("Entrez une ville :");
    if (!saisie) {
        console.log("Filtrage annulé");
        return;
    }
    // On nettoie la saisie + minuscule
    const ville = saisie.trim().toLowerCase();
    // On filtre la ville dans le tableau en minuscule
    const resultat = contacts.filter(
        (contact) => contact.ville.toLowerCase() === ville,
    );
    //On montrer les contacts qui correspondent à la ville avec une boucle
    if (resultat.length > 0) {
        console.log(`Il y a ${resultat.length} contact(s) à ${saisie.trim()}`);
        for (const contact of resultat) {
            console.log(
                `${contact.prenom} ${contact.nom} - ${contact.age} ans - ${contact.ville} - Email: ${contact.email} - Tel: ${contact.telephone}`,
            );
        }
    } else {
        console.log(`Aucun contact à ${saisie.trim()}`);
    }
}

function filtrerParAge() {
    //Saisie de l'utilisateur (2 prompts, age min et age max)
    const saisieMin = prompt("Age minimum :");
    const saisieMax = prompt("Age maximum :");
    if (!saisieMin || !saisieMax) {
        console.log("Filtrage annulé");
        return;
    }
    // On convertit les saisies en nombres
    const ageMin = Number(saisieMin);
    const ageMax = Number(saisieMax);
    
    if (isNaN(ageMin) || isNaN(ageMax)) {
        console.log("Veuillez entrer des nombres valides");
        return;
    } else if (ageMin > ageMax) {
        console.log("L'âge minimum doit être inférieur à l'âge maximum");
        return;
    }
    // On filtre l'age des contacts dans le tableau
    const resultat = contacts.filter(
        (contact) => contact.age >= ageMin && contact.age <= ageMax,
    );
    // On montre les contacts dans la tranche d'age
    if (resultat.length > 0) {
        console.log(
            `Il y a ${resultat.length} contact(s) entre ${ageMin} et ${ageMax} ans`,
        );
        for (const contact of resultat) {
            console.log(
                `${contact.prenom} ${contact.nom} - ${contact.age} ans - ${contact.ville} - Email: ${contact.email} - Tel: ${contact.telephone}`,
            );
        }
    } else {
        console.log(`Aucun contact entre ${ageMin} et ${ageMax}`);
    }
}

// LANCEMENT DU MENU
lancerMenu();
