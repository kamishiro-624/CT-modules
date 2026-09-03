import settings from "../config";

function hideUnableToLocateSign(event) {
  if (settings.settings.signFix) {
    cancel(event);
  }
}

register("chat", hideUnableToLocateSign).setCriteria("Unable to locate sign at ${*}");
