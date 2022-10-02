/*
Variable naming convention: <object>_<action>_<objectname>; Example -> Button_click_b1;

values:
delay_time=10000/(Math.floor(array_size/10)*speed); 
height: div_sizes[i]=Math.floor(Math.random() * 65) + 10;
width: (100/array_size-(2*margin_size)) 

functions:
1) setTimeout() method calls a function after a number of milliseconds.
*/

//----------------------------------------Variables----------------------------------------
var inp_as=document.getElementById('a_size');  //size
var array_size=inp_as.value;
var inp_gen=document.getElementById("a_generate");
var inp_aspeed=document.getElementById("a_speed");
//var array_speed=document.getElementById('a_speed').value;

var div_sizes=[]; //height
var divs=[];   //bar
var margin_size; //distance between 2 bars
var cont=document.getElementById("array_container");   //array bars
cont.style="flex-direction:row";

//----------------------------------------Array generation and updation.----------------------------------------

inp_gen.addEventListener("click",generate_array);
inp_as.addEventListener("input",update_array_size);

function generate_array()
{
    cont.innerHTML="";

    for(var i=0;i<array_size;i++)
    {
        div_sizes[i]=Math.floor(Math.random() * 65 ) + 10; //height ..+10 bcoz random() can generate 0
        divs[i]=document.createElement("div");
        cont.appendChild(divs[i]);
        margin_size=0.1; //distance between 2 bars
        divs[i].style=" margin:0% " + margin_size + "%; background-color:blue; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
    }
}

function update_array_size()
{
    array_size=inp_as.value;
    generate_array();
}

window.onload=update_array_size();

//----------------------------------------Running the appropriate algorithm.
var butts_algos=document.querySelectorAll(".algos button");

for(var i=0;i<butts_algos.length;i++)
{
    butts_algos[i].addEventListener("click",runalgo);
}

function disable_buttons()
{
    for(var i=0;i<butts_algos.length;i++)
    {
        butts_algos[i].classList=[];
        butts_algos[i].classList.add("butt_locked");

        butts_algos[i].disabled=true;
        inp_as.disabled=true;
        inp_gen.disabled=true;
        inp_aspeed.disabled=true;
    }
    
}

function runalgo()
{
    disable_buttons();

    this.classList.add("butt_selected");
    switch(this.innerHTML)
    {
        case "Bubble Sort":Bubble();
                        break;
        case "Selection Sort":Selection_sort();
                        break;
        case "Insertion Sort":Insertion();
                        break;
        case "Merge Sort":Merge();
                        break;
        case "Quick Sort":Quick();
                        break;
    }
}

