//Retorna o primeiro elemento dentro do documento (usando ordenação em profundidade, pré-ordenada e transversal dos nós do documento) que corresponde ao grupo especificado de seletores.

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
window.alert("Welcome")
};

</script>

</body>