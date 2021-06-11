var name_of_the_guest_array= []

function Submit(){
    var guest_name = document.getElementById("enter_name").nodeValue;
    name_of_the_guest_array.push(guest_name);
    document.getElementById("display_names").innerHTML = name_of_the_guest_array;
    console.log(name_of_the_guest_array);
    var length_of_the_array = name_of_the_guest_array.length;
    console.log(length_of_the_array);
}

function ShowList() {
    var i = name_of_the_guest_array.join("<br>")
    console.log(name_of_the_guest_array);
    document.getElementById("show_names").innerHTML = i.toString(); 
}

function Sorting() {
    name_of_the_guest_array.sort();
    var i = name_of_the_guest_array.join("<br>")
    console.log(name_of_the_guest_array);
    document.getElementById("sorted_names").innerHTML = i.toString();
}

function Search() {
    var k = document.getElementById("search_name").value;
    var found = 0
    var h;
    for (let h = 0; h < name_of_the_guest_array.length; h++) {
        if (s==name_of_the_guest_array[h]){
            found = found+1;
        }
        
    }
    document.getElementById("search_names").innerHTML = "Name found"+found+"Time/s";
    console.log("Name found"+found+"Time/s");
}