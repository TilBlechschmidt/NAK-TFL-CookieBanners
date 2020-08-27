const fs = require("fs");
const data = fs.readFileSync(0, "utf-8");
const rows = data.split('\n').map(line => line.split('\t'));

let accumulated = {};

rows.forEach(row => {
	const key = row.join('-');
	if (!accumulated.hasOwnProperty(key)) accumulated[key] = { values: row, count: 0 };

	accumulated[key].count += 1;
});

function getColor(count) {
	const colors = [
		'',
		'#ffd180',
		'#ffab40',
		'#ff9100',
		'#ff6d00',
	];

	return colors[count];
}

const mappedRows = Object.values(accumulated).map(row => [...row.values, getColor(row.count)]);

console.log(mappedRows);

[0, 1, 2, 3].forEach(i => {
	console.log(`----- ${i}`);
	mappedRows.forEach(row => console.log(row[i]));
});