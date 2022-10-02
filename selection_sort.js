
function Selection_sort()
{
    //Setting Time complexities
    document.getElementById("Time_Worst").innerText="O(N^2)";
    document.getElementById("Time_Average").innerText="Θ(N^2)";
    document.getElementById("Time_Best").innerText="Ω(N^2)";

    //Setting Space complexity
    document.getElementById("Space_Worst").innerText="O(1)";
    //info
    document.getElementById("info").innerText="The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from the unsorted part and putting it at the beginning. The algorithm maintains two subarrays in a given array, the subarray which already sorted and the remaining subarray was unsorted. In every iteration of the selection sort, the minimum element (considering ascending order) from the unsorted subarray is picked and moved to the sorted subarray. ";

    c_delay=0;

    for(var i=0;i<array_size-1;i++)
    {
        div_update(divs[i],div_sizes[i],"red");// Red: Identified as in incorrect position and to be moved 

        index_min=i;

        for(var j=i+1;j<array_size;j++)
        {
            div_update(divs[j],div_sizes[j],"yellow");//Yellow: Being compared
         
            if(div_sizes[j]<div_sizes[index_min])
            {
                if(index_min!=i)
                {
                    div_update(divs[index_min],div_sizes[index_min],"blue");//Blue: Default
                }
                index_min=j;
                div_update(divs[index_min],div_sizes[index_min],"red");//Red: Identified as in incorrect position and to be moved 
            }
            else
            {
                div_update(divs[j],div_sizes[j],"blue");//default
            }
        }
        
        if(index_min!=i)    //swap
        {
            var temp=div_sizes[index_min];
            div_sizes[index_min]=div_sizes[i];
            div_sizes[i]=temp;

            div_update(divs[index_min],div_sizes[index_min],"red");//Height update
            div_update(divs[i],div_sizes[i],"red");//Height update
            div_update(divs[index_min],div_sizes[index_min],"blue");//default
        }
        div_update(divs[i],div_sizes[i],"green");//Color update:  correct position
    }
    div_update(divs[i],div_sizes[i],"green");//Color update: correct position

    enable_buttons();
}
