console.log(Math.random()*100)
console.log(Math.round(Math.random()*10))


var otp='';
for(i=0;i<4;i++){
    otp += Math.round(Math.random()*10)
}

console.log(otp);
console.log('-------------------------------------------------------')

function autogeneratepassw (){
    var passw = '';
    var disc = "qwertyuiopasdfghjklzxcvbnm,QWERTYUIOASDFGHJKLZXCVBNM1234567890!@#$%^&*()()_+{;':?><,./-";

    for(i=0;i<16;i++){
        let indexx = Math.round(Math.random()*(disc.length));
        passw += disc[indexx];
    }
    console.log(passw);
}
autogeneratepassw();

// task 1 : Empty an array
// task 2 : reverse an array ex var ar = [1,2,3,4] ans : [4,3,2,1]