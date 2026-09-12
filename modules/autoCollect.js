import settings from "../config";

register("chat", () => {
    if (!settings.settings.autoCollect) return;
    ChatLib.say("/collect");
}).setCriteria("* First person to type /collect will earn free coins!").setContains();