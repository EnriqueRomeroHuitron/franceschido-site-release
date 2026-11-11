// Fuente: pasted_content_3.txt. Todas las preguntas se normalizan a nivel B2 por instrucción del usuario.
const B2_QUESTIONS = [
  {
    "id": 1,
    "niveau": "B2",
    "titre": "Courir ou marcher pour maigrir",
    "transcription": "Et on termine avec vous, Jeannie, qui vous pose une grande question existentielle. Marcher ou courir ? Ça dépend. C'est ce qui ressort de quelques études récentes qui ont opposé les deux exercices et mesuré leurs effets. L'une d'elles a été publiée le mois dernier dans la revue Medicine and Science in Sports and Exercise. Conclusion, en ce qui concerne la perte de poids, c'est la course qui l'emporte haut la main. Les coureurs sont plus minces, moins de surcharge pondérale que les marcheurs. Et passer l'âge de 55 ans, c'est encore plus vrai, même si le nombre de kilomètres parcourus à la course par semaine est minime. Il y a une différence entre les coureurs et les marcheurs. Et la cause pourrait être l'effet de la course sur l'appétit.",
    "question": "Selon le chroniqueur, que permet la course par rapport à la marche ?",
    "options": {
      "A": "De maigrir plus rapidement.",
      "B": "De manger sans compter.",
      "C": "De s'entraîner moins souvent.",
      "D": "De vivre plus longtemps."
    },
    "reponse": "A",
    "reponseTexte": "De maigrir plus rapidement.",
    "explication": "Un chroniqueur compare les effets de la course et de la marche sur la perte de poids, en s'appuyant sur des études récentes.",
    "indice": [
      "course",
      "marche",
      "perte de poids",
      "appétit"
    ]
  },
  {
    "id": 2,
    "niveau": "B2",
    "titre": "Lecture comme plaisir pour enfants",
    "transcription": "Je crois que les difficultés en matière de lecture ont des causes à la fois individuelles et sociales. Les parents, par exemple, parce qu'ils sont angoissés par l'avenir de leurs enfants, leur présentent souvent la lecture comme une obligation, une démarche indispensable pour réussir. Et c'est une erreur, parce que la lecture est avant tout un plaisir. Un livre, c'est un voyage, une découverte, une aventure. Et il faudrait faire découvrir la lecture aux enfants comme on leur fait découvrir la cuisine chinoise ou les jeux dans la neige. Et puis les parents refusent aussi souvent à leurs enfants des lectures qu'ils considèrent comme mineures. Les bandes dessinées par exemple, et ça aussi c'est une erreur. Lire une bande dessinée, c'est lire. Et ça permet souvent d'ailleurs de découvrir ensuite d'autres formes de littérature.",
    "question": "Que conseille cette intervenante aux parents ?",
    "options": {
      "A": "D'attribuer à la lecture le statut de loisir.",
      "B": "De favoriser la lecture en autonomie.",
      "C": "De limiter la lecture d'histoires illustrées.",
      "D": "De sélectionner des lectures classiques."
    },
    "reponse": "A",
    "reponseTexte": "D'attribuer à la lecture le statut de loisir.",
    "explication": "Une intervenante explique aux parents comment présenter la lecture aux enfants en insistant sur le plaisir plutôt que sur l'obligation.",
    "indice": [
      "lecture",
      "plaisir",
      "enfants",
      "parents",
      "bandes dessinées"
    ]
  },
  {
    "id": 3,
    "niveau": "B2",
    "titre": "Cuisinier et discothèque",
    "transcription": "Rémy, vous avez deux activités, ce n'est pas trop difficile ? Non, ça va. Les 35 heures, ce n'est pas pour moi. Alors, vous êtes cuisinier le jour et vous travaillez dans une discothèque la nuit. Vous arrivez à tout faire sans problème ? Oui, mais je dois préciser que pour me sentir bien, 4 heures de sommeil me suffisent et je fais du sport dès que je peux.",
    "question": "Qu'est-ce qui est vrai ?",
    "options": {
      "A": "Il a besoin de beaucoup de sommeil.",
      "B": "Il déteste tous les types de sport.",
      "C": "Il travaille pour plusieurs entreprises.",
      "D": "Il va souvent danser en discothèque."
    },
    "reponse": "C",
    "reponseTexte": "Il travaille pour plusieurs entreprises.",
    "explication": "Rémy parle de son emploi du temps chargé entre son travail de cuisinier et son emploi dans une discothèque.",
    "indice": [
      "cuisinier",
      "discothèque",
      "entreprises",
      "sommeil",
      "sport"
    ]
  },
  {
    "id": 4,
    "niveau": "B2",
    "titre": "Choisir le violoncelle",
    "transcription": "Ève Panofsky, vous êtes musicienne. Est-ce que vous avez toujours voulu jouer du violoncelle ? Quand j'étais petite, il y avait un piano chez des amis sur lequel je pianotais. Ensuite, j'ai essayé le banjo, la guitare, je m'approchais des cordes. Je recherchais en fait un instrument avec lequel je puisse faire durer le son. Un jour, je jouais avec mes copains d'école chez moi et j'ai mis un disque au hasard. C'était du violoncelle. Et là, ça m'a totalement aimantée. J'ai arrêté de jouer et j'étais aspirée par ce son.",
    "question": "Pourquoi cette musicienne a-t-elle choisi le violoncelle ?",
    "options": {
      "A": "Elle a été habituée très tôt par ses parents à écouter des œuvres pour violoncelle.",
      "B": "Elle a été impressionnée par le son des cordes qu'on peut faire vibrer longtemps.",
      "C": "Elle a privilégié un instrument qu'elle pouvait transporter plus facilement qu'un piano.",
      "D": "Elle a rencontré des amis musiciens de ses parents qui l'ont convaincue."
    },
    "reponse": "B",
    "reponseTexte": "Elle a été impressionnée par le son des cordes qu'on peut faire vibrer longtemps.",
    "explication": "La musicienne raconte comment elle a découvert le violoncelle et ce qui l'a attirée vers cet instrument.",
    "indice": [
      "violoncelle",
      "son",
      "cordes",
      "vibrer",
      "longtemps"
    ]
  },
  {
    "id": 5,
    "niveau": "B2",
    "titre": "Enfants qui n'aiment pas les fruits",
    "transcription": "Si les enfants ne mangent pas assez de fruits et légumes, c'est peut-être parce qu'ils n'aiment pas ça. En fait, les enfants mangent principalement par plaisir et c'est une fonction que ne remplissent pas les fruits et légumes. Certes, tout le monde est d'accord pour dire que c'est bon à la santé, que c'est nécessaire, que c'est souvent contraignant à préparer, que cela ne remplit pas l'estomac, voire que ce n'est pas bon. Mais on trouve rarement la notion de plaisir associée aux fruits et légumes.",
    "question": "De quoi est-il question ?",
    "options": {
      "A": "Des besoins énergétiques des jeunes.",
      "B": "Des bons réflexes pour les repas.",
      "C": "Des comportements alimentaires.",
      "D": "Des conseils de préparation culinaire."
    },
    "reponse": "C",
    "reponseTexte": "Des comportements alimentaires.",
    "explication": "Un expert en nutrition discute des raisons pour lesquelles les enfants ne mangent pas suffisamment de fruits et légumes, en soulignant le manque de plaisir associé à ces aliments.",
    "indice": [
      "enfants",
      "fruits",
      "légumes",
      "plaisir",
      "alimentaires"
    ]
  },
  {
    "id": 6,
    "niveau": "B2",
    "titre": "Droit au bonheur dans la Constitution",
    "transcription": "Jadis, on mettait plus l'accent sur les devoirs de l'individu, être un bon père, une bonne mère, etc. Et aujourd'hui, on met beaucoup plus l'accent sur ses droits. Et parmi ses droits, il y a le droit au bonheur. Et donc, ce droit, d'ailleurs, qui est inscrit dans la Constitution, dans la Déclaration des droits de l'homme, pardon, crée petit à petit une sorte de pression sociale. On l'observe depuis une dizaine d'années. Et c'est vrai que les gens veulent apprendre à mieux vivre avec leurs émotions, qu'ils considèrent d'ailleurs parfois comme encombrantes.",
    "question": "Quel changement de société est observé dans ce reportage ?",
    "options": {
      "A": "Les gens cherchent davantage à être heureux.",
      "B": "Les gens deviennent de plus en plus égoïstes.",
      "C": "Les gens se préoccupent moins de leur famille.",
      "D": "Les gens sont peu demandeurs de sensations fortes."
    },
    "reponse": "A",
    "reponseTexte": "Les gens cherchent davantage à être heureux.",
    "explication": "Un reportage discute de l'évolution des priorités sociales, en particulier l'accent mis sur le droit au bonheur.",
    "indice": [
      "droit au bonheur",
      "pression sociale",
      "Constitution",
      "Déclaration des droits de l'homme"
    ]
  },
  {
    "id": 7,
    "niveau": "B2",
    "titre": "Syndicat et patrons discutent",
    "transcription": "Monsieur Morales, vous êtes donc secrétaire de la Fédération syndicale des travailleurs de l'alimentation, de l'agro-industrie et industries similaires. Comment jugez-vous les rapports entre votre organisation syndicale et les patrons ? Dans le cadre des discussions avec les partenaires sociaux, l'organisation patronale nous a récemment proposé, à titre expérimental, un système de résolution alternative des conflits. Ce système prévoit la formation, par le patronat, de médiateurs soi-disant indépendants et permettrait, je cite le représentant, d'intervenir en amont des conflits sociaux pour éviter le recours lent et coûteux aux inspections du travail et aux tribunaux. Quelle belle initiative ! Mais une question me taraude. Comment peut-on prétendre être à la fois juge et parti ?",
    "question": "Comment cet individu reçoit-il la proposition patronale ?",
    "options": {
      "A": "Il est ironique.",
      "B": "Il est favorable.",
      "C": "Il est plein d'espoir.",
      "D": "Il est méprisant."
    },
    "reponse": "A",
    "reponseTexte": "Il est ironique.",
    "explication": "Un syndicaliste réagit à une proposition patronale de médiation, en exprimant son scepticisme de manière ironique.",
    "indice": [
      "syndicat",
      "patrons",
      "médiation",
      "conflits",
      "ironie"
    ]
  },
  {
    "id": 8,
    "niveau": "B2",
    "titre": "Corinne voyage pour le travail",
    "transcription": "Stéphane, est-ce que Corinne est rentrée de sa mission au Japon ? Oui, elle était au bureau hier et aujourd'hui, mais elle est très fatiguée. La pauvre, sa mission a été plus difficile que d'habitude ? Oui, elle a eu des réunions dans plusieurs villes. Elle n'a pas arrêté de circuler. C'est sympa, elle a pu découvrir plein de lieux différents. Pas du tout. Elle terminait très tard le soir. Elle devrait prendre des vacances ? Impossible. Elle repart pour une conférence au Canada la semaine prochaine.",
    "question": "Qu'apprend-on sur Corinne ?",
    "options": {
      "A": "Elle est en congé.",
      "B": "Elle est tombée malade.",
      "C": "Elle travaille la nuit.",
      "D": "Elle voyage souvent."
    },
    "reponse": "D",
    "reponseTexte": "Elle voyage souvent.",
    "explication": "Stéphane parle de Corinne qui rentre d'une mission au Japon et doit repartir au Canada, ce qui montre qu'elle voyage fréquemment pour son travail.",
    "indice": [
      "mission",
      "Japon",
      "réunions",
      "circuler",
      "conférence"
    ]
  },
  {
    "id": 9,
    "niveau": "B2",
    "titre": "Remboursement pull avec défaut",
    "transcription": "",
    "question": "",
    "options": {
      "A": "Trois jours.",
      "B": "Une semaine.",
      "C": "Un mois.",
      "D": "Cinq ans."
    },
    "reponse": "C",
    "reponseTexte": "Un mois.",
    "explication": "Un client demande le remboursement d'un pull défectueux. La vendeuse propose un avoir valable un mois ou une carte cadeau valable cinq ans.",
    "indice": [
      "avoir",
      "valable",
      "un mois",
      "carte cadeau"
    ]
  },
  {
    "id": 10,
    "niveau": "B2",
    "titre": "Jardins communautaires pour chômeurs",
    "transcription": "M. Gosselin, pouvez-vous nous parler des jardins communautaires de Verdun ? Oui, ce sont des jardins mis à la disposition des chômeurs par la Ville de Montréal. Donc les chômeurs retrouvent une activité par la même occasion. Oui, et ils peuvent se nourrir des légumes cultivés.",
    "question": "Qu'apprend-on sur les jardins communautaires ?",
    "options": {
      "A": "Ils appartiennent à des demandeurs d'emploi.",
      "B": "Ils sont cultivés par des gens sans emploi.",
      "C": "Ils fournissent des légumes aux commerçants de la ville.",
      "D": "Ils sont cultivés par des jardiniers professionnels."
    },
    "reponse": "B",
    "reponseTexte": "Ils sont cultivés par des gens sans emploi.",
    "explication": "M. Gosselin explique que les jardins communautaires de Verdun sont mis à disposition des chômeurs pour leur permettre de retrouver une activité et de cultiver des légumes.",
    "indice": [
      "jardins communautaires",
      "chômeurs",
      "cultivés",
      "nourrir"
    ]
  },
  {
    "id": 11,
    "niveau": "B2",
    "titre": "Oiseaux en V et économie d'énergie",
    "transcription": "On s'est rendu compte que quand les oiseaux sont en V, celui qui est à la pointe du V dépense beaucoup d'énergie parce qu'il est le premier et qu'il doit percer l'air. Mais par contre, les autres, qui sont tous derrière lui, bien alignés, un peu décalés, profitent des turbulences qu'il a créées et donc font des économies. Et l'idée, c'est que plus on est nombreux, plus on peut partager chacun son tour. Et donc, le premier, au bout d'un certain temps, quand il en a un peu assez, se décale et se met en bout de chaîne pour prendre la place de celui qui était derrière. Et c'est un nouveau qui va prendre sa place et qui fera l'effort initial.",
    "question": "Quel est le rôle d'un oiseau de tête dans un vol groupé ?",
    "options": {
      "A": "Il diminue les efforts de ceux qui le suivent.",
      "B": "Il est le seul à connaître la direction à prendre.",
      "C": "Il guide ses congénères en cas de tempête.",
      "D": "Il protège les plus faibles durant la migration."
    },
    "reponse": "A",
    "reponseTexte": "Il diminue les efforts de ceux qui le suivent.",
    "explication": "Un groupe d'oiseaux volent en formation en V et discutent des économies d'énergie réalisées par ceux qui suivent l'oiseau de tête.",
    "indice": [
      "*(aucun)*"
    ]
  },
  {
    "id": 12,
    "niveau": "B2",
    "titre": "Préparer des bouquets pour un mariage",
    "transcription": "Bonjour! Ah! C'est joli, toutes ces fleurs! Oui, je suis en train de préparer des bouquets pour demain. Ah bon? Il y a une fête en ville demain? Non, nous avons un repas de mariage. Il faut que tout soit prêt pour midi. Ah! Alors, vous serez complet, je suppose. On voulait vous réserver une table. Je ne sais pas. Il faut voir avec la patronne.",
    "question": "Que fait cette femme ?",
    "options": {
      "A": "Elle organise des fêtes au village.",
      "B": "Elle travaille chez un fleuriste.",
      "C": "Elle se marie le lendemain.",
      "D": "Elle travaille dans un restaurant."
    },
    "reponse": "D",
    "reponseTexte": "Elle travaille dans un restaurant.",
    "explication": "Une femme parle au téléphone pendant qu'elle prépare des bouquets de fleurs pour un mariage le lendemain midi. Un client veut réserver une table, elle lui dit de voir la patronne.",
    "indice": [
      "bouquets",
      "repas",
      "mariage",
      "table",
      "patronne"
    ]
  },
  {
    "id": 13,
    "niveau": "B2",
    "titre": "Changer de prénom pour un motif valable",
    "transcription": "*(Transcription audio non disponible – uniquement les options)*",
    "question": "",
    "options": {
      "A": "Il faut obtenir l’accord de la famille.",
      "B": "Il faut prouver la nécessité de la démarche.",
      "C": "Il y a de nombreux documents à rassembler.",
      "D": "Il y a des frais de procédure élevés."
    },
    "reponse": "B",
    "reponseTexte": "Il faut prouver la nécessité de la démarche.",
    "explication": "Un avocat explique le processus pour changer de prénom en France, les critères nécessaires pour convaincre les juges et quelques exemples de motifs valables.",
    "indice": [
      "changer",
      "prénom",
      "justifier",
      "intérêt légitime"
    ]
  },
  {
    "id": 14,
    "niveau": "B2",
    "titre": "Poème pour Brassens",
    "transcription": "Quand j'étais adolescent, j'avais écrit un lent poème à Georges Brassens. J'avais fini de le recopier. Enfin, c'était une espèce de chanson que j'avais fini de recopier dans le bistrot en face de l'impasse Florimont, où il habitait. Et j'étais allé lui porter. Sauf qu'il n'habitait plus là depuis des années et que j'étais assez rassuré qu'il n'habitait plus là parce que je ne sais pas ce que je lui aurais raconté. Mais je l'avais écrite. Et je me dis que si un jour j'avais reçu un petit mot de Brassens me disant « J'ai lu vos chansons et j'aimerais bien vous en parler », ça m'aurait intéressé.",
    "question": "Qu'aurait souhaité cette personne en allant chez Georges Brassens ?",
    "options": {
      "A": "Lui apporter un livre.",
      "B": "Lui demander conseil.",
      "C": "Lui présenter son travail.",
      "D": "Lui proposer une interview."
    },
    "reponse": "C",
    "reponseTexte": "Lui présenter son travail.",
    "explication": "Un adolescent raconte qu'il a écrit une chanson pour Georges Brassens et l'a portée chez lui, mais il n'y habitait plus.",
    "indice": [
      "poème",
      "recopier",
      "chanson",
      "impasse Florimont"
    ]
  },
  {
    "id": 15,
    "niveau": "B2",
    "titre": "Substances invisibles dans les aliments",
    "transcription": "On a l'impression, en vous entendant, qu'on est en train de s'empoisonner chaque fois qu'on va à la cantine. Ce qui est inacceptable, c'est qu'il y a plein de substances qui sont invisibles à l'œil nu dans les aliments, que le consommateur ne peut pas choisir s'il va les avaler ou pas, puisque ça n'est pas indiqué sur les emballages, qu'on ne le sait pas, et que oui, c'est dangereux pour la santé. Donc, ce qu'on ne veut pas, c'est alimenter les peurs, mais encore faut-il... Un petit peu, là, quand même. Non, non, mais parce que la peur, la seule façon de ne pas l'alimenter, c'est de dire, eh bien oui, faisons ce qu'il faut, pour qu'effectivement, quand on achète nos aliments, que ce soit au supermarché ou ailleurs, on n'a pas à se poser la question des substances cachées qui peuvent être dangereuses pour notre santé.",
    "question": "Que souhaite cette intervenante ?",
    "options": {
      "A": "Un meilleur contrôle des repas dans les cantines.",
      "B": "Une information complète pour le consommateur.",
      "C": "Une promotion des produits bons pour la santé.",
      "D": "Une suppression des emballages en plastique."
    },
    "reponse": "B",
    "reponseTexte": "Une information complète pour le consommateur.",
    "explication": "Une personne parle des substances invisibles dans les aliments et de l'absence d'information sur les emballages. Elle exprime son inquiétude pour la santé des consommateurs.",
    "indice": [
      "*(aucun)*"
    ]
  },
  {
    "id": 16,
    "niveau": "B2",
    "titre": "Touriste qui veut visiter Montréal",
    "transcription": "Bonjour, je suis un client de l'Hôtel Royal et j'aimerais découvrir Montréal. Le plus simple est de vous inscrire sur une des listes suivantes. Ce sont des itinéraires touristiques dans les différents quartiers. Vous avez le choix entre plusieurs thèmes, comme par exemple histoire, architecture, D'accord. J'écris donc mon nom et mon numéro de téléphone, c'est bien ça ? Oui. Vous pouvez aussi nous donner votre courriel. Parfait. Je m'inscris donc au circuit gastronomie. À demain.",
    "question": "Que souhaite ce touriste ?",
    "options": {
      "A": "Acheter un guide.",
      "B": "Réserver une table.",
      "C": "Trouver une chambre.",
      "D": "Visiter une ville."
    },
    "reponse": "D",
    "reponseTexte": "Visiter une ville.",
    "explication": "Un client d'un hôtel demande à s'inscrire à un circuit touristique pour découvrir Montréal. Il donne ses coordonnées et choisit un itinéraire sur le thème de la gastronomie.",
    "indice": [
      "itinéraires touristiques",
      "circuit gastronomie"
    ]
  },
  {
    "id": 17,
    "niveau": "B2",
    "titre": "Week-end à la montagne gâché",
    "transcription": "Salut Nathalie ! Alors, comment s'est passé ton week-end à la montagne ? L'endroit était splendide, mais le séjour a été gâché parce qu'il a plu tout le temps. On n'a pas pu faire de la randonnée comme prévu. Ah, c'est dommage. Qu'est-ce que vous avez fait alors ? On a sorti les dominos et les cartes. On aurait pu faire ça chez nous, ça nous aurait coûté moins cher. On a fait beaucoup de route pour rester enfermés.",
    "question": "Que regrette Nathalie ?",
    "options": {
      "A": "Elle a perdu aux jeux de société.",
      "B": "Elle est restée près de chez elle.",
      "C": "La météo était très mauvaise.",
      "D": "Le logement était mal situé."
    },
    "reponse": "C",
    "reponseTexte": "La météo était très mauvaise.",
    "explication": "Nathalie parle de son week-end à la montagne avec une amie. Il a plu tout le temps, donc ils n'ont pas pu faire de randonnée et sont restés à jouer aux jeux de société.",
    "indice": [
      "plu",
      "randonnée",
      "dominos",
      "cartes"
    ]
  },
  {
    "id": 18,
    "niveau": "B2",
    "titre": "Camping haut de gamme en France",
    "transcription": "Les Français sont de plus en plus nombreux à rechercher les loisirs de plein air. Et le camping n'est plus seulement choisi pour de simples raisons économiques, puisque l'on trouve des terrains 5 étoiles qui proposent même des restaurants gastronomiques et des salles de bain privées. Le mot camping commence d'ailleurs à laisser la place à hôtellerie de plein air.",
    "question": "Qu'apprend-on sur le camping ?",
    "options": {
      "A": "Il intéresse très peu les vacanciers.",
      "B": "Il offre des services de qualité supérieure.",
      "C": "Il permet le développement des campagnes.",
      "D": "Il souffre d'une augmentation des tarifs."
    },
    "reponse": "B",
    "reponseTexte": "Il offre des services de qualité supérieure.",
    "explication": "Un reportage parle de la popularité croissante des campings en France, notamment ceux de haut niveau qui offrent des services luxueux comme des restaurants gastronomiques et des salles de bain privées.",
    "indice": [
      "camping",
      "hôtellerie de plein air",
      "restaurants gastronomiques",
      "salles de bain privées"
    ]
  },
  {
    "id": 19,
    "niveau": "B2",
    "titre": "Un documentaire sur la Gaspésie",
    "transcription": "Salut, ça va ? Ça va, mais mon petit ami est parti pour trois mois pour réaliser un documentaire sur la Gaspésie, une région assez sauvage du Québec. Ah oui, je connais. Quelle chance ! J'adorerais y retourner. Et tu vas y aller aussi ? J'aimerais bien, mais j'ai des missions prévues prochainement. Mais bon, je vois mon patron demain. Je lui demanderai si je peux prendre des vacances. Bonne chance. Tu m'écriras pour me raconter ton expérience là-bas. Et préviens-moi quand le film sortira.",
    "question": "De quoi parlent ces personnes ?",
    "options": {
      "A": "D’un projet de voyage.",
      "B": "D’un changement de travail.",
      "C": "D’un futur déménagement.",
      "D": "D’une sortie au cinéma."
    },
    "reponse": "A",
    "reponseTexte": "D’un projet de voyage.",
    "explication": "Deux personnes parlent d'un documentaire sur la Gaspésie. L'une explique que son petit ami y va pour trois mois et l'autre exprime son envie d'y aller aussi.",
    "indice": [
      "documentaire",
      "Gaspésie",
      "vacances",
      "film"
    ]
  },
  {
    "id": 20,
    "niveau": "B2",
    "titre": "Entretien d'embauche pour graphiste",
    "transcription": "Bonjour M. Nouguet, Mme Lefebvre de la Direction des Ressources Humaines de la Société AG Pro. Je vous appelle au sujet de votre candidature pour le poste de graphiste. Votre CV a été présélectionné par la directrice des ressources humaines. Si ce poste vous intéresse toujours, nous aimerions vous rencontrer dans les prochains jours. Merci de me rappeler au 01 25 38 67 54. Au revoir.",
    "question": "Pourquoi Mme Lefebvre a-t-elle appelé M. Nouguet ?",
    "options": {
      "A": "Pour lui annoncer le rejet de sa proposition.",
      "B": "Pour lui confirmer un rendez-vous de travail.",
      "C": "Pour lui demander des documents supplémentaires.",
      "D": "Pour lui fixer un entretien d’embauche."
    },
    "reponse": "D",
    "reponseTexte": "Pour lui fixer un entretien d’embauche.",
    "explication": "Mme Lefebvre appelle M. Nouguet pour lui proposer un entretien d'embauche pour un poste de graphiste. Elle lui demande de la rappeler pour fixer un rendez-vous.",
    "indice": [
      "candidature",
      "poste de graphiste",
      "présélectionné",
      "entretien"
    ]
  },
  {
    "id": 21,
    "niveau": "B2",
    "titre": "Facebook interdit les invitations",
    "transcription": "L'affaire est révélée par le Wall Street Journal et fait beaucoup de bruit dans la presse anglo-saxonne. Désormais, chez Facebook, on ne peut proposer à un ou une collègue de sortir boire un verre ou de dîner. Vous savez, les Américains parlent de date. Qu'une seule fois, s'il ou elle refuse, alors on ne peut pas l'inviter une seconde fois. Il ne faut pas se louper. Et ça figure désormais dans le code de conduite de l'entreprise. Aller plus loin peut s'exposer à des sanctions disciplinaires. La direction de Facebook est entrée dans les détails. Un non n'a pas à être totalement explicite. Si vous vous entendez répondre « je suis occupé ce soir » ou « je ne suis pas disponible », eh bien, cela suffit. Vous n'aurez pas le droit de réitérer votre invitation, passer cette limite. On pourrait entrer dans un possible harcèlement.",
    "question": "Pourquoi l'entreprise Facebook a-t-elle modifié son code de conduite ?",
    "options": {
      "A": "Pour améliorer la cohésion des équipes.",
      "B": "Pour empêcher la diffusion de rumeurs.",
      "C": "Pour éviter les sollicitations abusives.",
      "D": "Pour limiter les distractions au travail."
    },
    "reponse": "C",
    "reponseTexte": "Pour éviter les sollicitations abusives.",
    "explication": "Facebook modifie son code de conduite pour limiter les invitations entre collègues. La direction explique les nouvelles règles et les conséquences d'une invitation refusée.",
    "indice": [
      "*(aucun)*"
    ]
  },
  {
    "id": 22,
    "niveau": "B2",
    "titre": "Écrivain et réalisateur parlent école",
    "transcription": "Comment est né votre film ? Ça faisait longtemps que je voulais faire un film sur l'école. Rester entre les murs et montrer par des moments d'école ce que vivent les élèves. Le jour de la sortie de mon précédent film, En route, j'ai participé à une émission de radio à laquelle était également invité François Rufus, qui venait de sortir son livre. Et au cours de l'émission, je me suis aperçu qu'il traitait tous les thèmes que je voulais aborder de la manière dont je voulais le faire, sans sortir du collège, avec une démarche minimaliste et très descriptive. Dans l'ascenseur, je lui ai demandé s'il était intéressé par une adaptation. Il m'a donné son livre et trois jours après, je signais.",
    "question": "Quel est le point commun entre l'écrivain et le réalisateur ?",
    "options": {
      "A": "Leur intérêt pour les méthodes minimalistes.",
      "B": "Leur participation à la même émission de radio.",
      "C": "Leur processus créatif pour développer des projets.",
      "D": "Les avis qu'ils partagent au sujet de l'école."
    },
    "reponse": "A",
    "reponseTexte": "Leur intérêt pour les méthodes minimalistes.",
    "explication": "Un écrivain et un réalisateur discutent de leur projet commun sur l'école lors d'une émission de radio. Ils partagent leur vision minimaliste et descriptive.",
    "indice": [
      "école",
      "élèves",
      "collège",
      "livre",
      "adaptation"
    ]
  },
  {
    "id": 23,
    "niveau": "B2",
    "titre": "Voyager sans payer pour se loger",
    "transcription": "Imagine pouvoir faire le tour du monde sans avoir à payer pour te loger. Imagine partager des cultures différentes avec des guides personnalisés, totalement gratuits. Arrête d'imaginer, ça existe. Depuis l'an 2000, près de 300 000 personnes l'ont fait, à bon marché et hors des circuits touristiques programmés, grâce à l'hospitalité des membres d'un réseau social qui s'étend sur les cinq continents. Son fondateur, jeune étudiant allemand de 22 ans, assure que l'objectif final est de promouvoir la paix par l'échange interculturel.",
    "question": "Que propose ce reportage ?",
    "options": {
      "A": "D'apprendre à élaborer des itinéraires de visites.",
      "B": "D'expérimenter une manière différente de voyager.",
      "C": "De découvrir des adresses d'hôtel à l'étranger.",
      "D": "De participer à des actions de solidarité internationale."
    },
    "reponse": "B",
    "reponseTexte": "D'expérimenter une manière différente de voyager.",
    "explication": "Un reportage présente une manière de voyager sans payer pour se loger en utilisant un réseau social d'hospitalité. Le fondateur explique son objectif de promouvoir la paix par les échanges interculturels.",
    "indice": [
      "*(aucun)*"
    ]
  },
  {
    "id": 24,
    "niveau": "B2",
    "titre": "Père et études",
    "transcription": "Quel rapport aviez-vous avec votre père ? Je ne lui parlais plus de mes études. Il avait toujours la peur ou peut-être le désir que je n'y arrive pas. Il s'énervait de me voir à longueur de journée dans les livres. Je crois qu'il pensait que j'étais malheureuse. Comment se comportait-il avec vous face au monde extérieur ? Devant la famille, les clients, de la gêne, presque de la honte que je ne gagne pas encore ma vie à 17 ans. Il craignait qu'on ne me prenne pour une paresseuse et lui pour un crâneur. Il disait que j'apprenais bien, jamais que je travaillais bien. Quelle était pour lui la définition du mot travail ? Travailler, c'était seulement travailler de ses mains.",
    "question": "Quelle était l'attitude du père face aux études de sa fille ?",
    "options": {
      "A": "Il avait du mal à accepter ses choix.",
      "B": "Il essayait souvent de rivaliser avec elle.",
      "C": "Il était attentif à ses centres d'intérêt.",
      "D": "Il lui interdisait les activités intellectuelles."
    },
    "reponse": "A",
    "reponseTexte": "Il avait du mal à accepter ses choix.",
    "explication": "Une personne raconte sa relation avec son père qui ne comprenait pas ses études et préférait qu'elle travaille manuellement.",
    "indice": [
      "*(aucun)*"
    ]
  },
  {
    "id": 25,
    "niveau": "B2",
    "titre": "Transfert de ligne téléphonique retardé",
    "transcription": "Bonjour monsieur, je viens transférer ma ligne téléphonique. J'emménage demain dans les logements neufs de la rue de l'université. Oh là là, ça ne sera pas fini avant dix jours. Les travaux ne sont pas encore terminés. Le promoteur a eu du retard. Nous attendons son autorisation pour installer le réseau. Dix jours ? Mais comment je fais sans téléphone, moi ? J'en ai besoin pour mon travail. Je suis désolé, monsieur, mais vous n'êtes pas le seul dans ce cas, et on ne peut pas aller plus vite que les travaux.",
    "question": "Pourquoi le client n'obtient-il pas le transfert de sa ligne téléphonique ?",
    "options": {
      "A": "Le promoteur a oublié de prévenir la compagnie de téléphone.",
      "B": "Le réseau téléphonique du nouvel immeuble est déjà saturé.",
      "C": "Les travaux nécessaires ne sont pas encore achevés.",
      "D": "La compagnie de téléphone manque de personnel pour le faire."
    },
    "reponse": "C",
    "reponseTexte": "Les travaux nécessaires ne sont pas encore achevés.",
    "explication": "Pourquoi le client ne peut pas obtenir son transfert de ligne téléphonique ? Attention aux détails sur les causes du retard.",
    "indice": [
      "Le texte indique un exemple d'utilisation d'une page web."
    ]
  },
  {
    "id": 26,
    "niveau": "B2",
    "titre": "Réserver un voyage en Corse",
    "transcription": "Monsieur, bonjour. Bonjour, je voudrais des billets pour la Corse. Le 3 août, au soir. Deux adultes, deux enfants, un chien, une voiture et quatre billets. Je vois bien, monsieur, mais pour cette date, ce ne sera pas possible. C'est complet pour les véhicules. Il y a une possibilité pour le 5 août, mais en 15 minutes. Pas pour le 5 août en 15 minutes. Je vous rappelle maintenant. Non, vous vous rappelez l'ordre d'embarquement. Je vous rappelle qu'il faut vous présenter à la gare maritime de Sarabou et que le chien devra être tenu en laisse tout le long du trajet. C'est à quel moment, s'il vous plaît ? Et à l'île. Voici votre intervention, monsieur. Bon séjour en France. Merci.",
    "question": "Pourquoi le voyage en Corse est-il impossible le 3 août ?",
    "options": {
      "A": "Il n'y a plus de place en seconde classe.",
      "B": "Il n'y a plus de place pour la voiture.",
      "C": "Il n'y a plus de place pour quatre personnes.",
      "D": "Il n'y a plus de cabines pour quatre personnes."
    },
    "reponse": "B",
    "reponseTexte": "Il n'y a plus de place pour la voiture.",
    "explication": "Un client appelle pour réserver un voyage en Corse avec sa famille, son chien et sa voiture, mais les places pour les véhicules sont déjà complètes pour la date demandée.",
    "indice": [
      "*(aucun)*"
    ]
  },
  {
    "id": 27,
    "niveau": "B2",
    "titre": "Léonard apprend en observant la nature",
    "transcription": "Léonard reçoit une éducation relativement libre, comme l'était celle de la plupart des villageois de son âge. On imagine Léonard aujourd'hui comme un puits de science, une sorte de grand sage qui très jeune aurait été formé à la culture humaniste traditionnelle. Évidemment, ça n'est pas le cas. C'est un enfant qui s'est mis, en quelque sorte, à l'école de la nature, qui scrute, qui observe tout. Il est passionné par tout ce qui l'entoure et il s'aperçoit vite que le sens de l'observation est peut-être le meilleur des enseignements.",
    "question": "Que met en avant ce texte ?",
    "options": {
      "A": "Sa mémoire exceptionnelle.",
      "B": "Ses aptitudes au jardinage.",
      "C": "Ses origines sociales modestes.",
      "D": "Son parcours d'apprentissage."
    },
    "reponse": "D",
    "reponseTexte": "Son parcours d'apprentissage.",
    "explication": "Léonard est décrit comme un enfant qui apprend en observant la nature autour de lui, contrairement à une éducation traditionnelle.",
    "indice": [
      "éducation",
      "nature",
      "observation",
      "enseignements"
    ]
  },
  {
    "id": 28,
    "niveau": "B2",
    "titre": "Camping haut de gamme",
    "transcription": "Les Français sont de plus en plus nombreux à rechercher les loisirs de plein air. Et le camping n'est plus seulement choisi pour de simples raisons économiques, puisque l'on trouve des terrains 5 étoiles qui proposent même des restaurants gastronomiques et des salles de bain privées. Le mot camping commence d'ailleurs à laisser la place à hôtellerie de plein air.",
    "question": "Qu'apprend-on sur le camping ?",
    "options": {
      "A": "Il intéresse très peu les vacanciers.",
      "B": "Il offre des services de qualité supérieure.",
      "C": "Il permet le développement des campagnes.",
      "D": "Il souffre d'une augmentation des tarifs."
    },
    "reponse": "B",
    "reponseTexte": "Il offre des services de qualité supérieure.",
    "explication": "Un texte explique que de plus en plus de Français choisissent le camping pour les loisirs de plein air, avec des terrains offrant des services haut de gamme.",
    "indice": [
      "camping",
      "5 étoiles",
      "restaurants gastronomiques",
      "salles de bain privées"
    ]
  },
  {
    "id": 29,
    "niveau": "B2",
    "titre": "Logo Nutri-Score sur les aliments",
    "transcription": "Retour sur le Nutri-Score. Vous savez, c'est ce logo qui est apposé sur les produits alimentaires. Il y a tout juste un an, l'arrêté qui recommande son utilisation a été signé en grande pompe au ministère de la Santé. Et une étude qui vient d'être réalisée dans 12 pays vient de prouver qu'il est le meilleur logo, le plus efficace parmi les 5 testés. C'est en fait celui qui permet d'orienter le plus facilement les consommateurs vers des aliments de meilleure qualité nutritionnelle. Concrètement, c'est un logo à 5 couleurs qui est apposé sur la face avant des emballages avec une lettre associée. Cela va de la lettre A sur fond vert pour les aliments d'excellente qualité nutritionnelle à la lettre E sur fond rouge pour les plus mauvais.",
    "question": "Quelle est la fonction de ce logo ?",
    "options": {
      "A": "Aider les consommateurs à mieux acheter.",
      "B": "Faire la publicité des produits biologiques.",
      "C": "Garantir l'origine de certains aliments.",
      "D": "Identifier les emballages recyclables."
    },
    "reponse": "A",
    "reponseTexte": "Aider les consommateurs à mieux acheter.",
    "explication": "Un texte explique le Nutri-Score, un logo sur les aliments, et son efficacité pour guider les consommateurs vers des produits de meilleure qualité nutritionnelle.",
    "indice": [
      "*(aucun)*"
    ]
  },
  {
    "id": 30,
    "niveau": "B2",
    "titre": "Payer une taxe bizarre en France",
    "transcription": "Bonjour madame, j'habite en France depuis 6 mois seulement dans un studio. J'ai reçu une feuille d'un beau bizarre à payer avant le 15 octobre prochain. Pourquoi ? Oui, c'est normal. Il y a le loyer et, par exemple, il y a les impôts locaux. Ils sont basés sur la superficie de votre studio et sur le lieu de résidence. Quoi ? Il faut que je paie le loyer et cette facture locale ? Mais dans mon pays, ça n'existe pas, ça. Désolée, mais chaque pays a ses lois. Si vous étiez propriétaire, vous paieriez aussi la taxe foncière, mais pas le loyer, bien sûr.",
    "question": "De quoi s'étonne le jeune homme ?",
    "options": {
      "A": "Des différences entre la taxe locative et la taxe foncière.",
      "B": "Du délai accordé pour le paiement des taxes.",
      "C": "Du mode de calcul de la taxe locative.",
      "D": "Du système français de taxe d’habitation."
    },
    "reponse": "D",
    "reponseTexte": "Du système français de taxe d’habitation.",
    "explication": "Un jeune homme qui vient d'emménager en France reçoit une facture pour des impôts locaux et s'en étonne auprès d'un interlocuteur.",
    "indice": [
      "taxe d’habitation",
      "loyer",
      "impôts locaux"
    ]
  },
  {
    "id": 31,
    "niveau": "B2",
    "titre": "Campagne de don de sang étudiants",
    "transcription": "La question du jour, Valérie Cantier, pourquoi l'établissement français du sang, on l'appelle-t-il aux étudiants ? Les jeunes donnent plus facilement leur sang, il faut le savoir, on voit ça comme un premier acte de citoyenneté, un acte solidaire, du style un geste utile, c'est ce qu'on entend des sondages. Un donneur sur cinq a entre 18 et 24 ans en France, mais souvent, il déclare ne pas donner parce qu'ils ne sont pas sollicités, pas assez en tout cas, ou bien parce qu'ils ne savent pas où aller du coup. La semaine prochaine, l'établissement français du sang lance une campagne pour mobiliser les étudiants, le slogan « On est plus qu'amis, on est donneurs de sang ».",
    "question": "Quelle est l'attitude des jeunes face au don du sang ?",
    "options": {
      "A": "Ils déplorent un manque d'information.",
      "B": "Ils refusent de participer à la collecte.",
      "C": "Ils s'inquiètent de la sécurité sanitaire.",
      "D": "Ils souhaitent rencontrer des soignants."
    },
    "reponse": "A",
    "reponseTexte": "Ils déplorent un manque d'information.",
    "explication": "Valérie Cantier explique pourquoi l'établissement français du sang cible les étudiants pour les dons de sang. Elle mentionne les raisons pour lesquelles les jeunes ne donnent pas leur sang.",
    "indice": [
      "*(aucun)*"
    ]
  },
  {
    "id": 32,
    "niveau": "B2",
    "titre": "Enfants qui ne reconnaissent pas les légumes",
    "transcription": "87% des gamins ne savent pas à quoi ressemble une betterave, un tiers n'ont jamais vu de poireau et un cinquième ne reconnaît pas un abricot. En ce qui concerne les pâtes, 72% ne savent pas ce qu'il y a dedans. Ça nous parle de nous aujourd'hui ? Oui, oui, tout à fait. C'est évidemment un des grands problèmes. Il faut redonner des repères sur les aliments, savoir d'où ils viennent, comment ils poussent, à quoi ça sert. Pour ça, il faut emmener les enfants sur les marchés, faire les courses. Il faut leur montrer quand on fait la cuisine les ingrédients que l'on met. Donc il faut réapprendre la culture alimentaire qui est quand même dans nos traditions en France.",
    "question": "Quel problème évoquent les interlocuteurs à propos des enfants ?",
    "options": {
      "A": "Ils abusent de repas très caloriques.",
      "B": "Ils consomment peu de produits frais.",
      "C": "Ils ignorent l'origine de leurs plats.",
      "D": "Ils refusent de manger des légumes."
    },
    "reponse": "C",
    "reponseTexte": "Ils ignorent l'origine de leurs plats.",
    "explication": "Les interlocuteurs discutent des difficultés des enfants à reconnaître certains légumes et fruits, et de leur méconnaissance des ingrédients des plats.",
    "indice": [
      "*(aucun)*"
    ]
  },
  {
    "id": 33,
    "niveau": "B2",
    "titre": "Projet de francisation au Québec",
    "transcription": "Mon rôle ? Je suis en charge de recrutement. En fait, je suis chargée du projet de démarchage en francisation. Ce projet vise à contacter les immigrants qui sont installés ici au Québec depuis trois ans ou plus et qui ont besoin de connaître la langue pour faciliter leur vie quotidienne. Des programmes de cours de français existent déjà, mais nous, notre rôle, c'est de contacter les personnes isolées. Par exemple, les femmes qui, à cause des charges familiales, une grossesse ou des enfants à garder, n'ont pas eu l'occasion d'apprendre le français dès leur arrivée. Qu'est-ce que tu en penses ?",
    "question": "Quel est l'objectif de ce programme ?",
    "options": {
      "A": "Encourager la mobilité des étudiants.",
      "B": "Favoriser l'intégration des étrangers.",
      "C": "Mettre en relation des francophones.",
      "D": "Offrir des emplois aux mères de famille."
    },
    "reponse": "B",
    "reponseTexte": "Favoriser l'intégration des étrangers.",
    "explication": "Une personne explique son rôle dans un projet de francisation au Québec, qui vise à contacter les immigrants isolés pour faciliter leur intégration linguistique.",
    "indice": [
      "immigrants",
      "Québec",
      "francisation",
      "isolées",
      "intégration"
    ]
  },
  {
    "id": 34,
    "niveau": "B2",
    "titre": "Préparer une opération commerciale",
    "transcription": "Après deux années de recherche, nous allons lancer le dernier modèle de notre gamme et votre rôle va être essentiel. Le marché sur lequel votre équipe va intervenir est en pleine croissance. C'est pourquoi nous avons besoin de personnes prêtes à prendre la fonction rapidement. Nous allons maintenant examiner les étapes que vous devez suivre pour être les meilleurs pendant la période de vente.",
    "question": "Que fait cette intervenante ?",
    "options": {
      "A": "Elle annonce la fin prochaine d'un projet.",
      "B": "Elle félicite des collègues pour un travail.",
      "C": "Elle prépare une opération commerciale.",
      "D": "Elle présente une nouveauté à des clients."
    },
    "reponse": "C",
    "reponseTexte": "Elle prépare une opération commerciale.",
    "explication": "Une personne explique à une équipe les étapes à suivre pour préparer une opération commerciale pour le lancement d'un nouveau produit.",
    "indice": [
      "lancer",
      "modèle",
      "période de vente"
    ]
  },
  {
    "id": 35,
    "niveau": "B2",
    "titre": "Le meilleur chasseur devient chef",
    "transcription": "Le sport aurait commencé, d'après les anthropologues, d'après les historiens, d'après les archéologues, quand la chasse est devenue un sport. C'est-à-dire quand on a cessé de chasser pour se nourrir et chasser pour le loisir, chasser pour le symbolique. Le meilleur chasseur, c'est celui qui va devenir le chef du village, celui qui... L'animal, c'est le plus fort physiquement, donc il s'impose symboliquement. Donc, le lien entre la chasse et la guerre est direct. Parce que si on fait encore un autre lien, celui qui est un bon chasseur va être un bon guerrier.",
    "question": "D'après cet intervenant, à quoi peut prétendre le meilleur chasseur d'une communauté ?",
    "options": {
      "A": "À un poste de responsable du village.",
      "B": "À un temps de loisir plus étendu.",
      "C": "À une place spéciale dans l'histoire.",
      "D": "À une plus grosse part de nourriture."
    },
    "reponse": "A",
    "reponseTexte": "À un poste de responsable du village.",
    "explication": "Un intervenant explique l'évolution de la chasse en sport et son lien avec le statut social dans une communauté ancienne.",
    "indice": [
      "*(aucun)*"
    ]
  },
  {
    "id": 36,
    "niveau": "B2",
    "titre": "Étudiants et don du sang",
    "transcription": "La question du jour, Valérie Cantier, pourquoi l'établissement français du sang en appelle-t-il aux étudiants ? Les jeunes donnent plus facilement leur sang, il faut le savoir, ils voient ça comme un premier acte de citoyenneté, un acte solidaire, disent-ils, un geste utile, c'est ce qui ressort des sondages. Un donneur sur cinq a entre 18 et 24 ans en France, mais souvent, ils déclarent ne pas donner parce qu'ils ne sont pas sollicités, pas assez en tout cas, ou bien parce qu'ils ne savent pas où aller. Du coup, la semaine prochaine, l'établissement français du sang lance une campagne pour mobiliser les étudiants. Le slogan, on est plus qu'amis, on est donneurs de sang.",
    "question": "Quelle est l'attitude des jeunes face au don du sang ?",
    "options": {
      "A": "Ils déplorent un manque d'information.",
      "B": "Ils refusent de participer à la collecte.",
      "C": "Ils s'inquiètent de la sécurité sanitaire.",
      "D": "Ils souhaitent rencontrer des soignants."
    },
    "reponse": "A",
    "reponseTexte": "Ils déplorent un manque d'information.",
    "explication": "Valérie Cantier explique pourquoi l'établissement français du sang cible les étudiants pour le don du sang. Elle mentionne que les jeunes sont souvent motivés par un sentiment de citoyenneté et de solidarité.",
    "indice": [
      "*(aucun)*"
    ]
  },
  {
    "id": 37,
    "niveau": "B2",
    "titre": "Ouverture des magasins le dimanche",
    "transcription": "Autoriser les magasins à ouvrir le dimanche en France serait-ce la solution pour développer la croissance et l'emploi ? Le directeur de la revue 60 millions de consommateurs s'explique au micro d'Emmanuel Kessler. Le secrétaire d'État à la consommation relevait en visitant un dimanche un centre commercial de la région parisienne que les boutiques y réalisent sur ce seul jour plus du tiers du chiffre d'affaires de toute la semaine. Oui, mais voilà. Ce qu'on achète le dimanche, on ne l'achète pas les autres jours et vice-versa. Attention aux illusions d'optique. Les consommateurs dépensent d'abord en fonction de leurs revenus et non en fonction des jours d'ouverture des magasins. C'est simplement une autre répartition du temps d'achat. Donc, quel impact pour la croissance et l'emploi en général ? Je crains que ça ne change pratiquement rien.",
    "question": "D'après le directeur de la revue, pourquoi l'ouverture des magasins le dimanche aurait-elle peu d'influence sur l'économie française ?",
    "options": {
      "A": "Parce que la consommation dépend avant tout du pouvoir d’achat.",
      "B": "Parce que la création d’emploi restera rare dans ce secteur d’activité.",
      "C": "Parce que les commerces font des bénéfices sur les ventes en semaine.",
      "D": "Parce que les Français ne sont pas habitués à consommer le dimanche."
    },
    "reponse": "A",
    "reponseTexte": "Parce que la consommation dépend avant tout du pouvoir d’achat.",
    "explication": "Le directeur de la revue « 60 millions de consommateurs » discute avec Emmanuel Kessler des effets économiques d'autoriser les magasins à ouvrir le dimanche en France.",
    "indice": [
      "*(aucun)*"
    ]
  },
  {
    "id": 38,
    "niveau": "B2",
    "titre": "Commander des boissons au café",
    "transcription": "Thé ? Café ? Trois cafés, les garçons ? Julie, café aussi ? Euh, non, je préférerais un thé. Nature ? Citron ? Bergamote ? Ce que tu veux, avec un peu de lait. Trois cafés et deux thés au lait. Je n'en ai pas pour longtemps. Continuez à jouer. Distribuez sans moi.",
    "question": "Que font les amis ?",
    "options": {
      "A": "Ils dînent au restaurant.",
      "B": "Ils jouent aux cartes.",
      "C": "Ils révisent leurs leçons.",
      "D": "Ils préparent le repas."
    },
    "reponse": "B",
    "reponseTexte": "Ils jouent aux cartes.",
    "explication": "Des amis commandent des boissons au café. Ils discutent des choix de boissons et de la préparation.",
    "indice": [
      "café",
      "thé",
      "jouer",
      "distribuez"
    ]
  },
  {
    "id": 39,
    "niveau": "B2",
    "titre": "Retard de livraison de vêtements",
    "transcription": "Allô, bonjour, je suis Madame Leroy. J'ai passé une commande de vêtements par téléphone il y a dix jours avec une livraison à domicile. Et pourtant, rien n'est arrivé pour l'instant. Donnez-moi votre numéro client Blanche Maison, s'il vous plaît. Je vais vérifier. En effet, la livraison n'a pas été faite. La neige a interrompu le trafic. Le transporteur ne pourra vous livrer que demain.",
    "question": "Pourquoi y a-t-il un retard de livraison ?",
    "options": {
      "A": "La circulation routière est coupée.",
      "B": "La commande s'est perdue.",
      "C": "Le transporteur est en grève.",
      "D": "Les marchandises ont été volées."
    },
    "reponse": "A",
    "reponseTexte": "La circulation routière est coupée.",
    "explication": "Madame Leroy appelle une entreprise pour signaler que sa commande de vêtements n'est pas arrivée comme prévu.",
    "indice": [
      "commande",
      "livraison",
      "neige",
      "transporteur"
    ]
  },
  {
    "id": 40,
    "niveau": "B2",
    "titre": "Français qui partent à l'étranger",
    "transcription": "Gros plan sur les Français qui partent pour réussir. Oui, tous ces Français que l'on dit nuls en anglais, ils n'ont plus peur de partir à la conquête du monde. En fait, il est toujours un peu difficile de cerner leur motivation profonde entre ceux qui franchissent les frontières pour monter un business, ceux qui cherchent un job, ceux qui s'exilent pour fuir une fiscalité asphyxiante, ou bien ceux qui veulent tout simplement profiter d'une retraite au soleil. Les journalistes évoquent une tendance qui concerne les Français.",
    "question": "Laquelle ?",
    "options": {
      "A": "Ils aiment passer leurs vieux jours dans le sud de la France.",
      "B": "Ils osent davantage partir à l'étranger qu'auparavant.",
      "C": "Ils payent plus d'impôts que les autres citoyens européens.",
      "D": "Ils prennent des cours de langue pour améliorer leur niveau."
    },
    "reponse": "B",
    "reponseTexte": "Ils osent davantage partir à l'étranger qu'auparavant.",
    "explication": "Identifier la tendance qui concerne les Français selon les journalistes. Attention aux pièges des autres options qui sont aussi mentionnées dans le texte.",
    "indice": [
      "Français",
      "partir",
      "étranger",
      "tendance"
    ]
  },
  {
    "id": 41,
    "niveau": "B2",
    "titre": "Colis en retard à cause de la neige",
    "transcription": "Bonjour Tom, c'est Monsieur Durand. Avez-vous bien reçu le colis que nous a envoyé notre client japonais ? Toutes mes excuses monsieur, j'ai oublié de vous le dire, j'ai contacté le bureau de poste hier. Ils ont pris beaucoup de retard à cause de la neige et ne pourront pas distribuer le courrier avant vendredi. D'accord. N'oubliez pas de me prévenir, car c'est vraiment urgent. J'espère avoir ce colis d'ici vendredi matin.",
    "question": "Pourquoi M. Durand appelle-t-il ?",
    "options": {
      "A": "Pour annoncer une nouvelle.",
      "B": "Pour annuler une livraison.",
      "C": "Pour faire une réclamation.",
      "D": "Pour obtenir une information."
    },
    "reponse": "D",
    "reponseTexte": "Pour obtenir une information.",
    "explication": "M. Durand appelle Tom pour savoir si un colis est arrivé. Le colis est en retard à cause de la neige.",
    "indice": [
      "colis",
      "client japonais",
      "bureau de poste",
      "neige",
      "urgent"
    ]
  },
  {
    "id": 42,
    "niveau": "B2",
    "titre": "Vivre dans une oasis écolo",
    "transcription": "Si demain, vous viviez dans une oasis, je ne vous parle pas d'un lac avec des petits palmiers au milieu du désert, mais d'une communauté, d'une petite communauté en France, en ville ou à la campagne, où vos voisins seraient comme vous, décidés à vivre de façon plus écolo. C'est ça les oasis, 500 petits groupes aujourd'hui, des familles qui vivent côte à côte, mais aussi ensemble. Et c'est peut-être avant-gardiste. Prenez par exemple en Eure-et-Loire l'éco-hameau du Plessis. 28 familles, soit 60 personnes, qui vivent dans des bâtiments bioclimatiques, dont le chauffage, pour faire simple, ne pollue pas. Qui, toutes, ont renoncé à se brancher au tout-à-l'égout. Leurs eaux grises sont traitées dans des bassins plantés de roseaux qui dépolluent. C'est parfaitement légal et ça marche.",
    "question": "Que recherchent les habitants de ces oasis ?",
    "options": {
      "A": "Adopter un mode de vie collectif responsable.",
      "B": "Construire un réseau d'assainissement des eaux.",
      "C": "Faire la promotion de logements écologiques.",
      "D": "Mener une politique d'aménagement des villes."
    },
    "reponse": "A",
    "reponseTexte": "Adopter un mode de vie collectif responsable.",
    "explication": "Une personne décrit des communautés écologiques en France où les habitants vivent de manière durable et partagent des valeurs communes.",
    "indice": [
      "*(aucun)*"
    ]
  },
  {
    "id": 43,
    "niveau": "B2",
    "titre": "Exposition d'art contemporain",
    "transcription": "Je suis allé voir l'exposition que tu m'as conseillée. Et qu'en as-tu pensé ? C'était sympa, mais il y a beaucoup d'œuvres que je n'ai pas comprises. Et puis, j'y suis allé jeudi en soirée, il y avait du monde. Tu aurais dû attendre ce week-end. J'y retourne. Et j'aurais pu t'expliquer pas mal de choses. C'est vrai que tu es passionné d'art contemporain. La prochaine fois, je te demanderai de m'accompagner.",
    "question": "Que regrette le jeune homme ?",
    "options": {
      "A": "D'avoir choisi d'y aller seul.",
      "B": "D'avoir attendu dans une file.",
      "C": "D'avoir manqué quelques œuvres.",
      "D": "D'avoir suivi le conseil de son amie."
    },
    "reponse": "A",
    "reponseTexte": "D'avoir choisi d'y aller seul.",
    "explication": "Un jeune homme parle d'une exposition d'art contemporain qu'il a visitée. Il explique à son ami qu'il n'a pas tout compris et qu'il y avait beaucoup de monde.",
    "indice": [
      "exposition",
      "œuvres",
      "passionné",
      "art contemporain"
    ]
  },
  {
    "id": 44,
    "niveau": "B2",
    "titre": "Accident de vélo et soirée annulée",
    "transcription": "Allô, Marie, qu'est-ce que vous faites ? On vous attend pour commencer le repas. Ah, Benjamin, excuse-moi, j'ai oublié de t'appeler. On sort juste de l'hôpital. Mathieu a fait une chute de vélo et s'est cassé le bras. On l'a conduit aux urgences et il a été plâtré. On va rester à la maison ce soir car il n'a pas le moral. Il avait sa finale de rugby demain et il ne pourra pas jouer. Ah mince, ne t'inquiète pas, nous nous verrons un autre jour. Je souhaite lui un bon rétablissement de notre part.",
    "question": "Qu'explique Marie à Benjamin ?",
    "options": {
      "A": "Elle va assister à un match de rugby.",
      "B": "Elle va faire une promenade à vélo.",
      "C": "Elle va passer la soirée à la maison.",
      "D": "Elle va voir un ami malade à l'hôpital."
    },
    "reponse": "C",
    "reponseTexte": "Elle va passer la soirée à la maison.",
    "explication": "Marie appelle Benjamin pour expliquer qu'ils ne pourront pas venir à la soirée car son fils s'est blessé en vélo et a besoin de repos.",
    "indice": [
      "chute",
      "plâtré",
      "finale",
      "rugby"
    ]
  },
  {
    "id": 45,
    "niveau": "B2",
    "titre": "Étudier en Allemagne vs France",
    "transcription": "En Allemagne, Cattel a profité d'études peu coûteuses, mais aussi découvert un rapport aux études supérieures complètement décomplexé par rapport à ce qu'on connaît en France. Contrairement à la France où on est vraiment dans un programme prédéfini avec une option fortement recommandée, donc on n'a pas vraiment le choix, là j'ai pu choisir mes matières. J'ai pris des cours sur la presse, sur Napoléon, sur... Napoléon, c'est original ça. Oui, Napoléon, c'est marrant de voir la vision. Par exemple, eux, ils ne disent pas la défaite de Waterloo, mais la victoire de Waterloo.",
    "question": "Pourquoi Cattel a-t-elle apprécié ses études en Allemagne ?",
    "options": {
      "A": "Elle a changé de cursus universitaire.",
      "B": "Elle a rencontré des gens étonnants.",
      "C": "Elle a suivi des enseignements variés.",
      "D": "Elle a trouvé le niveau des cours facile."
    },
    "reponse": "C",
    "reponseTexte": "Elle a suivi des enseignements variés.",
    "explication": "Cattel compare ses études en Allemagne et en France, expliquant la flexibilité des choix de matières en Allemagne.",
    "indice": [
      "*(aucun)*"
    ]
  },
  {
    "id": 46,
    "niveau": "B2",
    "titre": "Travail d'assistante d'institutrice aux USA",
    "transcription": "Pouvez-vous me parler de votre expérience aux États-Unis ? Est-ce que ça vous a plu ? Oui, beaucoup. Je suis restée là-bas un an. J'étais l'assistante d'une institutrice dans une école maternelle. C'était votre premier long séjour à l'étranger ? Aussi long, oui, mais je suis déjà partie plusieurs fois en Grande-Bretagne pendant les mois d'été. Nous avons de la famille à Londres. Vous n'avez donc pas de difficultés pour communiquer en anglais ? Non, je suis parfaitement bilingue.",
    "question": "Qu'apprend-on sur cette jeune femme ?",
    "options": {
      "A": "Elle a gardé des enfants dans une famille britannique.",
      "B": "Elle a passé son enfance dans un pays étranger.",
      "C": "Elle a suivi des études dans un lycée bilingue.",
      "D": "Elle a travaillé avec une institutrice américaine."
    },
    "reponse": "D",
    "reponseTexte": "Elle a travaillé avec une institutrice américaine.",
    "explication": "Une personne raconte son expérience en tant qu'assistante d'institutrice dans une école maternelle aux États-Unis pendant un entretien.",
    "indice": [
      "États-Unis",
      "assistante",
      "institutrice",
      "école maternelle"
    ]
  },
  {
    "id": 47,
    "niveau": "B2",
    "titre": "Conférence sur les sciences",
    "transcription": "Les avancées des sciences et des techniques se lèvent des questions qui touchent à la vie de chacun et font débat. Le progrès n'est plus une évidence. Les citoyens veulent comprendre ce que la recherche rend possible. Le Collège de la Cité des Sciences et de l'Industrie organise tout au long de l'année des cycles de conférences et de débats où des chercheurs viennent à la rencontre du public. L'ambition est de permettre à chacun d'acquérir des connaissances fondamentales, de s'informer des développements récents, de se former une opinion éclairée, pour que la science devienne une composante de la culture.",
    "question": "Quel est le but du Collège de la Cité des Sciences et de l'Industrie ?",
    "options": {
      "A": "Délivrer des diplômes à ceux qui suivent ses cours.",
      "B": "Élargir les connaissances scientifiques des participants.",
      "C": "Faire progresser la recherche scientifique en France.",
      "D": "Recueillir des fonds pour les laboratoires français."
    },
    "reponse": "B",
    "reponseTexte": "Élargir les connaissances scientifiques des participants.",
    "explication": "Le Collège de la Cité des Sciences et de l'Industrie organise des conférences pour informer le public sur les avancées scientifiques.",
    "indice": [
      "*(aucun)*"
    ]
  },
  {
    "id": 48,
    "niveau": "B2",
    "titre": "Visiter le sud de la France",
    "transcription": "Bonjour monsieur, puis-je vous renseigner ? Bonjour, je souhaiterais visiter le sud de la France avec mon épouse. Eh bien, nous pouvons vous proposer un séjour sur la côte d'Azur. Vous pourriez acheter un forfait qui comprend le transport aller-retour, ainsi que les nuits d'hôtel et les trajets de bus entre les villes. Voici la brochure du séjour. Je vais en parler à ma femme et je reviendrai demain. Merci.",
    "question": "Quel est le projet de ce client ?",
    "options": {
      "A": "Découvrir une région de France.",
      "B": "Partir vivre sur la Côte d'Azur.",
      "C": "Rejoindre son épouse dans le Sud.",
      "D": "Rendre visite à un ami français."
    },
    "reponse": "A",
    "reponseTexte": "Découvrir une région de France.",
    "explication": "Un client demande des informations pour visiter le sud de la France avec son épouse. Un conseiller touristique propose un séjour sur la côte d'Azur avec un forfait incluant transport et hébergement.",
    "indice": [
      "sud de la France",
      "côte d'Azur",
      "forfait"
    ]
  },
  {
    "id": 49,
    "niveau": "B2",
    "titre": "Sport et études des enfants",
    "transcription": "Est-ce que c'est toujours compatible, ça, d'avoir beaucoup d'heures de sport comme ça et de pouvoir concilier les études aussi ? Non, spontanément, ce n'est pas toujours compatible. Et puis, c'est un grand paradoxe qui s'installe d'entrée de jeu parce qu'on fait faire du sport à nos enfants pour développer des valeurs de rigueur, de saines habitudes de vie, de qualité de vie. Et puis, on se retrouve à devoir composer avec des attitudes qui ne sont pas très, très de grande qualité. On va faire manger les enfants dans la voiture en s'en allant à l'aréna. On va faire des devoirs deux, trois fois plus parce qu'on sait que tel ou tel jour, on n'aura pas le temps de les faire. Donc, on fait plusieurs entorses à l'hygiène de vie parfois pour réussir à rencontrer les horaires.",
    "question": "Qu'est-ce qui inquiète cette mère de famille ?",
    "options": {
      "A": "La fréquence des compétitions sportives.",
      "B": "Le contenu des programmes sportifs.",
      "C": "Les contraintes liées aux pratiques sportives.",
      "D": "L'insuffisance des résultats sportifs."
    },
    "reponse": "C",
    "reponseTexte": "Les contraintes liées aux pratiques sportives.",
    "explication": "Une mère de famille s'inquiète des difficultés à concilier les nombreuses heures de sport de son enfant avec ses études. Elle évoque les compromis sur les habitudes de vie pour respecter les horaires sportifs.",
    "indice": [
      "*(aucun)*"
    ]
  },
  {
    "id": 50,
    "niveau": "B2",
    "titre": "Client qui n'arrive pas à monter sa bibliothèque",
    "transcription": "Bonjour, je suis bien au service à la vente de meubles modernes. Oui, bonjour, je suis Michel, bonjour. C'est au sujet de la bibliothèque que j'ai achetée chez vous. Depuis deux jours, j'essaie de la monter, mais hélas, je n'ai pas dû comprendre comment emboîter les parties vitrées sur les panneaux en bois. Il me semble qu'il n'y en a pas assez. Écoutez, je ne gère pas le côté technique. Je vais donc vous mettre en communication avec le service compétent qui vous expliquera comment réanimer la trampage.",
    "question": "Que demande le client ?",
    "options": {
      "A": "La visite d'un technicien.",
      "B": "L'échange d'un article abîmé.",
      "C": "Le conseil d'un professionnel.",
      "D": "Le remboursement d'un produit."
    },
    "reponse": "C",
    "reponseTexte": "Le conseil d'un professionnel.",
    "explication": "Un client appelle le service client pour demander de l'aide car il n'arrive pas à monter sa bibliothèque achetée en magasin.",
    "indice": [
      "bibliothèque",
      "monter",
      "service compétent",
      "réanimer la trampage"
    ]
  },
  {
    "id": 51,
    "niveau": "B2",
    "titre": "Ramasser un sapin de Noël",
    "transcription": "Bonjour, je suis nouveau à Charlebourg. Vous sauriez ce que je dois faire de mon arbre de Noël pour qu'il soit ramassé ? Vous n'avez qu'à déneiger devant chez vous et puis le laisser dans la rue. La collecte a lieu demain matin. Il est grand, votre arbre ? Regardez, je l'ai mis dans le jardin. Il fait bien trois mètres de haut. Alors, il faut le couper en deux. Et puis aussi, enlever tout ce qui est dessus.",
    "question": "Qu'est-ce que cette personne cherche à savoir ?",
    "options": {
      "A": "Comment protéger ses végétaux ?",
      "B": "Comment recycler son sapin ?",
      "C": "Comment replanter un arbre ?",
      "D": "Comment scier une branche ?"
    },
    "reponse": "B",
    "reponseTexte": "Comment recycler son sapin ?",
    "explication": "Un nouvel habitant de Charlebourg demande comment se débarrasser de son sapin de Noël pour qu'il soit ramassé par la municipalité.",
    "indice": [
      "arbre de Noël",
      "ramassé",
      "collecte",
      "recycler"
    ]
  },
  {
    "id": 52,
    "niveau": "B2",
    "titre": "Émission sur l'optimisme réaliste",
    "transcription": "Bonjour, ravi de vous retrouver dans Grand Bien Vous Fasse. La pauvreté dans le monde recule, la démocratie avance, la couche d'ozone se reconstitue, ou encore le monde n'a jamais connu aussi peu de violence. Ce matin, nous recevons un rameur à contre-courant de certaines idées reçues. Le spécialiste en psychologie positive, Jacques Lecomte, nous donne à voir ce matin une humanité en progrès. En s'appuyant sur une série de chiffres, de statistiques et de rapports internationaux fiables, Jacques Lecomte nous invite à regarder notre monde avec un optimisme réaliste. Il appelle ça le petit réalisme, loin des discours catastrophistes des prophètes de malheur.",
    "question": "Que propose cette émission ?",
    "options": {
      "A": "Un point de vue sur la situation mondiale aujourd'hui.",
      "B": "Une analyse de l'actualité économique dans le monde.",
      "C": "Une critique des conséquences de la mondialisation.",
      "D": "Une réflexion sur les relations politiques mondiales."
    },
    "reponse": "A",
    "reponseTexte": "Un point de vue sur la situation mondiale aujourd'hui.",
    "explication": "L'animateur d'une émission radio présente le sujet du jour sur l'optimisme réaliste en accueillant Jacques Lecomte, spécialiste en psychologie positive.",
    "indice": [
      "*(aucun)*"
    ]
  },
  {
    "id": 53,
    "niveau": "B2",
    "titre": "Loïc Lemaire veut être indépendant",
    "transcription": "On l'a lu récemment par le magazine Business Week parmi les 25 personnes les plus influentes du web. Loïc Lemaire qui vit désormais à San Francisco en Californie, au cœur de la Silicon Valley. C'est là qu'il a créé sa nouvelle société sismique qui n'est pas un coup d'essai. Ce diplômé de l'école des hautes études commerciales de Paris est devenu au fil du temps un serial entrepreneur. Loïc Lemaire. Mon père était entrepreneur et mon grand-père aussi. J'étais commerçant. Je n'ai jamais eu vraiment envie de travailler pour qui que ce soit d'autre que moi, y compris, peu importe la taille de ce que je faisais, je pense que je serais volontiers indépendant. J'ai toujours voulu créer ma propre entreprise dans l'Internet, donc c'est les deux passions que j'ai toujours.",
    "question": "Que veut Loïc Lemaire ?",
    "options": {
      "A": "Avoir la liberté d'être son propre patron.",
      "B": "Innover dans le domaine informatique.",
      "C": "Mener un projet aux États-Unis.",
      "D": "Mieux réussir que ses parents."
    },
    "reponse": "A",
    "reponseTexte": "Avoir la liberté d'être son propre patron.",
    "explication": "Loïc Lemaire parle de son désir d'indépendance et de sa carrière en tant qu'entrepreneur dans la Silicon Valley.",
    "indice": [
      "*(aucun)*"
    ]
  },
  {
    "id": 54,
    "niveau": "B2",
    "titre": "Plonger dans l'imaginaire",
    "transcription": "Je me souviens très bien du premier livre, pas du premier livre lu, mais du premier à avoir provoqué en moi la joie de la lecture. Celui qui fait que je ne lis plus que des romans, parce que la lecture est pour moi le plaisir du récit qui construit de nouveaux mondes. C'était un volume du Club des Cinq d'Enid Blyton. Je ressens encore dans mon corps la qualité et l'intensité de cette lecture. S'absorber totalement dans le texte, devenir sourde et aveugle au monde, vivre l'action, voir la vie pétiller et se teinter de nouvelles couleurs, nommer des sensations inconnues, entrevoir des passions nouvelles, refermer le livre avec bonheur et regret, et attendre le prochain avec une fiévreuse impatience.",
    "question": "Pourquoi cette personne aime-t-elle lire ?",
    "options": {
      "A": "Pour comprendre la société.",
      "B": "Pour enrichir sa culture.",
      "C": "Pour passer le temps.",
      "D": "Pour plonger dans l'imaginaire."
    },
    "reponse": "D",
    "reponseTexte": "Pour plonger dans l'imaginaire.",
    "explication": "Une personne raconte comment elle a découvert le plaisir de la lecture grâce au premier livre qui l'a vraiment marquée, en décrivant les sensations et émotions qu'elle ressentait à cette époque.",
    "indice": [
      "récit",
      "mondes",
      "imaginaire"
    ]
  },
  {
    "id": 55,
    "niveau": "B2",
    "titre": "Éviter le verbe être dans une dissertation",
    "transcription": "Étudiants ou lycéens, il existe une façon très simple d'améliorer vos copies. c'est d'éviter l'utilisation du verbe être. Ce verbe apparaît trop souvent dans les dissertations. Or, le verbe être, c'est la description d'un état. Et une succession de descriptions d'états n'a jamais constitué une explication. Vous pouvez vous entraîner à remplacer le verbe être dans vos textes par d'autres verbes plus appropriés à ce que vous voulez dire. Vous verrez, vous allez enrichir votre vocabulaire et vous trouverez votre production bien plus intéressante. Après tout, Georges Perec a écrit un livre qui s'appelle La disparition, dans lequel il n'a pas utilisé la lettre E. Vous pouvez bien rédiger une rédaction sans être.",
    "question": "Quel conseil est donné pour améliorer la qualité d'un texte ?",
    "options": {
      "A": "Aller à l'essentiel.",
      "B": "Faire des phrases courtes.",
      "C": "Hiérarchiser ses idées.",
      "D": "S'exprimer avec précision."
    },
    "reponse": "D",
    "reponseTexte": "S'exprimer avec précision.",
    "explication": "On te demande de comprendre quel conseil est donné pour améliorer la qualité d'un texte. Le piège est de ne pas se laisser distraire par les autres options qui sont aussi des conseils utiles, mais pas celui donné dans le texte.",
    "indice": [
      "*(aucun)*"
    ]
  },
  {
    "id": 56,
    "niveau": "B2",
    "titre": "Révisions avant un examen",
    "transcription": "Tu viens à l'anniversaire de Bertrand samedi ? Je ne sais pas encore. J'ai un examen lundi prochain. Tu es prête ? Plus ou moins. Mes cousins de Toulouse sont venus passer une partie des vacances à la maison. Et j'ai dû leur faire visiter les monuments et les musées de Paris. Tu as pu travailler un peu ? Oui, mais je dois encore étudier les maths.",
    "question": "De quoi parlent les deux jeunes filles ?",
    "options": {
      "A": "De la préparation des vacances.",
      "B": "Des révisions d’un examen.",
      "C": "D’un anniversaire surprise.",
      "D": "D’un projet de visites culturelles."
    },
    "reponse": "B",
    "reponseTexte": "Des révisions d’un examen.",
    "explication": "Deux jeunes filles discutent de leurs activités respectives pendant les vacances. L'une parle des révisions pour son examen à venir tandis que l'autre raconte avoir fait visiter Paris à ses cousins.",
    "indice": [
      "examen",
      "maths",
      "réviser"
    ]
  },
  {
    "id": 57,
    "niveau": "B2",
    "titre": "Retard de train et remboursement",
    "transcription": "Mesdames, Messieurs, suite à un incident technique, notre train arrive en gare de Valence TGV avec un retard de 45 minutes. Nous invitons tous les voyageurs qui descendent à se rapprocher du personnel de gare. Il vous remettra une enveloppe et un document à remplir et à retourner à l'adresse indiquée pour que la SNCF puisse vous virer la somme correspondant au prix de votre billet de train à titre de dédommagement. Nous vous prions de bien vouloir nous excuser pour la gêne occasionnée. Assurez-vous de n'avoir rien oublié à vos places. Bonne fin de journée.",
    "question": "Quelle information le chef de train donne-t-il aux voyageurs ?",
    "options": {
      "A": "Ils devront demander le remboursement de leur billet par écrit.",
      "B": "Ils devront descendre en gare de Valence suite à une panne.",
      "C": "Ils devront patienter à leur place jusqu'à l'arrêt complet du train.",
      "D": "Ils devront présenter leur billet à leur descente du train."
    },
    "reponse": "A",
    "reponseTexte": "Ils devront demander le remboursement de leur billet par écrit.",
    "explication": "Le chef de train annonce aux passagers qu'il y a un retard de 45 minutes à cause d'un incident technique et donne des instructions pour obtenir un remboursement.",
    "indice": [
      "retard",
      "remboursement",
      "dédommagement"
    ]
  },
  {
    "id": 58,
    "niveau": "B2",
    "titre": "Service de shopping de Noël à Angers",
    "transcription": "En période de grande bousculade dans les magasins pour les achats de fin d'année, si la perspective des difficultés de circulation ou de stationnement vous angoisse, voici une initiative qui va peut-être vous intéresser. La ville d'Angers a mis en place un service original pour que les particuliers puissent faire leur course de Noël sans subir le stress des transports en commun. De 14h à 19h, un chauffeur vient vous chercher à votre domicile et vous conduit en centre-ville à proximité des magasins dans lesquels vous souhaitez vous rendre. Ce service est gratuit à condition d'avoir de nombreux achats à effectuer.",
    "question": "Qu'est-ce qui caractérise ce service ?",
    "options": {
      "A": "Il a associé le tourisme et le shopping.",
      "B": "Il est accessible la journée entière.",
      "C": "Il regroupe les personnes âgées.",
      "D": "Il s'adresse aux acheteurs à Noël."
    },
    "reponse": "D",
    "reponseTexte": "Il s'adresse aux acheteurs à Noël.",
    "explication": "Identifier le public cible d'un service de transport gratuit pour les achats de Noël. Le piège est de se concentrer sur des détails secondaires comme le tourisme ou les horaires.",
    "indice": [
      "service",
      "achats",
      "Noël",
      "gratuit",
      "chauffeur"
    ]
  },
  {
    "id": 59,
    "niveau": "B2",
    "titre": "Football féminin et coupe du monde",
    "transcription": "La première des choses pour médiatiser les footballeuses de façon appropriée, ce serait de se centrer uniquement sur leur performance sur le terrain, ce qui n'est clairement pas le cas actuellement. On entend régulièrement encore des remarques sexistes, voire misogynes. D'ailleurs, vous parlez de foot féminin et de coupe du monde féminine. Pour moi, c'est déjà un problème d'aborder cette question de cette façon-là. D'une part parce que quand on dit football féminin, on sous-entend que finalement c'est une autre discipline, un autre football. Parce qu'on ne dit jamais football masculin, comme si c'était la norme, le dogme. Et la deuxième chose, c'est que quand on dit football féminin, ça sous-entend encore une fois l'injonction à la féminité.",
    "question": "Que déplore cet invité concernant les footballeuses ?",
    "options": {
      "A": "L'inégalité salariale avec les hommes.",
      "B": "Le manque de sérieux dans la sélection.",
      "C": "Les discours discriminants stéréotypés.",
      "D": "Les rares retransmissions des matchs."
    },
    "reponse": "C",
    "reponseTexte": "Les discours discriminants stéréotypés.",
    "explication": "Un invité critique la manière dont les médias parlent des footballeuses et de la coupe du monde féminine.",
    "indice": [
      "*(aucun)*"
    ]
  },
  {
    "id": 60,
    "niveau": "B2",
    "titre": "Conseils radio pour conduire en hiver",
    "transcription": "Chers auditeurs, au volant, restez vigilants, l'hiver peut vous surprendre. Que vous soyez expérimenté ou non, surtout quand il neige beaucoup comme aujourd'hui, Ralentissez et avant de prendre la route, n'oubliez pas de consulter Québec 511 sur le web. Et pour les jeunes conducteurs, nous rappelons que le concours « Déroule l'hiver » vous offre la possibilité de gagner un cours de conduite préventive en conditions hivernales. N'hésitez pas à participer.",
    "question": "Que conseille l'animateur radio aux automobilistes ?",
    "options": {
      "A": "De changer leurs pneus.",
      "B": "De réviser leur voiture.",
      "C": "De se montrer prudent.",
      "D": "De suivre une formation."
    },
    "reponse": "C",
    "reponseTexte": "De se montrer prudent.",
    "explication": "Un animateur radio donne des conseils aux conducteurs pour la conduite en hiver, notamment de ralentir et de consulter une source d'information sur les conditions routières.",
    "indice": [
      "vigilants",
      "ralentissez",
      "conduite préventive"
    ]
  },
  {
    "id": 61,
    "niveau": "B2",
    "titre": "Couturière intermittente avec deux enfants",
    "transcription": "Bonjour chers auditeurs. Aujourd'hui, nous rencontrons Marie-Odile, chez elle, à Saint-Mandé, dans la banlieue parisienne. Elle travaille à son domicile de manière intermittente. Son activité principale est de confectionner des costumes pour différents théâtres. Elle est donc couturière de formation. En outre, elle accepte d'autres menus travaux de couture pour des particuliers. Elle n'a donc pas de revenu fixe tous les mois. Marie-Odile, qu'est-ce qui est le plus difficile dans votre vie d'intermittente ? C'est souvent difficile de joindre les deux bouts chaque mois. Car avec deux enfants à élever et les revenus de mon mari qui est dans la même situation que moi, puisqu'il est décorateur pour le théâtre, nous n'arrivons pas toujours à faire des économies.",
    "question": "Pourquoi la situation de Marie-Odile est-elle difficile ?",
    "options": {
      "A": "Parce que l'éducation des enfants coûte cher.",
      "B": "Parce que la famille a des revenus irréguliers.",
      "C": "Parce que le théâtre a cessé de lui passer commande.",
      "D": "Parce que son mari a perdu son travail récemment."
    },
    "reponse": "B",
    "reponseTexte": "Parce que la famille a des revenus irréguliers.",
    "explication": "Marie-Odile, couturière intermittente, explique les défis financiers qu'elle rencontre chaque mois en élevant ses deux enfants avec des revenus irréguliers.",
    "indice": [
      "*(aucun)*"
    ]
  },
  {
    "id": 62,
    "niveau": "B2",
    "titre": "Cours de bricolage pour femmes",
    "transcription": "Voici l'initiative originale d'une société spécialisée dans les cours de bricolage et qui accueille les femmes jeunes ou moins jeunes, mariées, divorcées, célibataires, étudiantes ou même retraitées. Celles qui s'inscrivent n'ont qu'un désir, ne plus se sentir démunies face à une chasse d'eau qui fuit. Marie-Hélène a assisté au cours du samedi matin. Le B.A.-BA de la plomberie. Le plus dur au départ, c'est le vocabulaire. Teflon, joint, siphon, une langue étrangère pour Marie-Hélène qui nous explique sa motivation. Pour être plus indépendante et savoir changer un joint, éventuellement des robinets. Est-ce que c'est rassurant qu'il n'y ait que des femmes ? Peut-être. Parce qu'on se dit que les hommes risqueraient de se moquer de nous. C'est plus, oui, rassurant.",
    "question": "Pour quelles raisons Marie-Hélène fréquente-t-elle les cours de bricolage ?",
    "options": {
      "A": "Pour apprendre les termes spécifiques de la plomberie.",
      "B": "Pour économiser les frais d'un dépannage par un artisan.",
      "C": "Pour être autonome face aux petits travaux de la maison.",
      "D": "Pour rencontrer d'autres femmes ayant la même passion."
    },
    "reponse": "C",
    "reponseTexte": "Pour être autonome face aux petits travaux de la maison.",
    "explication": "Marie-Hélène parle de son expérience dans un cours de bricolage spécialisé en plomberie pour femmes, expliquant pourquoi elle a décidé d'y participer.",
    "indice": [
      "*(aucun)*"
    ]
  },
  {
    "id": 63,
    "niveau": "B2",
    "titre": "Cadeau pour un nouveau-né",
    "transcription": "J'ai le cadeau pour le petit humain. Tu as vu la carte et le plan d'Arnaud ? La carte est dans la voiture. C'est toi qui as le plat. Mais non, je te l'ai donné avec le faire-part. Je ne sais pas ce que j'en ai fait. Bon ben, ça fait rien. On va bien trouver. Oui, j'espère. La maternité est juste derrière le restaurant, près de la rivière. C'est celui où on a fêté l'anniversaire de mariage de Nidara. Ah oui, c'est pour le tourner avec mes collègues. J'ai fait une rééducation comme directeur. Il a raison du déplacement de ce couple.",
    "question": "Pour quelle occasion ce couple se déplace-t-il ?",
    "options": {
      "A": "Un mariage",
      "B": "Un anniversaire",
      "C": "Une naissance",
      "D": "Une promotion"
    },
    "reponse": "C",
    "reponseTexte": "Une naissance",
    "explication": "Deux personnes discutent d'un cadeau pour un bébé qui vient de naître. Elles cherchent des objets qu'elles ont préparés pour la maternité.",
    "indice": [
      "cadeau",
      "petit humain",
      "maternité",
      "faire-part"
    ]
  },
  {
    "id": 64,
    "niveau": "B2",
    "titre": "Envoyer un colis en express",
    "transcription": "Bonjour, je voudrais envoyer ce colis en Outre-mer en express. D'accord. Alors, ça vous fera 20 euros, s'il vous plaît. 20 euros ? Oui, mais si vous préférez, nous proposons des boîtes standards qui coûtent moins cher. Je pense que je vais refaire le colis chez moi avec une de vos boîtes et revenir demain. N'oubliez pas de détailler le contenu du colis pour la boîte. Oui, je m'en suis occupée. J'ai également la fiche avec les coordonnées du destinataire.",
    "question": "Pourquoi cette dame va-t-elle finalement envoyer son colis le lendemain ?",
    "options": {
      "A": "Elle a décidé de changer d'emballage.",
      "B": "Elle a laissé son portefeuille chez elle.",
      "C": "Elle a mal rempli la fiche de douane.",
      "D": "Elle a oublié l'adresse du destinataire."
    },
    "reponse": "A",
    "reponseTexte": "Elle a décidé de changer d'emballage.",
    "explication": "Une cliente veut envoyer un colis en express mais décide de le refaire avec une boîte standard moins chère et revient le lendemain.",
    "indice": [
      "boîtes standards",
      "refaire le colis",
      "détailler le contenu"
    ]
  },
  {
    "id": 65,
    "niveau": "B2",
    "titre": "Métro et tablette",
    "transcription": "Ces nouvelles technologies, la présence d'Internet, a un effet certain sur une redéfinition de la relation des personnes à autrui, comment la vie de tous les jours se structure. Prenons un exemple, on est dans le métro, on est dans l'autobus, on peut être à la même place, on partage le même trajet pendant 30 minutes et on n'a aucune connaissance de qui est autour de nous, on n'a aucune conscience de ce qui se passe, on peut être complètement hypnotisé par ce petit outil technologique qui est le téléphone ou la tablette, etc. On peut être beaucoup plus connecté avec quelqu'un qui est à 10 000 km de nous en présence physique que quelqu'un qui est assis à côté de nous, sur le siège juste à côté.",
    "question": "Sur quoi portent les réflexions de la personne interviewée ?",
    "options": {
      "A": "L'entretien des liens d'amitiés à distance.",
      "B": "La comparaison de moyens de mobilité.",
      "C": "La sociabilité à l'ère du numérique.",
      "D": "Les échanges dans les transports."
    },
    "reponse": "C",
    "reponseTexte": "La sociabilité à l'ère du numérique.",
    "explication": "Une personne parle de l'impact des technologies numériques sur les interactions sociales, en utilisant l'exemple des gens dans les transports en commun qui sont absorbés par leurs appareils.",
    "indice": [
      "*(aucun)*"
    ]
  },
  {
    "id": 66,
    "niveau": "B2",
    "titre": "Français au Québec cherche travail",
    "transcription": "Quand un Français s'aperçoit que ses compétences ne sont pas en adéquation avec le marché du travail québécois, il commet généralement la même erreur. Plutôt que d'aller chercher une autre expérience en se disant « ce n'est pas grave, je vais peut-être obtenir un poste avec moins de responsabilités, mais je vais chercher à développer de nouvelles compétences en occupant un nouvel emploi dans un secteur différent », Il essaie de retourner à l'université et refait un certificat. Que conseillez-vous alors ? En tant qu'enseignant à l'université, je lui dis, tu pourrais trouver un emploi demain matin si tu misais sur le développement de tes compétences plutôt que sur ton bout de papier.",
    "question": "Que recommande cet universitaire pour trouver un travail au Québec ?",
    "options": {
      "A": "De devenir entrepreneur en créant son entreprise.",
      "B": "De s'informer sur les secteurs porteurs d'emplois.",
      "C": "De suivre une formation diplômante à l'université.",
      "D": "D'élargir sa recherche d'emploi à d'autres domaines."
    },
    "reponse": "D",
    "reponseTexte": "D'élargir sa recherche d'emploi à d'autres domaines.",
    "explication": "Un enseignant universitaire donne des conseils à un Français qui a du mal à trouver un emploi au Québec en raison d'une inadéquation entre ses compétences et le marché du travail.",
    "indice": [
      "*(aucun)*"
    ]
  },
  {
    "id": 67,
    "niveau": "B2",
    "titre": "Colocation et douche partagée",
    "transcription": "Alors, Sarah, comment se passe la vie en colocation ? Ah, écoute, tu sais, une seule douche pour quatre, ça n'est vraiment pas commode, surtout le matin. Mais bon, il faut s'organiser un peu, c'est tout. C'est toujours mieux que la chambre de bonne que tu avais avant, non ? T'as raison, 9 mètres carrés pour 750 euros, c'est exagéré, même avec une vue sur la tour Eiffel. Au moins maintenant, le loyer est divisé par quatre. Et pour les courses, vous faites aussi caisse commune ? Ah non, là, c'est chacun pour soi. Et c'est aussi bien, d'ailleurs. Sinon, le frigo serait toujours vide.",
    "question": "Qu'est-ce que Sarah regrette ?",
    "options": {
      "A": "De disposer d'une petite surface.",
      "B": "De partager sa salle de bain.",
      "C": "De payer un loyer excessif.",
      "D": "De prendre ses repas seule."
    },
    "reponse": "B",
    "reponseTexte": "De partager sa salle de bain.",
    "explication": "Sarah parle de sa vie en colocation. Il faut comprendre ce qu'elle regrette le plus.",
    "indice": [
      "colocation",
      "douche",
      "quatre",
      "chambre de bonne",
      "loyer"
    ]
  },
  {
    "id": 68,
    "niveau": "B2",
    "titre": "Touristes en montagne pendant la canicule",
    "transcription": "Il va faire chaud cette semaine, très chaud. La chaleur va de nouveau être difficile à supporter. Cette situation fait les affaires des professionnels du tourisme de la montagne. Là-bas, pendant la nuit, les températures vont de 12 à 15 degrés, ce qui permet de mieux se reposer. Pendant la journée, il est possible de faire des activités nautiques dans de l'eau bien fraîche, et c'est ce dont tout le monde rêve actuellement.",
    "question": "Selon le reportage, que font les touristes pendant les grandes chaleurs ?",
    "options": {
      "A": "Ils annulent leurs activités.",
      "B": "Ils partent à la montagne.",
      "C": "Ils préfèrent sortir la nuit.",
      "D": "Ils sortent en train à l'extérieur."
    },
    "reponse": "B",
    "reponseTexte": "Ils partent à la montagne.",
    "explication": "Un reportage parle de la chaleur intense et des touristes qui vont à la montagne pour échapper à la chaleur. Les températures y sont plus fraîches, surtout la nuit.",
    "indice": [
      "chaleur",
      "montagne",
      "températures",
      "activités nautiques"
    ]
  },
  {
    "id": 69,
    "niveau": "B2",
    "titre": "Biodiversité menacée par l'homme",
    "transcription": "S'il est normal que des espèces apparaissent et disparaissent au gré de l'évolution, il est par contre inédit qu'une seule espèce, la nôtre, mette en danger l'existence de l'ensemble du vivant. Les spécialistes sont en effet unanimes pour dire que la biodiversité est aujourd'hui menacée par les activités humaines. Une récente étude britannique estime ainsi qu'une plante sur cinq dans le monde est menacée. L'ONU affirme de son côté que le rythme annuel des disparitions d'espèces est désormais 100 fois plus élevé que ce qu'il devrait être naturellement. Il y a donc urgence à réagir pour préserver la vie sur Terre et préserver l'existence de notre propre espèce.",
    "question": "Quel est le sujet de cette émission ?",
    "options": {
      "A": "L'état actuel de la biodiversité.",
      "B": "L'existence de plantes menaçantes.",
      "C": "La découverte de nouvelles espèces menacées.",
      "D": "Le rôle de l'ONU dans la préservation des espèces."
    },
    "reponse": "A",
    "reponseTexte": "L'état actuel de la biodiversité.",
    "explication": "Identifier le sujet principal de l'émission à partir des informations données sur la biodiversité.",
    "indice": [
      "biodiversité",
      "menacée",
      "activités humaines",
      "ONU"
    ]
  },
  {
    "id": 70,
    "niveau": "B2",
    "titre": "Journée de la jupe au lycée",
    "transcription": "Dans votre cabinet de curiosité ce matin, Eric Delvaux, la journée de la jupe. Oui, ça concerne cette fois les lycéens et les lycéennes qui sont invités à porter une jupe aujourd'hui. Pourquoi ? Pour dénoncer les inégalités entre les hommes et les femmes et les discriminations que subissent les femmes. Cette journée de la jupe, pour les garçons comme pour les filles, c'est une première organisée dans toute la France.",
    "question": "De quoi parle ce journaliste ?",
    "options": {
      "A": "D'un ancien événement protestataire.",
      "B": "D'un nouveau code vestimentaire.",
      "C": "D'une fête scolaire traditionnelle.",
      "D": "D'une sensibilisation aux injustices."
    },
    "reponse": "D",
    "reponseTexte": "D'une sensibilisation aux injustices.",
    "explication": "Un journaliste parle d'une journée où les lycéens et lycéennes portent une jupe pour dénoncer les inégalités entre les hommes et les femmes.",
    "indice": [
      "jupe",
      "lycéens",
      "inégalités",
      "discriminations",
      "sensibilisation"
    ]
  },
  {
    "id": 71,
    "niveau": "B2",
    "titre": "Médecins de la terre",
    "transcription": "Souvent, on les surnomme les médecins de la terre. Claude et Lydia Bourguignon auscultent les sols. Ils tentent de leur rendre la santé quand les méthodes agressives de l'agriculture intensive ont fortement abîmé les terres cultivables, au point parfois d'en faire disparaître toute trace de vie. Engrais chimiques et pesticides ne sont pas les amis de ce couple de scientifiques. Claude et Lydia Bourguignon invitent les paysans à mieux connaître leur champ ou leur vigne, à les travailler autrement sans pour autant sacrifier les rendements, à ne pas en vivre à l'environnement. De cette révolution verte qu'ils défendent, dépend selon eux la qualité de l'offre faite aux consommateurs, ainsi que la survie des agriculteurs et des terres qu'ils cultivent.",
    "question": "Quel est l'objectif de ces deux scientifiques ?",
    "options": {
      "A": "Augmenter le nombre des surfaces exploitables.",
      "B": "Développer la production des fruits et légumes.",
      "C": "Diffuser des procédés en accord avec la nature.",
      "D": "Introduire la plantation de nouvelles espèces."
    },
    "reponse": "C",
    "reponseTexte": "Diffuser des procédés en accord avec la nature.",
    "explication": "Claude et Lydia Bourguignon travaillent à restaurer les sols endommagés par l'agriculture intensive. Ils encouragent les agriculteurs à adopter des méthodes plus respectueuses de l'environnement.",
    "indice": [
      "*(aucun)*"
    ]
  },
  {
    "id": 72,
    "niveau": "B2",
    "titre": "Écrivain depuis l'enfance",
    "transcription": "À partir de là, vous n'allez jamais arrêter d'écrire. Oui, je n'ai jamais arrêté d'écrire. Et en même temps, ça me rend compte véritablement que j'étais écrivain. Moi, j'étais absolument persuadé pendant très très longtemps que tout petit garçon et toute petite fille qui rentrait chez elle ou chez lui... Écriraient des histoires, puisque c'était ce que je faisais. J'ai l'impression que je suis écrivain comme le pommier fait les pommes. C'est très, très naturel. Tout le monde avait compris que j'étais écrivain, sauf moi.",
    "question": "Qu'apprend-on au sujet de cet écrivain ?",
    "options": {
      "A": "Il a eu conscience de son talent tôt.",
      "B": "Il édite des œuvres pour la jeunesse.",
      "C": "Il pratique son art depuis l'enfance.",
      "D": "Il rédige des manuels de jardinage."
    },
    "reponse": "C",
    "reponseTexte": "Il pratique son art depuis l'enfance.",
    "explication": "Un écrivain parle de son expérience personnelle et de sa prise de conscience de son talent. Il explique qu'il a toujours écrit depuis son enfance.",
    "indice": [
      "écrivain",
      "enfance",
      "histoire"
    ]
  },
  {
    "id": 73,
    "niveau": "B2",
    "titre": "Des lycéens tournent un film",
    "transcription": "Régis Solivrès, bonjour. Bonjour, bonjour Philippe. Régis, vous lancez une aventure, enfin vous lycéens, dans une aventure assez incroyable qui est de participer à la réalisation d'un film, un film avec un réalisateur professionnel, avec des professionnels du cinéma. Il s'appelle François Chaillou. Oui, à l'occasion du festival de Luchon. J'ai rencontré François, je lui ai dit que je voulais faire un film.",
    "question": "Quel est le projet de Régis Solivrès et de ses élèves ?",
    "options": {
      "A": "Interviewer un réalisateur.",
      "B": "Participer à un festival.",
      "C": "Tourner un film.",
      "D": "Visiter des studios de cinéma."
    },
    "reponse": "C",
    "reponseTexte": "Tourner un film.",
    "explication": "Régis Solivrès parle d'une initiative où des lycéens travaillent sur la réalisation d'un film avec un réalisateur professionnel nommé François Chaillou dans le cadre du festival de Luchon.",
    "indice": [
      "film",
      "réalisateur",
      "professionnel",
      "cinéma"
    ]
  },
  {
    "id": 74,
    "niveau": "B2",
    "titre": "Lycéens étrangers et financements",
    "transcription": "Hélène Carrère-Dancos, votre article nous informe du danger qui menace l'existence et le développement des lycées français de l'étranger. Oui, ces lycées étaient payants. Ils sont devenus gratuits en 2007. Cette décision au départ généreuse se retourne finalement contre les lycées, car les entreprises qui payaient ne le font plus. C'est l'État seul qui soutient les lycées, donc quand cela deviendra trop lourd pour l'État, il risque de vouloir en fermer certains.",
    "question": "Pour Hélène Carrère-Dancos, quels sont les problèmes des lycées français de l'étranger ?",
    "options": {
      "A": "Le nombre d'élèves est en baisse.",
      "B": "Les frais de scolarité sont élevés.",
      "C": "Leurs programmes sont inadaptés.",
      "D": "Leurs financements sont fragilisés."
    },
    "reponse": "D",
    "reponseTexte": "Leurs financements sont fragilisés.",
    "explication": "Identifier le problème principal des lycées français à l'étranger selon Hélène Carrère-Dancos. Attention aux pièges des autres options qui ne sont pas mentionnées dans le texte.",
    "indice": [
      "Lycées français",
      "étranger",
      "gratuits",
      "entreprises",
      "État"
    ]
  },
  {
    "id": 75,
    "niveau": "B2",
    "titre": "Trouver un logement à Québec",
    "transcription": "Camille, à ton arrivée à Québec, dans quel type de logement résidais-tu ? J'ai d'abord habité un appartement en colocation dans le quartier de Montcalm. Au bout de six mois à peine, j'ai emménagé à deux pas du centre-ville. C'est très simple de trouver un logement ici. Ça se fait en quelques jours. Comment as-tu trouvé ton premier appartement ? Avant de quitter la France, sur un site internet regroupant les annonces de colocation, Mais je conseille de chercher sur place. Il y a tout ce qu'il faut pour trouver facilement. On peut découvrir le quartier, voir si les pièces sont spacieuses, lumineuses et surtout bien insonorisées. Ce n'était pas le cas de mon premier logement, malgré le nom du quartier.",
    "question": "D'après Camille, quel est le point fort de l'immobilier à Québec ?",
    "options": {
      "A": "La recherche d'un appartement est rapide.",
      "B": "Le système de la colocation est encouragé.",
      "C": "Les habitations proposées sont de qualité.",
      "D": "Les logements sont bon marché en banlieue."
    },
    "reponse": "A",
    "reponseTexte": "La recherche d'un appartement est rapide.",
    "explication": "Camille parle de son expérience de recherche de logement à Québec, décrivant ses premiers mois en colocation dans le quartier de Montcalm et son déménagement vers un appartement près du centre-ville.",
    "indice": [
      "*(aucun)*"
    ]
  },
  {
    "id": 76,
    "niveau": "B2",
    "titre": "Philosophe parle de ses mémoires",
    "transcription": "À mes côtés cette semaine, une philosophe, essayiste et romancière, née à Paris, grande voyageuse passionnée d'Afrique, férue de politique et d'opéra et qui publie ces jours-ci ses mémoires. Si vous aimez la petite et la grande histoire sans vraiment savoir ce que pouvait signifier naître petite fille dans une famille de la bourgeoisie cultivée des années 40, Si vous voulez comprendre ce que cela voulait dire à la fin des années 50 d'intégrer la grande fabrique intellectuelle française que sont les grandes écoles, si vous aimez la philosophie, les voyages et la politique, bref, si l'histoire intellectuelle de la seconde moitié du XXe siècle vous passionne, alors vous allez lire comme moi d'une traite le dernier livre de Claire Aubert.",
    "question": "Selon le journaliste, quel genre d'ouvrage cette philosophe française vient-elle d'écrire ?",
    "options": {
      "A": "Un essai historique sur la vie à Paris pendant la Seconde Guerre mondiale.",
      "B": "Un livre de souvenirs sur l'histoire mouvementée de sa famille.",
      "C": "Un récit autobiographique ancré dans la vie intellectuelle du siècle dernier.",
      "D": "Un roman sur l'impact des événements historiques sur le destin individuel."
    },
    "reponse": "C",
    "reponseTexte": "Un récit autobiographique ancré dans la vie intellectuelle du siècle dernier.",
    "explication": "Identifier le genre d'ouvrage écrit par la philosophe en se basant sur les indices donnés par le journaliste. Attention aux pièges des autres options qui peuvent sembler plausibles.",
    "indice": [
      "*(aucun)*"
    ]
  },
  {
    "id": 77,
    "niveau": "B2",
    "titre": "Sondage jeunes avenir",
    "transcription": "Comment les jeunes Français envisagent-ils leur avenir ? La réponse est à lire dans le sondage publié aujourd'hui par le tout nouvel observatoire des jeunes et des familles. 1000 jeunes de 18 à 25 ans et 1000 familles ont été interrogés. Première surprise, les jeunes ont plutôt confiance en l'avenir à 52%. Et même si les difficultés économiques les angoissent, 8 sur 10 estiment qu'ils obtiendront ce qu'ils veulent. Mais les principaux obstacles seront le travail et le logement.",
    "question": "Qu'apprend-on sur l'attitude des jeunes Français face à leur avenir ?",
    "options": {
      "A": "Ils espèrent obtenir une allocation de l'État.",
      "B": "Ils voient leur futur de manière positive.",
      "C": "Ils comptent sur le soutien de leurs proches.",
      "D": "Ils refusent d'habiter chez leurs parents."
    },
    "reponse": "B",
    "reponseTexte": "Ils voient leur futur de manière positive.",
    "explication": "Un sondage révèle comment les jeunes Français de 18 à 25 ans perçoivent leur avenir. Les résultats montrent que la majorité des jeunes sont confiants malgré les difficultés économiques.",
    "indice": [
      "*(aucun)*"
    ]
  },
  {
    "id": 78,
    "niveau": "B2",
    "titre": "Exposition Soulages au Musée d'art moderne",
    "transcription": "Bienvenue dans notre émission culturelle. Le peintre Soulages, connu mondialement, est célébré dans son pays au Musée d'art moderne de Paris. L'exposition s'appelle Noir Lumière parce que le noir de Soulages ne ressemble à aucun autre.",
    "question": "Qu'apprend-on sur le peintre Pierre Soulages ?",
    "options": {
      "A": "C'est un artiste oublié par le public.",
      "B": "Il a travaillé avec des couleurs claires.",
      "C": "On lui a demandé de décorer un bâtiment.",
      "D": "Son œuvre est présentée en France."
    },
    "reponse": "D",
    "reponseTexte": "Son œuvre est présentée en France.",
    "explication": "Une émission culturelle parle d'une exposition de Pierre Soulages au Musée d'art moderne de Paris. L'exposition s'appelle Noir Lumière et met en avant l'utilisation unique du noir par Soulages.",
    "indice": [
      "Soulages",
      "Noir Lumière",
      "Musée d'art moderne",
      "France"
    ]
  },
  {
    "id": 79,
    "niveau": "B2",
    "titre": "Réserver un livre en rupture de stock",
    "transcription": "Bonjour monsieur, je cherche le dernier livre de Michel Tellier sur la France rurale du XIXe siècle. Oui, attendez un moment, je demande à mon collègue. Bien. En fait, il ne nous reste que son dernier roman. L'ouvrage que vous cherchez est en rupture de stock. Nous en recevrons quelques-uns dans deux semaines. Je peux vous en garder un si vous voulez. Oui, très bien, merci. Je reviendrai. Gardez-moi un. Voilà, madame, c'est noté. Merci beaucoup, à bientôt.",
    "question": "Que propose le vendeur à la cliente ?",
    "options": {
      "A": "D'acheter un roman.",
      "B": "D'attendre son collègue.",
      "C": "De réserver un livre.",
      "D": "De revenir le lendemain."
    },
    "reponse": "C",
    "reponseTexte": "De réserver un livre.",
    "explication": "Une cliente demande le dernier livre de Michel Tellier sur la France rurale du XIXe siècle mais il est en rupture de stock. Le vendeur lui propose de réserver un exemplaire pour quand ils en recevront.",
    "indice": [
      "réserver",
      "livre",
      "rupture de stock",
      "deux semaines"
    ]
  },
  {
    "id": 80,
    "niveau": "B2",
    "titre": "Créer une école de cirque en Europe",
    "transcription": "Jusqu'en 1974, l'année où Annie Fratellini et Pierre Etex ont créé la première école de cirque en Europe, il fallait être né dans une famille pour apprendre ce métier. C'était obligatoire. C'était obligatoire. Mais eux ont voulu justement créer une école pour permettre aux jeunes qui n'étaient pas issus des familles de cirque d'apprendre ce métier du cirque. Depuis, ça s'est énormément professionnalisé.",
    "question": "De quelle évolution du monde du cirque parlent les intervenants ?",
    "options": {
      "A": "La création de numéros innovants.",
      "B": "La renaissance des traditions oubliées.",
      "C": "L'introduction des animaux sauvages.",
      "D": "L'ouverture de formations artistiques."
    },
    "reponse": "D",
    "reponseTexte": "L'ouverture de formations artistiques.",
    "explication": "Deux personnes discutent de la création de la première école de cirque en Europe par Annie Fratellini et Pierre Etex en 1974, permettant aux jeunes non issus des familles de cirque d'apprendre ce métier.",
    "indice": [
      "École de cirque",
      "professionnalisé",
      "jeunes",
      "métier du cirque"
    ]
  },
  {
    "id": 81,
    "niveau": "B2",
    "titre": "Biffins qui revendent leur récup",
    "transcription": "Le projet de temps maintenant sur la piste, c'est un phénomène qui s'étend ici surtout à Paris, poussé par la précarité. Des hommes et des femmes qui ne sont pas brocanteurs font de la récup leur métier, ils revendent en fait tout ce qui peut l'être. Alors le dialogue avec les autorités n'est pas toujours simple, mais une association se mobilise pour leur permettre de poursuivre leur activité. Pour les acteurs du marché plus, c'est que ce dynamisme économique est nécessaire en ville pour lutter contre la pauvreté, pour réduire les déchets, pour créer une économie circulaire populaire et pour évidemment protéger aussi les ressources de la planète. En premier lieu, pour les familles des biffins et les biffins, c'est nécessaire d'avoir un peu d'argent en vendant sa récup. C'est un travail, il devrait être reconnu comme tel.",
    "question": "Que souhaite l'association dont il est question ?",
    "options": {
      "A": "Accroître la mixité sociale dans les grandes villes.",
      "B": "Décrocher des financements pour ses activités.",
      "C": "Modifier le fonctionnement des marchés aux puces.",
      "D": "Obtenir un statut professionnel officiel pour les biffins."
    },
    "reponse": "D",
    "reponseTexte": "Obtenir un statut professionnel officiel pour les biffins.",
    "explication": "Des personnes qui vendent des objets récupérés parlent de leur métier et des défis qu'ils rencontrent. Une association les soutient pour qu'ils puissent continuer leur activité.",
    "indice": [
      "*(aucun)*"
    ]
  },
  {
    "id": 82,
    "niveau": "B2",
    "titre": "École innovante Marseille pédagogie active",
    "transcription": "Malgré les apparences, vous n'êtes pas dans une salle de danse, mais dans une école, pour le moins innovante et unique, à Marseille. Ici, on enseigne bien sûr les matières essentielles, mais aussi la comédie musicale, la cuisine ou bien l'électricité. Cette école parie surtout depuis 5 ans sur la pédagogie active de remotivation dans l'intérêt de l'enfant. On écoute la directrice de l'établissement. La pédagogie active, c'est une pédagogie qui implique l'élève dans son apprentissage. Il est acteur, c'est-à-dire qu'on va le familiariser tout seul, avec un texte ou avec n'importe quel support d'information. Il s'autonomise tout en prenant plaisir à apprendre.",
    "question": "Selon la directrice de cette école, quel est l'objectif de la pédagogie active ?",
    "options": {
      "A": "Amener l'élève à participer à sa propre formation.",
      "B": "Axer principalement l'apprentissage sur le jeu.",
      "C": "Initier les élèves à des activités parascolaires.",
      "D": "Responsabiliser les élèves encore immatures."
    },
    "reponse": "A",
    "reponseTexte": "Amener l'élève à participer à sa propre formation.",
    "explication": "La directrice d'une école innovante à Marseille explique la pédagogie active qu'elle utilise pour enseigner aux élèves.",
    "indice": [
      "*(aucun)*"
    ]
  },
  {
    "id": 83,
    "niveau": "B2",
    "titre": "Soirée annulée au dernier moment",
    "transcription": "Salut Marie, alors finalement qu'est-ce que tu as fait samedi soir ? Bah j'avais pas le moral, j'étais invitée chez ma sœur, je n'y suis pas allée. Il y a des amis qui m'ont appelé pour aller danser au dernier moment. Je n'ai pas eu envie. Tu as fait quoi alors ? Finalement, j'ai voulu aller au cinéma. La séance était annulée pour raison technique. Alors je suis rentrée, je me suis couchée. Si j'avais su, je serais venu te chercher. On est allé jouer au bowling, on a passé une super soirée.",
    "question": "Comment la jeune fille a-t-elle passé sa soirée ?",
    "options": {
      "A": "Elle est sortie en boîte de nuit.",
      "B": "Elle a dîné avec sa famille.",
      "C": "Elle est restée toute seule.",
      "D": "Elle a vu un mauvais film."
    },
    "reponse": "C",
    "reponseTexte": "Elle est restée toute seule.",
    "explication": "Marie parle avec une amie au téléphone pour raconter sa soirée annulée au dernier moment et les activités qu'elle avait prévues.",
    "indice": [
      "cinéma",
      "annulée",
      "rentré",
      "couchée"
    ]
  },
  {
    "id": 84,
    "niveau": "B2",
    "titre": "Accidents de superpétroliers",
    "transcription": "C'est l'une des richesses de notre pays. La France possède la deuxième façade maritime du monde derrière les États-Unis. C'est une chance économique de première importance, alors que plus de 80% du trafic mondial de marchandises passe par la mer. Mais aujourd'hui, les plus gros navires peuvent transporter 13 000 conteneurs, les superpétroliers 1,5 million de mètres cubes de botte, et les accidents se transforment donc en catastrophes. Le sable breton se souvient encore des naufrages de la Mocoganis et de l'Erika. Le gigantisme a aussi gagné depuis longtemps le transport des passagers, le drame du Costa Concordia vient de nous le rappeler.",
    "question": "Qu'apprend-on sur le transport maritime ?",
    "options": {
      "A": "Les accidents peuvent être très graves.",
      "B": "Les navires sont inadaptés aux besoins.",
      "C": "Les passagers se sentent en insécurité.",
      "D": "Les profits économiques sont en baisse."
    },
    "reponse": "A",
    "reponseTexte": "Les accidents peuvent être très graves.",
    "explication": "Un texte parle des risques et des conséquences des accidents de superpétroliers et de grands navires de transport de marchandises et de passagers.",
    "indice": [
      "*(aucun)*"
    ]
  },
  {
    "id": 85,
    "niveau": "B2",
    "titre": "Étudier lettres et histoire",
    "transcription": "Tiens Alex, que fais-tu ici ? On ne te voit pas souvent dans ce département. Je figure fois que j'ai décidé de faire des lettres. Mais ça veut dire que tu arrêtes les cours d'histoire ? Non, pas pour le moment. Comme cela, je pourrais quand même valider ma licence sans perdre mon année. À ce qu'il paraît, le master de lettres est plus dur que celui d'histoire. Ma décision est prise de toute façon. J'aurai bien plus de débouchés professionnels.",
    "question": "Quel choix Alex a-t-il fait ?",
    "options": {
      "A": "Il a décidé d'arrêter ses études d'histoire.",
      "B": "Il a choisi de poursuivre uniquement des études de lettres.",
      "C": "Il a décidé d'étudier dans deux domaines différents.",
      "D": "Il a décidé de changer d'université."
    },
    "reponse": "C",
    "reponseTexte": "Il a décidé d'étudier dans deux domaines différents.",
    "explication": "Alex discute avec un ami de son choix de poursuivre des études de lettres tout en continuant l'histoire. Il explique ses motivations et ses projets pour l'avenir.",
    "indice": [
      "lettres",
      "histoire",
      "licence",
      "master"
    ]
  },
  {
    "id": 86,
    "niveau": "B2",
    "titre": "Anniversaire de Martine",
    "transcription": "Salut Didier ! Tu te souviens qu'on dîne chez Xavier samedi soir ? Chez Xavier ? Mais non, je pars en Normandie avec mon frère. Oh non, pas de Normandie. On fête l'anniversaire de Martine. Elle serait très déçue que tu ne viennes pas. Bah non, c'était même pas sûr. Arrête, tu avais promis, tu devais même apporter le dessert. Moi ? Tu te débrouilles, on sera douze. Tu choisis un dessert sur lequel on peut mettre 25 bougies. Je m'occupe du cadeau et des bougies. Bon, je vais essayer de m'arranger. Ah non, non, non, pas essayer. Tu viens.",
    "question": "D'après son ami, à quoi Didier s'était-il engagé ?",
    "options": {
      "A": "À partir en voyage en province.",
      "B": "À acheter les bougies d'anniversaire.",
      "C": "À acheter le cadeau pour leur amie.",
      "D": "À s'occuper du gâteau d'anniversaire."
    },
    "reponse": "D",
    "reponseTexte": "À s'occuper du gâteau d'anniversaire.",
    "explication": "Didier et son ami discutent d'un dîner chez Xavier. Didier doit apporter le dessert pour l'anniversaire de Martine.",
    "indice": [
      "anniversaire",
      "Martine",
      "dessert",
      "bougies"
    ]
  },
  {
    "id": 87,
    "niveau": "B2",
    "titre": "Pêcher dans la glace au Québec",
    "transcription": "Dis-moi, Paul, c'est quoi la pêche blanche au Québec ? On l'appelle blanche parce qu'on pêche l'hiver à la ligne en creusant des trous dans la glace des lacs et des rivières gelées. Mais vous, vous devez geler à attendre le poisson sans bouger. Non, car chaque pêcheur se protège du froid en installant une cabane en bois au-dessus des trous. C'est une pêche d'intérieur ? En quelque sorte. En tout cas, le poisson est bien frais.",
    "question": "Pourquoi les pêcheurs utilisent-ils une cabane ?",
    "options": {
      "A": "Pour conserver le poisson.",
      "B": "Pour ranger leur matériel.",
      "C": "Pour se réchauffer.",
      "D": "Pour se reposer."
    },
    "reponse": "C",
    "reponseTexte": "Pour se réchauffer.",
    "explication": "Paul explique la pêche blanche au Québec à une autre personne. Il décrit comment les pêcheurs creusent des trous dans la glace pour pêcher l'hiver et utilisent des cabanes en bois pour se protéger du froid.",
    "indice": [
      "pêche blanche",
      "cabane",
      "gelés",
      "froid"
    ]
  },
  {
    "id": 88,
    "niveau": "B2",
    "titre": "Autorisation escalade club sport",
    "transcription": "Bonjour docteur, je voudrais faire de l'escalade et j'ai besoin de votre autorisation pour m'inscrire dans un club de sport. De l'escalade, mais c'est très mauvais pour votre dos. Je vous conseille plutôt de faire de la natation. La natation, ce n'est pas bon pour ma peau. Et puis j'adore la montagne. Eh bien, faites plutôt de la randonnée. Ah oui, la randonnée, c'est une idée. Ça peut m'aider à maigrir.",
    "question": "Que doit faire le médecin ?",
    "options": {
      "A": "Conseiller des médicaments.",
      "B": "Établir un certificat médical.",
      "C": "Examiner une radiographie.",
      "D": "Traiter un problème de poids."
    },
    "reponse": "B",
    "reponseTexte": "Établir un certificat médical.",
    "explication": "Un patient demande à son médecin une autorisation pour faire de l'escalade dans un club de sport. Le médecin lui propose d'autres activités.",
    "indice": [
      "autorisation",
      "club",
      "escalade",
      "certificat",
      "médical"
    ]
  },
  {
    "id": 89,
    "niveau": "B2",
    "titre": "Nettoyage contre moustiques à Tienaba",
    "transcription": "Au coup de sifflet, elles commencent à se rassembler, les femmes de Tienaba avec leurs outils et la ferme intention de barrer la route aux moustiques. Cela s'appelle une séance de nettoyage. El Hadjid Diop, le président de l'association Sopem Mohamed, a de quoi être satisfait. De 3459 cas de paludisme à Tienaba, il n'y en a aujourd'hui plus que 52. Les habitants se sont organisés en comité de salubrité chargé de mettre en place les séances de nettoyage, mais aussi les séances d'information dans les lieux publics. À force d'être sensibilisés, la population a pris l'habitude d'utiliser les moustiquaires imprégnés, des moustiquaires que certains s'offrent désormais en cadeau de mariage ou lors d'une naissance. Le véritable succès de cette initiative est que toute la localité s'est mobilisée pour lutter contre le paludisme.",
    "question": "Quel a été l'élément décisif dans la lutte contre le paludisme dans le village de Tienaba ?",
    "options": {
      "A": "L'obligation d'acheter des moustiquaires.",
      "B": "La coopération avec les autorités publiques.",
      "C": "Le recensement des malades par l'association.",
      "D": "L'implication active de tous les habitants."
    },
    "reponse": "D",
    "reponseTexte": "L'implication active de tous les habitants.",
    "explication": "Les habitants de Tienaba se rassemblent pour des séances de nettoyage afin de lutter contre les moustiques. Le président de l'association Sopem Mohamed discute des résultats positifs de cette initiative.",
    "indice": [
      "*(aucun)*"
    ]
  },
  {
    "id": 90,
    "niveau": "B2",
    "titre": "Débat en classe autour d'un livre",
    "transcription": "Le débat dans la classe s'organise généralement autour d'un prétexte. Généralement une œuvre littéraire, un album en classe de CP, ou un conte, ou une histoire traditionnelle. Et je parle de prétexte parce que, en fait, faire débattre les élèves entre eux, c'est leur faire parler d'eux. C'est les sortir de leur individualité, c'est les faire échanger entre eux, accepter la différence, accepter la parole de l'autre, accepter le désaccord. Et comme je leur dis souvent, l'objectif, c'est qu'ils se mettent à se disputer. Mais à se disputer avec les bons.",
    "question": "D'après ce professeur, qu'est-ce que le débat apporte aux élèves ?",
    "options": {
      "A": "Ils apprennent à communiquer.",
      "B": "Ils développent leur créativité.",
      "C": "Ils s'ouvrent à d'autres cultures.",
      "D": "Ils sont dynamiques en cours."
    },
    "reponse": "A",
    "reponseTexte": "Ils apprennent à communiquer.",
    "explication": "Un professeur explique comment les débats en classe aident les élèves à interagir et à accepter les différences.",
    "indice": [
      "débat",
      "élèves",
      "parler",
      "différence",
      "désaccord"
    ]
  },
  {
    "id": 91,
    "niveau": "B2",
    "titre": "Autorisation escalade club sport – version bis",
    "transcription": "Bonjour docteur, je voudrais faire de l'escalade et j'ai besoin de votre autorisation pour m'inscrire dans un club de sport. De l'escalade, mais c'est très mauvais pour votre dos. Je vous conseille plutôt de faire de la natation. La natation, ce n'est pas bon pour ma peau. Et puis j'adore la montagne. Eh bien, faites plutôt de la randonnée. Ah oui, la randonnée, c'est une idée. Ça peut m'aider à maigrir.",
    "question": "Que doit faire le médecin ?",
    "options": {
      "A": "Conseiller des médicaments.",
      "B": "Établir un certificat médical.",
      "C": "Examiner une radiographie.",
      "D": "Traiter un problème de poids."
    },
    "reponse": "B",
    "reponseTexte": "Établir un certificat médical.",
    "explication": "Le médecin doit comprendre la demande du patient et fournir le document nécessaire pour l'activité choisie.",
    "indice": [
      "escalade",
      "club",
      "certificat",
      "médecin"
    ]
  },
  {
    "id": 92,
    "niveau": "B2",
    "titre": "Filles quittent la maison plus tôt",
    "transcription": "Bonjour à tous, aujourd'hui nous recevons Philippe Bouchard, sociologue, qui publie « Les grands enfants chez papa et maman ». Bonjour Philippe Bouchard, dans votre livre vous dites que les jeunes filles partent plus vite de chez elles que les garçons. Comment l'expliquez-vous ? Elles sont plus précoces que les garçons, elles sont plus mûres et entrent plus vite dans les conflits avec leurs parents. Et qu'est-ce qui provoque ces conflits ? Ils sont de toute nature, de l'habillement à l'argent de poche en passant par le programme télé. Elles ont plus de disputes avec leurs parents au sujet de leur petite amie et elles sont donc plus pressées de partir de la maison, de devenir plus indépendantes.",
    "question": "Pourquoi les filles partent-elles de la maison plus tôt que les garçons ?",
    "options": {
      "A": "Elles entrent dans la vie active avant les jeunes garçons.",
      "B": "Elles se rebellent très vite face à l'autorité familiale au quotidien.",
      "C": "Elles sont en désaccord avec leurs parents au sujet de leurs études.",
      "D": "Elles sont mieux préparées aux tâches de tous les jours."
    },
    "reponse": "B",
    "reponseTexte": "Elles se rebellent très vite face à l'autorité familiale au quotidien.",
    "explication": "Philippe Bouchard, sociologue, explique dans une interview pourquoi les jeunes filles quittent la maison plus tôt que les garçons.",
    "indice": [
      "*(aucun)*"
    ]
  },
  {
    "id": 93,
    "niveau": "B2",
    "titre": "Changer de travail pour évoluer",
    "transcription": "Malheureusement, je n'ai pas de vacances. Je viens de changer de travail. Ah bon ? Tu ne te plaisais pas là où tu étais ? Si, l'ambiance était vraiment bonne. Et j'avais un bon emploi du temps. Oui, je me souviens. Et tu as trouvé encore mieux ? En fait, c'était sympa, mais je n'avais pas de possibilité d'évolution. Alors que là, les perspectives sont bonnes. Enfin... Si je survis aux horaires imposés, et l'ambiance est aussi bonne qu'avant ? Oui, je pense que ça va aller. Mais je ne connais pas encore beaucoup de monde. Il faut du temps.",
    "question": "Qu'apprécie la femme dans son nouveau travail ?",
    "options": {
      "A": "L'atmosphère détendue.",
      "B": "La souplesse des horaires.",
      "C": "L'efficacité de son équipe.",
      "D": "Les opportunités de carrière."
    },
    "reponse": "D",
    "reponseTexte": "Les opportunités de carrière.",
    "explication": "La femme explique pourquoi elle a changé de travail. Il faut repérer ce qu'elle apprécie dans son nouveau poste.",
    "indice": [
      "changer",
      "travail",
      "possibilité",
      "évolution",
      "perspectives"
    ]
  },
  {
    "id": 94,
    "niveau": "B2",
    "titre": "Croisière sur la Seine",
    "transcription": "Mesdames, Messieurs, bienvenue sur le bateau de la société Safim au service de notre clientèle loganienne. Nous allons découvrir ensemble Paris au gré de la Seine. C'est comme un lieu, un petit, ou en autocar. Voici votre programme. De 10h à 12h, nous allons longer les quais et passer sous de nombreux ponts. Nous nous arrêterons devant Notre-Dame de Paris, les musées du Louvre et d'Orsay. Enfin, nous arriverons au Trocadéro. Pour vous remettre de toutes ces émotions, un déjeuner est prévu ici même à 12h30. Un bus viendra vous reprendre à 13h30 pour vous conduire à votre hôtel. Passez un très agréable moment en notre compagnie.",
    "question": "Que propose la guide aux touristes ?",
    "options": {
      "A": "Un tour de la capitale en bus découvert.",
      "B": "Un parcours à pied le long des quais.",
      "C": "Une visite guidée du musée du Louvre.",
      "D": "Une croisière-promenade sur la Seine."
    },
    "reponse": "D",
    "reponseTexte": "Une croisière-promenade sur la Seine.",
    "explication": "Une guide accueille des touristes sur un bateau pour une croisière sur la Seine. Elle explique le programme de la visite et les activités prévues.",
    "indice": [
      "bateau",
      "Seine",
      "croisière",
      "promenade"
    ]
  },
  {
    "id": 95,
    "niveau": "B2",
    "titre": "Ramassage et traitement des feuilles",
    "transcription": "Eh bien, à Mien, les aspirateurs des agents de la voirie avalent 500 tonnes de feuilles chaque année. Celles-ci, une fois ramassées, sont d'abord stockées dans plusieurs lieux de la ville, puis elles sont triées dans l'usine de méthanisation Picard, IDEX Environnement. Elles ne vont pas toutes subir le même sort. Toutes ne sont pas traitées de la même manière. Les feuilles les plus propres, généralement, celles ramassées dans les parcs et jardins, sont transformées en compost.",
    "question": "De quoi parle le journaliste ?",
    "options": {
      "A": "De conservation des plantes.",
      "B": "De nettoyage d'espaces verts.",
      "C": "De procédés de recyclage.",
      "D": "De techniques de culture."
    },
    "reponse": "C",
    "reponseTexte": "De procédés de recyclage.",
    "explication": "Un journaliste parle du processus de ramassage et de traitement des feuilles dans une ville, expliquant comment elles sont collectées, stockées et transformées en compost ou méthanisées.",
    "indice": [
      "feuilles",
      "méthanisation",
      "compost",
      "recyclage"
    ]
  },
  {
    "id": 96,
    "niveau": "B2",
    "titre": "Réserver des places de théâtre",
    "transcription": "Bonjour, c'est Marie. Vous n'êtes pas là ? Bon. Je vous appelais comme promis au sujet des réservations des places de théâtre avant votre départ au Pérou. Je vous propose un autre spectacle que Bérénice, car ça ne se joue plus. Pourquoi pas Anne Romand ? Il paraît que son spectacle est très bien et plein d'humour. Ou bien André Sullers, qui lit des textes qu'il a créés lui-même sur les athlètes de haut niveau. Dites-nous ce que vous en pensez. Je réserverai les places. Nous partons en Bretagne demain, mais je crois que vous avez notre numéro de téléphone là-bas. À bientôt.",
    "question": "Que propose Marie à ses amis ?",
    "options": {
      "A": "Une sortie au théâtre.",
      "B": "Un voyage au Pérou.",
      "C": "Un séjour en Bretagne.",
      "D": "Une visite à Anne Romand."
    },
    "reponse": "A",
    "reponseTexte": "Une sortie au théâtre.",
    "explication": "Marie propose un spectacle alternatif. Il faut identifier l'offre principale.",
    "indice": [
      "réservations",
      "places de théâtre",
      "spectacle",
      "Anne Romand",
      "André Sullers"
    ]
  },
  {
    "id": 97,
    "niveau": "B2",
    "titre": "Journaliste critique l'info rapide",
    "transcription": "Cette nouvelle façon de faire l'info immédiate par rapport à celle que vous faisiez à l'époque d'Envoyé Spécial, vous fascine-t-elle ou vous fait-elle peur ? Elle m'inquiète. Elle m'inquiète parce que j'ai l'impression qu'on a tendance à oublier le rôle du journaliste. Nous, vous, nous sommes là pour trier l'information, pour savoir ce qui est vrai de ce qui ne l'est pas. Aujourd'hui, avec l'avalanche d'informations que nous avons, en particulier sur les réseaux sociaux, on ne sait plus ce qui est vrai, ce qui n'est pas vrai. Les rumeurs les plus folles courent et ensuite on met des jours et des jours à rattraper une information qui était fausse au départ. Je pense que le journaliste, les journalistes en général, devraient être beaucoup plus présents dans cette course à l'information et faire attention, c'est-à-dire faire leur métier.",
    "question": "Que critique ce journaliste dans la pratique actuelle de son métier ?",
    "options": {
      "A": "La formation professionnelle des jeunes.",
      "B": "L'absence de vérification des sources.",
      "C": "Le recours systématique aux technologies.",
      "D": "Les mensonges de certains collègues."
    },
    "reponse": "B",
    "reponseTexte": "L'absence de vérification des sources.",
    "explication": "Un journaliste critique la manière dont l'information est diffusée rapidement aujourd'hui par rapport au passé, en particulier sur les réseaux sociaux.",
    "indice": [
      "*(aucun)*"
    ]
  },
  {
    "id": 98,
    "niveau": "B2",
    "titre": "Vendre des valises dans les universités",
    "transcription": "C'était Gérard Pasquier qui avait fait un concours, j'avais gagné ce concours pour aller dans le Michigan faire des tests de prêt-à-porter. Donc dans une belle Ford Mustang, je crapahutais un peu partout, je me suis pris un maximum de portes fermées. Puis à un moment j'ai trouvé quand même que dans la collection au lieu d'avoir les 5 valises, il y avait 7-8 modèles qui se vendaient. Donc j'ai fait ma petite valise avec les 7-8 modèles. J'ai trouvé les endroits où ça se vendait, c'était les boutiques qui étaient dans les universités. Parce qu'il y a des centres commerciaux dans les universités et là je suis devenu un super vendeur de Gérard Pasquet dans les universités.",
    "question": "Comment cet homme a-t-il développé ses ventes de prêt-à-porter avec succès ?",
    "options": {
      "A": "Il a créé un partenariat avec une marque de voiture.",
      "B": "Il a distribué gratuitement ses premiers modèles.",
      "C": "Il a engagé des mannequins pour présenter sa collection.",
      "D": "Il s'est d'abord fait connaître auprès des étudiants."
    },
    "reponse": "D",
    "reponseTexte": "Il s'est d'abord fait connaître auprès des étudiants.",
    "explication": "Gérard Pasquier raconte comment il a gagné un concours pour tester des vêtements au Michigan et a ensuite vendu des valises dans les universités.",
    "indice": [
      "*(aucun)*"
    ]
  },
  {
    "id": 99,
    "niveau": "B2",
    "titre": "Le rire comme gymnastique",
    "transcription": "Le rire, c'est une onde. Cette onde, elle se manifeste dans les muscles. Cette onde, elle part du visage, elle part des petits muscles du visage. Elle va ensuite aller aux épaules, aux cuisses et bien sûr aux muscles de l'abdomen. Donc ça les fait travailler, ça fait travailler les muscles. Donc c'est une sorte de gymnastique douce. Et la gymnastique douce, comme chacun sait, s'accompagne d'exercices respiratoires que le rire se charge d'exécuter pour vous. Dans la vie courante, on échange un demi-litre d'air. Quand on rit, on échange facilement 2 litres d'air. Donc ça va avoir une fonction détoxiquante très claire.",
    "question": "Qu'apprend-on sur le rire dans ce document ?",
    "options": {
      "A": "Il a un effet inattendu sur le cerveau.",
      "B": "Il allonge notre espérance de vie.",
      "C": "Il apaise les souffrances psychiques.",
      "D": "Il s'apparente à un effort physique."
    },
    "reponse": "D",
    "reponseTexte": "Il s'apparente à un effort physique.",
    "explication": "On te demande de comprendre l'effet physique du rire. Le piège est de ne pas se laisser distraire par les autres effets mentionnés.",
    "indice": [
      "onde",
      "muscles",
      "gymnastique",
      "douce"
    ]
  },
  {
    "id": 100,
    "niveau": "B2",
    "titre": "Cantines scolaires et restauration rapide",
    "transcription": "Des menus équilibrés, un bar à salade, des sandwiches. L'école secondaire de Rochebelle à Sainte-Foy, au Québec, fait tout pour inciter les jeunes à mieux manger. J'aime la nourriture, le choix, les sandwiches et le bar à salade. Je suis fatiguée de manger gras. Une étude parue l'année dernière sur les habitudes des jeunes menée en collaboration avec l'Université de Laval montre qu'ils sont encore trop nombreux à manger à l'extérieur de l'école et à privilégier la restauration rapide. On aimerait augmenter de 15% la proportion des élèves qui restent à l'école pour déjeuner.",
    "question": "Quel problème soulève l'étude menée par l'Université de Laval ?",
    "options": {
      "A": "Les élèves manquent de temps pour prendre leur repas.",
      "B": "Les habitudes alimentaires des élèves sont difficiles à modifier.",
      "C": "Les menus des cantines scolaires sont mal équilibrés.",
      "D": "Les restaurants scolaires coûtent cher aux familles."
    },
    "reponse": "B",
    "reponseTexte": "Les habitudes alimentaires des élèves sont difficiles à modifier.",
    "explication": "L'étude montre que les élèves mangent trop souvent à l'extérieur. Il faut comprendre pourquoi.",
    "indice": [
      "habitudes",
      "jeunes",
      "restauration rapide",
      "Université de Laval"
    ]
  },
  {
    "id": 101,
    "niveau": "B2",
    "titre": "Coiffeur récupère cheveux pour océans",
    "transcription": "Cette initiative nous emmène dans le Var, Mathilde, où Thierry Gras est coiffeur depuis 30 ans. Installé à Saint-Zacharie, à côté d'Aubagne, cela fait des années qu'il stocke les cheveux qu'il coupe. Dans quelques jours, il va envoyer pour la première fois sa collecte dans des centres de réinsertion afin qu'il soit transformé, je cite, en barrière antipollution. La fibre capillaire aurait comme effet de pouvoir retenir certains polluants comme les huiles solaires ou les hydrocarbures, deux importantes causes de pollution marine. Avec un kilo de cheveux, on peut pomper 8 litres de pétrole, annonce le Varroa. Ces boudins, une fois réalisés, seront revendus à des ports ou communautés de communes. Plusieurs d'entre eux se déclarent déjà intéressés.",
    "question": "Qu'apprend-on sur Thierry Gras ?",
    "options": {
      "A": "Il commercialise des filets de pêche fabriqués à partir de cheveux.",
      "B": "Il dénonce la toxicité de certains traitements pour les cheveux.",
      "C": "Il propose un produit pour protéger les cheveux des particuliers.",
      "D": "Il récupère les cheveux de ses clients pour nettoyer les océans."
    },
    "reponse": "D",
    "reponseTexte": "Il récupère les cheveux de ses clients pour nettoyer les océans.",
    "explication": "Un coiffeur collecte les cheveux coupés de ses clients pour les transformer en barrière antipollution pour les océans. Il envoie sa première collecte dans des centres de réinsertion.",
    "indice": [
      "*(aucun)*"
    ]
  },
  {
    "id": 102,
    "niveau": "B2",
    "titre": "Lecture sans distractions",
    "transcription": "des enfants à côté, il faut se donner la peine. Il faut vraiment dire, ce temps-là, eh bien non, ce temps-là est consacré à la lecture.",
    "question": "D'après l'intervenante, qu'est-ce qui est important pour un lecteur ?",
    "options": {
      "A": "Partager ses impressions.",
      "B": "Rechercher de nouveaux auteurs.",
      "C": "S'extraire du quotidien.",
      "D": "Utiliser un support électronique."
    },
    "reponse": "C",
    "reponseTexte": "S'extraire du quotidien.",
    "explication": "Une intervenante parle de l'importance de se concentrer sur la lecture. Elle explique qu'il faut se consacrer entièrement à cette activité.",
    "indice": [
      "lecture",
      "consacré",
      "extraire",
      "quotidien"
    ]
  },
  {
    "id": 103,
    "niveau": "B2",
    "titre": "Se garer en centre-ville",
    "transcription": "Charlotte, tu as trouvé une place pour te garer ? Oui, mais j'ai mis au moins un quart d'heure. Entre les emplacements réservés et les arrêts minutes, Et tu t'es garé où ? Rue Colbert, après l'intersection avec la rue en sens interdit. Tu as pensé à prendre un ticket de stationnement ? Non, c'est gratuit dans ce quartier. Plus maintenant, la réglementation vient de changer. Bon, j'y retourne avant le passage des policiers municipaux.",
    "question": "Quel est le problème soulevé ?",
    "options": {
      "A": "La voiture est interdite en centre-ville.",
      "B": "Le sens de la circulation a été modifié.",
      "C": "Le stationnement est devenu payant.",
      "D": "Les embouteillages sont fréquents."
    },
    "reponse": "C",
    "reponseTexte": "Le stationnement est devenu payant.",
    "explication": "Charlotte et une autre personne discutent du stationnement en centre-ville. Charlotte a trouvé une place mais ne savait pas que le stationnement est devenu payant.",
    "indice": [
      "emplacements",
      "stationnement",
      "réglementation"
    ]
  },
  {
    "id": 104,
    "niveau": "B2",
    "titre": "Croisière touristique sur la Seine – version bis",
    "transcription": "Mesdames, Messieurs, bienvenue sur le bateau de la société Safim, au service de notre clientèle galère. Nous allons découvrir ensemble Paris au gré de la salive. C'est comme un lieu, un petit, ou en autocar. Voici notre programme. De 10h à 11h, nous allons longer les quais et passer sur le pont de Pont. Nous nous arrêterons devant Notre-Dame de Marie, les musées du Louvre et d'Orsay. Enfin, nous arriverons au Trocadéro. Pour vous remettre de toutes ces émotions, un déjeuner est prévu ici même à 12h30. Un bus viendra vous reprendre à 13h30 pour vous conduire à votre hôtel. Passez un très agréable moment en notre compagnie.",
    "question": "Que propose la guide au touriste ?",
    "options": {
      "A": "Un tour de la capitale en bus découvert.",
      "B": "Un parcours à pied le long des quais.",
      "C": "Une visite guidée du Musée du Louvre.",
      "D": "Une croisière-promenade sur la Seine."
    },
    "reponse": "D",
    "reponseTexte": "Une croisière-promenade sur la Seine.",
    "explication": "Une guide accueille les touristes à bord d'un bateau pour une visite de Paris. Elle présente le programme de la croisière sur la Seine.",
    "indice": [
      "bateau",
      "Safim",
      "Seine",
      "Trocadéro"
    ]
  },
  {
    "id": 105,
    "niveau": "B2",
    "titre": "Enfant qui triche aux jeux de société",
    "transcription": "Lucie a trois enfants. Pour Noël, ils ont reçu des jeux de société. Ces jeux les passionnent. Ils jouent beaucoup avec leurs copains ou encore avec leurs cousins. Mais, nous dit Lucie, mon fils de 6 ans provoque régulièrement des drames parce qu'il triche. Une situation à laquelle tous les parents de jeunes enfants sont un jour ou l'autre confrontés.",
    "question": "Quel problème cette mère rencontre-t-elle ?",
    "options": {
      "A": "Les jouets éloignent ses enfants de leurs camarades de classe.",
      "B": "Les derniers jeux offerts à ses enfants sont décevants.",
      "C": "Ses enfants jouent beaucoup et travaillent moins à l'école.",
      "D": "Un de ses enfants a du mal à respecter les règles du jeu."
    },
    "reponse": "D",
    "reponseTexte": "Un de ses enfants a du mal à respecter les règles du jeu.",
    "explication": "Identifier le problème principal que rencontre la mère avec son fils de 6 ans. Attention à ne pas se laisser distraire par les détails.",
    "indice": [
      "triche",
      "jeux de société",
      "drames",
      "règles"
    ]
  },
  {
    "id": 106,
    "niveau": "B2",
    "titre": "Déchets de ski dans les rivières",
    "transcription": "La saison de ski se termine, les dernières stations encore ouvertes vont fermer ce week-end. Place au nettoyage, des associations vont organiser des ramassages de déchets car au pied des télésièges, Virginie, on trouve des choses qui n'ont rien à y faire. Oui, des papiers de barres chocolatées, des canettes, des tubes vides de crème solaire jetés au pied des sapins. Et ceux qui les oublient n'y pensent pas forcément. Mais avec la fonte des neiges, ces déchets se retrouvent souvent dans un ruisseau qui mène à une rivière qui mène jusqu'à la mer. Donc on peut retrouver sur une plage en Camargue des emballages en plastique jetés depuis un télésiège en Savoie et apportés par le Rhône.",
    "question": "Quelle est la conséquence des déchets jetés par les skieurs ?",
    "options": {
      "A": "Les déchets abandonnés rendent les pistes très dangereuses.",
      "B": "Les skieurs contribuent en partie à la pollution des océans.",
      "C": "Les stations veulent interdire la vente de certains produits.",
      "D": "Les touristes doivent participer aux opérations de nettoyage."
    },
    "reponse": "B",
    "reponseTexte": "Les skieurs contribuent en partie à la pollution des océans.",
    "explication": "Des associations organisent des ramassages de déchets près des stations de ski. Les déchets jetés par les skieurs finissent dans les rivières et les océans.",
    "indice": [
      "*(aucun)*"
    ]
  },
  {
    "id": 107,
    "niveau": "B2",
    "titre": "Comparer le temps d'hier et aujourd'hui",
    "transcription": "Quel froid ce matin ! Oui, mais au moins, il y a du soleil. C'est sûr, à côté d'hier, la pluie toute la journée, c'était l'horreur. Ah oui, j'aime mieux ce froid sec.",
    "question": "Quel temps fait-il aujourd'hui ?",
    "options": {
      "A": "Il fait plus beau qu'hier.",
      "B": "Il fait plus mauvais qu'hier.",
      "C": "Il pleut plus qu'hier.",
      "D": "Il y a moins de soleil qu'hier."
    },
    "reponse": "A",
    "reponseTexte": "Il fait plus beau qu'hier.",
    "explication": "Deux personnes discutent du temps qu'il fait aujourd'hui par rapport à hier. L'une mentionne le froid actuel mais apprécie le soleil, tandis que l'autre se souvient de la pluie incessante de la veille.",
    "indice": [
      "froid",
      "soleil",
      "pluie",
      "horreur"
    ]
  },
  {
    "id": 108,
    "niveau": "B2",
    "titre": "Répartition des rôles dans un service",
    "transcription": "Je pense que le chef de département a raison. Il faudrait modifier la façon dont nous fonctionnons et redéfinir clairement la mission de chacun. Oui, je suis d'accord. D'autant que nous avons eu des compréhensions entre nous ces derniers temps. D'après moi, elles sont directement liées au fait que personne ne sait précisément où commence son rôle. Et surtout, où il s'arrête dans le projet. Tout à fait d'accord. Moi-même, je suis un peu perdu. Si tout le monde essaie de tout faire, on ne sera jamais d'accord au sein de ce service. Sans compter que ça ne nous fait pas gagner de temps. Bien. Alors, mettons ça à l'ordre de la réunion d'équipe de demain.",
    "question": "Quel est l'objet de la discussion ?",
    "options": {
      "A": "La répartition des tâches dans le service.",
      "B": "Le manque d'expérience de l'équipe.",
      "C": "Le retard pris dans la réalisation d'un projet.",
      "D": "Les désaccords entre employeur et employés."
    },
    "reponse": "A",
    "reponseTexte": "La répartition des tâches dans le service.",
    "explication": "Des collègues discutent des problèmes de leur service et proposent de clarifier les rôles de chacun lors d'une réunion d'équipe.",
    "indice": [
      "*(aucun)*"
    ]
  },
  {
    "id": 109,
    "niveau": "B2",
    "titre": "Université sénégalaise avec sélection stricte",
    "transcription": "On est aujourd'hui à Saint-Louis du Sénégal, à l'université Gaston Berger. C'est la deuxième université du pays avec dix fois moins d'étudiants qu'à Dakar. Elle a échappé à l'arrivée en masse d'étudiants pour une raison simple, c'est ce que nous explique le recteur de l'université. L'université a été créée pour développer l'excellence. Nous avons mis en place la sélection pour assurer la réussite des étudiants que nous recrutons sur la base des résultats du bac qui doit être obtenu avec mention. Du coup, le recrutement n'est pas seulement local. On vient de partout pour s'inscrire ici. Et comme les étudiants ont un encadrement fort, les taux de réussite sont très élevés.",
    "question": "Qu'explique la personne interrogée à propos de cette université sénégalaise ?",
    "options": {
      "A": "Les critères de sélection sont particulièrement stricts.",
      "B": "Les diplômes sont tous obtenus avec une mention.",
      "C": "Les enseignants sont recrutés dans le monde entier.",
      "D": "Les étudiants sont inscrits à des cours particuliers."
    },
    "reponse": "A",
    "reponseTexte": "Les critères de sélection sont particulièrement stricts.",
    "explication": "Le recteur de l'université Gaston Berger explique les critères d'admission stricts et le succès des étudiants grâce à une sélection rigoureuse basée sur les résultats du bac.",
    "indice": [
      "*(aucun)*"
    ]
  },
  {
    "id": 110,
    "niveau": "B2",
    "titre": "Seniors et colocation intergénérationnelle",
    "transcription": "Aujourd'hui, de plus en plus de Français ont recours à la colocation comme mode d'hébergement. Pourquoi un tel engouement ? Face aux pénuries des petites surfaces et à l'augmentation des loyers, la colocation est la solution idéale. Elle permet d'accéder à de grands appartements sans en payer intégralement le loyer. Les étudiants ont été les premiers à en comprendre les avantages, suivis par les seniors. Pour eux, les dettes à pic. L'espérance de vie ne cesse de s'allonger et les pensions de retraite ne sont parfois plus suffisantes pour vivre décemment. La colocation entre différentes générations commence donc à se développer.",
    "question": "Quel phénomène apparaît chez les seniors ?",
    "options": {
      "A": "Ils choisissent de partager leur habitation avec des jeunes.",
      "B": "Ils recherchent des appartements aménagés selon leurs besoins.",
      "C": "Ils refusent de laisser leurs biens à des locataires sans emploi.",
      "D": "Ils s'organisent pour faire valoir leur droit au logement."
    },
    "reponse": "A",
    "reponseTexte": "Ils choisissent de partager leur habitation avec des jeunes.",
    "explication": "Les seniors ont de plus en plus recours à la colocation pour faire face à des difficultés financières. La question porte sur ce qu'ils font pour améliorer leur situation.",
    "indice": [
      "*(aucun)*"
    ]
  },
  {
    "id": 111,
    "niveau": "B2",
    "titre": "Conseiller les clients pendant les fêtes",
    "transcription": "Bonjour à tous ! Vous avez tous passé les tests avec succès et le monde enchanté est heureux de vous accueillir parmi son personnel. La période des fêtes voit notre magasin littéralement envahi d'enfants venus repérer les jouets à commander. Vous devez être attentif, agréable, sans insistance toutefois. Faites la démarche d'aller conseiller les clients sur les produits, mais sachez vous effacer afin de leur permettre d'être à l'aise et donc de consommer en toute tranquillité. Je compte sur vous pour véhiculer une bonne image du magasin. Pas d'acharnement donc. Bonne journée !",
    "question": "Quelle est l'attitude à adopter par le personnel ?",
    "options": {
      "A": "Être insistant pour augmenter les ventes.",
      "B": "Ignorer les clients pour leur donner de l'espace.",
      "C": "Assister de façon discrète le client.",
      "D": "Se concentrer sur l'arrangement des produits."
    },
    "reponse": "C",
    "reponseTexte": "Assister de façon discrète le client.",
    "explication": "Un responsable parle au personnel d'un magasin pendant la période des fêtes, expliquant comment conseiller les clients sans être insistant.",
    "indice": [
      "*(aucun)*"
    ]
  },
  {
    "id": 112,
    "niveau": "B2",
    "titre": "Soirée annulée au cinéma – version bis",
    "transcription": "Salut Marie, alors finalement qu'est-ce que tu as fait samedi soir ? J'avais pas le moral, j'étais invitée chez ma sœur, je n'y suis pas allée. Il y a des amis qui m'ont appelé pour aller danser au dernier moment. Je n'ai pas eu envie. Tu as fait quoi alors ? Finalement, j'ai voulu aller au cinéma. La séance était annulée pour raison technique. Alors je suis rentrée, je me suis couchée. Si j'avais su, je serais venu te chercher. On est allé jouer au bowling, on a passé une super soirée.",
    "question": "Comment la jeune fille a-t-elle passé sa soirée ?",
    "options": {
      "A": "Elle est sortie en boîte de nuit.",
      "B": "Elle a dîné avec sa famille.",
      "C": "Elle est restée toute seule.",
      "D": "Elle a vu un mauvais film."
    },
    "reponse": "C",
    "reponseTexte": "Elle est restée toute seule.",
    "explication": "Deux amies discutent de leurs soirées respectives. L'une explique qu'elle a voulu aller au cinéma mais la séance a été annulée.",
    "indice": [
      "cinéma",
      "annulée",
      "rentrée",
      "couchée"
    ]
  },
  {
    "id": 113,
    "niveau": "B2",
    "titre": "Enseigner les maths avec des jeux",
    "transcription": "Comment réconcilier donc les élèves et les maths ? Les maths apparaissent beaucoup trop techniques et déconnectées du monde qui nous entoure, alors qu'il faudrait les enseigner comme un outil de réflexion ancré dans le quotidien, affirme Nicolas Pinel. Il suggère de montrer que les maths sont à la portée de tous en revenant à des choses très concrètes, justement en mettant les enfants dans des situations de réussite afin qu'ils prennent du plaisir et retrouvent un sentiment de compétence. Les tout-petits peuvent par exemple apprendre à rejouer au jeu de la marchande, car figurez-vous que beaucoup d'enfants aujourd'hui ne savent plus rendre la monnaie. La place du jeu est essentielle pour combattre l'anxiété qui naît de l'échec et de la mésestime de soi.",
    "question": "Que préconise Nicolas Pinel pour les mathématiques ?",
    "options": {
      "A": "De créer des groupes de recherche scientifique.",
      "B": "De reculer l'âge de début de leur apprentissage.",
      "C": "De réviser les méthodes pédagogiques actuelles.",
      "D": "De sélectionner les meilleurs élèves des écoles."
    },
    "reponse": "C",
    "reponseTexte": "De réviser les méthodes pédagogiques actuelles.",
    "explication": "Nicolas Pinel parle de l'importance d'enseigner les maths de manière ludique et concrète pour les élèves. Il propose des méthodes pour rendre les maths accessibles et agréables.",
    "indice": [
      "*(aucun)*"
    ]
  },
  {
    "id": 114,
    "niveau": "B2",
    "titre": "Scanner un produit au supermarché",
    "transcription": "Aujourd'hui, le bien manger est devenu la priorité au point de bouleverser nos habitudes de consommation. Notre façon de faire des courses est en même, pardonnez-moi, en pleine révolution. Dans les rayons des supermarchés, plus d'un Français sur six utilise désormais une application qui permet d'évaluer la qualité nutritionnelle des produits. Bonjour Gauthier de Lambucard. Bonjour Yves, bonjour à tous. Eh bien, pour comprendre, je vous emmène tester l'une de ces applications la plus téléchargée. Justine, trentenaire, place son smartphone face à sa bouteille de jus de fruits. Je sors l'application. On scanne le code barre. On scanne le code barre. Et donc, j'ai un score qui apparaît. 59 sur 100 pour le jus de fruits, pommes, poires et pêches. C'est considéré comme bon.",
    "question": "À quoi servent ces applications ?",
    "options": {
      "A": "Comparer les prix selon les marques.",
      "B": "Donner une note en tant qu'utilisateur.",
      "C": "Obtenir des réductions sur les achats.",
      "D": "Vérifier les caractéristiques des aliments."
    },
    "reponse": "D",
    "reponseTexte": "Vérifier les caractéristiques des aliments.",
    "explication": "Gauthier de Lambucard présente une application utilisée par Justine pour scanner des produits au supermarché et obtenir des informations sur leur qualité nutritionnelle.",
    "indice": [
      "*(aucun)*"
    ]
  },
  {
    "id": 115,
    "niveau": "B2",
    "titre": "Annuler le théâtre pour dîner",
    "transcription": "Salut Maëlle ! Alors, tu vas au théâtre avec tes parents ce soir ? Non, finalement, nous allons dîner en ville. Ah bon ? Pourquoi ? Ils ont changé d'avis. La pièce finit trop tard. Je leur ai proposé le cinéma, mais c'est trop loin.",
    "question": "Qu'est-ce que Maëlle va faire ce soir ?",
    "options": {
      "A": "Manger au restaurant.",
      "B": "Regarder un film.",
      "C": "Rester à la maison.",
      "D": "Voir un spectacle."
    },
    "reponse": "A",
    "reponseTexte": "Manger au restaurant.",
    "explication": "Maëlle parle avec une amie de ses projets pour la soirée. Elle explique que ses parents ont changé d'avis et qu'ils vont dîner en ville au lieu d'aller au théâtre.",
    "indice": [
      "théâtre",
      "dîner",
      "cinéma",
      "trop loin"
    ]
  },
  {
    "id": 116,
    "niveau": "B2",
    "titre": "Voyage à vélo en Inde",
    "transcription": "Alors Frédéric, ce voyage en Inde ? Très intéressant, mais c'était dur. J'ai traversé des paysages magnifiques et des régions très pittoresques, mais par 40 degrés à l'ombre. Je ne recommencerai pas. Et puis, ce n'est pas vraiment prévu pour un voyage à vélo. Beaucoup de circulation sur les routes et pratiquement pas de voies cyclables. Par contre, l'accueil des gens a été partout très chaleureux, même s'ils avaient du mal à comprendre pourquoi je voulais traverser leur pays à vélo, et seul en plus.",
    "question": "Qu'est-ce que Frédéric a trouvé difficile pendant son voyage ?",
    "options": {
      "A": "Le comportement des habitants.",
      "B": "Le sentiment de solitude.",
      "C": "Les conditions météorologiques.",
      "D": "Les obstacles linguistiques."
    },
    "reponse": "C",
    "reponseTexte": "Les conditions météorologiques.",
    "explication": "Frédéric parle de son voyage à vélo en Inde et des défis qu'il a rencontrés.",
    "indice": [
      "40 degrés",
      "paysage",
      "circulation",
      "voies cyclables"
    ]
  },
  {
    "id": 117,
    "niveau": "B2",
    "titre": "Projet européen compromis",
    "transcription": "Oh Alors, quelles informations avez-vous ramenées de Berne, Pierre ? Notre partenaire suisse n'est pas favorable à l'élargissement de nos activités communes. Il estime que les investissements sont trop élevés par rapport aux retombées économiques possibles. C'est également la position de nos collaborateurs anglais. Ils ne veulent pas prendre de risques inutiles, étant donné le faible taux de croissance du pouvoir d'achat cette année. Ce projet est véritablement compromis. Rome et Berlin avaient déjà montré leur réticence. Eh bien d'accord. Arrêtons tout dès maintenant et commençons tout de suite à explorer de nouvelles pistes.",
    "question": "Pourquoi le directeur choisit-il de renoncer à ce projet ?",
    "options": {
      "A": "Le directeur nourrit de plus grandes ambitions pour l'entreprise.",
      "B": "Le groupe a décidé de restreindre son domaine d'intervention.",
      "C": "Les partenaires européens trouvent le projet hasardeux.",
      "D": "Les ressources financières de l'entreprise sont en baisse."
    },
    "reponse": "C",
    "reponseTexte": "Les partenaires européens trouvent le projet hasardeux.",
    "explication": "Un directeur discute avec un employé des réticences des partenaires européens concernant un projet d'expansion. Les partenaires suisses et anglais estiment que les investissements sont trop élevés et les retombées économiques incertaines.",
    "indice": [
      "*(aucun)*"
    ]
  },
  {
    "id": 118,
    "niveau": "B2",
    "titre": "Navigatrice parle de la mer",
    "transcription": "La navigatrice Marie Levallois est la porte-parole de la Semaine de la mer. Écoutons-la. On a voulu mettre en place une semaine de la mer pour le très grand public. À côté, les institutions membres de l'Alliance de la mer font intervenir des scientifiques et des professionnels qui travaillent sur des solutions d'avenir pour une meilleure gestion de la mer. Mais il faut mobiliser tout le monde pour faire prendre conscience que les océans ne sont pas seulement l'endroit où on va passer ses vacances, mais participent aussi à la régulation du climat, fournissent 70% de l'oxygène qu'on respire, représentent un réservoir de solutions en énergie renouvelable et médicinale. Des ressources dont on ne connaît quasi rien, puisqu'on ne connaît qu'un pour cent de la biodiversité marine.",
    "question": "Que propose la navigatrice ?",
    "options": {
      "A": "De collecter des dons.",
      "B": "De développer la recherche.",
      "C": "De sensibiliser l'opinion.",
      "D": "D'explorer l'écosystème."
    },
    "reponse": "C",
    "reponseTexte": "De sensibiliser l'opinion.",
    "explication": "La navigatrice Marie Levallois parle de l'importance des océans et des actions de la Semaine de la mer pour sensibiliser le public.",
    "indice": [
      "*(aucun)*"
    ]
  },
  {
    "id": 119,
    "niveau": "B2",
    "titre": "Retraité regrette sa vie professionnelle",
    "transcription": "Bonjour Gérard, nous écoutons votre témoignage. Eh bien, moi j'ai passé la plus grande partie de ma vie à travailler. J'ai placé ma vie sous le signe de cette phrase d'un philosophe. On existe par ce que l'on fait. Mais aujourd'hui, à 62 ans, je me dis que... Oublions, on n'est peut-être pas aussi positif que ça. J'ai une jolie maison. Un train de vie plutôt élevé. Je n'ai jamais été marié, je n'ai jamais eu d'enfant et ma vie amoureuse fut un parfait désastre. On existe par ce que l'on fait, certes, mais...",
    "question": "Qu'est-ce que Gérard aurait aimé faire ?",
    "options": {
      "A": "Acquérir son logement.",
      "B": "Épargner de l'argent.",
      "C": "Exercer un autre métier.",
      "D": "Fonder un foyer."
    },
    "reponse": "D",
    "reponseTexte": "Fonder un foyer.",
    "explication": "Gérard, un retraité, parle de sa vie professionnelle et de ses regrets. Il explique ce qu'il aurait aimé faire différemment.",
    "indice": [
      "maison",
      "train de vie",
      "jamais été marié",
      "jamais eu d'enfant"
    ]
  },
  {
    "id": 120,
    "niveau": "B2",
    "titre": "Plateforme d'hébergement pour femmes voyageant seules",
    "transcription": "Votre chronique s'adresse aux globetrotteuses. Ce matin, à toutes les femmes qui parcourent le monde en solitaire, une toute nouvelle plateforme vient d'être créée exprès pour elles. Et oui, voyager seule a ses avantages, Mathilde, mais peut aussi faire un peu peur quand on est une femme. Du moins, c'est ce qu'a pu constater Christina Boixière, habituée au voyage en solo depuis 17 ans. Son expérience lui a appris que dormir chez l'habitant était la meilleure façon de découvrir la culture d'un pays. Toutefois, cette formule n'est pas forcément de tout repos pour ne pas dire sans risque. C'est pourquoi elle a eu l'idée de monter une plateforme d'hébergement réservée aux femmes qui hébergent d'autres femmes.",
    "question": "En quoi cette plateforme est-elle utile aux femmes qui voyagent ?",
    "options": {
      "A": "Elle fournit une carte de lieux dangereux à éviter.",
      "B": "Elle leur enseigne des techniques d'autodéfense.",
      "C": "Elle leur permet de se loger en toute sécurité.",
      "D": "Elle propose une liste de numéros d'urgence."
    },
    "reponse": "C",
    "reponseTexte": "Elle leur permet de se loger en toute sécurité.",
    "explication": "Une femme parle de sa nouvelle plateforme d'hébergement pour femmes voyageant seules. Elle explique comment cette plateforme peut être utile.",
    "indice": [
      "*(aucun)*"
    ]
  },
  {
    "id": 121,
    "niveau": "B2",
    "titre": "Vendeuse cherche emploi à Montréal",
    "transcription": "Bonjour, monsieur. J'ai vu votre annonce. Vous cherchez toujours une vendeuse ? Oui. Cela vous intéresse ? Vous avez de l'expérience ? J'ai été vendeuse 15 ans à Québec, mais mon petit ami a été muté à Montréal, alors j'ai dû démissionner. Vous habitez encore là-bas ? Non, nous sommes chez mes parents en attendant de trouver un logement. Vous parlez anglais ? Bien sûr. Bien. Vous pouvez revenir demain pour un essai ? Avec plaisir.",
    "question": "Pourquoi la personne cherche-t-elle du travail à Montréal ?",
    "options": {
      "A": "Pour changer de profession.",
      "B": "Pour découvrir de nouveaux lieux.",
      "C": "Pour se rapprocher de sa famille.",
      "D": "Pour suivre son compagnon."
    },
    "reponse": "D",
    "reponseTexte": "Pour suivre son compagnon.",
    "explication": "Une femme parle à un employeur potentiel à Montréal pour un poste de vendeuse, expliquant qu'elle a déménagé suite à la mutation de son petit ami.",
    "indice": [
      "muté",
      "démissionner",
      "logement",
      "compagnon"
    ]
  },
  {
    "id": 122,
    "niveau": "B2",
    "titre": "Le Relais et l'économie circulaire",
    "transcription": "L'économie circulaire, c'est le réemploi, la réparation, le partage, la location et le recyclage des matériaux. Lorsque la matière redevient matière, la boucle, le cercle est bouclé. Oui, alors, et c'est le cas du sex-store textile. Oui, depuis 30 ans, l'entreprise Le Relais collecte et trie les vêtements que vous ne voulez plus porter. Et depuis 30 ans, elle fait de l'économie circulaire, en fait, sans le savoir. Car à l'origine, il s'agissait surtout de réinsérer des personnes en difficulté.",
    "question": "Que nous apprend l'intervenante sur l'économie circulaire ?",
    "options": {
      "A": "Elle a d'abord une vocation caritative.",
      "B": "Elle concerne une seule branche d'activité.",
      "C": "Elle est issue d'une initiative régionale.",
      "D": "Elle permet la réduction du gaspillage."
    },
    "reponse": "A",
    "reponseTexte": "Elle a d'abord une vocation caritative.",
    "explication": "Une intervenante parle de l'entreprise Le Relais qui collecte et trie des vêtements depuis 30 ans pour réinsérer des personnes en difficulté.",
    "indice": [
      "Économie circulaire",
      "Le Relais",
      "réinsérer",
      "personnes en difficulté"
    ]
  },
  {
    "id": 123,
    "niveau": "B2",
    "titre": "Éco-éducateur explique son travail",
    "transcription": "Être éco-éducateur, c'est être à cheval entre l'éducateur et le pédagogue, puisqu'on va sensibiliser le public aux problématiques environnementales, mais en même temps expliquer ces problématiques, et puis les solutions. Qui sont actuellement préconisées. La plupart du temps, on accueille un public d'enfants ou de scolaires ou de centres de loisirs. Mais en vérité, on touche tous les publics puisqu'on est ouvert le weekend. Néanmoins, notre journée ne se cantonne pas à ça. On a aussi... Le montage de tous les projets, d'événementiels ou d'animations futures, qui nécessitent de créer des supports, d'élaborer des déroulements pédagogiques. Ici, au Clos des Blancs-Manteaux, notre entrée thématique, c'est l'écologie au quotidien. Les éco-gestes, les astuces qu'on peut mettre en place dans notre vie de tous les jours pour participer à la préservation de la planète.",
    "question": "Que propose le site dans lequel cet intervenant travaille ?",
    "options": {
      "A": "Des activités en faveur du développement durable.",
      "B": "Des formations aux nouveaux métiers de l'éducation.",
      "C": "Des sorties équestres pour les écoliers de la région.",
      "D": "Des stages à destination des animateurs jeunesse."
    },
    "reponse": "A",
    "reponseTexte": "Des activités en faveur du développement durable.",
    "explication": "Un éco-éducateur explique son rôle en tant que sensibilisateur aux problèmes environnementaux auprès d'enfants et d'autres publics, et décrit les activités et projets qu'il organise dans un centre éducatif.",
    "indice": [
      "*(aucun)*"
    ]
  },
  {
    "id": 124,
    "niveau": "B2",
    "titre": "Client mécontent d'une augmentation",
    "transcription": "Allô, bonjour madame, c'est monsieur Étienne. J'ai reçu mon relevé bancaire et je vois que mon abonnement au service en ligne a augmenté de 5%. C'est pas beaucoup, certes, mais est-ce normal ? Oui, oui, je vous rassure, c'est bien normal. Tous nos tarifs ont subi une augmentation au 1er janvier. Peut-être, mais je n'ai reçu aucun courrier pour m'avertir. Vous avez raison, mais nos conditions tarifaires sont affichées à l'agence. Cela ne justifie pas que vous n'avertissiez pas vos clients. Alors je vous demande de résilier cet abonnement au plus vite.",
    "question": "Pourquoi le client demande-t-il la résiliation de son abonnement bancaire ?",
    "options": {
      "A": "Il trouve que cela lui coûte trop cher.",
      "B": "Il pense que cela ne lui est plus utile.",
      "C": "Il trouve que l'augmentation est injustifiée.",
      "D": "Il pense qu'il aurait dû être prévenu."
    },
    "reponse": "D",
    "reponseTexte": "Il pense qu'il aurait dû être prévenu.",
    "explication": "Un client appelle sa banque pour se plaindre d'une augmentation de 5% sur son abonnement au service en ligne.",
    "indice": [
      "abonnement",
      "augmentation",
      "courrier",
      "avertir"
    ]
  },
  {
    "id": 125,
    "niveau": "B2",
    "titre": "Retard au travail",
    "transcription": "Vous avez vu l'heure ? Oui, je sais, il est un peu tard. C'est la troisième fois que vous arrivez en retard cette semaine. Je m'excuse. Écoutez-moi bien. Votre période d'essai se termine dans 15 jours. Dorénavant, arrivez à l'heure si vous voulez être embauché. Annonce le directeur à l'employé.",
    "question": "Que va-t-il se passer pour l'employé ?",
    "options": {
      "A": "Il est possible qu'il soit renvoyé.",
      "B": "Il est renvoyé définitivement.",
      "C": "Il va commencer sa période d'essai.",
      "D": "Il va être embauché définitivement."
    },
    "reponse": "A",
    "reponseTexte": "Il est possible qu'il soit renvoyé.",
    "explication": "Un directeur parle à un employé qui est en retard pour la troisième fois cette semaine, alors que sa période d'essai se termine bientôt.",
    "indice": [
      "retard",
      "période d'essai",
      "embauché"
    ]
  },
  {
    "id": 126,
    "niveau": "B2",
    "titre": "Compositeurs et revenus insuffisants",
    "transcription": "Et donc, les compositeurs ont un autre métier, c'est-à-dire qu'ils sont chefs d'orchestre, ou ils sont directeurs de conservatoire, ou ils sont enseignants, chercheurs, directeurs artistiques parfois, parce que leur métier de compositeur ne leur permet pas de pouvoir avoir suffisamment de rémunération pour vivre correctement. Je pense qu'il doit y avoir à peu près que 2 ou 3% de compositeurs aujourd'hui qui vivent réellement de leur musique, c'est vraiment très très peu.",
    "question": "Quelles difficultés les créateurs de musique rencontrent-ils ?",
    "options": {
      "A": "Leur public est en diminution.",
      "B": "Leur salaire est insuffisant.",
      "C": "Leur savoir est peu transmis.",
      "D": "Leur talent est dévalorisé."
    },
    "reponse": "B",
    "reponseTexte": "Leur salaire est insuffisant.",
    "explication": "Un interlocuteur explique que les compositeurs ont souvent un autre métier car leurs revenus sont insuffisants pour vivre de leur musique.",
    "indice": [
      "compositeurs",
      "rémunération",
      "vivre correctement"
    ]
  },
  {
    "id": 127,
    "niveau": "B2",
    "titre": "Employeur reproche résultats insuffisants",
    "transcription": "Tu te rends compte ? Il m'a convoqué dans son bureau dès que je suis arrivé. Mais pourquoi ? Tiens-toi bien. Il m'a dit... Monsieur Baudon, ce mois-ci, vous n'avez pas réalisé votre objectif. Vous deviez atteindre les 150 000 euros. Il vous en est loin. Il va falloir être plus important. Mais en même temps, tu viens de quoi ? D'abord que depuis que je travaille ici, j'ai un peu de congé. En plus, comme j'essaie de réduire les frais de déplacement, je fais un million de ventes, mais plus de bénéfices. Après ça, elle s'est tranquille. Oui, il m'a affirmé qu'il ne fallait pas le prendre mal, qu'il faisait comme ça avec tous les employés. On verra bien nous la prochaine.",
    "question": "Que reproche l'employeur à M. Baudot ?",
    "options": {
      "A": "Sa mauvaise gestion du temps.",
      "B": "Ses dépenses excessives.",
      "C": "Ses absences répétées.",
      "D": "Ses résultats insuffisants."
    },
    "reponse": "D",
    "reponseTexte": "Ses résultats insuffisants.",
    "explication": "M. Baudot est convoqué par son employeur qui lui reproche de ne pas avoir atteint ses objectifs de vente. Il explique ses efforts pour réduire les frais de déplacement.",
    "indice": [
      "objectif",
      "150 000 euros",
      "bénéfices"
    ]
  },
  {
    "id": 128,
    "niveau": "B2",
    "titre": "Demander une formation en vente",
    "transcription": "CDV Formation, bonjour. Bonjour, je suis intéressé par votre formation en vente. Oui ? Quel est votre parcours ? Je suis déménageur depuis 4 ans. Je voudrais me réorienter. Malheureusement, notre formation s'adresse à des personnes déjà expérimentées en vente. Je vois. Mais j'y pense. J'ai travaillé deux étés comme caissier en supermarché. C'est suffisant ? Envoyez-nous un CV et une lettre de motivation. Nous étudierons votre candidature. Je m'en occupe. Merci. Au revoir. Au revoir.",
    "question": "Pour quelles raisons la jeune femme accepte-t-elle de recevoir la candidature de ce monsieur ?",
    "options": {
      "A": "Il a quatre ans d'expérience.",
      "B": "Il a travaillé dans un commerce.",
      "C": "Il accepte de travailler l'été.",
      "D": "Il est très motivé par la formation."
    },
    "reponse": "B",
    "reponseTexte": "Il a travaillé dans un commerce.",
    "explication": "Un homme appelle un centre de formation pour s'inscrire à une formation en vente. Il explique son parcours et son intérêt pour la formation.",
    "indice": [
      "formation",
      "vente",
      "caissier",
      "supermarché"
    ]
  },
  {
    "id": 129,
    "niveau": "B2",
    "titre": "Vacances d'été dans les Laurentides",
    "transcription": "Qu'est-ce que tu veux faire pour les prochaines vacances ? Il faut qu'on s'organise. Oui, sinon ce sera difficile de trouver un chalet disponible. J'aimerais bien aller dans les Laurentides. Les Vaillancourt y seront tout le mois d'août. Oh non, on y passe tous nos étés depuis dix ans.",
    "question": "Pourquoi la femme refuse-t-elle d'aller dans les Laurentides ?",
    "options": {
      "A": "Parce qu'elle craint les grosses chaleurs de l'été.",
      "B": "Parce qu'elle pense que les Vaillancourt sont ennuyeux.",
      "C": "Parce qu'elle souhaite changer de destination estivale.",
      "D": "Parce qu'elle trouve les chalets inconfortables."
    },
    "reponse": "C",
    "reponseTexte": "Parce qu'elle souhaite changer de destination estivale.",
    "explication": "Un couple discute de leurs vacances d'été et l'homme propose d'aller dans les Laurentides, mais la femme refuse.",
    "indice": [
      "Laurentides",
      "Vaillancourt",
      "été",
      "dix ans"
    ]
  },
  {
    "id": 130,
    "niveau": "B2",
    "titre": "Jeunes adultes chez leurs parents",
    "transcription": "À peine a-t-on le temps de s'habituer à être parent, que l'on doit préparer nos enfants à devenir autonomes, puis à partir. Ce moment où le jeune adulte quitte la maison est difficile, effectivement. Ce moment est difficile tant pour le parent que pour l'enfant. Les adolescents qui ont attendu parfois très longtemps ce temps de liberté, eux-mêmes peuvent se retrouver démunis au moment de franchir la porte de la maison. Aujourd'hui, les jeunes adultes vivent de plus en plus longtemps chez leurs parents. Tout à fait, on invoque des raisons économiques pour rester à la maison plus longtemps. Ceci est parfois lié aussi à une question d'immaturité. On est bien à la maison, maman et papa prennent soin de tout. Pratique quand même, loger, nourrir, blanchir. Exactement.",
    "question": "Selon la personne interrogée, qu'est-ce qui retient les jeunes adultes chez leurs parents ?",
    "options": {
      "A": "La peur de faire de la peine à leur entourage familial.",
      "B": "Le confort que leur procure leur structure familiale.",
      "C": "Le plaisir de voir leur famille comme ils le souhaitent.",
      "D": "L'obligation de soutenir financièrement leur famille."
    },
    "reponse": "B",
    "reponseTexte": "Le confort que leur procure leur structure familiale.",
    "explication": "Identifier la raison pour laquelle les jeunes adultes restent chez leurs parents selon la personne interrogée. Attention aux pièges des autres options.",
    "indice": [
      "*(aucun)*"
    ]
  },
  {
    "id": 131,
    "niveau": "B2",
    "titre": "Réussite inattendue à l'examen",
    "transcription": "Mathieu, je vous félicite. Vous avez fait un très bon travail de recherche. C'est vrai ? Je ne pensais pas avoir réussi. J'ai mis beaucoup de temps. Ça n'a pas été facile. En tout cas, c'est une excellente copie. Vous avez la meilleure note du groupe. Ça alors ! Je ne peux pas le croire.",
    "question": "Que ressent le jeune homme ?",
    "options": {
      "A": "De l'enthousiasme.",
      "B": "De l'étonnement.",
      "C": "De l'admiration.",
      "D": "De l'intérêt."
    },
    "reponse": "B",
    "reponseTexte": "De l'étonnement.",
    "explication": "Un professeur félicite un étudiant pour son excellent travail de recherche. L'étudiant est surpris car il ne s'attendait pas à réussir.",
    "indice": [
      "félicite",
      "réussi",
      "meilleure note"
    ]
  },
  {
    "id": 132,
    "niveau": "B2",
    "titre": "Refuser de jouer au volley à cause du vent",
    "transcription": "Vous venez ? On va faire un volley et après on ira nager. Tu viens, Véro ? Mais ce n'est pas possible par ce temps. Vous avez vu ce vent ? Vous n'attrapez jamais le ballon. N'exagère pas, ce n'est pas grave. Allez, viens, tu adores ça. Non, allez-y sans moi. J'aime mieux aller me baigner.",
    "question": "Pour quelle raison la fille refuse-t-elle de jouer au volley ?",
    "options": {
      "A": "Elle veut faire du vélo.",
      "B": "Elle a horreur du volley.",
      "C": "Elle trouve le vent trop fort.",
      "D": "Elle se sent fatiguée."
    },
    "reponse": "C",
    "reponseTexte": "Elle trouve le vent trop fort.",
    "explication": "Un groupe de personnes veut jouer au volley mais une fille refuse à cause du vent fort. Elle préfère aller se baigner.",
    "indice": [
      "vent",
      "volley",
      "ballon"
    ]
  },
  {
    "id": 133,
    "niveau": "B2",
    "titre": "Visiteur bloqué par une salle fermée",
    "transcription": "Eh, monsieur, vous voyez bien qu'il y a une barrière ? Vous ne pouvez pas aller voir ces tableaux-là. En plus, il y a une alarme qui peut se mettre à sonner. Oui, mais je ne voulais rien voler. Excusez-moi. Habituellement, on peut visiter cette salle. Vous êtes en train de la refaire ? Non, non, mais aujourd'hui, nous ne sommes pas assez nombreux pour ouvrir toutes les salles. Il y a une épidémie de grippe. Ah, très bien, je comprends mieux. Ben, au moins, il n'y aura pas besoin d'y faire le ménage aujourd'hui.",
    "question": "Pourquoi le visiteur ne peut-il pas accéder à cette salle du musée ?",
    "options": {
      "A": "Parce que la salle est en travaux aujourd'hui.",
      "B": "Parce qu'un vol a eu lieu dans cette salle.",
      "C": "Parce que le personnel procède au nettoyage.",
      "D": "Parce qu'il manque du personnel aujourd'hui."
    },
    "reponse": "D",
    "reponseTexte": "Parce qu'il manque du personnel aujourd'hui.",
    "explication": "Un visiteur demande à un employé pourquoi il ne peut pas accéder à une salle du musée. L'employé explique que la salle est fermée car il manque de personnel à cause d'une épidémie de grippe.",
    "indice": [
      "barrière",
      "alarme",
      "personnel",
      "épidémie",
      "grippe"
    ]
  },
  {
    "id": 134,
    "niveau": "B2",
    "titre": "Prix des lycéens autrichiens",
    "transcription": "Quel but poursuivez-vous en organisant le prix des lycéens autrichiens auprès des élèves qui apprennent le français comme langue étrangère ? Bien entendu, nous cherchons d'abord à promouvoir la langue française en Autriche. Mais nous avons surtout l'objectif d'introduire plus fortement la littérature de jeunesse française, que nous considérons comme étant très riche, dans la classe de français, pour prouver que c'est un bon outil d'apprentissage du français. En effet, c'est un excellent moyen de s'entraîner à la lecture suivie, ce qui n'est pas toujours facile dans l'apprentissage du français.",
    "question": "Quelle est l'ambition du prix des lycéens autrichiens ?",
    "options": {
      "A": "Développer le marché du livre de jeunesse en Autriche.",
      "B": "Faire découvrir aux élèves la culture française.",
      "C": "Favoriser la création artistique en classe de langue.",
      "D": "Utiliser la littérature comme un support pédagogique."
    },
    "reponse": "D",
    "reponseTexte": "Utiliser la littérature comme un support pédagogique.",
    "explication": "Une personne explique les objectifs du prix des lycéens autrichiens, qui vise à promouvoir la littérature de jeunesse française parmi les élèves apprenant le français.",
    "indice": [
      "prix des lycéens autrichiens",
      "littérature de jeunesse",
      "outil d'apprentissage",
      "lecture suivie"
    ]
  },
  {
    "id": 135,
    "niveau": "B2",
    "titre": "Innovation chez les jeunes",
    "transcription": "Delphine Manceau, en tant que directrice de l'Institut pour l'innovation et la compétitivité, pensez-vous que tout le monde peut être innovant ? On croit souvent que l'innovation survient par hasard et qu'il s'agit d'un don individuel. Mais être innovant et créatif, ça s'apprend. Alors, comment rend-on un étudiant innovant, par exemple ? Il faut différencier l'innovation individuelle et la capacité à être innovant collectivement. Nous avons donc mis en place des programmes pour apprendre aux jeunes à conduire des projets innovants dans le cadre d'équipes diversifiées.",
    "question": "Comment favorise-t-on l'innovation chez les jeunes dans cet institut ?",
    "options": {
      "A": "En les incitant à travailler de manière collaborative.",
      "B": "En les poussant à prendre des risques importants.",
      "C": "En leur offrant des formations personnalisées.",
      "D": "En leur proposant de participer à des compétitions."
    },
    "reponse": "A",
    "reponseTexte": "En les incitant à travailler de manière collaborative.",
    "explication": "Delphine Manceau, directrice de l'Institut pour l'innovation et la compétitivité, explique comment rendre les étudiants innovants en travaillant en équipe diversifiée.",
    "indice": [
      "innovation",
      "collectivement",
      "programmes",
      "équipes diversifiées"
    ]
  },
  {
    "id": 136,
    "niveau": "B2",
    "titre": "Un poème pour Brassens – version bis",
    "transcription": "Quand j'étais adolescent, j'avais écrit un long poème à Georges Brassens. J'avais fini de le recopier. Enfin, c'était une espèce de chanson que j'avais fini de recopier dans le bistrot en face de l'impasse Florimont, où il habitait. Et j'étais allé lui porter. Sauf qu'il n'habitait plus là depuis des années et que j'étais assez rassuré qu'il n'habitait plus là parce que je ne sais pas ce que je lui aurais raconté. Mais je l'avais écrite. Et je me dis que si un jour j'avais reçu un petit mot de Brassens me disant « J'ai lu vos chansons et j'aimerais bien vous en parler », ça m'aurait intéressé.",
    "question": "Qu'aurait souhaité cette personne en allant chez Georges Brassens ?",
    "options": {
      "A": "Lui apporter un livre.",
      "B": "Lui demander conseil.",
      "C": "Lui présenter son travail.",
      "D": "Lui proposer une interview."
    },
    "reponse": "C",
    "reponseTexte": "Lui présenter son travail.",
    "explication": "Un individu raconte qu'il a écrit une chanson pour Georges Brassens et l'a apportée à son ancienne adresse.",
    "indice": [
      "poème",
      "chanson",
      "recopier",
      "Georges Brassens"
    ]
  },
  {
    "id": 137,
    "niveau": "B2",
    "titre": "Parents et temps avec enfants",
    "transcription": "Ce que vous dites, c'est que le temps, le temps passé par un parent avec son enfant, Ça fait partie aujourd'hui des besoins psychiques essentiels à la construction de l'enfant ? Le temps, oui. Vraiment. Parce qu'il faut dire tout de suite que le temps passé par les enfants devant la télévision, notamment, plusieurs heures par jour, on sait que plus tard, ce sont des défauts de concentration, ce sont des problématiques à l'école. Donc, savoir avoir ce temps-là, c'est d'abord regarder son enfant comme un être à part, comme un être en développement, et c'est donc regarder le type de tempérament qu'il a, le type de caractère.",
    "question": "Pourquoi les parents doivent-ils passer du temps avec leurs enfants ?",
    "options": {
      "A": "Pour limiter le temps passé devant la télévision.",
      "B": "Pour améliorer les performances scolaires de l'enfant.",
      "C": "Pour respecter les obligations légales de parentalité.",
      "D": "Pour façonner la personnalité de l'enfant."
    },
    "reponse": "D",
    "reponseTexte": "Pour façonner la personnalité de l'enfant.",
    "explication": "Une personne parle de l'importance du temps passé par les parents avec leurs enfants et des conséquences d'un excès de télévision.",
    "indice": [
      "temps",
      "parent",
      "enfant",
      "construction",
      "tempérament"
    ]
  },
  {
    "id": 138,
    "niveau": "B2",
    "titre": "Choisir des films pour un festival",
    "transcription": "Stelle Nolo, directrice d'une salle de cinéma, nous parle du festival Le Printemps du Cinéma. Je décide moi-même des films que nous présentons. Le but est de proposer le maximum de diversité. Qui n'ont pas assez été exploités.",
    "question": "Sur quoi porte l'intervention de Stelle Nolo ?",
    "options": {
      "A": "L'organisation d'ateliers vidéo.",
      "B": "La présence de réalisateurs étrangers.",
      "C": "La projection de documentaires.",
      "D": "La variété de la programmation."
    },
    "reponse": "D",
    "reponseTexte": "La variété de la programmation.",
    "explication": "Stelle Nolo, directrice d'une salle de cinéma, explique comment elle choisit les films pour le festival Le Printemps du Cinéma. Elle veut offrir une grande diversité de films.",
    "indice": [
      "festival",
      "diversité",
      "films",
      "programmation"
    ]
  },
  {
    "id": 139,
    "niveau": "B2",
    "titre": "Étudiants en architecture rêvent la tour Eiffel",
    "transcription": "La vieille dame de fer dans tous ses états, ou comment les jeunes sont complexes, se sont mesurés à cette forme unique qu'est la tour Eiffel. Pour ce concours organisé par la Fondation Eiffel, adressé aux élèves des écoles d'architecture, la consigne était de rêver. Concevoir un édifice de très grande hauteur sur le champ de Mars à Paris, à distance, à coller ou à la place de la tour Eiffel. Trois étudiants suppriment donc carrément la tour. À la place, ils y construisent un aéroport vertical ou creusent un puits de lumière avec de vastes plateaux. D'autres choisissent de la rendre habitable en comblant ses vides par des baies de couleurs ou la doter d'un jardin suspendu.",
    "question": "De quoi traite ce reportage ?",
    "options": {
      "A": "D'un appel à projets imaginaires.",
      "B": "D'un examen de fin d'études.",
      "C": "D'un nouveau plan d'urbanisme.",
      "D": "D'une rénovation d'un monument."
    },
    "reponse": "A",
    "reponseTexte": "D'un appel à projets imaginaires.",
    "explication": "Identifier le sujet du reportage parmi les options proposées. Le piège est de ne pas se laisser distraire par les détails des projets présentés.",
    "indice": [
      "*(aucun)*"
    ]
  },
  {
    "id": 140,
    "niveau": "B2",
    "titre": "Professeurs de langues à l'INALCO",
    "transcription": "L'Institut des Langues et Civilisations Orientales, c'est-à-dire l'INALCO, a été fondé par Colbert au XVIIe siècle à Istanbul. Aujourd'hui encore, même si l'école est à Paris, les professeurs sont soit des autochtones, originaires du pays dont ils enseignent la langue, soit des Français qui ont vécu dans ce pays. Les professeurs étrangers ont souvent acquis la nationalité française par la suite. Ils sont tous des spécialistes de leur domaine, linguistique ou culturel, et un certain nombre d'entre eux ont fait leurs études à l'Institut.",
    "question": "Qu'est-ce qui caractérise le recrutement des professeurs de l'INALCO ?",
    "options": {
      "A": "Avoir effectué de nombreux séjours à l'étranger.",
      "B": "Avoir été eux-mêmes formés à l'école Colbert.",
      "C": "Avoir obtenu la nationalité française.",
      "D": "Avoir vécu dans le pays de la langue qu'ils enseignent."
    },
    "reponse": "D",
    "reponseTexte": "Avoir vécu dans le pays de la langue qu'ils enseignent.",
    "explication": "Un texte décrit les professeurs de langues à l'INALCO, leur origine et leur parcours. La question porte sur les critères de recrutement de ces professeurs.",
    "indice": [
      "INALCO",
      "professeurs",
      "pays",
      "langue",
      "enseignant"
    ]
  },
  {
    "id": 141,
    "niveau": "B2",
    "titre": "Week-end à la campagne",
    "transcription": "Dis, Jean-Paul, t'as pas l'air d'avoir très envie d'aller à la campagne ce week-end. En tout cas, moi j'ai peur d'avoir froid. Le chauffage marche si mal. Moi, c'est pas ça. Ce qui m'ennuie, c'est de faire tous ces kilomètres pour rester à peine deux jours. Oh, la route, c'est pas grave. Mais la météo n'est pas très bonne. Ça ne me dit rien d'être bloquée tout le week-end dans la maison.",
    "question": "Pourquoi Jean-Paul n'a-t-il pas envie d'aller à la campagne ?",
    "options": {
      "A": "Il ne fera pas beau durant le week-end.",
      "B": "La maison est mal chauffée.",
      "C": "Le voyage est trop long.",
      "D": "Il n'aime pas rester enfermé."
    },
    "reponse": "C",
    "reponseTexte": "Le voyage est trop long.",
    "explication": "Jean-Paul et une personne discutent de leur week-end à la campagne. Jean-Paul explique pourquoi il n'a pas envie d'y aller.",
    "indice": [
      "campagne",
      "kilomètres",
      "deux jours",
      "météo"
    ]
  },
  {
    "id": 142,
    "niveau": "B2",
    "titre": "Choisir des lunettes de soleil",
    "transcription": "Oh Et celle-là, qu'est-ce que tu en penses ? Oui, pas mal. J'aime bien la forme des branches. Tourne-toi un peu pour voir. Ce sera parfait pour la montagne. Bon, j'essaie encore ces trois paires et je me décide. Moi, je préfère celle-là. Elles vont très bien avec la couleur de tes cheveux et elles sont très élégantes. Bon, ben, allez, d'accord, je les prends.",
    "question": "Qu'est-ce que la fille achète ?",
    "options": {
      "A": "Une paire de boucles d'oreille.",
      "B": "Une paire de chaussures.",
      "C": "Une paire de lunettes.",
      "D": "Une paire de skis."
    },
    "reponse": "C",
    "reponseTexte": "Une paire de lunettes.",
    "explication": "Une personne essaie plusieurs paires de lunettes de soleil et demande l'avis d'une autre personne. Ils discutent des différentes options et finalement, elle choisit une paire.",
    "indice": [
      "lunettes",
      "montagne",
      "élégantes",
      "cheveux"
    ]
  },
  {
    "id": 143,
    "niveau": "B2",
    "titre": "Léonard apprend en observant la nature – version bis",
    "transcription": "Léonard reçoit une éducation relativement libre, comme l'était celle de la plupart des villageois de son âge. On imagine Léonard aujourd'hui comme un puits de science, une sorte de grand sage qui très jeune aurait été formé à la culture humaniste traditionnelle. Évidemment, ce n'est pas le cas. C'est un enfant qui s'est mis, en quelque sorte, à l'école de la nature, qui scrute, qui observe. Il est passionné par tout ce qu'il voit autour. Il s'aperçoit vite que le sens de l'observation est peut-être le meilleur des enseignements. Léonard a de particulier...",
    "question": "",
    "options": {
      "A": "Sa mémoire exceptionnelle.",
      "B": "Ses aptitudes au jardinage.",
      "C": "Ses origines sociales modestes.",
      "D": "Son parcours d'apprentissage."
    },
    "reponse": "D",
    "reponseTexte": "Son parcours d'apprentissage.",
    "explication": "Léonard est décrit comme un enfant qui apprend en observant la nature et en s'éduquant par lui-même. Le texte explique son approche de l'apprentissage et son environnement.",
    "indice": [
      "Éducation",
      "nature",
      "observation",
      "enseignements"
    ]
  },
  {
    "id": 144,
    "niveau": "B2",
    "titre": "Colloque sur le travail moderne",
    "transcription": "Bienvenue à tous. Ce colloque est intitulé « Travail et modernité » car nous devons changer notre manière d'appréhender le travail au sein d'une société en pleine mutation. Nous entrons en effet dans l'ère de la communication interplanétaire. Nul ne peut se contenter d'évoluer à l'intérieur des frontières de son pays. Il faut étudier, voyager, communiquer et surtout savoir changer de métier, de pays avec souplesse.",
    "question": "Quelle est la qualité dont le travailleur moderne doit faire preuve ?",
    "options": {
      "A": "La créativité.",
      "B": "La disponibilité.",
      "C": "La mobilité.",
      "D": "La persuasion."
    },
    "reponse": "C",
    "reponseTexte": "La mobilité.",
    "explication": "Un orateur introduit un colloque sur le travail moderne en soulignant l'importance de la communication interplanétaire et la nécessité de s'adapter aux changements.",
    "indice": [
      "travail",
      "modernité",
      "communication",
      "métier",
      "pays"
    ]
  },
  {
    "id": 145,
    "niveau": "B2",
    "titre": "Le Québec et la révolution numérique",
    "transcription": "Nous vivons aujourd'hui au rythme d'une quatrième révolution industrielle, celle du numérique. La mécanisation, l'électrification et l'industrialisation ont transformé le monde au cours des derniers siècles. Les technologies transforment actuellement l'ensemble des sociétés. Nous devons projeter le Québec en avant. Donnons-nous un système éducatif suffisamment agile pour assurer les bases de notre avenir collectif. Soutenons les apprenants pour qu'ils développent les compétences qui leur seront nécessaires pour être des citoyens responsables dans le monde de demain. Favorisons leur autonomie. Adaptons l'intégration du numérique à leur façon de penser, de réfléchir et de résoudre des problèmes de manière créative et innovante.",
    "question": "D'après cet intervenant, que doit faire le Québec ?",
    "options": {
      "A": "Développer sa coopération industrielle.",
      "B": "Favoriser l'embauche de profils créatifs.",
      "C": "Financer des projets de recherche innovants.",
      "D": "Renforcer la formation numérique des jeunes."
    },
    "reponse": "D",
    "reponseTexte": "Renforcer la formation numérique des jeunes.",
    "explication": "Un intervenant parle de l'importance de l'éducation et de l'intégration du numérique pour préparer les jeunes Québécois à l'avenir.",
    "indice": [
      "*(aucun)*"
    ]
  },
  {
    "id": 146,
    "niveau": "B2",
    "titre": "Joanne rit du sport de Denis",
    "transcription": "Allô Denis ? C'est Joanne, merci pour ta carte. Alors, tes vacances en civilisation ? T'es parti tout seul faire du golf, c'est ça ? Oui, j'avais envie de connaître le golf. C'était super. Fantastique, mais super. Ah bon ? Mais t'es pas vraiment trop simple, le golf. Quand il est à 4, j'en reviens pas. Non, mais j'ai bien l'intention de recommencer. Pas toute l'année, hein. Dans le stage d'été, c'est suffisant. Eh ben, et le rythme ? Tu vas pas être bon très très vite, hein ? Qu'est-ce que tu crois ? Je suis pas si mauvais.",
    "question": "Qu'est-ce qui fait rire la femme ?",
    "options": {
      "A": "Que l'homme soit parti seul en vacances.",
      "B": "Que l'homme ait progressé au golf.",
      "C": "Que l'homme lui ait envoyé une carte.",
      "D": "Que l'homme se soit mis à faire du sport."
    },
    "reponse": "D",
    "reponseTexte": "Que l'homme se soit mis à faire du sport.",
    "explication": "Joanne appelle Denis pour parler de ses vacances. Denis a fait du golf pendant ses vacances et Joanne trouve ça drôle.",
    "indice": [
      "vacances",
      "golf",
      "sport",
      "stage d'été"
    ]
  },
  {
    "id": 147,
    "niveau": "B2",
    "titre": "Autoroute dans une réserve naturelle",
    "transcription": "Tu as entendu les informations ? Il paraît que le maire veut faire construire une autoroute qui passe par la réserve naturelle de la région. Ah bon ? Et il va vraiment le faire ? Pour l'instant, il est obligé d'affronter les écologistes et même le ministère des Transports.",
    "question": "Que se passe-t-il dans la région ?",
    "options": {
      "A": "Des habitants ont voté pour un maire écologique.",
      "B": "Les écologistes refusent la construction d'une autoroute.",
      "C": "Le ministère des Transports veut faire construire une autoroute.",
      "D": "Un maire propose d'ouvrir une réserve naturelle."
    },
    "reponse": "B",
    "reponseTexte": "Les écologistes refusent la construction d'une autoroute.",
    "explication": "Deux personnes discutent d'une nouvelle autoroute que le maire veut construire dans une réserve naturelle. Les écologistes et le ministère des Transports s'opposent à ce projet.",
    "indice": [
      "autoroute",
      "réserve naturelle",
      "écologistes",
      "ministère des Transports"
    ]
  },
  {
    "id": 148,
    "niveau": "B2",
    "titre": "Fiches de paie pour demain",
    "transcription": "Allô, bonjour. Oui, bonjour, monsieur le professeur. Je veux juste vous rappeler que les fiches de paie des professeurs doivent être faites pour demain. Oui, j'ai contrôlé les heures de tous les professeurs. J'attends deux confirmations ce matin et je vais pouvoir finir cet après-midi. Bon, très bien. Je compte sur vous pour respecter les délais imposés par le service comptabilité, alors. Oui, vous pouvez compter sur moi.",
    "question": "Que demande le directeur ?",
    "options": {
      "A": "De fixer les horaires de travail du comptable.",
      "B": "De prendre rendez-vous avec le comptable.",
      "C": "De préparer des documents pour le comptable.",
      "D": "De remplir la fiche de salaire du comptable."
    },
    "reponse": "C",
    "reponseTexte": "De préparer des documents pour le comptable.",
    "explication": "Un directeur rappelle à un employé que les fiches de paie des professeurs doivent être prêtes pour le lendemain. L'employé confirme qu'il attend deux confirmations pour finir le travail dans l'après-midi.",
    "indice": [
      "fiches de paie",
      "comptabilité",
      "délais"
    ]
  },
  {
    "id": 149,
    "niveau": "B2",
    "titre": "Lumière artificielle et ciel étoilé",
    "transcription": "Pourquoi ne pas réclamer le droit au noir qui permettrait de contempler à nouveau les étoiles ? Une manière de transporter les villes à la campagne, puisqu'à chaque fois que je suis à la campagne, je suis frappé par la richesse du ciel et après tout, voir Jupiter, ça vaut bien des paysages. Ce n'est plus à démontrer, la lumière perpétuelle est une agression, c'est une manière de dérégler notre organisme, dit-on, qui a besoin de ne rien voir à un moment pour pouvoir voir à d'autres moments. Voilà pourquoi on pourrait songer à demander une extinction des feux pour toutes les raisons. D'ailleurs, on imagine les économies d'énergie au premier chef, mais pas uniquement demander d'éteindre les lumières uniquement parce que c'est beau. Nos plus claires idées sont filles d'un travail obscur, disait Paul Valéry. Alors, éteignez les lumières, il ne fait pas encore jour.",
    "question": "Que dit le journaliste sur la lumière artificielle ?",
    "options": {
      "A": "Elle assure la sécurité en ville.",
      "B": "Elle empêche d'admirer le ciel.",
      "C": "Elle est indispensable à l'organisme.",
      "D": "Elle est insuffisante à la campagne."
    },
    "reponse": "B",
    "reponseTexte": "Elle empêche d'admirer le ciel.",
    "explication": "Un journaliste parle des effets de la lumière artificielle sur la possibilité de voir les étoiles et sur l'organisme humain.",
    "indice": [
      "*(aucun)*"
    ]
  },
  {
    "id": 150,
    "niveau": "B2",
    "titre": "Immigration et entreprises québécoises",
    "transcription": "Les entreprises et les écoles ont fait beaucoup pour l'intégration des immigrés, mais elles doivent faire davantage. Je pense qu'on peut toujours faire mieux. On a encore besoin d'être sensibilisés, d'être ouverts. Donc je pense que c'est un défi de tous les jours. Si on ne le fait pas, on y perd parce qu'il y a tellement de gains à l'immigration. On n'a qu'à parler de sourire vers d'autres cultures, on y gagne. On apprend sur la nôtre, on apprend sur les autres. Et pour le milieu du travail également, ainsi la richesse, la diversité que d'autres cultures peuvent nous apporter. Quand on parle d'un contexte de globalisation, on travaille à l'échelle de l'emploi. Il faut avoir un regard beaucoup plus large. Question m'appuie.",
    "question": "Selon la personne interrogée, pour quelles raisons les entreprises québécoises doivent-elles continuer leurs efforts pour l'intégration des immigrés ?",
    "options": {
      "A": "Parce qu'elles ont beaucoup à apprendre d'eux.",
      "B": "Parce qu'elles s'implanteront mieux ensuite à l'étranger.",
      "C": "Parce qu'elles sont en manque de main-d'œuvre.",
      "D": "Parce qu'elles y sont contraintes par la mondialisation."
    },
    "reponse": "A",
    "reponseTexte": "Parce qu'elles ont beaucoup à apprendre d'eux.",
    "explication": "Une personne parle de l'intégration des immigrés dans les entreprises québécoises et des bénéfices de cette diversité culturelle.",
    "indice": [
      "*(aucun)*"
    ]
  },
  {
    "id": 151,
    "niveau": "B2",
    "titre": "Autoroute dans une réserve naturelle – version bis",
    "transcription": "Tu as entendu les informations ? Il paraît que le maire veut faire construire une autoroute qui passe par la réserve naturelle de la région. Ah bon ? Et il va vraiment le faire ? Pour l'instant, il est obligé d'affronter les écologistes et même l'Union européenne.",
    "question": "Que se passe-t-il dans la région ?",
    "options": {
      "A": "Des habitants ont voté pour un maire écologiste.",
      "B": "Les écologistes refusent la construction d'une autoroute.",
      "C": "L'Union européenne veut faire construire une autoroute.",
      "D": "Un maire propose d'ouvrir une réserve naturelle."
    },
    "reponse": "B",
    "reponseTexte": "Les écologistes refusent la construction d'une autoroute.",
    "explication": "Deux personnes discutent d'un projet de construction d'autoroute dans une réserve naturelle. Le maire veut construire cette autoroute, mais il rencontre des oppositions.",
    "indice": [
      "autoroute",
      "réserve naturelle",
      "écologistes",
      "Union européenne"
    ]
  },
  {
    "id": 152,
    "niveau": "B2",
    "titre": "Site de livraison de fruits et légumes",
    "transcription": "Manger 5 fruits et légumes par jour, c'est bon pour la santé, on le sait, mais on ne le fait pas. Avouez, vous avez essayé, mais vous n'y arrivez pas. MiamMiam.fr va vous y aider. Ce site propose des paniers avec des produits frais et de saison. Le tout livré gratuitement partout dans le pays, chez vous ou sur votre lieu de travail.",
    "question": "Quel est le but de miammiam.fr ?",
    "options": {
      "A": "Conseiller gratuitement des régimes minceur.",
      "B": "Faciliter la consommation de produits sains.",
      "C": "Livrer des spécialités régionales à domicile.",
      "D": "Proposer une émission de cuisine sur Internet."
    },
    "reponse": "B",
    "reponseTexte": "Faciliter la consommation de produits sains.",
    "explication": "Un site propose des paniers de fruits et légumes frais et de saison livrés gratuitement à domicile ou au travail. La question demande quel est le but de ce site.",
    "indice": [
      "MiamMiam.fr",
      "paniers",
      "produits frais",
      "livré gratuitement"
    ]
  },
  {
    "id": 153,
    "niveau": "B2",
    "titre": "Hôpital pour adolescents",
    "transcription": "Je crois que l'enjeu de cette maison, ça déborde, je crois, vraiment le côté de médecine d'adolescence. C'est qu'est-ce que l'hôpital ? C'est peut-être quelque chose où on exige du théâtre, de la musique, des soignants confondus, différents, des parents présents, un espace de circulation ouvert, vitré, transparent. C'est avec de jolies couettes, de jolis meubles, de jolis espaces et un grand respect du sujet plutôt que de sa maladie. Comme si on attaquait la maladie, on respecte le patient.",
    "question": "Selon cette personne, qu'est-ce qui caractérise une structure médicale de bonne qualité ?",
    "options": {
      "A": "La qualité de l'accueil des visiteurs et des familles.",
      "B": "Le souci du bien-être des personnes hospitalisées.",
      "C": "La capacité d'adaptation du personnel médical.",
      "D": "La prise en charge personnalisée en fonction de l'âge."
    },
    "reponse": "B",
    "reponseTexte": "Le souci du bien-être des personnes hospitalisées.",
    "explication": "Une personne décrit ses idées pour un hôpital adapté aux adolescents, en insistant sur l'importance de l'environnement et du respect du patient.",
    "indice": [
      "*(aucun)*"
    ]
  },
  {
    "id": 154,
    "niveau": "B2",
    "titre": "Trouver un job à Londres",
    "transcription": "On dit souvent qu'à Londres, on peut changer de job quasiment comme de chemise. Est-ce que c'est toujours vrai ? Il est toujours facile de passer d'un job à l'autre. Le diplôme a beaucoup moins d'importance. On va surtout regarder les postes que vous avez déjà occupés. On va aussi tenir compte de vos motivations. C'est vrai qu'on vous donne aussi la possibilité d'augmenter assez, enfin, comment dire, de franchir les étapes beaucoup plus rapidement. On retrouve assez régulièrement des personnes vers 22, 23 ans et déjà manager, tandis qu'en France, c'est quand même un petit peu plus compliqué.",
    "question": "Que dit cette intervenante au sujet du travail à Londres ?",
    "options": {
      "A": "Le recrutement se fonde sur l'expérience.",
      "B": "Les salaires à l'embauche sont très élevés.",
      "C": "L'évolution professionnelle est très lente.",
      "D": "L'obtention d'un premier emploi est aisée."
    },
    "reponse": "A",
    "reponseTexte": "Le recrutement se fonde sur l'expérience.",
    "explication": "Une intervenante parle des opportunités d'emploi à Londres, en comparant la facilité de changer de job et l'importance de l'expérience professionnelle par rapport à un diplôme.",
    "indice": [
      "*(aucun)*"
    ]
  },
  {
    "id": 155,
    "niveau": "B2",
    "titre": "Stress et motivation pour un examen",
    "transcription": "Il est indispensable pour l'émission de challenge, concours, très bien fait d'azie, justement le bac, la société qui a son temps alors à tout prix pour un. C'est une organique, c'est le stress à engendre, la contre-productivité, la frustration, et un type d'autre, le stress et l'urgence de motivation, et c'est la condition pour devenir meilleur. Le bac, on est en nouveau niveau d'entretien, il y a plein de situations anxieuses comme ça, et si le stress est vécu comme un défi à la responsabilité, il devient un puissant stimulus. Les sportifs de niveau, on le sait, parce qu'ils réussissent leur performance grâce à ce stress qu'ils arrivent à exploiter de façon positive. Mais au stress, ça peut devenir parfois une hausse moleste, manque de motivation, un temps d'intérêt pour le...",
    "question": "Pour le commun des mortels, le stress peut-il être bénéfique ?",
    "options": {
      "A": "Il améliore significativement la condition physique.",
      "B": "Il donne de l'énergie pour faire face aux épreuves.",
      "C": "Il fait naître un fort sentiment de confiance en soi.",
      "D": "Il renforce les compétences professionnelles."
    },
    "reponse": "B",
    "reponseTexte": "Il donne de l'énergie pour faire face aux épreuves.",
    "explication": "Un texte discute du stress et de la motivation dans le contexte des examens, en particulier le baccalauréat, et de la façon dont le stress peut être exploité positivement ou négativement.",
    "indice": [
      "*(aucun)*"
    ]
  },
  {
    "id": 156,
    "niveau": "B2",
    "titre": "Chefs qui introduisent des insectes",
    "transcription": "C'est-à-dire que, en biol, justement, micro-nutris, vous élevez deux types d'insectes. Qu'est-ce que vous pensez de ces chefs qui, justement, se mettent à introduire ces insectes dans leur vie ? Alors, déjà, je pense que c'est très intéressant que les chefs commencent à réfléchir comment pouvoir incorporer des insectes dans l'alimentation des Européens. Mais, justement, la production, c'est que les insectes comestibles ont plein de sens pour entrer dans l'alimentation des Européens. Mais on ne va pas pouvoir les consommer comme on les consomme par ailleurs en Asie, en Afrique, en Amérique du Sud. Donc il faut vraiment des créatifs, des chefs qui vont être capables d'adapter les insectes à la cuisine européenne.",
    "question": "Que recommande Cédric Orlan pour développer la consommation d'insectes en Europe ?",
    "options": {
      "A": "Des déclarations rassurantes des autorités sanitaires.",
      "B": "Des études de spécialistes sur leur apport nutritionnel.",
      "C": "L'implication des professionnels de la gastronomie.",
      "D": "Une mise en valeur par les producteurs eux-mêmes."
    },
    "reponse": "C",
    "reponseTexte": "L'implication des professionnels de la gastronomie.",
    "explication": "Cédric Orlan discute de l'introduction des insectes dans l'alimentation européenne et de la nécessité d'adapter leur consommation aux habitudes locales.",
    "indice": [
      "*(aucun)*"
    ]
  },
  {
    "id": 157,
    "niveau": "B2",
    "titre": "Instruments de musique recyclés",
    "transcription": "Bruno Blandy a appris la musique en autodidacte en écoutant du jazz, de la musique brésilienne ou les Beatles. Avec sa guitare, il a intégré des groupes de rock, de blues ou de chansons françaises. Composé un album de musique métissée, est parti en tournée, puis est devenu chef d'orchestre. Durant son temps libre, il fabriquait des instruments de musique avec des matériaux de récupération. Vibraphone en piqué de tente, flûte en tuyau d'arrosage. La difficulté, c'est de produire des notes justes. J'utilise des sons qu'on ne trouve pas ailleurs. Ça donne une couleur particulière. Récupère tout en un seul mot et avec un K, c'est le nom du spectacle pour enfants tiré de ce concept. Un concert à retrouver le 20 mai à la Citrouille.",
    "question": "Quelle est l'originalité des instruments de musique du spectacle de Bruno Blandy ?",
    "options": {
      "A": "C'est le jeune public qui les crée.",
      "B": "Ce sont des outils de jardinage transformés.",
      "C": "Ils sont confectionnés sur scène.",
      "D": "Ils sont réalisés avec des objets recyclés."
    },
    "reponse": "D",
    "reponseTexte": "Ils sont réalisés avec des objets recyclés.",
    "explication": "Bruno Blandy parle de son spectacle pour enfants où il utilise des instruments de musique fabriqués avec des matériaux recyclés.",
    "indice": [
      "*(aucun)*"
    ]
  },
  {
    "id": 158,
    "niveau": "B2",
    "titre": "Augmenter ses chances d'emploi à Montréal",
    "transcription": "Montréal est une ville dynamique. Beaucoup de personnes sont attirées par les hautes technologies, le domaine des jeux vidéo, l'aéronautique ou l'industrie textile. Tous ces secteurs recrutent périodiquement. Les jeunes pensent qu'une participation au forum de recrutement, une formation professionnelle et plusieurs stages suffisent à décrocher un contrat. Or, les entreprises cherchent des personnes réellement motivées et passionnées. Un travail de bénévole dans des organisations humanitaires à l'étranger peut faire la différence. Alors il ne faut pas hésiter à mettre ces expériences caritatives sur son CV.",
    "question": "Selon cet intervenant, comment est-il possible d'augmenter ses chances d'obtenir un emploi ?",
    "options": {
      "A": "En collaborant à des activités de bénévolat.",
      "B": "En effectuant des stages durant ses études.",
      "C": "En prenant part à des salons de recrutement.",
      "D": "En suivant plusieurs formations spécifiques."
    },
    "reponse": "A",
    "reponseTexte": "En collaborant à des activités de bénévolat.",
    "explication": "Un intervenant parle des moyens d'augmenter ses chances d'emploi à Montréal lors d'une discussion sur les opportunités dans divers secteurs comme les hautes technologies et l'aéronautique.",
    "indice": [
      "*(aucun)*"
    ]
  },
  {
    "id": 159,
    "niveau": "B2",
    "titre": "Pêcheur par nécessité",
    "transcription": "Je suis en mer depuis les années 80. J'ai commencé le métier marin à 15 ans et demi. Vous avez pris la suite de quelqu'un ? Non, non. J'ai commencé dans les années 81 à la pêche. Et puis, ça a rapporté. Il y avait de l'emploi ici. Là, c'est le hasard. Mais vous êtes d'ici ? Oui, je suis d'ici. Ça aide. Mais bon, je n'étais vraiment pas attiré par la mer. C'est vrai ? Non. Et pourtant, vous avez franchi le pas pour faire pêcheur. Je n'avais pas le choix. Il fallait bien que je gagne ma vie. J'avais arrêté mes études. Ici, à part la pêche, il n'y a pas grand-chose. L'économie, c'est pratiquement que la pêche.",
    "question": "Quelle était la motivation de cet homme pour devenir pêcheur ?",
    "options": {
      "A": "L'envie de changer de profession.",
      "B": "La nécessité de trouver un travail.",
      "C": "La réalisation d'un rêve de jeunesse.",
      "D": "La rencontre avec un passionné."
    },
    "reponse": "B",
    "reponseTexte": "La nécessité de trouver un travail.",
    "explication": "Un homme raconte comment il a commencé la pêche dans les années 80 parce qu'il n'avait pas d'autres options pour gagner sa vie.",
    "indice": [
      "*(aucun)*"
    ]
  },
  {
    "id": 160,
    "niveau": "B2",
    "titre": "Deux amis critiquent un film",
    "transcription": "Ah, c'était bien, hein ? Quel acteur, ce type, il joue comme un dieu, non ? T'exagères un peu, mais oui, c'est surtout le scénario qui était original pour une fois. Oui, oui, ça change un peu. Y'a que la musique et un rien mélo qui m'a ennuyé. C'est vrai, moi aussi. Mais les dialogues, t'as remarqué comme ils sonnaient juste, eux ? Ça faisait l'équilibre. C'est quand même important, la bande sonore dans un film. Oui, t'as raison. Ils auraient pu la soigner davantage.",
    "question": "Qu'est-ce que les deux amis n'ont pas beaucoup apprécié dans le film ?",
    "options": {
      "A": "Le jeu de l'acteur.",
      "B": "Les dialogues.",
      "C": "La musique.",
      "D": "Le scénario."
    },
    "reponse": "C",
    "reponseTexte": "La musique.",
    "explication": "Deux amis discutent d'un film qu'ils viennent de voir et échangent leurs impressions sur différents aspects.",
    "indice": [
      "*(aucun)*"
    ]
  },
  {
    "id": 161,
    "niveau": "B2",
    "titre": "",
    "transcription": "Ces sites internet ont tout changé et pour tout le monde. Oui, grâce à eux, finis les longues minutes d'attente au bout du fil sur un air de musique classique, finis aussi les secrétariats médicaux injoignables. Désormais, il est possible de prendre rendez-vous en un clic à n'importe quelle heure du jour et de la nuit, chez son dentiste, son ostéopathe et même à l'hôpital. La révolution est en marche et tout le monde semble y gagner.",
    "question": "Que permettent les sites internet dont parle le document?",
    "options": {
      "A": "D’établir un diagnostic en ligne.",
      "B": "D’éviter des pertes de temps.",
      "C": "De réduire les frais de santé.",
      "D": "De vérifier la qualité des soins."
    },
    "reponse": "B",
    "reponseTexte": "D’éviter des pertes de temps.",
    "explication": "Un document parle des sites internet qui permettent de prendre des rendez-vous médicaux en ligne. Cela évite d'attendre au téléphone ou de ne pas pouvoir joindre le secrétariat.",
    "indice": []
  },
  {
    "id": 162,
    "niveau": "B2",
    "titre": "",
    "transcription": "Bonjour Gérard, nous écoutons votre témoignage. Eh bien, moi j'ai passé la plus grande partie de ma vie à travailler. J'ai placé ma vie sous le signe de cette phrase d'un philosophe. On existe par ce que l'on fait. Mais aujourd'hui, à 62 ans, je me dis que le bilan n'est peut-être pas aussi positif que ça. J'ai une jolie maison, un train de vie plutôt élevé. Je n'ai jamais été marié, je n'ai jamais eu d'enfant. La vie amoureuse, c'est un parfait désastre. On existe par ce que l'on fait, certes, mais le prix n'est-il pas trop élevé?",
    "question": "",
    "options": {
      "A": "Acquérir son logement",
      "B": "Epargner de l'argent",
      "C": "Exercer un autre métier",
      "D": "Fonder un foyer"
    },
    "reponse": "D",
    "reponseTexte": "Fonder un foyer.",
    "explication": "Gérard, un retraité, parle de sa vie professionnelle et des regrets qu'il a concernant sa vie personnelle. Il explique qu'il a toujours travaillé dur mais qu'il n'a pas eu de vie de famille.",
    "indice": []
  },
  {
    "id": 163,
    "niveau": "B2",
    "titre": "",
    "transcription": "Bonjour, Mme Lévesque. Qu'est-ce qui vous amène aujourd'hui? Eh bien, ma voiture a un problème au démarrage depuis hier. Elle démarre assez bien, dit. Elle s'arrête plus que moi au bout de 10 minutes. Vous pouvez voir ce qui se passe? Maintenant?",
    "question": "",
    "options": {
      "A": "Elle va repartir avec sa voiture.",
      "B": "Elle va revenir dans dix minutes.",
      "C": "Elle va revenir le lendemain.",
      "D": "Elle va repartir sans sa voiture."
    },
    "reponse": "D",
    "reponseTexte": "Elle va repartir sans sa voiture.",
    "explication": "Une cliente explique à un garagiste que sa voiture a des problèmes de démarrage et qu'elle en a besoin rapidement. Le garagiste lui propose de la garder toute l'après-midi pour la réparer.",
    "indice": []
  },
  {
    "id": 164,
    "niveau": "B2",
    "titre": "",
    "transcription": "D'un côté, certaines personnes âgées ont de la place chez elles et besoin d'aide dans leur quotidien. D'un autre côté, certains jeunes ont du temps libre et cherchent à se loger. Alors, on en reste là ou on trouve une solution? L'association de l'or, AREN, favorise la cohabitation entre personnes âgées et jeunes défavorisées. Si vous voulez soutenir ce type de solution, rendez-vous sur fondationdefrance.org.",
    "question": "Que propose l'association présentée?",
    "options": {
      "A": "Elle construit des maisons pour les personnes âgées.",
      "B": "Elle organise des évènements rassemblant les générations.",
      "C": "Elle permet à des jeunes d'habiter chez des personnes âgées.",
      "D": "Elle valorise les professions d'assistance aux personnes âgées."
    },
    "reponse": "C",
    "reponseTexte": "Elle permet à des jeunes d'habiter chez des personnes âgées.",
    "explication": "Une association aide les jeunes à se loger en vivant chez des personnes âgées qui ont besoin d'aide au quotidien.",
    "indice": []
  },
  {
    "id": 165,
    "niveau": "B2",
    "titre": "",
    "transcription": "Parlons maintenant de l'enseignement à distance. Marielle Barraud, vous nous présentez un logiciel qui fait des fiches de révision à votre place, c'est ça? Finalement, vous voulez inciter nos auditeurs étudiants à se tourner les pouces. Ce n'est pas exactement ça. On vous propose en fait de travailler plus efficacement. C'est un logiciel qui s'adapte à toutes les matières et qui vous fait réviser. Le principe, c'est que vous numérisez en un temps record n'importe quel cours. Vous faites vous-même votre fiche de révision que vous saisissez sur votre clavier et le logiciel vous interroge de la façon la plus adéquate pour vous faire apprendre. Il pose des questions en rafale et s'adapte à vos difficultés en mettant l'accent là où vous avez des points faibles.",
    "question": "De quoi est-il question dans cette émission?",
    "options": {
      "A": "D'un outil qui facilite l'apprentissage, quel que soit la discipline étudiée.",
      "B": "De la bonne méthode de révision d'un cours quand on est pris par le temps.",
      "C": "De la difficulté à rédiger des cours motivants pour les jeunes étudiants.",
      "D": "Des limites de l'enseignement à distance pour certaines disciplines."
    },
    "reponse": "A",
    "reponseTexte": "D'un outil qui facilite l'apprentissage, quel que soit la discipline étudiée.",
    "explication": "Marielle Barraud présente un logiciel de révision qui s'adapte aux besoins des étudiants. Elle explique son fonctionnement et ses avantages lors d'une émission sur l'enseignement à distance.",
    "indice": []
  },
  {
    "id": 166,
    "niveau": "B2",
    "titre": "",
    "transcription": "L'affaire est révélée par le Wall Street Journal et fait beaucoup de bruit dans la presse anglo-saxonne. Désormais, chez Facebook, on ne peut proposer à un ou une collègue de sortir boire un verre ou de dîner. Vous savez, les Américains parlent de date. Qu'une seule fois, s'il ou elle refuse, alors on ne peut pas l'inviter une seconde fois. Et ça figure désormais dans le code de conduite de l'entreprise. Aller plus loin peut s'exposer à des sanctions disciplinaires. La direction de Facebook est entrée dans les détails. Un nom n'a pas à être totalement explicite. Si vous entendez répondre « je suis occupé ce soir » ou « je ne suis pas disponible », eh bien, cela suffit. Vous n'aurez pas le droit de réitérer votre invitation. Passez cette limite. On pourrait entrer dans un possible harcèlement.",
    "question": "Pourquoi l'entreprise Facebook a-t-elle modifié son code de conduite?",
    "options": {
      "A": "Pour améliorer la cohésion des équipes",
      "B": "Pour empêcher la diffusion de rumeurs",
      "C": "Pour éviter les sollicitations abusives",
      "D": "Pour limiter les distractions au travail"
    },
    "reponse": "C",
    "reponseTexte": "Pour éviter les sollicitations abusives.",
    "explication": "Facebook modifie son code de conduite pour limiter les invitations répétées entre collègues. La direction explique les nouvelles règles et les conséquences possibles.",
    "indice": []
  },
  {
    "id": 167,
    "niveau": "B2",
    "titre": "",
    "transcription": "Vous savez sans doute ce que signifie le mot poète. Le mot poète est rentré en décalage dans sa famille et il a désigné une sorte de rêveur qui parle d'une certaine manière avec le cœur du temps, du machinisme, etc. Non, mais pas du tout. Vous êtes un peu intéressé. Vous êtes un peu clair. C'est le fabricateur. C'est le fabricateur de l'âme. Et lorsque je dis fabricateur de l'âme, je prends un exemple que j'ai pris tout à l'heure de Sandal, qui a créé beaucoup de visuels, par exemple, d'autres écrivains qui ont créé d'autres.",
    "question": "Selon un intervenant, qu'est-ce qu'un poète?",
    "options": {
      "A": "Quelqu’un qui invente de nouveaux termes.",
      "B": "Quelqu’un qui utilise un langage complexe.",
      "C": "Quelqu’un qui joue avec les sonorités.",
      "D": "Quelqu’un qui idéalise le monde."
    },
    "reponse": "A",
    "reponseTexte": "Quelqu’un qui invente de nouveaux termes.",
    "explication": "Un intervenant explique ce qu'est un poète et donne des exemples d'écrivains qui ont créé des œuvres visuelles ou littéraires.",
    "indice": []
  },
  {
    "id": 168,
    "niveau": "B2",
    "titre": "",
    "transcription": "Claudine, je vous dis un grand bonjour. Bonjour Nicolas. Vous avez beaucoup, beaucoup d'activités, beaucoup de passions artistiques, vous faites du soutien scolaire, vous êtes écrivain public. Oui, oui, écoutez, j'essaie d'occuper mes journées par des activités qui me plaisent, étant donné que je suis à la retraite maintenant et que, voilà, j'adore l'art. Et puis j'aime bien les enfants, j'aime bien la nature, la lecture, tout ce que je peux faire maintenant que j'ai du temps.",
    "question": "Pourquoi Claudine a-t-elle autant d'activités?",
    "options": {
      "A": "Elle a arrêté d'exercer sa profession.",
      "B": "Elle a décidé d'enrichir son curriculum vitae.",
      "C": "Elle a obtenu un congé de longue durée.",
      "D": "Elle a réduit son nombre d'heures de travail."
    },
    "reponse": "A",
    "reponseTexte": "Elle a arrêté d'exercer sa profession.",
    "explication": "Claudine parle à Nicolas de ses nombreuses activités artistiques et de son amour pour les enfants, la nature et la lecture depuis qu'elle est à la retraite.",
    "indice": []
  },
  {
    "id": 169,
    "niveau": "B2",
    "titre": "",
    "transcription": "Alors Patrick, ce stage d'informatique à la Tulipe ? Oh, ne m'en parle pas. Horrible. Je suis ravi d'être au boulot. D'abord, il a plu toute la semaine, avec une tempête, t'aurais vu ça. On pensait pouvoir faire des balades en fin de journée. Il n'y a que moi qui voulais encore marcher malgré la pluie. Les autres se retrouvaient au bord pour jouer aux cartes ou refaire le monde. D'autres ont passé leur temps devant la télé. Eh bien, bravo! Pour prendre le bon air, c'est réussi! Et je ne te décris pas le trou que c'était. Rien à voir à des kilomètres à la ronde.",
    "question": "Qu'est-ce que Patrick était le seul à vouloir faire?",
    "options": {
      "A": "Jouer aux cartes.",
      "B": "Aller se promener.",
      "C": "Regarder la télévision.",
      "D": "Visiter la région."
    },
    "reponse": "B",
    "reponseTexte": "Aller se promener.",
    "explication": "Un stagiaire raconte son expérience en stage informatique où il a plu toute la semaine, décrivant les activités des autres stagiaires et ses propres préférences.",
    "indice": []
  },
  {
    "id": 170,
    "niveau": "B2",
    "titre": "",
    "transcription": "Chers auditeurs, nous allons aujourd'hui vous présenter Chantal Harvey, une franco-québécoise qui travaille au centre de service de Shawinigan et qui, tenez-vous bien, conduit un chasse-neige. Alors, Chantal, comment on se sent aux commandes de cette grosse machine? Je me sens parfaitement dans mon élément. Et votre chef, qu'en pense-t-il? Vous êtes satisfait d'avoir une femme dans votre équipe? J'en suis ravi. Elle a assimilé rapidement les manœuvres d'exécution et elle intervient efficacement aux endroits stratégiques. Même si elle s'y connaît peu en déneigement, elle a su tirer son épingle du jeu. C'est une personne courageuse. Et regardez comme elle est à l'aise aux manettes de cet engin. On jurerait qu'elle a fait ça toute sa vie.",
    "question": "Pourquoi son responsable est-il satisfait de Chantal?",
    "options": {
      "A": "Elle a beaucoup d'expérience.",
      "B": "Elle a vite appris son métier.",
      "C": "Elle aime prendre des risques.",
      "D": "Elle sait diriger ses collègues."
    },
    "reponse": "B",
    "reponseTexte": "Elle a vite appris son métier.",
    "explication": "Chantal, une conductrice de chasse-neige, parle de son travail avec un journaliste. Son chef explique pourquoi il est content de l'avoir dans son équipe.",
    "indice": []
  },
  {
    "id": 171,
    "niveau": "B2",
    "titre": "",
    "transcription": "Près de la moitié des meilleurs longs-métrages canadiens produits cette année proviennent du Québec. La liste a été établie par dix experts nationaux, parmi lesquels on peut citer la productrice Nicole Robert, seule personne représentant le Québec. Ce choix permet de mettre en vedette un groupe de nouveaux jeunes réalisateurs passionnants. Ils ont fait un travail audacieux. Des projections auront lieu dans de nombreuses salles à travers tout le pays, du 14 au 21 janvier, en présence de certains d'entre eux.",
    "question": "De quoi parle cette personne?",
    "options": {
      "A": "D'une collection de haute couture.",
      "B": "D'une exposition de peinture.",
      "C": "D'une sélection de films.",
      "D": "D'une tournée de chanteurs."
    },
    "reponse": "C",
    "reponseTexte": "D'une sélection de films.",
    "explication": "Un expert parle des films canadiens produits cette année, en mettant l'accent sur ceux provenant du Québec.",
    "indice": []
  },
  {
    "id": 172,
    "niveau": "B2",
    "titre": "",
    "transcription": "Apprendre à gérer son argent n'est pas une priorité éducative, alors que l'argent nous accompagne toute notre vie. Construire un budget, ça s'apprend, mais trop souvent, le sujet est considéré tabou par les adultes, donc pas question d'en parler avec les enfants. Dans la sphère de l'école, aucune séance de travail n'est dédiée à cette question. Pourtant, chacun est concerné dans sa vie professionnelle et personnelle par les principales notions que sont les coûts, les crédits, les prêts, les taux d'intérêt, l'endettement, l'économie à l'échelle de l'individu. Voilà un domaine qui touche chaque Français sans que jamais celui-ci y soit vraiment initié.",
    "question": "Que dénonce cette journaliste?",
    "options": {
      "A": "L’absence de formation sur l’élaboration d’un budget.",
      "B": "Le désintérêt des jeunes pour les questions financières.",
      "C": "Le manque de cours d’économie à l’Université.",
      "D": "Le peu d’informations des banques sur les crédits."
    },
    "reponse": "A",
    "reponseTexte": "L’absence de formation sur l’élaboration d’un budget.",
    "explication": "Une journaliste parle de l'absence d'éducation financière pour les enfants et les adultes, en soulignant que le sujet est souvent tabou.",
    "indice": []
  },
  {
    "id": 173,
    "niveau": "B2",
    "titre": "",
    "transcription": "Parmi les victimes de la folie destructrice de l'homme, les abeilles. En cause, l'utilisation dans l'agriculture de pesticides très puissants, qui sont des poisons mortels pour les essaims d'abeilles, et conséquence inattendue, c'est finalement en ville que les abeilles finissent par trouver refuge. Écoutez le reportage de Gaël Letanneux. C'est le monde à l'envers. Aujourd'hui, les abeilles préfèrent la ville à la campagne. Car sur les toits, l'apiculteur n'a pas à craindre les effets des pesticides. En ville, les abeilles meurent moins vite et elles produisent du miel en grande quantité. Paradoxe assez incroyable. On perd moins d'essaims et les apiculteurs demandent au gouvernement d'interdire tous les pesticides qui peuvent nuire à la santé des abeilles.",
    "question": "Quel est le phénomène évoqué?",
    "options": {
      "A": "La chute de la production de miel.",
      "B": "La diminution du nombre d'apiculteurs.",
      "C": "La mutation de l'habitat des abeilles.",
      "D": "Les menaces d'attaques d'essaims en ville."
    },
    "reponse": "C",
    "reponseTexte": "La mutation de l'habitat des abeilles.",
    "explication": "Un reportage explique que les abeilles trouvent refuge en ville pour échapper aux pesticides utilisés en agriculture.",
    "indice": []
  },
  {
    "id": 174,
    "niveau": "B2",
    "titre": "",
    "transcription": "Une initiative vient de voir le jour, elle s'appelle CollectiBio. C'est un collectif de 13 marques bio qui a mis ce projet sur pied en partenariat avec des magasins spécialisés bio. Il y a des indépendants et des magasins en réseau. Au total, il y a quand même plus de 650 points de collecte implantés en France. En pratique, vous êtes invité à ramener vos emballages non recyclables en magasin pour les déposer dans des boxes pour que l'opérateur terrasse qu'elle recycles ces déchets pour en faire des tables ou des bancs en plastique par exemple. Alors, on peut même déposer des emballages de marques qui ne sont pas partenaires de cette opération. Eh oui, absolument, même si là, on a coûté 175 000 euros aux 13 pionniers pour rendre possible cette initiative. D'ailleurs, on peut se demander si ça n'aura pas un impact sur le prix des produits.",
    "question": "À quoi aboutit l'initiative collectivement?",
    "options": {
      "A": "La création de meubles à partir du recyclage.",
      "B": "La distribution d'emballages non polluants.",
      "C": "La promotion des marques peu connues.",
      "D": "L'achat en gros d'aliments labellisés bio."
    },
    "reponse": "A",
    "reponseTexte": "La création de meubles à partir du recyclage.",
    "explication": "Un collectif de marques bio et des magasins spécialisés mettent en place un système de collecte d'emballages non recyclables pour les recycler en meubles.",
    "indice": []
  },
  {
    "id": 175,
    "niveau": "B2",
    "titre": "",
    "transcription": "Docteur, je ne sais pas ce que j’ai. J’ai très mal au ventre et il est tout gonflé. Je me sens épuisée. Pourtant, je rentre de vacances et jusque-là, je me sentais en forme. Allongez-vous, je vais prendre votre tension. Bon, tout est normal. Je pense que c’est juste un problème de digestion, peut-être des repas trop lourds. Alors ce n’est pas grave, docteur? Je peux manger tout ce que je veux? Il faut faire attention pendant quelques jours. Il va falloir maigrir un peu.",
    "question": "Pourquoi la patiente consulte-t-elle le médecin?",
    "options": {
      "A": "Parce qu’elle a toujours très faim.",
      "B": "Parce qu’elle surmenée et stressée.",
      "C": "Parce qu’elle souffre et qu’elle est fatiguée.",
      "D": "Parce qu’elle veut perdre du poids."
    },
    "reponse": "C",
    "reponseTexte": "Parce qu’elle souffre et qu’elle est fatiguée.",
    "explication": "La patiente consulte le médecin car elle a mal au ventre et se sent fatiguée.",
    "indice": []
  },
  {
    "id": 176,
    "niveau": "B2",
    "titre": "",
    "transcription": "Vous avez vu le premier film de Robert Feuillade, hier ? Non, ce n'est pas le genre de film que j'aime. Moi, je regarde tous les films. J'adore le cinéma depuis toujours. Sans doute parce que mon père m'emmenait au cinéma alors que j'étais encore au biberon. Je me souviens encore de mon premier western. Dans la petite ville où on habitait, tous les samedis, il y avait le cinéma en plein air gratuit. Moi, ce que je préférais quand j'allais au cinéma avec mon père, c'était la glace à la vanille qu'il m'achetait.",
    "question": "Selon cette femme, qu'est-ce qui explique son amour inconditionnel du cinéma?",
    "options": {
      "A": "L'absence de distractions dans le village où elle habitait.",
      "B": "L'influence autoritaire que son père a exercée sur elle.",
      "C": "Le choc du tout premier film qu'elle a vu dans sa vie.",
      "D": "Sa fréquentation des salles dès son plus jeune âge."
    },
    "reponse": "D",
    "reponseTexte": "Sa fréquentation des salles dès son plus jeune âge.",
    "explication": "Une femme parle de son amour pour le cinéma et explique que cela vient du fait que son père l'emmenait au cinéma depuis qu'elle était bébé.",
    "indice": []
  },
  {
    "id": 177,
    "niveau": "B2",
    "titre": "",
    "transcription": "Nous informons nos auditeurs qu'en raison d'un arrêt de travail observé par certaines catégories de personnel, L'ensemble de nos journaux et de nos émissions de la journée sera remplacé par un programme musical continu. Deux bulletins d'information assurés par des personnels non grévistes seront diffusés à 13h. Et à 20 heures. Nous prions nos auditeurs de nous excuser de cette situation. C'était un communiqué de la direction de la station.",
    "question": "Quel est le but de ce communiqué?",
    "options": {
      "A": "Annoncer la diffusion exceptionnelle, en direct, d’un festival de musique.",
      "B": "Dire pourquoi des journalistes et des techniciens ont cessé le travail.",
      "C": "Expliquer pourquoi on attend de la musique au lieu des programmes habituels.",
      "D": "Rappeler les changements de programme dus à la nouvelle grille horaire."
    },
    "reponse": "C",
    "reponseTexte": "Expliquer pourquoi on attend de la musique au lieu des programmes habituels.",
    "explication": "Une station de radio informe ses auditeurs que les émissions habituelles sont remplacées par de la musique en raison d’un arrêt de travail. Deux bulletins d’information seront diffusés à 13h et 20h.",
    "indice": []
  },
  {
    "id": 178,
    "niveau": "B2",
    "titre": "",
    "transcription": "Deux manières de ne pas goûter les aliments, c'est de manger en silence, on les trouve moins bons, ou de manger avec un bruit sonore, de la musique constamment, ou un bruit de fond continu qui altère le goût des aliments. La dimension sonore adaptée au goût des aliments, c'est la parole. Il faut commenter tout ce que l'on déguste, commenter les aliments, et à ce moment-là, on éprouve mieux leur goût. On éprouve mieux leur saveur quand on discute avec quelqu'un, alors que lorsque l'on est seul dans le silence, le plaisir de manger et de boire est bien moins grand.",
    "question": "Selon cet homme, qu'est-ce qui permet d'apprécier pleinement ce que l'on mange?",
    "options": {
      "A": "Écouter de la musique classique.",
      "B": "Parler des plats que l'on savoure.",
      "C": "Partager un repas en famille.",
      "D": "Avoir une table bien décorée."
    },
    "reponse": "B",
    "reponseTexte": "Parler des plats que l'on savoure.",
    "explication": "Un homme explique que manger en silence ou avec des bruits de fond altère le goût des aliments. Il précise que parler pendant les repas aide à mieux apprécier la saveur des plats.",
    "indice": []
  },
  {
    "id": 179,
    "niveau": "B2",
    "titre": "",
    "transcription": "J'ai commencé dans l'entreprise, cela fait quand même 30 ans, à l'époque où on ne s'embarrassait pas avec le recrutement. Je me souviens, dès le soir où j'ai fini ma formation, mon patron de stage m'a proposé de rester, et pour mes copains de formation, pareil. Ah, c'est sûr, on n'embauche plus si facilement. Maintenant, je suis un ancien. Je dois recruter les jeunes qui arrivent et je trouve ça incroyable. Ils accumulent les diplômes. On fait plein de stages, 150 à postuler. Cela ne doit pas être drôle.",
    "question": "Que constate cet employé?",
    "options": {
      "A": "Les conditions de recrutement sont plus difficiles aujourd'hui.",
      "B": "Les étudiants ignorent le fonctionnement de l'entreprise.",
      "C": "Les jeunes étaient préparés plus sérieusement dans le passé.",
      "D": "Les patrons actuels ont un degré d'exigence trop élevé."
    },
    "reponse": "A",
    "reponseTexte": "Les conditions de recrutement sont plus difficiles aujourd'hui.",
    "explication": "Un employé d'une entreprise raconte comment il a été embauché facilement il y a 30 ans et compare cela à la situation actuelle où les jeunes doivent accumuler des diplômes et postuler à de nombreux stages pour être recrutés.",
    "indice": []
  },
  {
    "id": 180,
    "niveau": "B2",
    "titre": "",
    "transcription": "Et vous, Jeanne, avez-vous des phobies? Peut-être la même que vous, les requins. En réalité, la vie sous-marine dans son ensemble. Parfois, je n'ose même pas aller me baigner par peur de ce qu'il y a dans l'eau. Et si on vous disait qu'il y a des prédateurs dans toutes les mers, et même ici, au Canada? J'éviterai les mers et j'irai dans les lacs. Mais la menace est la même dans les lacs. D'autres espèces aquatiques qui grouillent, ça ne vous gêne pas? C'est vrai. Je crois que je vais me contenter des piscines.",
    "question": "Pourquoi Jeanne évite-t-elle de se baigner?",
    "options": {
      "A": "Elle déteste les bains de mer.",
      "B": "Elle développe des allergies cutanées.",
      "C": "Elle est angoissée par le risque de se noyer.",
      "D": "Elle est terrorisée par les animaux aquatiques."
    },
    "reponse": "D",
    "reponseTexte": "Elle est terrorisée par les animaux aquatiques.",
    "explication": "Jeanne parle de ses peurs liées à la baignade en raison des animaux aquatiques qui pourraient être présents dans l'eau.",
    "indice": []
  },
  {
    "id": 181,
    "niveau": "B2",
    "titre": "",
    "transcription": "Isabelle Olivier, en tant que directrice d'une agence de voyage, en quoi votre agence est-elle différente des autres ? Tout d'abord, je travaille toujours avec des gens qui garantissent le respect des partenaires locaux. Ensuite, je cherche à définir les motivations des personnes qui viennent me voir. Afin de les orienter vers des formules auxquelles ils n'ont pas forcément pensé. En général, après une discussion avec ces personnes sur la destination souhaitée, ils s'aperçoivent qu'un séjour classique ne coûte pas moins cher qu'un séjour sur mesure.",
    "question": "Que propose cette agence de voyage?",
    "options": {
      "A": "Des circuits respectueux de l'environnement.",
      "B": "Des formules adaptées à chaque client.",
      "C": "Des tarifs plus bas que la concurrence.",
      "D": "Des voyages à caractère humanitaire."
    },
    "reponse": "B",
    "reponseTexte": "Des formules adaptées à chaque client.",
    "explication": "Isabelle Olivier, directrice d'une agence de voyage, explique comment son agence se distingue des autres en travaillant avec des partenaires locaux respectueux et en adaptant les formules aux motivations des clients.",
    "indice": []
  },
  {
    "id": 182,
    "niveau": "B2",
    "titre": "",
    "transcription": "Je pense que le chef de département a raison. Il faudrait modifier la façon dont nous fonctionnons et redéfinir clairement les missions de chacun. Oui, je suis d'accord. D'autant que nous avons eu des incompréhensions entre nous ces derniers temps. D'après moi, elles sont directement liées au fait que personne ne sait précisément où commence son rôle. Et surtout, où il s'arrête dans le projet. Tout à fait d'accord. Moi-même, je suis un peu perdu. Si tout le monde essaie de tout faire, on ne sera jamais d'accord au sein de ce service. Sans compter que ça ne nous fait pas gagner de temps. Bien. Alors, mettons ça à l'ordre de la réunion d'équipe de demain.",
    "question": "Quel est l'objet de la discussion?",
    "options": {
      "A": "La répartition des tâches dans le service.",
      "B": "Le manque d'expérience de l'équipe.",
      "C": "Le retard pris dans la réalisation d'un projet.",
      "D": "Les désaccords entre employeur et employés."
    },
    "reponse": "A",
    "reponseTexte": "La répartition des tâches dans le service.",
    "explication": "Des collègues discutent des problèmes de leur service et proposent de redéfinir les rôles de chacun pour éviter les incompréhensions.",
    "indice": []
  },
  {
    "id": 183,
    "niveau": "B2",
    "titre": "",
    "transcription": "Les agronomes travaillent beaucoup sur l'agroécologie. Notre modèle est très dépendant du pétrole et du gaz pour les engrais, le transport des denrées, l'énergie pour l'irrigation. Et avec un pétrole qui devient plus rare et plus cher, il s'agit donc de trouver des techniques moins gourmandes, comme l'explique Olivier Descuteurs, rapporteur spécial des Nations Unies pour l'alimentation. Dans beaucoup de zones qui ne sont pas encore développées selon les méthodes agro-industrielles de production, il faut effectivement mettre l'accent sur des pratiques agroécologiques qui, par exemple, permettent de recycler les déchets dans le champ pour fertiliser le champ ou qui permettent de combiner l'agroforesterie avec des cultures alimentaires pour économiser les engrais chimiques grâce à la fertilisation des sols par les arbres.",
    "question": "Quelle piste est envisagée pour améliorer la production agricole?",
    "options": {
      "A": "Augmenter les espaces de terres cultivables.",
      "B": "Moderniser les machines de production agricole.",
      "C": "Privilégier une agriculture sans produit chimique.",
      "D": "Utiliser des semences génétiquement modifiées."
    },
    "reponse": "C",
    "reponseTexte": "Privilégier une agriculture sans produit chimique.",
    "explication": "Un agronome explique que l'agriculture dépend beaucoup du pétrole et du gaz pour les engrais, le transport des denrées et l'énergie pour l'irrigation. Il parle de techniques agroécologiques qui permettent de recycler les déchets dans le champ et de combiner l'agroforesterie avec des cultures alimentaires.",
    "indice": []
  },
  {
    "id": 184,
    "niveau": "B2",
    "titre": "",
    "transcription": "Le réalisateur de films documentaires Nicolas Philibert a passé plusieurs semaines dans une école élémentaire composée d'une classe unique. Autour d'un seul instituteur, installé dans ce village d'Auvergne depuis plus de 20 ans, une douzaine d'enfants étudient ensemble de la maternelle à l'entrée au collège. Un beau film témoigne de ce petit monde et notre journaliste a rencontré son réalisateur. Pourquoi avez-vous intitulé votre film « Être et avoir » ? Vous savez, ce titre s'est imposé tout de suite. On a tous fait beaucoup d'exercices à l'école sur ces deux verbes. Et puis la conjugaison, c'est toute une vie, passé, présent, futur, à voir. C'est aussi l'image d'un monde où nous sommes tentés par la possession, la consommation. Les parents veulent que les enfants aient de bonnes notes dès leur plus jeune âge, mais dans le film, on rencontre un instituteur pour qui l'essentiel est que les enfants soient eux-mêmes, se constituent en tant que personnes humaines.",
    "question": "Comment le choix du titre de ce film s'est-il fait ?",
    "options": {
      "A": "C'est l'instituteur qui a proposé ce titre, qui lui plaisait, au réalisateur.",
      "B": "Ce sont les parents d'élèves qui ont proposé ce titre au réalisateur.",
      "C": "Les élèves faisaient un exercice de conjugaison quand le réalisateur les a rencontrés.",
      "D": "Le réalisateur a trouvé que ces verbes résumaient les multiples aspects de la vie."
    },
    "reponse": "D",
    "reponseTexte": "Le réalisateur a trouvé que ces verbes résumaient les multiples aspects de la vie.",
    "explication": "Un journaliste interroge le réalisateur Nicolas Philibert sur le choix du titre de son film. Le réalisateur explique pourquoi il a choisi 'Être et avoir' pour son documentaire sur une école élémentaire en Auvergne.",
    "indice": []
  },
  {
    "id": 185,
    "niveau": "B2",
    "titre": "",
    "transcription": "Sylvie, qu'est-ce qui vous plaît plus particulièrement dans votre travail ? En tant que responsable multimédia, je suis également conceptrice de formation en ligne, formatrice de formateurs et enseignante de français langue étrangère. C'est ce dernier point qui m'attire. Un de mes centres d'intérêt en français langue étrangère concerne le développement d'une politique linguistique en faveur du français comme langue de communication et pas seulement comme symbole d'une certaine culture et du pays des droits de l'homme ou comme langue de l'amour. J'essaie de montrer que l'apprentissage des langues est une passerelle entre les peuples et les cultures.",
    "question": "Quel objectif Sylvie poursuit-elle en enseignant le français langue étrangère?",
    "options": {
      "A": "La diffusion d'une langue qui exprime les nuances des sentiments.",
      "B": "La multiplication des actions pour la défense des droits de l'homme.",
      "C": "La promotion d'un moyen d'échanges entre les différentes nationalités.",
      "D": "La reconnaissance d'un patrimoine culturel unique par sa richesse."
    },
    "reponse": "C",
    "reponseTexte": "La promotion d'un moyen d'échanges entre les différentes nationalités.",
    "explication": "Sylvie parle de son rôle en tant que responsable multimédia et enseignante de français langue étrangère, expliquant son intérêt pour le développement d'une politique linguistique qui favorise le français comme langue de communication entre les peuples.",
    "indice": []
  },
  {
    "id": 186,
    "niveau": "B2",
    "titre": "",
    "transcription": "Quel froid, c'est ma femme ! Ouais, mais au moins, il y a du soleil. C'est sûr, à côté de Diag, à la nuit, toute la journée, c'était la rame. Ah oui, j'aime mieux ce froid sec. Qu'est-ce qu'il y a en vain?",
    "question": "Qu'est-ce qu'il y a aujourd'hui?",
    "options": {
      "A": "Il fait beau qu’hier.",
      "B": "Il fait plus mauvais qu’hier.",
      "C": "Il pleut plus qu’hier.",
      "D": "Il y a moins de soleil qu’hier."
    },
    "reponse": "A",
    "reponseTexte": "Il fait beau qu’hier.",
    "explication": "Deux personnes discutent de la météo en comparant les conditions actuelles à celles de la veille.",
    "indice": []
  },
  {
    "id": 187,
    "niveau": "B2",
    "titre": "",
    "transcription": "Vous, d'ailleurs, vous lisez plutôt des romans anglo-saxons ? Américains? Américains. Mais oui, mais c'est toute ma culture. Quand j'avais 20 ans, c'était une telle révolution, aussi bien au niveau de la musique que de la mode, que du cinéma, tout ça. J'étais obligé de lire des romans américains, d'autant plus que c'était les romans... Qui était important pour moi pour me donner des directions éventuellement et pour savoir un petit peu vers quoi j'avais envie de me diriger.",
    "question": "À quoi sont liés les goûts littéraires de cet invité?",
    "options": {
      "A": "A l'époque de sa jeunesse.",
      "B": "A sa passion pour un artiste.",
      "C": "A son amour des langues.",
      "D": "A un voyage aux Etats-Unis."
    },
    "reponse": "A",
    "reponseTexte": "A l'époque de sa jeunesse.",
    "explication": "Un invité parle de ses préférences littéraires, en particulier pour les romans américains, et explique pourquoi ils étaient importants pour lui.",
    "indice": []
  },
  {
    "id": 188,
    "niveau": "B2",
    "titre": "",
    "transcription": "dans la famille des héroïnes ordinaires, vous voulez nous présenter la grand-mère, Laure. Eh oui, je ne vous l'apprends pas, dans les sociétés occidentales modernes, l'archétype de la grand-mère est de moins en moins la manigato garante de la transmission des recettes autant que de l'histoire de la famille. Mais la grand-mère voyageuse, engagée, dynamique, dont l'espérance de vie est de 125 ans, pas toujours dispo pour garder les petits-enfants car trop occupés à refaire sa vie. Et même quand elle porte des robes en nylon et qu'elle a l'air d'une mémé, elle s'éclate à faire des blagues graveleuses. Question 22. Dit la journaliste des grands-mères modernes.",
    "question": "",
    "options": {
      "A": "Elles assument leurs désirs malgré leur âge",
      "B": "Elles participent au maintien des traditions",
      "C": "Elles s’impliquent dans l’éducation des enfants",
      "D": "Elles sont à la pointe des tendances de la mode"
    },
    "reponse": "A",
    "reponseTexte": "Elles assument leurs désirs malgré leur âge.",
    "explication": "Une journaliste parle des grands-mères modernes qui voyagent, sont engagées et dynamiques, et ne correspondent plus à l'archétype traditionnel.",
    "indice": []
  },
  {
    "id": 189,
    "niveau": "B2",
    "titre": "",
    "transcription": "Bonjour, c'est bien ici le bureau des relations internationales ? Oui, c'est à quel sujet? Je suis en master. Je voudrais des informations sur les échanges internationaux proposés aux étudiants. Demandez d'abord la liste des universités partenaires au secrétariat de votre département. Ici, nous nous occupons seulement du transfert de votre demande à l'étranger. Revenez quand le dossier sera complet et validé par le directeur de votre département.",
    "question": "Vers qui la femme dirige-t-elle l'étudiant?",
    "options": {
      "A": "Le bureau des relations internationales.",
      "B": "Le directeur de son département.",
      "C": "Le secrétariat de son département.",
      "D": "L'université étrangère qui l'intéresse."
    },
    "reponse": "C",
    "reponseTexte": "Le secrétariat de son département.",
    "explication": "Un étudiant en master demande des informations sur les échanges internationaux au bureau des relations internationales.",
    "indice": []
  },
  {
    "id": 190,
    "niveau": "B2",
    "titre": "",
    "transcription": "Allô ? Salut, c'est Julie. Ça va? Je voulais prendre de tes nouvelles et aussi de Sarah. Ça va, je suis fatiguée, mais tout se passe bien. Sarah a bien grandi, elle est très mignonne, mais il y a du sang encore difficile. Je ne dors pas beaucoup. Eh oui, elle n'a que trois mois. Il faut attendre encore un peu. Après, tu feras moins de biberons la nuit. Oui, heureusement, ma mère vient souvent m'aider la journée. Ça me permet de faire une sieste et Sarah adore voir sa mamie qui me chante plein de chansons. Génial! Je viendrai vous voir, moi aussi.",
    "question": "De quoi parlent les deux amis?",
    "options": {
      "A": "De conseils pour mieux dormir.",
      "B": "De difficultés à calmer les enfants.",
      "C": "De la relation entre fille et mère.",
      "D": "Des premiers mois d'un bébé."
    },
    "reponse": "D",
    "reponseTexte": "Des premiers mois d'un bébé.",
    "explication": "Julie parle à un ami de sa fille de trois mois, de sa fatigue et de l'aide qu'elle reçoit de sa mère.",
    "indice": []
  },
  {
    "id": 191,
    "niveau": "B2",
    "titre": "",
    "transcription": "J'ai toujours été bien intégrée, que ce soit par les clubs, par les dirigeants ou par les joueurs. L'objectif, c'était de prendre les bonnes décisions. Donc, une fois qu'on a vu que j'avais les compétences, on n'est plus venu me voir comme la femme, mais bien comme l'arbitre. Les joueurs ne sont pas forcément surpris parce que ce sont des compétiteurs. Ce qu'ils veulent, c'est qu'on siffle juste. Après, c'est juste peut-être, souvent, on m'appelle monsieur l'arbitre. Mais bon, c'est plus dans la boutade. On en rigole après sur le terrain. Mais eux, ils veulent qu'on siffle juste, qu'on soit une femme ou un homme.",
    "question": "Qu'explique cet arbitre?",
    "options": {
      "A": "Elle a décidé d'adopter une attitude agressive.",
      "B": "Elle a eu des problèmes pour se faire une place.",
      "C": "Elle est harcelée par des plaisanteries sexistes.",
      "D": "Elle est respectée pour son professionnalisme."
    },
    "reponse": "D",
    "reponseTexte": "Elle est respectée pour son professionnalisme.",
    "explication": "Une arbitre parle de son expérience dans le milieu du sport et de la façon dont elle a été acceptée par les joueurs et les dirigeants.",
    "indice": []
  },
  {
    "id": 192,
    "niveau": "B2",
    "titre": "",
    "transcription": "Oui, différents modèles de véhicules sans conducteur étaient à essayer dans les rues de Las Vegas la semaine dernière. Pour le moment, il s'agit seulement d'expérimentation. En attendant une réglementation, le secteur s'intéresse à ce que l'on fera dans ces voitures quand elles conduiront vraiment toutes seules, persuadées que c'est l'intérieur de la voiture et les services proposés qui feront la différence demain, bien plus que le moteur. Plusieurs concepts d'habitacles futuristes étaient présentés sur le salon. Des voitures avec des écrans partout, intégrés dans les vitres ou faisant toute la largeur du tableau de bord. Des véhicules qui se personnaliseront en fonction de leurs passagers.",
    "question": "Sur quel aspect travaillent les concepteurs des voitures autonomes?",
    "options": {
      "A": "L'écologie.",
      "B": "La puissance.",
      "C": "La sécurité.",
      "D": "Les équipements."
    },
    "reponse": "D",
    "reponseTexte": "Les équipements.",
    "explication": "Des voitures autonomes sont testées à Las Vegas. Les concepteurs se concentrent sur les équipements et services à l'intérieur des véhicules.",
    "indice": []
  },
  {
    "id": 193,
    "niveau": "B2",
    "titre": "",
    "transcription": "Bonjour, je souhaiterais passer quelques jours à Paris. J'espère qu'il est encore temps de réserver. Qu'est-ce que vous me conseillez? Pour Paris, ce n'est pas un problème. Vous avez le temps, mais il faut mieux une formule tout compris. C'est ce qu'il y a de moins cher à cette époque? Pas forcément le moins cher, mais en tout cas le plus facile.",
    "question": "Pourquoi l'employé conseille-t-il au client de choisir une formule tout compris?",
    "options": {
      "A": "C'est meilleur marché.",
      "B": "C'est plus simple.",
      "C": "C'est plus rapide.",
      "D": "C'est trop tard."
    },
    "reponse": "B",
    "reponseTexte": "C'est plus simple.",
    "explication": "Un client appelle une agence pour réserver un séjour à Paris et demande conseil. L'employé lui recommande une formule tout compris.",
    "indice": []
  },
  {
    "id": 194,
    "niveau": "B2",
    "titre": "",
    "transcription": "L'apprentissage en centre de formation est une voie possible après la classe de 3e. Pour y parvenir, deux mots d'ordre, motivation et ténacité. Motivation, car c'est l'un des critères majeurs de recrutement par des patrons. Ténacité, car il faut impérativement décrocher un stage pour pouvoir s'inscrire dans tout centre de formation. Et là, ce n'est pas forcément gagné d'entrée. Il faut parfois démarcher plusieurs dizaines d'entreprises avant de trouver son bonheur.",
    "question": "Selon ce reportage, pourquoi les futurs apprentis doivent-ils se montrer tenaces?",
    "options": {
      "A": "Parce que l'apprentissage est une formation longue.",
      "B": "Parce que le lieu de stage peut être difficile à trouver.",
      "C": "Parce que les centres de formation sont surchargés.",
      "D": "Parce que les patrons préfèrent les jeunes diplômés."
    },
    "reponse": "B",
    "reponseTexte": "Parce que le lieu de stage peut être difficile à trouver.",
    "explication": "Un reportage explique comment trouver un stage pour un apprentissage après la 3e. Il parle de la motivation et de la ténacité nécessaires pour décrocher un stage.",
    "indice": []
  },
  {
    "id": 195,
    "niveau": "B2",
    "titre": "",
    "transcription": "Monsieur, pourrais-je faire mon exposé plus tard que prévu ? Pourquoi voulez-vous déplacer la table de votre exposé? Parce que sinon, je ne pourrais pas terminer la dissertation que vous avez demandée. Pour le bon déroulement du cours, il est important que vous fassiez votre exposé la semaine prochaine. Je préfère encore que vous me rendiez le travail écrit en retard. Je comprends. J'essayerai donc de passer comme prévu.",
    "question": "Sur quoi le professeur et l'élève tombent-ils d'accord?",
    "options": {
      "A": "Le report de la remise d'un devoir.",
      "B": "Le changement de l'emploi du temps.",
      "C": "Le rattrapage d'une mauvaise note.",
      "D": "Le programme de révision pour un examen."
    },
    "reponse": "A",
    "reponseTexte": "Le report de la remise d'un devoir.",
    "explication": "Un élève demande à son professeur de reporter son exposé car il a un devoir à terminer. Le professeur préfère que l'élève rende le travail écrit en retard plutôt que de déplacer l'exposé.",
    "indice": []
  },
  {
    "id": 196,
    "niveau": "B2",
    "titre": "",
    "transcription": "Oh Le titre du livre, c'est« Tous les hommes n'habitent pas le monde de la même façon». Ça raconte les différentes manières d'être au monde. Quelle est la vôtre?",
    "question": "",
    "options": {
      "A": "Il cherche à éviter toute forme de violence.",
      "B": "Il dénonce la stérilité des affrontements.",
      "C": "Il refuse de prendre parti pour une cause.",
      "D": "Il voit la solitude comme un mal nécessaire."
    },
    "reponse": "A",
    "reponseTexte": "Il cherche à éviter toute forme de violence.",
    "explication": "Un auteur parle de son approche de la vie en évitant les conflits et en cherchant la douceur, expliquant pourquoi il préfère éviter les combats inutiles.",
    "indice": []
  },
  {
    "id": 197,
    "niveau": "B2",
    "titre": "",
    "transcription": "Vous pratiquez un sport ? Je n'ai plus le temps à cause de mon travail. C'est dommage, ça permet de garder une bonne hygiène de vie, d'être en forme et de rester en bonne santé. Vous devriez essayer de trouver du temps. D'accord, je vais y réfléchir. Tenez, voici votre ordonnance. Prenez ces deux médicaments matin et soir pendant huit jours.",
    "question": "Que fait la doctoresse?",
    "options": {
      "A": "Elle conseille une activité physique.",
      "B": "Elle propose un arrêt maladie.",
      "C": "Elle rédige un certificat médical.",
      "D": "Elle remplit une feuille de soins."
    },
    "reponse": "A",
    "reponseTexte": "Elle conseille une activité physique.",
    "explication": "La doctoresse parle de sport et donne des médicaments. Il faut comprendre ce qu'elle fait en plus de donner des conseils.",
    "indice": []
  },
  {
    "id": 198,
    "niveau": "B2",
    "titre": "",
    "transcription": "Il va faire chaud cette semaine, très chaud. La chaleur va de nouveau être difficile à supporter. Et cette situation fait les affaires des professionnels du tourisme de la montagne. Là-bas, pendant la nuit, les températures vont de 12 à 15 degrés, ce qui permet de mieux se reposer. Pendant la journée, il est possible de faire des activités nautiques dans de l'eau bien fraîche. C'est ce dont tout le monde rêve actuellement. Question 26. Selon un reportage, que pour les touristes pendant les grandes chaleurs,",
    "question": "",
    "options": {
      "A": "Ils annulent leurs activités.",
      "B": "Ils partent à la montagne.",
      "C": "Ils préfèrent sortir la nuit.",
      "D": "Ils restent au frais à l’intérieur."
    },
    "reponse": "B",
    "reponseTexte": "Ils partent à la montagne.",
    "explication": "Un reportage parle des touristes qui cherchent à échapper à la chaleur intense. Ils vont à la montagne pour profiter de températures plus fraîches.",
    "indice": []
  },
  {
    "id": 199,
    "niveau": "B2",
    "titre": "",
    "transcription": "C'est lui, qu'est-ce qui vous plaît plus particulièrement dans votre travail ? En tant que responsable de multimedia, je suis également conseillère de formation en ligne, formatrice de formateurs et enseignante de français dans les étrangères. C'est ce dernier point qui m'attire. Un de mes centres d'intérêt en français dans les clonçères concerne le développement d'une politique linguistique en faveur du français comme langue de communication, et pas seulement comme symbole d'une certaine culture et du pays des droits de l'homme ou comme langue de l'amour. J'essaie de montrer que l'apprentissage des langues est une passerelle entre les peuples et les cultures.",
    "question": "Quel objectif s'il vit poursuivit-elle en enseignant le français dans l'étranger?",
    "options": {
      "A": "La diffusion d’une langue qui exprime les nuances des sentiments.",
      "B": "La multiplication des actions pour la défense des droits de l’homme.",
      "C": "La promotion d’un moyen d’échanges entre les différentes nationalités.",
      "D": "La reconnaissance d’un patrimoine culturel unique par sa richesse."
    },
    "reponse": "C",
    "reponseTexte": "La promotion d'un moyen d'échanges entre les différentes nationalités.",
    "explication": "Une personne explique son rôle d'enseignante de français à l'étranger et ses motivations pour promouvoir le français comme langue de communication.",
    "indice": []
  },
  {
    "id": 200,
    "niveau": "B2",
    "titre": "",
    "transcription": "T'as vu l'affiche dans le hall de l'université ? Ce week-end, les Finissants organisent une bourse aux livres sur les programmes qu'ils ont étudiés. On y va? Tu sais, ce genre de vente ne m'intéresse pas parce que les manuels changent tous les ans, surtout en économie. Il faut se tenir au courant de tout. Non, vas-y toute seule. Ah, tu me déçois. On va rencontrer des étudiants qui ont déjà travaillé sur notre futur programme. C'est aussi important de pouvoir discuter sur ce que l'on va rencontrer l'an prochain. Le cursus, les profs, le diplôme. Allez, viens. Non, j'ai pas envie. Je dois revoir mes cours pour mes partiels.",
    "question": "Que souhaite la jeune fille?",
    "options": {
      "A": "Revendre des livres d’occasion auprès des finissants.",
      "B": "Rencontrer les étudiants nouvellement inscrits.",
      "C": "Se rendre à une vente de livres universitaires d’occasion à la faculté.",
      "D": "Aller acheter des livres pour réviser avec son ami avant leurs examens."
    },
    "reponse": "C",
    "reponseTexte": "Se rendre à une vente de livres universitaires d’occasion à la faculté.",
    "explication": "Une jeune fille essaie de convaincre son ami d’aller à une vente de livres universitaires organisée par les finissants de leur université.",
    "indice": []
  },
  {
    "id": 201,
    "niveau": "B2",
    "titre": "",
    "transcription": "Si la mer monte beaucoup, ceux qui vivent sur les petites îles, ils vont aller où ? Ce que je peux dire, c'est qu'il y a des architectes qui réfléchissent déjà à créer des cités flottantes qui seraient autosuffisantes pour accueillir jusqu'à 5000 habitants. Donc c'est un projet qui est un peu utopiste, mais en même temps on se dit, est-ce qu'on ne sera pas amené à développer ce genre de projet pour accueillir justement les réfugiés climatiques?",
    "question": "En quoi consiste le projet évoqué?",
    "options": {
      "A": "La construction de villes sur l'eau.",
      "B": "La création d'un lieu de vie sous-marin.",
      "C": "Le développement de bateaux aménagés.",
      "D": "L'installation de digues sur les côtes."
    },
    "reponse": "A",
    "reponseTexte": "La construction de villes sur l'eau.",
    "explication": "Des architectes imaginent des cités flottantes pour accueillir les réfugiés climatiques si le niveau de la mer monte.",
    "indice": []
  },
  {
    "id": 202,
    "niveau": "B2",
    "titre": "",
    "transcription": "Psychologue, vous animez une émission télévisée. Comment faites-vous pour jongler entre vos consultations et vos émissions? J'ai suspendu mes consultations privées dans un souci éthique. Je ne veux pas utiliser cette émission comme fonds de commerce, comme une manière de rabattre de la clientèle. Je suis un thérapeute ordinaire et je ne veux pas donner l'image de quelqu'un qui va plus vite que les autres.",
    "question": "Pour quelles raisons ce psychologue a-t-il interrompu ses consultations?",
    "options": {
      "A": "Il a répondu à une demande de ses patients.",
      "B": "Il consacre son temps à son nouveau métier.",
      "C": "Il s'est remis en question suite à un échec.",
      "D": "Il veut éviter toute publicité personnelle."
    },
    "reponse": "D",
    "reponseTexte": "Il veut éviter toute publicité personnelle.",
    "explication": "Pourquoi le psychologue a-t-il arrêté ses consultations privées ? Attention aux pièges de la reformulation.",
    "indice": []
  },
  {
    "id": 203,
    "niveau": "B2",
    "titre": "",
    "transcription": "Chers auditeurs, nous allons aujourd'hui vous présenter Chantal Harvey, une franco-québécoise qui travaille au centre de service de Chamounigan et qui, tenez-vous bien, conduit un chasse-neige. Alors Chantal, comment on se sent aux commandes de cette grosse machine? Je me sens parfaitement dans mon élément. Et votre chef, qu'en pense-t-il? Vous êtes satisfait d'avoir une femme dans votre équipe? J'en suis ravi. Elle a assimilé rapidement les manœuvres d'exécution et elle intervient efficacement aux endroits stratégiques. Même si elle s'y connaît peu en déneigement, elle a su tirer son épingle du jeu. C'est une personne courageuse. Et regardez comme elle est à l'aise aux manettes de cet engin. On jurerait qu'elle a fait ça toute sa vie.",
    "question": "Pourquoi son responsable est-il satisfait de Chantal?",
    "options": {
      "A": "Elle a beaucoup d'expérience.",
      "B": "Elle a vite appris son métier.",
      "C": "Elle aime prendre des risques.",
      "D": "Elle sait diriger ses collègues."
    },
    "reponse": "B",
    "reponseTexte": "Elle a vite appris son métier.",
    "explication": "Chantal Harvey, une femme qui conduit un chasse-neige, parle de son travail avec un auditeur. Son chef explique pourquoi il est content de l'avoir dans son équipe.",
    "indice": []
  },
  {
    "id": 204,
    "niveau": "B2",
    "titre": "",
    "transcription": "Quand j'étais adolescent, j'avais écrit un long poème à Georges Brassens. J'avais fini de le recopier. Enfin, c'était une espèce de chanson que j'avais fini de recopier dans le bistrot en face de l'impasse Florimont, où il habitait. Et j'étais allé lui porter. Sauf qu'il n'habitait plus là depuis des années et que j'étais assez rassuré qu'il n'habite plus là parce que je ne sais pas ce que je lui aurais raconté. Mais je l'avais écrite. Et je me dis que si un jour j'avais reçu un petit mot de Brassens me disant« J'ai lu vos chansons et j'aimerais bien vous en parler», ça m'aurait intéressé.",
    "question": "Qu'aurait souhaité cette personne en allant chez Georges Brassens?",
    "options": {
      "A": "Visiter des studios de cinéma.",
      "B": "Lui apporter un livre.",
      "C": "Lui présenter son travail.",
      "D": "Lui proposer une interview."
    },
    "reponse": "C",
    "reponseTexte": "Lui présenter son travail.",
    "explication": "Une personne raconte avoir écrit une chanson pour Georges Brassens et être allée chez lui pour la lui donner.",
    "indice": []
  },
  {
    "id": 205,
    "niveau": "B2",
    "titre": "",
    "transcription": "Vous êtes écologiste, vous êtes environnementaliste à temps plein. C'est votre carrière, c'est votre métier. Tout à fait, j'ai ce plaisir. Moi, quand je faisais mes études, il n'y avait pas de possibilité de travailler en environnement. Alors maintenant, il existe des formations, des cours. On va à l'université pour... Tout à fait, il existe de très nombreux programmes. C'est assez fascinant. On a au-dessus de 400 programmes au Québec, tant au niveau technique qu'au niveau cégep. 400 programmes, oui. Technique, cégep, université. Alors, vous, vous êtes allé à l'université pour apprendre l'environnement. Oui, oui, tout à fait. J'ai travaillé beaucoup sur le terrain avant, à l'âge que j'ai. Il y avait moins de programmes à l'époque. Question 25. Explique ces personnes sur le monde universitaire québécois.",
    "question": "",
    "options": {
      "A": "Le nombre d'étudiants inscrits a augmenté.",
      "B": "Les cursus sur l'environnement se sont multipliés.",
      "C": "Les enseignants font des carrières prestigieuses.",
      "D": "Les formations sont devenues plus concrètes."
    },
    "reponse": "B",
    "reponseTexte": "Les cursus sur l'environnement se sont multipliés.",
    "explication": "Deux personnes discutent des possibilités d'études et de carrières dans le domaine de l'environnement au Québec. Elles mentionnent l'augmentation des programmes universitaires et techniques disponibles.",
    "indice": []
  },
  {
    "id": 206,
    "niveau": "B2",
    "titre": "",
    "transcription": "Tiens, c'est le salon de l'agriculture la semaine prochaine. Il faut que vous y alliez, Françoise. Je suis sûr que vous allez adorer. Vous savez, moi, j'y connais rien. C'est pas le genre de salon que je fréquente. Vous avez tort. Moi, j'y vais tous les ans. Imaginez la plus grande ferme du monde qui s'installe en plein Paris pour dix jours. Oui, oui, bien sûr. Mais il y a plein d'autres choses intéressantes à faire à Paris. Bien sûr. Mais il faut y aller. Vous allez voir les animaux, par exemple, c'est incroyable. Vous pourrez les caresser et... Je ne vous parle pas des spécialités gastronomiques. Un régal. Vous savez, moi, les animaux... Cependant, vous avez éveillé ma curiosité. Mais il faudra venir avec moi.",
    "question": "Dans ce dialogue, quelle est l'intention du monsieur?",
    "options": {
      "A": "Il fait des compliments.",
      "B": "Il formule une invitation.",
      "C": "Il cherche à convaincre.",
      "D": "Il donne des conseils."
    },
    "reponse": "C",
    "reponseTexte": "Il cherche à convaincre.",
    "explication": "Un homme parle à Françoise du salon de l'agriculture à Paris et essaie de la convaincre d'y aller.",
    "indice": []
  },
  {
    "id": 207,
    "niveau": "B2",
    "titre": "",
    "transcription": "Au fait, est-ce que je peux compter sur toi pour garder Mochi pendant les vacances? Promis, c'est la dernière fois que je te demande un tel service. Jamais de la vie. C'est hors de question cette fois-ci. La dernière fois que je l'ai gardé, il a été insupportable. Oh non! Comment je vais faire? Je croyais pouvoir compter sur toi.",
    "question": "Quelle est la réaction de la femme?",
    "options": {
      "A": "Elle accepte de garder le chien.",
      "B": "Elle refuse de garder le chien.",
      "C": "Elle propose de trouver une autre solution.",
      "D": "Elle demande des excuses."
    },
    "reponse": "B",
    "reponseTexte": "Elle refuse de garder le chien.",
    "explication": "Une personne demande à une femme de garder son chien pendant les vacances. La femme refuse catégoriquement en rappelant une mauvaise expérience passée.",
    "indice": []
  },
  {
    "id": 208,
    "niveau": "B2",
    "titre": "",
    "transcription": "Le Grand Angle nous emmène ce matin à bord d'un bus transformé en salon de beauté. Il sillonne actuellement les communes rurales et les quartiers défavorisés de l'île de France et de l'Oise. Il offre des soins gratuits aux femmes isolées ou en situation de précarité. Reportage de Yann Gallic à la Ferté-Sous-Jouar en Seine-et-Marne. Femme de ménage et mère de cinq enfants, Brigitte n'est pas une habituée des salons de beauté, faute de temps et de moyens. Mais aujourd'hui, elle va pouvoir prendre soin d'elle pendant une heure, confortablement installée devant un grand miroir entouré de lumières tamisées. On a appris à se masser au niveau du visage, à le nettoyer, à faire un gommage, juste à prendre soin de notre peau. À vrai dire, c'est la première fois que je m'occupe de moi parce qu'entre le ménage et les enfants, on n'a pas trop le temps.",
    "question": "De quoi traite le reportage de Yann Gallic?",
    "options": {
      "A": "D'un projet de recrutement.",
      "B": "D'une campagne d'action sociale.",
      "C": "D'une formation professionnelle.",
      "D": "D'une opération publicitaire."
    },
    "reponse": "B",
    "reponseTexte": "D'une campagne d'action sociale.",
    "explication": "Un bus transformé en salon de beauté offre des soins gratuits aux femmes en situation de précarité. Brigitte, une femme de ménage, profite de ce service pour prendre soin d'elle.",
    "indice": []
  },
  {
    "id": 209,
    "niveau": "B2",
    "titre": "",
    "transcription": "J'ai le plaisir de recevoir aujourd'hui M. Daoulé, qui nous vient tout droit du Nouveau-Brunswick. Alors, M. Daoulé, vous avez une belle famille, puisque vous avez huit enfants, tous nés dans des endroits différents, je crois. Oui, en Afrique, au Québec et les petits derniers au Nouveau-Brunswick. Ah! Et est-ce qu'ils ont tous des accents différents? Ma foi, oui. Dans chacun de ces endroits, le français est parlé différemment. Et mes enfants ont pris l'accent du lieu où ils sont allés à l'école dans les premières années de leur vie.",
    "question": "Pourquoi les enfants de M. Daoulé ont-ils des accents variés quand ils parlent français?",
    "options": {
      "A": "Parce qu'ils ont été scolarisés dans des lycées plurilingues.",
      "B": "Parce qu'ils ont été adoptés dans des pays différents.",
      "C": "Parce qu'ils ont vécu dans de diverses zones de la France.",
      "D": "Parce qu'ils parlent plusieurs langues à la maison."
    },
    "reponse": "C",
    "reponseTexte": "Parce qu'ils ont vécu dans de diverses zones de la France.",
    "explication": "M. Daoulé parle de ses huit enfants nés dans différents endroits et ayant des accents différents selon l'endroit où ils ont été scolarisés.",
    "indice": []
  },
  {
    "id": 210,
    "niveau": "B2",
    "titre": "",
    "transcription": "Christelle Nolot, directrice d'une salle de cinéma, nous parle du festival Le Printemps du Cinéma. Je décide moi-même des films que nous présentons. Le but est de proposer le maximum de diversité, qu'il y en ait pour tous les goûts. C'est l'occasion de mettre en avant des films qui ont bien marché, mais qui n'ont pas assez été exploités. Pour les amateurs de cinéma d'auteur, il y a aussi une sélection de 15 films à régressifs déjà récompensés.",
    "question": "Qu'est-ce qui est important pour Christelle Nolot?",
    "options": {
      "A": "L'organisation d'ateliers vidéo.",
      "B": "La présence de réalisateurs étrangers.",
      "C": "La projection de documentaire.",
      "D": "La variété de la programmation."
    },
    "reponse": "D",
    "reponseTexte": "La variété de la programmation.",
    "explication": "Christelle Nolot, directrice d'une salle de cinéma, explique comment elle sélectionne les films pour le festival Le Printemps du Cinéma afin de garantir une grande diversité.",
    "indice": []
  },
  {
    "id": 211,
    "niveau": "B2",
    "titre": "",
    "transcription": "Dans toutes les écoles primaires de France, 815 900 élèves du cours élémentaire vont passer des évaluations nationales en français et mathématiques. Alors ces évaluations nationales sont-elles utiles? L'évaluation est un acte quotidien pour tous les enseignants. Là, c'est une évaluation institutionnelle que propose le ministère de l'Éducation nationale. Ça a déjà été effectué au mois de janvier pour les élèves du cours moyen et, à l'époque, on l'avait d'ailleurs fortement critiqué puisque c'était une évaluation qui intervenait au mois de janvier alors qu'une grande partie des programmes n'avaient pas été effectués.",
    "question": "Pour quelles raisons ces évaluations ont-elles été critiquées?",
    "options": {
      "A": "Parce qu'elles étaient difficiles à mettre en œuvre.",
      "B": "Parce qu'elles ignoraient la particularité des contextes.",
      "C": "Parce qu'elles avaient lieu tôt dans l'année scolaire.",
      "D": "Parce qu'elles proposaient des exercices complexes."
    },
    "reponse": "C",
    "reponseTexte": "Parce qu'elles avaient lieu tôt dans l'année scolaire.",
    "explication": "Un journaliste discute des évaluations nationales en français et mathématiques pour les élèves du cours élémentaire en janvier, et mentionne les critiques précédentes sur ces évaluations.",
    "indice": []
  },
  {
    "id": 212,
    "niveau": "B2",
    "titre": "",
    "transcription": "Pourquoi accumulons-nous des objets ? Avant tout, l'objet en fait nous signale. L'objet, c'est un peu nous. Je suis ce que j'ai, je suis ce que je porte, je suis ce que je possède. Et en fait, l'objet, via le regard d'autrui sur notre objet, nous permet de nous construire une identité, qui on est, notre intérêt. Tout ça passe effectivement par la médiation des objets, que ce soit les vêtements, que ce soit une voiture, que ce soit un lieu de résidence, des chaussures ou je ne sais quoi. Donc l'objet est très important.",
    "question": "Selon l'intervenante, pourquoi accumulons-nous des objets?",
    "options": {
      "A": "Pour afficher notre niveau de vie.",
      "B": "Pour affirmer notre personnalité.",
      "C": "Pour améliorer notre quotidien.",
      "D": "Pour imiter notre entourage."
    },
    "reponse": "B",
    "reponseTexte": "Pour affirmer notre personnalité.",
    "explication": "Une intervenante explique pourquoi les gens accumulent des objets et comment cela influence leur identité.",
    "indice": []
  },
  {
    "id": 213,
    "niveau": "B2",
    "titre": "",
    "transcription": "Swad Haddad, vous êtes libraire à Bordeaux. Parmi vos clients, vous en comptez de très jeunes. Dans un album pour enfants, l'image est-elle plus importante que le texte? Il y a des albums sans texte qui sont très forts. La petite marionnette de Gabriel Vincent en est un exemple. Les émotions sont véhiculées par un trait de crayon extrêmement évocateur et la moindre ligne aurait été de trop. Le bon travail éditorial consiste précisément à équilibrer le texte et l'image, tout en laissant l'auteur et l'illustrateur s'exprimer au mieux de leurs compétences. Il y a de grands artistes dans la littérature de jeunesse, qu'ils soient auteurs, illustrateurs ou les deux à la fois. Et il y a aussi des éditeurs passionnés. Ces rencontres donnent naissance à des petits chefs-d'œuvre.",
    "question": "Quel est le point de vue de la libraire interrogée?",
    "options": {
      "A": "La création d'un livre pour enfant de qualité est un travail d'équipe.",
      "B": "Les enfants préfèrent les livres illustrés en trois dimensions.",
      "C": "Pour faire un bon livre, l'auteur doit réaliser lui-même les illustrations.",
      "D": "Un livre pour enfant doit comporter le moins de texte possible."
    },
    "reponse": "A",
    "reponseTexte": "La création d'un livre pour enfant de qualité est un travail d'équipe.",
    "explication": "Swad Haddad, libraire à Bordeaux, parle des livres pour enfants et de l'importance relative des images par rapport au texte dans ces ouvrages.",
    "indice": []
  },
  {
    "id": 214,
    "niveau": "B2",
    "titre": "",
    "transcription": "Oh l'écriture inclusive, le langage inclusif est parfois caricaturé, alors qu'en fait, tout simplement, ça revient à dire que quand on parle d'hommes et de femmes dans un texte, quand dans un discours, on s'adresse à des hommes et des femmes, on ne peut pas tout accorder systématiquement aux masculins et invisibiliser complètement les femmes. On dit souvent aujourd'hui transformer la langue. En fait, il ne s'agit pas de transformer la langue, mais c'est de revenir au fait que les académiciens, les linguistes, progressivement, ont effacé la place des femmes dans l'histoire. La règle du masculin l'emporte sur le féminin n'a pas toujours existé, ça a été instauré à partir du XVIIe siècle. En fait, c'est au fil du temps qu'on a invisibilisé les femmes dans la langue et que ça a aussi contribué à ce qu'on invisibilise leur place dans l'histoire.",
    "question": "Quel est le point de vue de cette intervenante sur la langue française?",
    "options": {
      "A": "Elle encourage des propos stéréotypés en société.",
      "B": "Elle masque les inégalités de la société.",
      "C": "Elle perpétue des usages de la société médiévale.",
      "D": "Elle reflète une vision sexiste de la société."
    },
    "reponse": "D",
    "reponseTexte": "Elle reflète une vision sexiste de la société.",
    "explication": "Une intervenante parle de l'écriture inclusive et de la manière dont le langage a invisibilisé les femmes au fil du temps dans une discussion sur la langue française.",
    "indice": []
  },
  {
    "id": 215,
    "niveau": "B2",
    "titre": "",
    "transcription": "Oh Je suis une militante de la cuisine. Ce plaisir, j'éprouve le besoin de le partager et surtout, je considère que cette place dans les familles ne peut pas rester vacante. On est à une époque où on a la chance de bénéficier de l'industrie alimentaire, des livraisons, on peut manger un dantail français, voilà. D'accord, sauf malheureusement ceux pour qui c'est beaucoup trop cher et pour qui la cuisine est encore une contrainte. Mais il me semble que cette place doit être occupée par un des membres de la famille, l'homme, la femme, les enfants, peu importe, mais que ce plaisir-là, ce partage-là et ce lien familial et social doit être sauvegardé.",
    "question": "D'après cette personne, que permet la cuisine au sein d'une famille?",
    "options": {
      "A": "De conforter le rôle de chacun.",
      "B": "De faire des économies.",
      "C": "De renforcer les relations.",
      "D": "De transmettre des savoir-faire."
    },
    "reponse": "C",
    "reponseTexte": "De renforcer les relations.",
    "explication": "Une personne explique pourquoi elle considère la cuisine comme importante pour les familles et ce qu'elle apporte.",
    "indice": []
  },
  {
    "id": 216,
    "niveau": "B2",
    "titre": "",
    "transcription": "Bon, je suis prête. J'ai le cadeau pour le petit Romain. Tu as pris la carte et le plan d'Arnaud? La carte est dans la voiture, mais c'est toi qui as le plan. Mais non, je te l'ai donné avec le faire-part. T'es sûr? Je ne sais pas ce que j'en ai fait. Bon, ben, ça fait rien. On va bien trouver. Oui, j'espère. La maternité est juste derrière le restaurant, près de la rivière. Tu sais, celui où on a fêté l'anniversaire de mariage de mes parents. Ah oui, j'y suis retourné avec mes collègues pour fêter ma nomination comme directeur.",
    "question": "Quelle est la raison du déplacement de ce couple?",
    "options": {
      "A": "Un mariage.",
      "B": "Un anniversaire.",
      "C": "Une naissance.",
      "D": "Une promotion."
    },
    "reponse": "C",
    "reponseTexte": "Une naissance.",
    "explication": "Un couple cherche un plan pour se rendre à la maternité. Ils discutent de l'endroit où ils ont mis le plan et se rappellent des lieux qu'ils connaissent.",
    "indice": []
  },
  {
    "id": 217,
    "niveau": "B2",
    "titre": "",
    "transcription": "Trois coiffeurs sur quatre déclarent avoir au moins un problème de santé. Alors il y a bien sûr le fait de travailler le tout courbé, la tête penchée, le coude levé. Il y a aussi les produits utilisés, teinture ou autre. Enfin, il y a aussi la charge mentale, comprenzez. Les clients, beaucoup, n'hésitent pas à se décharger sur leur coiffeur. Infidélité du conjoint, problème au boulot, maladie incurable ou encore soucis financiers. Les coiffeurs se transforment de plus en plus souvent en psy face à des clients en mal de confident. Et ça a des répercussions sur leur santé, à eux. Une sollicitation émotionnelle trop forte peut les fragiliser. La patronne d'un salon confie ainsi être épuisée à la fin de sa journée, non pas par son travail en tant que tel, mais pour avoir écouté ses clientes. Elle fait carrément un détour désormais avant de rentrer chez elle. Pourquoi? Juste pour profiter du silence.",
    "question": "Selon l'intervenante, à quoi sont principalement liés les problèmes de santé des coiffeurs?",
    "options": {
      "A": "À l'emploi de produits chimiques.",
      "B": "Au manque de considération des patrons.",
      "C": "Aux conversations intimes avec les clients.",
      "D": "Aux horaires de travail en décalé."
    },
    "reponse": "C",
    "reponseTexte": "Aux conversations intimes avec les clients.",
    "explication": "Une coiffeuse explique les problèmes de santé des coiffeurs, notamment à cause des conversations avec les clients.",
    "indice": []
  },
  {
    "id": 218,
    "niveau": "B2",
    "titre": "",
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
    "explication": "Un élève demande à un commerçant d'afficher une affiche pour une collecte de jouets organisée par son école. Ils discutent aussi de l'endroit où déposer les jouets et du carton pour les collecter.",
    "indice": []
  },
  {
    "id": 219,
    "niveau": "B2",
    "titre": "",
    "transcription": "Monsieur Rignon, vous êtes architecte et vous allez nous présenter une avenue à Paris datant de la fin du XIXe siècle. La façade haussmannienne est-elle toujours en pierre? Oui, c'était une obligation qui figurait dans l'acte de vente. C'était la manière finalement dont Haussmann légiférait puisqu'il n'y avait pas de loi. Pourquoi? Le permis de construire n'existait pas? Le permis de construire en effet viendra plus tard. Donc on leur disait simplement, vous devez utiliser de la pierre pour les façades? C'est ça. Quand les propriétaires achetaient le terrain pour construire, on leur imposait une pierre de taille. Dans les belles avenues comme celle de l'Opéra, on indiquait aussi que les lignes devaient filer, pour donner une certaine harmonie, une certaine homogénéité. Une certaine monotonie pour ceux qui n'apprécient pas cette esthétique. L'idée d'Haussmann, c'était qu'à partir du moment où on construisait un immeuble dans une avenue, les immeubles suivants devaient le prendre comme modèle.",
    "question": "Quel principe retrouve-t-on dans l'architecture haussmannienne?",
    "options": {
      "A": "L'absence d'éléments ornementaux.",
      "B": "La limitation du nombre d'étages.",
      "C": "Le respect d'obligations légales.",
      "D": "L'utilisation d'un matériau unique."
    },
    "reponse": "D",
    "reponseTexte": "L'utilisation d'un matériau unique.",
    "explication": "Un architecte explique l'obligation d'utiliser la pierre pour les façades des immeubles haussmanniens à Paris à la fin du XIXe siècle.",
    "indice": []
  },
  {
    "id": 220,
    "niveau": "B2",
    "titre": "",
    "transcription": "Le sport aurait commencé, d'après les anthropologues, d'après les historiens, d'après les archéologues, quand la chasse est devenue un sport. C'est-à-dire qu'on a cessé de chasser pour se nourrir et chasser pour le loisir, chasser pour le symbolique. Le meilleur chasseur, c'est celui qui va devenir le chef du village. Celui qui rapporte le plus de têtes d'animaux, c'est le plus fort physiquement, donc il s'impose symboliquement. Donc le lien entre la chasse et la guerre est direct, parce que si on fait encore un autre lien, celui qui est un bon chasseur va être un bon guerrier.",
    "question": "D'après cet intervenant, à quoi peut prétendre le meilleur chasseur d'une communauté?",
    "options": {
      "A": "A un poste de responsabilité du village.",
      "B": "A un temps de loisir plus étendu.",
      "C": "A une place spéciale dans l'histoire.",
      "D": "A une plus grosse part de nourriture."
    },
    "reponse": "A",
    "reponseTexte": "A un poste de responsabilité du village.",
    "explication": "Un intervenant explique l'importance de la chasse dans une communauté et comment le meilleur chasseur est perçu.",
    "indice": []
  },
  {
    "id": 221,
    "niveau": "B2",
    "titre": "",
    "transcription": "Et la première indication que les organismes, et en particulier les animaux, avaient une horloge interne, on la doit à un médecin suisse qui observait les abeilles en prenant son petit déjeuner à la terrasse de son chalet. Elles étaient attirées par la confiture. Et puis un jour, il faisait mauvais, il a pris son petit déjeuner à l'intérieur, donc les abeilles ne pouvaient pas sentir la confiture, mais elles sont quand même venues la chercher à l'heure où ils prenaient son petit déjeuner, à l'heure normale. Donc c'est une indication qu'il y avait pas juste un rythme, mais un mécanisme de mesure du temps.",
    "question": "Quelle conclusion le savant a-t-il tiré en observant les abeilles?",
    "options": {
      "A": "Elles ont la notion du temps chronologique.",
      "B": "Elles redoutent de s'approcher des humains.",
      "C": "Elles sont attirées par la lumière du soleil.",
      "D": "Elles sont un cas à part chez les animaux."
    },
    "reponse": "A",
    "reponseTexte": "Elles ont la notion du temps chronologique.",
    "explication": "Un médecin suisse observe des abeilles attirées par la confiture pendant son petit-déjeuner au chalet. Un jour, malgré la pluie, les abeilles viennent à l'heure habituelle.",
    "indice": []
  },
  {
    "id": 222,
    "niveau": "B2",
    "titre": "",
    "transcription": "Allô, bonjour Madame Samblé. Je suis désolé, il y a eu un problème informatique à ma vente. Je ne peux pas retirer l'argent. Ou bien je vous règle mon loyer dans deux ou trois jours, ou bien je vous apporte un chèque demain, si vous préférez. Non, ce n'est pas la peine. Deux ou trois jours, ça n'est pas si long. Ok, merci beaucoup.",
    "question": "Que m'a fait la propriétaire?",
    "options": {
      "A": "Elle va appeler le locataire.",
      "B": "Elle va attendre un petit peu.",
      "C": "Elle va refuser le paiement.",
      "D": "Elle va revenir une autre fois."
    },
    "reponse": "B",
    "reponseTexte": "Elle va attendre un petit peu.",
    "explication": "Un locataire appelle sa propriétaire pour lui expliquer qu'il ne peut pas payer son loyer immédiatement à cause d'un problème informatique. Il propose de payer dans quelques jours ou de lui apporter un chèque le lendemain.",
    "indice": []
  },
  {
    "id": 223,
    "niveau": "B2",
    "titre": "",
    "transcription": "Allô, Denis? C'est Joël. Merci pour ta carte. Alors, ces vacances en célibataire? T'es parti tout seul faire du golf, c'est ça? Oui, j'avais envie de connaître le golf. C'était super. Pas facile, mais super. Ah bon? Mais t'es pas vraiment sportif, toi. Le golf. Quand j'ai lu ta carte, j'en revenais pas. Non, mais j'ai bien l'intention de recommencer. Pas toute l'année, hein. Un stage l'été, c'est suffisant. Eh ben, à ce rythme, tu vas pas être bon très très vite, hein. Qu'est-ce que tu crois? Je ne suis pas si mauvais.",
    "question": "Qu'est-ce qui fait rire la femme?",
    "options": {
      "A": "Que l'homme soit parti seul en vacances.",
      "B": "Que l'homme ait progressé au golf.",
      "C": "Que l'homme lui ait envoyé une carte.",
      "D": "Que l'homme se soit mis à faire du sport."
    },
    "reponse": "D",
    "reponseTexte": "Que l'homme se soit mis à faire du sport.",
    "explication": "Joël appelle Denis pour lui parler de ses vacances où il a commencé à jouer au golf. Denis est surpris car Joël n'est pas sportif.",
    "indice": []
  },
  {
    "id": 224,
    "niveau": "B2",
    "titre": "",
    "transcription": "Le Grand Angle nous emmène ce matin à bord d'un bus transformé en salon de beauté. Il sillonne actuellement les communes rurales et les quartiers défavorisés de l'île de France et de l'Oise. Il offre des soins gratuits aux femmes isolées ou en situation de précarité. Reportage de Yann Gallic à la Ferté-Sous-Jouar en Seine-et-Marne. Cinq enfants, Brigitte n'est pas une habituée des salons de beauté, faute de temps et de moyens. Mais aujourd'hui, elle va pouvoir prendre soin d'elle pendant une heure, confortablement installée devant un grand miroir entouré de lumière palée. On a appris à se masser au niveau du visage, à nettoyer, à faire un gommage, juste à prendre soin de notre peau. C'est la première fois que je m'occupe de moi parce qu'entre le ménage et les enfants, on n'a pas trop de temps. Le reportage de Yann Gallic.",
    "question": "",
    "options": {
      "A": "D'un projet de recrutement.",
      "B": "D'une campagne d'action sociale.",
      "C": "D'une formation professionnelle.",
      "D": "D'une opération publicitaire."
    },
    "reponse": "B",
    "reponseTexte": "D'une campagne d'action sociale.",
    "explication": "Un bus transformé en salon de beauté offre des soins gratuits aux femmes en situation de précarité. Brigitte, une femme de ménage, profite de ce service pour prendre soin d'elle.",
    "indice": []
  },
  {
    "id": 225,
    "niveau": "B2",
    "titre": "",
    "transcription": "Bonjour Marie-Nicole Lemieux. Bonjour. Merci beaucoup d'être avec nous. Ça me fait très plaisir. Tout d'abord, quel français est-ce que vous parlez, vous? C'est un français que j'espère être international, donc vous êtes capable de me comprendre, c'est déjà ça. Mais disons aussi que j'ai la richesse de tout le patrimoine québécois, qui contient évidemment des mots anciens, très anciens, qu'on a gardés, comme là, présentement, nous ne discutons pas, nous jasons. Et puis aussi, d'anglicisme, le régime britannique a vraiment teinté aussi notre français.",
    "question": "Selon Marie-Nicole Lemieux, quelle est la spécificité du français qu'elle parle?",
    "options": {
      "A": "Il est caractérisé par son rythme.",
      "B": "Il est protégé par des apports lexicaux variés.",
      "C": "Il est protégé par les académiciens.",
      "D": "Il est utilisé par une minorité de locuteurs."
    },
    "reponse": "B",
    "reponseTexte": "Il est protégé par des apports lexicaux variés.",
    "explication": "Marie-Nicole Lemieux parle de la langue française qu'elle utilise, en particulier le français québécois, et de ses caractéristiques.",
    "indice": []
  },
  {
    "id": 226,
    "niveau": "B2",
    "titre": "",
    "transcription": "Charlotte, tu as trouvé une place pour te garer ? Oui, mais j'ai mis au moins un quart d'heure. Entre les emplacements réservés et les arrêts minutes... Et tu t'es garé où? Rue Colbert, après l'intersection avec la rue en sens interdit. Tu as pensé à prendre un ticket de stationnement? Non, c'est gratuit dans ce quartier. Plus maintenant, la réglementation vient de changer. Bon, j'y retourne avant le passage des policiers municipaux.",
    "question": "Quel est le problème soulevé?",
    "options": {
      "A": "La voiture est interdite en centre-ville.",
      "B": "Le sens de la circulation été modifié.",
      "C": "Le stationnement est devenu payant.",
      "D": "Les embouteillages sont fréquents."
    },
    "reponse": "C",
    "reponseTexte": "Le stationnement est devenu payant.",
    "explication": "Charlotte et une autre personne discutent des difficultés pour se garer en ville. Charlotte explique où elle a trouvé une place et mentionne que le stationnement est devenu payant.",
    "indice": []
  },
  {
    "id": 227,
    "niveau": "B2",
    "titre": "",
    "transcription": "Quels sont les objectifs de carrière des étudiants ? Vous savez, hommes et femmes aspirent à utiliser salaire et promotion non seulement pour pouvoir utiliser une entreprise comme un nom sur un CV, mais aussi pour obtenir un réel accélérateur de carrière. Plus simplement, ce qui attire hommes et femmes, c'est d'envisager de pouvoir gagner beaucoup plus. Les kilos euros de leur premier salaire ne sauraient donc être un frein à leur entrée dans une société, tant que ces jeunes diplômés peuvent se projeter dans une globalité liant augmentation salariale et promotion interne rapide.",
    "question": "Que désirent les jeunes en commençant leur carrière?",
    "options": {
      "A": "Une ascension professionnelle accompagnée de revenus confortables.",
      "B": "Une nomination à un premier poste valorisant au sein de l'entreprise.",
      "C": "Une opportunité de multiplier les contrats dans différentes entreprises.",
      "D": "Une reconnaissance rapide de leurs supérieurs sur les résultats obtenus."
    },
    "reponse": "A",
    "reponseTexte": "Une ascension professionnelle accompagnée de revenus confortables.",
    "explication": "Un texte discute des aspirations professionnelles des jeunes diplômés, notamment leur désir d'augmenter leur salaire et d'obtenir des promotions rapides.",
    "indice": []
  },
  {
    "id": 228,
    "niveau": "B2",
    "titre": "",
    "transcription": "Parlons maintenant de l'enseignement à distance. Marielle Barraud, vous nous présentez un logiciel qui fait des filtres révision à votre place, c'est ça? Finalement, vous voulez inciter nos auditeurs étudiants à se tourner les pouces. Ce n'est pas exactement ça. On vous propose en fait de travailler plus efficacement. C'est un logiciel qui s'adapte à toutes les matières et qui vous fait réviser. Le principe, c'est que vous numérisez en un temps record n'importe quel cours. Vous faites vous-même votre fiche de révision que vous saisissez sur votre clavier et le logiciel vous interroge de la façon la plus adéquate pour vous faire apprendre. Il pose des questions en rafale et s'adapte à vos difficultés en mettant l'accent là où vous avez des points faibles.",
    "question": "De quoi est-il question dans cette émission?",
    "options": {
      "A": "D'un outil qui facilite l'apprentissage, quelle que soit la discipline étudiée.",
      "B": "De la bonne méthode de révision d'un cours quand on est pris par le temps.",
      "C": "De la difficulté à rédiger des cours motivants pour les jeunes étudiants.",
      "D": "Des limites de l'enseignement à distance pour certaines disciplines."
    },
    "reponse": "A",
    "reponseTexte": "D'un outil qui facilite l'apprentissage, quelle que soit la discipline étudiée.",
    "explication": "Marielle Barraud présente un logiciel de révision qui s'adapte aux besoins des étudiants. Elle explique son fonctionnement et son utilité pour différentes matières.",
    "indice": []
  },
  {
    "id": 229,
    "niveau": "B2",
    "titre": "",
    "transcription": "Les entreprises qui décochent ont fait beaucoup pour l'intégration des idées, mais elles doivent faire davantage. Je pense qu'on peut se faire un ami. On a encore besoin d'être sensibilisés, d'être ouverts. Donc je pense que c'est un défi de tous les jours. Si on ne le fait pas, on y perd parce qu'il y a tellement de gains à l'immigration. On nous a parlé de sourire vers d'autres cultures, on y gagne. On apprend sur la nôtre, on apprend sur les autres. Et pour les lieux du travail également, toute la richesse, la diversité que les autres cultures peuvent nous apporter. Quand on parle d'un contexte de cohabitation, on travaille à l'échelle de la planète. Il faut avoir un regard beaucoup plus large.",
    "question": "Selon la personne interrogée, pour quelles raisons les entreprises québécoises doivent-elles continuer leurs efforts pour l'intégration des immigrés?",
    "options": {
      "A": "Parce qu'elles ont beaucoup à apprendre d'eux.",
      "B": "Parce qu'elles s'implanteront mieux ensuite à l'étranger.",
      "C": "Parce qu'elles sont en manque de main-d'œuvre.",
      "D": "Parce qu'elles y sont contraintes par la mondialisation."
    },
    "reponse": "A",
    "reponseTexte": "Parce qu'elles ont beaucoup à apprendre d'eux.",
    "explication": "Une personne parle des avantages de l'immigration et de la diversité culturelle dans les entreprises québécoises. Elle explique pourquoi ces entreprises doivent continuer à faire des efforts pour intégrer les immigrés.",
    "indice": []
  },
  {
    "id": 230,
    "niveau": "B2",
    "titre": "",
    "transcription": "Tu as vu ? J'ai découvert le gâteau préféré. Tu as pris un lot de 4? Ça fait 4 lots. Prends-en un. Il y en a 4 pour le prix de 4. Pula, attention! Parce que j'ai entendu à la radio que les supermarchés avaient des pays de 100 euros pour des lots comme ça. Qu'est-ce que tu veux dire par des lots comme ça? Tu achètes un livre de 4 papiers de gâteau en 200 francs, c'est moins cher que ce que tu achètes séparément. Et en fait, c'est du vol. Ah bon? Attends, je vais aller le rééquilibrer.",
    "question": "Pourquoi les supermarchés ont-ils été condamnés à payer les amendes?",
    "options": {
      "A": "Ils affichaient des prix erronés.",
      "B": "Ils annonçaient de fausses promotions.",
      "C": "Ils soldaient des articles périmés.",
      "D": "Ils vendaient des marchandises à perte."
    },
    "reponse": "B",
    "reponseTexte": "Ils annonçaient de fausses promotions.",
    "explication": "Deux personnes discutent d'une promotion dans un supermarché. L'une a acheté plusieurs lots de gâteaux et l'autre trouve que c'est une arnaque.",
    "indice": []
  },
  {
    "id": 231,
    "niveau": "B2",
    "titre": "",
    "transcription": "Salut Géraldine, ça va ? Non, pas trop. Tu sais que je cherchais du travail. Eh bien, maintenant que je l'ai trouvé, je ne suis pas très contente. Pourquoi? Tu ne touches pas assez d'argent? Non, c'est que deux fois par semaine, je commence à 6h du matin et à 1h de chez moi en plus. Oh, c'est tôt! Et comment tu vas faire pour les enfants? Oh, Gilles va s'en occuper. Mais moi, imagine! Je ne sais pas comment je vais faire pour récupérer. Tu vas dormir les week-ends!",
    "question": "De quoi se plaint Géraldine?",
    "options": {
      "A": "De ses difficultés à se réveiller le matin.",
      "B": "De son dernier salaire qui est insuffisant.",
      "C": "De son emploi du temps professionnel.",
      "D": "De son manque d'organisation habituel."
    },
    "reponse": "C",
    "reponseTexte": "De son emploi du temps professionnel.",
    "explication": "Géraldine parle à une amie de son nouveau travail où elle doit commencer tôt deux fois par semaine et se plaint des horaires.",
    "indice": []
  }
];
