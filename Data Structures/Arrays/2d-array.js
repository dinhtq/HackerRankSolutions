/*
Print the largest sum among all the hourglasses in the array
*/

//sample array
var array = [[-1 ,-1, 0, -9, -2, -2],
			[-2, -1, -6, -8, -2, -5],
			[-1, -1, -1, -2, -3, -4],
			[-1, -9, -2, -4, -4, -5],
			[-7, -3, -3, -2, -9, -9],
			[-1, -3, -1, -2, -4, -5]];
//expected output: -6          



//declare max sum var
var maxSum;

//loop outer dimension
for (var x = 0; x < 6; x ++) {
	//loop inner dimension
	for (var y =0; y < 6; y++){
		//if array element is top left corner of hour glass, then get sum
		if (isHourGlassTopLeft(x,y,array)) {
			//console.log("hour glass top left: [" + x + "][" + y + "]");
			var tmpSum = getHourGlassSum(x,y,array);
			//console.log("tmpSum: " + tmpSum);
			if (typeof maxSum === 'undefined'){
				maxSum = tmpSum;
			}else{
				if (tmpSum > maxSum){
				maxSum = tmpSum;
				}
			}
			
		};
	}
}

console.log("Max Sum: " + maxSum);


//returns true if  index is top left corner of hour glass in array
function isHourGlassTopLeft(x, y, arr){
	//console.log("isHourGlassTopLeft(): " + x + "," + y);
	//if upper right and lower left corners exist, then true
	if( (y + 2) > 5 || (typeof arr[x][y + 2] === 'undefined') ){
		//console.log("false");
		return false;
		
	}
	else if ( (x + 2) > 5 || (typeof arr[x + 2][y] === 'undefined') ){
		//console.log("false");
		return false;
	}
	else{
		return true;
	}
}


//returns the sum of the hour glass given the top left corner hour glass index
function getHourGlassSum(x, y, arr){
	var sum = 0;
	//get sum of top
	sum += arr[x][y] + arr[x][y + 1] + arr[x][y + 2];
	//get sum of middle
	sum += arr[x + 1][y + 1];
	//get sum of bottom
	sum += arr[x + 2][y] + arr[x + 2][y + 1] + arr[x + 2][y + 2];

	return sum;
}