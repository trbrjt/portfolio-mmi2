# Visualisation de données — "Préférences Spotify selon l'âge"
**Contexte** : SAE BUT MMI2 [INFO MANQUANTE — numéro], cours analyse de données. Période : [INFO MANQUANTE]. Travail individuel.
**ACs couverts** : C4 Développer, C1 Comprendre (à confirmer contre le programme officiel SCN2D)

## Le contexte et les enjeux

Dans le cadre d'une SAE d'analyse de données, un dataset de 400 utilisateurs Spotify répartis en cinq tranches d'âge (6-12, 12-20, 20-35, 35-60, 60+) était fourni. La contrainte du brief était ouverte : produire une visualisation dans un support au choix — PDF, vidéo, ou site web. Le seul impératif associé au format site : usage obligatoire de Plotly.js.

## Objectifs et contraintes

Transformer ce dataset brut en une narration analytique compréhensible, avec une question centrale à formuler et à documenter visuellement. Liberté totale de thème et de format.

## Stratégie et réalisation

Le format site web a été retenu délibérément : contrairement au PDF figé ou à la vidéo linéaire, un site permet une exploration interactive des données et constitue un livrable plus valorisant pour un portfolio de développement. La question analytique centrale a été posée en amont : *"Est-ce que l'âge change la façon dont on utilise Spotify ?"*

Le projet a démarré sur Looker Studio (outil Google de dataviz), puis basculé sur Plotly.js sur recommandation de l'enseignant — Plotly jugé plus professionnel, plus propre et plus malléable pour un rendu site. Plotly.js a donc été appris en autonomie via la documentation officielle, avec recours ciblé à Gemini pour la résolution d'erreurs de configuration uniquement (non pour la génération de code métier). Cet usage de l'IA est déclaré explicitement dans le `readme.txt` du projet.

Quatre types de graphiques distincts ont été implémentés : bar chart (répartition par tranche d'âge), stacked bar chart (préférence Musique vs. Podcast en pourcentage), grouped bar chart (genres musicaux favoris par âge) et bubble chart (satisfaction vs. âge, taille de bulle proportionnelle à la population). Chaque section suit une structure narrative identique : question posée, graphique interactif, analyse textuelle.

Le design system s'inscrit dans l'univers Spotify : palette dark mode, vert #1DB954, typographies Poppins (titres) et Inter (corps), responsive à partir de 768px, entièrement construit en variables CSS sans framework.

Une limite a été identifiée et assumée : les tranches 6-12 ans et 60+ ne comptent qu'un seul utilisateur chacune, ce qui rend toute interprétation statistiquement non représentative. Cette limite est signalée dans les analyses textuelles du site.

## Bilan et livrables

Site one-page scrollable livré : 112 lignes HTML, 275 lignes CSS, 227 lignes JS, 4 graphiques Plotly interactifs, responsive, readme documenté. [INFO MANQUANTE — note obtenue et retour enseignant]

**Auto-évaluation :**
- *Maîtrisé* : Plotly.js pour quatre types de visualisation distincts ; conception d'un design system CSS complet sans framework (variables, hiérarchie typographique, dark mode) ; narration de données structurée par question analytique.
- *En cours d'acquisition* : lecture dynamique de fichiers CSV — les données ont été hardcodées directement dans le JS, contournement fonctionnel mais pas maîtrise de la chaîne de traitement.
- *À améliorer* : la rigueur statistique aurait dû être questionnée en amont lors de la formulation de la question analytique, et non signalée seulement à la livraison.

**Pistes d'amélioration** : implémenter un `fetch()` dynamique du CSV pour découpler données et code ; documenter les biais de représentativité directement dans l'interface (note de bas de graphique) plutôt que dans le seul texte d'analyse ; valider la pertinence de la question analytique sur un dataset équilibré avant de commencer la visualisation.
