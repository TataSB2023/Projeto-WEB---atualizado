<?php ?>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css" integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS" crossorigin="anonymous">
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous"></script>
<link rel="stylesheet" type="text/css" href="css/style.css">
<meta charset="UTF-8">
<div class="container">
//nome,email,senha,descricao,sexo,motivo
    <form name="dadosContato1" action="conexao.php" method="post">
        <table>
            <tbody>
                <tr>
                    <td>Nome: </td>
                    <td><input type="text" name="nome" value=""></td>
                </tr>
                <tr>
                    <td>Email: </td>
                    <td><input type="email" name="email" value=""></td>
                </tr>
                <tr>
                    <td>Senha: </td>
                    <td><input type="password" name="senha" value=""></td>
                </tr>
                <tr>
                    <td>Descrição: </td>
                    <td><input type="text" name="descricao" value=""></td>
                </tr>
                <tr>
                    <td>Sexo: </td>
                    <td><input type="text" name="sexo" value=""></td>
                </tr>
                <tr>
                    <td>Motivo: </td>
                    <td><input type="text" name="motivo" value=""></td>
                </tr>
                <tr>
                    <td><input type="hidden" name="acao" value="inserir"></td>
                    <td><input type="submit" name="Enviar" value="Enviar"></td>
                </tr>
            </tbody>
        </table> 
    </form>
</div>