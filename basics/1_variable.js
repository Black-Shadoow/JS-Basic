const accountId = 144553
let accountEmail = "bibek@gmail.com"
var accountPassword = "12345"
accountCity = "sukhedhara"
let accountState;

// accountId = 2 // not allowed


accountEmail = "kunwarbibek@gmail.com"
accountPassword = "21212121"
accountCity = "Nilopul"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])