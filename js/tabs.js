const indicators = document.querySelectorAll("nav#main-nav ul li a");
const container = document.querySelector("details");
for(var i = 0, l = indicators.length; i < l; i++) {
    var indicator = indicators[i];
    indicator.addEventListener("click", function(i) {
        container.open = false;
        var targets = document.querySelectorAll("[data-tab]");
        for(var j = 0, targetsLength = targets.length; j < targetsLength; j++) {
            var target = targets[j];
            if(this.getAttribute("href") == target.getAttribute("data-tab")) {
                console.log("entra");
                target.classList.add("active");
                this.classList.add("active");
            }
            else {
                target.classList.remove("active");
            }
        }
        indicator.classList.remove("active");
    });
}
