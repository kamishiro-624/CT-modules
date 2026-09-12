import RenderLibV2 from "RenderLibV2";
import settings from "../config";

let r = 10; // radius
let xc = 0; // Center x
let zc = 0; // Center z
let yc = 0; // Center y

let fPArray = [];

function updateOrigin() {
    if (settings.settings.circleX !== "") {
        xc = Number(settings.settings.circleX);
    } else {
        xc = Math.round(Player.getX());
    }

    if (settings.settings.circleY !== "") {
        yc = Number(settings.settings.circleY);
    } else {
        yc = Math.round(Player.getY());
    }

    if (settings.settings.circleZ !== "") {
        zc = Number(settings.settings.circleZ);
    } else {
        zc = Math.round(Player.getZ());
    }

    if (settings.settings.circleR !== "") {
        r = Number(settings.settings.circleR);
    } else {
        r = 10; // default
    }
}

let rendering = false;

const foundPoints = {};

function addPoint(x, y) {
    foundPoints[x + "," + y] = [x, y];
}

function getCirclePoints(radius, centerX, centerY) {
    Object.keys(foundPoints).forEach((point) => delete foundPoints[point]);

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

    fPArray = Object.keys(foundPoints);
}

function getRenderCoordinates(point) {
    const values = point.split(",");
    const pointX = Number(values[0]);
    const pointSecond = Number(values[1]);
    const upright = settings.settings.circleUpright;
    const rotated = settings.settings.circleRotate;

    const xOffset = pointX - xc;
    const secondOffset = pointSecond - zc;

    if (upright && rotated) {
        return {
            x: xc,
            y: yc + secondOffset,
            z: zc + xOffset
        };
    }

    if (upright) {
        return {
            x: xc + xOffset,
            y: yc + secondOffset,
            z: zc
        };
    }

    return {
        x: xc + xOffset,
        y: yc,
        z: zc + secondOffset
    };
}

register("command", () => {
    updateOrigin();
    getCirclePoints(r, xc, zc);
    renderCircle(xc, yc, zc, r);
}).setName("rendercircle").setAliases("rc");

export function renderCircle(xc, yc, zc, r) {
    rendering = !rendering;
    if (rendering) ChatLib.chat("&6&l[Housing QOL] &r&6Rendering circle at &e" + xc + ", " + yc + ", " + zc + " &6with radius of &e" + r + "!");
    if (!rendering) ChatLib.chat("&6&l[Housing QOL] &r&6No longer rendering circle at &e" + xc + ", " + yc + ", " + zc + " &6with radius of &e" + r + "!");
}

register("renderWorld", () => {
    if (!rendering) return;

    fPArray.forEach((point) => {
        const { x, y, z } = getRenderCoordinates(point);

        RenderLibV2.drawEspBoxV2(x - 0.5, y, z + 0.5, 1, 1, 1, 0, 0, 1, 1, true);
    });
});
