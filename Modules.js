
function Rectangle() {
	var length, width;

	function create(l, w) {
		length = l;
		width = w;
	}

	function getArea() {
		return (length * width);
	}

	function getPerimeter() {
		return (2 * (length + width));
	}

	// This is the object to consist public members.
	// The rest are private members.
	var publicAPI = {
		create: create,
		getArea: getArea,
		getPerimeter: getPerimeter
	};
	return publicAPI;
}

// Create a Rectangle module instance
var myRect = Rectangle();
myRect.create(5, 4);
console.log("Area: " + myRect.getArea());
console.log("Perimeter: " + myRect.getPerimeter());
