const sporsmalListe = [
  {
    tekst: "Hva heter cowboyen i Toy Story?",
    alternativer: ["Woody", "Buzz", "Andy", "Rex"],
    riktig: 1
  },
  {
    tekst: "Hvilken skole går Harry Potter på?",
    alternativer: ["Narnia", "Hogwarts", "Nevermore", "Durmstrang"],
    riktig: 2
  },
  {
    tekst: "Hva slags dyr er Simba?",
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
    tekst: "Fra hvilket film kommer Darth Vader fra?",
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
let besvart = false;
let poeng = 0;

const sporsmal = document.getElementById("sporsmal");
const fremdrift = document.getElementById("fremdrift");
const alternativer = document.getElementById("alternativer");
const skjema = document.getElementById("skjema");
const resultat = document.getElementById("resultat");
const svarknapp = document.getElementById("svarknapp");
const restart = document.getElementById("restart");

function visSporsmal() {
  const aktivt = sporsmalListe[nummer];

  besvart = false;
  resultat.textContent = "";
  svarknapp.textContent = "Svar";

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

  if (besvart) {
    nummer++;

    if (nummer < sporsmalListe.length) {
      visSporsmal();
    } else {
      sporsmal.textContent = "Quizen er ferdig!";
      skjema.hidden = true;
      resultat.textContent = "Du fikk " + poeng + "/" +
        sporsmalListe.length + " riktige.";
      restart.hidden = false;
      restart.focus();
    }

    return;
  }

  const valgt = document.querySelector('input[name="svar"]:checked');

  if (!valgt) {
    return;
  }

  const aktivt = sporsmalListe[nummer];

  if (Number(valgt.value) === aktivt.riktig) {
    poeng++;
    resultat.textContent = "Riktig svar!";
  } else {
    resultat.textContent = "Feil svar. Riktig svar var " +
      aktivt.alternativer[aktivt.riktig - 1] + ".";
  }

  const inputs = alternativer.querySelectorAll("input");

  for (let i = 0; i < inputs.length; i++) {
    inputs[i].disabled = true;
  }

  besvart = true;

  if (nummer === sporsmalListe.length - 1) {
    svarknapp.textContent = "Avslutt quizen";
  } else {
    svarknapp.textContent = "Neste spørsmål";
  }
});

restart.addEventListener("click", function() {
  nummer = 0;
  poeng = 0;
  skjema.hidden = false;
  restart.hidden = true;
  visSporsmal();
});
