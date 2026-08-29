import settings from "../config";

// Housing Kick

function housingKickBulk(...args) {
    if (settings.settings.cmdAliases) {
        if (args === undefined){
            ChatLib.chat("&6&l[Housing QOL] &r&cInvalid arguments provided! (/hk {player1} {player2} ...)");
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

register("command", housingKickBulk).setName("hk");

    // Housing Ban

function housingBan(...args) {
    if (settings.settings.cmdAliases) {
        if (args === undefined){
            ChatLib.chat("&6&l[Housing QOL] &r&cInvalid arguments provided! (/hb {player1} {player2} ...)");
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