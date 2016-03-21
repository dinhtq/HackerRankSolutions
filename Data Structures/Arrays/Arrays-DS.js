/*

Input Format:
The first line of input contains N, the number of integers. The next line contains N integers separated by a space.

Sample Input:
4
1 4 3 2


Output Format:
Print the N integers of the array in the reverse order on a single line separated by single spaces.

Sample Output:
2 3 4 1



*/


process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);

}
