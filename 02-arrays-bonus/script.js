const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
console.log(teachers);
//array vuoto per creare una nuova variabile che possa contenere la prima lista invertita
const reversedTeachers = [] 
// ciclo for per inizializzare la variabile i che sia uguale alla lunghezza dell'array teacher 
// i >= 0 vuol dire che l'azione si ripete finchè la i non arriva a 0
// i-- vuol dire che a ogni giro del ciclo la i deve decrementare di 1
for (let i = teachers.length -1; i >= 0; i--) {
  // aggiungo al nuovo array reversedTeacher ogni elemento invertito
  reversedTeachers.push(teachers[i]);
}
console.log(reversedTeachers);

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
console.log(teachers);
//array vuoto per creare una nuova variabile che possa contenere i nomi lunghi
const longNames = []
// ciclo for per inizializzare la variabile i che sia uguale a 0
// i < teachers.length vuol dire che l'azione si ripete finchè l'indice I non arriva alla lunghezza dell'array teacher(la deve scorrere tutta!!)
// i++ vuol dire che a ogni giro del ciclo la i deve incrementarsi di 1
for (let i = 0; i < teachers.length; i++) {
  //ciclo IF per cecare tutti gli elementi della lista che hanno lunghezza >=5
  if (teachers[i].length >= 5) {
    // se la condizione di IF è vera, aggiungo alla fine (push) della nuova lista array longNames il valore trovato
    longNames.push(teachers[i]);
  }
}
console.log(longNames);


// 3. Rimuovi 'Ed' dall'array teachers
console.log(teachers);
// creo variabile per la lista senza 'Ed'
const removedName = []
// ciclo for per inizializzare la variabile i che sia uguale a 0
// i < teachers.length vuol dire che l'azione si ripete finchè la i non arriva alla lunghezza dell'array teacher(la deve scorrere tutta!!)
// i++ vuol dire che a ogni giro del ciclo la i deve incrementarsi di 1
for (let i = 0; i < teachers.length; i++) {
  //ciclo IF per cecare tutti gli elementi della lista che non sono 'Ed'
  if (teachers[i] !== `Ed`) {
    // se la condizione di IF è vera, aggiungo alla fine (push) della nuova lista array removedName il valore trovato
    removedName.push(teachers[i]);
  }
}
console.log(removedName);


// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
const isFabioPresent = null;

// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString
const teachersString = null;