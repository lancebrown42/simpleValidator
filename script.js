var phone = prompt("Please provide your phone number. The only accepted format is XXX-XXX-XXXX. By inputting a phone number, the user acknowledges that any and all provided information will likely be sold to the Chinese.");
alert(phone.charAt(3) === '-' && phone.charAt(7) === '-');
var birth = prompt("Now your birthday in the form 'XX/XX/XXXX'");
alert(birth.charAt(2)==='/' && birth.charAt(5) === '/');
var zip = prompt("Zip, either as xxxxx or XXXXX-XXXX");
alert(zip.charAt(5)==='-' || zip.length === 5);
var state = prompt("What state are you in? Must be two letter abbreviation, with proper capitalization");
alert(state.length == 2 && state.toUpperCase() == state);
var married = prompt("Are you married? Yes or no?");
alert (married.toUpperCase() == 'YES' || married.toUpperCase() == 'NO');
console.log(state);
console.log(state.toUpperCase())
console.log(married);