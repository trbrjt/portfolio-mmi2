# Campagne e-commerce — Newsletter HTML TOESTY
**Contexte** : SAE 401, BUT MMI2. Période : [INFO MANQUANTE]. Travail individuel.
**ACs couverts** : C3 Exprimer, C4 Développer, C1 Comprendre (à confirmer contre le programme officiel SCN2D)

## Le brief initial

La SAE 401 portait sur la conception d'un projet e-commerce complet : créer une boutique sur Prestashop — produits, catégories, déclinaisons, fournisseurs — puis concevoir une newsletter HTML email brandée sur Mailjet pour promouvoir l'offre. La marque était au choix. Travail individuel du brief à la livraison.

## Ma mission

Livrer un dispositif e-commerce opérationnel de bout en bout : boutique accessible en ligne sur le serveur IUT et newsletter HTML email conforme aux standards du format, cohérente avec l'identité de la marque.

## Déploiement opérationnel

Le choix de la marque TOESTY — pantoufles avec positionnement décalé et humoristique — a été motivé par la liberté qu'il offre sur le copywriting. Un positionnement sérieux aurait contraint le registre ; un positionnement décalé permet d'explorer des formulations directes et engageantes sans que cela paraisse incohérent avec la marque.

La boutique Prestashop a été configurée : catalogue (pantoufles beiges et marrones, €17,49), catégories, déclinaisons de coloris. [INFO MANQUANTE — difficultés spécifiques rencontrées sur Prestashop : gestion des déclinaisons, configuration des fournisseurs, logique de catalogue ?]

La newsletter a été conçue sur Mailjet puis exportée en HTML brut. Ce format impose des contraintes radicalement différentes du HTML web standard : structure entièrement en tableaux (incompatibilité des clients email avec flexbox/grid), styles uniquement en inline CSS (les feuilles de style externes sont ignorées par Gmail, Outlook, Apple Mail), reset CSS global lourd pour neutraliser les défauts des clients, responsive via media queries embarquées dans un bloc `<style>`. Ces contraintes ne s'apprennent pas par extension du HTML web — elles requièrent une compréhension spécifique du comportement des clients email.

La direction artistique suit la palette beige/marron/vert (#1DB954 en accent), ton humoristique maintenu jusqu'au footer. Le copywriting est le levier principal de l'identité de marque : *"Prenez votre pied. Enfin."*, *"L'expérience sensorielle que vos pieds n'ont jamais osé demander"*, *"Le livreur portera des Toesty"*. La structure canonique e-commerce a été respectée : image héro, section promo (-30%, code toesty30), deux produits en colonne, CTA, trois avantages, footer institutionnel.

## Impact et retour d'expérience

Boutique Prestashop TOESTY accessible en ligne (serveur IUT). Newsletter HTML complète livrée (`newsletter_ecommerce_TOESTY.html`). [INFO MANQUANTE — note et retour enseignant SAE 401]

Note technique pour le portfolio : le fichier HTML email ne peut pas être injecté directement dans le DOM du site — le reset CSS Mailjet casserait le design général. L'intégration se fait via `<iframe sandbox>`, avec neutralisation des liens de tracking, pixels espions et CTA vers URLs absolues.

**Auto-évaluation :**
- *Maîtrisé* : HTML email — contraintes spécifiques des clients (tables, inline CSS, reset CSS) ; conception d'une identité de marque cohérente du nom au copywriting en passant par la palette.
- *En cours d'acquisition* : configuration CMS Prestashop — la logique de catalogue (déclinaisons, fournisseurs, règles de prix) reste à approfondir. [INFO MANQUANTE pour préciser selon les difficultés réelles]
- *À améliorer* : tester le rendu sur plusieurs clients email réels avant livraison.

**Pistes d'amélioration** : test multi-client systématique (Litmus ou aperçu Mailjet multi-clients) pour valider le rendu avant envoi ; exploiter les outils analytics de la boutique Prestashop pour mesurer l'efficacité d'une vraie campagne ; versionner le fichier HTML email pour faciliter les itérations futures.
