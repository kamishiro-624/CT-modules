import Settings from "../Amaterasu/core/Settings";
import DefaultConfig from "../Amaterasu/core/DefaultConfig";

const mainConfig = new DefaultConfig("HousingQOL", "data/settings.json");

  // Sign Fix
mainConfig.addSwitch({
  configName: "signFix",
  title: "Hide \"Unable to locate sign\" messages",
  description: "Toggles visibility of \"Unable to locate sign\" messages.",
  category: "Chat",
  value: true
});
  // Command Aliases
mainConfig.addSwitch({
  configName: "cmdAliases",
  title: "Command Aliases",
  description: "Enables aliases of commonly used Housing commands, full list and syntax in GitHub README.",
  category: "General",
  value: false
});

// Command Aliases CONFIG

mainConfig.addMultiCheckbox({
    configName: "cmdAliasesConfig",
    title: "Toggle Specific Command Aliases",
    description: "Toggle on and off specific aliases for Command Aliases. (You can scroll in the menu.)",
    category: "General",
    placeHolder: "View Commands",
    subcategory: null,

    options: [
      {
        title: "Housing Kick (/hk)",
        configName: "housingKickToggle",
        value: true
      },
      {
        title: "Housing Ban (/hb)",
        configName: "housingBanToggle",
        value: true
      },
      {
        title: "Housing Mute (/hm)",
        configName: "housingMuteToggle",
        value: true
      },
      {
        title: "Housing Unban (/hunban)",
        configName: "housingUnbanToggle",
        value: true
      },
      {
        title: "Housing Unmute (/hunmute)",
        configName: "housingUnmuteToggle",
        value: true
      },
      {
        title: "Test Placeholders (/tph)",
        configName: "testPlaceholdersToggle",
        value: true
      },
      {
        title: "Housing Demote (/hd)",
        configName: "housingDemoteToggle",
        value: true
      },
      {
        title: "Housing Warn (/hw)",
        configName: "housingWarnToggle",
        value: true
      },
      {
        title: "Parkour Reset (/pkr)",
        configName: "parkourResetToggle",
        value: true
      },
      {
        title: "Parkour Checkpoint (/pkc)",
        configName: "parkourCheckpointToggle",
        value: true
      }
    ],

    shouldShow(data) {
      return data.cmdAliases;
    }
});

// Safe Creative
mainConfig.addSwitch({
  configName: "safeCreative",
  title: "Safe Creative Mode",
  description: "Prevents the breaking of specified blocks while in creative mode.",
  category: "General",
  value: false
});

export const safeCreativeConfigOptions = [
   {
      title: "Chest",
      configName: "Chest",
      value: true
    },
    {
      title: "Trapped Chest",
      configName: "Trapped Chest",
      value: true
    },
    {
      title: "Hopper",
      configName: "Hopper",
      value: true
    },
    {
      title: "Dropper",
      configName: "Dropper",
      value: true
    },
    {
      title: "Dispenser",
      configName: "Dispenser",
      value: true
    },
    {
      title: "Furnace",
      configName: "Furnace",
      value: true
    },
    {
      title: "Sign",
      configName: "Sign",
      value: true
    }
]

mainConfig.addMultiCheckbox({
  configName: "safeCreativeConfig",
  title: "Safe Creative Blocks",
  description: "Toggle a list of preset blocks for Safe Creative. (You can scroll in the menu.)",
  category: "General",
  placeHolder: "Edit",

  options: safeCreativeConfigOptions,

  shouldShow(data) {
    return data.safeCreative;
  }
})

mainConfig.addTextInput({
  configName: "customSafeCreativeConfig",
  title: "Custom Blacklist",
  description: "Put block names with metadata in the custom blacklist, separated by commas. Check README for block list and more info. (Highly recommended!)",
  category: "General",
  value: "",
  placeHolder: "",

  shouldShow(data) {
    return data.safeCreative;
  }
});

  // Sound Logger
mainConfig.addSwitch({
  configName: "soundLogger",
  title: "Sound Logger",
  description: "Logs sounds played in the game to chat. (Ignores footsteps, digging, and GUI sounds by default.)",
  category: "General",
  subcategory: "Sound Logger",
  value: false
});

mainConfig.addSwitch({
  configName: "soundLoggerIncludeAll",
  title: "Include All Sounds",
  description: "Includes ALL sounds in the chat log. (SPAM!)",
  category: "General",
  subcategory: "Sound Logger",
  value: false,

  shouldShow(data) {
    return data.soundLogger;
  }
});

mainConfig.addSwitch({
  configName: "soundLoggerShowPosition",
  title: "Show Position",
  description: "Displays the position of each logged sound.",
  category: "General",
  subcategory: "Sound Logger",
  value: false,

  shouldShow(data) {
    return data.soundLogger;
  }
});

// No Asterisk
mainConfig.addSwitch({
  configName: "noAsterisk",
  title: "Remove Asterisk from Housing Messages",
  description: "Removes the leading asterisk from incoming housing messages.",
  category: "Chat",
  value: false
});

const settings = new Settings("HousingQOL", mainConfig, "data/ColorScheme.json");

// This code block was genuinely confusing, I still don't really know how it works but hopefully I can get a better grasp on it soon...
settings.setCategorySort((a, b) => {
  const order = ["General", "Chat"];
  return order.indexOf(a.category) - order.indexOf(b.category);
}).apply();

export default settings;