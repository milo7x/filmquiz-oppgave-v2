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

const alternativer = document.getElementById("alternativer");

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
