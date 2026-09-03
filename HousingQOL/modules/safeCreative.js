import settings from "../config";

function blockBroken(block, event) {
    if (!settings.settings.safeCreative || !Player.asPlayerMP().player.field_71075_bZ.field_75098_d) return;

    const targetBlock = block.type.name;
    const blockOptions = settings.settings.safeCreativeConfig.options;

    let customBlocks = "null";
    const CSCCvalue = settings.settings.customSafeCreativeConfig.value;
    
    if (CSCCvalue) {
        customBlocks = CSCCvalue.split(" ");

        for (const blockName of customBlocks) {
            if (targetBlock === blockName) {
                cancel(event);
                ChatLib.chat("&6&l[Housing QOL] &r&6SafeCreative prevented you from breaking &e" + targetBlock + "&6!")
                return;
            }
        }
    }

    for (const blockName of blockOptions) {
        if (targetBlock === blockName.configName && blockName.value) {
            cancel(event);
            ChatLib.chat("&6&l[Housing QOL] &r&6SafeCreative prevented you from breaking &e" + targetBlock + "&6!")
            return;
        }
    }
}

register("hitBlock", blockBroken);