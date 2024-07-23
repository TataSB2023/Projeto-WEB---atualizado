<?php
	if(isset($_GET ['CheckIn'])){
		echo "CheckIn: " .$_GET ['CheckIn']. "<br>";
	}
	if(isset($_GET ['CheckOut'])){
		echo "CheckOut: " .$_GET ['CheckOut']. "<br>";
	}
	if(isset($_GET ['Adults'])){
		echo "Adults: " .$_GET ['Adults']. "<br>";
	}
	if(isset($_GET ['Kids'])){
		echo "Kids: " .$_GET ['Kids']. "<br>";
	}
	if(isset($_GET ['Name'])){
		echo "Name: " .$_GET ['Name']. "<br>";
	}
	if(isset($_GET ['Email'])){
		echo "Email: " .$_GET ['Email']. "<br>";
	}
	if(isset($_GET ['Message'])){
		echo "Message: " .$_GET ['Message']. "<br>";
	}
?>