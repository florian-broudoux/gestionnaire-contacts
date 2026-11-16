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
                ajouterContact();
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
                trierContacts();
                break;
            case "7":
                supprimerContact();
                break;
            case "8":
                afficherStatistiques();
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
    // On vérifie les nombres et si le minmimum est bien inférieur au maximum
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

function trierContacts() {
    // Saisie de l'utilisateur
    const saisie = prompt(
        "Vous voulez trier les contacts par :\n1. Nom\n2. Age\n\nVotre choix ?",
    );
    let tri;

    switch (saisie) {
        case "1":
            console.log("Voici la liste des contacts triés par nom :");
            tri = [...contacts].sort((a, b) => a.nom.localeCompare(b.nom));
            break;
        case "2":
            console.log("Voici la liste des contacts triés par âge");
            tri = [...contacts].sort((a, b) => a.age - b.age);
            break;
        default:
            console.log("Choix invalide");
            return;
    }
    for (const contact of tri) {
        console.log(
            `${contact.prenom} ${contact.nom} - ${contact.age} ans - ${contact.ville} - Email: ${contact.email} - Tel: ${contact.telephone}`,
        );
    }
}

function ajouterContact() {
    // Fonction pour répéter le prompt
    const demander = (propriete) => {
        const saisie = prompt(propriete);
        return saisie === null ? "" : saisie.trim();
    };
    // On stock chaque saisie dans sa variable
    const nom = demander("Nom :");
    const prenom = demander("Prénom :");
    if (!nom || !prenom) {
        console.log("Le nom et le prénom sont obligatoires");
        return;
    }
    const ageSaisi = demander("Age :");
    const age = Number(ageSaisi);
    if (age < 0 || ageSaisi === "" || isNaN(age)) {
        console.log("Age invalide");
        return;
    }
    const ville = demander("Ville :");
    const email = demander("Email :");
    const telephone = demander("Telephone");

    // On crée le nouveau contact avec les variables au dessus
    const nouveauContact = {
        nom: nom,
        prenom: prenom,
        age: age,
        ville: ville,
        email: email,
        telephone: telephone,
    };
    // On l'ajoute dans le tableau
    contacts.push(nouveauContact);
    console.log(`${prenom} ${nom} a été ajouté aux contacts`);
    console.log(`Il y a maintenant ${contacts.length} contacts`);
}

function supprimerContact() {
    // Saisie de l'utilisateur
    const saisie = prompt("Entrez le nom ou l'email du contact à supprimer");
    if (!saisie) {
        console.log("Suppression annulé");
        return;
    }
    // On nettoie la saisie + minuscules
    const recherche = saisie.trim().toLowerCase();
    // On recherche l'index du contact par le nom ou l'email
    const index = contacts.findIndex(
        (contact) =>
            contact.nom.toLowerCase() === recherche ||
            contact.email.toLowerCase() === recherche,
    );
    // Si on obtient un index, on le supprime avec .splice
    if (index !== -1) {
        const supprime = contacts[index];
        contacts.splice(index, 1);
        console.log(`${supprime.prenom} ${supprime.nom} a été supprimé`);
        console.log(`Il reste ${contacts.length} contacts`);
    } else {
        console.log(`Aucun contact trouvé avec ${saisie.trim()}`);
    }
}

function afficherStatistiques() {
    console.log("Statistiques des contacts :");
    if (contacts.length === 0) {
        console.log("Le carnet est vide");
        return;
    }
    // Affichage du total
    console.log(`Il y a un total de ${contacts.length} contacts`);

    // On extrait les ages dans un nouveau tableau
    const ages = contacts.map((contact) => contact.age);

    // Calcul de l'age moyen :
    //On additionne tous les ages avec une boucle
    let sommeAges = 0;
    for (const age of ages) {
        sommeAges += age;
    }
    //On calcule la moyenne
    const ageMoyen = Math.round(sommeAges / ages.length);
    console.log(`Age moyen : ${ageMoyen} ans`);

    // Trouver la valeur la plus basse et la plus haute
    const ageMin = Math.min(...ages);
    const ageMax = Math.max(...ages);
    // Trouver à quel contact correspond la valeur
    const plusJeune = contacts.find((c) => c.age === ageMin);
    const plusAge = contacts.find((c) => c.age === ageMax);
    // Affichage des résultats
    console.log(
        `Le contact le plus jeune est ${plusJeune.prenom} ${plusJeune.nom} avec ${plusJeune.age} ans`,
    );
    console.log(
        `Le contact le plus agé est ${plusAge.prenom} ${plusAge.nom} avec ${plusAge.age} ans`,
    );

    // Trouver la ville la plus représentée :
    // On extrait les villes dans un nouveau tableau en évitant les doublons
    const villes = [...new Set(contacts.map((contact) => contact.ville))];
    let villeMax = "";
    let compteurMax = 0;
    // Boucle pour calculer le compteur de chaque ville
    for (const ville of villes) {
        const compteur = contacts.filter(
            (contact) => contact.ville === ville,
        ).length;
        // Si le compteur dépasse le compteurMax, il devient à son tour compteurMax et sa ville devient la villeMax
        if (compteur > compteurMax) {
            compteurMax = compteur;
            villeMax = ville;
        }
    }
    console.log(
        `La ville la plus représentée est ${villeMax} avec ${compteurMax} contacts`,
    );
}

// LANCEMENT DU MENU
lancerMenu();
