// Create an object
console.log('Creating obj object...');
let obj = {
    Name : 'Jenul Ferdinand',
    Colour : 'Brown',
    Field : 'Student',
    Age : 20,
    Units : ['FIT2095', 'FIT2014', 'FIT2004', 'MAT1841']
};

// Adding a new key with value
console.log('Creating obj.University key with value...');
obj.University = "Monash University"; 

// Deleting a key
console.log('Deleting obj.Colour...');
delete obj.Colour; 

console.log();
console.log(obj.Units);


// Car fleets testing
const opt = require('./utils'); // Import the functions being exporting from utils as optk
let fleet = []; // Empty array
fleet = opt.generateFleet(15); // Call the generate fleet from opt which is from ./utils
console.log(fleet); // Show output
