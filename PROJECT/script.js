function a(event) {
var a = document.getElementById('onei').value;
var b = document.getElementById('twoi').value;
var c = document.getElementById('threei').value;
var d = document.getElementById('fouri').value;
var e = document.getElementById('fivei').value;
var f = document.getElementById('sixi').value;
var a1 = parseInt(a);
var b1 = parseInt(b);
var c1 = parseInt(c);
var d1 = parseInt(d);
var e1 = parseInt(e);
var f1 = parseInt(f);
var values = [a1,b1,c1,d1,e1,f1];
var check = 0;
var score = 0;
var flag;
var target = document.getElementById('results');
var min = Math.min.apply(Math, values); //finding the smallest
var index = values.indexOf(min); // getting its index
var max = Math.max.apply(Math, values);
var indexX = values.indexOf(max); // getting its index
var first_two = values[index+1] + values[index+2];
var first_three = values[index+1] + values[index+2] + values[index+3];
var previous_two = values[index-1] + values[index-2];
var previous_three = values[index-1] + values[index-2] + values[index-3];
for (var i = 0; i < values.length; i++) {
	check += values[i];
	 if (isNaN(values[i])) {
	var para = document.createElement("p");
	var node = document.createTextNode("Моля въведете само числа!");
	para.style.backgroundColor = '#F03838';
	para.appendChild(node);
	para.id = 'resp';
	target.appendChild(para);
}
}

 if(check < 0) {
      var para = document.createElement("p");
	  var node = document.createTextNode("Тази игра не може да бъде спечелена!");
	  para.appendChild(node);
	  para.id = 'resp';
	  target.appendChild(para);
  }
else if (first_two > min && first_two != 0 && first_two > 0 && first_two > Math.abs(min)) {
	console.log('1Start with ' + (index + 2));
	var para = document.createElement("p");
	var node = document.createTextNode('Ако започете със ' + (index + 2) + ' може да спечелите играта!');
	para.appendChild(node);
	para.id = 'resp';
	target.appendChild(para);
}
else if (first_three > min && first_three != 0 && first_three > 0 && first_three > Math.abs(min)) {
 	console.log('2Start with ' + (index + 4));
 	var para = document.createElement("p");
	var node = document.createTextNode('Ако започете със ' + (index + 4) + ' може да спечелите играта!');
	para.appendChild(node);
	para.id = 'resp';
	target.appendChild(para);
}
else if (previous_two > min && previous_two != 0 && previous_two > 0 && previous_two > Math.abs(min)) {
 	console.log('3Start with ' + (index - 1));
 	var para = document.createElement("p");
	var node = document.createTextNode('Ако започете със ' + (index - 1) + ' може да спечелите играта!');
	para.appendChild(node);
	para.id = 'resp';
	target.appendChild(para);
}
else if (previous_three > min && previous_three != 0 && previous_three > 0 && previous_three > Math.abs(min)) {
 	console.log('4Start with ' + (index - 3));
 	var para = document.createElement("p");
	var node = document.createTextNode('Ако започете със ' + (index - 3) + ' може да спечелите играта!');
	para.appendChild(node);
	para.id = 'resp';
	target.appendChild(para);
}
else {
	console.log('5Start with ' + (indexX + 2));
	var para = document.createElement("p");
	var node = document.createTextNode('Ако започете със ' + (index + 2) + ' може да спечелите играта!');
	para.appendChild(node);
	para.style.backgroundColor = '#D2853A';
	para.id = 'resp';
	target.appendChild(para);
}
}
function e() {
	var targetp = document.getElementById('resp');
	targetp.remove();
}
