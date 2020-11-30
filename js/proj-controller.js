'use strict';

// window.onload = init;

$(document).ready(initPage);

function initPage() {
    console.log('Starting up');
    renderProjs()
}

function renderProjs() {
    var projs = getProjsForDisplay()
    var strHTMLs = projs.map(function (proj) {
        return `<div class="col-md-4 col-sm-6 portfolio-item">
        <a class="portfolio-link" data-toggle="modal" href="#portfolioModal" onclick="renderModal('${proj.id}')">
          <div class="portfolio-hover">
            <div class="portfolio-hover-content">
              <i class="fa fa-plus fa-3x"></i>
            </div>
          </div>
          <img class="img-fluid" src="img/portfolio/${proj.id}.jpg" alt="">
        </a>
        <div class="portfolio-caption">
          <h4>${proj.name}</h4>
          <p class="text-muted">${proj.title}</p>
        </div>
      </div>`
    })

    $('.projs-container').html(strHTMLs.join(''))
}

function renderModal(projId) {
    var proj = getProjFromId(projId)

    var strHTML = `<h2>${proj.name}</h2>
    <p class="item-intro text-muted modal-title">${proj.title}.</p>
    <img class="img-fluid d-block mx-auto" src="img/portfolio/${proj.id}.jpg" alt="">
    <p class="modal-description">${proj.desc}</p>
    <ul class="list-inline">
      <li>Date: ${proj.publishedAt}</li>
      <li>Client: Threads</li>
      <li>Category: Illustration</li>
    </ul>
    <button class="btn btn-success" type="button">
        <i class="fa fa-hand-peace-o"></i>
        <a href="${proj.url}">Check it out!</a></button>
    <button class="btn btn-primary" data-dismiss="modal" type="button">
        <i class="fa fa-times"></i>
        Close Project</button>`

    $('.modal-body').html(strHTML)


}

// function onGetProjFromId(projId) {
//     var project = getProjFromId(projId)
//     return project;
// }


