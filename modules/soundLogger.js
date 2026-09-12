import settings from "../config";

function logSound(pos, name, volume, pitch, category, event) {
    if (settings.settings.soundLogger && settings.settings.soundLoggerIncludeAll === true) {
        ChatLib.chat("&6&l[Housing QOL] &r&6Sound logged: &e" + name + "&6 (Volume: &e" + Math.round(10 * volume) / 10 + "&6)" + " &6(Pitch: &e" + Math.round(10 * pitch) / 10 + "&6)");
        if (settings.settings.soundLoggerShowPosition) {
            ChatLib.chat("&6&l[Housing QOL] &r&6Position: &e" + pos.x + ", " + pos.y + ", " + pos.z);
        }
        return;
    }
    
    if (settings.settings.soundLogger === false || volume <= 0 || pitch <= 0 || 
        name.includes('step') || 
        name.includes('dig') || 
        name.includes('gui')
        ) {
            return;
        }
    ChatLib.chat("&6&l[Housing QOL] &r&6Sound logged: &e" + name + "&6 (Volume: &e" + Math.round(10 * volume) / 10 + "&6)" + " &6(Pitch: &e" + Math.round(10 * pitch) / 10 + "&6)");
    if (settings.settings.soundLoggerShowPosition) {
        ChatLib.chat("&6&l[Housing QOL] &r&6Position: &e" + pos.x + ", " + pos.y + ", " + pos.z);
    }
}

register("soundPlay", logSound);