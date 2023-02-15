let a = Number(prompt("Enter first number"));
let b = Number(prompt("Enter second number"));
let c = Number(prompt("Enter third number"));

let large, small, secondLarge;

if((a>b) && (a>c)){
     if(b>c){
	     large = a;
		 secondLarge = b;
		 small = c;
		 }
	 else{
	     large = a;
		 secondLarge = c;
		 small = b;
		 }
	 }
else if((b>a) && (b>c)){
     if(a>c){
	     large = b;
		 secondLarge = c;
		 small = a;
		 }
	 else{
	     large = b;
		 secondLarge = a;
		 small = c;
		 }
	}
else{
     if(b>a){
	     large = c;
		 secondLarge = b;
		 small = a;
		}
	 else{
	     large = c;
		 secondLarge = a;
		 small = b;
		}
   }
   
document.write(`The ascending order of ${a}, ${b}, ${c} is ${small}, ${secondLarge}, ${large}.`);
