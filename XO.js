//start of code

console.log("i am started");
// alert(" Welcome to TIC TAK TOE Game");

// all button var
var first_o = 1;
var first_x = 1;
var sec_x = 1;
var sec_o = 1;
var third_o = 1;
var third_x = 1;
var forth_o = 1;
var fourth_x = 1;
var five_o = 1;
var five_x = 1;
var sixth_o = 1;
var sixth_x = 1;
var seventh_o = 1;
var seventh_x = 1;
var eight_o = 1;
var eight_x = 1;
var ninth_x = 1;
var ninth_o = 1;

// X and O var
var bt = 0;

//all function

function one(){
    document.getElementById("td").style.opacity = "1";
    if (bt != 1){
        document.getElementById("1").innerHTML= "O";
        bt ++;
        first_o++;

        if(first_o + sec_o + third_o == 6){
            alert("win O");
            document.getElementById("win").innerHTML= "Atharava Wins";
            window.location.reload()
        }

        if(first_o + forth_o + seventh_o == 6){
            alert("win O");
            window.location.reload()
        }

        if(first_o + five_o + ninth_o == 6){
            alert("win O");
            window.location.reload()
        }
    }else{
        document.getElementById("1").innerHTML= "X";
        bt ++;
        bt = 0;
        first_x++;
        if(first_x + sec_x + third_x == 6){
            alert("win x");
            window.location.reload()
        }

        if(first_x + fourth_x + seventh_x == 6){
            alert("win x");
            window.location.reload()
        }

        if(first_x + five_x + ninth_x == 6){
            alert("win x");
            window.location.reload()
        }
    }

}

function two(){
    document.getElementById("td1").style.opacity = "1";
    if (bt != 1){
        // alert("print O")
        document.getElementById("2").innerHTML= "O";
        bt ++;
        sec_o++;
        // console.log("this is ; " + bt);

        if(first_o + sec_o + third_o == 6){
            alert("win O");
            document.getElementById("win").innerHTML= "Atharava Wins";
            window.location.reload()
        }

        if(sec_o + five_o + eight_o == 6){
            alert("win O");
            // document.getElementById("win").innerHTML= "Atharava Wins";
            window.location.reload()
        }
        


    }else{
        
        document.getElementById("2").innerHTML= "X";
        bt ++;
        bt = 0;
        sec_x++;
        if(first_x + sec_x + third_x == 6){
            alert("win X");
            window.location.reload()
        }

        if(sec_x + five_x + eight_x == 6){
            alert("win x");
            document.getElementById("win").innerHTML= "Atharava Wins";
            window.location.reload()
        }
    }


}

function three(){
    document.getElementById("td2").style.opacity = "1";
    if (bt != 1){    
        document.getElementById("3").innerHTML= "O";
        bt ++;    
        third_o++;
        if(first_o + sec_o + third_o == 6){
            alert("win O");
        
            window.location.reload()
        }
        if(ninth_o + sixth_o + third_o == 6){
            alert("win O");    
            window.location.reload()
        }
        if(five_o + seventh_o + third_o == 6){
            alert("win O");
            window.location.reload()
        }

    }else{

        document.getElementById("3").innerHTML= "X";
        bt ++;
        bt = 0;
        third_x++;
        if(first_x + sec_x + third_x == 6){
            alert("win x");
            // document.getElementById("win").innerHTML= "Atharava Wins";
        
            window.location.reload()
        }
        if(ninth_x + sixth_x + third_x == 6){
            alert("win x");
            document.getElementById("win").innerHTML= "Atharava Wins";
        
            window.location.reload()
        }
        if(five_x + seventh_x + third_x == 6){
            alert("win x");
            document.getElementById("win").innerHTML= "Atharava Wins";
        
            window.location.reload()
        }
        
    }

}

function four(){
    document.getElementById("td3").style.opacity = "1";
    if (bt != 1){
        document.getElementById("4").innerHTML= "O";
        bt ++;
        forth_o++
        if(first_o + forth_o + seventh_o == 6){
            alert("win O");
            window.location.reload()
        }
        if(sixth_o + forth_o + five_o == 6){
            alert("win O");
            window.location.reload()
        }
    }else if (bt = 1){

        document.getElementById("4").innerHTML= "X";
        bt ++;
        bt = 0;
        fourth_x++;
        if(first_x + fourth_x + seventh_x == 6){
            alert("win x");
            window.location.reload()
        }
        if(sixth_x + fourth_x + five_x == 6){
            alert("win x");
            window.location.reload()
        }
        
    }

}

