const sporsmalListe = [
  {
    tekst: "Hva heter cowboyen i Toy Story?",
    alternativer: ["Woody", "Buzz", "Andy", "Rex"],
    riktig: 1
  },
  {
    tekst: "Hvilken skole går Harry Potter på?",
    alternativer: ["Narnia", "Hogwart", "Nevermore", "Durmstrang"],
    riktig: 2
  },
  {
    tekst: "Hva slags dyr er Simba i Løvenes konge?",
    alternativer: ["Tiger", "Bjørn", "Løve", "Ulv"],
    riktig: 3
  },
  {
    tekst: "Hva heter snømannen i Frost?",
    alternativer: ["Sven", "Olaf", "Kristoffer", "Hans"],
    riktig: 2
  },
  {
    tekst: "I hvilken film møter vi Jack og Rose på et skip?",
    alternativer: ["Titanic", "Avatar", "Haisommer", "King Kong"],
    riktig: 1
  },
  {
    tekst: "Hvilken superhelt er Peter Parker?",
    alternativer: ["Batman", "Iron Man", "Superman", "Spider-Man"],
    riktig: 4
  },
  {
    tekst: "Hva slags dyr er Nemo i Oppdrag Nemo?",
    alternativer: ["Delfin", "Klovnefisk", "Hai", "Sjøhest"],
    riktig: 2
  },
  {
    tekst: "Hvilken filmserie har figuren Darth Vader?",
    alternativer: ["Star Wars", "Ringenes herre", "Jurassic Park", "Star Trek"],
    riktig: 1
  },
  {
    tekst: "Hva heter hobbiten som får i oppdrag å ødelegge Ringen?",
    alternativer: ["Bilbo", "Sam", "Gollum", "Frodo"],
    riktig: 4
  },
  {
    tekst: "Hvilken farge har Shrek?",
    alternativer: ["Blå", "Grønn", "Rød", "Lilla"],
    riktig: 2
  }
];

let nummer = 0;

const sporsmal = document.getElementById("sporsmal");
const fremdrift = document.getElementById("fremdrift");
const alternativer = document.getElementById("alternativer");
const skjema = document.getElementById("skjema");
const resultat = document.getElementById("resultat");
const svarknapp = document.getElementById("svarknapp");

function visSporsmal() {
  const aktivt = sporsmalListe[nummer];

  sporsmal.textContent = aktivt.tekst;
  fremdrift.textContent = "Spørsmål " + (nummer + 1) +
    " av " + sporsmalListe.length;

  alternativer.innerHTML = "";
  const bokstaver = ["A", "B", "C", "D"];

  for (let i = 0; i < aktivt.alternativer.length; i++) {
    const label = document.createElement("label");
    const input = document.createElement("input");

    input.type = "radio";
    input.name = "svar";
    input.value = i + 1;
    input.required = true;

    label.appendChild(input);
    label.append(bokstaver[i] + ": " + aktivt.alternativer[i]);
    alternativer.appendChild(label);
  }

  alternativer.querySelector("input").focus();

}

visSporsmal();

skjema.addEventListener("submit", function(event) {
  event.preventDefault();

  const valgt = document.querySelector('input[name="svar"]:checked');

  if (!valgt) {
    return;
  }

  const aktivt = sporsmalListe[nummer];

  if (Number(valgt.value) === aktivt.riktig) {
    resultat.textContent = "Riktig svar!";
  } else {
    resultat.textContent = "Feil svar. Riktig svar var " +
      aktivt.alternativer[aktivt.riktig - 1] + ".";
  }

    const inputs = alternativer.querySelectorAll("input");

  for (let i = 0; i < inputs.length; i++) {
    inputs[i].disabled = true;
  }

  svarknapp.disabled = true;
});
