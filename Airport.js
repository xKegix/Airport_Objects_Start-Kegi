class Airport {
	constructor(name, planes=[]) {
		this.name = name;
		this.planes = planes;//what would be the best datatype?
	}

	addPlane(plane) {
		//use an array method
		this.planes.push(plane);
	}
}

module.exports = Airport