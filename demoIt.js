

const heading = React.createElement("h1", {}, "Demo Page React!")

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

const arr = [5, 10, 4, 6]


const area = function(radius){

	return Math.PI*radius*radius
}

const circumference = function(radius){
	return 2*Math.PI*radius
}

const diameter = function(radius){
	return 2*radius
}

Array.prototype.calculate = function (formula){
	let outPut = [];

	for (let i = 0; i < this.length; i++) {

		outPut.push(formula(this[i]))
	}

	return outPut;

}

//console.log(calculate(arr, area))
// console.log(calculate(arr, circumference))
// console.log(calculate(arr, diameter))


console.log(arr.calculate(area))
console.log(arr.map(area))

const num = [9, 4, 2, 5, 12, 10, 8, 15, 45, 30]

const ascendingOrder = num.sort((a,b)=> (a-b))

console.log(ascendingOrder)