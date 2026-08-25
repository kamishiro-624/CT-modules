function runCollect(player, message, event) {
    ChatLib.say("/collect");
}

register("chat", runCollect).setCriteria("* First person to type /collect will earn free coins!").setContains();
