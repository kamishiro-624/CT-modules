import RenderLibV2 from "RenderLibV2";

const r = 15; // radius
const xc = -80; // Center x
const zc = 85; // Center z
const yc = 2; // Center y
let rendering = false;

const foundPoints = {};

function addPoint(x, y) {
    foundPoints[x + "," + y] = [x, y];
}

function getCirclePoints(radius, centerX, centerY) {
    let x = 0;
    let y = radius; // this is actually z but imagine its 2d
    let p = 1 - radius;

    function addSymmetricPoints(cx, cy, x, y) {
        addPoint(cx + x, cy + y);
        addPoint(cx - x, cy + y);
        addPoint(cx + x, cy - y);
        addPoint(cx - x, cy - y);
        addPoint(cx + y, cy + x);
        addPoint(cx - y, cy + x);
        addPoint(cx + y, cy - x);
        addPoint(cx - y, cy - x);
    }

    // initial
    addSymmetricPoints(centerX, centerY, x, y);

    // loops until 45 degree
    while (x < y) {
        x++;
        
        if (p < 0) {
            // midpoint is inside, choose upper pixel
            p = p + 2 * x + 1;
        } else {
            // midpoint is outside, choose lower pixel
            y--;
            p = p + 2 * x - 2 * y + 1;
        }
        
        addSymmetricPoints(centerX, centerY, x, y);
    }
}

getCirclePoints(r, xc, zc);

const fPArray = Object.keys(foundPoints);

register("command", () => {
    ChatLib.chat("&6&l[Housing QOL] &r&6This module is still a WIP!");

    rendering = !rendering;
    ChatLib.chat(rendering);
}).setName("renderCircle");

register("renderWorld", () => {
    if (!rendering) return;

    fPArray.forEach((point) => {
        const values = point.split(",");
        const x = Number(values[0]);
        const z = Number(values[1]);

        RenderLibV2.drawEspBoxV2(x - 0.5, yc, z + 0.5, 1, 1, 1, 0, 0, 1, 1, true);
    });
});
