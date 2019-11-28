var currentClient = JSON.parse(localStorage.getItem('Brugere'));
var currentConsultant = JSON.parse(localStorage.getItem('consultants'));
let clients = [];
let consultants = [];

let godtNavn = false;
let godtPass = false;
// Vigtig!
//Hurtig løsning - tjekker om der er en key der hedder Brugere hvis ikke der er så laver den en med et tomt array.
let clientTom = localStorage.getItem("Brugere");
if (clientTom == null) {
    localStorage.setItem('Brugere', JSON.stringify([]));
}

// Definerer vores klasser som bliver brugt til generering samt registrering af brugerne i vores system
class Consultant {
    constructor (consultantName, consultantPassword, skillTag, consultantEmail, Online) {
        this.consultantName = consultantName;
        this.consultantPassword = consultantPassword;
        this.skillTag = skillTag;
        this.consultantEmail = consultantEmail;
        this.Online = false;
}
    }

class Client {
    constructor (clientName, clientPassword, clientEmail, Online) {
        this.clientName = clientName;
        this.clientPassword = clientPassword;
        this.clientEmail = clientEmail;
        this.Online = false;
    }

    // tilføjer method som vi senere kalder i addUser funktionen - gør brug af string interpolation
    promptAlert() {
        alert(`Welcome ${this.clientName}, your account has been registered`);
    }
}
// Funktion som tilføjer pre-set konsulenter til localstorage on-load

    consultants.push(new Consultant('consultant1','password1','HTML','test1@consultant.com'));
    consultants.push(new Consultant('consultant2','password2','CSS','test2@consultant.com'));
    consultants.push(new Consultant('consultant3','password3','Javascript','test3@consultant.com'));

    localStorage.setItem('consultants', JSON.stringify(consultants));

function addUser() {

    // Deklærer variable samt elementId i HTML dokument hvor informationen hentes fra - Lader ikke til at være nødvendigt for nu
    // Lader det dog være.
   /* let clientName = document.getElementById('enteredName').value;
    let clientPassword = document.getElementById('enteredPass').value;
    let clientEmail = document.getElementById('enteredEmail').value;*/

    // Funktion som generer users baseret på tidligere beskrevet class og constructor

    if (enteredName.value.length >= 8) {
        var godtNavn = true;
    } else alert('Brugernavn skal minimum være 8 cifre langt!');
    if (enteredPass.value.length >= 8) {
        var godtPass = true;
    } else alert('Password skal minimum være 8 cifre langt!');
    if (enteredEmail.value.match("@.")) {
        var godEmail = true;
    } else alert("Email er ikke korrekt angivet!");


    if (godtNavn === true && godtPass === true && godEmail === true) {
        let newClient = new Client(
            document.getElementById('enteredName').value,
            document.getElementById('enteredPass').value,
            document.getElementById('enteredEmail').value
        );
        newClient.promptAlert();

        // Log af newClient for kontrol
        console.log(newClient);
        // Henter de brugere der findes i key
        clients = JSON.parse(localStorage.getItem('Brugere'));
        // Pusher til vores Clients[] array
        clients.push(newClient);

        // Gemmer til local storage

        localStorage.setItem('Brugere', JSON.stringify(clients));

        // Endelig log for kontrol
        console.log(clients);
        console.log(consultants);

        // Refresher siden ellers bliver seneste entry ikke pushet ind alle steder.
        window.location = 'Startside.html';

        // Resetter formen til registrering af næste bruger - ikke i brug lige nu.
        // Lader til at den indbyggede funktion i HTML button submit har samme funktion

        // document.forms[0].reset();

    }
}
// Funktion som tjekker at den registrerede data er den samme som er indtastet i login-formen

function checkLogin() {
// Variabler som er sat til false.
    let godkendtID = false;
    let godkendtCID = false;

    // Entered data in the login form
    let enteredName = document.getElementById('enteredName1');
    let enteredPass = document.getElementById('enteredPass1');

    // Funktion som tjekker om det er en Klient der logger ind og sætter godkendtID til true hvis det er.
    for (let i = 0; i < currentClient.length; i++) {
        if (enteredName.value === currentClient[i].clientName && enteredPass.value === currentClient[i].clientPassword) {
            currentClient[i].Online = true;
            godkendtID = true;
        }
    }


    // Funktion som tjekker om det er en Konsulent der logger ind og sætter godkendtCID til true hvis det er.
    for (let i = 0; i < currentConsultant.length; i++) {
        if (enteredName.value === currentConsultant[i].consultantName && enteredPass.value === currentConsultant[i].consultantPassword) {
            currentConsultant[i].Online = true;
            godkendtCID = true;
        }
    }

    // if statement som advarer hvis brugerinfo er forkert.
    if (godkendtID === false && godkendtCID === false) {
        alert('Forkert Brugerinfo!');
    }
    // if statement som gør brug af vores false variabler, sætter deres Online til true i localstorage
    // og dirigerer videre hvis enten klientinfo eller konsulentens info er korrekt
    if (godkendtID === true || godkendtCID === true) {
        alert('Du er blevet logget ind!');
        localStorage.setItem('Brugere', JSON.stringify(currentClient));
        localStorage.setItem('consultants', JSON.stringify(currentConsultant));
        window.location = 'Logget_ind/Brugerside.html';
    }
}

// Function som gør at kan logge ind ved at trykke Enter på password input.
// Hentet fra w3school og modificeret til vores behov
// Get the input field

let input = document.getElementById("enteredPass1");
// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        document.getElementById("login_btn").click();
    }
});