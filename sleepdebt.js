const getSleepyHours=day=>{
if(day==='monday'){
  return 6;
}else if(day='tuesday'){
  return 7;
}else if(day='wednesday'){
  return 6;
}else if(day='thursday'){
  return 7;
}else if(day='friday'){
  return 6;
}else if(day='saturday'){
  return 8;
}else if(day='sunday'){
  return 7;}
}

const getActualSleepHours=()=> 6 + 7 + 9 + 8 + 5 + 10 + 11;

const getIdealSleepHours = idealHours => idealHours * 7;


const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours(8);

if(actualSleepHours===idealSleepHours){
  console.log(`your actual sleep hours are ${actualSleepHours}. So,you got perfect amount of sleep!`)
} else if(actualSleepHours > idealSleepHours){
  console.log(`your actual sleep hours are ${actualSleepHours}. So,you got more sleep than needed`)
}else if(actualSleepHours < idealSleepHours){
  console.log(`your actual sleep hours are ${actualSleepHours}. So,you should get some rest`)
}}

calculateSleepDebt();



