# Administrativt program
Gruppe 11 - CBS HA(it) - 1. semester

## Forretningsobjekter:

OptiShare er en bestillingsplatform, der giver kunder mulighed for at oprette sig som bruger i systemet, og booke tid hos en IT-kundekonsulent. 

I systemet kan kunderne vælge mellem forskellige færdigheder, og krydse de af de søger i en konsulent. Derefter finder systemet frem til de konsulenter, der besidder de forskellige kompetencer og dermed bedst kan opfylde kundens behov. Systemet skal derfor holde styr på konsulenter og deres kompetencer, som er produktet.

Herefter kommer brugeren ind på en kalenderoversigt for den udvalgte konsulent, hvor de kan booke det tidspunkt, der passer dem bedst, såfremt den gældende konsulent er ledig på det ønskede tidspunkt. Platformen skal altså kunne administrere de ledige og optagede tider for de enkelte konsulenter.

Udover at holde styr på konsulenterne, skal systemet også holde styr på de brugere der har oprettet sig, og benytter sig af platformen. Vores system skal kunne registrere tre slags brugere: type 0, som er vores admin-bruge, type 1 der er kunderne og type 2 som er konsulenterne. 

## Ting der sker

Systemet skal muliggøre det at booke tider hos en bestemt konsulent på et bestemt tidspunkt. Brugeren skal altså først ind under den færdighed de har brug for, derefter en specifik konsulent og så ind på en kalenderoversigt for den udvalgte konsulent hvor de så booker sig ind på den tid der passer dem bedst.

Vi ønsker, at brugere af vores administrative system kan sortere mellem færdigheder hos de forskellige klienter, der hører under vores system. Eksempelvis kan man vælge, at man har brug for en IT konsulent med en række bestemte færdigheder, eksempelvis: Front-end development, back-end development, GUI, UX osv. Vi har tænkt os at gøre dette muligt ved at tilføje forskellige ‘tags’ til vores konsulenter, hvorefter vi vil implementere en funktion som kan søge og sortere mellem disse forskellige tags. 

Vi har gjort os overvejelser om, hvorvidt en sådan søgefunktion ville være for stor en opgave, og har derfor også tænkt, at man kan implementere en sorteringsfunktion som i stedet tager udgangspunkt i en række punkter, hvoraf man kan klikke de ønskede funktioner af frem for at søge efter tags. Vi tænker, at dette er en mere overkommelig funktion, men vi ønsker at forsøge os med en søgefunktion til at starte med. 
Efter en bruger har fundet sin ønskede konsulent, skal de kunne booke et ønsket tidsrum i en kalenderfunktion på siden. Denne kalenderfunktion skal kunne local store den bookede tid, og vores kunder og konsulenter skal herefter kunne klikke ind på kalenderen og se deres bookede tider.

Hvis en interaktiv kalender med en local storage funktion viser sig at være for svær at udvikle, vil vi i stedet udvikle bestemte ‘blokke’ (givne tidsintervaller), hvor vores kunder kan skrive sig ind under. Herefter vil vi stadig kunne se hvilke kunder der har skrevet sig op i bestemte blokke hos den enkelte konsulent. Denne funktion vil ikke have samme interaktive funktion som kalenderen, da det her ikke vil være muligt selv at bestemme tidspunktet hvor man ønsker at booke konsulenten, men i stedet skal vælge ud fra en række forudbestemte tidsintervaller. 

Vi vil have 3 forskellige brugertyper som som kan interagere med vores program. Først vil vi have en ‘client’ som har mulighed for at oprette sig (createUser), oprette bookings (bookAppointment) og slette tider (removeAppointment). Dette er bruger type 1, og vil have den største funktionalitet på siden. Client typen skal også kunne slette sin bruger (removeUser).

Dernæst vil vi have en ‘consultant’, som bliver oprettet af adminbrugeren (createConsultant). Han vil kun kunne slette tider (removeAppointment), og se sine aktive bookings. Han skal derudover kunne slette sin bruger (deleteUser).

Til sidst har vi en administrator, brugertype 0, som vil kunne fjerne bookings (removeAppointment). Admin opretter derudover konsulenterne (createConsultant). Vi har derudover tænkt, at denne bruger skal kunne oprette blokintervaller for bookings (createAppointment), hvis det ikke lykkedes at få en fungerende interaktiv kalenderfunktion. 

## Sketches af skærmbilleder

## Alle objekter og funktionaliteter i punktform:

- Startside
    - Velkommen tekst
    - Login (login ())
      - Username
      - Password
- Kunde
  - Opret (createUser ())
    - Username
    - Password
    - Firma
    - Adresse
    - E-mail
    - Tlf. nummer
   - Tjek tider
   - Oprette en booking (bookAppointment ())
   - Slette en booking (removeAppointment ())
   - Slette sin bruger (deleteUser ())
- Admin
    - Login (login ())
    - Oprette konsulentbrugere (createConsultant ())
    - Administrere tider
      - Oprette et bookinginterval - en blok (Hvis kalender ikke bliver den endelige løsning) (createInterval ())
      - Slette en booking (removeAppointment ())
- Konsulent
    - Se aftaler
    - Slette en booking (removeAppointment ())
    - Slette sin bruger (deleteUser ())
- Valg af ydelse (søge- / sorteringsfunktion)
    - Tags der viser forskellige kompetencer 
      - Konsulent
      - Navn
      - Erfaring
      - Tags
      - Booking
      - Dato
      - Ledige tider
- Kalender
    - Skal kunne modtage en booking fra appointment (addAppointment ())
    - Den trækker herfra informationen: 
      - date : appointment
      - time : appointment
      - consultant : appointment 
      - client : appointment
      - Appointments bliver herefter vist i kalenderen for den enkelte konsulent. 
      - Skal have en datofunktion (dateFunction).
