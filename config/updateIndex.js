import * as fs from "fs";
import * as path from "path";

const divApp = `<div id="app"></div>`;
const filePath = "./dist/index.html";
const content = fs.readFileSync(filePath, "utf-8");
const lines = content.split("\n");
const newLines = lines.map((line) => {
	if (line.includes(divApp)) {
		return `${line}
		<%= yield %>`;
	} else {
		return line;
	}
});

const newContent = newLines.join("\n");
fs.writeFileSync(filePath, newContent);
