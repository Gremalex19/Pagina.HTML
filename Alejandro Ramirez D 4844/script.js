function agregar() {
    let input = document.getElementById("label");
    let label = input.value;
    input.value = ""; 

    if (label === "") {
        return alert("Vacio");
    }


    let li = document.createElement("li");
    li.textContent = label;

   
    li.onclick = function() {
        this.remove();
        actualizarNumero();

    };

   li.classList.add("list_element")
    document.getElementById("lista").appendChild(li);
    actualizarNumero();
}

function eliminar() {
    document.getElementById("lista").innerHTML = "";
    actualizarNumero();
}


function actualizarNumero() {
    
    let total = document.getElementById("lista").children.length;
    document.getElementById("contador").innerText = total;
}