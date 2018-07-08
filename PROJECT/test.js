//CORE
var values = [4,3,1,2,2,-5];
var score = 0;
var min = Math.min.apply(Math, values); //finding the smallest
var index = values.indexOf(min); // getting its index
var max = Math.max.apply(Math, values);
var indexX = values.indexOf(max); // getting its index
var first_two = values[index+1] + values[index+2];
var first_three = values[index+1] + values[index+2] + values[index+3];
var previous_two = values[index-1] + values[index-2];
var previous_three = values[index-1] + values[index-2] + values[index-3];
if (first_two > min && first_two != 0 && first_two > 0 && first_two > Math.abs(min)) {
	console.log('1Start with ' + (index + 2));
}
else if (first_three > min && first_three != 0 && first_three > 0 && first_three > Math.abs(min)) {
 	console.log('2Start with ' + (index + 4));
}
else if (previous_two > min && previous_two != 0 && previous_two > 0 && previous_two > Math.abs(min)) {
 	console.log('3Start with ' + (index - 1));
}
else if (previous_three > min && previous_three != 0 && previous_three > 0 && previous_three > Math.abs(min)) {
 	console.log('4Start with ' + (index - 4));
}
else {
	console.log('5Start with ' + (indexX + 1));
}

// [5,-3,1,-2,2,3] 1 works
// [-4,3,-1,2,2,3] 2 wors
// [4,3,-1,2,2,3] 3 works
// [4,3,-1,2,2,-3] 4 works
// [4,3,1,2,2,-5] 5 works
