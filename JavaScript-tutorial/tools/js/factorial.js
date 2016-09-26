/*
// factorial 阶乘
function factorialize(num) {
	if (num === 0) {// === all equal (in case of boolean == False)
		return 1;// 0! = 1
	} else {
		let sum = 1;//ES 6
		for (var i = 1; i <= num; i++) {
			sum *=i;//n! = 1x2x3x4x5...x(n-1)x(n)
		}
		return sum;
	}
}
factorialize(5);
document.getElementById("num").innerHTML = "factorialize(5) === ";
document.getElementById("demo").innerHTML = factorialize(5);
console.log("\nfactorialize(0)="+factorialize(0));
console.log("\nfactorialize(1)="+factorialize(1));
console.log("\nfactorialize(2)="+factorialize(2));
console.log("\nfactorialize(3)="+factorialize(3));
console.log("\nfactorialize(4)="+factorialize(4));
console.log("\nfactorialize(5)="+factorialize(5));
// big num ? overflow  
console.log("\nfactorialize(100)="+factorialize(100));
//100! = 9.33262154439441e+157 (科学记数法)
console.log("\nfactorialize(170)="+factorialize(170));
//170! = 7.257415615308004e+306
console.log("\nfactorialize(170)="+factorialize(171));
//171! = Infinity (overflow )
console.log("\nfactorialize(1000)="+factorialize(1000));
//1000! = Infinity (overflow )
*/
// factorial 阶乘
function factorialize(num) {
	if (num === 0) {// === all equal (in case of boolean == False)
		return 1;// 0! = 1
	} else {
		let sum = 1;//ES 6
		for (var i = 1; i <= num; i++) {
			sum *=i;//n! = 1x2x3x4x5...x(n-1)x(n)
		}
		return sum;
	}
}
factorialize(5);
document.getElementById("num").innerHTML = "factorialize(5) === ";
document.getElementById("demo").innerHTML = factorialize(5);