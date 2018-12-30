const indicators = document.querySelectorAll("nav#main-nav ul li a");
const container = document.querySelector("details");
    indicators.forEach(el => el.addEventListener("click", function(){
        indicators.forEach(el => el.classList.remove("active"));
        var targets = document.querySelectorAll("[data-tab]");
        for(var j = 0, targetsLength = targets.length; j < targetsLength; j++) {
            var target = targets[j];
            if(el.getAttribute("href") == target.getAttribute("data-tab")) {
                target.classList.add("active");
                el.classList.add("active");
            }
            else {
                target.classList.remove("active");
            }
        }
        container.open = false;
    }));
