let value = "NOT FOUND";

function findValue(msgValue, event) {
    value = msgValue;
    cancel(event);
}

register("chat", findValue).setCriteria("[SEARCHSEQ] ${msgValue}");

function viewVariable(scope, key) {
    value = "NOT FOUND";

    if (scope === undefined || key === undefined) {
        ChatLib.chat("&6&l[Housing QOL] &r&cInvalid arguments provided! (/vv <scope> <key>)");
        return;
    }

    if (scope === "player") {
        ChatLib.say("/testplaceholder &0&m[SEARCHSEQ]&r %var.player/" + key + "%");
        setTimeout(() => {
            ChatLib.chat("&6&l[Housing QOL] &r&6Returned value for &2" + key + "&6: &e" + value);
        }, 500);
    } else if (scope === "global") {
        ChatLib.say("/testplaceholder &0&m[SEARCHSEQ]&r %var.global/" + key + "%");
        setTimeout(() => {
            ChatLib.chat("&6&l[Housing QOL] &r&6Returned value for &2" + key + "&6: &e" + value);
        }, 500);
    } else if (scope === "team") {
        ChatLib.say("/testplaceholder &0&m[SEARCHSEQ]&r %var.player/" + key + "%");
        setTimeout(() => {
            ChatLib.chat("&6&l[Housing QOL] &r&6Returned value for &2" + key + "&6: &e" + value);
        }, 500);
    } else {
        ChatLib.chat("&6&l[Housing QOL] &r&cInvalid scope provided! (player, global, team)");
        return;
    }
}

register("command", viewVariable).setName("viewvariable").setAliases("vv");