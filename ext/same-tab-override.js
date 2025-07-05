const links = document.querySelectorAll("a.app-tile, div.user-menu a, footer a, div.card a, ul.legal-links a");
links.forEach((link) => {
    link.target = "";
});
