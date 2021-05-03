// element = document.querySelector(selectors);

//Retorna o primeiro elemento dentro do documento (usando ordenação em profundidade, pré-ordenada e transversal dos nós do documento) que corresponde ao grupo especificado de seletores.

// Nesse exemplo vamos soltar um alert na tela quando você apertar o botão "Click here".

<body>


<label>Name</label>
<br>
<br>
<input type="text" placeholder="Write here" id="texto">
<button onclick="myFunction()" >
Click Here
</button>


<script>

function myFunction() {
var text = document.querySelector("#texto").value;
window.alert("Welcome!")
};

</script>

</body>


// ====================================================

// Com EventListener


<body>


<div id="mainContent">
  
 <button id="Button">click me</button>

</div>


<script>
   
 var Button = document.querySelector("#Button");
 
Button.addEventListener('click', displayDialog, false);
 
function displayDialog(e) {
  
window.alert("You clicked me!");
  
 }
// output: You clicked me!
        

</script>

</body>

<style>
  
  .wrapper{
  position: relative;
  top: 40vh;
}
#button{
  border: 5px solid #FFAB43;
  width: 200px;
  text-align: center;
  padding: 10px;
  font-size: 30px;
  cursor: pointer;
  margin: auto;
  background: #FF5733;
}

#button:hover{
  background: #DFF30B;
}

#message{
  font-size: 26px;
  margin-bottom: 30px;
  text-align: center;
}

.hide{
  visibility: hidden;
}

.reveal{
  visibility: visible;
}
  
</style>




<body> 
  
  <div class="wraper">


<div id="message" class="hide">
texto qualquer texto qualquer texto qualquer
texto qualquer texto qualquer texto qualquer 

</div>
<div id="button" >
Click-me!
</div>
</div>

<script>
  
  const msg = document.querySelector("#message");
const btn = document.querySelector("#button");

button.addEventListener('click', () => {       // função anônima (seta) que configura o código necessário para revelar / ocultar a mensagem
msg.classList.toggle('reveal');
});

</script>  
</body>
