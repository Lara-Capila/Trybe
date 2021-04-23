const techList = (arrayTech, name) => {
	if(arrayTech.length !== 0) {
		const listTech = arrayTech.sort()
		.map((technology) => ({
			tech: technology,
			name,
		}));
		return listTech;
	}
	return 'Vazio!'
};
// console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lara'));
module.exports = techList;