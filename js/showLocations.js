document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.tier1bar').forEach(function (bar) {
    var toggler = bar.querySelector('span.open')
    if (!toggler) return
    
    var contentWrapper = bar.querySelector('.tier2bars')
    if (!contentWrapper) return
    
    toggler.onclick = function () {
      contentWrapper.classList.toggle('show')
    }
  })
})

// function showLocations() {
//     "use strict";
//     var x = document.getElementsByClassName("tier2bar")[0];
//     var groupX = document.getElementsByClassName("tier2bars")[0];
//     var test = document.getElementsByClassName("tier1bar");
    
//     for(var i = 0; i < test.length; i++) {
//         console.log(test[i].id);
//     }
    
//     if(!x.classList.contains("show")) {
//         x.classList.add("show");
//         groupX.style.removeProperty("display");
//     }
//     else {
//         x.classList.remove("show");
//         groupX.style.display = "none";
//     }
// }

// Close the dropdown menu if the user clicks outside of it
/*window.onclick = function (event) {
    "use strict";
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};*/