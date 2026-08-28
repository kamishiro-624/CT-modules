import settings from "./config";
import "./commands/colorCodeRef";

register("command", () => {
    settings.openGui();
}).setName("housingqol").setAliases("hqol", "housingqolsettings", "housingqolconfig");

register("step", () => {
  if (settings.settings.signFix) {
    function hideUnableToLocateSign(event) {
        if (settings.settings.signFix) {
            cancel(event);
        }
    }
    register("chat", hideUnableToLocateSign).setCriteria("Unable to locate sign at ${*}");
  }
}).setFps(1);