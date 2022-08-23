function begin(){
	document.getElementById('result').style.display = "none";
	alert("Hello");
}
function calculate(){
	var basic = document.getElementById('basic_sal').value;
	var name = document.getElementById('emp_name').value;
	if(basic == '' || name == ''){
		alert("Mandatory fields can't be empty!");
		reload();
	}
	else{
		basic = parseInt(basic);
		var pf = 0.12 * basic;
		var hra = 0.15 * basic;
		var med = 500;
		var da = 0.03 * basic;
		var gross = basic + pf + hra + med + da;
		var net = gross - pf;

		document.getElementById('name').value = name;
		// document.getElementById('basic').value = basic.toFixed(2);
		document.getElementById('pf').value = pf.toFixed(2);
		document.getElementById('gross').value = gross.toFixed(2);
		document.getElementById('net').value = net.toFixed(2);
		document.getElementById('hra').value = hra.toFixed(2);
		document.getElementById('da').value = da.toFixed(2);

		document.getElementById('result').style.display = "table";
	}
}
function reload(){
	location.reload();
}