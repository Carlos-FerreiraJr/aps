let option = document.querySelector("header span");
let sidebar = document.querySelector(".sidebar");



option.onpointerenter = function(){
    sidebar.style.transform = "translateY(0)";
 }   

sidebar.onpointerleave = function(){
    sidebar.style.transform = "translateY(-200%)";
 }
