import settings, { safeCreativeConfigOptions } from "../config";
import { blockNamesArray } from "../util/scBlockArrays";
import { metadataBlocks } from "../util/scBlockArrays";

function blockBroken(block, event) {
    let targetBlockFixed;

    if (!settings.settings.safeCreative || !Player.asPlayerMP().player.field_71075_bZ.field_75098_d) return;

    const targetBlock = metadataBlocks.includes(block.type.name)
        ? block.type.name + ":" + block.getMetadata()
        : block.type.name;

    
    // ChatLib.chat(targetBlock);
    // if (blockNamesArray[targetBlock]) targetBlockFixed = blockNamesArray[targetBlock]; else targetBlockFixed = targetBlock;
    // ChatLib.chat("&e" + targetBlockFixed);

    const blockOptions = safeCreativeConfigOptions.map((option) => option.configName); // puts all the configNames into an array

    let customBlocks = "null";
    const CSCCvalue = settings.settings.customSafeCreativeConfig;
    
    // Custom Blacklist

    console.log(CSCCvalue);

    if (CSCCvalue) {
        customBlocks = CSCCvalue.split(",").map((blockName) => blockName.trim());

        for (const blockName of customBlocks) {
            if (blockName.includes(":A") && targetBlock.startsWith(blockName.slice(0, -2))) {
                cancel(event);
                if (blockNamesArray[targetBlock]) targetBlockFixed = blockNamesArray[targetBlock]; else targetBlockFixed = targetBlock;
                ChatLib.chat("&6&l[Housing QOL] &r&6SafeCreative prevented you from breaking all blocks under group &e" + block.type.name + " &8(" + targetBlockFixed + ")&6!")
                return;
            }
            

            if (targetBlock === blockName) {
                cancel(event);
                if (blockNamesArray[targetBlock]) targetBlockFixed = blockNamesArray[targetBlock]; else targetBlockFixed = targetBlock;
                ChatLib.chat("&6&l[Housing QOL] &r&6SafeCreative prevented you from breaking &e" + targetBlockFixed + "&6!")
                return;
            }
        }
    }

    // Built-in GUI Blacklist

    for (const blockName of blockOptions) {
        if (targetBlock === blockName && settings.settings[blockName]) {
            cancel(event);
            if (blockNamesArray[targetBlock]) targetBlockFixed = blockNamesArray[targetBlock]; else targetBlockFixed = targetBlock;
            ChatLib.chat("&6&l[Housing QOL] &r&6SafeCreative prevented you from breaking &e" + targetBlockFixed + "&6!")
            return;
        }
    }
}

register("hitBlock", blockBroken);