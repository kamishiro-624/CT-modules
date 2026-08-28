let colorCodesVisible = false;
const colorCodesImg = new Image("color-codes.png", "https://hypixel.net/attachments/1601529095179-png.2020411/");

function renderCC() {
    if (colorCodesVisible) {
        const centerX = (Renderer.screen.getWidth() / 2) - (300 / 2);
        const centerY = (Renderer.screen.getHeight() / 2) - (220 / 2);

        Renderer.drawRect(
            Renderer.color(0, 0, 0, 255), 
            centerX - 4, 
            centerY - 4, 
            300 + (4 * 2), 
            220 + (4 * 2)
        );

        colorCodesImg.draw(centerX, centerY, 300, 220);
    }
}

register("renderOverlay", renderCC);

function toggleColorCodes() {
    if (colorCodesVisible) {
        ChatLib.chat("&6&l[Housing QOL] &r&6Toggled Color Code Chart &cOff&r!");
        colorCodesVisible = false;
    } else {
        ChatLib.chat("&6&l[Housing QOL] &r&6Toggled Color Code Chart &eOn&r!");
        colorCodesVisible = true;
    }
}

register("command", toggleColorCodes).setName("colorcodes").setAliases("cc");