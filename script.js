const accordions = document.querySelectorAll(".accordion");

accordions.forEach(function(accordion) {
    
    accordion.addEventListener("click", function() {

        accordions.forEach(function(item) {
            if (item !== accordion) {
                item.classList.remove("show");
                item.classList.remove("flip-icon");
                item.classList.remove("question");
            }
        })

        accordion.classList.toggle("show");
        accordion.classList.toggle("flip-icon");
        accordion.classList.toggle("question");
    })
})