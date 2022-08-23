function expr(token){
	var txt = document.querySelector('textarea');
	var exp = txt.value;
	if(txt.value == '0')
		txt.value = token;
	else{
		exp += token;
		txt.value = exp;
	}
}
function calculate(memexp=''){
	var txt = document.querySelector('textarea');
	var exp = txt.value;
	if(memexp != '')
		var exp = eval(memexp);
	var result = eval(exp);
	console.log(result);
	if(result == Infinity){
		alert('Division by 0 is not possible!')
	}
	else
		txt.value = result;  
}
function clearAll(){
	var txt = document.querySelector('textarea');
	txt.value = '0';
	txt.disabled = false;
	// txt.style.display = 'none';
}
function backspace(){
	var txt = document.querySelector('textarea');
	var exp = txt.value;
	if(exp.length > 1)
		txt.value = exp.substr(0, exp.length - 1);
	else
		clearAll();
}
function memory(operation){
	var mem = document.getElementById('memory').value;
	var txt = document.querySelector('textarea');
	var exp = txt.value;
	if(operation == '+' || operation == '-'){
		exp = exp + operation + mem;
		calculate(exp);
	}
	else if(operation == 's'){
		document.getElementById('memory').value = exp;
		txt.value = '';
	}
	else if(operation == 'r'){
		txt.value = document.getElementById('memory').value;
	}
	else{
		document.getElementById('memory').value = '';
	}
	console.log(document.getElementById('memory').value)
}