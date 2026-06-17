import type { Tutorial } from "@/types/content";

// ============================================================
// Source unique des tutoriels.
// La galerie (/tutoriels) et les pages de détail (/tutoriels/[slug])
// lisent ce même tableau. Pour ajouter un tutoriel : ajouter un objet.
// Migration future vers un CMS : remplacer ce tableau par un fetch,
// sans toucher aux pages ni aux composants.
// ============================================================

export const tutorials: Tutorial[] = [
  {
    slug: "01-interface-navigation",
    number: 1,
    title: "Interface & navigation",
    description:
      "Découvrez l'interface de Blender, configurez les paramètres essentiels et apprenez à naviguer dans la scène 3D.",
    coverImage: "/images-tutoriels/Tutoriel-1_pres.png",
    cardSummary:
      "Comprendre l'interface de Blender est essentiel pour repérer rapidement les outils et les fenêtres. Ce tutoriel couvre la découverte du cadre et de l'espace de travail, les paramètres de base et la navigation dans la scène 3D.",
    sections: [
      {
        label: "Découverte de l'interface",
        heading: "L'interface de Blender",
        blocks: [
          {
            type: "note",
            lead: "!!!",
            text: "Si vous êtes sur Mac il est conseillé d'utiliser une souris.",
          },
          {
            type: "paragraph",
            text: "À la première ouverture du logiciel, ce pop-up te demande la langue du logiciel, le thème et quelques réglages. Laisse la langue en anglais — si tu as des questions spécifiques sur un outil il sera plus facile de trouver des informations si tu connais le nom de l'outil en anglais.",
          },
          {
            type: "image",
            src: "/tutoriels/T1.1.Préférences.png",
            caption: "Pop-up de configuration au premier lancement de Blender.",
          },
          {
            type: "paragraph",
            text: "Ceci étant configuré, tu te retrouves face à la scène par défaut, qui contient trois éléments : un cube, une caméra et une source lumineuse. Laisse-les pour l'instant, nous reviendrons dessus par la suite.",
          },
          {
            type: "paragraph",
            text: "Pour commencer, on peut séparer le logiciel en deux parties : **le cadre** et l'**espace de travail**.",
          },
          { type: "subheading", text: "Le cadre" },
          {
            type: "image",
            src: "/tutoriels/T1.2.Blender-cadre-menus.png",
            caption: "Image du cadre sans l'espace de travail.",
          },
          {
            type: "paragraph",
            text: "En haut, nous avons la barre des menus divisée en 3 parties :",
          },
          {
            type: "notionGrid",
            items: [
              { term: "Gauche", def: "Nous pouvons gérer les fichiers et les réglages du logiciel." },
              { term: "Centre", def: "Les templates d'espaces de travail." },
              { term: "Droite", def: "La gestion des scènes et des calques." },
            ],
          },
          { type: "paragraph", text: "En bas, y sont indiqués :" },
          {
            type: "notionGrid",
            items: [
              { term: "Gauche", def: "Des actions qu'on peut effectuer." },
              { term: "Droite", def: "La version du logiciel qu'on utilise." },
            ],
          },
          { type: "subheading", text: "L'espace de travail" },
          {
            type: "image",
            src: "/tutoriels/T1.3.Blender-espace-de-travail.png",
            caption: "Image de l'espace de travail sans le cadre.",
          },
          {
            type: "paragraph",
            text: "L'espace est constitué de plusieurs fenêtres. De base nous sommes dans l'espace «Layout». Nous pouvons changer d'espace de travail sur la barre des menus qu'on a vu précédemment, ou personnaliser l'espace selon nos besoins.",
          },
          {
            type: "paragraph",
            text: "En haut à gauche, le pictogramme de la fenêtre actuelle est affiché. En cliquant sur ce bouton, une liste apparaît avec tous les types de fenêtres.",
          },
          {
            type: "image",
            src: "/tutoriels/T1.4.Fenêtres.png",
            caption: "Liste des types de fenêtres disponibles.",
          },
        ],
      },
      {
        label: "Préférences",
        heading: "Paramètres et réglages",
        blocks: [
          {
            type: "paragraph",
            text: "Veillez à bien enregistrer au début de chaque projet le fichier dans un dossier. Dans le dossier vous verrez trois éléments :",
          },
          {
            type: "notionGrid",
            items: [
              { term: "projet.blend", def: "Le fichier Blender du projet." },
              { term: "projet.blend1", def: "La sauvegarde précédente, au cas où le projet ne s'ouvre plus." },
              { term: "assets", def: "Le dossier où sont stockés les éléments importés : materials, models, hdrs, etc." },
            ],
          },
          {
            type: "paragraph",
            text: "Si vous voulez importer ou exporter des modèles 3D, le format à privilégier est le **.glb / .gltf**, car il est léger et prend tout en compte : maillage, textures, animations, etc.",
          },
          {
            type: "image",
            src: "/tutoriels/T1.5.Enregistrer-Importer-Exporter.png",
            caption: "Enregistrement et options d'import/export dans Blender.",
          },
          {
            type: "paragraph",
            text: "Dans «Edit» ouvrez «Preferences». Dans la catégorie «Get Extensions» vous pouvez trouver des extensions : des outils supplémentaires qui ne sont pas dans la version de base de Blender.",
          },
          {
            type: "note",
            lead: "Exemple :",
            text: "Blenderkit — une banque de textures, modèles 3D, HDRi's, etc.",
          },
          {
            type: "image",
            src: "/tutoriels/T1.6.Installer-extension.png",
            caption: "La catégorie Get Extensions dans les Preferences.",
          },
          {
            type: "paragraph",
            text: "Ensuite, dans «Add-ons», vous pouvez également installer des extensions que vous avez téléchargées sur internet depuis le bouton en haut à droite.",
          },
          {
            type: "paragraph",
            text: "Il est important de choisir quelles extensions vont tourner ou non. Certains add-ons sont plus gourmands que d'autres, donc veillez à sélectionner uniquement ceux que vous utiliserez.",
          },
          {
            type: "image",
            src: "/tutoriels/T1.7.Activer-extension.png",
            caption: "La liste des add-ons actifs dans les Preferences.",
          },
          {
            type: "paragraph",
            text: "Pour finir avec les préférences système, cochez la case «Depth» dans la catégorie Navigation. Cette option permet de ne pas être bloqué par les objets durant la navigation — vous comprendrez par la suite pourquoi c'est utile.",
          },
        ],
      },
      {
        label: "Navigation",
        heading: "Se déplacer dans la scène",
        blocks: [
          {
            type: "paragraph",
            text: "Maintenant que la petite phase théorique est terminée, nous pouvons commencer la prise en main du logiciel. Pour se déplacer dans le «3D viewport» il y a 3 mouvements :",
          },
          {
            type: "shortcuts",
            rows: [
              { keys: "Bouton molette + [[Shift]]", desc: "Déplacement horizontal / vertical" },
              { keys: "Bouton molette", desc: "Rotation" },
              { keys: "Bouton molette + [[Ctrl]]", desc: "Zoom / dé-zoom" },
            ],
          },
          {
            type: "paragraph",
            text: "On peut aussi se déplacer depuis les boutons à droite du viewport, mais connaître ces raccourcis vous fera gagner beaucoup de temps.",
          },
          {
            type: "paragraph",
            text: "Vous pouvez vous entraîner comme sur la vidéo ci-dessous pour assimiler les touches.",
          },
          {
            type: "video",
            youtubeId: "ZOVeLQWa7wI",
          },
          {
            type: "paragraph",
            text: "Voilà, vous savez comment est structuré le logiciel et comment vous y déplacer. Nous pouvons continuer vers la modélisation.",
          },
        ],
      },
    ],
  },
  {
    slug: "02-modelisation",
    number: 2,
    title: "Modélisation",
    description:
      "Apprenez à agir sur les objets, maîtrisez le Edit Mode et ses outils essentiels pour construire n'importe quelle forme 3D.",
    coverImage: "/images-tutoriels/Tutoriel-2_pres.png",
    cardSummary:
      "La modélisation polygonale est le fondement de toute création 3D dans Blender. Ce tutoriel couvre les transformations d'objets (déplacement, échelle, rotation), le Edit Mode et ses outils essentiels — extrusion, Loop Cut, Bevel, Insert, Knife — pour construire n'importe quelle forme géométrique.",
    sections: [
      {
        label: "Déplacement",
        heading: "Actions sur un objet",
        blocks: [
          {
            type: "paragraph",
            text: "Maintenant que tu sais te déplacer toi, on va pouvoir agir sur les objets. Pour commencer clic sur le cube au centre de la scène (quand il est sélectionné son contour est en orange et le point au centre est son origine) et appuie sur la touche [[G]]. Tu peux déplacer l'objet librement dans la scène et si tu veux le déplacer sur un des 3 axes appuie sur [[X]], [[Y]] ou [[Z]].",
          },
          {
            type: "video",
            youtubeId: "YkRwP-sgWNg",
          },
          {
            type: "paragraph",
            text: "Ensuite, si tu veux changer l'échelle d'un objet appuie sur la touche [[S]], tu pourras agrandir ou rétrécir l'objet. Tu peux toujours appuyer sur [[X]], [[Y]] ou [[Z]] si tu veux que l'échelle se fasse que sur un des trois axes.",
          },
          {
            type: "video",
            youtubeId: "ekBzmla9PuU",
          },
          {
            type: "paragraph",
            text: "Finalement, si tu veux changer l'orientation d'un objet appuie sur la touche [[R]], tu pourras tourner l'objet. Tu peux toujours appuyer sur [[X]], [[Y]] ou [[Z]] si tu veux que la rotation se fasse que sur un des trois axes.",
          },
          {
            type: "video",
            youtubeId: "AJtvugF_TKs",
          },
          {
            type: "shortcuts",
            rows: [
              { keys: "[[G]]", desc: "Déplacer l'objet — suivi de [[X]], [[Y]] ou [[Z]] pour contraindre l'axe" },
              { keys: "[[S]]", desc: "Mettre à l'échelle — suivi de [[X]], [[Y]] ou [[Z]] pour un seul axe" },
              { keys: "[[R]]", desc: "Faire pivoter — suivi de [[X]], [[Y]] ou [[Z]] pour un seul axe" },
            ],
          },
        ],
      },
      {
        label: "L'Edit Mode",
        heading: "Entrer dans le maillage",
        blocks: [
          {
            type: "paragraph",
            text: "Jusqu'ici tu étais dans l'**Object Mode** : tu les déplaçais, les tournais, les mettais à l'échelle comme des blocs entiers. Le **Edit Mode** permet de remodeler la géométrie de l'objet point par point.",
          },
          {
            type: "paragraph",
            text: "Pour basculer entre les deux modes, sélectionne l'objet et appuie sur [[Tab]]. Tu peux aussi changer de mode depuis le menu déroulant en haut à gauche du Viewport.",
          },
          {
            type: "image",
            src: "/tutoriels/T2.04.object-edit-mode.png",
            caption: "Sélecteur de mode en haut à gauche du Viewport",
          },
          {
            type: "paragraph",
            text: "En Edit Mode, le mesh, l'ensemble des points qui composent l'objet, devient visible. On en distingue trois types, auxquels correspondent trois modes de sélection accessibles par les touches [[1]], [[2]] et [[3]] du clavier principal ou en haut à gauche de la fenêtre layout :",
          },
          {
            type: "notionGrid",
            items: [
              { term: "Vertex (1)", def: "Point dans l'espace 3D." },
              { term: "Edge (2)", def: "Arête reliant deux vertices." },
              { term: "Face (3)", def: "Surface plane délimitée par des edges. Pour un maillage propre une face doit être composée de 4 edges." },
            ],
          },
          {
            type: "image",
            src: "/tutoriels/T2.05.vertex.edge-face.png",
            caption: "Le même objet en mode Vertex, Edge et Face",
          },
          {
            type: "shortcuts",
            rows: [
              { keys: "[[Tab]]", desc: "Basculer entre Object Mode et Edit Mode" },
              { keys: "[[1]] / [[2]] / [[3]]", desc: "Mode Vertex / Edge / Face" },
            ],
          },
        ],
      },
      {
        label: "Options de sélection",
        heading: "Sélectionner la géométrie",
        blocks: [
          {
            type: "paragraph",
            text: "Avant d'utiliser un outil, il faut sélectionner ce sur quoi l'appliquer. Blender propose plusieurs méthodes de sélection :",
          },
          {
            type: "shortcuts",
            rows: [
              { keys: "Clic gauche", desc: "Sélectionner un élément" },
              { keys: "[[A]]", desc: "Tout sélectionner / tout désélectionner" },
              { keys: "[[Alt]] + clic sur edge", desc: "Sélectionner une edge loop entière" },
              { keys: "[[Ctrl]] + clic", desc: "Sélectionner le chemin le plus court entre deux éléments" },
              { keys: "[[B]]", desc: "Sélection en boîte — cliquer-glisser pour sélectionner une zone" },
              { keys: "[[C]]", desc: "Sélection en pinceau circulaire — molette pour changer la taille" },
              { keys: "[[Shift]] + clic", desc: "Ajouter à la sélection existante" },
              { keys: "[[X]]", desc: "Supprimer la sélection" },
            ],
          },
          {
            type: "note",
            lead: "!!!",
            text: "La sélection par edge loop ([[Alt]] + clic) est l'une des plus utilisées en pratique. Elle permet de sélectionner d'un coup toute une boucle d'arêtes qui fait le tour d'un cylindre ou encercle un membre.",
          },
        ],
      },
      {
        label: "Outils",
        heading: "Construire la géométrie",
        blocks: [
          {
            type: "note",
            lead: "!!!",
            text: "Tu peux dès à présent supprimer tous les objets de la scène, en les sélectionnant et en appuyant sur [[X]] comme on l'a vu précédemment.",
          },
          {
            type: "paragraph",
            text: "Voilà on peut commencer à modéliser. Je vais te parler des outils nécessaires pour modéliser l'objet de ton choix. Pour l'exemple je vais prendre le blender (mixeur) que tu peux voir dans la vidéo de la home page, pour le tutoriel je te conseille de faire le même objet que moi.",
          },
          {
            type: "note",
            lead: "!!!",
            text: "Quand on veut reproduire un objet qui existe, le mieux est de respecter son échelle réelle — exemple : ne pas faire une table de 2 par 5 mètres.",
          },
          { type: "subheading", text: "Extrusion — [[E]]" },
          {
            type: "paragraph",
            text: "Appuie sur [[Shift]] + [[A]] et sélectionne le plan dans la catégorie «mesh». Appuie sur [[N]] et fais en sorte que le plan fasse 0.15m par 0.15m. Sélectionne la face, appuie sur [[E]] et ensuite [[Z]] et déplace la souris pour créer une nouvelle géométrie sur l'axe Z. Si tu veux être précis sur la hauteur tu peux taper la distance (dans notre cas 0.20m). Et finalement réduis légèrement l'échelle de la face du haut.",
          },
          {
            type: "video",
            youtubeId: "hS14_MHv5Y0",
          },
          { type: "subheading", text: "Loop Cut — [[Ctrl]] + [[R]]" },
          {
            type: "paragraph",
            text: "Crée une boucle d'arêtes qui coupe le mesh en passant par les faces adjacentes. Survole une arête : un aperçu jaune montre où la coupe sera placée. Clique pour confirmer, puis déplace la souris pour positionner précisément la coupe, ou clique droit pour la centrer. Avant de cliquer pour confirmer, tu peux faire défiler la molette pour multiplier le nombre de coupes parallèles et en bas à gauche de la fenêtre layout tu peux modifier manuellement toutes les options.",
          },
          {
            type: "video",
            youtubeId: "zkP5ymVuJkc",
          },
          { type: "subheading", text: "Bevel — [[Ctrl]] + [[B]]" },
          {
            type: "paragraph",
            text: "Arrondit les arêtes sélectionnées en les remplaçant par plusieurs arêtes intermédiaires. Sélectionne les 4 arêtes verticales, appuie sur [[Ctrl]] + [[B]] et déplace la souris pour contrôler la largeur du biseau. Fais défiler la molette pour ajouter des segments et obtenir un arrondi plus lisse.",
          },
          {
            type: "note",
            lead: "!!!",
            text: "Le Bevel fonctionne aussi sur les vertices : [[Ctrl]] + [[Shift]] + [[B]]. Il arrondit le coin en créant un polygone à la place du point.",
          },
          {
            type: "video",
            youtubeId: "ehSnKsG3848",
          },
          { type: "subheading", text: "Insert — [[I]]" },
          {
            type: "paragraph",
            text: "Sélectionne les deux faces (haut et bas), appuie sur [[I]] pour créer une face plus petite à l'intérieur de la(les) face(s) sélectionnée(s), comme un cadre. Déplace la souris pour contrôler l'épaisseur du cadre intérieur.",
          },
          {
            type: "video",
            youtubeId: "soEDDDy3Cp8",
          },
          { type: "subheading", text: "Knife — [[K]]" },
          {
            type: "paragraph",
            text: "Coupe le mesh librement en traçant des lignes. Clique pour poser des points, [[Entrée]] pour valider la coupe. Cet outil permet d'ajouter de la géométrie exactement là où tu en as besoin, sans passer par un Loop Cut.",
          },
          {
            type: "video",
            youtubeId: "SvGf9BP6gjg",
          },
          {
            type: "shortcuts",
            rows: [
              { keys: "[[Shift]] + [[A]]", desc: "Ajouter un objet à la scène" },
              { keys: "[[N]]", desc: "Ouvrir le panneau des propriétés" },
              { keys: "[[E]]", desc: "Extrusion de la sélection" },
              { keys: "[[Ctrl]] + [[R]]", desc: "Loop Cut" },
              { keys: "[[Ctrl]] + [[B]]", desc: "Bevel sur les arêtes" },
              { keys: "[[Ctrl]] + [[Shift]] + [[B]]", desc: "Bevel sur les vertices" },
              { keys: "[[I]]", desc: "Insert — créer une face à l'intérieur d'une face" },
              { keys: "[[K]]", desc: "Knife — couper le mesh librement" },
              { keys: "[[Entrée]]", desc: "Valider la coupe (Knife)" },
            ],
          },
          {
            type: "paragraph",
            text: "Un mesh propre facilite tout le reste du workflow (faces à 4 vertices/edges) : les modificateurs fonctionnent mieux, les textures s'appliquent sans distorsion, et l'animation ne crée pas d'artefacts. Tu as donc créé la première partie de ton objet et tu connais les outils qui te permettront de faire une grande partie des objets que tu veux.",
          },
          {
            type: "paragraph",
            text: "Voilà une vidéo de la fin de la modélisation de mon Blender, tu pourras ensuite passer aux modifiers dès que c'est fini.",
          },
          {
            type: "video",
            youtubeId: "7kNZSPBYJlM",
          },
        ],
      },
    ],
  },
  {
    slug: "03-modification",
    number: 3,
    title: "Modification",
    description:
      "Découvrez les modificateurs non-destructifs pour transformer votre géométrie sans l'altérer définitivement.",
    cardSummary:
      "Les modificateurs permettent de transformer la géométrie de façon non-destructive : les changements restent ajustables ou supprimables à tout moment. Ce tutoriel explore les modificateurs les plus utilisés — Subdivision Surface, Mirror, Array, Solidify, Bevel — et montre comment les combiner efficacement dans un workflow de production.",
    sections: [
      {
        label: "En cours",
        heading: "En cours de production",
        blocks: [
          { type: "paragraph", text: "Ce tutoriel est en cours de production." },
        ],
      },
    ],
  },
  {
    slug: "04-texture",
    number: 4,
    title: "Texture",
    description:
      "Apprenez à créer des matériaux PBR réalistes et à appliquer des textures image avec précision.",
    cardSummary:
      "Les matériaux et les textures définissent l'apparence visuelle des surfaces : couleur, rugosité, brillance, transparence. Ce tutoriel présente le Shader Editor, le nœud Principled BSDF et le système de textures PBR, ainsi que l'UV Unwrap — l'étape indispensable pour appliquer des textures image avec précision sur un modèle 3D.",
    sections: [
      {
        label: "En cours",
        heading: "En cours de production",
        blocks: [
          { type: "paragraph", text: "Ce tutoriel est en cours de production." },
        ],
      },
    ],
  },
  {
    slug: "05-lumiere-environnement",
    number: 5,
    title: "Lumière & environnement",
    description:
      "Maîtrisez les sources lumineuses et les HDRI pour donner vie à vos scènes avec une lumière convaincante.",
    cardSummary:
      "La lumière est ce qui donne vie à une scène 3D. Ce tutoriel explore les différents types de sources lumineuses disponibles dans Blender, l'utilisation des HDRI pour un éclairage d'environnement réaliste, ainsi que le paramétrage du World pour créer des ambiances convaincantes — du studio épuré à l'extérieur ensoleillé.",
    sections: [
      {
        label: "En cours",
        heading: "En cours de production",
        blocks: [
          { type: "paragraph", text: "Ce tutoriel est en cours de production." },
        ],
      },
    ],
  },
  {
    slug: "06-animation",
    number: 6,
    title: "Animation",
    description:
      "Créez vos premières animations avec les keyframes, la Timeline et le Graph Editor.",
    cardSummary:
      "L'animation dans Blender repose sur un système de keyframes : des instantanés de l'état d'un objet à un moment précis de la Timeline. Blender interpole ensuite automatiquement entre ces états. Ce tutoriel couvre l'insertion de keyframes, la lecture de la Timeline, le Graph Editor pour affiner les courbes d'interpolation, et les bases du NLA Editor.",
    sections: [
      {
        label: "En cours",
        heading: "En cours de production",
        blocks: [
          { type: "paragraph", text: "Ce tutoriel est en cours de production." },
        ],
      },
    ],
  },
  {
    slug: "07-rendu",
    number: 7,
    title: "Rendu",
    description:
      "Configurez la caméra, choisissez votre moteur et produisez l'image finale de qualité professionnelle.",
    cardSummary:
      "Le rendu est l'étape finale qui transforme une scène 3D en image. Ce tutoriel compare les deux moteurs de Blender — Cycles, photoréaliste mais exigeant, et EEVEE, temps réel et rapide — et explique comment configurer la caméra, les paramètres de résolution, l'échantillonnage et le Compositor pour obtenir une image finale propre et soignée.",
    sections: [
      {
        label: "En cours",
        heading: "En cours de production",
        blocks: [
          { type: "paragraph", text: "Ce tutoriel est en cours de production." },
        ],
      },
    ],
  },
];

export const getTutorial = (slug: string): Tutorial | undefined =>
  tutorials.find((t) => t.slug === slug);

export const getAdjacent = (slug: string): { prev?: Tutorial; next?: Tutorial } => {
  const i = tutorials.findIndex((t) => t.slug === slug);
  if (i === -1) return {};
  return { prev: tutorials[i - 1], next: tutorials[i + 1] };
};
