
function Insertion()
{
    //Setting Time complexities
    document.getElementById("Time_Worst").innerText="O(N^2)";
    document.getElementById("Time_Average").innerText="Θ(N^2)";
    document.getElementById("Time_Best").innerText="Ω(N)";

    //Setting Space complexity
    document.getElementById("Space_Worst").innerText="O(1)";
    document.getElementById("info").innerText="Insertion sort has various advantages such as - Simple implementation, Efficient for small data sets, Adaptive, i.e., it is appropriate for data sets that are already substantially sorted. Working of Insertion Sort: 1) Iterate from arr[1] to arr[N] over the array. 2) Compare the current element (key) to its predecessor. 3) If the key element is smaller than its predecessor, compare it to the elements before. Move the greater elements one position up to make space for the swapped element. 4) In every iteration putting smallest element to the left.";

    for(var j=0;j<array_size;j++)
    {
        div_update(divs[j],div_sizes[j],"yellow");//Color update

        var temp= div_sizes[j];   
        var i=j-1;
        while(i>=0 && div_sizes[i]>temp)
        {
            div_update(divs[i],div_sizes[i],"red");//Color update
            div_update(divs[i+1],div_sizes[i+1],"red");//Color update

            div_sizes[i+1]=div_sizes[i];  //if ith elem> temp then put it at jth index

            div_update(divs[i],div_sizes[i],"red");//Height update
            div_update(divs[i+1],div_sizes[i+1],"red");//Height update
    
            div_update(divs[i],div_sizes[i],"blue");//Color update
            if(i==(j-1))
            {
                div_update(divs[i+1],div_sizes[i+1],"yellow");//Color update
            }
            else
            {
                div_update(divs[i+1],div_sizes[i+1],"blue");//Color update
            }
            i-=1;
        }
        div_sizes[i+1]=temp;

        for(var t=0;t<j;t++)
        {
            div_update(divs[t],div_sizes[t],"green");//Color update
        }
    }
    div_update(divs[j-1],div_sizes[j-1],"green");//Color update

    enable_buttons();
}

