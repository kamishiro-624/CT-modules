import Settings from "../Amaterasu/core/Settings";
import DefaultConfig from "../Amaterasu/core/DefaultConfig";

const mainConfig = new DefaultConfig("HousingQOL", "data/settings.json");

mainConfig.addSwitch({
  configName: "signFix",
  title: "Hide \"Unable to locate sign\" messages",
  description: "Toggles visibility of \"Unable to locate sign\" messages.",
  category: "General",
  value: true
});

mainConfig.addSwitch({
  configName: "cmdAliases",
  title: "Command Aliases",
  description: "Enables aliases of commonly used Housing commands, full list in GitHub README.",
  category: "General",
  value: false
});

const settings = new Settings("HousingQOL", mainConfig, "data/ColorScheme.json");

export default settings;
