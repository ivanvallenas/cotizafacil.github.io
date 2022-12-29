import {db} from "./js/firebase.js";    
import {getDatabase,query, set, get, update, remove, ref, child,onValue}
from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const parte = query(ref(db,'Solicitudes'))
var btncon = document.getElementById("botones")

onValue(parte, (snapshot) => {
    btncon.replaceChildren()
    snapshot.forEach((childSnapshot) => {
        var empresa = document.createElement("div")
        var cbt = document.createElement("div")
        var precio = document.createElement("div")
        var pedido = document.createElement("div")

        cbt.className="collapsible"

        empresa.className="item"
        empresa.innerHTML=childSnapshot.key

        pedido.className="item"
        pedido.innerHTML=childSnapshot.val().material1

        precio.className="item"
        precio.innerHTML=childSnapshot.val().marca1
                

        cbt.appendChild(empresa)
        cbt.appendChild(pedido)
        cbt.appendChild(precio)
        btncon.appendChild(cbt)

                
        var content = document.createElement("div")
        content.className="content"

        var tabla = document.createElement("div")
        tabla.className="table"

        var titulo1 = document.createElement("div")
        titulo1.className="titulo_columna"
        var titulo1_t = document.createElement("p")
        titulo1_t.innerHTML="Material"
        titulo1.appendChild(titulo1_t)
        tabla.appendChild(titulo1)

        var titulo2 = document.createElement("div")
        titulo2.className="titulo_columna"
        var titulo2_t = document.createElement("p")
        titulo2_t.innerHTML="Marca"
        titulo2.appendChild(titulo2_t)
        tabla.appendChild(titulo2)
  
        var titulo3 = document.createElement("div")
        titulo3.className="titulo_columna"
        var titulo3_t = document.createElement("p")
        titulo3_t.innerHTML="Cantidad"
        titulo3.appendChild(titulo3_t)
        tabla.appendChild(titulo3)

                  
        var m1 = document.createElement("div")
        m1.className="item"
        m1.innerHTML=childSnapshot.val().material1
        tabla.appendChild(m1)

        var ma1 = document.createElement("div")
        ma1.className="item"
        ma1.innerHTML=childSnapshot.val().marca1
        tabla.appendChild(ma1)

        var ca1 = document.createElement("div")
        ca1.className="item"
        ca1.innerHTML=childSnapshot.val().cantidad1
        tabla.appendChild(ca1)


        var m2 = document.createElement("div")
        m2.className="item"
        m2.innerHTML=childSnapshot.val().material2
        tabla.appendChild(m2)

        var ma2 = document.createElement("div")
        ma2.className="item"
        ma2.innerHTML=childSnapshot.val().marca2
        tabla.appendChild(ma2)

        var ca2 = document.createElement("div")
        ca2.className="item"
        ca2.innerHTML=childSnapshot.val().cantidad2
        tabla.appendChild(ca2)


        content.appendChild(tabla)
        btncon.appendChild(content)
    });
                
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
            content.style.display = "none";
            } else {
            content.style.display = "block";
            }
        });
    }        
},)