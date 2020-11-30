'use strict'
renderProtfolio()

function renderProtfolio() {
    var projects = getProjectsFromDB()
    var innerHTML = projects.map(function (project) {
        return `<div class="col-md-4 col-sm-6 portfolio-item">
                   <a class="portfolio-link" onclick="onOpenModal('${project.id}')" data-toggle="modal" href="#portfolioModal">  
                        <div class="portfolio-hover">
                            <div class="portfolio-hover-content">
                                 <i class="fa fa-plus fa-3x"></i>
                             </div>
                        </div>
                    <img class="img-fluid" src="img/projects/${project.id}-protfolio-thumb.jpg" >
                    </a>
                     <div class="portfolio-caption">
                    <h4>${project.title}</h4>
                    <p class="text-muted">click to read more</p>
                    </div>
                </div>`
    })
    console.log(innerHTML);
    $('.portfolio-container').html(innerHTML.join(' '))

}

function onOpenModal(projectId) {
    var proj = getProjectById(projectId)
    console.log(proj);
    renderModal(proj)
    // $('.portfolio-modal').show()
    console.log('ii');
}


function renderModal(project) {
    console.log(project);
    var innerHTML =
        `
                    <h2>${project.title}</h2>
                    <p class="item-intro text-muted">${project.desc}</p>
                    <a href="${project.url}"> <img class="img-fluid d-block mx-auto" src="img/projects/${project.id}-protfolio-thumb.jpg" > </a>
                    <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
                    blanditiis dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae
                    cupiditate,maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                    <ul class="list-inline">
                        <li>Date: ${project.publishedAt}</li>
                        <li>Client: Coding Academy</li>
                        <li>for more info click on the image</li>
                    </ul>
                    <button class="btn btn-primary" data-dismiss="modal" type="button">
                    <i class="fa fa-times"></i>
                    Close Project</button>
               `
    console.log(innerHTML);
    $('.modal-body').html(innerHTML)
}

function onSubmitEmail() {
    console.log('im here');
    var subject = $('input[name=subject]').val()
    var userEmail = $('input[name=userEmail]').val()
    var message = $('textarea[name=message]').val()
    console.log('subj', subject);
    console.log('mess', message);
    console.log('email', userEmail);
    var emailLink = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=nofar505@gmail.com&su=${subject}&body=${message}&bcc=${userEmail}&tf=1`
    window.open(emailLink, '_blank');
}