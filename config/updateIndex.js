import * as fs from 'fs';

const LINE_APP = `<div id="app"></div>`;
const LINE_HEAD_END = `</head>`;

const filePath = './dist/index.html';
const content = fs.readFileSync(filePath, 'utf-8');
const lines = content.split('\n');
const newLines = lines.map((line) => {
	if (line.includes(LINE_APP)) {
		return `${line}
		<%= yield %>`;
	} else if (line.includes(LINE_HEAD_END)) {
		return `		<%= landing_page_layout_js %>
	${line}`;
	} else {
		return line;
	}
});

const newContent = newLines.join('\n');
fs.writeFileSync(filePath, newContent);
