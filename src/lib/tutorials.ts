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
      "Découvrez l'environnement de Blender et apprenez à naviguer dans la 3D Viewport efficacement.",
    cardSummary:
      "Comprendre l'interface de Blender est essentiel, car elle permet de repérer rapidement les outils, les panneaux et les fonctionnalités nécessaires à la création de projets 3D. Savoir naviguer efficacement dans le logiciel permet de travailler plus vite, de mieux visualiser ses modèles et d'éviter de perdre du temps à chercher les commandes.",
    sections: [
      {
        label: "Introduction",
        heading: "L'interface de Blender",
        blocks: [
          {
            type: "paragraph",
            text: "Au premier lancement, Blender peut sembler déroutant. Mais son interface suit une logique claire : tout est organisé en **éditeurs** (editors) que vous pouvez redimensionner, déplacer et combiner librement dans la fenêtre. Contrairement à d'autres logiciels, il n'y a pas de fenêtres flottantes — tout reste dans un seul écran.",
          },
          {
            type: "paragraph",
            text: "La disposition par défaut comprend les zones essentielles dont vous aurez besoin pour commencer.",
          },
        ],
      },
      {
        label: "Les zones principales",
        heading: "Anatomie de l'écran par défaut",
        blocks: [
          { type: "image", caption: "Capture — vue d'ensemble de l'interface Blender" },
          {
            type: "notionGrid",
            items: [
              { term: "3D Viewport", def: "La fenêtre principale où vous visualisez et manipulez votre scène en trois dimensions. C'est là que vous passez la plupart du temps." },
              { term: "Outliner", def: "Le gestionnaire de scène en haut à droite. Il liste tous les objets, collections, caméras et lumières présents." },
              { term: "Properties", def: "Le panneau à droite avec les onglets d'icônes. Donne accès aux propriétés de l'objet sélectionné : géométrie, matériaux, physique, rendu…" },
              { term: "Timeline", def: "La barre en bas. Elle contrôle la lecture de l'animation et affiche les keyframes. Même si vous ne faites pas d'animation, elle reste visible." },
              { term: "Header", def: "La barre en haut de chaque éditeur. Elle contient les menus et options spécifiques à cet éditeur. Son contenu change selon le contexte." },
              { term: "Toolbar (T)", def: "La barre d'outils sur le côté gauche du Viewport. Appuyez sur T pour l'afficher ou la masquer." },
            ],
          },
        ],
      },
      {
        label: "Navigation",
        heading: "Se déplacer dans la scène 3D",
        blocks: [
          {
            type: "paragraph",
            text: "La navigation dans le Viewport est une compétence fondamentale. Vous allez l'utiliser en permanence. Blender utilise la souris à trois boutons de façon intensive — si vous n'avez pas de bouton central, activez l'émulation dans les Préférences.",
          },
          {
            type: "shortcuts",
            rows: [
              { keys: "[[Molette]]", desc: "Zoom avant / arrière" },
              { keys: "[[Clic milieu]] + glisser", desc: "Orbiter autour de la scène (rotation de la vue)" },
              { keys: "[[Shift]] + [[Clic milieu]] + glisser", desc: "Panoramique (déplacer la vue sans tourner)" },
              { keys: "[[Numpad 1]]", desc: "Vue de face (Front)" },
              { keys: "[[Numpad 3]]", desc: "Vue de droite (Right)" },
              { keys: "[[Numpad 7]]", desc: "Vue de dessus (Top)" },
              { keys: "[[Numpad 5]]", desc: "Basculer perspective ↔ orthographique" },
              { keys: "[[Numpad 0]]", desc: "Vue caméra" },
              { keys: "[[Numpad .]]", desc: "Centrer la vue sur la sélection" },
              { keys: "[[Home]]", desc: "Afficher tous les objets de la scène" },
            ],
          },
          {
            type: "note",
            lead: "Astuce :",
            text: "Pas de pavé numérique ? Allez dans Edit → Preferences → Input et activez __Emulate Numpad__. Les touches 1–9 du clavier principal remplacent le pavé numérique.",
          },
        ],
      },
      {
        label: "Modes d'affichage",
        heading: "Changer l'apparence du Viewport",
        blocks: [
          {
            type: "paragraph",
            text: "Blender propose quatre modes d'affichage principaux, accessibles via le menu en haut à droite du Viewport ou avec le raccourci [[Z]] qui ouvre un pie menu.",
          },
          {
            type: "notionGrid",
            items: [
              { term: "Wireframe", def: "Affiche uniquement les arêtes de la géométrie. Utile pour voir à travers les objets et sélectionner des éléments cachés." },
              { term: "Solid", def: "Mode de travail par défaut. Les objets sont solides avec un éclairage de studio générique. Rapide et lisible." },
              { term: "Material Preview", def: "Affiche les matériaux assignés aux objets avec un HDRI de prévisualisation. Pratique pour voir les textures sans faire de rendu." },
              { term: "Rendered", def: "Rendu en temps réel dans le Viewport. Lent mais fidèle au résultat final. Consomme beaucoup de ressources GPU." },
            ],
          },
          { type: "image", caption: "Capture — comparaison des 4 modes d'affichage" },
        ],
      },
      {
        label: "Objets & sélection",
        heading: "Sélectionner et manipuler les objets",
        blocks: [
          {
            type: "paragraph",
            text: "Dans Blender, [[Clic gauche]] sélectionne un objet. Un objet sélectionné apparaît entouré d'un contour orange. Le point d'origine (orange) indique son centre de transformation.",
          },
          {
            type: "shortcuts",
            rows: [
              { keys: "[[Clic gauche]]", desc: "Sélectionner un objet" },
              { keys: "[[Shift]] + [[Clic gauche]]", desc: "Ajouter à la sélection" },
              { keys: "[[A]]", desc: "Tout sélectionner / tout désélectionner" },
              { keys: "[[Alt]] + [[A]]", desc: "Désélectionner tout" },
              { keys: "[[B]]", desc: "Sélection en rectangle (box select)" },
              { keys: "[[C]]", desc: "Sélection circulaire au pinceau" },
              { keys: "[[X]] ou [[Suppr]]", desc: "Supprimer la sélection" },
            ],
          },
          {
            type: "note",
            lead: "Rappel :",
            text: "Dans les versions récentes de Blender (2.8+), le clic gauche sélectionne et le clic droit ouvre le menu contextuel. C'est l'inverse des très anciennes versions — si vous suivez un vieux tutoriel, c'est peut-être pour ça que ça ne correspond pas.",
          },
        ],
      },
      {
        label: "Préférences",
        heading: "Personnaliser Blender",
        blocks: [
          {
            type: "paragraph",
            text: "Accédez aux Préférences via [[Edit]] → **Preferences**. Les réglages les plus utiles pour débuter :",
          },
          {
            type: "shortcuts",
            rows: [
              { keys: "Input → Emulate Numpad", desc: "Si vous n'avez pas de pavé numérique" },
              { keys: "Input → Emulate 3 Button Mouse", desc: "Si vous n'avez pas de bouton milieu souris" },
              { keys: "Interface → Resolution Scale", desc: "Agrandir l'interface sur les écrans haute résolution" },
              { keys: "Save & Load → Auto Save", desc: "Activer la sauvegarde automatique toutes les X minutes" },
              { keys: "Themes", desc: "Changer l'apparence visuelle de Blender" },
            ],
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
      "Maîtrisez les outils de base du Edit Mode pour construire n'importe quelle forme polygonale.",
    cardSummary:
      "La modélisation polygonale est le fondement de toute création 3D dans Blender. Ce tutoriel couvre le Edit Mode et ses outils essentiels — extrusion, Loop Cut, Bevel, Inset — pour apprendre à construire n'importe quelle forme géométrique en manipulant vertices, edges et faces.",
    sections: [
      {
        label: "Introduction",
        heading: "La modélisation polygonale",
        blocks: [
          {
            type: "paragraph",
            text: "La modélisation est l'art de construire des formes 3D. Dans Blender, la méthode principale est la **modélisation polygonale** : on part d'une forme simple (un cube, une sphère) et on la transforme en sculptant sa géométrie vertex par vertex, arête par arête, face par face.",
          },
          {
            type: "paragraph",
            text: "Tout commence par passer en **Edit Mode** : appuyez sur [[Tab]] avec un objet sélectionné pour basculer entre l'Object Mode et l'Edit Mode.",
          },
        ],
      },
      {
        label: "Composants de base",
        heading: "Vertices, Edges, Faces",
        blocks: [
          { type: "image", caption: "Capture — illustration des vertices, edges et faces" },
          {
            type: "notionGrid",
            items: [
              { term: "Vertex (pl. Vertices)", def: "Point dans l'espace 3D. C'est la brique atomique de toute géométrie. Un cube possède 8 vertices." },
              { term: "Edge (Arête)", def: "Segment qui relie deux vertices. Forme les arêtes visibles du modèle. Un cube possède 12 edges." },
              { term: "Face (Polygone)", def: "Surface plane délimitée par des edges. Un cube a 6 faces. Les quads (4 côtés) sont préférés aux triangles pour un maillage propre." },
              { term: "Mesh", def: "L'ensemble des vertices, edges et faces qui forment un objet 3D. Un mesh est la \"peau\" de votre modèle." },
            ],
          },
          {
            type: "paragraph",
            text: "En Edit Mode, les touches [[1]], [[2]], [[3]] (sur le clavier principal) basculent entre les modes de sélection Vertex, Edge et Face.",
          },
        ],
      },
      {
        label: "Outils essentiels",
        heading: "Les 4 outils fondamentaux",
        blocks: [
          { type: "subheading", text: "Extrusion — [[E]]" },
          {
            type: "paragraph",
            text: "L'outil le plus utilisé en modélisation. Sélectionnez une face (ou un edge, ou un vertex), appuyez sur [[E]] et déplacez la souris pour créer une nouvelle géométrie en prolongeant la sélection. C'est comme \"étirer\" la surface pour lui donner du volume.",
          },
          { type: "image", caption: "Capture — extrusion d'une face" },
          { type: "subheading", text: "Loop Cut — [[Ctrl]] + [[R]]" },
          {
            type: "paragraph",
            text: "Crée une boucle d'arêtes (loop) qui coupe le mesh en passant par des faces adjacentes. Survolez une arête pour voir la coupe en aperçu, cliquez pour la confirmer. Faites défiler la molette avant de cliquer pour multiplier le nombre de coupes.",
          },
          { type: "image", caption: "Capture — loop cut sur un cylindre" },
          { type: "subheading", text: "Bevel — [[Ctrl]] + [[B]]" },
          {
            type: "paragraph",
            text: "Arrondit les arêtes sélectionnées en les remplaçant par plusieurs arêtes intermédiaires. Déplacez la souris pour contrôler la largeur du biseau. Faites défiler la molette pour ajouter des segments et obtenir un arrondi plus lisse.",
          },
          { type: "image", caption: "Capture — bevel sur les arêtes d'un cube" },
          { type: "subheading", text: "Inset — [[I]]" },
          {
            type: "paragraph",
            text: "Crée une face plus petite à l'intérieur d'une face sélectionnée. Indispensable pour créer des fenêtres, des boutons, des détails en relief. Déplacez la souris pour contrôler l'épaisseur du cadre intérieur.",
          },
          { type: "image", caption: "Capture — inset pour créer un détail" },
        ],
      },
      {
        label: "Raccourcis Edit Mode",
        heading: "Transformations et commandes utiles",
        blocks: [
          {
            type: "shortcuts",
            rows: [
              { keys: "[[G]]", desc: "Déplacer (Grab). Suivi de [[X]], [[Y]] ou [[Z]] pour contraindre l'axe" },
              { keys: "[[S]]", desc: "Redimensionner (Scale)" },
              { keys: "[[R]]", desc: "Faire pivoter (Rotate)" },
              { keys: "[[F]]", desc: "Remplir — créer une face à partir de vertices ou edges sélectionnés" },
              { keys: "[[M]]", desc: "Fusionner (Merge) les vertices sélectionnés" },
              { keys: "[[K]]", desc: "Knife tool — couper le mesh librement" },
              { keys: "[[Ctrl]] + [[Z]]", desc: "Annuler" },
              { keys: "[[Alt]] + clic sur edge", desc: "Sélectionner une edge loop entière" },
              { keys: "[[O]]", desc: "Proportional Editing — déformer avec influence progressive" },
            ],
          },
          {
            type: "note",
            lead: "Conseil :",
            text: "Pendant un G/R/S, tapez un nombre pour une valeur précise. Par exemple [[G]] [[Z]] [[2]] déplace exactement de 2 unités sur l'axe Z. Ajoutez [[-]] pour la direction opposée.",
          },
        ],
      },
      {
        label: "Bonnes pratiques",
        heading: "Modéliser proprement",
        blocks: [
          {
            type: "paragraph",
            text: "Un mesh \"propre\" facilite tout le reste du workflow : les modificateurs, les textures, l'animation. Quelques règles à respecter dès le début :",
          },
          {
            type: "notionGrid",
            items: [
              { term: "Privilégier les quads", def: "Les faces à 4 côtés (quads) donnent de bien meilleurs résultats lors de la subdivision, du sculpt ou du rigging." },
              { term: "Éviter les N-gons", def: "Les faces à 5+ côtés créent des artefacts lors du rendu ou de la déformation. Découpez-les en quads avec K ou en ajoutant des edge loops." },
              { term: "Corriger les normales", def: "Si une face apparaît noire, sa normale est peut-être inversée. Sélectionnez tout (A) puis Mesh → Normals → Flip ou Recalculate Outside." },
              { term: "Appliquer les transformations", def: "Avant de travailler en Edit Mode, appliquez la position/rotation/échelle de l'objet avec [[Ctrl]] + [[A]] pour éviter des comportements inattendus." },
            ],
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
        label: "Introduction",
        heading: "Le workflow non-destructif",
        blocks: [
          {
            type: "paragraph",
            text: "Les **modificateurs** sont des opérations appliquées automatiquement sur un objet, sans modifier son mesh original. Ils forment une pile (stack) que vous pouvez réorganiser, désactiver ou supprimer à tout moment. C'est le fondement du workflow non-destructif : vous pouvez toujours revenir en arrière.",
          },
          {
            type: "paragraph",
            text: "Pour accéder aux modificateurs : sélectionnez un objet, puis cliquez sur l'icône de clé (🔧) dans le panneau Properties.",
          },
          { type: "image", caption: "Capture — panneau Modifier Properties avec une stack exemple" },
        ],
      },
      {
        label: "Modificateur 1",
        heading: "Subdivision Surface",
        blocks: [
          {
            type: "paragraph",
            text: "Ce modificateur subdivise les polygones du mesh pour créer une surface lisse. Il est au cœur de la modélisation organique dans Blender — on modélise en basse résolution (low-poly) et la Subdivision Surface lisse le résultat automatiquement.",
          },
          { type: "image", caption: "Capture — cube avant/après Subdivision Surface" },
          {
            type: "notionGrid",
            items: [
              { term: "Levels Viewport", def: "Niveau de subdivision affiché en temps réel. Gardez-le à 1 ou 2 pendant la modélisation pour ne pas ralentir Blender." },
              { term: "Levels Render", def: "Niveau utilisé au moment du rendu final. Montez à 2 ou 3 selon le niveau de détail voulu." },
              { term: "Crease ([[Shift]]+[[E]])", def: "Valeur de 0 à 1 appliquée à une arête pour résister à la subdivision. À 1.0, l'arête reste nette malgré le lissage." },
            ],
          },
          {
            type: "note",
            lead: "Règle d'or :",
            text: "Modélisez avec des quads propres. Les triangles et N-gons créent des plis et artefacts visibles après subdivision.",
          },
        ],
      },
      {
        label: "Modificateur 2",
        heading: "Mirror",
        blocks: [
          {
            type: "paragraph",
            text: "Symétrise automatiquement votre mesh par rapport à un axe (X, Y ou Z). C'est indispensable pour modéliser des objets symétriques — personnages, véhicules, mobilier — en ne travaillant que sur une moitié.",
          },
          { type: "image", caption: "Capture — modélisation d'un visage avec Mirror activé" },
          {
            type: "paragraph",
            text: "Activez l'option **Clipping** pour empêcher les vertices de passer de l'autre côté de l'axe de symétrie. Cela soude automatiquement les points qui touchent l'axe.",
          },
          {
            type: "note",
            lead: "Conseil :",
            text: "Placez toujours le modificateur Mirror __avant__ la Subdivision Surface dans la stack. L'ordre des modificateurs change le résultat.",
          },
        ],
      },
      {
        label: "Modificateur 3",
        heading: "Array",
        blocks: [
          {
            type: "paragraph",
            text: "Répète un objet N fois avec un décalage régulier. Parfait pour des escaliers, des grillages, des rangées d'arbres, des colonnes, des dents d'engrenage. Vous contrôlez le nombre de copies et le vecteur de répétition.",
          },
          { type: "image", caption: "Capture — Array appliqué à un maillon de chaîne" },
          {
            type: "notionGrid",
            items: [
              { term: "Count", def: "Nombre total d'occurrences (original inclus)." },
              { term: "Relative Offset", def: "Décalage exprimé en multiple de la taille de l'objet. 1.0 en X = les copies se touchent exactement." },
              { term: "Object Offset", def: "Utilise un objet vide (Empty) comme référence de transformation. Permet de créer des répétitions courbes." },
            ],
          },
        ],
      },
      {
        label: "Modificateur 4",
        heading: "Solidify",
        blocks: [
          {
            type: "paragraph",
            text: "Ajoute une épaisseur à un objet sans volume (un plan, une surface courbe). Utile pour créer des coques, des murs, des feuilles, des tôles. Évite de devoir modéliser l'épaisseur à la main.",
          },
          { type: "image", caption: "Capture — Solidify appliqué à une surface plane" },
        ],
      },
      {
        label: "Modificateur 5",
        heading: "Bevel",
        blocks: [
          {
            type: "paragraph",
            text: "Identique à l'outil Bevel en Edit Mode, mais sous forme de modificateur non-destructif. Il arrondit toutes les arêtes (ou seulement celles dépassant un angle donné) automatiquement, sans toucher au mesh d'origine.",
          },
          {
            type: "notionGrid",
            items: [
              { term: "Amount", def: "Largeur du biseau." },
              { term: "Segments", def: "Nombre de faces intermédiaires. Plus il y en a, plus l'arrondi est lisse." },
              { term: "Angle", def: "Limite l'effet aux arêtes dont l'angle dépasse cette valeur. Pratique pour ne biseauter que les coins vifs." },
            ],
          },
          {
            type: "note",
            lead: "Ordre dans la stack :",
            text: "En général → Mirror → Bevel → Subdivision Surface. Mais il n'y a pas de règle absolue, expérimentez selon vos besoins.",
          },
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
        label: "Introduction",
        heading: "Matériaux et textures",
        blocks: [
          {
            type: "paragraph",
            text: "Un **matériau** définit comment la lumière interagit avec la surface d'un objet : sa couleur, sa brillance, sa transparence, sa rugosité. Dans Blender, les matériaux sont créés via des **nœuds** (nodes) dans le Shader Editor.",
          },
          {
            type: "paragraph",
            text: "Pour créer un matériau : sélectionnez un objet, allez dans Properties → Material (icône sphère), cliquez sur **New**.",
          },
        ],
      },
      {
        label: "Le nœud central",
        heading: "Principled BSDF",
        blocks: [
          {
            type: "paragraph",
            text: "Le nœud **Principled BSDF** est votre point de départ pour presque tous les matériaux. Il regroupe tous les paramètres nécessaires pour simuler des surfaces réelles grâce au modèle physique PBR (Physically Based Rendering).",
          },
          { type: "image", caption: "Capture — nœud Principled BSDF avec paramètres annotés" },
          {
            type: "notionGrid",
            items: [
              { term: "Base Color", def: "La couleur principale de la surface. Peut être une couleur unie ou une texture image." },
              { term: "Metallic", def: "0 = non-métallique, 1 = métallique. Ne mettez que 0 ou 1, pas de valeur intermédiaire dans la réalité physique." },
              { term: "Roughness", def: "0 = miroir parfait, 1 = surface mate. La plupart des surfaces réelles sont entre 0.3 et 0.8." },
              { term: "IOR", def: "Indice de réfraction. 1.45 pour le verre, 1.33 pour l'eau. N'affecte que les matériaux transparents." },
              { term: "Alpha", def: "Transparence globale du matériau. Activez le Blend Mode dans Material Settings pour que la transparence fonctionne." },
              { term: "Emission", def: "Fait briller la surface (lumière émise). Utile pour les écrans, néons, flammes." },
            ],
          },
        ],
      },
      {
        label: "UV Unwrap",
        heading: "Dérouler le modèle pour appliquer des textures",
        blocks: [
          {
            type: "paragraph",
            text: "Pour appliquer une texture image (photo, dessin) sur un modèle 3D, il faut d'abord **dérouler** le mesh en 2D — comme on déplierait une boîte en carton. C'est l'**UV Unwrap**.",
          },
          { type: "image", caption: "Capture — UV unwrap d'un personnage simple dans l'UV Editor" },
          { type: "paragraph", text: "La procédure de base :" },
          {
            type: "shortcuts",
            rows: [
              { keys: "1. Edit Mode", desc: "Passez en Edit Mode ([[Tab]])" },
              { keys: "2. Sélection", desc: "Sélectionnez tout ([[A]])" },
              { keys: "3. Seams (optionnel)", desc: "Marquez des coutures ([[Ctrl]]+[[E]] → Mark Seam) pour indiquer où \"couper\" le mesh" },
              { keys: "4. Unwrap", desc: "[[U]] → Smart UV Project (pour débuter) ou Unwrap (après avoir marqué des seams)" },
              { keys: "5. UV Editor", desc: "Ouvrez l'UV Editor pour voir et ajuster le résultat" },
            ],
          },
          {
            type: "note",
            lead: "Conseils :",
            text: "Pour des objets simples, __Smart UV Project__ donne de bons résultats sans effort. Pour des personnages ou objets complexes, marquez des seams le long des zones peu visibles (sous les bras, dans les plis).",
          },
        ],
      },
      {
        label: "Textures image",
        heading: "Connecter une image à un matériau",
        blocks: [
          {
            type: "paragraph",
            text: "Dans le Shader Editor ([[Shift]]+[[F3]]), ajoutez un nœud Image Texture : [[Shift]]+[[A]] → Texture → Image Texture. Chargez votre image et connectez la sortie __Color__ à l'entrée __Base Color__ du Principled BSDF.",
          },
          { type: "image", caption: "Capture — Shader Editor avec nœud Image Texture connecté" },
          {
            type: "notionGrid",
            items: [
              { term: "Color Map (Albedo)", def: "La couleur de base de la surface. Connectez-la à Base Color." },
              { term: "Roughness Map", def: "Image en niveaux de gris qui contrôle la rugosité. Zones claires = mat, zones sombres = brillant. Mettez en Non-Color." },
              { term: "Normal Map", def: "Simule des micro-reliefs sans ajouter de géométrie. Connectez via un nœud Normal Map. Mettez en Non-Color." },
              { term: "AO Map", def: "Ambient Occlusion. Assombrit les coins et recoins. Multipliez-le avec la Color Map pour un résultat plus riche." },
            ],
          },
        ],
      },
      {
        label: "Aperçu",
        heading: "Visualiser les matériaux sans rendre",
        blocks: [
          {
            type: "paragraph",
            text: "Passez en mode **Material Preview** dans le Viewport ([[Z]] → Material Preview ou le bouton en haut à droite) pour voir vos matériaux en temps réel avec un HDRI de prévisualisation. C'est le mode de travail idéal quand vous créez des shaders.",
          },
          {
            type: "note",
            lead: "Raccourci pratique :",
            text: "[[Z]] ouvre un pie menu avec tous les modes d'affichage. Pas besoin de chercher le bouton.",
          },
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
        label: "Introduction",
        heading: "L'importance de la lumière",
        blocks: [
          {
            type: "paragraph",
            text: "La lumière est ce qui transforme un modèle 3D en image convaincante. Même un objet médiocrement modélisé peut paraître crédible avec un éclairage soigné — et inversement, un excellent modèle sera gâché par une lumière négligée. C'est une des compétences les plus impactantes à développer.",
          },
        ],
      },
      {
        label: "Types de lumières",
        heading: "Les sources lumineuses de Blender",
        blocks: [
          { type: "paragraph", text: "Ajoutez une lumière avec [[Shift]]+[[A]] → Light dans le Viewport." },
          { type: "image", caption: "Capture — comparaison des 4 types de lumières" },
          {
            type: "notionGrid",
            items: [
              { term: "Point", def: "Émet de la lumière dans toutes les directions depuis un point. Simule une ampoule. L'intensité diminue avec la distance." },
              { term: "Sun", def: "Lumière directionnelle parallèle (comme le soleil). Sa position dans la scène n'a pas d'importance, seule son orientation compte. Idéal pour les scènes extérieures." },
              { term: "Spot", def: "Cône de lumière dirigée. Utile pour des projecteurs, phares de voiture, lampes de bureau. Contrôlez l'angle d'ouverture du cône." },
              { term: "Area", def: "Surface lumineuse rectangulaire ou circulaire. Produit des ombres douces et réalistes. Simule une fenêtre, un écran, un softbox de studio." },
            ],
          },
          { type: "paragraph", text: "Les propriétés principales d'une lumière sont accessibles dans Properties → Light (icône soleil vert) :" },
          {
            type: "shortcuts",
            rows: [
              { keys: "Color", desc: "La teinte de la lumière. Lumière chaude (orange/jaune) pour le soleil, froide (bleutée) pour les ombres et la skylight." },
              { keys: "Power / Strength", desc: "L'intensité en watts. Augmentez si la scène est trop sombre, diminuez si elle est surexposée." },
              { keys: "Radius (Point/Spot)", desc: "Taille de la source. Plus elle est grande, plus les ombres sont douces et diffuses." },
              { keys: "Size (Area)", desc: "Dimensions de la surface lumineuse. Grande = ombres douces, petite = ombres dures." },
            ],
          },
        ],
      },
      {
        label: "HDRI",
        heading: "Éclairage d'environnement avec un HDRI",
        blocks: [
          {
            type: "paragraph",
            text: "Un **HDRI** (High Dynamic Range Image) est une photographie panoramique à 360° qui sert à la fois d'arrière-plan et de source lumineuse. Le résultat est immédiatement convaincant car la lumière vient de partout, avec des reflets cohérents.",
          },
          { type: "image", caption: "Capture — scène éclairée par HDRI dans le Shader Editor World" },
          { type: "paragraph", text: "Procédure :" },
          {
            type: "shortcuts",
            rows: [
              { keys: "1.", desc: "Allez dans Properties → World (icône globe)" },
              { keys: "2.", desc: "Cliquez sur le point jaune à côté de Color → Environment Texture" },
              { keys: "3.", desc: "Ouvrez le Shader Editor en mode World pour avoir plus de contrôle" },
              { keys: "4.", desc: "Chargez votre fichier .hdr via le nœud Environment Texture" },
              { keys: "5.", desc: "Ajustez la Strength du nœud Background pour contrôler l'intensité" },
            ],
          },
          {
            type: "note",
            lead: "Ressources gratuites :",
            text: "[Poly Haven](https://polyhaven.com) propose des centaines de HDRIs en haute résolution, tous en CC0 (utilisation libre). Téléchargez plusieurs ambiances : studio neutre, extérieur ensoleillé, ciel nuageux, coucher de soleil.",
          },
        ],
      },
      {
        label: "Stratégies d'éclairage",
        heading: "Composer la lumière",
        blocks: [
          {
            type: "notionGrid",
            items: [
              { term: "Three-Point Lighting", def: "La base du studio photo/vidéo. Une lumière principale (Key), une de remplissage plus douce (Fill), et une de contour derrière le sujet (Rim/Back)." },
              { term: "Température de couleur", def: "Lumière chaude (2700–4000K) vs froide (5500–7000K). Le contraste chaud/froid donne de la profondeur à une scène." },
              { term: "Ombres", def: "Les ombres donnent de la forme et du poids aux objets. Une scène sans ombres paraît plate. Évitez une lumière trop frontale." },
              { term: "Exposition", def: "Réglez l'exposition globale dans Properties → Render → Color Management → Exposure, pas en augmentant l'intensité de chaque lampe." },
            ],
          },
          { type: "image", caption: "Capture — même scène avec différentes configurations d'éclairage" },
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
        label: "Introduction",
        heading: "Le principe de l'animation par keyframes",
        blocks: [
          {
            type: "paragraph",
            text: "L'animation dans Blender repose sur les **keyframes** (images-clés) : vous enregistrez l'état d'une propriété (position, rotation, taille…) à des instants précis, et Blender calcule automatiquement les valeurs intermédiaires. Ce calcul s'appelle l'**interpolation**.",
          },
          { type: "image", caption: "Capture — Timeline avec keyframes visibles" },
        ],
      },
      {
        label: "Premiers pas",
        heading: "Créer sa première animation",
        blocks: [
          {
            type: "shortcuts",
            rows: [
              { keys: "1. Placez-vous à l'image 1", desc: "Cliquez dans la Timeline ou entrez 1 dans le champ Current Frame" },
              { keys: "2. Sélectionnez un objet", desc: "Cliquez sur l'objet à animer dans le Viewport" },
              { keys: "3. Insérez un keyframe", desc: "[[I]] → choisissez Location, Rotation, Scale ou LocRotScale" },
              { keys: "4. Avancez dans la Timeline", desc: "Allez à l'image 50 (cliquez ou faites glisser la tête de lecture)" },
              { keys: "5. Modifiez l'objet", desc: "Déplacez-le avec [[G]], pivotez-le avec [[R]]…" },
              { keys: "6. Insérez un nouveau keyframe", desc: "[[I]] → même type que l'étape 3" },
              { keys: "7. Lisez l'animation", desc: "[[Espace]] pour lancer / arrêter" },
            ],
          },
          {
            type: "note",
            lead: "Auto Keying :",
            text: "Activez le bouton rond rouge (●) dans la Timeline pour enregistrer automatiquement un keyframe à chaque modification de l'objet. Très pratique pour animer vite, mais attention à ne pas créer des keyframes involontaires.",
          },
        ],
      },
      {
        label: "Graph Editor",
        heading: "Contrôler les courbes d'interpolation",
        blocks: [
          {
            type: "paragraph",
            text: "Le **Graph Editor** affiche les keyframes sous forme de courbes. La forme de ces courbes contrôle l'accélération et la décélération du mouvement. Une courbe en S donne des mouvements naturels avec ease-in et ease-out.",
          },
          { type: "image", caption: "Capture — Graph Editor avec courbe de position" },
          {
            type: "notionGrid",
            items: [
              { term: "Bézier (par défaut)", def: "Interpolation lisse avec handles ajustables. Donne des mouvements naturels." },
              { term: "Linear", def: "Interpolation linéaire entre les keyframes. Mouvement mécanique, sans accélération." },
              { term: "Constant", def: "Pas d'interpolation — l'objet \"saute\" d'un état à l'autre. Utile pour des états binaires (on/off)." },
              { term: "Ease In/Out", def: "Accélération en début et décélération en fin de mouvement. La base de l'animation organique." },
            ],
          },
          { type: "paragraph", text: "Pour changer le type d'interpolation : sélectionnez des keyframes dans le Graph Editor, puis [[T]] → choisissez le type." },
        ],
      },
      {
        label: "Raccourcis Timeline",
        heading: "Contrôler la lecture",
        blocks: [
          {
            type: "shortcuts",
            rows: [
              { keys: "[[Espace]]", desc: "Lancer / arrêter la lecture" },
              { keys: "[[Shift]] + [[←]]", desc: "Aller au début de l'animation (frame 1)" },
              { keys: "[[Shift]] + [[→]]", desc: "Aller à la fin de l'animation" },
              { keys: "[[←]] / [[→]]", desc: "Image précédente / suivante" },
              { keys: "[[I]] (dans Viewport)", desc: "Insérer un keyframe sur l'objet sélectionné" },
              { keys: "[[Alt]] + [[I]]", desc: "Supprimer un keyframe à la position actuelle" },
            ],
          },
        ],
      },
      {
        label: "NLA Editor",
        heading: "Introduction au NLA Editor",
        blocks: [
          {
            type: "paragraph",
            text: "Le **Non-Linear Animation Editor** (NLA) permet de gérer des **actions** (séquences d'animation) comme des clips vidéo : vous pouvez les combiner, les superposer, les répéter ou changer leur durée. C'est utile dès que vous avez plusieurs animations sur un même objet.",
          },
          { type: "image", caption: "Capture — NLA Editor avec plusieurs actions" },
          {
            type: "note",
            lead: "Pour débuter :",
            text: "Concentrez-vous sur les keyframes et le Graph Editor. Le NLA Editor devient indispensable pour les personnages animés avec plusieurs séquences de mouvements.",
          },
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
        label: "Introduction",
        heading: "Du Viewport à l'image finale",
        blocks: [
          {
            type: "paragraph",
            text: "Le **rendu** est l'étape qui transforme votre scène 3D en image finale (ou séquence d'images). Blender lance un calcul basé sur les lumières, les matériaux et la caméra pour produire une image photoréaliste ou stylisée.",
          },
          {
            type: "paragraph",
            text: "Lancez un rendu avec [[F12]]. L'image s'affiche dans le Render Viewer. Sauvegardez-la avec [[Alt]]+[[S]].",
          },
        ],
      },
      {
        label: "Les moteurs",
        heading: "Cycles vs EEVEE",
        blocks: [
          { type: "image", caption: "Capture — même scène rendue avec Cycles (gauche) et EEVEE (droite)" },
          {
            type: "notionGrid",
            items: [
              { term: "Cycles", def: "Moteur de ray-tracing physiquement correct. Calcule les rebonds de lumière réels. Lent mais photoréaliste. Idéal pour les images finales soignées." },
              { term: "EEVEE", def: "Moteur temps réel (comme un jeu vidéo). Rapide mais approximatif. Excellent pour les rendus stylisés, les prévisualisations ou les animations." },
              { term: "EEVEE Next", def: "Version améliorée d'EEVEE (Blender 4.2+) avec ray-tracing partiel. Comble l'écart avec Cycles pour un rendu rapide de qualité." },
              { term: "Workbench", def: "Moteur de visualisation simple, identique au mode Solid du Viewport. Utile pour des rendus techniques rapides ou des animations de présentation." },
            ],
          },
        ],
      },
      {
        label: "La caméra",
        heading: "Paramétrer la caméra",
        blocks: [
          { type: "paragraph", text: "La caméra cadre ce qui sera rendu. Sélectionnez-la et allez dans Properties → Camera (icône appareil photo) pour régler :" },
          {
            type: "shortcuts",
            rows: [
              { keys: "Focal Length", desc: "En mm. 50mm = vision naturelle. 24mm = grand angle. 85mm+ = téléobjectif (compression de la perspective)" },
              { keys: "Sensor Size", desc: "Taille du capteur simulé. Laissez sur 36mm (plein format) par défaut" },
              { keys: "Depth of Field", desc: "Flou de mise au point. Activez-le et réglez Focus Object ou Distance, puis l'ouverture (F-Stop)" },
              { keys: "Clip Start / End", desc: "Distance minimale et maximale visible. Ajustez si des objets \"disparaissent\" de la vue caméra" },
            ],
          },
          {
            type: "note",
            lead: "Astuce :",
            text: "Appuyez sur [[Numpad 0]] pour voir à travers la caméra. Activez View → Lock → Camera to View pour naviguer avec la caméra directement.",
          },
        ],
      },
      {
        label: "Paramètres Render",
        heading: "Réglages principaux",
        blocks: [
          { type: "paragraph", text: "Tous les paramètres de rendu sont dans Properties → Render (icône caméra)." },
          {
            type: "notionGrid",
            items: [
              { term: "Resolution", def: "Dimensions en pixels. 1920×1080 (Full HD) pour débuter. Le pourcentage en dessous est un multiplicateur pratique pour les tests rapides (50% = moitié de la résolution)." },
              { term: "Samples", def: "Cycles uniquement. Nombre de rayons calculés par pixel. Plus = moins de bruit, mais plus long. Commencez à 128 pour les tests, 1024+ pour le final." },
              { term: "Denoising", def: "Filtre le bruit résiduel après le rendu. Activez-le pour réduire fortement le nombre de samples nécessaires." },
              { term: "Output Format", def: "PNG = image sans perte avec transparence. JPEG = compression, pas de transparence. EXR = haute dynamique, pour le compositing." },
            ],
          },
          { type: "image", caption: "Capture — panneau Render Properties avec paramètres annotés" },
        ],
      },
      {
        label: "Compositor",
        heading: "Post-traitement dans Blender",
        blocks: [
          {
            type: "paragraph",
            text: "Le **Compositor** de Blender permet d'appliquer des effets sur l'image rendue directement dans le logiciel, sans quitter Blender. Activez-le via Render Properties → Post Processing → Compositing.",
          },
          { type: "image", caption: "Capture — Compositor avec nœuds de correction colorimétrique" },
          {
            type: "notionGrid",
            items: [
              { term: "Color Balance", def: "Ajustement des ombres, tons moyens et hautes lumières. L'outil de base pour la correction colorimétrique." },
              { term: "Glare", def: "Ajoute un halo ou des reflets en étoile autour des zones très lumineuses. Donne du relief aux sources de lumière." },
              { term: "Lens Distortion", def: "Simule la distorsion d'un vrai objectif. Ajoute un aspect photographique à l'image." },
              { term: "Denoise", def: "Peut aussi être appliqué en post via le nœud Denoise. Nécessite d'activer les passes Denoising Data dans View Layer." },
            ],
          },
          {
            type: "note",
            lead: "Color Management :",
            text: "Dans Render Properties → Color Management, utilisez __Filmic__ comme View Transform. Il gère mieux les hautes lumières et donne des couleurs plus naturelles que la vue Standard.",
          },
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
