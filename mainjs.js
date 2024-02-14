const imoveis = [
    {nome: "Apartamento Vila Mascote",preco:635000,espaco:67,quartos:4},
    {nome: "Apartamento Campo Belo",preco:2250000,espaco:105,quartos:5},
    {nome: "Apartamento Leblon Venda Nova",preco:280000,espaco:67,quartos:4}
];

function menorPreco(x,y){
  return x.preco - y.preco;
}

function maisEspaco(x,y){
  return y.espaco - x.espaco;
}

function maisQuartos(x,y){
  return y.preco - x.preco;
}

//TESTES              FUNCIONA :)
//console.log(imoveis.sort(menorPreco));
//console.log(imoveis.sort(maisEspaco));
//console.log(imoveis.sort(maisQuartos));
function changeTheme(){

  var white = window.getComputedStyle(document.documentElement).getPropertyValue('--white');
  if (white == '#000000'){
    document.documentElement.style.setProperty('--white', '#ffffff');
    document.getElementById('dark_theme').innerHTML = "Mudar para o tema escuro";
  }
  else{
    document.documentElement.style.setProperty('--white', '#000000');
    document.getElementById('dark_theme').innerHTML = "Mudar para o tema claro";
  }

  var prussian_blue = window.getComputedStyle(document.documentElement).getPropertyValue('--prussian-blue');
  if (prussian_blue == '#272626'){
      document.documentElement.style.setProperty('--prussian-blue', '#0b2c3c');
  }
  else{
      document.documentElement.style.setProperty('--prussian-blue', '#272626');
  }

  var dark_jungle_green = window.getComputedStyle(document.documentElement).getPropertyValue('--dark-jungle-green');
  if (dark_jungle_green == '#005966'){
      document.documentElement.style.setProperty('--dark-jungle-green', '#071a1d');
  }
  else{
      document.documentElement.style.setProperty('--dark-jungle-green', '#005966');
  }

  var cultured_2 = window.getComputedStyle(document.documentElement).getPropertyValue('--cultured-2');
  if (cultured_2 == '#000d10'){
    document.documentElement.style.setProperty('--cultured-2', '#f2f6f7');
    document.getElementById('dark_theme').innerHTML = "Mudar para o tema escuro";
  }
  else{
    document.documentElement.style.setProperty('--cultured-2', '#000d10');
    document.getElementById('dark_theme').innerHTML = "Mudar para o tema claro";
  }

  var seashell = window.getComputedStyle(document.documentElement).getPropertyValue('--seashell');
  if (seashell == '#0e0f1c'){
    document.documentElement.style.setProperty('--seashell', '#hsl(8, 100%, 97%)');
    document.getElementById('dark_theme').innerHTML = "Mudar para o tema escuro";
  }
  else{
    document.documentElement.style.setProperty('--seashell', '#0e0f1c');
    document.getElementById('dark_theme').innerHTML = "Mudar para o tema claro";
  }

  var misty_rose = window.getComputedStyle(document.documentElement).getPropertyValue('--misty-rose');
  if (misty_rose == '#181c2b'){
    document.documentElement.style.setProperty('--misty-rose', '#f5dedb');
    document.getElementById('dark_theme').innerHTML = "Mudar para o tema escuro";
  }
  else{
    document.documentElement.style.setProperty('--misty-rose', '#181c2b');
    document.getElementById('dark_theme').innerHTML = "Mudar para o tema claro";
  }
  
  var alice_blue = window.getComputedStyle(document.documentElement).getPropertyValue('--alice-blue');
  if (alice_blue == '#070b0e'){
    document.documentElement.style.setProperty('--alice-blue', '#f0f7ff');
    document.getElementById('dark_theme').innerHTML = "Mudar para o tema escuro";
  }
  else{
    document.documentElement.style.setProperty('--alice-blue', '#070b0e');
    document.getElementById('dark_theme').innerHTML = "Mudar para o tema claro";
  }
  
  var light_gray = window.getComputedStyle(document.documentElement).getPropertyValue('--light-gray');
  if (light_gray == '#f1f1f157'){
    document.documentElement.style.setProperty('--light-gray', '#f1f1f1');
    document.getElementById('dark_theme').innerHTML = "Mudar para o tema escuro";
  }
  else{
    document.documentElement.style.setProperty('--light-gray', '#f1f1f157');
    document.getElementById('dark_theme').innerHTML = "Mudar para o tema claro";
  }

  var cultured_1 = window.getComputedStyle(document.documentElement).getPropertyValue('--cultured-1');
  if (cultured_1 == '#6d6d6d'){
    document.documentElement.style.setProperty('--cultured-1', '#ededed');
    document.getElementById('dark_theme').innerHTML = "Mudar para o tema escuro";
  }
  else{
    document.documentElement.style.setProperty('--cultured-1', '#6d6d6d');
    document.getElementById('dark_theme').innerHTML = "Mudar para o tema claro";
  }

  var placeholder = window.getComputedStyle(document.documentElement).getPropertyValue('--placeholder');
  if (placeholder == '#b3b3b3'){
    document.documentElement.style.setProperty('--placeholder', '#737373');
    document.getElementById('dark_theme').innerHTML = "Mudar para o tema escuro";
  }
  else{
    document.documentElement.style.setProperty('--placeholder', '#b3b3b3');
    document.getElementById('dark_theme').innerHTML = "Mudar para o tema claro";
  }

  var lighter_dark = window.getComputedStyle(document.documentElement).getPropertyValue('--lighter-dark');
  if (lighter_dark == '#5f5b5a'){
    document.documentElement.style.setProperty('--lighter-dark', '#2b2c2c');
    document.getElementById('dark_theme').innerHTML = "Mudar para o tema escuro";
  }
  else{
    document.documentElement.style.setProperty('--lighter-dark', '#5f5b5a');
    document.getElementById('dark_theme').innerHTML = "Mudar para o tema claro";
  }
  
  //#5f5b5a header-bottom-actions-btn ion-icon
  //#ff5a3d   #727172
}
function changeColor(){
  var white = window.getComputedStyle(document.documentElement).getPropertyValue('--white');
  if (white == '#000000'){
    document.getElementById('body').style.color = 'hsl(200, 15%, 43%)';
  }
  else{
    document.getElementById('body').style.color = '#000000';
  }
}