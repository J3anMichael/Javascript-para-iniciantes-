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
