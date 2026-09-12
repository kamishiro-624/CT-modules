let hiddenPlayers = [];
let hidingAll = false;

function hidePlayer(entity, useless, useless2, event) {
    if (entity.getClassName() === "EntityOtherPlayerMP" || entity.getClassName() === "EntityPlayerSP") { // check if player
        const playerName = entity.getName().toLowerCase();
        if (hiddenPlayers.includes(playerName) || hidingAll) {
            cancel(event);
        }
    }
}

register("renderEntity", hidePlayer);

register("command", (...args) => {
    if (args === undefined || args.length === 0 || args.every((player) => player.trim() === "")) { // checks if empty
        ChatLib.chat("&cInvalid arguments provided! (/hideplayers <player1> <player2> ... OR /hideplayers <clear/all/list> )");
        return;
    }

    const possibleCmd = args[0].toLowerCase();
    if (args.length === 1) {
        if (possibleCmd === "clear") {
            hiddenPlayers = [];
            ChatLib.chat("&6&l[Housing QOL] &r&6Cleared the list of hidden players!");
            return;
        }

        if (possibleCmd === "all") {
            hidingAll = !hidingAll;
            if (hidingAll) ChatLib.chat("&6&l[Housing QOL] &r&6Now &ehiding &6all players!");
            if (!hidingAll) ChatLib.chat("&6&l[Housing QOL] &r&6Now &eshowing &6all players!");
            return;
        }

        if (possibleCmd === "list") {
            let hiddenPlayersList = hiddenPlayers.join(", ");
            if (hiddenPlayers.length === 0) {
                ChatLib.chat("&6&l[Housing QOL] &r&6List of players currently being hidden: &eNone!");
                return;
            }
            ChatLib.chat("&6&l[Housing QOL] &r&6List of players currently being hidden: &e" + hiddenPlayersList);
            return;
        }
    }
    

    for (const player of args) {
        const normPlayer = player.toLowerCase();
        if (hiddenPlayers.includes(normPlayer)) {
            hiddenPlayers.splice(hiddenPlayers.indexOf(normPlayer), 1);
            ChatLib.chat("&6&l[Housing QOL] &r&6Removed &e" + player + " &6from the list of hidden players!");
        } else {
            hiddenPlayers.push(normPlayer);
            ChatLib.chat("&6&l[Housing QOL] &r&6Added &e" + player + " &6to the list of hidden players!");
        }
    }
    // ChatLib.chat(hiddenPlayers.join(", "));
}).setName("hideplayers").setAliases("hp");

register("worldLoad", () => {
    if (hidingAll) ChatLib.chat("&6&l[Housing QOL] &r&6All players are currently being hidden. To show them again, run [/hp all].");
});