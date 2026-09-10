import settings from "../config";

function getWhitelistedPlayers() {
    return settings.settings.paaWhitelist.split(",").map((player) => player.trim().toLowerCase());
    // spwit and twim :3
}

function acceptParty(player) {
    if (!settings.settings.pAutoAccept) return;

    msgArray = player.split(" ");
    let playerName;
    if (msgArray.length < 2) {
        playerName = msgArray[0];
    } else {
        playerName = msgArray[1];
    }

    console.log("detected party invite from " + playerName); // detect when no rank

    if (settings.settings.pWhitelistToggle) {
        // detect if string is empty
        const whitelistedPlayers = getWhitelistedPlayers();

//        ChatLib.chat("Whitelist: " + whitelistedPlayers.join(", "));

//        ChatLib.chat("detected party invite from " + playerName);
        if (!whitelistedPlayers.includes(playerName.toLowerCase())) return;

        ChatLib.say("/p accept " + playerName);
    } else {
        ChatLib.say("/p accept " + playerName);
    }
}

register("chat", acceptParty).setCriteria(">newLine<-${player} has invited you to join their party!").setContains();

register("command", (event) => {
    ChatLib.chat("Whitelist: " + getWhitelistedPlayers().join(", "));
}).setName("showwhitelist");