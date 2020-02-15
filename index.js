function scuberGreetingForFeet(number){
  let result;
  let fare; 

  if (number <= 400) {
    result = 'This one is on me!';
    
  }
  else if  (number > 2000 && number <= 2500) {
    result = 'I will gladly take your thirty bucks.';
    fare = 30;
  }
  else {
    return "No can do.";
  } 
    return result;

}

function ternaryCheckCity(city){
  let result; 

  if (city === 'NYC') {
    result = 'Ok, sounds good.';
  } else {
    result = 'No go.'
  }

  return result;
}

function switchOnCharmFromTip(tip){
  let result;

  if (tip === 'generous') {
    result = 'Thank you so much.';
  }

  else if (tip === 'not as generous') {
    result = 'Thank you.';
  }

  else {
    result = 'Bye.';
  }

  return result;
} 