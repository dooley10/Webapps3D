//JavaScript functions
$(document).ready(function(){
    $('[data-toggle="popover"]').popover();   
});


function swap(selected){
    //Hide all pages
    document.getElementById('home').style.display = 'none';
    document.getElementById('fanta').style.display = 'none';
    document.getElementById('smartwater').style.display = 'none';
    document.getElementById('costa').style.display = 'none';

    //Show selected page
    document.getElementById(selected).style.display = 'block';
}
