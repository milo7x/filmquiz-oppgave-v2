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
  }
];

let nummer = 0;

const sporsmal = document.getElementById("sporsmal");
const fremdrift = document.getElementById("fremdrift");

function visSporsmal() {
  const aktivt = sporsmalListe[nummer];

  sporsmal.textContent = aktivt.tekst;
  fremdrift.textContent = "Spørsmål " + (nummer + 1) +
    " av " + sporsmalListe.length;
}

visSporsmal();