function grid_building() {
	var universe, cell, id;
	universe = document.getElementById("universe");
	for (var i = 0; i < 80; i++) {
		for (var j = 0; j < 40; j++) {
						
			cell = document.createElementNS("http://www.w3.org/2000/svg", "rect");
			cell.setAttribute("x", "1");
			cell.setAttribute("y", "1");
			cell.setAttribute("width", "15");
			cell.setAttribute("height", "15");
			cell.setAttribute("stroke", "lightgrey");
			cell.setAttribute("stroke-width", "1");	
			cell.setAttribute("fill", "darkgrey");
			cell.setAttribute("transform", "translate(" + i * 15 + ", " + j * 15 + ")");
			cell.addEventListener("click", press, false);
			id = "";
			if (i < 10) { id += "0" + i; }
			else { id += i; }
			if (j < 10) { id += "0" + j; }
			else { id += j; }
			cell.id = id; 
			universe.appendChild(cell);
		}
	}
}

function press() {
	this.setAttribute("fill", "yellow");
}

//function step() {
	//
//}

