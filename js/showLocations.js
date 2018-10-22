document.addEventListener('DOMContentLoaded', function () {
  var brandMap = document.getElementById("brandmap"); 
  var imageSrc = document.getElementById("map-image").src;    
    
  document.querySelectorAll('.tier1bar').forEach(function (bar) {
    var toggler = bar.querySelector('span.open')
    if (!toggler) return
    
    var contentWrapper = bar.querySelector('.tier2bars')
    if (!contentWrapper) return
    
    //var imageSrc = brandMap.firstElementChild.src;
    //var imageSrc = document.getElementById("map-image").src;
    //if (!imageSrc) return
    
    toggler.onclick = function () {
        contentWrapper.classList.toggle('show')
        var location = bar.getElementsByClassName("brandname")[0].firstChild.nextSibling.innerHTML;
        //console.log(brandMap.firstElementChild.src);
        
        switch(location) {
            case "Tempe":
                brandMap.firstElementChild.src = "file:///C:/ChameleonClone/images/tempemap.png";
                //console.log("Tempe case");
                break;
            case "West":
                brandMap.firstElementChild.src = "file:///C:/ChameleonClone/images/westmap.png";
                //console.log("West case");
                break;
            case "Polytechnic":
                brandMap.firstElementChild.src = "file:///C:/ChameleonClone/images/testmap.png";
                //console.log("Poly case");
                break;
            case "Downtown Phoenix":
                brandMap.firstElementChild.src = "file:///C:/ChameleonClone/images/phxmap.png";
                //console.log("Downtown Phoenix case");
                break;
            case "Lake Havasu":
                brandMap.firstElementChild.src = "file:///C:/ChameleonClone/images/havasumap.png";
                //console.log("Lake Havasu case");
                break;
            case "Skysong":
                brandMap.firstElementChild.src = "file:///C:/ChameleonClone/images/skysongmap.png";
                //console.log("Skysong case");
                break;
            case "Research Park":
                brandMap.firstElementChild.src = "file:///C:/ChameleonClone/images/researchmap.png";
                //console.log("Research Park case");
                break;  
            default:
                brandMap.firstElementChild.src = "file:///C:/ChameleonClone/images/testmap.png";
                //console.log("default case");
        }
    
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