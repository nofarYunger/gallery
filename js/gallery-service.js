'use strict'

var gProjects;


_createProjects()






function _createProjects() {


    gProjects = [
        {
            id: "minesweeper",
            name: "minesweeper",
            title: "MINESWEEPER",
            desc: "first big project from zero",
            url: "https://nofaryunger.github.io/MINESWEEPER/",
            publishedAt: "21/11/2020",
            labels: ["Matrixes", "onmouse events"],
        },
        {
            id: "pacman",
            name: "pacman",
            title: "Pacman",
            desc: "a nostalgic game",
            url: "https://nofaryunger.github.io/pacman/",
            publishedAt: "16/11/2020",
            labels: ["Matrixes", "keyboard events"],
        },
        {
            id: "bookShop",
            name: "bookShop",
            title: "My Book Shop ",
            desc: "selling book online has never been esaier!",
            url: "https://nofaryunger.github.io/book-shop/",
            publishedAt: "26/11/2020",
            labels: ["jquery , crud model , MVC "],
        }
    ]

}


function getProjectsFromDB() {
    console.log(gProjects);
    return gProjects
}

function  getProjectById(projectId) {
   return gProjects.find(function(proj){
       return projectId===proj.id
   })
}