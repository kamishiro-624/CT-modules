// thanks to someone for the code idk who it was but thanks bro

import settings from "./config";

const REPOSITORY = "https://github.com/kamishiro-624/HousingQOL";
const REMOTE_METADATA = "https://raw.githubusercontent.com/kamishiro-624/HousingQOL/main/metadata.json";
const ZIP_URL = `${REPOSITORY}/archive/refs/heads/main.zip`;
const MODULE_PATH = "./config/ChatTriggers/modules/HousingQOL";
const TEMP_PATH = "./config/ChatTriggers/modules/.HousingQOL-update";
const ZIP_PATH = "./config/ChatTriggers/modules/.HousingQOL-update.zip";

const JavaFile = Java.type("java.io.File");
const Files = Java.type("java.nio.file.Files");
const Paths = Java.type("java.nio.file.Paths");
const StandardCopyOption = Java.type("java.nio.file.StandardCopyOption");

function parseVersion(version) {
	return String(version).replace(/^v/, "").split(".").map(part => parseInt(part, 10) || 0);
}

function isNewer(remoteVersion, localVersion) {
	const remote = parseVersion(remoteVersion);
	const local = parseVersion(localVersion);

	for (let index = 0; index < Math.max(remote.length, local.length); index++) {
		if ((remote[index] || 0) !== (local[index] || 0)) {
			return (remote[index] || 0) > (local[index] || 0);
		}
	}

	return false;
}

function copyDirectory(source, destination, sourceRoot) {
	const files = source.listFiles();
	if (files === null) return;

	files.forEach(file => {
		const relativePath = sourceRoot.toPath().relativize(file.toPath()).toString().replace(/\\/g, "/");
		if (relativePath === "data/settings.json") return;

		const target = new JavaFile(destination, file.getName());
		if (file.isDirectory()) {
			target.mkdirs();
			copyDirectory(file, target, sourceRoot);
		} else {
			Files.copy(file.toPath(), target.toPath(), StandardCopyOption.REPLACE_EXISTING);
		}
	});
}

function downloadAndInstall(remoteVersion) {
	const archiveRoot = new JavaFile(TEMP_PATH, "HousingQOL-main");
	const moduleRoot = new JavaFile(MODULE_PATH);

	try {
		FileLib.deleteDirectory(TEMP_PATH);
		FileLib.unzip(ZIP_PATH, TEMP_PATH);
		copyDirectory(archiveRoot, moduleRoot, archiveRoot);
		FileLib.deleteDirectory(TEMP_PATH);
		FileLib.delete(ZIP_PATH);

		ChatLib.chat(`&6&l[Housing QOL] &r&6Updated to version &e${remoteVersion}&6. Reloading...`);
		setTimeout(() => ChatLib.command("ct reload", true), 20);
	} catch (error) {
		FileLib.deleteDirectory(TEMP_PATH);
		FileLib.delete(ZIP_PATH);
		ChatLib.chat(`&6&l[Housing QOL] &r&cUpdate failed: ${error}`);
	}
}

function checkForUpdate(manual) {
    console.log("Housing QOL is currently checking for updates...");
    if (!settings.settings.autoUpdToggle && !manual) return;
	new Thread(() => {
		try {
			const localMetadata = JSON.parse(FileLib.read("HousingQOL", "metadata.json"));
			const remoteMetadata = JSON.parse(FileLib.getUrlContent(REMOTE_METADATA));

			if (!isNewer(remoteMetadata.version, localMetadata.version)) {
				if (manual) ChatLib.chat(`&6&l[Housing QOL] &r&6You are up to date (&e${localMetadata.version}&6).`);
				return;
			}

			ChatLib.chat(`&6&l[Housing QOL] &r&6Downloading update &e${remoteMetadata.version}&6...`);
			Files.copy(new java.net.URL(ZIP_URL).openStream(), Paths.get(ZIP_PATH), StandardCopyOption.REPLACE_EXISTING);
			downloadAndInstall(remoteMetadata.version);
		} catch (error) {
			if (manual) ChatLib.chat(`&6&l[Housing QOL] &r&cCould not check for updates: ${error}`);
		}
	}).start();
}

register("command", () => {
    checkForUpdate(true);
}).setName("hqolupdate");
setTimeout(() => checkForUpdate(false), 40);
