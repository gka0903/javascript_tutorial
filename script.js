const calculator = {
	add: function(firstNumber, secondNuber){
		console.log(firstNumber + secondNuber);
	},
	minus: function(firstNumber, secondNuber){
		console.log(firstNumber - secondNuber);
	},
	divide: function(firstNumber, secondNuber){
		console.log(firstNumber / secondNuber);
	},
	multiple: function(firstNumber, secondNuber){
		console.log(firstNumber * secondNuber);
	},
	remainder: function(firstNumber, secondNuber){
		console.log(firstNumber % secondNuber);
	},
}

console.log(calculator.add(4, 6)) ;