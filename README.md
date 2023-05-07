# Bot Discord de Modification de Nom 🤖

Ce bot Discord permet de modifier le nom du bot en utilisant une commande spécifique. Il demande une confirmation à l'utilisateur avant de procéder à la modification.

## Fonctionnalités ✨

- Changement du nom du bot sur demande.
- Confirmation requise pour valider la modification.
- Autorisation limitée aux membres spécifiques.

## Utilisation 🤔

1. Invitez le bot sur votre serveur Discord.
2. Assurez-vous d'avoir le préfixe de commande configuré à `!` dans votre serveur.
3. Utilisez la commande suivante pour changer le nom du bot : !setname <nouveau_nom>

Remplacez `<nouveau_nom>` par le nouveau nom que vous souhaitez attribuer au bot.

## Exemple ⚙️


Le bot enverra un message dans le même canal pour demander une confirmation. Vous pouvez réagir avec ❌ pour annuler la modification ou avec ✅ pour confirmer. Si aucune réaction n'est reçue dans les 60 secondes, la modification sera également annulée.

## Configuration ⚙️

Avant d'utiliser ce bot, assurez-vous de :

- Modifier la valeur de `authorizedMembers` dans le code pour inclure les ID des membres autorisés à utiliser la commande.
- Remplacer `'YOUR_BOT_TOKEN'` par le token de votre bot Discord dans la ligne `client.login('YOUR_BOT_TOKEN')`.


## Licence 📄

Ce projet est sous licence [MIT](LICENSE).
