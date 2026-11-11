// Fuente: Preguntas_B1_ordenadas_1_a_190.md. Datos transcritos sin generación de contenido.
const QUESTIONS = [
  {
    "id": 1,
    "niveau": "B1",
    "transcription": "Salut Mina, c'est Jérémy. Demain, je vais au bureau en voiture. Je peux passer te chercher vers 8h30? Je dois passer à la pharmacie en bas de chez toi. Je peux m'attendre devant. Si ça t'intéresse, rappelle-moi ce soir.",
    "question": "Qu'est-ce que Jérémy propose?",
    "options": {
      "A": "D'acheter des médicaments.",
      "B": "D'aller au travail ensemble.",
      "C": "De faire une promenade.",
      "D": "De manger au restaurant."
    },
    "reponse": "B",
    "reponseTexte": "D'aller au travail ensemble.",
    "explication": "Jérémy appelle Mina pour lui proposer de partager sa voiture pour aller au bureau. Il précise qu'il passera devant la pharmacie près de chez elle.",
    "indice": [
      "bureau",
      "voiture",
      "passer",
      "pharmacie"
    ]
  },
  {
    "id": 2,
    "niveau": "B1",
    "transcription": "Malo, tu veux venir chez moi ? On pourrait regarder le championnat du monde de jeux vidéo? Oui, je sais que tu es fan, mais je trouve que ce sport n'a rien à voir avec le vrai sport. Les participants ne font pas vraiment d'efforts physiques, ce n'est pas très impressionnant. Tu as tort. Certains champions de sport électronique ressemblent aux autres champions. Ils signent un contrat, s'entraînent beaucoup, sont suivis par des médecins pour éviter des douleurs au dos ou à la main.",
    "question": "Que propose Malo à son ami?",
    "options": {
      "A": "De participer à un match.",
      "B": "De préparer une épreuve sportive.",
      "C": "De tester un nouveau jeu.",
      "D": "De voir une compétition mondiale."
    },
    "reponse": "D",
    "reponseTexte": "De voir une compétition mondiale.",
    "explication": "Malo invite son ami à venir chez lui pour regarder le championnat du monde de jeux vidéo. Son ami n'est pas convaincu car il ne considère pas les jeux vidéo comme un vrai sport.",
    "indice": [
      "championnat",
      "mondiale",
      "jeux",
      "vidéo"
    ]
  },
  {
    "id": 3,
    "niveau": "B1",
    "transcription": "Bonjour, monsieur. Je vous appelle concernant l'offre d'emploi de standardiste que vous avez publiée cette semaine dans le journal Le Monde. Oui. Vous avez de l'expérience? Oui. J'ai travaillé deux ans dans un cabinet médical et plus récemment dans une grande entreprise. Je vous ai envoyé mon CV à l'adresse indiquée. Très bien. Je vous donne le poste direct de ma collègue qui s'occupe du recrutement 67-23. Vous pouvez l'appeler à partir de 14h.",
    "question": "Que doit faire la femme?",
    "options": {
      "A": "Elle doit laisser un message.",
      "B": "Elle doit rappeler plus tard.",
      "C": "Elle doit renvoyer son CV.",
      "D": "Elle doit revenir à 14h."
    },
    "reponse": "B",
    "reponseTexte": "Elle doit rappeler plus tard.",
    "explication": "Une femme appelle pour un emploi de standardiste. Elle a déjà envoyé son CV et on lui donne un numéro pour rappeler plus tard dans la journée.",
    "indice": [
      "offre d'emploi",
      "standardiste",
      "CV",
      "recrutement"
    ]
  },
  {
    "id": 4,
    "niveau": "B1",
    "transcription": "La rencontre avec les représentants du personnel est bien prévue aujourd'hui ? Oui, monsieur, à 15h dans la salle du rez-de-chaussée. Il faut les prévenir que je ne serai pas à l'heure. J'attends un appel très important d'un de nos importateurs. D'accord, mais je croyais que vous lui aviez parlé hier. Non, il n'a pas pu me téléphoner.",
    "question": "Que demande le directeur?",
    "options": {
      "A": "D'annuler une réunion.",
      "B": "D'informer de son retard.",
      "C": "De recevoir un client.",
      "D": "De reporter un entretien."
    },
    "reponse": "B",
    "reponseTexte": "D'informer de son retard.",
    "explication": "Un directeur parle à un employé et explique qu'il sera en retard pour une réunion avec des représentants du personnel. Il attend un appel important.",
    "indice": [
      "rencontre",
      "retard",
      "appel",
      "importateurs"
    ]
  },
  {
    "id": 5,
    "niveau": "B1",
    "transcription": "Tiens, Julie, qu'est-ce que tu fais là ? Je viens pour le test de biologie. Tu ne sais pas qu'il a été annulé? Non, j'étais absente au dernier cours. Pourquoi ce changement? À cause de la grippe. Il y a eu beaucoup d'absents cette semaine. Le prof préfère le faire dans deux semaines. Mais puisque tu es là, accompagne-moi en salle B14. Il y a une conférence intéressante.",
    "question": "Qu'apprend-on à propos du test de Julie?",
    "options": {
      "A": "Il aura lieu plus tard dans le semestre.",
      "B": "Il évaluera le chapitre des maladies.",
      "C": "Il se fera dans le grand amphithéâtre.",
      "D": "Il sera corrigé par un enseignant extérieur."
    },
    "reponse": "A",
    "reponseTexte": "Il aura lieu plus tard dans le semestre.",
    "explication": "Julie arrive pour passer un test de biologie mais découvre que celui-ci a été annulé à cause d'une épidémie de grippe dans la classe. Le professeur le reportera dans deux semaines.",
    "indice": [
      "test",
      "biologie",
      "annulé",
      "deux semaines"
    ]
  },
  {
    "id": 6,
    "niveau": "B1",
    "transcription": "Mathieu, j'aurais besoin d'un conseil. Est-ce que tu penses que je devrais aller aux Etats-Unis pour finir mon master? C'est très personnel comme décision. Est-ce que tu crois que ce sera une bonne opportunité pour ta carrière? Oui, d'après mes profs, si j'y vais, j'aurai un meilleur niveau d'anglais et je pourrai plus facilement obtenir un poste dans une entreprise bilingue. Alors fais-le. Et en plus, tu feras de nouvelles connaissances.",
    "question": "Que conseille Mathieu à son ami?",
    "options": {
      "A": "D'apprendre une langue.",
      "B": "D'arrêter ses études.",
      "C": "De partir à l'étranger.",
      "D": "De rencontrer du monde."
    },
    "reponse": "C",
    "reponseTexte": "De partir à l'étranger.",
    "explication": "Mathieu donne son avis à un ami qui hésite à partir aux États-Unis pour son master. Il parle des avantages pour la carrière et l'apprentissage de l'anglais.",
    "indice": [
      "Etats-Unis",
      "master",
      "carrière",
      "entreprise bilingue"
    ]
  },
  {
    "id": 7,
    "niveau": "B1",
    "transcription": "Bonjour, je suis étudiant en commerce international à l'Université de Laval et je voudrais déposer une demande de chambre sur le campus pour le semestre prochain. Avez-vous tous les documents indiqués dans le dossier? Je crois. Voici mon passeport, mon attestation de bourse. Je ne vois pas la copie de votre carte d'étudiant. Il nous la faut absolument pour enregistrer votre demande. D'accord. Je repasserai cet après-midi.",
    "question": "Que veut cet étudiant?",
    "options": {
      "A": "Avoir une aide financière.",
      "B": "Obtenir un logement.",
      "C": "Participer à un échange.",
      "D": "S'inscrire à un cours."
    },
    "reponse": "B",
    "reponseTexte": "Obtenir un logement.",
    "explication": "Un étudiant en commerce international demande une chambre sur le campus. Il apporte certains documents mais il manque sa carte d'étudiant.",
    "indice": [
      "demande de chambre",
      "campus",
      "semestre prochain"
    ]
  },
  {
    "id": 8,
    "niveau": "B1",
    "transcription": "Bonjour. Le mois prochain, vous allez choisir votre nouveau maire pour 5 ans. Vous ne savez pas pour qui voter? Pour vous aider, vous pouvez lire les programmes des partis politiques. Vous pouvez aussi aller à des réunions publiques et écouter notre radio.",
    "question": "Qu'est-ce que ce journaliste annonce?",
    "options": {
      "A": "Une élection.",
      "B": "Une émission.",
      "C": "Une formation.",
      "D": "Une manifestation."
    },
    "reponse": "A",
    "reponseTexte": "Une élection.",
    "explication": "Le journaliste annonce un événement politique : l'élection du maire pour 5 ans. Il invite les citoyens à s'informer via les programmes et les réunions publiques.",
    "indice": [
      "maire",
      "5 ans",
      "choisir",
      "programmes",
      "partis politiques"
    ]
  },
  {
    "id": 9,
    "niveau": "B1",
    "transcription": "Bonjour, je voudrais réserver un séjour au Seychelles. Alors, j'ai plusieurs formules de voyage à vous proposer. J'ai notamment quelque chose de très intéressant. Un combiné avion plus hôtel 4 étoiles sur l'île principale à 1300 euros la semaine. Départ entre le 10 et le 15 décembre. C'est au-dessus de mes moyens. Qu'auriez-vous d'autre à me proposer? J'ai aussi des hôtels de catégorie inférieure. Oui, je préférerais.",
    "question": "Qu'est-ce qui pose problème au client?",
    "options": {
      "A": "La date de départ.",
      "B": "La durée du voyage.",
      "C": "La situation de l'hôtel.",
      "D": "Le prix du séjour."
    },
    "reponse": "D",
    "reponseTexte": "Le prix du séjour.",
    "explication": "Un client demande des options de voyage aux Seychelles. Il trouve le prix d'un séjour trop élevé et demande d'autres propositions.",
    "indice": [
      "Seychelles",
      "combiné",
      "1300 euros",
      "mes moyens"
    ]
  },
  {
    "id": 10,
    "niveau": "B1",
    "transcription": "Le groupe Canal recrute des stagiaires et pour la première fois, la sélection va se faire uniquement sur la base d'entretiens vidéo. C'est une méthode qui est en train d'ailleurs d'exploser dans les entreprises françaises. Oui, c'est une première. La chaîne emboîte le pas à un processus de recrutement très à la mode. Un chiffre sur le site de recrutement MétéoJob, le nombre de candidats ayant passé un entretien vidéo a augmenté de 250% entre 2016 et 2017. Voilà comment ça se passe. Canal+, pour prendre son exemple, reçoit des milliers de CV de jeunes qui veulent accéder à des stages ou trouver des contrats d'alternance. Elle ne doit en retenir que 120.",
    "question": "Qu'apprend-on sur les entreprises françaises?",
    "options": {
      "A": "Elles cherchent des spécialistes en vidéo.",
      "B": "Elles modernisent leurs procédés de recrutement.",
      "C": "Elles préfèrent employer des stagiaires.",
      "D": "Elles reçoivent peu de candidatures spontanées."
    },
    "reponse": "B",
    "reponseTexte": "Elles modernisent leurs procédés de recrutement.",
    "explication": "Canal+ recrute des stagiaires et utilise pour la première fois des entretiens vidéo pour la sélection. Le processus de recrutement vidéo devient populaire en France.",
    "indice": [
      "recrutement",
      "entretiens vidéo",
      "Canal+",
      "stagiaires"
    ]
  },
  {
    "id": 11,
    "niveau": "B1",
    "transcription": "Audrey, nous allons grimper samedi prochain sur le site du Vert. Vous venez? Ah non, je n'ai jamais fait d'escalade et j'ai peur du vide. Rassurez-vous, tout est sécurisé. Il n'y a vraiment aucun risque. En plus, je serai là pour vous guider. D'accord, mais si j'ai peur, vous me ferez descendre. Entendu.",
    "question": "Pourquoi Audrey accepte-t-elle de faire de l'escalade?",
    "options": {
      "A": "Elle aime être en altitude.",
      "B": "Elle désire accompagner un ami.",
      "C": "Elle fait confiance à son guide.",
      "D": "Elle veut prendre des risques."
    },
    "reponse": "C",
    "reponseTexte": "Elle fait confiance à son guide.",
    "explication": "Audrey hésite à faire de l'escalade car elle a peur du vide. Un guide la rassure et lui propose de l'accompagner, ce qui la convainc.",
    "indice": [
      "escalade",
      "peur",
      "guide",
      "sécurisé"
    ]
  },
  {
    "id": 12,
    "niveau": "B1",
    "transcription": "Est-ce que tu achètes des vêtements sur Internet ? Oui, souvent. Les prix sont vraiment intéressants. Moi, j'ai eu une mauvaise expérience l'autre jour. J'ai commandé un pantalon, mais ils ont fait une erreur. Et ils m'ont envoyé un modèle complètement différent. J'ai réussi à le rendre, mais c'était compliqué. Finalement, je préfère les boutiques. Au moins, on sait ce qu'on achète. Tu n'as pas eu de chance.",
    "question": "Qu'est-ce qui déplaît à la jeune femme dans les achats en ligne?",
    "options": {
      "A": "Le prix élevé des produits.",
      "B": "Les délais pour être livrée.",
      "C": "Les difficultés en cas d'échange.",
      "D": "Les tailles de vêtements différentes."
    },
    "reponse": "C",
    "reponseTexte": "Les difficultés en cas d'échange.",
    "explication": "La jeune femme explique pourquoi elle préfère les boutiques. Elle a eu une mauvaise expérience avec un pantalon commandé en ligne et a trouvé compliqué de le rendre.",
    "indice": [
      "commander",
      "pantalon",
      "erreur",
      "rendre",
      "compliqué"
    ]
  },
  {
    "id": 13,
    "niveau": "B1",
    "transcription": "Tu voudrais aller à l'exposition Matisse au musée d'Orsay demain soir? Quelle bonne idée! Mais après le travail, je voulais aller en ville pour faire des courses. Tu ne peux pas aller faire jeudi? Mais si! Alors d'accord pour l'exposition. Et après, on dînera chez moi.",
    "question": "Que vont faire ses amis le mercredi soir?",
    "options": {
      "A": "Dîner au restaurant.",
      "B": "Faire des courses.",
      "C": "Travailler tard.",
      "D": "Voir une exposition."
    },
    "reponse": "D",
    "reponseTexte": "Voir une exposition.",
    "explication": "Deux amis discutent de leurs plans pour le mercredi soir. L'un propose d'aller à une exposition au musée d'Orsay et l'autre accepte.",
    "indice": [
      "exposition",
      "musée d'Orsay",
      "mercredi soir"
    ]
  },
  {
    "id": 14,
    "niveau": "B1",
    "transcription": "Lorsque nous nous sommes installés loin de chez nos parents, nous nous sommes aperçus que le magasin le plus proche de chez nous, pour laver nos vêtements, était à plus de 2 km. On s'est dit que ce serait vraiment sympa si notre voisine pouvait nous prêter sa machine à laver. Nous avons donc créé un site internet. Il met en relation ceux qui ont une machine à laver et leurs voisins qui n'en ont pas, contre quelques euros.",
    "question": "Que propose le site internet présenté?",
    "options": {
      "A": "De créer un réseau étudiant pour échanger des services.",
      "B": "De mettre en contact des personnes pour partager du matériel.",
      "C": "De trouver une voiture pour transporter des affaires lourdes.",
      "D": "D'employer des jeunes pour réparer de vieux objets."
    },
    "reponse": "B",
    "reponseTexte": "De mettre en contact des personnes pour partager du matériel.",
    "explication": "Des personnes qui viennent de déménager ont créé un site pour mettre en relation ceux qui ont une machine à laver avec ceux qui en ont besoin.",
    "indice": [
      "machine à laver",
      "voisins",
      "partager",
      "matériel"
    ]
  },
  {
    "id": 15,
    "niveau": "B1",
    "transcription": "Marie, je voudrais vous inviter à dîner jeudi prochain avec les Blanchards. Vous aimez ça, les frimaïres? Moi, oui, mais Vincent est allergique aux crevettes. Ah bon? Je fais un plat végétarien, alors? Oui, c'est mieux. Et pour le dessert, on mange de tout. Super. Je fais une tarte aux pommes.",
    "question": "Quel est le problème de Vincent?",
    "options": {
      "A": "Il déteste les plats végétariens.",
      "B": "Il est absent à la date du dîner.",
      "C": "Il est malade avec les crevettes.",
      "D": "Il est stressé par les Blanchard."
    },
    "reponse": "C",
    "reponseTexte": "Il est malade avec les crevettes.",
    "explication": "Marie invite une personne à dîner. Vincent, qui sera présent, est allergique aux crevettes, donc on prévoit un plat végétarien.",
    "indice": [
      "frimaires",
      "crevettes",
      "végétarien",
      "tarte aux pommes"
    ]
  },
  {
    "id": 16,
    "niveau": "B1",
    "transcription": "Mais enfin, Loïc, ce n'était pas des vacances. C'était une formation au premier secours que je te conseille vraiment de faire aussi. Elle est toujours utile au travail, mais aussi dans la vie de tous les jours.",
    "question": "Que conseille la femme à Loïc?",
    "options": {
      "A": "Demander de l'aide",
      "B": "Participer à une formation",
      "C": "Partir en vacances",
      "D": "Travailler avec sa collègue"
    },
    "reponse": "B",
    "reponseTexte": "Participer à une formation.",
    "explication": "Loïc parle à une collègue de sa formation au premier secours. Elle lui conseille de la faire aussi car elle est utile dans la vie quotidienne.",
    "indice": [
      "formation",
      "premier secours",
      "travail",
      "vie de tous les jours"
    ]
  },
  {
    "id": 17,
    "niveau": "B1",
    "transcription": "Ça fait trois ans que je vis à Laval. Après avoir habité une chambre en cité universitaire, j'ai voulu vivre dans mon propre appartement. Mais trouver de l'espace pour un loyer modéré, ce n'est pas facile. Finalement, j'ai opté pour la colocation. Nous sommes deux colocataires. Au début, la vie en colocation n'est pas simple, surtout quand on ne se connaît pas. Il faut savoir faire des compromis et s'organiser.",
    "question": "Pourquoi cette personne a-t-elle choisi la colocation?",
    "options": {
      "A": "Pour avoir un logement plus grand et peu cher.",
      "B": "Pour louer des chambres à des étudiants.",
      "C": "Pour partager les tâches ménagères.",
      "D": "Pour rencontrer de nouvelles personnes."
    },
    "reponse": "A",
    "reponseTexte": "Pour avoir un logement plus grand et peu cher.",
    "explication": "Une personne explique qu'elle a choisi la colocation car trouver un logement spacieux avec un loyer modéré n'était pas facile.",
    "indice": [
      "colocation",
      "loyer modéré",
      "espace"
    ]
  },
  {
    "id": 18,
    "niveau": "B1",
    "transcription": "Bonjour monsieur, je suis étudiante, je cherche un logement. Bienvenue chez nous. Est-ce que vous savez comment fonctionne notre association? Non, pas très bien. Eh bien, vous habitez chez une personne âgée et en échange, vous lui rendez quelques petits services, faire les courses, préparer le repas et surtout lui tenir compagnie. Et combien ça coûte? Ça dépend du temps passé auprès de la personne et de ce que vous faites. Vous payerez un petit loyer si vous assurez seulement une présence certains soins.",
    "question": "Que permet cette association?",
    "options": {
      "A": "De faire des rencontres.",
      "B": "De manger gratuitement.",
      "C": "De trouver un travail.",
      "D": "De vivre chez quelqu'un."
    },
    "reponse": "D",
    "reponseTexte": "De vivre chez quelqu'un.",
    "explication": "Une étudiante cherche un logement auprès d'une association qui propose des logements chez des personnes âgées en échange de services.",
    "indice": [
      "logement",
      "personne âgée",
      "services",
      "loyer"
    ]
  },
  {
    "id": 19,
    "niveau": "B1",
    "transcription": "Bonjour madame, je viens de voir à l'affichage que le train pour Londres a une heure de retard. Pourquoi? C'est encore des cheminots qui ne sont pas contents? Non, pas cette fois. Mais malheureusement, je n'en sais pas plus que vous. Alors là, c'est un comble. Pour une fois que ce n'est pas un arrêt de travail, il n'y a personne qui puisse nous renseigner. Ben non. C'est peut-être une panne. Je ne sais pas non plus. Il faut attendre et continuer à consulter le panneau. C'est tout.",
    "question": "Pourquoi le voyageur est-il en colère?",
    "options": {
      "A": "Parce que la file d'attente est très longue.",
      "B": "Parce qu'il manque d'information.",
      "C": "Parce que les conducteurs sont en grève.",
      "D": "Parce que les guichets sont fermés."
    },
    "reponse": "B",
    "reponseTexte": "Parce qu'il manque d'information.",
    "explication": "Un voyageur demande des informations sur le retard d'un train pour Londres, mais personne ne peut lui répondre. Il est frustré par le manque d'informations.",
    "indice": [
      "retard",
      "cheminots",
      "renseigner",
      "panne"
    ]
  },
  {
    "id": 20,
    "niveau": "B1",
    "transcription": "En raison des travaux de construction de la nouvelle ligne de tramway, la circulation de la ligne 1 est interrompue entre les stations Place de l'Europe et Corum. Nous vous invitons à prendre les navettes de remplacement à votre disposition aux stations pour poursuivre votre voyage. Nous nous excusons pour le dérangement occasionné et vous remercions de votre compréhension.",
    "question": "Qu'annonce-t-on aux voyageurs?",
    "options": {
      "A": "Il y a une manifestation sur les voies.",
      "B": "Ils doivent changer de moyen de transport.",
      "C": "Les tramways circulent avec du retard.",
      "D": "Un accident bloque la circulation des bus."
    },
    "reponse": "B",
    "reponseTexte": "Ils doivent changer de moyen de transport.",
    "explication": "Une annonce informe les voyageurs que la ligne de tramway est interrompue à cause de travaux et propose des navettes de remplacement.",
    "indice": [
      "travaux",
      "construction",
      "navettes",
      "remplacement"
    ]
  },
  {
    "id": 21,
    "niveau": "B1",
    "transcription": "Ça ne va pas? Tu es malade? Non, mais mon mari vient de réserver un appartement à la montagne pour 15 jours. Au programme, randonnée, vélo et escalade. C'est génial! C'est affreux, tu veux dire. Moi, je rêvais de deux semaines de repos et de lecture.",
    "question": "De quoi discutent les deux femmes?",
    "options": {
      "A": "D'un prochain déménagement.",
      "B": "De sport pour le week-end.",
      "C": "De vacances en famille.",
      "D": "D'un problème de santé."
    },
    "reponse": "C",
    "reponseTexte": "De vacances en famille.",
    "explication": "Deux femmes discutent de vacances à la montagne. L'une est enthousiaste, l'autre déçue car elle voulait se reposer.",
    "indice": [
      "appartement",
      "montagne",
      "randonnée",
      "lecture"
    ]
  },
  {
    "id": 22,
    "niveau": "B1",
    "transcription": "Bonjour, je suis étudiant ici à l'Université de Montréal et je voudrais déposer une demande de bourse. Avez-vous apporté tous les documents? Je crois. Je ne vois pas votre passeport. Il faut une photocopie du passeport pour enregistrer votre demande.",
    "question": "Que souhaite faire l'étudiant?",
    "options": {
      "A": "Obtenir une aide financière.",
      "B": "Récupérer un dossier.",
      "C": "Remettre un devoir.",
      "D": "S'inscrire à l'université."
    },
    "reponse": "A",
    "reponseTexte": "Obtenir une aide financière.",
    "explication": "Un étudiant parle à un employé de l'université pour demander une bourse. L'employé lui demande une photocopie de son passeport.",
    "indice": [
      "demande",
      "bourse",
      "passeport",
      "photocopie"
    ]
  },
  {
    "id": 23,
    "niveau": "B1",
    "transcription": "Allô, bonjour, je vous appelle encore une fois parce que j'ai commandé un canapé lit il y a six semaines et que je n'ai toujours pas reçu. Je suis M. Marceau et mon numéro de commande est le 3802. Que se passe-t-il? Je regarde, ne quittez pas. Oui, en effet, je vois que votre canapé est encore à l'usine. Je pense que la livraison devrait se faire bientôt. Vous avez un numéro de téléphone? Je vais me renseigner et je vous rappelle. J'ai déjà appelé cinq fois. Je veux des explications, tout de suite.",
    "question": "Pourquoi le client téléphone-t-il?",
    "options": {
      "A": "Pour commander un nouveau canapé-lit.",
      "B": "Pour exiger l'annulation de sa commande.",
      "C": "Pour demander un échange de marchandise.",
      "D": "Pour se plaindre d'une commande non livrée."
    },
    "reponse": "D",
    "reponseTexte": "Pour se plaindre d'une commande non livrée.",
    "explication": "Un client appelle pour savoir pourquoi son canapé-lit n'a pas été livré après six semaines d'attente.",
    "indice": [
      "commandé",
      "canapé lit",
      "six semaines",
      "non livrée"
    ]
  },
  {
    "id": 24,
    "niveau": "B1",
    "transcription": "10 ans de la paix, merci d'être venu à Radio Monde. On commence par les titres de l'actualité de ce jour-ci. Comme l'air, le premier titre, c'est le changement de terre en Asie. La communauté internationale se mobilise pour aider la population. Le reportage de notre ambassadeur spécial, Jean-Romain. A savoir, les premiers ministres du Conseil et la Conjure de la Conjure de la Conjure de l'Échauffement climatique. Enfin, sans du noir, on a eu le conseil de l'Aïr, qui nous a aidé maintenant dans 5 grandes villes du monde, afin de recadrer des fonds pour lutter contre le grand air.",
    "question": "Quel sera le premier sujet développé au cours de ce journal d'information radiophonique?",
    "options": {
      "A": "L'état de la recherche mondiale sur le cancer.",
      "B": "L'élargissement des ministres européens de l'écologie.",
      "C": "La lutte contre le réchauffement climatique en Asie.",
      "D": "Un reportage sur les lieux d'un tremblement de terre."
    },
    "reponse": "D",
    "reponseTexte": "Un reportage sur les lieux d'un tremblement de terre.",
    "explication": "Un journaliste présente les titres de l'actualité à la radio. Le premier sujet concerne un tremblement de terre en Asie et la mobilisation internationale pour aider la population.",
    "indice": [
      "changement de terre",
      "reportage",
      "ambassadeur spécial",
      "Jean-Romain"
    ]
  },
  {
    "id": 25,
    "niveau": "B1",
    "transcription": "Association Vie Étudiante, bonjour. Bonjour madame, je suis un étudiant étranger et je cherche un logement. Est-ce que vous voulez une chambre en cité universitaire? Non. Vous cherchez un appartement en colocation? Non, j'aimerais un studio. Bien. Je vous envoie des adresses de propriétaires par courriel.",
    "question": "Qu'est-ce que cet étudiant veut?",
    "options": {
      "A": "Changer de propriétaire.",
      "B": "Louer un appartement.",
      "C": "Partager un logement.",
      "D": "Partir vivre à l'étranger."
    },
    "reponse": "B",
    "reponseTexte": "Louer un appartement.",
    "explication": "Un étudiant étranger appelle une association pour trouver un logement. Il refuse les options proposées et précise qu'il veut un studio.",
    "indice": [
      "logement",
      "studio",
      "colocation",
      "cité universitaire"
    ]
  },
  {
    "id": 26,
    "niveau": "B1",
    "transcription": "Puis-je déposer mon manteau ? Certainement, madame. C'est à votre gauche. Cette année, c'est gratuit pour les abonnés au théâtre. Voilà une bonne nouvelle pour débuter la saison. Je vous souhaite une agréable soirée.",
    "question": "Que souhaite faire la femme?",
    "options": {
      "A": "Féliciter les acteurs dans leur loge.",
      "B": "Remettre un vêtement au vestiaire.",
      "C": "Retourner à la salle de spectacle.",
      "D": "S'informer sur la programmation."
    },
    "reponse": "B",
    "reponseTexte": "Remettre un vêtement au vestiaire.",
    "explication": "Une femme demande si elle peut laisser son manteau au vestiaire. L'employé lui indique où le déposer et lui explique que c'est gratuit pour les abonnés.",
    "indice": [
      "manteau",
      "vestiaire",
      "gratuit",
      "abonnés"
    ]
  },
  {
    "id": 27,
    "niveau": "B1",
    "transcription": "Bonjour, je suis étudiant ici. Je voudrais travailler en salle informatique pour le cours de commerce international. C'est possible? Oui, vous avez votre carte d'étudiant? Oui, mais il n'y a pas encore de photo dessus. Ce n'est pas grave pour la photo. Il faut votre carte d'étudiant pour vous connecter. Le code d'accès est écrit dessus. Vous pouvez vous installer au poste de notre rang. Merci beaucoup.",
    "question": "Que souhaite l'étudiant?",
    "options": {
      "A": "Utiliser la salle informatique.",
      "B": "Mettre à jour sa carte d'étudiant.",
      "C": "Prendre une photo pour sa carte d'étudiant.",
      "D": "Trouver le code d'accès à la salle."
    },
    "reponse": "A",
    "reponseTexte": "Utiliser la salle informatique.",
    "explication": "Un étudiant demande à utiliser la salle informatique pour son cours de commerce international. Il a sa carte d'étudiant mais elle n'a pas encore de photo.",
    "indice": [
      "salle informatique",
      "cours",
      "commerce international"
    ]
  },
  {
    "id": 28,
    "niveau": "B1",
    "transcription": "L'Alberta est devenue une terre de prédilection pour de nombreux migrants canadiens. Le boom économique de ces dernières années a attiré des gens d'un peu partout au Canada. Cette migration interne au Canada implique surtout les jeunes qui se déplacent vers cette province de l'Ouest. Ce sont les gens qui sont le plus susceptibles d'avoir des enfants. Alors, il y a un effet double. Non seulement il y a de la croissance grâce à la migration interne, mais le taux de naissance augmente aussi en Alberta. Les deux facteurs contribuent un grand de main à cette croissance explosive.",
    "question": "D'après cette chronique, pourquoi l'Alberta a-t-elle une économie en pleine croissance?",
    "options": {
      "A": "Elle accueille une main-d'œuvre ciblée.",
      "B": "Elle bénéficie d'une situation géographique privilégiée.",
      "C": "Elle est la destination d'une population migrante jeune.",
      "D": "Elle pratique une politique nataliste très attractive."
    },
    "reponse": "C",
    "reponseTexte": "Elle est la destination d'une population migrante jeune.",
    "explication": "Un texte explique pourquoi l'Alberta attire beaucoup de migrants canadiens, surtout des jeunes, ce qui contribue à sa croissance économique et démographique.",
    "indice": [
      "Alberta",
      "migrants",
      "jeunes",
      "croissance"
    ]
  },
  {
    "id": 29,
    "niveau": "B1",
    "transcription": "Oh Bonjour Pablo, tu vas bien ? Installe-toi. Merci Amélie. Ah dis donc, ce fauteuil rouge et jaune est magnifique. Merci. Il est très vieux, mais je l'adore. C'est ma grand-mère qui me l'a donné.",
    "question": "Qu'est-ce que Pablo pense de ce fauteuil?",
    "options": {
      "A": "Il est peu coloré.",
      "B": "Il est très confortable.",
      "C": "Il est trop ancien.",
      "D": "Il est vraiment beau."
    },
    "reponse": "D",
    "reponseTexte": "Il est vraiment beau.",
    "explication": "Pablo admire un fauteuil rouge et jaune dans le salon d'Amélie. Il dit qu'il est magnifique.",
    "indice": [
      "fauteuil",
      "rouge",
      "jaune",
      "magnifique",
      "grand-mère"
    ]
  },
  {
    "id": 30,
    "niveau": "B1",
    "transcription": "Excuzez-moi, je cherche le bureau de Madame Fournier, s'il vous plaît. Oui, c'est juste au-dessus. Prenez l'escalier sur votre gauche et en haut, poussez la porte. C'est le bureau 123.",
    "question": "Que doit faire cette personne?",
    "options": {
      "A": "Continuer jusqu'au hall.",
      "B": "Descendre avec l'ascenseur.",
      "C": "Monter d'un étage.",
      "D": "Prendre le couloir à droite."
    },
    "reponse": "C",
    "reponseTexte": "Monter d'un étage.",
    "explication": "Quelqu'un demande où se trouve le bureau de Madame Fournier. On lui indique de prendre l'escalier et de monter, car c'est juste au-dessus.",
    "indice": [
      "bureau",
      "Madame Fournier",
      "escalier",
      "porte",
      "123"
    ]
  },
  {
    "id": 31,
    "niveau": "B1",
    "transcription": "Bonjour ! Tu as pris tes congés? Oui, pour une fois, je parle à la première quinzaine du temps. Moi, je suis en septembre, avec mon mari, nous partons à Rome. Les billets sont moins chers à cette année de l'année. Rome, quel sens! Moi, comme tous les anges, je parle en Bretagne, dans la maison de l'homme.",
    "question": "De quoi parlent ces personnes?",
    "options": {
      "A": "De leurs derniers voyages.",
      "B": "De leurs destinations préférées.",
      "C": "De leurs prochaines vacances.",
      "D": "De leurs traditions familiales."
    },
    "reponse": "C",
    "reponseTexte": "De leurs prochaines vacances.",
    "explication": "Deux personnes discutent de leurs vacances. L'une parle de son prochain voyage à Rome en septembre avec son mari.",
    "indice": [
      "congés",
      "Rome",
      "septembre",
      "billets"
    ]
  },
  {
    "id": 32,
    "niveau": "B1",
    "transcription": "Bonjour monsieur, je cherche la pharmacie Bollet. C'est dans le coin, je crois. Oh mon garçon, ça fait longtemps que c'est plus une pharmacie. C'est une laverie automatique maintenant. Monsieur Bollet, il est mort il y a cinq ans. Ah bon? Mais c'est ma mère qui me l'a indiqué. Vous êtes sûr qu'elle n'est plus là? Bien sûr, ça fait vingt ans que j'habite le quartier, alors je le connais, une pharmacie. Il y en a une autre, mais dans deux rues, à droite, c'est pas loin.",
    "question": "Pourquoi le jeune homme ne trouve-t-il pas la pharmacie Bollet?",
    "options": {
      "A": "Elle n'existe plus depuis un moment.",
      "B": "Il n'est pas dans la bonne rue.",
      "C": "Il s'est trompé d'adresse et de nom.",
      "D": "Le passant ignore où elle se trouve."
    },
    "reponse": "A",
    "reponseTexte": "Elle n'existe plus depuis un moment.",
    "explication": "Un jeune homme demande des informations sur la pharmacie Bollet à un passant, qui lui explique qu'elle n'existe plus depuis longtemps et a été remplacée par une laverie automatique.",
    "indice": [
      "pharmacie",
      "laverie",
      "Bollet",
      "mort",
      "vingt ans"
    ]
  },
  {
    "id": 33,
    "niveau": "B1",
    "transcription": "Alors Clément, ta recherche d'emploi, ça avance? Pas vraiment, et ce n'est pas faute de chercher. Mais attends, avec ta formation d'architecte, décorateur et tous tes stages, c'est incroyable! J'avais une piste dans un cabinet de Montréal, mais ils m'ont répondu qu'ils cherchaient un professionnel confirmé. Ah! Et qu'il soit au moins bilingue comme toi, j'espère. Ça, ce n'est pas le problème. Mais à 25 ans, je ne peux pas avoir travaillé 10 ans dans la même entreprise.",
    "question": "Quel est le problème de Clément dans sa recherche d'un emploi?",
    "options": {
      "A": "Il a peu de diplômes.",
      "B": "Il est déjà trop âgé.",
      "C": "Il est mauvais en langues.",
      "D": "Il manque d'expérience."
    },
    "reponse": "D",
    "reponseTexte": "Il manque d'expérience.",
    "explication": "Clément discute avec un ami de ses difficultés à trouver un emploi d'architecte à Montréal. On lui a répondu qu'ils cherchaient un professionnel confirmé, ce qui implique plus d'expérience que lui.",
    "indice": [
      "recherche d'emploi",
      "formation d'architecte",
      "professionnel confirmé",
      "bilingue"
    ]
  },
  {
    "id": 34,
    "niveau": "B1",
    "transcription": "Oh ! Qu'est-ce qui t'arrive? T'es super beau habillé comme ça! Où vas-tu? Je sors de chez le coiffeur et je viens de m'acheter ce costume. Magnifique! T'as un look d'enfer! Mais pourquoi? Pour moi? Je viens juste de terminer mes six mois d'essai chez mon patron et comme j'ai donné satisfaction, je signe lundi prochain mon contrat définitif. Et à temps complet, pas partiel. Ah! Ton contrat définitif! Mais c'est extra! Te voilà dans la vie active, bravo! Je suis enchantée pour toi! Et tu penses à nous maintenant?",
    "question": "Pour quelle raison la jeune fille est-elle si contente?",
    "options": {
      "A": "Elle a trouvé pour son ami un emploi à temps complet dans une société.",
      "B": "Son ami est définitivement employé dans la société où il travaille.",
      "C": "Son ami vient de trouver son premier emploi à l'essai.",
      "D": "Elle va signer un contrat d'embauche à temps complet."
    },
    "reponse": "B",
    "reponseTexte": "Son ami est définitivement employé dans la société où il travaille.",
    "explication": "Un ami annonce à une jeune fille qu'il vient de terminer sa période d'essai et va signer son contrat définitif à temps complet.",
    "indice": [
      "contrat définitif",
      "vie active",
      "six mois d'essai"
    ]
  },
  {
    "id": 35,
    "niveau": "B1",
    "transcription": "Mais qu'est-ce qui t'est arrivé, Olivier ? Tu t'es blessé dans une bagarre? Non, c'est une histoire idiote. Je suis allé skier avec des copains dans une station près de Montréal. On a passé la journée à descendre les pistes à toute allure. Et c'est comme ça que tu t'es cassé le bras? Même pas. Je suis rentré chez moi en voiture et là j'ai manqué une marche en montant à l'étage.",
    "question": "Comment Olivier s'est-il cassé le bras?",
    "options": {
      "A": "Il a eu un accident sur la route.",
      "B": "Il a fait une chute à la montagne.",
      "C": "Il est tombé dans son escalier.",
      "D": "Il s'est battu avec un ami."
    },
    "reponse": "C",
    "reponseTexte": "Il est tombé dans son escalier.",
    "explication": "Olivier raconte qu'il s'est cassé le bras en rentrant chez lui après une journée de ski. Il a manqué une marche en montant à l'étage.",
    "indice": [
      "ski",
      "marche",
      "étage"
    ]
  },
  {
    "id": 36,
    "niveau": "B1",
    "transcription": "Alors, voici le deux pièces. Il fait 1000 pieds carrés. Il y a une petite entrée et voici le salon. Très clair grâce aux grandes fenêtres qui donnent sur les plaines d'Abraham. Quel espace! En effet, mais dans quel état? Il n'a pas l'air récent. Vous avez raison. Il date des années 70. Il y a quelques rénovations après moi. C'est d'ailleurs pour cette raison que son prix est si bas.",
    "question": "Quel est le défaut de l'appartement?",
    "options": {
      "A": "Il a besoin de travaux.",
      "B": "Il est mal situé.",
      "C": "Il est trop cher.",
      "D": "Il manque de lumière."
    },
    "reponse": "A",
    "reponseTexte": "Il a besoin de travaux.",
    "explication": "Un agent immobilier montre un appartement à un client. Ils discutent de l'état de l'appartement, qui date des années 70 et nécessite des rénovations, ce qui explique son prix bas.",
    "indice": [
      "deux pièces",
      "rénovations",
      "prix bas"
    ]
  },
  {
    "id": 37,
    "niveau": "B1",
    "transcription": "Alors, ça t'a plu? Oui, j'ai trouvé le scénario original et la fin surprenante, mais je ne suis pas très fan de l'acteur principal. Je trouve qu'ils auraient pu choisir quelqu'un d'autre pour ce rôle. Et la musique était insupportable.",
    "question": "Que confessent ces personnes?",
    "options": {
      "A": "Elles ont assisté à un concert.",
      "B": "Elles ont lu le même livre.",
      "C": "Elles ont rencontré une célébrité.",
      "D": "Elles ont vu un film au cinéma."
    },
    "reponse": "D",
    "reponseTexte": "Elles ont vu un film au cinéma.",
    "explication": "Deux personnes discutent d'un film qu'elles viennent de voir. L'une donne son avis sur le scénario, les acteurs et la musique.",
    "indice": [
      "scénario",
      "fin",
      "acteur",
      "rôle",
      "musique"
    ]
  },
  {
    "id": 38,
    "niveau": "B1",
    "transcription": "Maman, tu sais, avec Julie, on a décidé d'acheter un lave-vaisselle. Avec les deux enfants, il y a beaucoup de vaisselle. Mais j'ai peur que ça consomme beaucoup d'eau et que ça soit bruyant. Détrompe-toi. Il paraît qu'on utilise moins d'eau avec un lave-vaisselle qu'en lavant à la main. Et les nouveaux appareils sont vraiment silencieux. Et toi? Tu n'en veux pas un? Oh, je suis seul. Même avec un petit appareil, il faudrait que j'attende plusieurs jours avant qu'il soit rempli.",
    "question": "Pourquoi la mère refuse-t-elle d'avoir un lave-vaisselle?",
    "options": {
      "A": "Parce qu'elle trouve ça trop bruyant.",
      "B": "Parce que c'est inadapté à ses besoins.",
      "C": "Parce que ça consomme trop d'eau.",
      "D": "Parce que ses enfants font la vaisselle."
    },
    "reponse": "B",
    "reponseTexte": "Parce que c'est inadapté à ses besoins.",
    "explication": "Un enfant parle à sa mère d'acheter un lave-vaisselle. La mère explique qu'elle est seule et qu'elle devrait attendre plusieurs jours pour le remplir, donc cela ne correspond pas à ses besoins.",
    "indice": [
      "lave-vaisselle",
      "seul",
      "rempli"
    ]
  },
  {
    "id": 39,
    "niveau": "B1",
    "transcription": "On dit souvent qu'à Londres, on peut changer de job quasiment comme de chemise. Est-ce que c'est toujours vrai? Il est toujours facile de passer d'un job à l'autre. Le diplôme a beaucoup moins d'importance. On va surtout regarder les postes que vous avez déjà occupés. On va aussi tenir compte de vos motivations. C'est vrai qu'on vous donne aussi la possibilité d'augmenter assez, enfin, comment dire, de franchir les étapes beaucoup plus rapidement. On retrouve assez régulièrement des personnes vers 22, 23 ans et déjà manager, tandis qu'en France, c'est quand même un petit peu plus compliqué.",
    "question": "Que dit cette intervenante au sujet du travail à Londres?",
    "options": {
      "A": "Le recrutement se fonde sur l'expérience.",
      "B": "Les salaires à l'embauche sont très élevés.",
      "C": "L'évolution professionnelle est très lente.",
      "D": "L'obtention d'un premier emploi est aisée."
    },
    "reponse": "A",
    "reponseTexte": "Le recrutement se fonde sur l'expérience.",
    "explication": "Une intervenante parle des opportunités d'emploi à Londres, en comparant la facilité de changer de poste et l'importance de l'expérience professionnelle par rapport à un diplôme.",
    "indice": [
      "Londres",
      "expérience",
      "diplôme",
      "recrutement"
    ]
  },
  {
    "id": 40,
    "niveau": "B1",
    "transcription": "Dis, Jean-Paul, t'as pas l'air d'avoir très envie d'aller à la campagne ce week-end. En tout cas, moi j'ai peur d'avoir froid. Le chauffage marche si mal. Moi, c'est pas ça. Ce qui m'ennuie, c'est de faire tous ces kilomètres pour rester à peine deux jours. Oh, la route, c'est pas grave. Mais la météo n'est pas très bonne. Ça ne me dit rien d'être bloquée tout le week-end dans la maison.",
    "question": "Pourquoi Jean-Paul n'a-t-il pas envie d'aller à la campagne?",
    "options": {
      "A": "Il a peur d'avoir froid.",
      "B": "Il n'aime pas la météo.",
      "C": "Le voyage est trop long.",
      "D": "Il n'aime pas rester enfermé."
    },
    "reponse": "C",
    "reponseTexte": "Le voyage est trop long.",
    "explication": "Jean-Paul et une autre personne discutent de leurs réticences à passer le week-end à la campagne. Jean-Paul explique pourquoi il n'a pas envie d'y aller.",
    "indice": [
      "campagne",
      "kilomètres",
      "deux jours",
      "météo"
    ]
  },
  {
    "id": 41,
    "niveau": "B1",
    "transcription": "Est-ce que tu veux participer au cadeau pour Daniel ? Un cadeau? Pourquoi? Il part à la retraite à la fin du mois. Il part déjà? Le service semblera vide sans lui. Et comment va faire le chef sans son secrétaire? Ah ça! Il essaye de trouver quelqu'un pour le remplacer, mais je crois qu'il va avoir du mal à trouver un aussi bon employé que lui. Si le remplaçant doit plaire au chef, aux collègues et aux clients, c'est sûr, ça va être dur.",
    "question": "Pour ces personnes, qui est Daniel?",
    "options": {
      "A": "Leur client.",
      "B": "Leur collègue.",
      "C": "Leur directeur.",
      "D": "Leur professeur."
    },
    "reponse": "B",
    "reponseTexte": "Leur collègue.",
    "explication": "Des collègues discutent de la retraite imminente de Daniel et de l'importance de son rôle au sein de leur équipe.",
    "indice": [
      "cadeau",
      "retraite",
      "secrétaire",
      "remplacer",
      "employé"
    ]
  },
  {
    "id": 42,
    "niveau": "B1",
    "transcription": "Alors Rachida, comment s'est passée ta soirée hier ? Super! Avec Bertrand, nous sommes allés dans un bar qui vient d'ouvrir. Il y avait un concert de musique jazz. J'ai adoré! Le billet d'entrée était un peu cher, mais on a parlé avec des gens très sympas. Ils nous ont proposé d'aller danser en discothèque après le spectacle. Comme on était un peu fatigués, on a refusé. Ce sera pour une prochaine fois.",
    "question": "Qu'est-ce qu'on apprend sur la soirée de Rachida?",
    "options": {
      "A": "Elle a rencontré des musiciens.",
      "B": "Elle a testé un nouveau bar.",
      "C": "Elle a vu un spectacle gratuit.",
      "D": "Elle est allée en discothèque."
    },
    "reponse": "B",
    "reponseTexte": "Elle a testé un nouveau bar.",
    "explication": "On demande ce qu'on apprend sur la soirée de Rachida. Attention à ne pas confondre avec les autres activités mentionnées.",
    "indice": [
      "bar",
      "concert",
      "jazz",
      "discothèque"
    ]
  },
  {
    "id": 43,
    "niveau": "B1",
    "transcription": "Pourriez-vous me dire où se trouve le bureau 309, s'il vous plaît? Au troisième étage, deuxième porte à gauche, avant la cafétéria. Apparemment, l'ascenseur est en panne. Oui, malheureusement. Vous devez prendre l'escalier au bout du couloir. Celui-ci?",
    "question": "Que doit faire la personne pour se rendre au bureau 309?",
    "options": {
      "A": "Aller au 2e étage.",
      "B": "Monter à pied.",
      "C": "Prendre l'ascenseur.",
      "D": "Passer par la cafétéria."
    },
    "reponse": "B",
    "reponseTexte": "Monter à pied.",
    "explication": "Une personne demande où se trouve le bureau 309 dans un immeuble. On lui explique l'emplacement exact et que l'ascenseur est en panne.",
    "indice": [
      "bureau",
      "troisième étage",
      "ascenseur",
      "escalier"
    ]
  },
  {
    "id": 44,
    "niveau": "B1",
    "transcription": "Vous, en professionnel, qu'est-ce que vous me conseillez pour l'entrée ? Pour l'entrée, Mme Martin, quelque chose de doux, de fleuri, dans les roses peut-être. Ah, ça c'est une bonne idée. Et pour la pièce principale? Là, au contraire, il faut de la lumière. Je pense que du jaune ou du saumon irait bien.",
    "question": "À qui Mme Martin demande-t-elle des conseils?",
    "options": {
      "A": "À un couturier.",
      "B": "À un jardinier.",
      "C": "À un traiteur.",
      "D": "À un décorateur."
    },
    "reponse": "D",
    "reponseTexte": "À un décorateur.",
    "explication": "Mme Martin demande des conseils sur les couleurs pour décorer son entrée et sa pièce principale à un professionnel.",
    "indice": [
      "conseillez",
      "entrée",
      "fleurs",
      "jaune",
      "décorateur"
    ]
  },
  {
    "id": 45,
    "niveau": "B1",
    "transcription": "Bonjour, madame. Je suis venu hier ouvrir un compte, mais je n'ai pas bien compris quand je recevrai le chéquier commandé par vos soins. Pouvez-vous me rappeler votre nom et votre numéro de compte? Bien sûr, je m'appelle Cloutier, Pierre Cloutier. Voici mon numéro de compte ouvert hier dans cette agence. Très bien. Pour un premier chéquier, comptez au moins une petite semaine. Puis on le commande automatiquement et ça prend 48 heures. Voilà, il sera à votre disposition soit au guichet, soit en voyant d'accuser de réception votre domicile. Que souhaitez-vous? Eh bien, je préfère passer le prendre en fin de semaine. Je serai sûr de l'avoir. Très bien. À bientôt, monsieur.",
    "question": "Pourquoi l'homme se rend-il dans une banque?",
    "options": {
      "A": "Pour retirer le chéquier arrivé une semaine avant.",
      "B": "Pour vérifier le renouvellement de son chéquier.",
      "C": "Pour savoir quand il aura son carnet de chèques.",
      "D": "Pour corriger l'orthographe de son nom sur son chéquier."
    },
    "reponse": "C",
    "reponseTexte": "Pour savoir quand il aura son carnet de chèques.",
    "explication": "Un client vient d'ouvrir un compte bancaire la veille et demande des informations sur la réception de son chéquier.",
    "indice": [
      "chéquier",
      "compte",
      "banque"
    ]
  },
  {
    "id": 46,
    "niveau": "B1",
    "transcription": "Allô ? Bonsoir, monsieur Le Querec. C'est madame Georges. J'appelle pour que l'on s'organise pour notre séjour chez vous. Bonsoir, madame. Oui, alors nous serons déjà partis quand vous arriverez. Donc, on ne se verra pas. Mais les clés seront chez la voisine du deuxième étage. Je vous ai préparé des draps et serviettes, et un petit repas froid vous attendra au frigo. Nous vous avons aussi laissé une liste d'activités à faire ici et des adresses pour sortir dîner. Merci beaucoup. C'est très clair. De rien. Bon séjour.",
    "question": "Qui est M. Le Querec?",
    "options": {
      "A": "Un employé d'agence de voyages.",
      "B": "Un patron de restaurant.",
      "C": "Un propriétaire d'appartement.",
      "D": "Un réceptionniste d'hôtel."
    },
    "reponse": "C",
    "reponseTexte": "Un propriétaire d'appartement.",
    "explication": "Madame Georges appelle M. Le Querec pour organiser son séjour dans l'appartement de ce dernier. Elle explique où trouver les clés et ce qui sera préparé à leur arrivée.",
    "indice": [
      "séjour",
      "clés",
      "voisine",
      "draps",
      "frigo"
    ]
  },
  {
    "id": 47,
    "niveau": "B1",
    "transcription": "Pour ce cercle général, le bruit est aussi une source de fatigue et de tension. Moi, le bruit m'en fait dormir absolument. J'arrive à l'âge où on a peut-être besoin de moins de sommeil. Mais il est évident qu'en montrer de mouvement cardiaque, je n'arrive pas à supporter ce niveau sonore qui est permanent. Entre autres, il faut aussi nous rappeler que même si l'intensité routière diminue en nuit, on est réveillé par des bruits un peu exceptionnels. Une voiture qui passe à 200 à l'heure sur le volant, c'est ce qu'on constate régulièrement.",
    "question": "Qu'est-ce qui empêche cet homme de dormir?",
    "options": {
      "A": "Les conducteurs qui klaxonnent au feu rouge.",
      "B": "Les motards qui s'amusent sur le parking.",
      "C": "Les ouvriers qui travaillent sur l'autoroute.",
      "D": "Les véhicules qui circulent près de chez lui."
    },
    "reponse": "D",
    "reponseTexte": "Les véhicules qui circulent près de chez lui.",
    "explication": "Un homme explique qu'il a du mal à dormir à cause du bruit nocturne constant et des bruits exceptionnels comme des voitures qui passent rapidement près de chez lui.",
    "indice": [
      "bruit",
      "nuit",
      "véhicules",
      "circulent"
    ]
  },
  {
    "id": 48,
    "niveau": "B1",
    "transcription": "Salut Pauline ! Salut Clément! Ça y est, j'ai lancé mon projet avec mon équipe. Ah oui? C'est le boîtier connecté pour trier les déchets? Oui, c'est ça. On le fixe à côté de ses poubelles et après c'est très simple. On scanne le code des emballages avant de les jeter. Et le boîtier indique dans quelle poubelle il faut les jeter en fonction des règles de la ville où on réside. C'est génial.",
    "question": "De quoi parlent ces deux personnes?",
    "options": {
      "A": "D'un nouveau produit.",
      "B": "De collègues de travail.",
      "C": "De leur lieu d'habitation.",
      "D": "De leurs derniers achats."
    },
    "reponse": "A",
    "reponseTexte": "D'un nouveau produit.",
    "explication": "Deux amis discutent d'un projet de boîtier connecté pour aider à trier les déchets. L'un explique comment fonctionne le dispositif et son utilité.",
    "indice": [
      "boîtier connecté",
      "trier les déchets",
      "code des emballages"
    ]
  },
  {
    "id": 49,
    "niveau": "B1",
    "transcription": "Qu'est-ce que tu sais, Gilles ? J'ai vraiment peur. Ne te déprime pas dans des écarts pareils. D'accord, c'est un entretien important pour ta carrière. Mais tu as toutes les qualités pour décrocher le poste. C'est vrai que tu es jeune, mais même si tu n'as fait qu'un stage dans une boîte de communication, tu as un diplôme d'une boîte d'école de commerce. Reste confiant. Tu es gentil. Merci.",
    "question": "Selon Gilles, qu'est-ce qui permettra à son ami d'obtenir le poste?",
    "options": {
      "A": "Son âge.",
      "B": "Sa motivation.",
      "C": "Son expérience.",
      "D": "Sa qualification."
    },
    "reponse": "D",
    "reponseTexte": "Sa qualification.",
    "explication": "Gilles encourage son ami avant un entretien d'embauche important. Il lui rappelle ses qualités et son diplôme pour le rassurer.",
    "indice": [
      "qualités",
      "diplôme",
      "école de commerce",
      "poste"
    ]
  },
  {
    "id": 50,
    "niveau": "B1",
    "transcription": "Bonjour, votre professeur de mathématiques a téléphoné. Il a un problème personnel et ne viendra pas aujourd'hui. Il sera là pour votre prochain cours vendredi après-midi de 14h30 à 17h30. Je reste avec vous dans la salle jusqu'à 10 heures. Faites ce que vous voulez, mais en silence.",
    "question": "Qu'apprennent les élèves de cette classe?",
    "options": {
      "A": "L'annulation d'un cours.",
      "B": "Le retard d'un professeur.",
      "C": "Les horaires d'un examen.",
      "D": "Un changement de salle."
    },
    "reponse": "A",
    "reponseTexte": "L'annulation d'un cours.",
    "explication": "Un professeur appelle pour dire qu'il ne viendra pas aujourd'hui à cause d'un problème personnel. Il explique quand il sera de retour et ce que les élèves doivent faire en attendant.",
    "indice": [
      "professeur",
      "téléphoné",
      "problème",
      "annulé",
      "cours"
    ]
  },
  {
    "id": 51,
    "niveau": "B1",
    "transcription": "Bonjour, monsieur. Vous voulez bien accrocher cette affiche dans votre magasin? Mon école organise une collecte de jouets pour financer notre voyage en Europe. On organisera ensuite une tombola. Les billets seront vendus à 2 euros. C'est une très bonne idée. Je vais la mettre sur la porte. Où est-ce que les gens doivent déposer les jeux qu'ils veulent donner? Dans un coin de votre boutique, si ça ne vous dérange pas. Je peux vous laisser ce carton? J'ai pas tellement de place. Pour le carton, demandez à la pharmacie, juste à côté.",
    "question": "Qu'est-ce que le commerçant accepte de prendre?",
    "options": {
      "A": "L'affiche.",
      "B": "Le carton.",
      "C": "Les billets.",
      "D": "Les jouets."
    },
    "reponse": "A",
    "reponseTexte": "L'affiche.",
    "explication": "Un élève demande à un commerçant d'afficher une affiche pour une collecte de jouets organisée par son école. Il propose aussi de laisser un carton dans le magasin pour les dons.",
    "indice": [
      "affiche",
      "magasin",
      "collecte",
      "jouets"
    ]
  },
  {
    "id": 52,
    "niveau": "B1",
    "transcription": "Tu sais que le départ en retraite de Nathalie à Coche, on pourrait fêter ça. Qu'est-ce que tu en penses? Bonne idée. Il faudrait préparer quelque chose avec l'équipe et lui faire un petit cadeau, ce serait sympa. Et si on proposait aux collègues de retourner dans ce restaurant italien où nous avions fêté la promotion de Julien? Pourquoi pas? Je leur en parle cet après-midi.",
    "question": "Que veulent organiser ces deux personnes?",
    "options": {
      "A": "Un repas entre collègues.",
      "B": "Un voyage en Italie.",
      "C": "Une fête d'anniversaire.",
      "D": "Une formation d'équipe."
    },
    "reponse": "A",
    "reponseTexte": "Un repas entre collègues.",
    "explication": "Deux collègues discutent de l'organisation d'un événement pour le départ à la retraite de Nathalie. Ils évoquent l'idée d'un repas avec l'équipe et d'un cadeau.",
    "indice": [
      "départ",
      "retraite",
      "Nathalie",
      "équipe",
      "cadeau"
    ]
  },
  {
    "id": 53,
    "niveau": "B1",
    "transcription": "Ah tiens, Camilo, tu es au bureau aujourd'hui ? Tu n'es pas en télétravail normalement? Non, c'est seulement le jeudi. Et ça te plaît alors? Au moins, je ne perds pas de temps dans les transports et je me concentre mieux sur mes dossiers compliqués. Et puis, même si je ne suis pas là, je suis toujours joignable par téléphone et par courriel. Il m'arrive même d'assister à des réunions par visioconférence. Ce n'est pas très différent d'une journée normale.",
    "question": "De quoi parlent les deux personnes?",
    "options": {
      "A": "D'une négociation par visioconférence.",
      "B": "De l'urgence des dossiers à traiter.",
      "C": "Des avantages du travail à distance.",
      "D": "Des problèmes fréquents de transports."
    },
    "reponse": "C",
    "reponseTexte": "Des avantages du travail à distance.",
    "explication": "Deux personnes discutent des avantages et des habitudes du télétravail. Camilo explique pourquoi il préfère travailler à distance et comment il reste joignable.",
    "indice": [
      "télétravail",
      "transports",
      "dossiers",
      "visioconférence"
    ]
  },
  {
    "id": 54,
    "niveau": "B1",
    "transcription": "Sophie rentre à l'hôpital demain. Tu sais pourquoi? Non, pas exactement. Je crois que ce n'est pas très grave, mais on passera la voir. Tu sais où c'est, toi? Oui, oui. Dans cet hôpital, je vais donner mon sang. Mais ma voiture est en réparation. J'ai eu un petit accident la semaine dernière. Tu pourrais m'y emmener? D'accord. On ira ensemble le samedi après-midi.",
    "question": "Pourquoi les deux amis veulent-elles aller à l'hôpital?",
    "options": {
      "A": "Une de leurs amies est gravement malade.",
      "B": "Elles vont rendre visite à une amie.",
      "C": "L'une d'elles doit faire des examens.",
      "D": "L'une d'elles vient d'avoir un accident."
    },
    "reponse": "B",
    "reponseTexte": "Elles vont rendre visite à une amie.",
    "explication": "Deux amies discutent d'une visite à l'hôpital pour voir Sophie. L'une d'elles doit aussi y aller pour donner son sang.",
    "indice": [
      "Sophie",
      "hôpital",
      "visite",
      "sang",
      "accident"
    ]
  },
  {
    "id": 55,
    "niveau": "B1",
    "transcription": "Monsieur, s'il vous plaît. Oui? Moi aussi, j'aime beaucoup ce groupe. Mais vous gênez tous les voyageurs en l'écoutant si fort. Le train est un lieu public et tout le monde n'a pas envie d'écouter votre musique. Et certains aimeraient bien dormir. Ah, ça vous dérange? Excusez-moi, je ne pensais pas que c'était si fort. Avec les écouteurs, on ne se rend pas compte. Attendez un instant. C'est mieux comme ça? Oui, merci.",
    "question": "Que fait le jeune homme?",
    "options": {
      "A": "Il baisse le volume.",
      "B": "Il change de wagon.",
      "C": "Il éteint son appareil.",
      "D": "Il met un casque."
    },
    "reponse": "A",
    "reponseTexte": "Il baisse le volume.",
    "explication": "Un passager dans le train demande à un jeune homme de baisser le volume de sa musique car cela dérange les autres voyageurs.",
    "indice": [
      "train",
      "musique",
      "fort",
      "écouteurs"
    ]
  },
  {
    "id": 56,
    "niveau": "B1",
    "transcription": "C'est des traités et en revanche. Rémi, vous avez deux activités, ce n'est pas trop difficile? Non, ça va. Les 35 heures, ce n'est pas pour moi. Alors, vous êtes cuisinier le jour et vous travaillez dans une discothèque la nuit. Vous arrivez à tout faire sans problème? Ah oui? Mais je dois préciser que pour me sentir bien, 4 heures de sommeil me suffisent et je fais du sport dès que je peux.",
    "question": "Qu'apprend-on sur Rémi?",
    "options": {
      "A": "Il a besoin de beaucoup de sommeil.",
      "B": "Il déteste tous les types de sport.",
      "C": "Il travaille pour plusieurs entreprises.",
      "D": "Il va souvent danser en discothèque."
    },
    "reponse": "C",
    "reponseTexte": "Il travaille pour plusieurs entreprises.",
    "explication": "Rémi parle de son emploi du temps chargé entre son travail de cuisinier le jour et son travail dans une discothèque la nuit.",
    "indice": [
      "cuisinier",
      "discothèque",
      "entreprises"
    ]
  },
  {
    "id": 57,
    "niveau": "B1",
    "transcription": "On entend souvent dire qu'il y a trop de gras dans notre alimentation, mais est-ce bien vrai ? Ce n'est pas certain. En réalité, nous manquons de bons gras dont le corps et le cerveau ont besoin pour fonctionner pleinement. Il est par exemple recommandé de consommer du fromage le matin, ainsi que des poissons gras. Pour les végétariens, pensez aux œufs et aux noix.",
    "question": "Qu'a-t-on dit au sujet de certains aliments gras?",
    "options": {
      "A": "Ils causent de nouvelles maladies.",
      "B": "Ils favorisent les prises de poids.",
      "C": "Ils sont bénéfiques pour la santé.",
      "D": "Ils sont indispensables aux sportifs."
    },
    "reponse": "C",
    "reponseTexte": "Ils sont bénéfiques pour la santé.",
    "explication": "Un texte explique que certains aliments gras sont bons pour la santé et donne des exemples. La question demande ce qu'on dit de ces aliments.",
    "indice": [
      "gras",
      "corps",
      "cerveau",
      "fromage",
      "poissons"
    ]
  },
  {
    "id": 58,
    "niveau": "B1",
    "transcription": "Charles, vous avez retrouvé le dossier bleu, celui sur la production éthère ? Je dois le relire avant de le communiquer à mes associés. Mais, madame, il est sur votre bureau? Ah, je vous assure que non. Il y a celui sur les quotas, celui sur les subventions, et ce matin, vous m'avez dit que vous ne le receviez pas. Pardon, je vous ai dit que je le mettais sur votre bureau. D'ailleurs, regardez, c'est ce dossier bleu sous vos jambes. Ah, mais oui, vous avez raison. Il m'a dit que vous étiez là. Je suis vraiment désolé. Mais ce n'est rien, madame. Je crois simplement que vous travaillez trop. Vous devriez prendre des projets.",
    "question": "Qu'est-ce que la responsable a cru au sujet du dossier bleu?",
    "options": {
      "A": "Qu'elle l'avait oublié en vacances.",
      "B": "Qu'un collègue l'avait consulté.",
      "C": "Que son assistant l'avait perdu.",
      "D": "Qu'on l'avait envoyé ailleurs."
    },
    "reponse": "C",
    "reponseTexte": "Que son assistant l'avait perdu.",
    "explication": "Charles et sa responsable cherchent un dossier bleu sur le bureau. Ils discutent de son emplacement et de qui l'a vu ou déplacé.",
    "indice": [
      "dossier",
      "bureau",
      "perdu"
    ]
  },
  {
    "id": 59,
    "niveau": "B1",
    "transcription": "Allô, Pierre ? Oui? Bonjour, c'est Jacqueline. Pierre, peux-tu me donner l'adresse de ton docteur? Celui dont tu m'as parlé l'été dernier. Ah, mais il a déménagé? Quel dommage. Mais il y a un cabinet qui a ouvert entre le garage et le salon de coiffure. Tu pourrais essayer. Ah oui? Bonne idée, je vais essayer. Merci Pierre. De rien. A bientôt.",
    "question": "Que cherchait Jacqueline?",
    "options": {
      "A": "Un coiffeur.",
      "B": "Un déménageur.",
      "C": "Un garagiste.",
      "D": "Un médecin."
    },
    "reponse": "D",
    "reponseTexte": "Un médecin.",
    "explication": "Jacqueline appelle Pierre pour lui demander l'adresse d'un médecin. Pierre lui donne une nouvelle adresse car le médecin a déménagé.",
    "indice": [
      "docteur",
      "cabinet",
      "garage",
      "coiffure"
    ]
  },
  {
    "id": 60,
    "niveau": "B1",
    "transcription": "Allô Alex ? C'est Lara. N'oublie pas de prendre tes lunettes pour la séance de ciné ce soir. La dernière fois, tu ne voyais rien et tu as dormi pendant deux heures. On se retrouve comme prévu? Salut!",
    "question": "Pourquoi Laura téléphone-t-elle à Alex?",
    "options": {
      "A": "Pour lui conseiller d'aller voir un médecin.",
      "B": "Pour lui dire qu'elle sera un peu en retard.",
      "C": "Pour lui proposer un film qu'elle veut voir.",
      "D": "Pour lui rappeler une chose importante."
    },
    "reponse": "D",
    "reponseTexte": "Pour lui rappeler une chose importante.",
    "explication": "Lara appelle Alex pour lui rappeler de prendre ses lunettes pour la séance de cinéma du soir. Elle lui rappelle qu'il n'a rien vu la dernière fois et a dormi pendant deux heures.",
    "indice": [
      "ciné",
      "lunettes",
      "séance",
      "dormi"
    ]
  },
  {
    "id": 61,
    "niveau": "B1",
    "transcription": "Mesdames et messieurs, la mer étant très agitée et la météo annonçant une forte aggravation de la situation en fin d'après-midi, il vous est demandé de faire preuve d'une grande prudence. Ne vous... Dans les zones non surveillées, ne nagez pas au-delà de la ligne des flotteurs et des bouées de sécurité, ne pratiquez aucun sport nautique, planche à voile ou autre. Tout non-respect de ces recommandations est sous votre entière responsabilité.",
    "question": "Que recommande l'annonce au baigneur?",
    "options": {
      "A": "D'attendre la fin de la journée pour nager.",
      "B": "De s'équiper avant de se mettre à l'eau.",
      "C": "De se baigner dans les secteurs prévus.",
      "D": "De faire attention aux surfeurs."
    },
    "reponse": "C",
    "reponseTexte": "De se baigner dans les secteurs prévus.",
    "explication": "Un annonceur informe les baigneurs des dangers de la mer agitée et donne des consignes de sécurité.",
    "indice": [
      "prudence",
      "flotteurs",
      "bouées",
      "sécurité"
    ]
  },
  {
    "id": 62,
    "niveau": "B1",
    "transcription": "Bonjour, vous cherchez qui ? Bonjour, je souhaiterais rencontrer M. Bernard. Ah, je crois qu'il n'est pas à l'université aujourd'hui. Attendez, je regarde ton planning de la semaine. C'est cela, il est absent cet après-midi, il assiste à un colloque. Je peux vous donner un rendez-vous pour demain, si vous voulez. Demain, ce n'est pas possible, je suis en stage toute la journée. Alors, lundi? Lundi, oui. Ce serait bien. Dans la matinée, ce serait possible?",
    "question": "Que souhaite cette étudiante?",
    "options": {
      "A": "S'entretenir avec un enseignant.",
      "B": "Assister à un colloque.",
      "C": "S'inscrire à l'université.",
      "D": "Suivre un stage."
    },
    "reponse": "A",
    "reponseTexte": "S'entretenir avec un enseignant.",
    "explication": "Une étudiante demande à parler à M. Bernard mais apprend qu'il est absent pour assister à un colloque. Elle essaie de fixer un nouveau rendez-vous.",
    "indice": [
      "M. Bernard",
      "colloque",
      "rendez-vous",
      "stage"
    ]
  },
  {
    "id": 63,
    "niveau": "B1",
    "transcription": "Alors, c'est toujours ok ? On part à Londres ce week-end en Eurostar? Oui, mais en voiture. Comme ça, on pourra s'arrêter dans le sud de l'Angleterre. Je ne connais pas. Attends, tu rigoles. On n'a qu'un week-end. En train, ça va, mais... Londres et ses alentours. En voiture, c'est plus facile, non? Mais non, pas pour visiter les musées de Londres, non. Eh bien, on n'y va pas ce week-end, mais quand on aura un pont. Parce que moi, les musées... Qu'en dis-tu? Tu gagnes toujours.",
    "question": "Qu'est-ce qui dérange le jeune homme?",
    "options": {
      "A": "Devoir annuler son voyage.",
      "B": "Devoir visiter les musées.",
      "C": "Devoir écourter leur séjour.",
      "D": "Devoir partir en voiture."
    },
    "reponse": "D",
    "reponseTexte": "Devoir partir en voiture.",
    "explication": "Deux personnes discutent des modalités d'un voyage à Londres. L'une préfère prendre la voiture pour visiter le sud de l'Angleterre, l'autre préfère le train pour visiter Londres.",
    "indice": [
      "Londres",
      "Eurostar",
      "voiture",
      "musées"
    ]
  },
  {
    "id": 64,
    "niveau": "B1",
    "transcription": "Bonjour, je voudrais déposer une demande de passeport. Avez-vous pris un rendez-vous? Oui, j'ai rendez-vous à 11h30, mais je suis vraiment pressée. Serait-il possible d'être reçu maintenant? Non. On ne pourra pas vous recevoir avant l'heure prévue, tous nos guichets sont occupés. Mais j'ai vraiment une course urgente à faire. On peut décaler le rendez-vous? J'ai une place à midi moins le quart, ça vous va? Parfait, ça m'arrange vraiment. A tout à l'heure.",
    "question": "Qu'est-ce que cette femme a décidé de faire?",
    "options": {
      "A": "Attendre son tour dans le bureau.",
      "B": "Déposer son dossier sans attendre.",
      "C": "Prendre rendez-vous pour le lendemain.",
      "D": "Revenir plus tard dans la journée."
    },
    "reponse": "D",
    "reponseTexte": "Revenir plus tard dans la journée.",
    "explication": "Une femme demande un passeport en urgence et négocie un rendez-vous plus tôt. Elle parle avec un employé du bureau.",
    "indice": [
      "passeport",
      "rendez-vous",
      "décaler",
      "midi moins le quart"
    ]
  },
  {
    "id": 65,
    "niveau": "B1",
    "transcription": "Pardon, monsieur, ça fait vingt minutes que j'attends. Il n'y a qu'un guichet ouvert? Oui, mais vous pouvez acheter des timbres à la machine, si c'est juste pour poster votre courrier. Oui, mais je n'ai pas de monnaie. Ce n'est pas grave, la machine prend les billets de 5 et 10 euros.",
    "question": "Que veut faire le client?",
    "options": {
      "A": "Acheter une enveloppe.",
      "B": "Changer de l'argent.",
      "C": "Envoyer une lettre.",
      "D": "Retirer un colis."
    },
    "reponse": "C",
    "reponseTexte": "Envoyer une lettre.",
    "explication": "Un client attend à la poste et parle avec un employé. Il veut acheter des timbres mais n'a pas de monnaie.",
    "indice": [
      "guichet",
      "timbres",
      "machine",
      "courrier"
    ]
  },
  {
    "id": 66,
    "niveau": "B1",
    "transcription": "Service à présent, bonjour. Bonjour madame, voilà je vous téléphone parce que mon lecteur d'EVD ne fonctionne pas. Il est tout garanti? J'espère bien, il est tout là. Avez-vous une preuve d'achat? En fait c'est un cadeau. Dans ce cas monsieur, je ne peux malheureusement rien pour vous. Demandez la facture à la personne qui vous l'a offert.",
    "question": "Que manque-t-il à ce client?",
    "options": {
      "A": "Le bon de garantie.",
      "B": "Le chèque cadeau.",
      "C": "Le justificatif d'achat.",
      "D": "Le mode d'emploi."
    },
    "reponse": "C",
    "reponseTexte": "Le justificatif d'achat.",
    "explication": "Un client appelle le service client pour signaler un problème avec son lecteur EVD. Il n'a pas de preuve d'achat car c'est un cadeau.",
    "indice": [
      "lecteur d'EVD",
      "garanti",
      "preuve d'achat",
      "cadeau",
      "facture"
    ]
  },
  {
    "id": 67,
    "niveau": "B1",
    "transcription": "Papa, maman, j'aimerais vraiment avoir un chat, vous savez. Oui, Sébastien, mais avec tes allergies, ça va être difficile. On pourrait plutôt prendre un chien. Ah non, un chien, ça demande trop de travail.",
    "question": "Quel est le problème?",
    "options": {
      "A": "L'enfant est malade à cause des chats.",
      "B": "La famille a déjà eu un chien.",
      "C": "Le père déteste les animaux.",
      "D": "Les parents ont beaucoup de travail."
    },
    "reponse": "A",
    "reponseTexte": "L'enfant est malade à cause des chats.",
    "explication": "Un enfant demande à ses parents d'avoir un chat, mais ils refusent à cause de ses allergies et proposent un chien à la place.",
    "indice": [
      "allergies",
      "chat",
      "travail"
    ]
  },
  {
    "id": 68,
    "niveau": "B1",
    "transcription": "Bonjour docteur. Bonjour madame Pira. Qu'est-ce qui vous amène? Je viens faire un petit bilan de santé pour vérifier que tout va bien. Vous avez été malade cet hiver? Non, la cure de vitamines que vous m'aviez prescrite a été efficace. Parfait. Je vous referai une ordonnance le temps prochain. Ça va bien chez vous? Très bien, merci. Nous venons d'emménager dans un nouvel appartement. Ah, très bien. Passez à côté, je vais vous examiner.",
    "question": "Pourquoi Mme Perrin rend-elle visite à son médecin?",
    "options": {
      "A": "Pour changer de médicament.",
      "B": "Pour demander un conseil.",
      "C": "Pour faire un contrôle médical.",
      "D": "Pour renouveler une ordonnance."
    },
    "reponse": "C",
    "reponseTexte": "Pour faire un contrôle médical.",
    "explication": "Mme Perrin est chez son médecin pour faire un bilan de santé. Le médecin lui pose des questions sur sa santé récente et l'examine.",
    "indice": [
      "bilan de santé",
      "vérifier",
      "examiner"
    ]
  },
  {
    "id": 69,
    "niveau": "B1",
    "transcription": "Léo, comment ça va depuis que tu es dans ta nouvelle maison? Ça va, ça va, mais je n'ai pas encore Internet. Mince alors! Et est-ce que ton téléphone fixe marche au moins? Oui, mais je n'en ai pas vraiment besoin. Je viens de m'acheter un ordinateur tout neuf, mais sans Internet. Je ne peux pas travailler et contacter mes clients. Je comprends. Tu as vu quelqu'un pour arranger ça?",
    "question": "Qu'est-ce qui est difficile pour Léo?",
    "options": {
      "A": "La communication avec ses clients.",
      "B": "La recherche d'un nouveau travail.",
      "C": "L'achat d'un nouveau téléphone fixe.",
      "D": "L'utilisation de son ordinateur portable."
    },
    "reponse": "A",
    "reponseTexte": "La communication avec ses clients.",
    "explication": "Léo parle à une personne de sa nouvelle maison où il n'a pas encore Internet. Il explique qu'il a acheté un nouvel ordinateur mais ne peut pas travailler ni contacter ses clients.",
    "indice": [
      "Internet",
      "téléphone fixe",
      "ordinateur",
      "clients"
    ]
  },
  {
    "id": 70,
    "niveau": "B1",
    "transcription": "Pardon, monsieur. Pourriez-vous m'indiquer où se trouve la bibliothèque, s'il vous plaît? Oui, bien sûr. Elle n'est pas très loin. Enfin, si vous êtes en voiture. Hélas, je suis à pied. Il vous faudra marcher 20 minutes. Allez tout droit et passez deux carrefours. Vous verrez la bibliothèque sur votre droite.",
    "question": "Quel renseignement donne l'homme?",
    "options": {
      "A": "La distance à parcourir.",
      "B": "L'adresse d'un garage.",
      "C": "Le bus à emprunter.",
      "D": "Le chemin à suivre."
    },
    "reponse": "D",
    "reponseTexte": "Le chemin à suivre.",
    "explication": "Un homme demande son chemin à un passant pour trouver la bibliothèque. Le passant lui explique comment y aller à pied.",
    "indice": [
      "bibliothèque",
      "chemin",
      "droite",
      "carrefours"
    ]
  },
  {
    "id": 71,
    "niveau": "B1",
    "transcription": "Bonjour, madame. Auriez-vous quelques minutes pour répondre à un sondage? Rapidement, oui. Parfait. Suivez-vous l'actualité? Oui, un peu. Mais je n'ai pas toujours le temps. Vous lisez les journaux? Un peu, dans le métro. Mais je regarde plutôt les informations à la télévision. Et sur Internet? Oui, parfois des amis postent des actualités sur les réseaux sociaux. J'aime ce qui parle des grands réalisateurs de films, des acteurs, parce que je suis actrice, vous savez. Très bien, merci madame. Vos réponses nous seront très utiles.",
    "question": "Quel est le thème du sondage?",
    "options": {
      "A": "L'intérêt pour le cinéma.",
      "B": "Les activités de loisirs.",
      "C": "Les habitudes de transport.",
      "D": "L'utilisation des médias."
    },
    "reponse": "D",
    "reponseTexte": "L'utilisation des médias.",
    "explication": "Une personne interroge une femme sur ses habitudes de consommation des médias. La femme parle de ses sources d'information et de ses préférences.",
    "indice": [
      "sondage",
      "actualité",
      "médias",
      "réseaux sociaux"
    ]
  },
  {
    "id": 72,
    "niveau": "B1",
    "transcription": "Bonjour, je voudrais réserver un séjour au Seychelles. Alors, j'ai plusieurs formules de voyage à vous proposer. J'ai notamment quelque chose de très intéressant. Un combiné avion plus hôtel 4 étoiles sur l'île principale à 1300 euros la semaine. Départ entre le dix et le quinze décembre. C'est au-dessus de mes moyens. Qu'auriez-vous d'autre à me proposer? J'ai aussi des hôtels de catégorie inférieure. Oui, je préférerais.",
    "question": "Qu'est-ce qui pose problème au client?",
    "options": {
      "A": "La date de départ.",
      "B": "La durée du voyage.",
      "C": "La situation de l'hôtel.",
      "D": "Le prix du séjour."
    },
    "reponse": "D",
    "reponseTexte": "Le prix du séjour.",
    "explication": "On demande de comprendre ce qui dépasse les moyens du client. Attention à ne pas confondre avec d'autres détails.",
    "indice": [
      "Seychelles",
      "1300 euros",
      "décembre",
      "hôtel 4 étoiles"
    ]
  },
  {
    "id": 73,
    "niveau": "B1",
    "transcription": "Ça ne va pas? Tu es malade? Non, mais mon mari vient de réserver un appartement à la montagne pour 15 jours. Au programme, randonnée, vélo et escalade. C'est génial! C'est affreux, tu veux dire. Moi, je rêvais de deux semaines de repos et de lecture.",
    "question": "De quoi discutent les deux femmes?",
    "options": {
      "A": "D'un prochain déménagement.",
      "B": "De sport pour le week-end.",
      "C": "De vacances en famille.",
      "D": "D'un problème de santé."
    },
    "reponse": "C",
    "reponseTexte": "De vacances en famille.",
    "explication": "Deux femmes discutent des vacances à la montagne. L'une est enthousiaste, l'autre déçue car elle voulait se reposer.",
    "indice": [
      "appartement",
      "montagne",
      "randonnée",
      "lecture"
    ]
  },
  {
    "id": 74,
    "niveau": "B1",
    "transcription": "Pourquoi en si peu de temps on est venu à 7 milliards sur Terre ? Parce que la mortalité a diminué, notamment la mortalité des enfants, grâce au progrès de l'hygiène, de la médecine, au progrès économique. Résultat, les décès sont devenus moins nombreux, est apparu un excédent des naissances sur les décès qui a entraîné une augmentation de la population.",
    "question": "Qu'explique cet homme?",
    "options": {
      "A": "La crise de l'économie mondiale.",
      "B": "L'accroissement de la population.",
      "C": "Les nouvelles règles d'hygiène.",
      "D": "Les récentes découvertes médicales."
    },
    "reponse": "B",
    "reponseTexte": "L'accroissement de la population.",
    "explication": "Un homme explique pourquoi la population mondiale a atteint 7 milliards en peu de temps, en parlant des progrès dans l'hygiène, la médecine et l'économie.",
    "indice": [
      "7 milliards",
      "mortalité",
      "excédent",
      "naissance",
      "décès"
    ]
  },
  {
    "id": 75,
    "niveau": "B1",
    "transcription": "Merci d'accueillir John Free. Il s'est fait connaître du public international dans les années 80. John, vous étiez un très jeune saxophoniste à l'époque. Oui. J'avais appris le piano et la trompette, puis finalement le saxophone grâce à mon père. Alfry. C'était un grand, une légende du jazz de Chicago. Chez mes parents, il y avait un piano au milieu du salon et j'ai grandi en observant mon père, Al, et ses deux frères répéter pour leur groupe.",
    "question": "Comment John Free a-t-il eu envie de devenir musicien?",
    "options": {
      "A": "En assistant à des concerts.",
      "B": "En écoutant des disques.",
      "C": "En regardant jouer ses proches.",
      "D": "En travaillant dans un club."
    },
    "reponse": "C",
    "reponseTexte": "En regardant jouer ses proches.",
    "explication": "Un journaliste interroge John Free sur son parcours musical. Il explique avoir appris le saxophone en observant ses proches jouer chez lui.",
    "indice": [
      "saxophoniste",
      "père",
      "piano",
      "salon",
      "répéter\n----"
    ]
  },
  {
    "id": 76,
    "niveau": "B1",
    "transcription": "On a beaucoup parlé des inégalités salariales entre les femmes et les hommes. Un élément d'explication à ces différences, Philippe, les femmes négocieraient moins leur salaire? Alors oui, ça n'est qu'un élément, mais il mérite d'être pris en compte dès le début, à l'embauche, ou bien au cours de leur carrière, les femmes sont en effet moins portées sur la négociation, la défense de leurs intérêts, à en croire le cabinet KPMG et l'école de commerce nantaise Audencia. Ainsi, dès l'entretien d'embauche, seuls 34% des femmes osent négocier leur salaire, alors que 41% des hommes n'hésitent pas à le faire. 7 points de différence, un écart qui se réduit un peu au fil du temps, mais qui subsiste plus tard dans la carrière.",
    "question": "Qu'explique l'intervenant à propos des femmes par rapport aux hommes?",
    "options": {
      "A": "Elles ont moins tendance à faire carrière.",
      "B": "Elles osent moins discuter leur contrat.",
      "C": "Elles préparent moins leurs entretiens.",
      "D": "Elles travaillent moins à temps complet."
    },
    "reponse": "B",
    "reponseTexte": "Elles osent moins discuter leur contrat.",
    "explication": "Un intervenant explique que les femmes négocient moins leur salaire que les hommes, notamment lors des entretiens d'embauche et au cours de leur carrière.",
    "indice": [
      "… …"
    ]
  },
  {
    "id": 77,
    "niveau": "B1",
    "transcription": "Où pars-tu en vacances cet été ? Sûrement dans le sud. J'aime la pêche et mes amis de Marseille m'ont proposé leur appartement. Moi, je supporte très mal les fortes chaleurs. Ça me rend malade. Dommage. Tu aurais pu venir avec moi. Il y a de la place chez mes amis. Et si c'était toi qui venais avec moi en Irlande? C'est beau l'Irlande. Là-bas aussi, on peut pêcher. Oui, tiens, c'est une idée. Je ne connais pas du tout ce pays. Pourquoi pas?",
    "question": "Que décident de faire les deux amis pour leurs vacances?",
    "options": {
      "A": "De visiter le sud de la France.",
      "B": "De partir ensemble à l'étranger.",
      "C": "De partir chacun de leur côté.",
      "D": "D'aller pêcher avec d'autres amis."
    },
    "reponse": "B",
    "reponseTexte": "De partir ensemble à l'étranger.",
    "explication": "Deux amis discutent de leurs projets de vacances d'été. L'un propose à l'autre de partir en Irlande ensemble.",
    "indice": [
      "… …"
    ]
  },
  {
    "id": 78,
    "niveau": "B1",
    "transcription": "Ça te dirait d'aller voir Liberté ce soir ? La séance est à 20h. D'accord, mais pas à 20h. C'est l'heure où je quitte le travail. Allons voir Séraphine alors. Il passe à 21h. Je l'ai déjà vu. Et pourquoi pas l'arbre? Il n'est pas encore sorti.",
    "question": "De quoi parlent ces deux personnes?",
    "options": {
      "A": "De cinéma.",
      "B": "De lecture.",
      "C": "De musique.",
      "D": "De théâtre."
    },
    "reponse": "A",
    "reponseTexte": "De cinéma.",
    "explication": "Deux personnes discutent des films qu'elles pourraient aller voir ensemble au cinéma. Elles parlent des horaires et des préférences pour choisir le film.",
    "indice": [
      "Liberté",
      "Séraphine",
      "séance",
      "film"
    ]
  },
  {
    "id": 79,
    "niveau": "B1",
    "transcription": "Bonjour Marc, c'est Marie. Tu viens au cinéma ce soir? Non, je suis désolé, je suis trop fatigué. Je vais rester chez moi. Quel dommage! Et pour le théâtre ce week-end? Oui, je viendrai. Par contre, je ne pourrai pas manger au restaurant.",
    "question": "Que fera Marc ce week-end?",
    "options": {
      "A": "Il dînera au restaurant.",
      "B": "Il ira au cinéma.",
      "C": "Il restera chez lui.",
      "D": "Il se rendra au théâtre."
    },
    "reponse": "D",
    "reponseTexte": "Il se rendra au théâtre.",
    "explication": "Marie appelle Marc pour l'inviter au cinéma et au théâtre mais il refuse le cinéma à cause de la fatigue et accepte le théâtre.",
    "indice": [
      "cinéma",
      "théâtre",
      "restaurant",
      "week-end"
    ]
  },
  {
    "id": 80,
    "niveau": "B1",
    "transcription": "Le soleil revient, c'est bientôt les vacances. Dans votre magasin Sport Plus, pour l'achat d'un maillot de bain, un tube de crème en cadeau. Rendez-vous au rayon articles de plage jusqu'au 30 juin.",
    "question": "Qu'est-ce qu'il faut acheter pour recevoir un cadeau?",
    "options": {
      "A": "Un chapeau de soleil.",
      "B": "Un maillot de foot.",
      "C": "Un sac de sport.",
      "D": "Un vêtement de plage."
    },
    "reponse": "D",
    "reponseTexte": "Un vêtement de plage.",
    "explication": "Un magasin annonce une promotion : pour l'achat d'un maillot de bain, un tube de crème solaire est offert. La promotion est valable jusqu'au 30 juin.",
    "indice": [
      "maillot de bain",
      "crème",
      "cadeau",
      "rayon articles de plage"
    ]
  },
  {
    "id": 81,
    "niveau": "B1",
    "transcription": "Erin, tu viens au cinéma avec nous? Qu'un? Aujourd'hui? Ce soir, la séance est à 20 heures. Il passe une comédie romantique. Non, j'ai une réunion au bureau jusqu'à 18 heures. Et après, j'ai rendez-vous au restaurant avec Paul.",
    "question": "Qu'est-ce que Périne va faire ce soir?",
    "options": {
      "A": "Dîner avec un ami.",
      "B": "Regarder un film.",
      "C": "Rentrer avec elle.",
      "D": "Travailler tard."
    },
    "reponse": "A",
    "reponseTexte": "Dîner avec un ami.",
    "explication": "Erin discute avec des amis qui l'invitent au cinéma. Elle explique qu'elle a une réunion et un dîner prévu.",
    "indice": [
      "cinéma",
      "comédie",
      "rendez-vous",
      "restaurant",
      "Paul"
    ]
  },
  {
    "id": 82,
    "niveau": "B1",
    "transcription": "Soyez les bienvenus dans notre bus à destination de Paris-Bercy. Nous ferons une pause à midi pour vous permettre de vous restaurer. Je vous rappelle que vous pouvez connecter vos appareils sur notre réseau tout au long du trajet. Un agent passera parmi vous pour vérifier vos billets et votre numéro de siège. Je vous invite à l'informer si vous voulez en changer et à lui poser vos questions. Merci d'avoir choisi notre compagnie et bon voyage!",
    "question": "Quelle est la particularité de ce bus?",
    "options": {
      "A": "Il y a un service internet.",
      "B": "Le placement est libre.",
      "C": "On y propose des repas.",
      "D": "Son personnel est bilingue."
    },
    "reponse": "A",
    "reponseTexte": "Il y a un service internet.",
    "explication": "Un conducteur de bus informe les passagers des services disponibles pendant le trajet vers Paris-Bercy, notamment la connexion internet.",
    "indice": [
      "réseau",
      "connecter",
      "appareils",
      "trajet"
    ]
  },
  {
    "id": 83,
    "niveau": "B1",
    "transcription": "Salut Sarah, comment tu vas ? Bien, j'ai trouvé un emploi de serveuse en août. Et toi, qu'est-ce que tu vas faire cet été? Tu as fini ton stage?",
    "question": "Que va faire Sarah?",
    "options": {
      "A": "Elle va acheter un restaurant.",
      "B": "Elle va partir en vacances.",
      "C": "Elle va suivre des cours.",
      "D": "Elle va travailler un mois."
    },
    "reponse": "D",
    "reponseTexte": "Elle va travailler un mois.",
    "explication": "Sarah parle avec un ami de ses projets pour l'été. Elle a trouvé un emploi de serveuse pour le mois d'août.",
    "indice": [
      "emploi",
      "serveuse",
      "août",
      "stage"
    ]
  },
  {
    "id": 84,
    "niveau": "B1",
    "transcription": "Bonjour, vous êtes la chanteuse Pascal Hune, n'est-ce pas ? Oui, c'est moi. Bonjour, voilà, nous sommes une association et nous organisons chaque année une grande soirée, une fête solidaire au profit d'un programme de lutte contre la malnutrition au Bifina Faso. Et nous proposons à différents artistes de se produire ce soir-là, gratuitement, bien entendu. Et donc, on a pensé à vous cette année. On vous invite à participer à ce moment de solidarité. Chaque artiste invité dispose de 20 minutes sur scène et promet à votre disposition une équipe de techniciens pour vous aider. On espère ainsi récolter suffisamment de fonds pour poursuivre cette action. Cela vous intéresse?",
    "question": "Question 16 Que demande-t-on à Pascal Houn?",
    "options": {
      "A": "Une contribution financière.",
      "B": "Une formation artistique.",
      "C": "Une intervention télévisée.",
      "D": "Une participation bénévole."
    },
    "reponse": "D",
    "reponseTexte": "Une participation bénévole.",
    "explication": "Une association invite la chanteuse Pascal Hune à participer à un concert solidaire pour une cause humanitaire. Elle propose de chanter gratuitement pendant 20 minutes.",
    "indice": [
      "association",
      "artiste",
      "concert",
      "gratuitement"
    ]
  },
  {
    "id": 85,
    "niveau": "B1",
    "transcription": "Bonjour à tous, voici des informations sur la circulation et les premiers problèmes ce matin sur les routes de France. Pour le premier week-end des vacances scolaires, il y a beaucoup de monde sur les routes, donc faites très attention quand vous êtes en voiture. Et n'oubliez pas de vous arrêter toutes les deux heures pour faire une pause.",
    "question": "Quelle information donne le journaliste?",
    "options": {
      "A": "Les accidents sont importants.",
      "B": "Les arrêts sont interdits.",
      "C": "Les départs sont nombreux.",
      "D": "Les embouteillages sont finis."
    },
    "reponse": "C",
    "reponseTexte": "Les départs sont nombreux.",
    "explication": "Identifier l'information principale donnée par le journaliste sur la circulation. Attention aux détails qui ne sont pas mentionnés.",
    "indice": [
      "vacances scolaires",
      "routes",
      "pause"
    ]
  },
  {
    "id": 86,
    "niveau": "B1",
    "transcription": "C'était cette mission de deux mois en Asie ? Je ne sais pas. J'avais prévu de passer l'été avec ma sœur. Elle a déjà tout organisé. Je ne veux pas la décevoir. Je comprends, mais c'est un projet que tu ne peux pas refuser. Et dans quelques mois, il sera trop tard pour dire à ton responsable que tu veux partir. Ta sœur va comprendre. Tu as raison. C'est décidé et en plus, grâce à cette expérience, je pourrais changer de poste à mon retour. Je vais l'appeler ce soir pour le lui dire.",
    "question": "Pourquoi Carole a-t-elle appelé sa sœur?",
    "options": {
      "A": "Pour organiser un voyage.",
      "B": "Pour annuler leurs vacances.",
      "C": "Pour accepter une mission.",
      "D": "Pour changer de poste."
    },
    "reponse": "B",
    "reponseTexte": "Pour annuler leurs vacances.",
    "explication": "Carole parle à sa sœur de son projet professionnel qui entre en conflit avec leurs vacances prévues. Elle doit annuler leurs vacances.",
    "indice": [
      "mission",
      "vacances",
      "décevoir",
      "responsable"
    ]
  },
  {
    "id": 87,
    "niveau": "B1",
    "transcription": "Alors c'est d'accord, nous faisons un pique-nique samedi prochain. Oui, mais cela dépendra aussi du temps. S'il pleut, Pierre a proposé d'aller chez lui. Il a une maison de campagne avec une grande véranda qui s'ouvre sur le jardin. Ah oui? Alors c'est d'accord. Tu apportes les salades? Oui, et toi des fruits. Pierre s'occupera des boissons et du pain. Bon, espérons qu'il fera beau.",
    "question": "Que veulent faire ces personnes samedi s'il ne pleut pas?",
    "options": {
      "A": "Inviter des amis chez elles.",
      "B": "Rendre visite à un ami.",
      "C": "Faire des courses.",
      "D": "Manger en plein air."
    },
    "reponse": "D",
    "reponseTexte": "Manger en plein air.",
    "explication": "Deux personnes discutent des plans pour le samedi suivant. Ils prévoient un pique-nique mais ont une alternative si le temps est mauvais.",
    "indice": [
      "pique-nique",
      "temps",
      "véranda",
      "jardin"
    ]
  },
  {
    "id": 88,
    "niveau": "B1",
    "transcription": "Allô ? Bonsoir, monsieur El Kerek. C'est madame Georges. J'appelle pour que l'on s'organise pour notre séjour chez vous. Bonsoir, madame. Oui, alors nous serons déjà partis quand vous arriverez. Donc, on ne se verra pas. Mais les clés seront chez la voisine du deuxième étage. Je vous ai préparé des draps et serviettes. Et un petit repas froid vous attendra au frigo. Nous vous avons aussi laissé une liste d'activités à faire ici et des adresses pour sortir dîner. Merci beaucoup. C'est très clair. De rien. Bon séjour.",
    "question": "Qui est M. Le Querrec?",
    "options": {
      "A": "Un employé d'agence de voyage.",
      "B": "Un patron de restaurant.",
      "C": "Un propriétaire d'appartement.",
      "D": "Un réceptionniste d'hôtel."
    },
    "reponse": "C",
    "reponseTexte": "Un propriétaire d'appartement.",
    "explication": "Madame Georges appelle M. El Kerek pour organiser son séjour dans l'appartement de ce dernier. Ils discutent des détails pratiques pour l'arrivée.",
    "indice": [
      "séjour",
      "clés",
      "draps",
      "activités"
    ]
  },
  {
    "id": 89,
    "niveau": "B1",
    "transcription": "Cette fête de la gastronomie est l'occasion d'évoquer un plaisir que l'on peut partager très tôt en famille, le plaisir de cuisiner à quatre mains, parents et enfants réunis autour d'une même recette. Cuisiner avec son enfant, c'est une activité à la fois ludique, créative, enrichissante pour un enfant puisqu'elle fait appel à tous ses sens et c'est bien entendu un bon moment à passer ensemble.",
    "question": "Selon cette personne, que permet la fête de la gastronomie?",
    "options": {
      "A": "Conseiller les parents en matière d'alimentation.",
      "B": "Créer l'occasion de se retrouver en famille.",
      "C": "Découvrir des recettes de grand-mère.",
      "D": "Rassembler des enfants du monde entier."
    },
    "reponse": "B",
    "reponseTexte": "Créer l'occasion de se retrouver en famille.",
    "explication": "Une personne parle de la fête de la gastronomie comme une occasion pour les parents et les enfants de cuisiner ensemble et de partager ce moment en famille.",
    "indice": [
      "gastronomie",
      "cuisiner",
      "famille",
      "enfants"
    ]
  },
  {
    "id": 90,
    "niveau": "B1",
    "transcription": "Bonjour, j'aimerais découvrir la ville de Lille. Vous pouvez participer à nos promenades guidées avec des thèmes comme nature, architecture. Oui, très bonne idée. La promenade gastronomie demain matin, c'est possible? Oui, rendez-vous à 10h devant la mairie. Parfait, c'est près de mon hôtel. A demain.",
    "question": "Qu'est-ce qu'on apprend sur cette femme?",
    "options": {
      "A": "Elle est originaire de Lille.",
      "B": "Elle propose des visites guidées.",
      "C": "Elle recherche un hôtel.",
      "D": "Elle s'intéresse à la gastronomie."
    },
    "reponse": "B",
    "reponseTexte": "Elle propose des visites guidées.",
    "explication": "Une femme appelle pour s'informer sur les visites guidées à Lille et réserve une visite sur la gastronomie pour le lendemain.",
    "indice": [
      "visites guidées",
      "gastronomie",
      "mairie",
      "hôtel"
    ]
  },
  {
    "id": 91,
    "niveau": "B1",
    "transcription": "Tom, c'est Sarah. Je viens d'avoir ton SMS, mais je ne peux pas te répondre. Je suis en réunion en ce moment. Pour ce soir, pas de problème. Je te rejoins au cinéma à 20h et j'achète le popcorn.",
    "question": "Qu'annonce Sarah à Tom?",
    "options": {
      "A": "Elle a mal compris son message.",
      "B": "Elle accepte son invitation.",
      "C": "Elle achètera les billets à l'avance.",
      "D": "Elle est déjà occupée ce soir."
    },
    "reponse": "B",
    "reponseTexte": "Elle accepte son invitation.",
    "explication": "Sarah répond à un message de Tom. Elle accepte de le rejoindre au cinéma. Il faut repérer les mots qui montrent qu'elle est d'accord.",
    "indice": [
      "répondre",
      "cinéma",
      "popcorn"
    ]
  },
  {
    "id": 92,
    "niveau": "B1",
    "transcription": "Bonjour, je voudrais me faire rembourser mon billet pour Montréal. Je devais partir demain, mais mon voyage est annulé. D'accord, mais vous allez perdre 40% du prix du billet. Ben oui, je vous conseille plutôt de l'échanger. Non, merci, ça ne m'intéresse pas.",
    "question": "Que veut la cliente?",
    "options": {
      "A": "Acheter un autre billet.",
      "B": "Échanger son billet.",
      "C": "Partir pour Montréal.",
      "D": "Récupérer son argent."
    },
    "reponse": "D",
    "reponseTexte": "Récupérer son argent.",
    "explication": "Une cliente appelle pour se faire rembourser son billet pour Montréal car son voyage est annulé. L'agent lui propose de l'échanger mais elle refuse.",
    "indice": [
      "rembourser",
      "billet",
      "annulé",
      "échanger"
    ]
  },
  {
    "id": 93,
    "niveau": "B1",
    "transcription": "Vous désirez ? Est-ce que cette veste existe en noir? Je ne l'ai plus. Mais nous avons ce modèle-là, plus classique. Passez-la. Oh, elle est trop serrée. Non, je vous assure, c'est ma tendance cette année de porter des vestes cintrées. Je ne pourrais pas mettre de gilet en dessous. Oh, vous n'en avez pas besoin. C'est de la pure laine, ça tient chaud. Bon, j'apprends.",
    "question": "Que propose la vendeuse à la cliente?",
    "options": {
      "A": "D'essayer un vêtement près du corps.",
      "B": "De changer la taille de l'article choisi.",
      "C": "De changer la taille de l'article choisi.",
      "D": "De compléter son achat avec un pull."
    },
    "reponse": "A",
    "reponseTexte": "D'essayer un vêtement près du corps.",
    "explication": "La cliente hésite sur la taille d'une veste. La vendeuse lui propose d'essayer un modèle plus serré. Il faut comprendre la proposition de la vendeuse.",
    "indice": [
      "veste",
      "cintrée",
      "serrée",
      "tendance"
    ]
  },
  {
    "id": 94,
    "niveau": "B1",
    "transcription": "Alors Pierre, qu'est-ce que tu as décidé ? Tu vas accepter cette offre d'emploi? Ah non, j'ai déjà refusé. Honnêtement, je préfère continuer à chercher. Je pense que tu fais une bêtise. C'est très bien payé et puis les horaires te conviennent, non? Oui, mais ce n'est pas une raison pour accepter le poste. Ce qui est important pour moi, c'est le travail lui-même. Et de ce point de vue, le poste ne m'attire pas. J'espère que tu ne vas pas regretter ta décision.",
    "question": "Pourquoi Pierre refuse-t-il ce poste?",
    "options": {
      "A": "La mission est sans intérêt.",
      "B": "La société est loin de chez lui.",
      "C": "Le contrat est temporaire.",
      "D": "Le salaire est insuffisant."
    },
    "reponse": "A",
    "reponseTexte": "La mission est sans intérêt.",
    "explication": "Pierre discute avec un ami de son refus d'une offre d'emploi. Il explique pourquoi il ne veut pas accepter ce poste.",
    "indice": [
      "offre d'emploi",
      "refusé",
      "travail",
      "mission",
      "attire"
    ]
  },
  {
    "id": 95,
    "niveau": "B1",
    "transcription": "Alors, comment as-tu trouvé le film? Assez moyen. Les acteurs jouaient bien, mais je n'ai pas réussi à croire à ce scénario. C'est mon avis aussi. J'ai eu du mal à suivre l'histoire. En revanche, j'ai apprécié la musique et la façon de filmer. En effet, le réalisateur a du talent. On continue cette discussion dans un café? Avec plaisir.",
    "question": "Qu'est-ce que ces deux amis reprochent au film?",
    "options": {
      "A": "L'histoire est compliquée.",
      "B": "La musique est ennuyeuse.",
      "C": "Le réalisateur est mauvais.",
      "D": "Les acteurs sont inconnus."
    },
    "reponse": "A",
    "reponseTexte": "L'histoire est compliquée.",
    "explication": "Deux amis discutent d'un film qu'ils viennent de voir et expriment leurs avis sur différents aspects du film.",
    "indice": [
      "création",
      "histoire",
      "réalisation"
    ]
  },
  {
    "id": 96,
    "niveau": "B1",
    "transcription": "Allô ? Pourrais-je parler au directeur des ressources humaines? Le directeur est actuellement en réunion, mais je peux lui transmettre un message? Je souhaite savoir s'il a bien reçu ma candidature pour le poste d'ingénieur. Je lui ai envoyé mon CV et ma lettre de motivation il y a deux semaines et je n'ai pas reçu de réponse. Donnez-moi votre nom, s'il vous plaît, et je lui dirai de vous recontacter.",
    "question": "Quel est l'objet de cet appel?",
    "options": {
      "A": "Confirmer la date d'un entretien d'embauche.",
      "B": "Se renseigner sur les conditions de travail.",
      "C": "S'informer sur une formation professionnelle.",
      "D": "Vérifier si un courrier est bien arrivé."
    },
    "reponse": "D",
    "reponseTexte": "Vérifier si un courrier est bien arrivé.",
    "explication": "Un candidat appelle le bureau des ressources humaines pour savoir si son CV a été reçu. Il explique avoir envoyé sa candidature il y a deux semaines et n'avoir pas encore eu de réponse.",
    "indice": [
      "candidature",
      "CV",
      "lettre de motivation",
      "réponse"
    ]
  },
  {
    "id": 97,
    "niveau": "B1",
    "transcription": "Alors Camille, c'était bien ton voyage ? Oui, c'était génial! J'ai rencontré des gens très sympas, je me suis promenée dans des paysages magnifiques, j'ai mangé des spécialités étonnantes, mais surtout... J'ai réalisé un reportage photo dans un très beau marché au Pérou. C'était la première fois. Je suis fière d'avoir été si créative. Et d'ailleurs, je vais bientôt faire une exposition. Tu viens, va? Avec plaisir.",
    "question": "Pour Karine, qu'est-ce qui a été le plus important dans son voyage?",
    "options": {
      "A": "Les spécialités culinaires qu'elle a dégustées.",
      "B": "Les paysages qu'elle a explorés.",
      "C": "Les personnes qu'elle a rencontrées.",
      "D": "Son projet artistique."
    },
    "reponse": "D",
    "reponseTexte": "Son projet artistique.",
    "explication": "Camille parle de son voyage au Pérou et de son expérience artistique. Elle discute avec un ami de son reportage photo et de son exposition à venir.",
    "indice": [
      "reportage",
      "photo",
      "exposition",
      "créative"
    ]
  },
  {
    "id": 98,
    "niveau": "B1",
    "transcription": "Bonjour, Marc Ito à la marée. Je voudrais parler à M. Lantos. Il est en formation cette semaine. Je peux lui laisser un message? Je vous écoute. Je voudrais lui faire découvrir le nouveau logiciel de ma société, InfoLag. Vous pourriez le rencontrer la semaine prochaine? Bien sûr, je dois justement voir des clients à Lyon jeudi et vendredi. Disons jeudi matin alors, 10h? C'est parfait, merci madame.",
    "question": "Pourquoi Marc Hicto veut-il rencontrer M. Lacoste?",
    "options": {
      "A": "Pour lui présenter un produit.",
      "B": "Pour organiser un voyage.",
      "C": "Pour suivre une formation.",
      "D": "Pour visiter Lyon avec lui."
    },
    "reponse": "A",
    "reponseTexte": "Pour lui présenter un produit.",
    "explication": "Marc Ito appelle M. Lantos pour lui proposer de découvrir un nouveau logiciel de sa société, InfoLag. Ils conviennent d'un rendez-vous la semaine suivante.",
    "indice": [
      "logiciel",
      "produit",
      "rendez-vous",
      "client"
    ]
  },
  {
    "id": 99,
    "niveau": "B1",
    "transcription": "François Boucher, professeur de sport près de Québec, a créé une petite entreprise qui valorise les skis et planches à neige en fin de vie. Dans un pays comme le Canada, où les sports d'hiver sont populaires, ce matériel est source de beaucoup de déchets car il est composé de matériaux non recyclables. Comme François cherchait un moyen de financer des sorties scolaires dans les stations de ski des environs, il a pensé qu'il pourrait trouver dans ses déchets une source de revenus. Aujourd'hui, il transforme les vieux skis en meubles.",
    "question": "",
    "options": {
      "A": "Construire des objets à partir de skis usés.",
      "B": "Fabriquer des skis avec des produits écologiques.",
      "C": "Faire découvrir le ski à des enfants défavorisés.",
      "D": "Proposer des skis d'occasion en magasin."
    },
    "reponse": "A",
    "reponseTexte": "Construire des objets à partir de skis usés.",
    "explication": "François Boucher, un professeur de sport près de Québec, transforme des skis et planches à neige usés en meubles pour financer des sorties scolaires.",
    "indice": [
      "skis",
      "déchets",
      "meubles",
      "valoriser"
    ]
  },
  {
    "id": 100,
    "niveau": "B1",
    "transcription": "Bonjour, Mme Tremblay. Je suis désolé. Il y a eu un problème informatique à ma banque. Je ne peux pas retirer d'argent.",
    "question": "Ou bien je vous règle mon loyer dans deux ou trois jours, ou bien je vous apporte un chèque demain, si vous préférez.",
    "options": {
      "A": "Elle va appeler le locataire.",
      "B": "Elle va attendre un petit peu.",
      "C": "Elle va refuser le paiement.",
      "D": "Elle va revenir une autre fois."
    },
    "reponse": "B",
    "reponseTexte": "Elle va attendre un petit peu.",
    "explication": "Un locataire explique à sa propriétaire qu'il a un problème bancaire et ne peut pas payer son loyer tout de suite. Il propose de payer plus tard ou avec un chèque.",
    "indice": [
      "problème",
      "banque",
      "loyer",
      "chèque"
    ]
  },
  {
    "id": 101,
    "niveau": "B1",
    "transcription": "Suite à un accident de voyageurs, le train numéro 8791 en direction de Marseille, départ initial 13h35, est immobilisé en gare de Lyon-Perrache. Les voyageurs sont invités à descendre du train et à se rendre au guichet où de plus amples informations leur seront communiquées. Nous vous remercions de votre compréhension.",
    "question": "Qu'est-ce que les voyageurs doivent faire?",
    "options": {
      "A": "Prendre un car.",
      "B": "Rester dans le train.",
      "C": "Se renseigner au guichet.",
      "D": "Prendre une correspondance."
    },
    "reponse": "C",
    "reponseTexte": "Se renseigner au guichet.",
    "explication": "Un message annonce qu'un train est immobilisé à Lyon-Perrache à cause d'un accident. Les voyageurs doivent savoir quoi faire.",
    "indice": [
      "accident",
      "voyageurs",
      "guichet",
      "informations"
    ]
  },
  {
    "id": 102,
    "niveau": "B1",
    "transcription": "Alors, finalement, tu as vu l'exposition, Mathis ? Oui, j'y suis allé pendant les vacances. Il y avait deux heures d'attente avant de pouvoir entrer. Heureusement que j'avais un bon livre. Ah oui, c'est souvent comme ça. Mais après, tu as vu? La disposition des tableaux, l'organisation de l'espace, la lumière. C'est vraiment superbe. Oui, il y a un très bel éclairage qui met bien les étoiles en valeur. Mais dans cette foule, il faut se battre pour les voir. Très sincèrement, j'aurais été plus tranquille chez moi à feuilleter une revue d'art contemporain.",
    "question": "Pourquoi l'un des interlocuteurs n'a-t-il pas apprécié l'exposition?",
    "options": {
      "A": "Il n'aime pas l'œuvre de ce peintre.",
      "B": "La présentation des tableaux lui a déplu.",
      "C": "Il a trouvé qu'il avait trop de visiteurs.",
      "D": "Il s'est ennuyé en faisant la queue."
    },
    "reponse": "C",
    "reponseTexte": "Il a trouvé qu'il avait trop de visiteurs.",
    "explication": "Deux personnes discutent d'une exposition que l'un d'eux a visitée pendant les vacances. Ils parlent des conditions de visite et de la disposition des œuvres.",
    "indice": [
      "exposition",
      "visiteurs",
      "foule",
      "attente"
    ]
  },
  {
    "id": 103,
    "niveau": "B1",
    "transcription": "Qu'est-ce qui t'arrive, toi ? Tu as l'air triste. Bon, il ne m'a pas téléphoné pour moi dans l'université. J'ai entendu son appel tout le temps. Ah, il va peut-être me passer ce soir, me tenter de faire.",
    "question": "Qu'est-ce que tu as à dire?",
    "options": {
      "A": "Elle a cassé son téléphone.",
      "B": "Elle a raté un appel important.",
      "C": "Elle n'a pas été invitée à un anniversaire.",
      "D": "Elle n'a pas eu l'appel espéré."
    },
    "reponse": "D",
    "reponseTexte": "Elle n'a pas eu l'appel espéré.",
    "explication": "Une personne parle à un ami de sa déception après avoir entendu un appel téléphonique qui ne lui était pas destiné.",
    "indice": [
      "téléphoné",
      "appel",
      "espéré"
    ]
  },
  {
    "id": 104,
    "niveau": "B1",
    "transcription": "Allô ? Salut, c'est Rachida. Salut, petite sœur. Je t'appelle pour qu'on s'organise. Tu te souviens qu'on sera déjà partis quand vous arriverez? Ah, c'est vrai. J'avais complètement oublié. Comment on fait pour les clés? Je les laisserai chez la voisine d'en face. On vous a préparé des draps, des serviettes et le frigo est plein. Nous vous avons aussi laissé une liste d'activités à faire ici et des adresses pour sortir dîner. Merci beaucoup. Je te dois combien? Rien, tu plaisantes. C'est normal, tu es mon frère.",
    "question": "Pourquoi Rachida appelle-t-elle son frère?",
    "options": {
      "A": "Pour l'inviter au restaurant.",
      "B": "Pour le remercier de son accueil.",
      "C": "Pour lui conseiller un logement.",
      "D": "Pour lui donner des informations."
    },
    "reponse": "D",
    "reponseTexte": "Pour lui donner des informations.",
    "explication": "Rachida appelle son frère pour organiser l'accueil de sa famille chez elle pendant leur absence. Elle donne des informations sur les clés, les draps, la nourriture et les activités.",
    "indice": [
      "s'organiser",
      "clés",
      "liste d'activités"
    ]
  },
  {
    "id": 105,
    "niveau": "B1",
    "transcription": "Salut Marion ! Salut Thomas, ça va? J'ai une journée difficile au bureau. On prend un verre quelque part et tu me racontes ton week-end? D'accord, mais avant je dois passer à la pharmacie. Ce n'est pas loin? Je suis fatigué moi.",
    "question": "Qu'est-ce que Thomas propose à Marion?",
    "options": {
      "A": "D'aller dans un bar.",
      "B": "De faire les courses.",
      "C": "De préparer un voyage.",
      "D": "De travailler ensemble."
    },
    "reponse": "A",
    "reponseTexte": "D'aller dans un bar.",
    "explication": "Thomas propose à Marion de prendre un verre après une journée difficile au bureau.",
    "indice": [
      "verre",
      "week-end",
      "pharmacie"
    ]
  },
  {
    "id": 106,
    "niveau": "B1",
    "transcription": "Alors Marie, prête pour le départ ? Oui. Tu as le guide touristique de Vienne? Tu pourrais visiter la ville et goûter les spécialités locales? Oh, je ne sais pas. Je serai occupée du matin au soir par des réunions et des rendez-vous avec des clients. Ah, et tu vas voir tes amis autrichiens? Non, pas cette fois.",
    "question": "Qu'est-ce que Marie va faire à Vienne?",
    "options": {
      "A": "Manger des plats typiques.",
      "B": "Rencontrer sa famille.",
      "C": "Travailler toute la journée.",
      "D": "Voir une exposition."
    },
    "reponse": "C",
    "reponseTexte": "Travailler toute la journée.",
    "explication": "Marie parle avec une personne avant de partir à Vienne. Elle explique qu'elle sera très occupée pendant son séjour.",
    "indice": [
      "Vienne",
      "réunions",
      "clients",
      "amis autrichiens"
    ]
  },
  {
    "id": 107,
    "niveau": "B1",
    "transcription": "Sophie, je ne trouve pas le dossier Sanovi. Je l'ai posé sur votre bureau. Ou sur mon bureau. Près de l'écran de votre ordinateur, sur la pile de papier. Ah, zut! J'ai jeté tous les papiers qui traînaient. Attendez, je vais regarder. Tenez, il n'est pas perdu. La femme de ménage n'est pas encore passée.",
    "question": "Où Sophie trouve-t-elle le dossier Sanovi?",
    "options": {
      "A": "Dans la poubelle.",
      "B": "Aux archives.",
      "C": "Dans le tiroir.",
      "D": "Sur le bureau."
    },
    "reponse": "A",
    "reponseTexte": "Dans la poubelle.",
    "explication": "Sophie cherche un dossier perdu et parle avec une collègue pour le retrouver. Elle explique où elle l'a posé et ce qu'elle a fait avec les papiers.",
    "indice": [
      "dossier Sanovi",
      "poubelle",
      "femme de ménage"
    ]
  },
  {
    "id": 108,
    "niveau": "B1",
    "transcription": "Ces patients sont des girafes, des pandas ou des tigres. S'ils sont malades, c'est elles que l'on appelle. Florence est la seule vétérinaire en France capable de tous les aider. Florence, pourquoi avoir choisi de vous occuper de ces animaux en particulier? Toute petite, j'apprenais les noms des animaux africains et je rêvais de soigner des lions. Ce rêve est devenu réalité. Dans quels endroits travaillez-vous? J'interviens dans les zoos, les cirques ou les parcs animaliers.",
    "question": "Quelle est la particularité de Florence?",
    "options": {
      "A": "Elle accueille chez elle des lions malades.",
      "B": "Elle est la plus jeune vétérinaire de France.",
      "C": "Elle sait soigner les animaux sauvages.",
      "D": "Elle travaille dans des endroits dangereux."
    },
    "reponse": "C",
    "reponseTexte": "Elle sait soigner les animaux sauvages.",
    "explication": "Florence explique pourquoi elle a choisi de soigner des animaux sauvages comme les girafes et les tigres, et où elle travaille.",
    "indice": [
      "vétérinaire",
      "animaux sauvages",
      "zoos",
      "cirques"
    ]
  },
  {
    "id": 109,
    "niveau": "B1",
    "transcription": "Monsieur, j'ai fini de contacter tous les fournisseurs. Je pourrais peut-être mettre à jour les factures sur l'ordinateur maintenant. Occupez-vous plutôt d'abord du rangement des dossiers de litige dans les chemises cartonnées. Merci, Sandra.",
    "question": "Que doit faire Sandra?",
    "options": {
      "A": "Classer des documents.",
      "B": "Préparer des courriers.",
      "C": "Téléphoner aux clients.",
      "D": "Vérifier les comptes."
    },
    "reponse": "A",
    "reponseTexte": "Classer des documents.",
    "explication": "Sandra parle à son patron. Il lui demande de ranger les dossiers de litige dans des chemises cartonnées avant de faire autre chose.",
    "indice": [
      "fournisseurs",
      "factures",
      "rangement",
      "dossiers",
      "chemises cartonnées"
    ]
  },
  {
    "id": 110,
    "niveau": "B1",
    "transcription": "Rafika de Buffalo, bienvenue dans La Terre est belle. Bonjour Marc. Alors, nous sommes ravis de vous avoir à l'antenne parce qu'on n'a jamais eu personne de Buffalo. Vous allez nous apprendre des choses. Ça se trouve où déjà? Totalement à l'ouest de l'état de New York. C'est l'imitrophe du Canada. C'est drôle comme nom, il n'y a pas spécialement de buffle ou de choses comme ça? Non, d'après la légende, ça vient de Beaufleuve, un nom donné par les explorateurs français. Enfin, c'est l'histoire qu'on raconte.",
    "question": "Pour quelles raisons Rafika intervient-elle?",
    "options": {
      "A": "Pour conseiller un livre.",
      "B": "Pour discuter d'écologie.",
      "C": "Pour parler de sa ville.",
      "D": "Pour raconter un voyage."
    },
    "reponse": "C",
    "reponseTexte": "Pour parler de sa ville.",
    "explication": "Rafika est invitée à la radio pour parler de sa ville, Buffalo, située dans l'ouest de l'état de New York. Elle explique d'où vient le nom de la ville.",
    "indice": [
      "radio",
      "ville",
      "Buffalo",
      "légende"
    ]
  },
  {
    "id": 111,
    "niveau": "B1",
    "transcription": "Bonjour monsieur. Bonjour, je déménage bientôt et je voudrais savoir comment faire pour continuer à recevoir mon courrier. C'est simple, vous devez remplir un formulaire en indiquant votre nouvelle adresse. Et ensuite? Ensuite, nous nous occupons de l'envoi quotidien de votre courrier.",
    "question": "Pourquoi l'homme va-t-il au guichet de la poste?",
    "options": {
      "A": "Pour un achat.",
      "B": "Pour un envoi.",
      "C": "Pour un renseignement.",
      "D": "Pour une réclamation."
    },
    "reponse": "C",
    "reponseTexte": "Pour un renseignement.",
    "explication": "Un homme va à la poste pour savoir comment faire suivre son courrier après un déménagement. Il parle avec un employé qui lui explique la procédure.",
    "indice": [
      "déménage",
      "courrier",
      "formulaire",
      "adresse",
      "renseignement"
    ]
  },
  {
    "id": 112,
    "niveau": "B1",
    "transcription": "Si tu prends le bus de midi pour aller à l'université, tu seras en retard. Et que veux-tu que je fasse? Marche! Il fait beau! Et si tu passes par le parc, tu pourras t'arrêter au kiosque pour acheter ton déjeuner.",
    "question": "Que conseille la jeune fille à son amie?",
    "options": {
      "A": "D'aller à l'université à pied.",
      "B": "De courir pour être à l'heure.",
      "C": "De déjeuner avant de partir.",
      "D": "De prendre le bus de midi."
    },
    "reponse": "A",
    "reponseTexte": "D'aller à l'université à pied.",
    "explication": "La jeune fille conseille à son amie de marcher pour éviter d'être en retard. Il faut comprendre le conseil donné.",
    "indice": [
      "bus",
      "retard",
      "marche",
      "parc",
      "kiosque"
    ]
  },
  {
    "id": 113,
    "niveau": "B1",
    "transcription": "Dernier appel pour les passagers à destination de Montréal. Embarquement immédiat, porte B. Yasmina, on va être en retard. Dépêche-toi. Regarde cette file d'attente devant le contrôle de sécurité. Ne t'inquiète pas, Oscar. Excusez-nous, monsieur. Nous allons à Montréal et notre embarquement est en cours. Est-ce que nous pourrions passer devant vous? Oui, allez-y. Je décolle dans deux heures.",
    "question": "Pourquoi Oscar est-il inquiet?",
    "options": {
      "A": "Parce que la zone d'embarquement est loin.",
      "B": "Parce que leur avion décolle bientôt.",
      "C": "Parce que leur vol est en retard.",
      "D": "Parce que Yasmine a perdu sa valise."
    },
    "reponse": "B",
    "reponseTexte": "Parce que leur avion décolle bientôt.",
    "explication": "Yasmina et Oscar se dépêchent pour embarquer à temps pour leur vol vers Montréal. Ils demandent à passer devant les autres dans la file d'attente.",
    "indice": [
      "Montréal",
      "embarquement",
      "décoller",
      "deux heures"
    ]
  },
  {
    "id": 114,
    "niveau": "B1",
    "transcription": "Salut Laurent, c'est Martin. Dis, il y a un gymnase qui vient d'ouvrir à côté de chez moi. Il y a plusieurs salles. En ce moment, on peut y essayer tous les sports et c'est gratuit. Ça te dirait de venir faire une partie de basketball avec les copains demain soir? Réponds-moi vite pour que j'appelle le club pour réserver le terrain. À plus tard.",
    "question": "Que propose Martin à Laurent?",
    "options": {
      "A": "D'assister à une rencontre sportive.",
      "B": "De fêter leur victoire entre copains.",
      "C": "De jouer au basket-ball sans payer.",
      "D": "De s'inscrire dans un nouveau club."
    },
    "reponse": "C",
    "reponseTexte": "De jouer au basket-ball sans payer.",
    "explication": "Martin appelle Laurent pour l'inviter à jouer au basket dans un nouveau gymnase où tous les sports sont gratuits à essayer.",
    "indice": [
      "gymnase",
      "gratuit",
      "basketball",
      "copains"
    ]
  },
  {
    "id": 115,
    "niveau": "B1",
    "transcription": "Salut Annie, tu manges à la cantine aujourd'hui ? Non, je n'y vais plus. Vraiment? Mais pourquoi? En fait, on nous sert des frites chaque semaine. Non pas que ça me déplaît, au contraire, j'aime plutôt ça. Mais j'aimerais vraiment qu'ils nous proposent une alimentation plus variée. On a plusieurs choix d'entrée, de dessert, et ça c'est pas mal, mais c'est le plat principal. Si on n'a pas de frites, on a du riz ou des pâtes. Je voudrais éviter de manger trop gras. Je ne suis pas complexée par mon poids, mais il faut faire attention. Rien qu'en mangeant à la cantine, j'ai pris 2 kilos depuis le début de l'année.",
    "question": "Question 16 Pourquoi Annie refuse-t-elle d'aller à la cantine?",
    "options": {
      "A": "Parce qu'elle déteste la nourriture.",
      "B": "Parce qu'elle veut commencer un régime.",
      "C": "Parce qu'elle veut manger plus équilibré.",
      "D": "Parce qu'il n'y a pas assez de choix."
    },
    "reponse": "C",
    "reponseTexte": "Parce qu'elle veut manger plus équilibré.",
    "explication": "Annie explique à un ami pourquoi elle ne mange plus à la cantine. Elle préfère éviter les plats trop gras.",
    "indice": [
      "cantine",
      "frites",
      "alimentation",
      "équilibré"
    ]
  },
  {
    "id": 116,
    "niveau": "B1",
    "transcription": "Conservatoire de Toulouse, bonjour. Bonjour, j'aimerais inscrire ma fille de 10 ans au cours de violon pour la rentrée prochaine. Désolé madame, mais toutes les inscriptions se font en ligne à partir du mois de juin. Ah bon? D'accord. Merci, au revoir. Je vous en prie. Au revoir.",
    "question": "Que faut-il pour s'inscrire?",
    "options": {
      "A": "S'inscrire sur place.",
      "B": "Téléphoner.",
      "C": "Envoyer un courrier.",
      "D": "Utiliser internet."
    },
    "reponse": "D",
    "reponseTexte": "Utiliser internet.",
    "explication": "Un parent appelle le conservatoire pour inscrire sa fille à un cours de violon. On lui explique que les inscriptions se font en ligne.",
    "indice": [
      "inscrire",
      "en ligne",
      "juin"
    ]
  },
  {
    "id": 117,
    "niveau": "B1",
    "transcription": "Bonjour, M. Lefort. Je suis Pierre Toussaint, des affaires culturelles de la ville d'Aubervilliers. Je vous contacte car vous avez répondu à notre offre d'emploi pour notre médiathèque. Votre profil nous intéresse pour le poste du bibliothécaire, mais je souhaiterais vous rencontrer pour obtenir des informations complémentaires. Pourriez-vous contacter mon assistant avant vendredi après-midi pour lui faire part de vos disponibilités? Bonne journée.",
    "question": "Pourquoi Pierre Toussaint appelle-t-il M. Lefort?",
    "options": {
      "A": "Pour lui communiquer une décision.",
      "B": "Pour lui confirmer une adresse.",
      "C": "Pour lui demander d'envoyer un CV.",
      "D": "Pour lui proposer un entretien."
    },
    "reponse": "D",
    "reponseTexte": "Pour lui proposer un entretien.",
    "explication": "Pierre Toussaint appelle M. Lefort pour lui proposer un entretien pour un poste de bibliothécaire dans une médiathèque.",
    "indice": [
      "médiathèque",
      "bibliothécaire",
      "disponibilités",
      "entretien"
    ]
  },
  {
    "id": 118,
    "niveau": "B1",
    "transcription": "Pouvez-vous envoyer un courriel pour la réunion de cet après-midi, mademoiselle? Oui, bien sûr. Mais n'oubliez pas votre rendez-vous de 16 heures avec M. Demers. Ah oui, c'est vrai. Mais il faudra le faire patienter. Je ne pense pas que la réunion sera terminée à 16 heures. Je le verrai plus tard. Très bien, monsieur. Il vaut mieux que je l'appelle pour le prévenir.",
    "question": "Pourquoi la secrétaire doit-elle appeler M. Demers?",
    "options": {
      "A": "Pour annuler une réunion.",
      "B": "Pour convoquer un collègue.",
      "C": "Pour changer un rendez-vous.",
      "D": "Pour annoncer un retard."
    },
    "reponse": "D",
    "reponseTexte": "Pour annoncer un retard.",
    "explication": "La secrétaire et son patron discutent de la réunion de l'après-midi et du rendez-vous avec M. Demers. La secrétaire doit prévenir M. Demers qu'il y aura un retard.",
    "indice": [
      "réunion",
      "rendez-vous",
      "16 heures",
      "retard"
    ]
  },
  {
    "id": 119,
    "niveau": "B1",
    "transcription": "Samira, tu viens de Matagami. Depuis ton installation à Québec, qu'est-ce qui te manque le plus? Il y a les parents, ma sœur, les copains, mais entre les mails et le téléphone, ça ne me pose pas plus de problèmes que ça. Bien sûr, il me manque, mais c'est si agréable de vivre ici à Québec que je pense y rester quelques années.",
    "question": "Que dit cette personne nouvellement installée à Québec?",
    "options": {
      "A": "Elle aimerait que ses amis lui rendent visite.",
      "B": "Elle apprécie beaucoup sa nouvelle ville.",
      "C": "Elle souhaite repartir dans sa région.",
      "D": "Elle voudrait que sa famille déménage."
    },
    "reponse": "B",
    "reponseTexte": "Elle apprécie beaucoup sa nouvelle ville.",
    "explication": "Samira parle de son déménagement récent de Matagami à Québec et de ce qui lui manque le plus dans sa nouvelle vie.",
    "indice": [
      "Québec",
      "parents",
      "copains",
      "agréable",
      "rester"
    ]
  },
  {
    "id": 120,
    "niveau": "B1",
    "transcription": "Maintenant que les examens universitaires sont finis, qu'est-ce que tu vas faire ? Je voudrais faire un stage de langue espagnole pendant un mois. Bonne idée! J'en ai fait un l'année dernière en Argentine. C'était super! Je ne veux pas aller si loin. Je pense plutôt à l'Espagne. Tu devrais aller dans le sud, à Séville. C'est une ville magnifique. Pourquoi pas? Mais j'ai un petit budget. Je dois voir si je peux trouver un logement pas trop cher.",
    "question": "De quoi parlent ces deux personnes?",
    "options": {
      "A": "De leur voyage en Angleterre.",
      "B": "Des résultats des examens.",
      "C": "Du coût de la vie en ville.",
      "D": "D'un séjour linguistique."
    },
    "reponse": "D",
    "reponseTexte": "D'un séjour linguistique.",
    "explication": "Deux personnes discutent des projets de l'une d'entre elles pour un stage de langue à l'étranger après les examens universitaires.",
    "indice": [
      "stage",
      "langue",
      "Espagne",
      "logement"
    ]
  },
  {
    "id": 121,
    "niveau": "B1",
    "transcription": "Je suis tunisien et je viens d'arriver au Canada. Et toi? Moi, je suis québécoise. Alors, tu pourras peut-être me renseigner sur les démarches à suivre pour ma demande d'admission à l'université. Il vaut mieux que tu t'adresses au secrétariat de l'université. En tant qu'étudiant étranger, il y a des modalités particulières. Je ne peux pas faire de demande par courrier ou en ligne. Et est-ce qu'il y a des équivalences avec mes diplômes tunisiens? Je l'ignore. Téléphone plutôt au secrétariat.",
    "question": "Quel conseil cette étudiante donne-t-elle au jeune homme?",
    "options": {
      "A": "Constituer son dossier par voie électronique.",
      "B": "Consulter la section « Étudiant étranger » sur internet.",
      "C": "Obtenir une reconnaissance de son diplôme tunisien.",
      "D": "Se mettre directement en contact avec l'université."
    },
    "reponse": "D",
    "reponseTexte": "Se mettre directement en contact avec l'université.",
    "explication": "Un étudiant tunisien nouvellement arrivé au Canada demande des conseils à une étudiante québécoise sur les démarches pour sa demande d'admission à l'université.",
    "indice": [
      "université",
      "étudiant étranger",
      "secrétariat",
      "admission"
    ]
  },
  {
    "id": 122,
    "niveau": "B1",
    "transcription": "Tu t'es renseignée sur la formation en informatique? Oui, j'ai appelé ce matin. Et alors, tu penses t'inscrire? Je ne sais pas encore. Le centre de formation ne propose pas de cours le soir. Sinon, les tarifs sont raisonnables. D'après ce que Julien m'a dit, le prof est très bien. C'est important. Oui. En plus, c'est à côté du bureau. Le test d'entrée a lieu la semaine prochaine. Il faut que je parle avec mon responsable. J'espère qu'il sera d'accord pour que je m'absente quatre heures par semaine.",
    "question": "Pour quelle raison le jeune homme hésite-t-il à s'inscrire?",
    "options": {
      "A": "Le test de niveau est difficile.",
      "B": "L'école est loin de son bureau.",
      "C": "Les cours ont lieu en journée.",
      "D": "Les tarifs sont chers pour lui."
    },
    "reponse": "C",
    "reponseTexte": "Les cours ont lieu en journée.",
    "explication": "Un jeune homme discute avec quelqu'un de son hésitation à s'inscrire à une formation en informatique. Il explique que les cours ne sont pas disponibles le soir.",
    "indice": [
      "formation",
      "cours",
      "soir",
      "tarifs",
      "test"
    ]
  },
  {
    "id": 123,
    "niveau": "B1",
    "transcription": "Bonjour Anne-Marie. Bonjour Nicolas. Vous êtes de Limoges, vous habitez Île, mais vous êtes en vacances ici en Auvergne. Absolument. Ça vous arrive souvent de venir dans la région voisine? Oh oui, oui, oui. Nous aimons beaucoup la région, nous venons très souvent. Que faites-vous? Vous louez un gîte, vous allez chez l'habitant? Oui, oui, oui, on loue un gîte, oui. Gîte rural? Oui, c'est très intéressant parce qu'on peut connaître des gens comme ça, qui nous aident à découvrir des choses qu'on ne connaîtrait pas autrement.",
    "question": "Pourquoi Anne-Marie se trouve-t-elle en Auvergne?",
    "options": {
      "A": "Elle passe ses congés dans la région.",
      "B": "Elle réside là depuis son enfance.",
      "C": "Elle travaille dans le tourisme local.",
      "D": "Elle vient participer à un concours."
    },
    "reponse": "A",
    "reponseTexte": "Elle passe ses congés dans la région.",
    "explication": "Anne-Marie et Nicolas parlent de leurs vacances en Auvergne. Ils expliquent qu'ils viennent souvent dans la région voisine et louent un gîte pour découvrir des choses nouvelles.",
    "indice": [
      "vacances",
      "région",
      "gîte",
      "découvrir"
    ]
  },
  {
    "id": 124,
    "niveau": "B1",
    "transcription": "Linda Popin, bonjour. Merci de participer à notre émission. Linda, vous êtes une artiste reconnue aujourd'hui. Les gens vous aiment. Quel est votre secret? C'est simple. Vous savez, je n'ai jamais pris de cours de ma vie. Je chante simplement avec mon cœur. Je dis souvent à mes élèves que la musique doit être leur sang. Et qu'il faut qu'ils chantent avec toutes les parties de leur corps. Épaule, yeux, ils sont partagés avec les musiciens, avec le public.",
    "question": "Quel est le secret de la réussite de cette chanteuse?",
    "options": {
      "A": "C'est une interprète sincère.",
      "B": "Des danseurs l'accompagnent.",
      "C": "Elle répète très régulièrement.",
      "D": "Son répertoire est romantique."
    },
    "reponse": "A",
    "reponseTexte": "C'est une interprète sincère.",
    "explication": "Linda Popin, une chanteuse reconnue, explique dans une émission son secret de réussite. Elle dit qu'elle chante avec son cœur et donne des conseils à ses élèves.",
    "indice": [
      "cœur",
      "musique",
      "sang",
      "élèves"
    ]
  },
  {
    "id": 125,
    "niveau": "B1",
    "transcription": "Alors, ton voyage en Allemagne ? Super! J'ai pu rencontrer les responsables de programme et leur proposer nos produits. Dans l'ensemble, ils étaient assez intéressés. C'est plutôt encourageant pour la suite. Génial! Tu as pu visiter un peu la ville? En dehors du quartier de l'hôtel, pas vraiment. Je suis assez déçu. Mais je n'ai pas eu le temps. Je ne suis resté que trois jours et j'avais beaucoup de personnes à rencontrer.",
    "question": "On mangeait tout le temps au restaurant de l'entreprise, les journées se terminaient tard.",
    "options": {
      "A": "Elle aurait aimé faire du tourisme.",
      "B": "Elle aurait préféré se coucher tôt.",
      "C": "Elle espérait avoir plus d'interlocuteurs.",
      "D": "Elle s'attendait à un accueil plus favorable."
    },
    "reponse": "A",
    "reponseTexte": "Elle aurait aimé faire du tourisme.",
    "explication": "Une personne raconte son voyage d'affaires en Allemagne où elle a rencontré des responsables de programme pour leur proposer ses produits.",
    "indice": [
      "ville",
      "déçu",
      "trois jours",
      "restaurant"
    ]
  },
  {
    "id": 126,
    "niveau": "B1",
    "transcription": "Et Sophia, elle vient ? Non, elle ne pourra pas venir avec nous au cinéma. Elle m'a demandé de vous prévenir. Pourquoi? Elle a une sortie avec ses collègues. Ils ont réservé une table pour 19h. C'est dommage. Peut-être qu'elle pourra nous rejoindre plus tard.",
    "question": "Où sera Sophia à 19h?",
    "options": {
      "A": "Au bureau.",
      "B": "Au cinéma.",
      "C": "Au restaurant.",
      "D": "Au théâtre."
    },
    "reponse": "C",
    "reponseTexte": "Au restaurant.",
    "explication": "Sophia ne peut pas aller au cinéma avec ses amis car elle a une sortie avec ses collègues. Ils ont réservé une table pour 19h.",
    "indice": [
      "réservé",
      "table",
      "19h"
    ]
  },
  {
    "id": 127,
    "niveau": "B1",
    "transcription": "Bonjour Monique. Bonjour Olivier. Que puis-je pour vous? Je viens vous voir au sujet de mes vacances. Je voudrais les prendre en juillet. Je sais que certains collègues seront en formation et d'autres en extérieur pour les présentations de nos produits sur les marchés d'Europe. Est-ce que cela sera possible? Nous aurons peut-être besoin de vous, effectivement. Je vais y réfléchir et je vous donne ma réponse cette semaine. Je vous remercie. Permettez-moi juste de vous rappeler que l'été dernier, j'ai travaillé tout le mois d'août.",
    "question": "Que demande Olivier?",
    "options": {
      "A": "À quel moment il pourra poser des congés.",
      "B": "Dans quelle ville il devra partir en mission.",
      "C": "Qui sera de permanence au mois d'août.",
      "D": "S'il sera autorisé à suivre un stage en été."
    },
    "reponse": "A",
    "reponseTexte": "À quel moment il pourra poser des congés.",
    "explication": "Un employé demande à ses supérieurs la possibilité de prendre des congés en juillet, sachant que certains collègues seront absents pour des formations et des missions.",
    "indice": [
      "vacances",
      "juillet",
      "congés"
    ]
  },
  {
    "id": 128,
    "niveau": "B1",
    "transcription": "Pour votre sécurité, attention à la marche en descendant du train.",
    "question": "Quelle est la fonction de cette annonce publique?",
    "options": {
      "A": "Prévenir d'un danger.",
      "B": "Signaler le départ d'un train.",
      "C": "Annoncer l'arrivée d'un train.",
      "D": "Avertir d'un incident."
    },
    "reponse": "A",
    "reponseTexte": "Prévenir d'un danger.",
    "explication": "Une annonce est faite dans une gare pour informer les passagers. Elle parle de la marche en descendant du train.",
    "indice": [
      "sécurité",
      "marche",
      "descendant",
      "train"
    ]
  },
  {
    "id": 129,
    "niveau": "B1",
    "transcription": "Excusez-moi, madame, mais je suis complètement perdu. Je ne trouve pas la gare et mon train part dans cinq minutes. Un hôtel en mode de passer par là. Montrez-moi votre plan. Mais vous le regardez à l'envers. L'usine est au bout de la rue et la gare juste derrière. Oh, merci beaucoup.",
    "question": "Que veut faire cet homme?",
    "options": {
      "A": "Acheter un plan.",
      "B": "Prendre un train.",
      "C": "Trouver un hôtel.",
      "D": "Visiter un musée."
    },
    "reponse": "B",
    "reponseTexte": "Prendre un train.",
    "explication": "Un homme demande son chemin à une femme car il ne trouve pas la gare et doit prendre son train. Il regarde un plan avec elle.",
    "indice": [
      "gare",
      "train",
      "cinq minutes"
    ]
  },
  {
    "id": 130,
    "niveau": "B1",
    "transcription": "En fait, en quelques mots, les jeunes jouent beaucoup moins à l'extérieur, les jeunes sont plus inactifs, les jeunes ont plus de troubles de comportement. Or, de plus en plus d'études scientifiques font un lien direct entre le fait que les enfants n'aimaient même pas de temps libre, n'aimaient pas de jeu libre et ne jouent pas dehors, ne sont pas en lien avec la nature qui les environne. Et donc, sur des études qui ont été faites, par exemple, sur des rats, on a constaté que des rats qui ne bougent pas, qui ne peuvent pas jouer, qui ne peuvent pas sortir librement à l'extérieur, on développe des troubles de comportement comme ceux que l'on constate absolument actuellement chez les enfants.",
    "question": "Selon l'intervenant, qu'est-ce qui explique les troubles du comportement?",
    "options": {
      "A": "Un emploi du temps surchargé.",
      "B": "Un encadrement trop rigide.",
      "C": "Un manque d'activités de plein air.",
      "D": "Un usage excessif des écrans."
    },
    "reponse": "C",
    "reponseTexte": "Un manque d'activités de plein air.",
    "explication": "Un intervenant parle des troubles de comportement chez les enfants en lien avec leur mode de vie sédentaire et leur manque d'activités en plein air.",
    "indice": [
      "enfants",
      "inactifs",
      "troubles",
      "comportement",
      "extérieur"
    ]
  },
  {
    "id": 131,
    "niveau": "B1",
    "transcription": "Et maintenant, les annonces de Radio Saint-Onge. Vous faites du sport dans un club et avez toujours rêvé de faire de votre passion votre métier? Les magasins Sport et vous bien recherchent des vendeurs qui soient en même temps des sportifs pour l'ouverture de leur nouvelle boutique à Saint-Onge. Si vous êtes intéressé, veuillez déposer votre CV et votre lettre de motivation dans la boutique la plus proche de chez vous ou en ligne sur notre site internet.",
    "question": "Quelle est la condition pour répondre à cette annonce?",
    "options": {
      "A": "Avoir de l'expérience dans la vente.",
      "B": "Habiter près de Sainton-les-Tonges.",
      "C": "Pratiquer régulièrement un sport.",
      "D": "Savoir gérer un site internet."
    },
    "reponse": "C",
    "reponseTexte": "Pratiquer régulièrement un sport.",
    "explication": "Un annonceur parle d'une offre d'emploi pour des vendeurs sportifs dans une nouvelle boutique à Saint-Onge.",
    "indice": [
      "magasins",
      "Sport",
      "vendeurs",
      "sportifs",
      "boutique"
    ]
  },
  {
    "id": 132,
    "niveau": "B1",
    "transcription": "Alors Julie, ce week-end à la montagne, c'était comment ? Ouf! On est partis samedi matin très tôt. On est arrivés à destination après 6 heures de route. Et on a dû chercher la maison pendant une demi-heure. Mais cette maison, elle était sympa au moins? Bof, elle était trop petite. Le chauffage ne marchait pas bien et on a mal dormi. Mais les paysages étaient magnifiques. On a fait de grandes promenades avant de rentrer.",
    "question": "Qu'est-ce que Julie a aimé ce week-end?",
    "options": {
      "A": "La décoration des pièces.",
      "B": "Le confort du logement.",
      "C": "Le voyage en voiture.",
      "D": "Les activités en place."
    },
    "reponse": "D",
    "reponseTexte": "Les activités en place.",
    "explication": "Julie raconte son week-end à la montagne à un ami. Elle parle de la maison, du chauffage, des paysages et des promenades.",
    "indice": [
      "maison",
      "paysages",
      "promenades"
    ]
  },
  {
    "id": 133,
    "niveau": "B1",
    "transcription": "Salut Ayat ! Wow! Il est beau ton manteau! Merci! Il est parfait pour l'automne et le froid qui arrive. Oui, moi j'adore cette époque. Les couleurs des arbres sont magnifiques. C'est super pour se promener en forêt. Et on peut sortir son beau manteau, comme toi. Mais moi, en fait, je préfère l'été. Les vêtements légers, être dehors. Eh bien, on n'a pas les mêmes goûts. Mais bon, c'est vrai qu'il fait un peu froid dehors. On va boire un café?",
    "question": "Sur quoi est-ce que ces deux personnes ont des goûts différents?",
    "options": {
      "A": "La mode.",
      "B": "La nature.",
      "C": "Les saisons.",
      "D": "Les vacances."
    },
    "reponse": "C",
    "reponseTexte": "Les saisons.",
    "explication": "Deux personnes discutent de leurs préférences pour les saisons, l'une préférant l'automne et l'autre l'été.",
    "indice": [
      "saisons",
      "été",
      "automne"
    ]
  },
  {
    "id": 134,
    "niveau": "B1",
    "transcription": "Écoutez le document sonore et la question. Choisissez la bonne réponse. Eh bien, Julie, qu'est-ce qu'il y a? Je vais déménager parce que mon propriétaire veut vendre l'appartement et faire de gros travaux dans quelques mois. Je regarde les annonces sur Internet. Et tu as déjà trouvé un logement? Non, pas encore. Tu sais que Malika cherche un colocataire? Tu pourrais faire des économies sur le loyer? Oui, mais je préfère vivre seule.",
    "question": "Qu'est-ce que Julie explique?",
    "options": {
      "A": "Elle doit quitter son logement.",
      "B": "Il y a des travaux chez elle.",
      "C": "Le loyer est devenu trop cher.",
      "D": "Sa colocataire est partie."
    },
    "reponse": "A",
    "reponseTexte": "Elle doit quitter son logement.",
    "explication": "Julie parle à une amie de son déménagement car son propriétaire veut vendre l'appartement et faire des travaux. Elle cherche un nouveau logement mais préfère vivre seule.",
    "indice": [
      "déménager",
      "propriétaire",
      "vendre",
      "logement"
    ]
  },
  {
    "id": 135,
    "niveau": "B1",
    "transcription": "Alors, mademoiselle, vous postulez donc pour être vendeuse au rayon par créneau. Vous savez qu'il est nécessaire d'avoir certaines qualités. Pouvez-vous me dire quel est son niveau? Eh bien, je dirais que je suis solidaire, je sais être patiente et écouter les gens. En général, on ne peut pas se lever. J'ai vraiment de bonnes relations avec les gens. Je vois dans votre CV que vous avez déjà une expérience dans l'aliment. C'est important pour ce poste. Vous serez disponible à partir du 10 avril, 10 semaines prochaines.",
    "question": "Qu'est-ce que la candidature valorise lors de son entretien?",
    "options": {
      "A": "Son caractère.",
      "B": "Ses diplômes.",
      "C": "Son expérience.",
      "D": "Ses motivations."
    },
    "reponse": "A",
    "reponseTexte": "Son caractère.",
    "explication": "Une candidate passe un entretien pour un poste de vendeuse. Elle parle de ses qualités et de son expérience.",
    "indice": [
      "solidaire",
      "patiente",
      "relations",
      "poste"
    ]
  },
  {
    "id": 136,
    "niveau": "B1",
    "transcription": "10h30 à Gaspé, merci d'être fidèle à Radio du Monde. On commence par les titres de l'actualité de ce jeudi. Comme hier, le premier titre, c'est le tremblement de terre en Asie. La communauté internationale se mobilise pour aider la population. Le reportage de notre ambassadeur spécial dans 20 ans. À Ottawa, les premiers ministres des provinces évoqueront justement les conséquences du réchauffement climatique. Enfin, samedi soir auront lieu des concerts géants qui mutent les animaux dans cinq grandes villes du monde afin de récolter des fonds pour lutter contre les cancers.",
    "question": "Quel sera le premier sujet développé au cours de ce journal d'information radiophonique?",
    "options": {
      "A": "L'état de la recherche mondiale sur le cancer.",
      "B": "Une rencontre des ministres européens de l'écologie.",
      "C": "La lutte contre le réchauffement climatique en Asie.",
      "D": "Un reportage sur les lieux d'un tremblement de terre."
    },
    "reponse": "D",
    "reponseTexte": "Un reportage sur les lieux d'un tremblement de terre.",
    "explication": "Un journaliste radio annonce les sujets de l'actualité du jour. Le premier sujet est un tremblement de terre en Asie et la mobilisation internationale.",
    "indice": [
      "tremblement de terre",
      "reportage",
      "ambassadeur spécial"
    ]
  },
  {
    "id": 137,
    "niveau": "B1",
    "transcription": "Tu t'es renseigné sur la formation en informatique? Oui, j'ai appelé ce matin. Et alors, tu penses t'inscrire? Je ne sais pas encore. Le centre de formation ne propose pas de cours le soir. Sinon, les tarifs sont raisonnables. D'après ce que Julien m'a dit, le prof est très bien. C'est important. Oui. En plus, c'est à côté du bureau. Le test d'entrée a lieu la semaine prochaine. Il faut que je parle avec mon responsable. J'espère qu'il sera d'accord pour que je m'absente 4 heures par semaine.",
    "question": "Pour quelle raison le jeune homme décide-t-il à s'inscrire?",
    "options": {
      "A": "Les cours ne sont pas proposés le soir.",
      "B": "Il doit parler avec son responsable.",
      "C": "Le coût des cours est trop élevé.",
      "D": "Le professeur n'est pas compétent."
    },
    "reponse": "B",
    "reponseTexte": "Il doit parler avec son responsable.",
    "explication": "Un jeune homme discute avec quelqu'un de son intérêt pour une formation en informatique. Il explique les avantages et les obstacles à son inscription.",
    "indice": [
      "Centre de formation",
      "responsable",
      "absent",
      "semaine"
    ]
  },
  {
    "id": 138,
    "niveau": "B1",
    "transcription": "Votre association Génération Médiateur réunit en cette fin de semaine près de 150 jeunes médiateurs à la Grande Arche de la Défense. Ils sont collégiens, lycéens ou étudiants, mais qu'est-ce qu'un médiateur? À quoi sert-il dans un collège-lycée? C'est un jeune qui a suivi une formation particulière. Il est ensuite au service de ses camarades dans son établissement. Il peut intervenir si ses camarades le lui demandent, ou bien il propose lui-même son aide quand il y a des copains qui sont en conflit, qui connaissent une rivalité. Souvent, le médiateur va pouvoir intervenir avant que le conflit ne se mette à dégénérer et à se transformer en violence.",
    "question": "Quel est le sujet de cette interview?",
    "options": {
      "A": "La création d'un réseau de médiateurs.",
      "B": "Le financement nécessaire aux médiateurs.",
      "C": "Le partage d'expériences entre médiateurs.",
      "D": "Le rôle des médiateurs en milieu scolaire."
    },
    "reponse": "D",
    "reponseTexte": "Le rôle des médiateurs en milieu scolaire.",
    "explication": "Un représentant de l'association Génération Médiateur parle de l'événement qui réunit des jeunes médiateurs et explique leur rôle dans les collèges et lycées.",
    "indice": [
      "médiateur",
      "collège-lycée",
      "conflit",
      "violence"
    ]
  },
  {
    "id": 139,
    "niveau": "B1",
    "transcription": "Tu as vu les promotions pour Rome ? Une semaine pour 200 euros par personne dans un hôtel 4 étoiles en plein centre-ville. Et c'est gratuit pour les moins de 7 ans? Non, merci. Moi, je préfère la plage. On peut se baigner au moins avec les enfants. C'est vrai qu'ils sont encore un peu petits pour les visites historiques.",
    "question": "Pourquoi la femme refuse-t-elle d'aller à Rome?",
    "options": {
      "A": "C'est une destination inadaptée pour les plus jeunes.",
      "B": "Elle refuse de marcher des heures pour visiter la ville.",
      "C": "L'hôtel propose un niveau de confort insuffisant.",
      "D": "Le prix d'un séjour pour une famille est trop élevé."
    },
    "reponse": "A",
    "reponseTexte": "C'est une destination inadaptée pour les plus jeunes.",
    "explication": "Une femme discute d'une offre de voyage à Rome avec son partenaire. Elle explique pourquoi elle ne veut pas y aller avec ses enfants.",
    "indice": [
      "Rome",
      "enfants",
      "visites historiques",
      "plage"
    ]
  },
  {
    "id": 140,
    "niveau": "B1",
    "transcription": "Bonjour madame, auriez-vous quelques minutes pour répondre à un sondage ? Rapidement, oui. Parfait. Suivez-vous l'actualité? Oui, un peu, mais je n'ai pas toujours le temps. Vous lisez les journaux? Un peu, dans le métro. Mais je regarde plutôt les informations à la télévision. Et sur Internet? Oui, parfois des amis postent des actualités sur les réseaux sociaux. J'aime ceux qui parlent des grands réalisateurs de films, des acteurs, parce que je suis actrice, vous savez. Très bien, merci madame. Vos réponses nous seront très utiles.",
    "question": "Quel est le thème du sondage?",
    "options": {
      "A": "L'intérêt pour le cinéma.",
      "B": "Les activités de loisirs.",
      "C": "Les habitudes de transport.",
      "D": "L'utilisation des médias."
    },
    "reponse": "D",
    "reponseTexte": "L'utilisation des médias.",
    "explication": "Une personne interroge une femme sur ses habitudes de consommation des médias. La femme répond à des questions sur la façon dont elle suit l'actualité.",
    "indice": [
      "sondage",
      "actualité",
      "médias",
      "réseaux sociaux"
    ]
  },
  {
    "id": 141,
    "niveau": "B1",
    "transcription": "Salut Anne, c'est Julie. J'ai vu une annonce pour un appartement à Montpellier. C'est dans un immeuble moderne, au quatrième étage. Il est agréable et se trouve en plein centre-ville. Je veux le louer en juillet. Je serais ravie d'y passer les vacances avec toi. Tu y réfléchis? Rappelle-moi!",
    "question": "Quel est le projet d'été de Julie?",
    "options": {
      "A": "Aller chez Anne pendant ses congés.",
      "B": "Passer le mois de juillet à Montpellier.",
      "C": "Prêter son appartement à son amie.",
      "D": "Visiter des logements en centre-ville."
    },
    "reponse": "B",
    "reponseTexte": "Passer le mois de juillet à Montpellier.",
    "explication": "Julie appelle son amie Anne pour lui parler d'un appartement qu'elle a trouvé à Montpellier et lui propose de passer les vacances ensemble.",
    "indice": [
      "appartement",
      "Montpellier",
      "juillet",
      "vacances"
    ]
  },
  {
    "id": 142,
    "niveau": "B1",
    "transcription": "La banque recrute des jeunes en alternance issus de différents cursus. Nous allons recruter des jeunes bacheliers qui vont préparer pour deux ans un BTS en alternance. Nous pouvons recruter des jeunes ayant obtenu leur diplôme du baccalauréat plus deux années d'études supérieures qui se préparent à une naissance professionnelle par exemple. Nous pouvons enfin recruter des jeunes qui ont obtenu un baccalauréat plus trois années d'études supérieures et qui poursuivent un cursus à bac plus quatre années, voire bac plus cinq années.",
    "question": "Quelle est la condition à remplir pour faire une formation en alternance dans une banque?",
    "options": {
      "A": "Être inscrit dans une université.",
      "B": "Avoir le Baccalauréat.",
      "C": "Avoir terminé des études de master.",
      "D": "Avoir une expérience professionnelle préalable."
    },
    "reponse": "B",
    "reponseTexte": "Avoir le Baccalauréat.",
    "explication": "Une banque explique les différents profils de jeunes qu'elle recrute en alternance. Elle détaille les niveaux d'études requis pour chaque type de contrat.",
    "indice": [
      "alternance",
      "baccalauréat",
      "BTS",
      "recruter"
    ]
  },
  {
    "id": 143,
    "niveau": "B1",
    "transcription": "Centre d'affaires de la cité, bonjour. Bonjour madame, je voudrais louer une salle de conférence. Quels sont vos tarifs et services proposés? C'est ma collègue, Madame Martineau, qui s'occupe de la réservation des salles. Je vous le passe. Ne quittez pas. Merci, madame. Au revoir.",
    "question": "Pourquoi cet homme appelle-t-il?",
    "options": {
      "A": "Il veut obtenir des renseignements.",
      "B": "Il cherche à joindre la directrice.",
      "C": "Il désire visiter les locaux disponibles.",
      "D": "Il souhaite participer à un congrès."
    },
    "reponse": "A",
    "reponseTexte": "Il veut obtenir des renseignements.",
    "explication": "Un homme appelle un centre d'affaires pour louer une salle de conférence et demande les tarifs et services proposés. Il passe ensuite l'appel à sa collègue.",
    "indice": [
      "louer",
      "salle",
      "conférence",
      "tarifs",
      "services"
    ]
  },
  {
    "id": 144,
    "niveau": "B1",
    "transcription": "Alors, comment s'est passée cette première journée dans la vie active ? Plutôt bien. Les collègues ont été très accueillants. Et avec ton chef? Tu m'avais dit qu'il était un peu froid. Ben, en fait, il a été très sympa. Il m'a présenté à toute l'équipe, fait visiter les locaux et montré mon bureau, qui est très grand. Je n'en revenais pas. Bienvenue dans le monde professionnel, Alex. Tu n'es pas au bout de tes découvertes.",
    "question": "Quel bilan Alex tire-t-il de sa première journée de travail?",
    "options": {
      "A": "Il a été très agréablement surpris.",
      "B": "Il préfère attendre pour se prononcer.",
      "C": "Il aurait aimé se mettre déjà au travail.",
      "D": "Il a trouvé son supérieur peu disponible."
    },
    "reponse": "A",
    "reponseTexte": "Il a été très agréablement surpris.",
    "explication": "Alex raconte sa première journée de travail à son interlocuteur, en décrivant l'accueil chaleureux des collègues et la sympathie inattendue de son chef.",
    "indice": [
      "accueillants",
      "sympa",
      "découvertes"
    ]
  },
  {
    "id": 145,
    "niveau": "B1",
    "transcription": "Périne, tu viens au cinéma avec nous? Quand? Aujourd'hui? Ce soir, la séance est à 20 heures. Il passe une comédie romantique. Non, j'ai une réunion au bureau jusqu'à 18 heures. Et après, j'ai rendez-vous au restaurant avec Paul.",
    "question": "Qu'est-ce que Périne va faire ce soir?",
    "options": {
      "A": "Dîner avec un ami.",
      "B": "Regarder un film.",
      "C": "Rentrer chez elle.",
      "D": "Travailler tard."
    },
    "reponse": "A",
    "reponseTexte": "Dîner avec un ami.",
    "explication": "Périne refuse une invitation au cinéma car elle a des engagements professionnels et un rendez-vous au restaurant.",
    "indice": [
      "cinéma",
      "réunion",
      "restaurant",
      "Paul"
    ]
  },
  {
    "id": 146,
    "niveau": "B1",
    "transcription": "Bonjour, je voudrais réserver deux places pour le film Neige éternelle à 20h.",
    "question": "",
    "options": {
      "A": "À l'opéra.",
      "B": "Au cabaret.",
      "C": "Au cinéma.",
      "D": "Au théâtre."
    },
    "reponse": "C",
    "reponseTexte": "Au cinéma.",
    "explication": "Un client appelle pour réserver deux places au cinéma pour le film 'Neige éternelle' à 20h.",
    "indice": [
      "film",
      "places",
      "cinéma"
    ]
  },
  {
    "id": 147,
    "niveau": "B1",
    "transcription": "Amis auditeurs, voici une idée de lecture originale. Les éditions Paris Gramme ont publié un ouvrage intitulé « Paris et ses alentours au temps de Napoléon », histoire de nous faire découvrir les lieux qui ont compté au cours de cette période, mais aussi les principaux travaux, les constructions les plus emblématiques et les transformations les plus remarquables voulues par Napoléon. Car quand il n'est pas à la guerre, il nourrit de grands dessins pour la capitale. L'âme de triomphe, la colonne rondeau...",
    "question": "Quel est le sujet du livre?",
    "options": {
      "A": "La découverte des palais de l'empereur.",
      "B": "L'élargissement de Paris à ses environs.",
      "C": "Les lieux qui ont changé sous Napoléon.",
      "D": "Les traces des batailles napoléoniennes."
    },
    "reponse": "C",
    "reponseTexte": "Les lieux qui ont changé sous Napoléon.",
    "explication": "Un auditeur présente un livre sur les transformations de Paris et ses alentours pendant le règne de Napoléon. Il mentionne les lieux, les travaux et les constructions emblématiques de cette époque.",
    "indice": [
      "Paris",
      "Napoléon",
      "lieux",
      "changé",
      "transformations"
    ]
  },
  {
    "id": 148,
    "niveau": "B1",
    "transcription": "Audrey, nous allons grimper samedi prochain sur le site du Vert. Vous venez? Ah non, je n'ai jamais fait d'escalade et j'ai peur du vide. Rassurez-vous, tout est sécurisé. Il n'y a vraiment aucun risque. En plus, je serai là pour vous guider. D'accord, mais si j'ai peur, vous me ferez descendre. Entendu.",
    "question": "Pourquoi Audrey accepte-t-elle de faire de l'escalade?",
    "options": {
      "A": "Elle aime être en altitude.",
      "B": "Elle désire accompagner un ami.",
      "C": "Elle fait confiance à son guide.",
      "D": "Elle veut prendre des risques."
    },
    "reponse": "C",
    "reponseTexte": "Elle fait confiance à son guide.",
    "explication": "Audrey hésite à faire de l'escalade car elle a peur du vide. Son guide la rassure et lui promet de la faire descendre si elle a peur.",
    "indice": [
      "escalade",
      "guide",
      "peur",
      "vide"
    ]
  },
  {
    "id": 149,
    "niveau": "B1",
    "transcription": "Alors, que pensez-vous de la maison ? Elle me plaît. Elle correspond à ce que je recherche. Un lieu de vie clair et spacieux. Vous pourrez refaire la peinture si vous voulez. Elle est un peu vieille. Oui, peut-être. Pour l'instant, je préférerais changer les fenêtres. On entend beaucoup les voitures dehors. En effet, il y a un supermarché à l'angle de la rue. C'est embêtant. Je rêvais d'un endroit calme. Prenez le temps de réfléchir.",
    "question": "Pour quelles raisons la femme hésite-t-elle à louer la maison?",
    "options": {
      "A": "Elle a besoin de réparations urgentes.",
      "B": "Elle est localisée loin des commerces.",
      "C": "Elle est située dans une rue bruyante.",
      "D": "Elle possède un garage trop étroit."
    },
    "reponse": "C",
    "reponseTexte": "Elle est située dans une rue bruyante.",
    "explication": "Une femme visite une maison avec un agent immobilier. Elle aime la maison mais elle est bruyante à cause de la circulation.",
    "indice": [
      "rue",
      "bruyante",
      "voitures",
      "supermarché"
    ]
  },
  {
    "id": 150,
    "niveau": "B1",
    "transcription": "Alors, tu as trouvé un logement ? Oui, c'est tout petit. Il y a une seule pièce. C'est au deuxième étage d'un immeuble situé en plein centre-ville. En plus, la propriétaire est gentille. C'est ce qu'il me faut.",
    "question": "Dans quel type de logement habite cette personne?",
    "options": {
      "A": "Une chambre d'hôtel.",
      "B": "Une maison individuelle.",
      "C": "Un grand appartement.",
      "D": "Un studio en ville."
    },
    "reponse": "D",
    "reponseTexte": "Un studio en ville.",
    "explication": "Une personne parle de son nouveau logement en ville. Elle décrit l'endroit et sa propriétaire.",
    "indice": [
      "logement",
      "seule pièce",
      "deuxième étage",
      "centre-ville"
    ]
  },
  {
    "id": 151,
    "niveau": "B1",
    "transcription": "Puis-je déposer mon manteau ? Certainement, madame. C'est à votre gauche. Cette année, c'est gratuit pour les abonnés au théâtre. Oh, voilà une bonne nouvelle pour débuter la saison. Je vous souhaite une agréable soirée.",
    "question": "Que souhaite faire la femme?",
    "options": {
      "A": "Féliciter les acteurs dans leur loge.",
      "B": "Remettre un vêtement au vestiaire.",
      "C": "Retourner à la salle de spectacle.",
      "D": "S'informer sur la programmation."
    },
    "reponse": "B",
    "reponseTexte": "Remettre un vêtement au vestiaire.",
    "explication": "Une femme demande au vestiaire si elle peut déposer son manteau. L'employé lui indique où le faire et mentionne que c'est gratuit pour les abonnés.",
    "indice": [
      "manteau",
      "gratuit",
      "abonnés",
      "théâtre"
    ]
  },
  {
    "id": 152,
    "niveau": "B1",
    "transcription": "L'anti-café, l'objet clé, c'est l'horloge. Ici, on ne paye pas sa consommation, mais le temps qu'on y passe. 4 euros la première heure, puis 2 euros chaque heure supplémentaire, avec un maximum de 14 euros la journée. Le tout avec des consommations à volonté. Objectif, être comme à la maison, hors de chez soi. Un café, en général, c'est l'espace qui ressemble à votre salon. Ici, vous avez comme chez soi. Et la seule chose que vous payez chez nous, c'est le temps. Après, vous avez l'accès à tout ce qu'on propose. Le buffet, c'est les boissons chaudes et froides, c'est les choses pour travailler, comme l'imprimante, le scanner, le projecteur. Donc, on a vraiment essayé de créer l'espace qui ressemblera à votre propre appartement, mais qui soit un peu plus grand, où vous pouvez voir vos amis.",
    "question": "Qu'est-ce qu'on peut faire à l'anti-café?",
    "options": {
      "A": "Échanger des articles de seconde main.",
      "B": "Louer du matériel de bureautique.",
      "C": "Organiser des réunions professionnelles.",
      "D": "Profiter d'une atmosphère familière."
    },
    "reponse": "D",
    "reponseTexte": "Profiter d'une atmosphère familière.",
    "explication": "Une personne explique le concept d'un anti-café où l'on paye pour le temps passé et non pour les consommations. Elle décrit les services et l'ambiance de l'endroit.",
    "indice": [
      "anti-café",
      "temps",
      "consommations",
      "comme à la maison"
    ]
  },
  {
    "id": 153,
    "niveau": "B1",
    "transcription": "Tiens, salut Agnès, comment vas-tu ? Oh, très très bien. Je viens d'apprendre que j'ai gagné un séjour en Grèce. Oh, quelle chance! Comment as-tu fait? Eh bien, j'ai rempli un questionnaire sur le site internet d'une agence de voyage. Il y a eu un tirage au sort et j'ai été sélectionné parmi mille personnes. Tu pars seul? Non, avec Thierry, bien sûr. Ça nous rappellera notre voyage de noces. Alors profitez-en bien. On se voit à ton retour.",
    "question": "Qu'est-ce que la femme annonce à son ami?",
    "options": {
      "A": "Elle part en vacances en Grèce.",
      "B": "Elle part en lune de miel en Grèce.",
      "C": "Elle revient d'un court séjour en Grèce.",
      "D": "Elle vient d'obtenir un emploi en Grèce."
    },
    "reponse": "A",
    "reponseTexte": "Elle part en vacances en Grèce.",
    "explication": "Une femme annonce à son ami qu'elle a gagné un séjour en Grèce avec son mari. Ils partent ensemble.",
    "indice": [
      "séjour",
      "Grèce",
      "tirage au sort",
      "vacances"
    ]
  },
  {
    "id": 154,
    "niveau": "B1",
    "transcription": "J'ai adoré cette expo. C'était fantastique, non? Oui, sauf que comme tu n'avais pas acheté les billets en avance, on a dû faire la queue pendant trois heures pour entrer. Ça en valait la peine. Bon, il y avait tellement de monde. Je ne voyais pas les œuvres. Je n'ai pas profité de la visite. Tu as pris le catalogue, au moins? Euh, non, je ne l'ai pas trouvé.",
    "question": "Que critique cet homme?",
    "options": {
      "A": "La qualité du catalogue.",
      "B": "Le prix des entrées.",
      "C": "Les conditions de visite.",
      "D": "Les œuvres présentées."
    },
    "reponse": "C",
    "reponseTexte": "Les conditions de visite.",
    "explication": "Deux personnes discutent d'une exposition qu'ils ont visitée ensemble. L'un critique les conditions de la visite.",
    "indice": [
      "queue",
      "trois heures",
      "tellement de monde",
      "profité"
    ]
  },
  {
    "id": 155,
    "niveau": "B1",
    "transcription": "Je m'appelle Pascale. Ça fait quatre ans que je travaille dans une école maternelle. Je suis chargée d'aider les enseignants dans la classe. Alors, le plus dans le métier pour moi, c'est les relations avec les enseignants et les enfants. Ça, on a vraiment beaucoup de chance à ce niveau-là, surtout avec les enfants. Les côtés négatifs du métier, je dirais peut-être les journées un peu longues dans le bruit, parce que les enfants sont quand même en général bruyants.",
    "question": "Qu'apprécie Pascal dans son métier?",
    "options": {
      "A": "La répartition des horaires.",
      "B": "Le contact avec les élèves.",
      "C": "Les activités pédagogiques.",
      "D": "L'organisation des leçons."
    },
    "reponse": "B",
    "reponseTexte": "Le contact avec les élèves.",
    "explication": "Qu'est-ce que Pascale apprécie le plus dans son métier ? Attention aux distractions comme les horaires ou les activités.",
    "indice": [
      "enseignants",
      "enfants",
      "relations",
      "métier"
    ]
  },
  {
    "id": 156,
    "niveau": "B1",
    "transcription": "Trouver des places pour son rappeur préféré, c'était presque inséparé pour Johan. Alors il s'est laissé embarquer par le premier site trouvé sur son moteur de recherche. On vous dit, attention, ce sont les derniers billets disponibles. J'en avais pour deux places pour à peu près 350 euros. J'ai appris après que finalement c'était 70 euros la place. Impossible d'annuler son achat, il s'estime arnaqué et réussit finalement à se faire rembourser par sa banque.",
    "question": "Qu'explique ce jeune homme?",
    "options": {
      "A": "Il a été déçu par le concert de rap.",
      "B": "Il a payé ses billets trop cher.",
      "C": "La banque a refusé son règlement.",
      "D": "Le spectacle a été annulé."
    },
    "reponse": "B",
    "reponseTexte": "Il a payé ses billets trop cher.",
    "explication": "Un jeune homme raconte comment il a acheté des billets de concert trop chers sur un site en ligne et a réussi à se faire rembourser par sa banque.",
    "indice": [
      "arnaqué",
      "remboursé",
      "banque",
      "billets",
      "trop cher"
    ]
  },
  {
    "id": 157,
    "niveau": "B1",
    "transcription": "Allô ? Bonjour, je vous appelle pour savoir quand je pourrais récupérer ma voiture, une Peugeot verte. Elle est chez vous depuis une semaine. Un instant, s'il vous plaît, madame. Je me renseigne. La pièce qui manque pour la boîte de vitesse devrait être livrée ce matin. La réparation devrait être terminée en fin d'après-midi. Pourriez-vous nous rappeler vers 17h? Volontiers. Pourriez-vous indiquer à ce moment-là la somme à payer? A tout à l'heure.",
    "question": "Que veut cet homme?",
    "options": {
      "A": "Demander une facture détaillée.",
      "B": "Faire repeindre son automobile.",
      "C": "Prendre rendez-vous au garage.",
      "D": "Savoir si son véhicule est prêt."
    },
    "reponse": "D",
    "reponseTexte": "Savoir si son véhicule est prêt.",
    "explication": "Un client appelle le garage pour savoir quand il pourra récupérer sa voiture. La réparation est presque terminée et il doit rappeler plus tard pour connaître le montant à payer.",
    "indice": [
      "voiture",
      "Peugeot",
      "garage",
      "réparation",
      "récupérer"
    ]
  },
  {
    "id": 158,
    "niveau": "B1",
    "transcription": "François, souvenez-vous que l'informaticien passera cet après-midi au service comptabilité. Oui, je sais. Pour les deux ordinateurs en panne. Oui, appelez la comptable pour vérifier qu'elle a bien noté le rendez-vous. Elle est en formation jusqu'à la fin de la semaine, sur le nouveau logiciel de comptabilité, justement. Elle revient lundi. Demandez à notre stagiaire d'être présent alors. Je m'en occupe tout de suite.",
    "question": "Pourquoi l'informaticien vient-il?",
    "options": {
      "A": "Pour contrôler l'état des machines en service.",
      "B": "Pour donner une formation aux employés.",
      "C": "Pour mettre à jour toutes les applications.",
      "D": "Pour réparer des équipements informatiques."
    },
    "reponse": "D",
    "reponseTexte": "Pour réparer des équipements informatiques.",
    "explication": "François rappelle à un collègue que l'informaticien viendra réparer deux ordinateurs en panne. La comptable est en formation et le stagiaire doit être présent.",
    "indice": [
      "informaticien",
      "ordinateurs",
      "panne",
      "comptabilité"
    ]
  },
  {
    "id": 159,
    "niveau": "B1",
    "transcription": "Tout le monde rêve de faire de la proximité, d'être proche des auditeurs. Alors quand on est une radio associative locale, on a plus de facilité. Vous, chaque vendredi, vous ouvrez le local à 13h, on peut venir avec son panier et on partage en commun le repas. Tout à fait. Et là, pour la fin de l'année, on a donc lancé une invitation à tous ceux qui voudraient pour venir manger avec nous et réaliser une émission collective de fin d'année, un petit peu festive.",
    "question": "Que propose chaque semaine cette radio à ses auditeurs?",
    "options": {
      "A": "De déjeuner ensemble.",
      "B": "De faire une soirée.",
      "C": "De participer à un jeu.",
      "D": "De rencontrer un invité."
    },
    "reponse": "A",
    "reponseTexte": "De déjeuner ensemble.",
    "explication": "Un animateur radio parle des activités d'une radio associative locale qui organise des repas collectifs le vendredi et une émission festive pour la fin de l'année.",
    "indice": [
      "radio associative",
      "local",
      "panier",
      "repas",
      "collective"
    ]
  },
  {
    "id": 160,
    "niveau": "B1",
    "transcription": "Allô Paul, tu peux m'aider ? Qu'est-ce qui t'arrive Lydie? J'ai laissé mes clés de voiture dans la salle de conférence et elle est occupée jusqu'à 20h. Je peux te ramener si tu veux. Oh merci, ça m'arrange, je dois être chez moi à 18h30. Demain je viendrai en transport.",
    "question": "Quel est le problème de Lydie?",
    "options": {
      "A": "Elle a oublié un objet important.",
      "B": "Elle a raté son bus ce matin.",
      "C": "Elle doit s'absenter du bureau.",
      "D": "Elle est en retard à une réunion."
    },
    "reponse": "A",
    "reponseTexte": "Elle a oublié un objet important.",
    "explication": "Lydie appelle Paul pour l'aider car elle a oublié ses clés de voiture dans une salle de conférence occupée jusqu'à 20h.",
    "indice": [
      "clés",
      "voiture",
      "salle",
      "conférence"
    ]
  },
  {
    "id": 161,
    "niveau": "B1",
    "transcription": "Alors, tu as aimé ? Bof, je n'ai pas très bien compris la fin. Ah oui? Mais enfin, le héros quitte secrètement la France. Et il part où? Je ne sais pas, en Espagne. Il est espagnol. Alors pourquoi le voit-on rentrer dans cette maison? Pour aller chercher un faux passeport. Tu t'es endormi pendant la séance, toi, non?",
    "question": "De quoi parlent ces deux personnes?",
    "options": {
      "A": "De l'actualité européenne.",
      "B": "Du dernier film qu'elles ont vu.",
      "C": "D'un trafic de documents.",
      "D": "D'un vieil ami commun."
    },
    "reponse": "B",
    "reponseTexte": "Du dernier film qu'elles ont vu.",
    "explication": "Deux amis discutent d'un film qu'ils ont vu ensemble. L'un des deux n'a pas bien suivi la fin.",
    "indice": [
      "héros",
      "Espagne",
      "faux passeport"
    ]
  },
  {
    "id": 162,
    "niveau": "B1",
    "transcription": "Bonjour, docteur. Ah, bonjour, madame Chabert. Qu'est-ce qui vous amène? J'ai encore mal aux genoux et je me sens de plus en plus fatiguée. C'est peut-être à cause de l'hiver. Vous m'avez pourtant l'air en pleine forme. Pour la fatigue, je vais vous prescrire des vitamines. Et pensez à varier vos repas. Pour votre genou, nous allons regarder cela de plus près. Suivez-moi.",
    "question": "Que conseille le médecin à Mme Chabert?",
    "options": {
      "A": "Dormir plus longtemps.",
      "B": "Faire un bilan de santé.",
      "C": "Manger équilibré.",
      "D": "Pratiquer un sport."
    },
    "reponse": "C",
    "reponseTexte": "Manger équilibré.",
    "explication": "Un médecin parle à une patiente qui se plaint de fatigue et de douleurs aux genoux. Il lui prescrit des vitamines et lui conseille de varier ses repas.",
    "indice": [
      "vitamines",
      "varier",
      "repas",
      "genou"
    ]
  },
  {
    "id": 163,
    "niveau": "B1",
    "transcription": "Mathieu, regarde ce pull. Il est parfait pour Johanna, tu ne trouves pas? Mais enfin, elle n'aime pas le rose. Je préfère lui prendre autre chose. Un livre ou un film. Elle adore les histoires d'amour. C'est vrai. Elle lit toujours en mangeant des pâtisseries.",
    "question": "Quel cadeau est-ce que Mathieu va choisir?",
    "options": {
      "A": "Un bouquet.",
      "B": "Un gâteau.",
      "C": "Un roman.",
      "D": "Un vêtement."
    },
    "reponse": "C",
    "reponseTexte": "Un roman.",
    "explication": "Mathieu et une personne discutent des cadeaux possibles pour Johanna. Ils évoquent ses goûts et préférences.",
    "indice": [
      "cadeau",
      "Johanna",
      "histoire d'amour",
      "roman"
    ]
  },
  {
    "id": 164,
    "niveau": "B1",
    "transcription": "Allô, bonjour M. Didier à l'appareil. Je téléphone au sujet de la livraison des articles dont la référence est 433JS. S'il n'est pas trop tard, j'aimerais ajouter deux ordinateurs supplémentaires. Il n'y a aucun problème, ce sera fait. Pourquoi M.",
    "question": "Didier appelle-t-il?",
    "options": {
      "A": "Pour annuler un achat.",
      "B": "Pour modifier une commande.",
      "C": "Pour réclamer un paquet.",
      "D": "Pour retourner un colis."
    },
    "reponse": "B",
    "reponseTexte": "Pour modifier une commande.",
    "explication": "Monsieur Didier téléphone pour ajouter deux ordinateurs supplémentaires à une commande d'articles référencés 433JS.",
    "indice": [
      "livraison",
      "articles",
      "ajouter",
      "ordinateurs"
    ]
  },
  {
    "id": 165,
    "niveau": "B1",
    "transcription": "Qu'est-ce qui t'arrive ? Tu as l'air triste. David ne m'a pas téléphoné pour mon anniversaire. J'ai attendu son appel toute la journée. Oh, il va peut-être le faire ce soir. Ne t'inquiète pas.",
    "question": "Qu'arrive-t-il à la femme?",
    "options": {
      "A": "Elle a cassé son téléphone.",
      "B": "Elle a raté un appel important.",
      "C": "Elle n'a pas été invitée à un anniversaire.",
      "D": "Elle n'a pas eu l'appel espéré."
    },
    "reponse": "D",
    "reponseTexte": "Elle n'a pas eu l'appel espéré.",
    "explication": "Une femme explique à son interlocuteur qu'elle est triste car elle a attendu un appel d'anniversaire de David qui n'est pas venu.",
    "indice": [
      "appel",
      "anniversaire",
      "attendu"
    ]
  },
  {
    "id": 166,
    "niveau": "B1",
    "transcription": "Mon rôle à moi ? Je suis agent de recrutement. En fait, je suis chargé du projet de démarchage en francisation. Ce projet vise à contacter les immigrants qui sont installés ici au Québec depuis trois ans ou plus et qui ont besoin de connaître la langue pour faciliter leur vie quotidienne. Des programmes de cours de français existent déjà, mais nous, notre rôle, c'est de contacter les personnes isolées. Par exemple, les femmes, qui à cause des charges familiales, une grossesse ou les enfants à garder, n'ont pas eu l'occasion d'apprendre le français dès leur arrivée.",
    "question": "Quel est l'objectif de ce programme?",
    "options": {
      "A": "Encourager la mobilité des étudiants.",
      "B": "Favoriser l'intégration des étrangers.",
      "C": "Mettre en relation des francophones.",
      "D": "Offrir des emplois aux mères de famille."
    },
    "reponse": "B",
    "reponseTexte": "Favoriser l'intégration des étrangers.",
    "explication": "Un agent de recrutement explique son rôle dans un projet visant à contacter des immigrants installés au Québec depuis trois ans ou plus pour les inscrire à des cours de français.",
    "indice": [
      "immigrants",
      "francisation",
      "isolées",
      "femmes",
      "charges familiales"
    ]
  },
  {
    "id": 167,
    "niveau": "B1",
    "transcription": "Martine, est-ce qu'il y a eu des appels pour moi ? Le fax est en panne. J'ai appelé le réparateur. Madame Marcos est passée prendre le dossier Mali. Monsieur Dupont a téléphoné et veut vous voir. Vous avez rendez-vous avec M.",
    "question": "Posay.",
    "options": {
      "A": "",
      "B": "",
      "C": "",
      "D": ""
    },
    "reponse": "C",
    "reponseTexte": "Monsieur Dupont a téléphoné et veut vous voir.",
    "explication": "Un employé demande à la réceptionniste s'il a reçu des messages. Elle lui donne les informations sur les appels et les visites.",
    "indice": [
      "appels",
      "réparateur",
      "dossier",
      "Mali",
      "téléphoné"
    ]
  },
  {
    "id": 168,
    "niveau": "B1",
    "transcription": "Est-ce que vous pouvez nous rappeler en quel cas on a situation? Oui, c'est un fait divers heureusement très rare. Un étudiant de l'Université d'Ottawa, originaire du Niger, souhaite que sa femme vienne vivre avec lui. Et il se bat avec l'administration pour qu'elle puisse entrer dans le pays. Mais où vit sa femme? Au Niger. Le couple est actuellement séparé en raison d'erreurs administratives.",
    "question": "Qu'espère cet étudiant?",
    "options": {
      "A": "Il espère obtenir une bourse d'études.",
      "B": "Il espère que sa femme pourra venir au Canada.",
      "C": "Il espère déménager au Niger.",
      "D": "Il espère que sa femme pourra étudier au Canada."
    },
    "reponse": "B",
    "reponseTexte": "Il espère que sa femme pourra venir au Canada.",
    "explication": "Un étudiant nigérien vivant au Canada explique qu'il souhaite que sa femme puisse le rejoindre mais ils sont séparés à cause d'erreurs administratives.",
    "indice": [
      "Étudiant",
      "Niger",
      "Canada",
      "administration",
      "séparé"
    ]
  },
  {
    "id": 169,
    "niveau": "B1",
    "transcription": "Les passagers du vol Air France 275 sont invités à se présenter porte 2C pour un embarquement immédiat.",
    "question": "Qu'est-ce que le message annonce?",
    "options": {
      "A": "L'arrivée d'un vol.",
      "B": "Le retard d'un vol.",
      "C": "Le départ d'un vol.",
      "D": "L'annulation d'un vol."
    },
    "reponse": "C",
    "reponseTexte": "Le départ d'un vol.",
    "explication": "Un message annonce aux passagers d'un vol Air France qu'ils doivent se rendre à une porte d'embarquement pour partir immédiatement.",
    "indice": [
      "passagers",
      "Air France",
      "embarquement",
      "immédiat"
    ]
  },
  {
    "id": 170,
    "niveau": "B1",
    "transcription": "Salut Pauline ! Salut Clément! Ça y est, j'ai lancé mon projet avec mon équipe. Ah oui? C'est le boîtier connecté pour trier les déchets? Oui, c'est ça. On le fixe à côté de ses poubelles et après c'est très simple. On scanne le code des emballages avant de les jeter. Et le boîtier indique dans quelle poubelle il faut les jeter en fonction des règles de la ville où on réside. C'est génial!",
    "question": "De quoi parlent ces deux personnes?",
    "options": {
      "A": "D'un nouveau produit.",
      "B": "De collègues de travail.",
      "C": "De leur habitation.",
      "D": "De leurs derniers achats."
    },
    "reponse": "A",
    "reponseTexte": "D'un nouveau produit.",
    "explication": "Deux personnes discutent d'un projet qu'elles ont lancé ensemble. Elles parlent d'un boîtier connecté pour aider à trier les déchets.",
    "indice": [
      "boîtier connecté",
      "trier les déchets",
      "scanne le code"
    ]
  },
  {
    "id": 171,
    "niveau": "B1",
    "transcription": "Bonjour, je vous apporte ce lecteur MP3. Il fait un bruit bizarre. Oui. Vous avez la facture et le certificat de garantie? Voilà. Merci. Votre lecteur sera prêt dans dix jours. Ah, vous avez vu que la garantie a expiré il y a une semaine? Vraiment? Oui. Donc les réparations seront à vos frais. Quoi? À une semaine de prêt? Vous ne pouvez rien faire? Je regrette, monsieur. C'est la même chose pour tout le monde. C'est incroyable. Je vais vous faire une mauvaise publicité sur Internet, croyez-moi.",
    "question": "Pourquoi ce client est-il mécontent?",
    "options": {
      "A": "La commande est arrivée en retard.",
      "B": "L'attente en caisse est longue.",
      "C": "Le service après-vente est payant.",
      "D": "Les techniciens sont incompétents."
    },
    "reponse": "C",
    "reponseTexte": "Le service après-vente est payant.",
    "explication": "Un client apporte son lecteur MP3 en réparation et découvre que la garantie a expiré. Il doit payer les réparations et est mécontent de la durée d'attente.",
    "indice": [
      "lecteur MP3",
      "garantie",
      "réparations",
      "frais"
    ]
  },
  {
    "id": 172,
    "niveau": "B1",
    "transcription": "Madame ? Bonjour, monsieur. On m'a volé mon sac hier dans le métro à la station Mont-Royal. Quelles sont les démarches à suivre pour obtenir un autre passeport rapidement? Eh bien, tout d'abord, nous allons enregistrer votre déclaration et ensuite, il vous faudra aller à l'ambassade de France de Montréal pour leur signaler. D'accord. Merci, monsieur.",
    "question": "Quel est le problème de cette femme?",
    "options": {
      "A": "Elle a été victime d'un vol.",
      "B": "Elle a oublié son passeport.",
      "C": "Elle a perdu son sac à main.",
      "D": "Elle est tombée dans le métro."
    },
    "reponse": "A",
    "reponseTexte": "Elle a été victime d'un vol.",
    "explication": "Une femme signale qu'on lui a volé son sac dans le métro à la station Mont-Royal et demande les démarches pour obtenir un nouveau passeport rapidement.",
    "indice": [
      "volé",
      "sac",
      "métro",
      "passeport",
      "ambassade"
    ]
  },
  {
    "id": 173,
    "niveau": "B1",
    "transcription": "Assistance mondiale, bonjour. Bonjour, monsieur. Je suis monsieur André Berton. Je vous appelle d'Adélaïde, en Australie. Je ne retrouve plus ma carte bancaire. Qu'est-ce que je dois faire? Vous téléphonez tout de suite à votre banque en France et vous faites opposition. Vous nous fixez la déclaration de perte et nous allons vous envoyer 1000 dollars en chèque de voyage à Adélaïde en poste restante. Vous les retirerez avec une pièce d'identité.",
    "question": "Que doit faire M. Berton?",
    "options": {
      "A": "Rentrer en France.",
      "B": "Remplir un dossier.",
      "C": "Se rendre à l'ambassade.",
      "D": "Prendre contact avec sa banque."
    },
    "reponse": "D",
    "reponseTexte": "Prendre contact avec sa banque.",
    "explication": "M. Berton appelle une assistance mondiale depuis l'Australie pour signaler la perte de sa carte bancaire et demande ce qu'il doit faire.",
    "indice": [
      "carte bancaire",
      "opposition",
      "déclaration de perte",
      "chèque de voyage"
    ]
  },
  {
    "id": 174,
    "niveau": "B1",
    "transcription": "Il est 7h45 et les automobilistes sont déjà très nombreux dans les rues de Dieppe. Comme à tous les matins, José Turgeon-Roy quitte la maison pour le travail. Un court trajet de 8 kilomètres. Pourtant, pour la résidente de Dieppe, une course folle va débuter. Ici, il n'y a pas de prix à gagner. Seulement l'espoir d'arriver à temps au travail 45 minutes plus tard.",
    "question": "Quel est le problème évoqué ici?",
    "options": {
      "A": "Un climat trop froid.",
      "B": "Un tarif trop cher.",
      "C": "Un trafic trop dense.",
      "D": "Un travail trop dur."
    },
    "reponse": "C",
    "reponseTexte": "Un trafic trop dense.",
    "explication": "Un automobiliste quitte sa maison pour aller travailler mais il y a beaucoup de circulation. Il doit parcourir 8 kilomètres mais il n'est pas sûr d'arriver à l'heure.",
    "indice": [
      "automobilistes",
      "trafic",
      "trop dense"
    ]
  },
  {
    "id": 175,
    "niveau": "B1",
    "transcription": "Alors, madame, que pensez-vous de cet appartement avec vue sur le parc ? Hum, spacieux, mais trop sombre à mon goût. J'en ai un autre, plus lumineux, mais plus cher. Voulez-vous le visiter? Oui, bien sûr. Le prix m'importe peu.",
    "question": "Qu'est-ce qu'on apprend sur la cliente?",
    "options": {
      "A": "Elle cherche un grand logement.",
      "B": "Elle doit respecter un budget.",
      "C": "Elle souhaite avoir une belle vue.",
      "D": "Elle va voir un autre appartement."
    },
    "reponse": "D",
    "reponseTexte": "Elle va voir un autre appartement.",
    "explication": "Un agent immobilier montre un appartement à une cliente. Elle le trouve trop sombre et il lui propose un autre appartement plus lumineux mais plus cher.",
    "indice": [
      "appartement",
      "lumineux",
      "visiter"
    ]
  },
  {
    "id": 176,
    "niveau": "B1",
    "transcription": "Bonjour chérie, je vais rentrer tard ce soir. Ne m'attends pas pour dîner, la directrice veut me parler. Je lui ai demandé si on pouvait se voir demain, mais ça n'a pas été possible. Je te raconterai tout ça. Je suis vraiment désolée. Je t'embrasse.",
    "question": "Pour quelle raison la femme laisse-t-elle un message à son mari?",
    "options": {
      "A": "Pour lui annoncer qu'elle sort avec des amis.",
      "B": "Pour lui demander de préparer le repas.",
      "C": "Pour lui dire qu'elle est retenue au bureau.",
      "D": "Pour lui résumer sa journée de travail."
    },
    "reponse": "C",
    "reponseTexte": "Pour lui dire qu'elle est retenue au bureau.",
    "explication": "Une femme appelle son mari pour lui dire qu'elle va rentrer tard à cause d'une réunion avec sa directrice.",
    "indice": [
      "rentrer tard",
      "directrice",
      "retard"
    ]
  },
  {
    "id": 177,
    "niveau": "B1",
    "transcription": "Je voudrais des informations sur le carnaval d'hiver, s'il vous plaît. Oui, madame. Que proposez-vous pour de jeunes enfants? Il y a des animations, des défilés, un concours de sculpture sur neige. En réalité, beaucoup de choses à faire. D'accord. Voici la brochure avec toutes les informations, mais il faut s'inscrire vite à certaines activités. Les places sont limitées et il y a déjà beaucoup de participants.",
    "question": "Quel conseil donne-t-on à cette personne?",
    "options": {
      "A": "D'acheter le programme.",
      "B": "De réserver rapidement.",
      "C": "De venir en famille.",
      "D": "D'être déguisé."
    },
    "reponse": "B",
    "reponseTexte": "De réserver rapidement.",
    "explication": "On demande de comprendre quel conseil est donné pour participer aux activités du carnaval. Le piège est de ne pas repérer les mots qui indiquent l'urgence.",
    "indice": [
      "inscrire",
      "limitées",
      "participants"
    ]
  },
  {
    "id": 178,
    "niveau": "B1",
    "transcription": "Laurent et toi, vous avez dîné en ville hier soir ? Ben non, notre restaurant préféré était fermé et il n'y avait plus de place à la pizzeria. Qu'est-ce que vous avez fait? On est rentrés chez nous. Laurent a préparé le repas. C'était excellent. Tu as de la chance d'avoir un chef à la maison.",
    "question": "",
    "options": {
      "A": "Il a un restaurant.",
      "B": "Il déteste les pizzas.",
      "C": "Il préfère rester chez lui.",
      "D": "Il sait bien faire la cuisine."
    },
    "reponse": "D",
    "reponseTexte": "Il sait bien faire la cuisine.",
    "explication": "Laurent et son interlocuteur ont dîné à la maison car leur restaurant préféré était fermé et la pizzeria était complète. Laurent a cuisiné et le repas était délicieux.",
    "indice": [
      "restaurant",
      "pizzeria",
      "préparé",
      "excellent"
    ]
  },
  {
    "id": 179,
    "niveau": "B1",
    "transcription": "Oh, j'ai commencé dans l'entreprise, cela fait quand même 30 ans, à l'époque où on ne s'embarrassait pas avec le recrutement. Je me souviens, dès le soir où j'ai fini ma formation, mon patron de stage m'a proposé de rester, et pour mes copains de formation, pareil. Ah, c'est sûr, on n'embauche plus si facilement. Maintenant, je suis un ancien. Je dois recruter les jeunes qui arrivent et je trouve ça incroyable. Ils accumulent les diplômes, ont fait plein de stages, sont 50 à postuler. Cela ne doit pas être drôle.",
    "question": "Que constate cet employé?",
    "options": {
      "A": "Les conditions de recrutement sont plus difficiles aujourd'hui.",
      "B": "Les étudiants ignorent le fonctionnement de l'entreprise.",
      "C": "Les jeunes étaient préparés plus sérieusement dans le passé.",
      "D": "Les patrons actuels ont un degré d'exigence trop élevé."
    },
    "reponse": "A",
    "reponseTexte": "Les conditions de recrutement sont plus difficiles aujourd'hui.",
    "explication": "Un employé parle de son expérience de recrutement il y a 30 ans où les choses étaient plus simples et compare cela à la situation actuelle où les jeunes doivent accumuler des diplômes et faire plusieurs stages pour postuler.",
    "indice": [
      "recrutement",
      "stage",
      "diplômes",
      "postuler"
    ]
  },
  {
    "id": 180,
    "niveau": "B1",
    "transcription": "Et ça, qu'est-ce que ça dit de notre société, cette dévalorisation des diplômes ? C'est un message terrible. À une époque où on ne jure que par la société de la connaissance et l'éducation de masse, notre économie s'est mal adaptée aux nouveaux enjeux. En effet, les opportunités offertes par les entreprises ne sont pas suffisantes pour absorber les nouvelles cuvées de master ou de doctorant. Trop de diplômés, pas assez de jobs d'envergure. La langueur qui frappe la croissance de notre pays depuis des années se traduit en fin de compte par des emplois perdus, des salaires moins généreux. Résultat, c'est la course à l'échalote. Pour qu'un diplôme ait de la valeur, il faut qu'il soit encore plus prestigieux.",
    "question": "Que déplore cette intervenante?",
    "options": {
      "A": "L'inadéquation entre l'université et le monde du travail.",
      "B": "La baisse de qualité des formations professionnelles.",
      "C": "La compétition pour entrer dans les grandes écoles.",
      "D": "Le coût de l'inscription dans l'enseignement supérieur."
    },
    "reponse": "A",
    "reponseTexte": "L'inadéquation entre l'université et le monde du travail.",
    "explication": "Une intervenante parle de la dévalorisation des diplômes et du manque d'emplois prestigieux pour les diplômés. Elle critique l'adaptation économique aux nouveaux enjeux éducatifs.",
    "indice": [
      "diplômes",
      "économie",
      "emplois",
      "master"
    ]
  },
  {
    "id": 181,
    "niveau": "B1",
    "transcription": "Ça y est, j'ai trouvé un stage pour cet été dans une société de transport. C'est assez loin de chez moi, mais je suis super contente. Tu seras payée? Pas beaucoup, mais ce sera une bonne expérience. Et tu vas faire quoi? Des statistiques sur la circulation des bus. Toi qui adores les chiffres, c'est super. Comment tu as trouvé ce stage? Par un ami de mon père. Il travaille là-bas.",
    "question": "Pourquoi ce stage intéresse-t-il la jeune femme?",
    "options": {
      "A": "Il correspond à ses attentes.",
      "B": "Il dure six mois au total.",
      "C": "Il est proche de son domicile.",
      "D": "Il offre un très bon salaire."
    },
    "reponse": "A",
    "reponseTexte": "Il correspond à ses attentes.",
    "explication": "Une jeune femme parle de son stage d'été dans une société de transport. Elle explique qu'elle fera des statistiques sur la circulation des bus et qu'elle a trouvé ce stage grâce à un ami de son père.",
    "indice": [
      "stage",
      "expérience",
      "chiffres",
      "société de transport"
    ]
  },
  {
    "id": 182,
    "niveau": "B1",
    "transcription": "Tu voudrais aller à l'exposition Matisse au musée d'Orsay demain soir ? Quelle bonne idée! Mais après le travail, je voulais aller en ville pour faire des courses. Tu ne peux pas aller faire jeudi? Mais si! Alors d'accord pour l'exposition. Et après, on dînera chez moi.",
    "question": "Que vont faire ses amis le mercredi soir?",
    "options": {
      "A": "Dîner au restaurant.",
      "B": "Faire des courses.",
      "C": "Travailler tard.",
      "D": "Voir une exposition."
    },
    "reponse": "D",
    "reponseTexte": "Voir une exposition.",
    "explication": "Deux amis discutent de leurs plans pour le mercredi soir. L'un propose d'aller à l'exposition Matisse au musée d'Orsay, mais l'autre veut d'abord faire des courses après le travail.",
    "indice": [
      "exposition",
      "Matisse",
      "musée d'Orsay",
      "mercredi"
    ]
  },
  {
    "id": 183,
    "niveau": "B1",
    "transcription": "Première marche sur le sol ici. Qu'est-ce qui s'est passé dans votre tête? Quel état d'esprit? Quand je suis arrivé, je me demandais où j'allais. Le Canada, j'avais étudié ça à mon lycée, mais tout ce que je savais, que j'ai retenu du Canada, c'est que le Canada a des hivers longs et froids, et des étés courts et chauds. C'est tout ce que vous savez? C'est tout ce que je savais du Canada. Vous saviez déjà? Non.",
    "question": "Qu'explique cet homme sur son arrivée au Canada?",
    "options": {
      "A": "Il a détesté le mauvais temps.",
      "B": "Il a dû changer ses habitudes.",
      "C": "Il avait du mal à s'intégrer.",
      "D": "Il connaissait peu le pays."
    },
    "reponse": "D",
    "reponseTexte": "Il connaissait peu le pays.",
    "explication": "Un homme parle de son arrivée au Canada et de ce qu'il savait du pays avant d'y aller.",
    "indice": [
      "Canada",
      "hivers",
      "étés",
      "savait"
    ]
  },
  {
    "id": 184,
    "niveau": "B1",
    "transcription": "Oh ce septuagénaire à la retraite, le bruit est aussi une source de fatigue et de tension. Moi, le bruit m'empêche de dormir absolument. J'arrive à un âge où on a peut-être besoin de moins de sommeil. Mais il est évident qu'en mordre de boulevard périphérique, je n'arrive pas à supporter ce niveau sonore qui est permanent. Entre autres, il faut aussi ne pas oublier que même si l'intensité routière diminue en nuit, on est réveillé par des bruits un petit peu exceptionnels. Une moto pétaradante qui passe ou une voiture qui passe à 200 à l'heure sur le boulevard périphérique, c'est ce qu'on constate régulièrement.",
    "question": "Qu'est-ce qui empêche cet homme de dormir?",
    "options": {
      "A": "Les conducteurs qui klaxonnent au feu rouge.",
      "B": "Les motards qui s'amusent sur le parking.",
      "C": "Les ouvriers qui travaillent sur l'autoroute.",
      "D": "Les véhicules qui circulent près de chez lui."
    },
    "reponse": "D",
    "reponseTexte": "Les véhicules qui circulent près de chez lui.",
    "explication": "Un retraité se plaint du bruit constant des véhicules près de son domicile, ce qui l'empêche de dormir.",
    "indice": [
      "septuagénaire",
      "bruit",
      "boulevard périphérique",
      "nuit"
    ]
  },
  {
    "id": 185,
    "niveau": "B1",
    "transcription": "Allô, bonjour, je suis désolé, il y a eu un problème informatique à l'envers, je ne peux pas attirer l'argent. Ou bien je vous rembourse dans deux ou trois jours, ou bien je vous apporte un chèque demain, si vous préférez. Non, ce n'est pas la peine. Deux ou trois jours, c'est négociation. Ok, merci beaucoup.",
    "question": "Que la mère n'a pas fait d'oeuvre?",
    "options": {
      "A": "Elle va appeler le locataire.",
      "B": "Elle va attendre un petit peu.",
      "C": "Elle va refuser le paiement.",
      "D": "Elle va revenir une autre fois."
    },
    "reponse": "B",
    "reponseTexte": "Elle va attendre un petit peu.",
    "explication": "Une personne appelle pour signaler un problème de paiement par carte et propose des solutions de remboursement.",
    "indice": [
      "problème",
      "informatique",
      "rembourse",
      "chèque"
    ]
  },
  {
    "id": 186,
    "niveau": "B1",
    "transcription": "Février est l'un des mois les plus maussades au niveau de la météo. C'est souvent le mois le plus gris et le plus froid de l'année. Du coup, les gens ont tendance d'une part à surchauffer leur chambre et aussi à moins l'aérer. Or, tous les spécialistes le disent, une température intérieure au-dessus de 19 degrés et le manque d'air frais sont néfastes à la qualité du sommeil. Et cette fatigue au mois de février serait uniquement due au problème de sommeil? Non, il se trouve qu'en février, enfin en hiver, l'organisme est plus vulnérable, d'autant qu'il est mis à rude épreuve, notamment avec tous les virus qui circulent. Et puis il y a aussi le manque de lumière, un peu comme en octobre-novembre, où de nombreuses personnes font la fameuse dépression saisonnière.",
    "question": "Qu'explique la journaliste?",
    "options": {
      "A": "Comment diminuer la consommation d'énergie.",
      "B": "Comment il faut appliquer les conseils des experts.",
      "C": "Comment la santé est influencée par le calendrier.",
      "D": "Comment se protéger des maladies contagieuses."
    },
    "reponse": "C",
    "reponseTexte": "Comment la santé est influencée par le calendrier.",
    "explication": "La journaliste explique comment la santé est affectée par les changements saisonniers, notamment en février. Il faut identifier l'impact du calendrier sur la santé.",
    "indice": [
      "février",
      "sommeil",
      "fatigue",
      "saison"
    ]
  },
  {
    "id": 187,
    "niveau": "B1",
    "transcription": "Pierre, tu travailles la semaine prochaine ? Non, on descend avec les enfants dans notre maison de campagne, dans le sud. Tu as de la chance de te reposer un peu. Oui, et je vais enfin pouvoir jouer au tennis.",
    "question": "Que fera Pierre la semaine prochaine?",
    "options": {
      "A": "Il aura la visite de sa famille.",
      "B": "Il fera une compétition.",
      "C": "Il pourra travailler au calme.",
      "D": "Il sera en vacances."
    },
    "reponse": "D",
    "reponseTexte": "Il sera en vacances.",
    "explication": "Pierre parle à une personne au sujet de ses plans pour la semaine prochaine. Il explique qu'il ne travaillera pas car il part en vacances dans sa maison de campagne avec ses enfants.",
    "indice": [
      "maison de campagne",
      "sud",
      "jouer au tennis"
    ]
  },
  {
    "id": 188,
    "niveau": "B1",
    "transcription": "Bonjour, c'est un message de GRD Solutions pour M. Lalande. Je vous appelais au sujet du problème que vous avez rencontré en installant notre logiciel d'épée image. Nous avons un technicien qui pourrait vous dépanner et venir sur site rapidement. Vous pouvez me recontacter jusqu'à 18h30 au 01 28 12 87 43. Bonne journée.",
    "question": "Pourquoi cette personne laisse-t-elle un message?",
    "options": {
      "A": "Pour confirmer un rendez-vous.",
      "B": "Pour demander un entretien.",
      "C": "Pour proposer un service.",
      "D": "Pour signaler un retard."
    },
    "reponse": "C",
    "reponseTexte": "Pour proposer un service.",
    "explication": "Un technicien appelle M. Lalande pour proposer une assistance sur site afin de résoudre un problème d'installation d'un logiciel d'image.",
    "indice": [
      "logiciel",
      "dépanner",
      "technicien",
      "sur site"
    ]
  },
  {
    "id": 189,
    "niveau": "B1",
    "transcription": "Vous désirez ? Est-ce que cette veste existe en noir? Je ne l'ai plus. Mais nous avons ce modèle-là, plus classique. Passez-la. Oh, elle est trop serrée. Non, je vous assure, c'est la tendance cette année de porter les vestes cintrées. Je ne pourrais pas mettre de gilet en dessous. Oh, vous n'en avez pas besoin. C'est de la pure laine, ça tient chaud. Bon, je la prends.",
    "question": "Que propose la vendeuse à la cliente?",
    "options": {
      "A": "D'essayer un vêtement près du corps.",
      "B": "De changer la taille de l'article choisi.",
      "C": "De choisir une tenue multicolore.",
      "D": "De compléter son achat avec un pull."
    },
    "reponse": "A",
    "reponseTexte": "D'essayer un vêtement près du corps.",
    "explication": "La cliente hésite sur la taille d'une veste. La vendeuse insiste sur la tendance des vestes serrées. Il faut comprendre que la vendeuse propose d'essayer un vêtement près du corps.",
    "indice": [
      "vestes",
      "cintrées",
      "tendance",
      "serrée"
    ]
  },
  {
    "id": 190,
    "niveau": "B1",
    "transcription": "Ah tiens, Camilo, tu es au bureau aujourd'hui ? Tu n'es pas en télétravail normalement? Non, c'est seulement le jeudi. Et ça te plaît alors? Au moins, je ne perds pas de temps dans les transports et je me concentre mieux sur mes dossiers compliqués. Et puis, même si je ne suis pas là, je suis toujours joignable par téléphone et par courriel. Il m'arrive même d'assister à des réunions par visioconférence. Ce n'est pas très différent d'une journée normale.",
    "question": "De quoi parlent les deux personnes?",
    "options": {
      "A": "D'une négociation par visioconférence.",
      "B": "De l'urgence des dossiers à traiter.",
      "C": "Des avantages du travail à distance.",
      "D": "Des problèmes fréquents de transports."
    },
    "reponse": "C",
    "reponseTexte": "Des avantages du travail à distance.",
    "explication": "Deux personnes discutent des avantages et des habitudes du télétravail. Camilo explique pourquoi il préfère travailler à distance et comment il reste joignable.",
    "indice": [
      "télétravail",
      "transports",
      "dossiers",
      "visioconférence"
    ]
  }
];
