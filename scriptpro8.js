




(function(){
    let screen = document.querySelector(".screen");
    let buttons = document.querySelectorAll(".btn");
    let equal = document.querySelector(".btn-equal");
    let clear = document.querySelector(".btn-clear");


    buttons.forEach(function(button){
        button.addEventListener('click', function(e){
            let value = e.target.dataset.num;
            screen.value += value;
        })
    });

    equal.addEventListener('click', function(e){
        if(screen.value === ''){
            screen.value = "";
        }
        else{
            let answer = eval(screen.value);
            screen.value = answer;
        }
    })
    clear.addEventListener('click', function(e){
        screen.value = "";
    })

})();

// function nine(){
//     document.getElementById("screen").value += 9;
//     document.getElementById("record").value += 9;
// }

// function eight(){
//     document.getElementById("screen").value += 8;
//     document.getElementById("record").value += 8;
// }

// function seven(){
//     document.getElementById("screen").value += 7;
//     document.getElementById("record").value += 7;
// }

// function six(){
//     document.getElementById("screen").value += 6;
//     document.getElementById("record").value += 6;
// }

// function five(){
//     document.getElementById("screen").value += 5;
//     document.getElementById("record").value += 5;
// }

// function four(){
//     document.getElementById("screen").value += 4;
//     document.getElementById("record").value += 4;
// }

// function three(){
//     document.getElementById("screen").value += 3;
//     document.getElementById("record").value += 3;
// }

// function two(){
//     document.getElementById("screen").value += 2;
//     document.getElementById("record").value += 2;
// }

// function one(){
//     document.getElementById("screen").value += 1;
//     document.getElementById("record").value += 1;
// }

// function zero(){
//     document.getElementById("screen").value += 0;
//     document.getElementById("record").value += 0;
// }

// function point(){
//     document.getElementById("screen").value += ".";
//     document.getElementById("record").value += ".";
// }

// function result(){
//     var2 = document.getElementById("screen").value;

//     if(operator == "+"){
//         answer = Number(var1) + Number(var2);
//     }
//     else if(operator == "-"){
//         answer = Number(var1) - Number(var2);
//     }
//     else if(operator == "*"){
//         answer = Number(var1) * Number(var2);
//     }
//     else if(operator == "/"){
//         answer = Number(var1) / Number(var2);
//     }
//     document.getElementById("screen").value = answer;
// }

// function sum(){
//     var1 = document.getElementById("screen").value;
//     document.getElementById("screen").value = "";
//     document.getElementById("record").value += "+";
//     operator = "+";
// }

// function subtract(){
//     var1 = document.getElementById("screen").value;
//     document.getElementById("screen").value = "";
//     document.getElementById("record").value += "-";
//     operator = "-";
// }

// function divide(){
//     var1 = document.getElementById("screen").value;
//     document.getElementById("screen").value = "";
//     document.getElementById("record").value += "/";
//     operator = "/";
// }

// function multiply(){
//     var1 = document.getElementById("screen").value;
//     document.getElementById("screen").value = "";
//     document.getElementById("record").value += "x";
//     operator = "*";
// }

// function del(){
//     var var3, num;
//     var3 = document.getElementById("screen");
//     num = var3.value;
//     var3.value = num.slice(0,num.length-1);

//     var var4, num1;
//     var4 = document.getElementById("record");
//     num1 = var4.value;
//     var4.value = num1.slice(0,num1.length-1);
// }

// function clearsc(){
//     document.getElementById("screen").value = " ";
//     document.getElementById("record").value = " ";

// }



