var thumbTitle = $(".thumb-title");
for (var i = 0; i<= thumbTitle.length; i++){
    if(thumbTitle[i].innerHTML.length > 50){
        var shortendTitle =thumbTitle[i].innerHTML.slice(0, 50);
        thumbTitle[i].innerHTML = shortendTitle.concat("...");
    }
}

function switch_lng() {
  alert("此功能尚未实现。请在以后的版本中尝试此功能. This feature is not yet implemented. Please try this feature again in a later build.");
}	

function openTab(evt, tabName) {
// Declare all variables
var i, tabcontent, tablinks;

// Get all elements with class="tabcontent" and hide them
tabcontent = document.getElementsByClassName("tabcontent");
for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
}

// Get all elements with class="tablinks" and remove the class "active"
tablinks = document.getElementsByClassName("tablinks");
for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
}

// Show the current tab, and add an "active" class to the button that opened the tab
document.getElementById(tabName).style.display = "block";
evt.currentTarget.className += " active";
}