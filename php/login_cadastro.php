<?php
	if(isset($_POST ['nome1'])){
		echo "Nome_Login: ".$_POST ['nome1']."<br>";
	}
	if(isset($_POST ['senha1'])){
		echo "Senha_Login: ".$_POST ['senha1']."<br>";
	}
	if(isset($_POST ['nome2'])){
		echo "Nome_Cadastro: ".$_POST ['nome2']."<br>";
	}
	if(isset($_POST ['email'])){
		echo "Email: ".$_POST ['email']."<br>";
	}
	if(isset($_POST ['senha2'])){
		echo "Senha_Cadastro: ".$_POST ['senha2']."<br>";
	}
?>