function five(){
    // alert("button started")
    document.getElementById("td4").style.opacity = "1";
    // console.log("i am started in button");
    if (bt != 1){
        // alert("print O")
        document.getElementById("5").innerHTML= "O";
        bt ++;
        five_o++
        console.log("this is ; " + bt);
        if(first_o + five_o + ninth_o == 6){
            alert("win O");
            window.location.reload()
        }

        if(sec_o + five_o + eight_o == 6){
            alert("win O");
            document.getElementById("win").innerHTML= "Atharava Wins";
            window.location.reload()
        }

        if(five_o + seventh_o + third_o == 6){
            alert("win O");
            document.getElementById("win").innerHTML= "Atharava Wins";
        
            window.location.reload()
        }
        if(sixth_o + forth_o + five_o == 6){
            alert("win O");
            window.location.reload()
        }

    }else{
        // alert("nnooooooo");
        document.getElementById("5").innerHTML= "X";
        bt ++;
        bt = 0;
        five_x++;

        if(first_x + five_x + ninth_x == 6){
            alert("win x");
            window.location.reload()
        }

        if(sec_x + five_x + eight_x == 6){
            alert("win x");
            // document.getElementById("win").innerHTML= "Atharava Wins";
            window.location.reload()
        }

        if(five_x + seventh_x + third_x == 6){
            alert("win x");
            // document.getElementById("win").innerHTML= "Atharava Wins";       
            window.location.reload()
        }
        if(sixth_x + fourth_x + five_x == 6){
            alert("win x");
            window.location.reload()
        } 
    }
}
function six(){
    document.getElementById("td5").style.opacity = "1";
    if (bt != 1){
        document.getElementById("6").innerHTML= "O";
        bt ++;
        sixth_o++;
        console.log("this is ; " + bt);
        if(ninth_o + sixth_o + third_o == 6){
            alert("win o");
            window.location.reload()
        }
        if(sixth_o + forth_o + five_o == 6){
            alert("win o");
            window.location.reload()
        }
    }else{
        document.getElementById("6").innerHTML= "X";
          bt ++;
          bt = 0;
          sixth_x++;
          if(ninth_x + sixth_x + third_x == 6){
            alert("win x");
            window.location.reload()
        }
        if(sixth_x + fourth_x + five_x == 6){
            alert("win x");
            window.location.reload()
        }
    }

}

function seven(){
    document.getElementById("td6").style.opacity = "1";
    if (bt != 1){
        // alert("print O")
        document.getElementById("7").innerHTML= "O";
        bt ++;
        seventh_o++
        // console.log("this is ; " + bt);

        if(first_o + forth_o + seventh_o == 6){
            alert("win O");
            window.location.reload()
        }

        if(five_o + seventh_o + third_o == 6){
            alert("win O");
            window.location.reload()
        }

        if(eight_o + seventh_o + ninth_o == 6){
            alert("win O");
            window.location.reload()
        }

    }else{
        // alert("nnooooooo");
        document.getElementById("7").innerHTML= "X";
          bt ++;
          bt = 0;

          seventh_x++;
          if(first_x + fourth_x + seventh_x == 6){
            alert("win x");
            window.location.reload()
        }

        if(five_x + seventh_x + third_x == 6){
            alert("win x");
        
            window.location.reload()
        }

        if(eight_x + seventh_x + ninth_x == 6){
            alert("win x");

        
            window.location.reload()
        }
    }

}

function eight(){
    // alert("button started")
    // console.log("i am started in button");
    document.getElementById("td7").style.opacity = "1";
    if (bt != 1){
        // alert("print O")
        document.getElementById("8").innerHTML= "O";
        bt ++;
        eight_o++;
        console.log("this is ; " + bt);
        if(sec_o + five_o + eight_o == 6){
            alert("win O");
            window.location.reload()
            document.getElementById("win").innerHTML= "Atharava Wins";
        }

        if(eight_o + seventh_o + ninth_o == 6){
            alert("win O");
            document.getElementById("win").innerHTML= "Atharava Wins";
        
            window.location.reload()
        }


    }else{
        document.getElementById("8").innerHTML= "X";
          bt ++;
          bt = 0;
          eight_x++;
        if(sec_x + five_x + eight_x == 6){
            alert("win x");
            window.location.reload();
        }
        if(eight_x + seventh_x + ninth_x == 6){
            alert("win x");
            window.location.reload()
        }
    }

}
function nine(){
    document.getElementById("td8").style.opacity = "1";
    if (bt != 1){
        document.getElementById("9").innerHTML= "O";
        bt ++;
        ninth_o++ ;
        console.log("this is ; " + bt);
        if(first_o + five_o + ninth_o == 6){
            alert("win O");
            window.location.reload()
        }

        if(ninth_o + sixth_o + third_o == 6){
            alert("win O");
            window.location.reload()
        }

        if(eight_o + seventh_o + ninth_o == 6){
            alert("win O");
            window.location.reload()
        }


    }else{
        document.getElementById("9").innerHTML= "X";
          bt ++;
          bt = 0;
          ninth_x ++ ;
         if(first_x + five_x + ninth_x == 6){
            alert("win x");
           window.location.reload()
        }

        if(ninth_x + sixth_x + third_x == 6){
            alert("win x");
            window.location.reload()
        }

        if(eight_x + seventh_x + ninth_x == 6){
            alert("win X");
            window.location.reload()
        }
    }
}

//end of code

//test complete//x`
