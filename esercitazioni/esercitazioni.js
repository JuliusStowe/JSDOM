//esercizio 1 Ottenere un elemento per ID e stamparne il contenuto.
const elementoId=document.getElementById("elementoId")
console.log(elementoId.textContent)
// esercizio 2 Ottenere un elemento per classe e modificare il suo stile.
const elementiClasse=document.getElementsByClassName("elementoClasse")//Ritorna un'oggetto contenente tutti i valori della classe ricercata.
    for(i=0;i<elementiClasse.length;i++){//Usiamo un ciclo for per sfogliare tutti gli elementi nell'oggetto.
        elementiClasse[i].style.color = "red";//Li prendiamo 1 ad 1 è li modifichiamo.
    }
//esercizio 3 Ottenere elementi per tag e aggiungere loro una classe.
const aggiungClasse=document.getElementsByTagName("p")//Ritorna sempre un'oggetto contente tutti i valori del tag specificato in questo caso
for(i=0;i<aggiungClasse.length;i++){//scrolliamo tutto l'oggetto per ottenere tutti i valori quanto la sua lunghezza
    aggiungClasse[i].classList.add("mioParagrafo")//poi 1 ad 1 aggiungiamo una classe ai nostri paragrafi concatenando 
    //classList(che ci permette di manipolare le classi degli elementi) + .add che ci permette poi di aggiungere effettivamente il nome della classe.
}

//esercizio 4 Ottenere un elemento utilizzando un selettore CSS e modificare il suo testo.
const elementoSelezionato=document.querySelector("#selezionato")//nel querySelector va utilizzato il richiamo di CSS per richiamare una classe o un'id
elementoSelezionato.textContent="Nuova Selezione"//il textContent permette di prendere solo la parte scritta all'interno dell'html senza prendere tag o altro.

//esercizio 5 Ottenere tutti gli elementi che corrispondono a un selettore CSS e nasconderli.
const elementiscomparsi=document.querySelectorAll(".lista")
elementiscomparsi.forEach((elementi)=>{
    elementi.style.display="none";
})

//esercizio 6 Ottenere il valore di un input di testo.
const inputText=document.querySelector(".testo")//prendiamo in considerazione l'input nel nostro file js
const salvaTesto= ()=>{//creiamo una funzione parte onClick con un pulsante
const valore=inputText.value//salviamo il valore del nostro input e soprattutto usaimo .value per visualizzare solo il valore dell'input
console.log(valore)
}
console.log(inputText.value)

//esercizio 7 Ottenere il valore selezionato di un elemento select.
const select=document.querySelector("#select")
const valoreSelezionato=select.value
console.log(valoreSelezionato)