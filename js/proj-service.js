
var gProjs;

_createProjs()


function getProjsForDisplay() {
    return gProjs
}

function getProjFromId(projId) {
    var proj = gProjs.find(function (project) {
        return project.id === projId;
    })
    return proj;
}

function _createProjs() {
    var projs = [
        {
            id: "minesweeper",
            name: "Mine Sweeper",
            title: "Don\'t step on the bombs",
            desc: "Minesweeper is a single-player puzzle video game. The objective of the game is to clear a rectangular board containing hidden \"mines\" or bombs without detonating any of them, with help from clues about the number of neighboring mines in each field. The game originates from the 1960s, and it has been written for many computing platforms in use today. It has many variations and offshoots.",
            url: "https://basya111.github.io/minesweeper/",
            publishedAt: 'November 2020',
            labels: ["Matrixes", "recursion"]
        },
        {
            id: "touchnums",
            name: "Touch Nums",
            title: "Touch the next num as fast as you can",
            desc: "lorem ipsum lorem ipsum lorem ipsum",
            url: "projs/touchNums",
            publishedAt: 1448693940000,
            labels: ["Matrixes"]
        },
        {
            id: "books",
            name: "books Shop",
            title: "Web books shop",
            desc: "lorem ipsum lorem ipsum lorem ipsum",
            url: "projs/books",
            publishedAt: 1448693940000,
            labels: ["Local Storage"]
        }
    ]
    gProjs = projs
}