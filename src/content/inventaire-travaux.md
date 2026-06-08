# Inventaire des travaux — Portfolio MMI2

> Document de travail intermédiaire. Ne pas intégrer tel quel dans le site final.
> Généré par audit du dossier `/travaux`. Toutes les informations manquantes sont balisées explicitement.
> Aucun fait inventé — les inconnues sont signalées, pas comblées.

---

## R1 — Site dataviz "Préférences Spotify"

| Champ | Contenu |
|---|---|
| **Titre** | Analyse des préférences Spotify selon l'âge |
| **Type** | SAE 303 (source : readme.txt + footer du site) |
| **Auteur confirmé** | Timothé Roberjot (inscrit dans index.html et readme.txt) |
| **Rôle réel** | Développeur et designer — seul sur le projet |

**Objectif du projet**
Visualiser un dataset CSV (Spotify_users_data.csv, 400 utilisateurs) pour répondre à la question : "Est-ce que l'âge change la façon dont on utilise Spotify (Musique ou Podcast) ?" Structure one-page avec 4 graphiques interactifs enchaînés selon une logique narrative question → graphique → analyse.

**Contraintes techniques**
- HTML/CSS/JS vanilla uniquement + Plotly.js (CDN)
- Données hardcodées dans le JS (pas d'import CSV dynamique)
- 4 types de graphiques distincts : bar chart, stacked bar chart, grouped bar chart, bubble chart (scatter)
- Responsive via media query (breakpoint 768px)
- Dark mode complet (fond noir, scrollbar personnalisée)

**Contraintes créatives**
- Univers visuel cohérent avec Spotify : dark mode, vert Spotify (#1DB954), typographies Poppins + Inter
- Narration progressive : chaque section pose une question et y répond visuellement
- Blocs d'analyse textuels accompagnant chaque graphique (formatés avec emoji 💡 et accent vert)

**Preuves disponibles**
- `index.html` (112 lignes) — structure sémantique complète, lisible
- `style.css` (275 lignes) — design system complet, dark mode, responsive
- `script.js` (227 lignes) — 4 fonctions Plotly, commentaires en français
- `readme.txt` (31 lignes) — documentation complète, mention explicite de l'aide IA (Gemini)

**Données clés du projet**
- 400 utilisateurs, 5 tranches d'âge (6-12 / 12-20 / 20-35 / 35-60 / 60+)
- Répartition : 74% adultes 20-35 ans (296/400)
- Résultat principal : les 6-12 ans écoutent 100% podcast ; les 20-35 ans 85.5% musique
- Satisfaction : homogène entre 3.8 et 4.2/5 quel que soit l'âge

**Compétences BUT MMI démontrables**
- Développer pour le web (HTML/CSS/JS, Plotly, responsive)
- Comprendre et analyser des données (statistiques, interprétation, narration)
- Concevoir une interface (design system, UX one-page, hiérarchie de lecture)

**ACs potentiels** ⚠️ à vérifier contre le programme officiel (pages 21-29)
- AC lié à "Développer des interfaces et intégrations web"
- AC lié à "Analyser des données et en tirer des conclusions"
- AC lié à "Concevoir une expérience de lecture numérique"

**Intérêt narratif pour le portfolio**
Seule réalisation avec une chaîne complète et documentée : données brutes → analyse → visualisation interactive → narration. Le readme mentionne explicitement l'aide IA (Gemini pour compréhension d'erreurs CSS/JS) : démontre une posture réflexive sur l'usage des outils. Branding cohérent et assumé.

**Limites à assumer dans la fiche STAR**
- Données hardcodées (pas d'API ni de lecture CSV dynamique)
- Tranches extrêmes très sous-représentées (1 utilisateur pour 6-12 ans, 1 pour 60+) : biais de représentativité à mentionner
- Aide IA mentionnée (Gemini) : à traiter honnêtement comme aide à la compréhension d'erreurs, pas comme génération de code

**Mérite fiche STAR complète** : **OUI**

---

## R2 — Campagne emailing TOESTY

| Champ | Contenu |
|---|---|
| **Titre** | Newsletter promotionnelle e-commerce TOESTY |
| **Type** | SAE ou exercice — marque fictive (pantoufles) |
| **Rôle réel** | Développeur/designer email (via Mailjet builder) |

**Objectif du projet**
Concevoir un email HTML responsive pour une campagne promotionnelle e-commerce : mise en avant d'une réduction -30% (code "toesty30"), présentation de deux produits (pantoufles beiges et marrons à €17.49), CTA multiples vers une boutique fictive.

**Contraintes techniques**
- Structure entièrement en tableaux HTML (compatibilité Outlook, Gmail, Apple Mail)
- Styles uniquement en inline CSS (pas de feuille de style externe applicable)
- Reset CSS global lourd inclus (neutralise les styles par défaut des clients email)
- Google Fonts chargée via lien externe (peut être bloquée dans certains clients)
- Responsive via media queries dans `<style>` embarqué
- Construit avec Mailjet builder, puis exporté en HTML brut

**Contraintes créatives**
- Branding TOESTY : palette beige/marron/vert (#1DB954 réutilisé comme accent), ton humoristique et décalé
- Copywriting engageant : "Prenez votre pied. Enfin.", "100% Moelleux garanti", "Le livreur portera des Toesty"
- Structure e-commerce canonique : hero → promotion → produits → avantages → footer institutionnel
- Icônes réseaux sociaux (Facebook, YouTube, Instagram) en footer

**Preuves disponibles**
- `newsletter_ecommerce_TOESTY.html` — fichier source complet, analysable

**Compétences BUT MMI démontrables**
- Produire du contenu pour la communication numérique (copywriting, structure email)
- Développer des supports numériques avec contraintes de compatibilité
- Concevoir une expérience utilisateur (parcours email, UX e-commerce)
- Stratégie de communication commerciale (promotion, CTA, conversion)

**ACs potentiels** ⚠️ à vérifier
- AC lié à "Rédiger et concevoir des contenus de communication numérique"
- AC lié à "Développer des supports web avec des contraintes techniques spécifiques"
- AC lié à "Concevoir une stratégie de communication commerciale"

**Intérêt narratif pour le portfolio**
Fort contraste avec site_dataviz : même stack technique (HTML/CSS), contraintes radicalement opposées (tables vs. flexbox, inline CSS vs. feuilles externes). Démontre la capacité à adapter les pratiques de développement selon le support. Angle pédagogique fort sur "pourquoi l'email HTML fonctionne différemment du web".

**Limites à assumer dans la fiche STAR**
- Marque fictive → pas de métriques réelles (taux d'ouverture, clics)
- Mailjet builder = structure partiellement générée, pas entièrement codée from scratch
- Impossible de tester dans de vrais clients email sans envoi réel

**Note d'intégration dans le portfolio** (contrainte technique obligatoire)
Le HTML email ne peut PAS être injecté directement dans le DOM du portfolio (les resets CSS globaux et les styles lourds casseraient le design général du site). Intégration obligatoire via `<iframe sandbox>`. Avant intégration : neutraliser les liens de tracking Mailjet, les pixels espions, les CTA avec liens absolus, le lien "Se désabonner".

**Mérite fiche STAR complète** : **OUI** (avec sous-section "choix d'intégration technique" dédiée)

---

## R3 — Identité visuelle NORGAARD

| Champ | Contenu |
|---|---|
| **Titre** | Identité visuelle Norgaard |
| **Type** | Projet client ou SAE — **non précisé** |
| **Rôle réel** | Designer graphique (seul ou équipe — **non confirmé**) |

**Objectif du projet**
[À COMPLÉTER — contenu du PDF non lisible dans cet environnement]

**Contraintes**
[À COMPLÉTER — contenu du brief PDF inconnu]

**Preuves disponibles**
- `NORGAARD/logo_norgaard_fond-transparent.png` — logo sur fond transparent (fichier non visionné)
- `NORGAARD/CAHIER_DES_CHARGES_NORGAARD.pdf` — brief client formel (**non lisible — pdftoppm absent**)

**ACs potentiels** ⚠️ à vérifier
- AC lié à "Concevoir une identité visuelle"
- AC lié à "Répondre à un brief client"
- AC lié à "Gérer une démarche de création graphique"

**Intérêt narratif pour le portfolio**
La présence d'un cahier des charges formel est un signal fort : ce n'est pas un exercice libre, il y avait des contraintes et un commanditaire. Si le PDF confirme une démarche client réelle, la structure STAR est naturelle (brief → analyse → création → livraison). Seule réalisation avec un document de brief formalisé.

**Limites**
- PDF brief illisible dans cet environnement → contenu des contraintes, contexte et livrables inconnus
- Logo non visionné → qualité graphique non évaluable

**Mérite fiche STAR** : **CONDITIONNEL** — dépend du contenu du PDF et de la confirmation du type de mission

**Info manquante critique**
1. Ouvrir `NORGAARD/CAHIER_DES_CHARGES_NORGAARD.pdf` manuellement
2. Confirmer : SAE ou vrai client ? Quelle période ?
3. Confirmer le rôle exact (seul ou en groupe ?)

---

## R4 — Dossier de presse Pop Smoke

| Champ | Contenu |
|---|---|
| **Titre** | Dossier de presse Pop Smoke |
| **Type** | SAE ou exercice (Pop Smoke = artiste décédé en février 2020) |
| **Rôle réel** | [Inconnu — rédacteur, designer, ou les deux ?] |

**Objectif du projet**
[À COMPLÉTER — PDF non lisible]

**Preuves disponibles**
- `dossier_presse_pop_smoke.pdf` — **non lisible dans cet environnement**

**ACs potentiels** ⚠️ à vérifier
- AC lié à "Produire des contenus éditoriaux"
- AC lié à "Concevoir une mise en page éditoriale"
- AC lié à "Maîtriser les codes de la communication presse"

**Intérêt narratif pour le portfolio**
Potentiel si le document est bien exécuté. Exercice sur la communication culturelle/musicale. Le fait que Pop Smoke soit décédé implique que c'est nécessairement un exercice de reconstitution ou de projet fictif — à traiter avec transparence dans la fiche STAR.

**Limites**
- PDF illisible → impossible à évaluer à ce stade
- Sujet décédé → contexte nécessairement fictif ou pédagogique

**Mérite fiche STAR** : **INCONNU** — à évaluer après lecture manuelle du PDF

**Info manquante critique**
Ouvrir `dossier_presse_pop_smoke.pdf` manuellement et évaluer : qualité de la mise en page, contenu rédactionnel, structure, contexte du cours

---

## R5 — Animation logo After Effects

| Champ | Contenu |
|---|---|
| **Titre** | Animation de logo (motion design) |
| **Type** | Exercice ou SAE motion design |
| **Rôle réel** | Motion designer |

**Objectif du projet**
[À COMPLÉTER — quel logo ? pour quel projet/client ?]

**Preuves disponibles**
- `animation_logo_aftereffect.mp4` — vidéo non visionnée dans cet environnement

**ACs potentiels** ⚠️ à vérifier
- AC lié à "Produire du contenu audiovisuel"
- AC lié à "Maîtriser un outil de motion design (After Effects)"

**Intérêt narratif pour le portfolio**
Démontre une compétence distincte des autres réalisations (motion design vs. web vs. photo). Si intégré comme vidéo autoplay (muted, loop), fort impact visuel dans le portfolio. Mais contexte totalement absent.

**Limites**
- Vidéo non visionnée
- Contexte entièrement inconnu : de quel logo s'agit-il ? Durée ? Brief ?
- Sans contexte, difficile de construire une STAR

**Mérite fiche STAR** : **CONDITIONNEL** — à évaluer après visionnage et confirmation du contexte

**Info manquante critique**
1. Visionner la vidéo
2. Confirmer : de quel logo s'agit-il ? Pour quelle SAE/cours ?
3. Durée de l'animation ? Contraintes du brief ?

---

## R6 — Maquette site Freeze Corleone

| Champ | Contenu |
|---|---|
| **Titre** | Maquettes de site web pour Freeze Corleone |
| **Type** | SAE ou exercice design UI (Freeze Corleone = rappeur français) |
| **Rôle réel** | Designer UI/UX |

**Objectif du projet**
Concevoir l'interface visuelle d'un site pour un artiste musical (Freeze Corleone).

**Preuves disponibles**
- 4 captures d'écran : `maquette_site_freeze-corleone/1.png`, `2.png`, `3.png`, `4.png` — **non visionnées**

**ACs potentiels** ⚠️ à vérifier
- AC lié à "Concevoir des interfaces numériques"
- AC lié à "Réaliser des maquettes UI/UX"
- AC lié à "Adapter le design à un univers de marque"

**Intérêt narratif pour le portfolio**
Univers artistique fort (rap français underground/drill, esthétique sombre et premium) → contraintes créatives intéressantes à analyser. Complémentaire au site_dataviz (design web immersif vs. dataviz analytique).

**Limites**
- Seulement des captures d'écran (pas de source Figma/XD, pas de fichiers exportés)
- Brief non visible
- Images non visionnées → qualité graphique non évaluable

**Mérite fiche STAR** : **CONDITIONNEL** — à confirmer après visionnage

**Info manquante critique**
1. Visionner les 4 captures
2. Confirmer : outil utilisé (Figma ? XD ? Autre ?) et SAE associée
3. Y avait-il un brief ou des contraintes formelles ?

---

## R7 — Photographie produit

| Champ | Contenu |
|---|---|
| **Titre** | Packshots et mises en situation produit |
| **Type** | SAE photo ou exercice |
| **Rôle réel** | Photographe (seul ?) |

**Objectif du projet**
Réaliser des packshots commerciaux et des mises en situation pour deux catégories de produits : sport/utilitaire (pompe à vélo) et luxe/cosmétique (parfum).

**Preuves disponibles**
- `photos/mise_en_situation_pompe_a_velo.png`
- `photos/packshot_graphique_parfum.png`
- `photos/packshot_parfum.JPG`
- `photos/packshot_pompe_a_velo.png`
— **4 fichiers non visionnés**

**ACs potentiels** ⚠️ à vérifier
- AC lié à "Produire des visuels photographiques"
- AC lié à "Maîtriser la direction artistique photo"
- AC lié à "Concevoir des visuels adaptés à la communication produit"

**Intérêt narratif pour le portfolio**
Deux produits très différents (utilitaire vs. luxe) → démontre la capacité à adapter l'esthétique photographique au positionnement. "packshot_graphique_parfum" suggère une retouche ou traitement graphique post-production, ce qui étend les compétences démontrées.

**Limites**
- Photos non visionnées → qualité technique inconnue
- Pas de brief visible
- Post-production : quel logiciel ? Quelles retouches ?

**Mérite fiche STAR** : **CONDITIONNEL**

**Info manquante critique**
1. Visionner les 4 photos
2. Confirmer : SAE photo ? Cours spécifique ?
3. Post-production réalisée (Lightroom, Photoshop) ?

---

## R8 — Site DUNE

| Champ | Contenu |
|---|---|
| **Titre** | Site DUNE (nature exacte inconnue) |
| **Type** | SAE ou exercice web design — probablement redesign inspiré du film Dune |
| **Rôle réel** | [Inconnu] |

**Objectif du projet**
[À COMPLÉTER — contexte inconnu]

**Preuves disponibles**
- 5 captures d'écran : `site_DUNE/1.jpeg` à `5.jpeg` — **non visionnées**

**ACs potentiels** ⚠️ à vérifier
- AC lié à "Concevoir un site web"
- AC lié à "Intégrer un univers visuel fort dans un design numérique"

**Intérêt narratif pour le portfolio**
Potentiel fort si c'est un redesign avec un univers cinématographique (immersif, typographie forte, palette sable/brun) — mais doublon probable avec R6 (maquette Freeze Corleone) pour la compétence "design web / maquettage".

**Limites**
- Contexte totalement inconnu
- Images non visionnées
- Probable doublon thématique avec R6

**Mérite fiche STAR** : **INCONNU**

**Info manquante critique**
1. Visionner les 5 captures
2. Clarifier : redesign du site du film Dune ? Ou autre contexte "Dune" ?
3. SAE associée ?

---

## R9 — Visuels de communication (multi-contextes)

| Champ | Contenu |
|---|---|
| **Titre** | Création graphique pour différents contextes de communication |
| **Type** | SAE ou exercice design graphique (multi-projets groupables) |
| **Rôle réel** | Designer graphique (seul ?) |

**Objectif du projet**
Créer des assets de communication visuelle pour des organisations aux contextes variés : association sportive, marque de sport, événementiel festif, communication B2B LinkedIn.

**Preuves disponibles**
- `visuels/logo_CSLD_Dijon.png` — logo (club sportif dijonnais ?)
- `visuels/logo_Oxyboard.png` — logo (marque de sport nautique ?)
- `visuels/logo_kama.png` — logo (organisation inconnue)
- `visuels/Affiche_soiree_St_Patrick.png` — affiche événementielle
- `visuels/visuel_post_FERELIS_linkedin_1.jpg` — post LinkedIn (entreprise FERELIS)
- `visuels/visuel_post_FERELIS_linkedin_2.png` — post LinkedIn (entreprise FERELIS)
— **6 fichiers non visionnés**

**Compétences BUT MMI démontrables**
- Identité de marque : création de 3 logos pour des organisations distinctes
- Communication événementielle : affiche soirée St Patrick
- Stratégie de communication numérique : posts LinkedIn B2B pour FERELIS (directement dans le champ du parcours SCN2D)

**ACs potentiels** ⚠️ à vérifier
- AC lié à "Concevoir une identité visuelle"
- AC lié à "Créer des contenus pour les réseaux sociaux"
- AC lié à "Adapter la communication au contexte et à la cible"

**Intérêt narratif pour le portfolio**
Diversité forte des contextes en peu de fichiers (association, marque, événement, B2B). Les posts LinkedIn FERELIS sont l'entrée la plus directement liée au parcours "Stratégie de communication numérique" — si FERELIS est un vrai client ou un stage, c'est particulièrement porteur. Les 3 logos montrent une capacité à travailler sur des identités très différentes.

**Stratégie de présentation recommandée** : regrouper sous une mission "Identité visuelle et communication multi-contextes" plutôt que 9 fiches séparées. Sélectionner 2-3 réalisations représentatives avec brief distinct.

**Limites**
- Images non visionnées → cohérence stylistique entre les logos inconnue
- Contexte de FERELIS non confirmé (stage ? SAE ? projet perso ?)
- Pas de brief formalisé visible pour chaque visuel

**Mérite fiche STAR** : **OUI** (regroupement thématique, à condition de confirmer au moins un contexte de mission)

**Info manquante critique**
1. Visionner les 6 fichiers
2. FERELIS : stage, SAE ou projet perso ? Période ?
3. Pour les logos : SAE associée ou commandes réelles ?
4. Y avait-il des briefs écrits pour les logos ?

---

## Récapitulatif des limitations de cet inventaire

| Limitation | Détail |
|---|---|
| PDFs illisibles | `NORGAARD/CAHIER_DES_CHARGES_NORGAARD.pdf` et `dossier_presse_pop_smoke.pdf` — pdftoppm absent sur cette machine |
| Images non visionnées | Tous les PNG/JPG (R3, R6, R7, R8, R9) — agents texte uniquement |
| Vidéo non visionnée | `animation_logo_aftereffect.mp4` (R5) |
| ACs non vérifiés | Liste exacte des ACs du parcours SCN2D non consultée — hypothèses basées sur la structure générale BUT MMI |
| `src/content/missions/` | Répertoire inexistant à ce stade — à créer pour les fiches STAR |
