let subject: string[] = ["Bernd das Brot", "Bill Clinton", "Das Nachbarsbaby", "Jumbo Schreiner",];
let predicate: string[] = ["hasst", "debattiert", "verachtet", "genießt"];
let object: string[] = ["das Heizkostengesetz", "die Schule", "den Tod", "Schüttelfrost"];


for (let index = subject.length; index >= 1; index--) {




getVerse(subject, predicate, object)
}


   


function getVerse(_subject: string[], _predicate: string[], _object: string[]) {

   let verse: string = ""

   let x = Math.floor(Math.random() * _subject.length);
   let y = Math.floor(Math.random() * _predicate.length);
   let z = Math.floor(Math.random() * _object.length);

    let randomSubject = _subject.splice(x, 1)
    let randomPredicate = _predicate.splice(y, 1)
    let randomObject = _object.splice(z, 1)

    verse += randomSubject[0] + " " + randomPredicate[0] + " " + randomObject[0]
    console.log(verse)

}