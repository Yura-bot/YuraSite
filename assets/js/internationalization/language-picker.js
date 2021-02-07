(function (){})();

var arrLang = {
  'en': {
    'home': 'Home',
    "vote": "Vote",
    "support": "Support",
    "addbot": "Add to Discord",
    "status": "Status",
    "fonctions": "Features",
    "dash": "Dashboard",
    "title2": "A new bot !",
    "desc1": "Faster, lighter and more efficient !",
    "desc2": "Hello, you create a Discord server but you have dozens of bots? Yura is the solution! Full features of popular bots are present in one single bot! \nYura is a discord bot that aims to be the ideal robot to replace popular bots! You'll find all the things you need!",
    "functionalities": "Functionalities :",
    "configadvance": " Advanced configuration :",
    "configadvance_desc": "You can configure the bot like prefix, ainti-raid, autorole, welcome and departure messages!",
    "backup": " Backup System :",
    "backup_desc": "You can create backups of your server to make sure you never lose it! You can also clone your server on another one !",
    "giveaway": " Giveaways :",
    "giveaway_desc": "A giveaway system that allows you to create draws with a custom prize, time and number of winners! There is even a drop system!",
    "modadvance": " Advanced moderation :",
    "modadvance_desc": " The bot include many commands to do moderation on your server!",
    "automod": " Auto Moderations :",
    "automod_desc": "You can configure the bot to do auto moderation! For example to block links.",
    "music": " Music :",
    "music_desc": " A feature that allows you to play music in a vocal salon (Youtube, spotify and even soundcloud)!",
    "raidprotection": " Spam and raid protection!",
    "raidprotection_desc": "The bot provides protection from spam, raid and all malicious attacks on your server!",
    "util": " Util :",
    "util_desc": "There is a category on the bot, Utility that can help you for certain stains or for information!",
    "img": "Images modifications :",
    "img_desc": "The bot includes many commands that allow you to add filters on your profile pictures!",
    "ticket": " Ticket system!",
    "ticket_desc": "The bot contains a ticket system for your server! It's a system with reactions.",
    "suggest": " Suggestion System!",
    "suggest_desc": " In the utility category there is a system that allows you to create suggestions in a salon!",
    "fun": " Fun!",
    "fun_desc": "There is another cathegory on the bot, Fun which allows you to have fun with your friends!",
    "theme_light": "Bright theme!",
    "theme_dark": "Dark theme!",
  },
  'fr': {
    'home': 'Accueil',
    "vote": "Voter",
    "support": "Support",
    "addbot": "Ajouter le bot",
    "status": "Status du bot",
    "fonctions": "Fonctionnalitées",
    "dash": "Dashboard",
    "title2": "Un nouveau bot !",
    "desc1": "Plus vite, plus léger et plus efficace !",
    "desc2": "Bonjour, tu crées un serveur Discord mais tu as des dizaines de bots ? Yura est la solution ! Pleins fonctionnalités de bot populaires sont présents en un seul bot ! \nYura est un bot discord qui a comme but d'être le robot idéal pour remplacer les bots populaires ! Vous y retrouverez toutes les choses dont vous avez besoin !",
    "functionalities": "Les Fonctionnalitées :",
    "configadvance": "Configuration avancé !",
    "configadvance_desc": "Vous pouvez configurer le bot comme par exemple le prefix, l'ainti-raid, l'autorole, les messages de bienvenue et de départ !",
    "backup": " Système de Backup :",
    "backup_desc": "Vous pouvez crée des backups de votre serveur pour être sur de ne jamais le perdre ! Vous pouvez aussi cloner votre serveur sur un autre !",
    "giveaway": " Giveaways :",
    "giveaway_desc": "Un système de giveaway qui permet de crée des tirages au sort avec un prix, un temps et un nombre de gagnants custom ! Il y a même un système de drop !",
    "modadvance": " Modérations avancé :",
    "modadvance_desc": " Le bot contiennent plusieurs commandes pour faire la modération sur votre serveur ! ",
    "automod": " Auto Modérations :",
    "automod_desc": "Vous pouvez configurer le bot pour faire de l'auto modération ! Par exemple bloquer les liens.",
    "music": " Musique :",
    "music_desc": " Une fonctionnalité qui permet de jouer de la musique dans un salon vocal (Youtube, spotify et même soundcloud) !",
    "raidprotection": " Protection contre le spam et le raid !",
    "raidprotection_desc": "Le bot fournit des protections contre le spam, le raid et contre toutes attaques malveillantes sur votre serveur !",
    "util": " Utilitaire :",
    "util_desc": "Il y a une cathégorie sur le bot, Utilitaire qui peux vous aider pour certaines taches ou pour s'informer !",
    "img": "Images modifications :",
    "img_desc": "Le bot contient plusieurs commandes qui permettent de rajouter des filtres sur vos photo de profil !",
    "ticket": " Système de ticket !",
    "ticket_desc": "Le bot contient un système de ticket pour votre serveur ! C'est un système avec des réactions.",
    "suggest": " Système de Suggestions !",
    "suggest_desc": " Dans la cathégorie utilitaire il y a un système qui permet de crée des suggestions dans un salon !",
    "fun": " Du Fun !",
    "fun_desc": "Il y a une autre cathégorie sur le bot, Fun qui permet de vous amuser entre vos amis !",
    "theme_light": "Thème lumineux !",
    "theme_dark": "Thème sombre !",
  }
};

function getLanguage() {
  if (localStorage.getItem('language') == null)  {
    var userLang = navigator.language || navigator.userLanguage; 
    if (userLang != "en" && userLang != "fr") {
      setLanguage("en")
      return "en"
    } else {
      setLanguage(userLang)
      return userLang
    }
  } else {
    return localStorage.getItem('language')
  }
}

function setLanguage(lang) {
  localStorage.setItem('language', lang);
}

$(function() {
  var lang = getLanguage()

  $('.lang').each(function(index, item) {
    $(this).text(arrLang[lang][$(this).attr('key')]);
  });
});