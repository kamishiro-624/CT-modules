import settings from "../config";
import { copyText } from "../util/chatUtils";

const plrMessageRegex = /^\s*\+?\s*(?:(?:[A-Za-z]+)\s*>\s*|(?:From|To)\s+)?(?:\[[^\]]+\]\s*)*([A-Za-z0-9_]{1,16}):\s+(.+)$/

register("command", (...textSplit) => {
    const text = textSplit.join(" ")
        .replaceAll("§","&");
    console.log("&aCopied message to clipboard: " + text);
    copyText(text);
    // all this just to copy a msg :/
}).setName("hIcM");

function addTags(event) {
    let finalMsg = "&cError occured in HousingQOL, please report.";
    if (!settings.settings.chatUtilities) return;

    const chatMessage = ChatLib.getChatMessage(event, true);
    const tags = [];

    if (settings.settings.chatUtilTpPlr) {
        const teleportTag = teleportPlayer(chatMessage);
        if (teleportTag) tags.push(teleportTag, " ");
    }

    if (settings.settings.chatUtilCopyMsg) {
        const copyTag = copyMessage(chatMessage);
        if (copyTag) tags.push(copyTag, " "); // js arraylist
    }

    if (tags.length === 0) return;

    cancel(event);

    finalMsg = formatChatMessage(chatMessage);
    ChatLib.chat(new Message(finalMsg + " ", ...tags));
}

register("chat", addTags);

function formatChatMessage(chatMessage) {
    if (settings.settings.showFormattingInChat) return chatMessage;

    const cleanMessage = chatMessage.removeFormatting();
    const match = cleanMessage.match(plrMessageRegex);
    if (!match) return chatMessage; // the message was already unformatted (how)

    const contentStart = match.index + match[0].lastIndexOf(match[2]);
    const rawContentStart = getRawIndex(cleanMessage, chatMessage, contentStart);

    return chatMessage.slice(0, rawContentStart) + chatMessage.slice(rawContentStart).removeFormatting();
}

function getRawIndex(cleanMessage, rawMessage, cleanIndex) {
    let rawIndex = 0;
    let currentCleanIndex = 0;

    while (rawIndex < rawMessage.length && currentCleanIndex < cleanIndex) {
        if ((rawMessage[rawIndex] === "&" || rawMessage[rawIndex] === "§") && rawIndex + 1 < rawMessage.length) {
            rawIndex += 2;
        } else {
            rawIndex++;
            currentCleanIndex++;
        }
    }

    return rawIndex;
}

function teleportPlayer(chatMessage) {
    const cleanMessage = chatMessage.removeFormatting();

    const match = cleanMessage.match(plrMessageRegex);
	if (!match) return;

    const player = match[1];
    const message = match[2];

    return new TextComponent("&6[T]").setClick("run_command", "/tp " + player).setHover("show_text", "Click to teleport to &e" + player);
}

function copyMessage(chatMessage) {
    const cleanMessage = chatMessage.removeFormatting();
    let finalMessage = "ERROR COPYING MESSAGE";

    if (settings.settings.addFormattingCopyMsg) {
        finalMessage = chatMessage;
    } else {
        finalMessage = cleanMessage;
    }

    return new TextComponent("&e[C]").setClick("run_command", "/hIcM " + finalMessage).setHover("show_text", "Click to copy message to clipboard");
}
