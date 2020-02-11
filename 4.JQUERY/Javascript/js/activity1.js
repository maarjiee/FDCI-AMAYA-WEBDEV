function getSumOfOddNumbers(){
    var sum = 0;
        for(var i = 0 ; i < 50 ; i++){
            if(i % 2 != 0 ){
                sum = sum + i;
            }   
        }
        document.getElementById('sumOfOdd').innerHTML = "SUM of all ODD numbers less than 50 is : " + sum ;
}

function getGradeEquivalent(){

    var  listOfGrades = [];
    var pe =  parseInt(document.getElementById('pe').value);
    var math = parseInt(document.getElementById('math').value);
    var sci = parseInt(document.getElementById('science').value);
    var english = parseInt(document.getElementById('eng').value);
    var fil = parseInt(document.getElementById('fil').value);
   

    listOfGrades.push(pe);
    listOfGrades.push(math);
    listOfGrades.push(sci);
    listOfGrades.push(english);
    listOfGrades.push(fil);

    var sum = 0 ;
    var average;

    for(var i = 0 ; i < listOfGrades.length ; i++){
        sum = sum + listOfGrades[i];
    }

    average = sum / listOfGrades.length;

    switch(average!=0){
        case average < 60 :
            document.getElementById("equival").innerHTML= "Average: "+ average +" <br> F";
        break;
        case average < 70 :
            document.getElementById("equival").innerHTML= "Average: "+ average +"<br> D";
        break;
        case average < 80 :
            document.getElementById("equival").innerHTML= "Average: "+ average +"<br> C";
        break;
        case average < 90 :
            document.getElementById("equival").innerHTML= "Average: "+ average +"<br> B";
        break;
        case average < 100 :
            document.getElementById("equival").innerHTML= "Average: "+ average +"<br> A";
        break;
        default : 
            document.getElementById("equival").innerHTML = "Average: "+ average +": See you next year in the same class! Please try harder!";              
    }
}

function doBeepBoop(){

    for(var i = 1 ; i <= 100 ; i++){
        var x = i % 3;
        var y = i % 5;

        if(x == 0 && y == 0){
            document.write(i," beepboop <br>");
        }else if(y == 0){
            document.write(i," boop <br>");
        }else if( x == 0){
            document.write(i," beep <br>");
        }else{
             document.write(i, "<br>"); 
        }
    }
}

function doBonus(){
    for(var i = 1 ; i <= 5 ; i++){
            for (var j = 1 ; j < i ; j++){
                document.write("*");
            }
                document.write("* <br>");
        }

}

