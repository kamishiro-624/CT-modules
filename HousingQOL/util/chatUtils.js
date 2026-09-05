// woah this name sure seems familiar

export function copyText(text) {
    const Selection = java.awt.datatransfer.StringSelection;
    const Toolkit = java.awt.Toolkit;
    
    const stringSelection = new Selection(text);
    const clipboard = Toolkit.getDefaultToolkit().getSystemClipboard();
    
    clipboard.setContents(stringSelection, null);

    // low level slop straight from the docs </3
}