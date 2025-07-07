var ham = 0;
var cheese = 0;
var bread = 0;
//Report to HQ

var report = 'blank';

if(ham >= 10 && cheese >= 10){
    report = "Strong sales of both items";
}
else if(ham === 0 && cheese === 0){
    report = "Nothing sold";
}
else{
    report = "We had some sales";
}

console.log(report);