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
            youtubeId: "nBeHs0gIFUw",
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
      "Apprenez à construire n'importe quelle forme 3D en maîtrisant le Edit Mode et ses outils essentiels.",
    coverImage: "/images-tutoriels/Tutoriel-2_pres.png",
    cardSummary:
      "La modélisation polygonale est le fondement de toute création 3D dans Blender. Ce tutoriel couvre le Edit Mode et ses outils essentiels — extrusion, Loop Cut, Bevel, Inset — pour apprendre à construire n'importe quelle forme géométrique en manipulant vertices, edges et faces.",
    sections: [
      {
        label: "L'Edit Mode",
        heading: "Entrer dans le maillage",
        blocks: [
          {
            type: "paragraph",
            text: "Jusqu'ici tu as manipulé des objets en **Object Mode** : tu les déplaçais, les tournais, les mettais à l'échelle comme des blocs entiers. Le **Edit Mode** permet de descendre à l'intérieur de l'objet pour remodeler sa géométrie point par point.",
          },
          {
            type: "paragraph",
            text: "Pour basculer entre les deux modes, sélectionne un objet et appuie sur [[Tab]]. Tu peux aussi changer de mode depuis le menu déroulant en haut à gauche du Viewport.",
          },
          {
            type: "image",
            src: "/tutoriels/T2.1.object-edit-mode.png",
            caption: "Le sélecteur de mode en haut à gauche du Viewport — Object Mode vs Edit Mode.",
          },
          {
            type: "paragraph",
            text: "En Edit Mode, le mesh de l'objet devient visible dans ses composants élémentaires. On en distingue trois types, auxquels correspondent trois modes de sélection accessibles par les touches [[1]], [[2]] et [[3]] du clavier principal :",
          },
          {
            type: "notionGrid",
            items: [
              { term: "Vertex (1)", def: "Point dans l'espace 3D. La brique de base de toute géométrie. Un cube possède 8 vertices." },
              { term: "Edge (2)", def: "Arête reliant deux vertices. Un cube possède 12 edges." },
              { term: "Face (3)", def: "Surface plane délimitée par des edges. Un cube possède 6 faces. On préfère les quads (4 côtés) aux triangles pour un maillage propre." },
            ],
          },
          {
            type: "image",
            src: "/tutoriels/T2.2.vertex.edge-face.png",
            caption: "Le même cube affiché en mode Vertex (gauche), Edge (centre) et Face (droite).",
          },
          {
            type: "note",
            lead: "!!!",
            text: "Tu peux activer plusieurs modes de sélection en même temps en maintenant [[Shift]] en cliquant sur les boutons de mode. Très pratique pour sélectionner des vertices et des edges simultanément.",
          },
        ],
      },
      {
        label: "Sélection",
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
            lead: "Conseil :",
            text: "La sélection par edge loop ([[Alt]] + clic) est l'une des plus utilisées en pratique. Elle permet de sélectionner d'un coup toute une boucle d'arêtes qui fait le tour d'un cylindre ou encercle un membre — indispensable pour les modifications structurelles.",
          },
        ],
      },
      {
        label: "Les outils fondamentaux",
        heading: "Construire la géométrie",
        blocks: [
          { type: "subheading", text: "Extrusion — [[E]]" },
          {
            type: "paragraph",
            text: "C'est l'outil le plus utilisé en modélisation. Sélectionne une face (ou un edge, ou un vertex), appuie sur [[E]] et déplace la souris pour créer une nouvelle géométrie en prolongeant la sélection. C'est comme étirer la surface pour lui donner du volume.",
          },
          {
            type: "paragraph",
            text: "Après avoir appuyé sur [[E]], tu peux contraindre la direction en tapant [[X]], [[Y]] ou [[Z]]. Par exemple [[E]] [[Z]] extrud directement vers le haut.",
          },
          {
            type: "video",
            youtubeId: "bjqmaNCB06U",
            caption: "Extrusion d'une face vers le haut pour créer un volume à partir d'un plan.",
          },
          { type: "subheading", text: "Loop Cut — [[Ctrl]] + [[R]]" },
          {
            type: "paragraph",
            text: "Crée une boucle d'arêtes qui coupe le mesh en passant par les faces adjacentes. Survole une arête : un aperçu jaune montre où la coupe sera placée. Clique pour confirmer, puis déplace la souris pour positionner précisément la coupe, ou clique droit pour la centrer.",
          },
          {
            type: "paragraph",
            text: "Avant de cliquer pour confirmer, fais défiler la molette pour multiplier le nombre de coupes parallèles.",
          },
          {
            type: "video",
            youtubeId: "5x0s3gnPB4o",
            caption: "Loop Cut sur un cylindre — la ligne jaune montre l'aperçu de la coupe.",
          },
          { type: "subheading", text: "Bevel — [[Ctrl]] + [[B]]" },
          {
            type: "paragraph",
            text: "Arrondit les arêtes sélectionnées en les remplaçant par plusieurs arêtes intermédiaires. Déplace la souris pour contrôler la largeur du biseau. Fais défiler la molette pour ajouter des segments et obtenir un arrondi plus lisse.",
          },
          {
            type: "note",
            lead: "Astuce :",
            text: "Le Bevel fonctionne aussi sur les vertices : [[Ctrl]] + [[Shift]] + [[B]]. Il arrondit le coin en créant un polygone à la place du point.",
          },
          {
            type: "video",
            youtubeId: "tVdbWkBPnHY",
            caption: "Bevel sur les arêtes d'un cube — à gauche sans segments, à droite avec 3 segments.",
          },
          { type: "subheading", text: "Inset — [[I]]" },
          {
            type: "paragraph",
            text: "Crée une face plus petite à l'intérieur d'une face sélectionnée, comme un cadre. Indispensable pour créer des fenêtres, des boutons, des panneaux en relief. Déplace la souris pour contrôler l'épaisseur du cadre intérieur.",
          },
          {
            type: "video",
            youtubeId: "1_wLwSj_RPE",
            caption: "Inset sur une face — résultat avec extrusion vers l'intérieur pour créer un renfoncement.",
          },
          { type: "subheading", text: "Knife — [[K]]" },
          {
            type: "paragraph",
            text: "Coupe le mesh librement en traçant des lignes. Clique pour poser des points, [[Entrée]] pour valider la coupe. Utile pour ajouter de la géométrie exactement là où tu en as besoin, sans passer par un Loop Cut.",
          },
          {
            type: "video",
            youtubeId: "6-vmOEc2TB0",
            caption: "Utilisation du Knife pour tracer une coupe libre sur le mesh.",
          },
        ],
      },
      {
        label: "Raccourcis Edit Mode",
        heading: "Transformations et commandes utiles",
        blocks: [
          {
            type: "shortcuts",
            rows: [
              { keys: "[[Tab]]", desc: "Basculer entre Object Mode et Edit Mode" },
              { keys: "[[1]] / [[2]] / [[3]]", desc: "Mode Vertex / Edge / Face" },
              { keys: "[[G]]", desc: "Déplacer (Grab) — suivi de [[X]], [[Y]] ou [[Z]] pour contraindre l'axe" },
              { keys: "[[S]]", desc: "Redimensionner (Scale)" },
              { keys: "[[R]]", desc: "Faire pivoter (Rotate)" },
              { keys: "[[E]]", desc: "Extrusion de la sélection" },
              { keys: "[[Ctrl]] + [[R]]", desc: "Loop Cut" },
              { keys: "[[Ctrl]] + [[B]]", desc: "Bevel" },
              { keys: "[[I]]", desc: "Inset" },
              { keys: "[[F]]", desc: "Remplir — créer une face à partir de vertices ou edges sélectionnés" },
              { keys: "[[M]]", desc: "Fusionner (Merge) les vertices sélectionnés" },
              { keys: "[[O]]", desc: "Proportional Editing — déformer avec influence progressive" },
              { keys: "[[Alt]] + [[Z]]", desc: "X-Ray — voir et sélectionner à travers le mesh" },
            ],
          },
          {
            type: "note",
            lead: "Conseil :",
            text: "Pendant un G, R ou S, tape un nombre pour une valeur précise. Par exemple [[G]] [[Z]] [[2]] déplace exactement de 2 unités sur Z. Tape [[-]] pour la direction opposée.",
          },
        ],
      },
      {
        label: "Bonnes pratiques",
        heading: "Modéliser proprement",
        blocks: [
          {
            type: "paragraph",
            text: "Un mesh propre facilite tout le reste du workflow — les modificateurs fonctionnent mieux, les textures s'appliquent sans distorsion, et l'animation ne crée pas d'artefacts. Voici les règles à respecter dès le début :",
          },
          {
            type: "notionGrid",
            items: [
              { term: "Privilégier les quads", def: "Les faces à 4 côtés donnent de meilleurs résultats lors de la subdivision, du sculpt ou du rigging. Évite les triangles dans les zones qui se déforment." },
              { term: "Éviter les N-gons", def: "Les faces à 5 côtés ou plus créent des artefacts visibles lors du rendu ou de la déformation. Découpe-les avec K ou en ajoutant des edge loops." },
              { term: "Corriger les normales", def: "Si une face apparaît noire en rendu, sa normale est probablement inversée. Sélectionne tout avec [[A]] puis Mesh → Normals → Recalculate Outside." },
              { term: "Appliquer les transformations", def: "Avant de travailler en Edit Mode, applique la position, la rotation et l'échelle de l'objet avec [[Ctrl]] + [[A]] → All Transforms pour éviter des comportements inattendus." },
            ],
          },
          {
            type: "paragraph",
            text: "Tu maîtrises maintenant les bases de la modélisation polygonale. Le prochain tutoriel introduit les modificateurs — des outils qui permettent de transformer la géométrie de façon non-destructive.",
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
