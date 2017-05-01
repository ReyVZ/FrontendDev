window.onload = function() {
    var dropdown = document.getElementById("dropdown");
    var dropdown_menu = document.getElementById("dropdown_menu");

    dropdown.onclick = function() {
        dropdown_menu.classList.toggle("visible");
    }

    var dropdownSubmenu = document.getElementById("sub");
    var submenu = document.getElementById("submenu");

    dropdownSubmenu.onclick = function() {
        submenu.classList.toggle("visible");
        dropdownSubmenu.classList.toggle("yellow");
        dropdownSubmenu.classList.toggle("up");

    }
}
