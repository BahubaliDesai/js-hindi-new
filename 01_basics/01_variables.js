const account_id = 12345
let account_name = "bahubali"
var account_password = "23124"
account_city = "sangli"
let account_state;
//account_id = 3
account_name = "Desai"
account_password = "9900"
account_city = "bengaluru"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.log(account_id)
console.table([account_id, account_name, account_password, account_city, account_state])
