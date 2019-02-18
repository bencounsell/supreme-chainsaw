document.addEventListener("DOMContentLoaded", () => {
    let brand     = document.getElementById('brand'),
        brandIn   = brand.querySelector('.border-grey-lighter'),
        nav       = document.getElementById('nav'),
        navLinks  = nav.querySelectorAll('a'),
        className = 'hasDropdown';

    let brandClasses = [
        "bg-blue-light",
        "text-white"
    ];

    let navClasses = [
        "bg-blue-light",
        "text-white"
    ];

    nav.addEventListener('click', (event) => {
        event.preventDefault();
        toggleClasses();
    });

    brand.addEventListener('click', (event) => {
        event.preventDefault();

        if (dropdownOpen()) {
            toggleClasses();
        }
    });

    function toggleLinks() {
        [...navLinks].map((link) => {
            let textColor = "text-blue-lighter";

            if (link.classList.contains("active")) {
            textColor = "text-white";
            }

            link.classList.toggle(textColor);
            link.classList.toggle("text-black");
        });
    }

    function toggleNav() {
        navClasses.map((name) => {
            nav.classList.toggle(name);
        });

        toggleLinks();
    }

    function toggleBrand() {
        brandClasses.map(name => {
          brand.classList.toggle(name);
        });

        brandIn.classList.toggle('border-grey-lighter');
        brandIn.classList.toggle('border-blue-lighter');
    }

    function toggleClasses() {
        document.body.classList.toggle(className);
        toggleBrand();
        toggleNav();
    }

    function dropdownOpen() {
        return document.body.classList.contains(className);
    }

});
