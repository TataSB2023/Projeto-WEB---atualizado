<?php
	echo "Nome: ".$_POST ['nome']."<br>";
	echo "Email: ".$_POST ['email']."<br>";
	echo "Senha: ".$_POST ['senha']."<br>";
	echo "Descricao: ".$_POST ['descricao']."<br>";
	echo "Sexo: ".$_POST ['sexo']."<br>";
    $a = $_POST ['motivo'];
	echo $a;
	//foreach($a as $selected)
	//	echo "Motivo(s): ".$selected."<br>";
	//nome,email,senha,descricao,sexo,motivo
?>