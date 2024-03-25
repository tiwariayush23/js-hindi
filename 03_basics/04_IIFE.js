// Immediately Invoked Function Expressions (IIFE)


(function chai() {
    console.log(`DB CONNECTED`);
}) ();

// ( function aurcode () { // named IIFE
//     console.log(`DB CONNECTED TWO`);
// }) ()

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
}) ("ayush")
