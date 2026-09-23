# Filmquiz

Det er en enkel filmquiz nettside laget med HTML, CSS og JavaScript.
Målet med nettsiden er å teste brukerens filmkunnskap om filmer gjennom ti spørsmål.

## Funksjoner 

- Ti filmspørsmål med fire svaralternativer.
- Ett spørsmål om gangen. 
- Brukeren må velge et svaralternativ.
- Tilbakemelding vises etter rikitg eller feil svar. 
- Svaralternativer låses etter brukeren svart på spørsmål. 
- Sluttresultatet viser antall rikitge svar. 
- Prøv igjen knappen starter quizen på nytt. 

## Slik åpner du quizen 

1. Last ned prosjektet enten som zip fil eller fra github repo.
2. behold alle filene i samme mappe. 
3. Åpne index.html i en nettleser. 

Det er ikke nødvendig å instalere noe. 

## Filene i prosjektet 

index.html - strukturen til nettsiden
style.css - farger, plassering og utseende
script.js - spørsmål, svarkontroll, poeng og generlt funksjoner til nettsiden
README.md - dokumentasjon av prosjektet 

## Hvordan koden fungerer 

Spørsmålene ligger i en liste med objekter i JavaScript. 
Hver objekt inneholder spørsmålstesksten med fire svaralternativer og fasiten. 
Funksjonen visSporsmal viser spørsmålet og lager radiofeltene. 
Variabelen nummer holder styr på spørsmålet og teller poeng til rikitge svar.
Besvart bestemmer om knappen skal kontrollere svaret eller gå videre. 

## Testing 

Jeg har testet følgende i nettleseren:

- Svar på spørsmålet uten valgt svar. 
- Om alle rikitge svar gir 10/10 poeng.
- Om alle feil svar gir 0/10 poeng.
- Om en blanding av rikitge og feil svar gir rikitg poeng. 
- Om svaralternativene låses etter brukeren svart på spørsmålet. 
- Om knappen gå videre går videre til neste spørsmål.
- Om siste spørsmål avslutter quizen. 
- Om prøv igjen starter quizen på nytt.

Alle testene fungerte. 

## Git og gitHub

Arbeidet er delt opp i issues og milestones. 
Endringer er lagret med commits som refererer til relevante issues. 

## Kilder 

Jeg har brukt W3Schools til koden jeg ikke husket, til kodeforslag og hvis jeg visste ikke hva jeg skulle gjøre. 

https://www.w3schools.com/js/js_arrays.asp 
https://www.w3schools.com/js/js_loops.asp
https://www.w3schools.com/js/js_htmldom_eventlistener.asp
https://www.w3schools.com/js/js_htmldom_nodes.asp
