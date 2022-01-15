function showSidebar() {
    document.getElementById('sidebar').style.display = "block";
    document.getElementById('menu').style.display = "none";
}

function hide() {
    document.getElementById('sidebar').style.display = "none";
    document.getElementById('menu').style.display = "block";
}

function search() {
    document.getElementById('search').style.display = "inline-block";
    document.getElementById('search-input').style.border = "#a9a9a9";
    document.getElementById('search-input').style.borderStyle = "solid";
    document.getElementById('search-input').style.borderWidth = "1px";

}

function showProjects() {
    document.getElementById('project1').style.display = "block";
    document.getElementById('project2').style.display = "block";
    document.getElementById('project3').style.display = "block";
    document.getElementById('showProjects').style.display = "none";
    document.getElementById('hideProjects').style.display = "block";

}

function hideProjects() {
    document.getElementById('project1').style.display = "none";
    document.getElementById('project2').style.display = "none";
    document.getElementById('project3').style.display = "none";
    document.getElementById('showProjects').style.display = "block";
    document.getElementById('hideProjects').style.display = "none";
}