function scuberGreetingForFeet(distance){
  let result
  if (distance <= 400) {
    result = "This one is on me!";
  }
  else if (distance > 2000 && distance <= 2500) {
    result = "I will gladly take your 30 bucks."
  }
  else if (distance > 2500){
    result = "No can do."
  }
  return result
}

function ternaryCheckCity(city){
  let result
  city === "NYC" ? result = "Ok sounds good." : result = "No go."
  return result 
}

function switchOnCharmFromTip(tipType){
  let result
  switch (tipType) {
    case "generous":
      result = "Thank you so much";
      break;
    case "not as generous":
      result = "Thank you.";
      break;
  default:
    result = "Bye.";
  }
  return result
}