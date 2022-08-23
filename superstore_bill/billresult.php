<!DOCTYPE html>
<html>
<head>
	<title>Bill Receipt</title>
	<style type="text/css"><?php include "billresult.css"?></style>
</head>
<body>
	<center>
		<div><h1>Superstore Billing System</h1></div>
		<div id="amount">
			<fieldset>
				<h2><u>Item Bill</u></h2>
				<?php
					$i1 = $_POST['i1'];
					$i2 = $_POST['i2'];
					$i3 = $_POST['i3'];
					$i4 = $_POST['i4'];

					$q1 = $_POST['q1'];
					$q2 = $_POST['q2'];
					$q3 = $_POST['q3'];
					$q4 = $_POST['q4'];

					$p1 = $_POST['p1'];
					$p2 = $_POST['p2'];
					$p3 = $_POST['p3'];
					$p4 = $_POST['p4'];

					$price = [$p1, $p2, $p3, $p4];
					$qnty = [$q1, $q2, $q3, $q4];
					$item = [$i1, $i2, $i3, $i4];

					$dis; $total = 0; $newtotal = 0;

					for($i=0; $i < 4; $i++){ 
						$total = $total + $qnty[$i]*$price[$i];
					}

					if($total > 5000){
						$dis = 20;
					}
					else if($total > 3000){
						$dis = 15;
					}
					else if($total > 1500){
						$dis = 10;
					}
					else{
						$dis = 5;
					}

					$newtotal = $total - ($dis/100*$total);

					echo "<table class='chart'><tr><td><b>Items</b></td>
						  <td><b>Quantity</b></td><td><b>Price (in Rs.)</b></td></tr>";

					for($i=0; $i < 4; $i++){ 
						echo "<tr><td>".$item[$i]."</td>
							<td><b>".$qnty[$i]."</b></td>
							<td><b>".($price[$i]*$qnty[$i])."</b></td></tr>";
					}

					echo "</table><br><table class='chart'><tr><td>Original Amount:</td><td><b>Rs. ".$total."</b></td></tr>
						  <tr><td>Discount Available:</td><td><b>".$dis."%</b></td></tr>
					      <tr><td>Actual Amount:</td><td><b>Rs. ".$newtotal."</b></td></tr></table><br>";
				?>
			</fieldset>
			<br><br><br>
		</div>
	</center>
</body>
</html>
