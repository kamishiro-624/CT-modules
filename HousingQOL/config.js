import Settings from "../Amaterasu/core/Settings";
import DefaultConfig from "../Amaterasu/core/DefaultConfig";

const mainConfig = new DefaultConfig("HousingQOL", "data/settings.json");

  // Sign Fix
mainConfig.addSwitch({
  configName: "signFix",
  title: "Hide \"Unable to locate sign\" messages",
  description: "Toggles visibility of \"Unable to locate sign\" messages.",
  category: "General",
  value: true
});
  // Command Aliases
mainConfig.addSwitch({
  configName: "cmdAliases",
  title: "Command Aliases",
  description: "Enables aliases of commonly used Housing commands, full list in GitHub README.",
  category: "General",
  value: false
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
  value: false
});

mainConfig.addSwitch({
  configName: "soundLoggerShowPosition",
  title: "Show Position",
  description: "Displays the position of each logged sound.",
  category: "General",
  subcategory: "Sound Logger",
  value: false
});

const settings = new Settings("HousingQOL", mainConfig, "data/ColorScheme.json");

export default settings;