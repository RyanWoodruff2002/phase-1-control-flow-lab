function scuberGreetingForFeet(ride){
  // Write your code here!
  if (ride <= 400) {
    return('This one is on me!');
  }
  else if (400 < ride && ride < 2000) {
    return('That will be twenty bucks.');
  }
  else if (ride > 2000 && ride < 2500) {
    return('I will gladly take your thirty bucks.');
  }
  else if (ride > 2500) {
    return('No can do.')
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  const response = city === 'NYC' ? "Ok, sounds good." : "No go.";
  return(response);
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let message;
  switch (tip) {
    case 'generous':
      message = 'Thank you so much.';
      break;
    case 'not as generous':
      message = 'Thank you.';
      break;
    default:
      message = 'Bye.';
      break;
  }
  return(message);

}