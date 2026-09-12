import settings from "../config";

function removeAsterisk(msg, event) {
    if (!settings.settings.noAsterisk) {
        return;
    }

    let clearMessage = ChatLib.getChatMessage(event, true);
    if (clearMessage.startsWith("&r&7* ")) {
        cancel(event);
        ChatLib.chat(clearMessage.slice(6));
    }
}

register("chat", removeAsterisk).setCriteria("* ${msg}");   