
function Bubble()
{
    //Setting Time complexities
    document.getElementById("Time_Worst").innerText="O(N^2)";
    document.getElementById("Time_Average").innerText="Θ(N^2)";
    document.getElementById("Time_Best").innerText="Ω(N)";

    //Setting Space complexity
    document.getElementById("Space_Worst").innerText="O(1)";
     //info
    document.getElementById("info").innerText="Bubble Sort is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order. It is called bubble sort because the movement of array elements is just like the movement of air bubbles in the water. Bubbles in water rise up to the surface; similarly, the array elements in bubble sort move to the end in each iteration. This algorithm is not suitable for large data sets as its average and worst-case time complexity is quite high.";

    c_delay=0;

    for(var i=0;i<array_size-1;i++)
    {
        for(var j=0;j<array_size-i-1;j++)
        {
            div_update(divs[j],div_sizes[j],"yellow");//Color update: yellow - in process

            if(div_sizes[j]>div_sizes[j+1])
            {
                div_update(divs[j],div_sizes[j], "red");// red- changing
                div_update(divs[j+1],div_sizes[j+1], "red");
                //swap
                var temp=div_sizes[j];
                div_sizes[j]=div_sizes[j+1];
                div_sizes[j+1]=temp;

                div_update(divs[j],div_sizes[j], "red");//Height update
                div_update(divs[j+1],div_sizes[j+1], "red");//Height update
            }
            div_update(divs[j],div_sizes[j], "blue");//blue - after an iteration
        }
        div_update(divs[j],div_sizes[j], "green");//green - at correct position
    }
    div_update(divs[0],div_sizes[0], "green");//Color update

    enable_buttons();
}
