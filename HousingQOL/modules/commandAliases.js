import settings from "../config";

    // Housing Kick

function housingKick(...args) {
    if (settings.settings.cmdAliases) {
        if (args === undefined){
            ChatLib.chat("&6&l[Housing QOL] &r&cInvalid arguments provided! (/hk <player1> <player2> ...)");
            return;
        }

        if (args.length) {
            let index = 0;
            args.forEach((target) => {
                setTimeout(() => {
                    ChatLib.say("/h kick " + target);
                    ChatLib.chat("&6&l[Housing QOL] &r&eKicked &e" + target + " from your house!");
                }, index * 1100);
                index++;
            });
        }
    } else {
        ChatLib.chat("&6&l[Housing QOL] &r&cCommand Aliases is currently disabled in settings.");
    }
}

register("command", housingKick).setName("hk");

    // Housing Ban

function housingBan(...args) {
    if (settings.settings.cmdAliases) {
        if (args === undefined){
            ChatLib.chat("&6&l[Housing QOL] &r&cInvalid arguments provided! (/hb <player1> <player2> ...)");
            return;
        }

        if (args.length) {
            let index = 0;
            args.forEach((target) => {
                setTimeout(() => {
                    ChatLib.say("/h ban " + target);
                    ChatLib.chat("&6&l[Housing QOL] &r&eBanned &e" + target + " from your house!");
                }, index * 1100);
                index++;
            });
        }
    } else {
        ChatLib.chat("&6&l[Housing QOL] &r&cCommand Aliases is currently disabled in settings.");
    }
}
register("command", housingBan).setName("hb");

    // Housing Mute

function housingMute(...args) {
    if (settings.settings.cmdAliases) {
        if (args === undefined){
            ChatLib.chat("&6&l[Housing QOL] &r&cInvalid arguments provided! (/hm <player1> <player2> ...)");
            return;
        }

        if (args.length) {
            let index = 0;
            args.forEach((target) => {
                setTimeout(() => {
                    ChatLib.say("/h mute " + target);
                    ChatLib.chat("&6&l[Housing QOL] &r&eMuted &e" + target + " in your house!");
                }, index * 1100);
                index++;
            });
        }
    } else {
        ChatLib.chat("&6&l[Housing QOL] &r&cCommand Aliases is currently disabled in settings.");
    }
}
register("command", housingMute).setName("hm");

    // Housing Unban

function housingUnban(...args) {
    if (settings.settings.cmdAliases) {
        if (args === undefined){
            ChatLib.chat("&6&l[Housing QOL] &r&cInvalid arguments provided! (/hunban <player1> <player2> ...)");
            return;
        }

        if (args.length) {
            let index = 0;
            args.forEach((target) => {
                setTimeout(() => {
                    ChatLib.say("/h unban " + target);
                    ChatLib.chat("&6&l[Housing QOL] &r&eUnbanned &e" + target + " from your house!");
                }, index * 1100);
                index++;
            });
        }
    } else {
        ChatLib.chat("&6&l[Housing QOL] &r&cCommand Aliases is currently disabled in settings.");
    }
}
register("command", housingUnban).setName("hunban");

    // Housing Unmute

function housingUnmute(...args) {
    if (settings.settings.cmdAliases) {
        if (args === undefined){
            ChatLib.chat("&6&l[Housing QOL] &r&cInvalid arguments provided! (/hunmute <player1> <player2> ...)");
            return;
        }

        if (args.length) {
            let index = 0;
            args.forEach((target) => {
                setTimeout(() => {
                    ChatLib.say("/h unmute " + target);
                    ChatLib.chat("&6&l[Housing QOL] &r&eUnmuted &e" + target + " in your house!");
                }, index * 1100);
                index++;
            });
        }
    } else {
        ChatLib.chat("&6&l[Housing QOL] &r&cCommand Aliases is currently disabled in settings.");
    }
}
register("command", housingUnmute).setName("hunmute");

    // TestPlaceHolders

function testPlaceholder(...args) {
    if (settings.settings.cmdAliases) {
        const placeholder = args.join(" ");

        if (!placeholder) {
            ChatLib.chat("&6&l[Housing QOL] &r&cInvalid arguments provided! (/tph <arg1> <arg2> ...)");
            return;
        } else {
            ChatLib.say("/testplaceholder " + placeholder);
        }
    } else {
        ChatLib.chat("&6&l[Housing QOL] &r&cCommand Aliases is currently disabled in settings.");
    }
}
register("command", testPlaceholder).setName("tph");