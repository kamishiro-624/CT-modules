import settings from "../config";

// Housing Kick

function housingKick(target) {
    if (settings.settings.cmdAliases) {
        if (target) {
            ChatLib.say("/h kick " + target);
            ChatLib.chat("&6&l[Housing QOL] Kicked &e" + target + " from your house!");
        } else {
            ChatLib.chat("&6&l[Housing QOL] &r&cInvalid arguments provided! (/hk {player})");
        }
    } else {
        ChatLib.chat("&6&l[Housing QOL] &r&cCommand Aliases is currently disabled in settings.");
    }
}
register("command", housingKick).setName("hk");

    // Housing Ban

function housingBan(target) {
    if (settings.settings.cmdAliases) {
        if (target) {
            ChatLib.say("/h ban " + target);
            ChatLib.chat("&6&l[Housing QOL] Banned &e" + target + " from your house!");
        } else {
            ChatLib.chat("&6&l[Housing QOL] &r&cInvalid arguments provided! (/hb {player})");
        }
    } else {
            ChatLib.chat("&6&l[Housing QOL] &r&cCommand Aliases is currently disabled in settings.");
    }
}
register("command", housingBan).setName("hb");

// NOTE: add support for actions on multiple players!! 