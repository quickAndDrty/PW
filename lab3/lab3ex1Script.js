

var list1 = document.getElementById("list1");
var list2 = document.getElementById("list2");

function move1(){
    v = list1.options[list1.selectedIndex];
    list2.add(v);
}

function move2(){
    v = list2.options[list2.selectedIndex];
    list1.add(v);
}
