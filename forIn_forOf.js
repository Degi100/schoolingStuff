const sep = () => console.log('-'.repeat(30));
sep();

const city = {
	name: 'Berlin',
	population: 800000,
	country: 'Germany',
}

for (const property in city) {
	const value = city[property];
	// console.log(property, value);
	console.log(value);
}
sep();
// if you only want the value
for (const value of Object.value(city)){
	if (typeof value === 'string') {
	console.log(value);
	}
}
sep();
