const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!'; // Préfixe de commande
const authorizedMembers = ['']; // Ajoutez les ID des membres autorisés ici

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('message', async (message) => {
  if (message.author.bot) return; // Ignorer les messages des autres bots
  
  if (message.content.startsWith(prefix + 'setname')) {
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const newName = args.slice(1).join(' ');

    // Vérifier si l'auteur du message est un membre autorisé
    if (!authorizedMembers.includes(message.author.id)) {
      message.reply('Vous n\'êtes pas autorisé à utiliser cette commande.');
      return;
    }

    // Envoyer le message de demande de confirmation dans le même canal que la commande
    const confirmationMessage = await message.channel.send(`Voulez-vous vraiment changer le nom du bot en **${newName}** ?`);
    await confirmationMessage.react('❌');
    await confirmationMessage.react('✅');

    const filter = (reaction, user) => {
      return ['❌', '✅'].includes(reaction.emoji.name) && user.id === message.author.id;
    };

    confirmationMessage.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
      .then((collected) => {
        const reaction = collected.first();

        if (reaction.emoji.name === '❌') {
          message.channel.send('Modification annulée.');
        } else if (reaction.emoji.name === '✅') {
          // Modifier le nom du bot
          client.user.setUsername(newName)
            .then(() => {
              message.channel.send(`Le nom du bot a été modifié avec succès en **${newName}**.`);
            })
            .catch((error) => {
              message.channel.send('Une erreur est survenue lors de la modification du nom du bot.');
              console.error(error);
            });
        }
      })
      .catch(() => {
        message.channel.send('Aucune réaction de confirmation n\'a été reçue. Modification annulée.');
      })
      .finally(() => {
        // Supprimer les réactions de l'ancien message
        confirmationMessage.reactions.removeAll().catch((error) => {
          console.error('Une erreur est survenue lors de la suppression des réactions :', error);
        });
      });
  }
});

// Remplacez 'YOUR_BOT_TOKEN' par le token de votre bot Discord
client.login('');
