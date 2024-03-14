const tableArea = document.getElementById("container"); //creiamo il container principale
const header = tableArea.querySelector(".head"); //creiamo l'header
const numbersTab = tableArea.querySelector(".numbersContainer"); //creiamo il div che conterrà i numeri
let savedNumber = []; //array vuoto in cui contenere i numeri

function mainTitle() {
  const titolo = document.createElement("h1");
  titolo.classList.add("mainTitle");
  titolo.innerText = "Tombola";
  header.append(titolo);
}

mainTitle();

function numbersTable() {
  for (let i = 1; i <= 90; i++) {
    let tab = document.createElement("div");
    tab.innerText = i;
    numbersTab.append(tab);
    tab.classList.add("numTab");
  }
}

numbersTable();
