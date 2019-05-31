import '@babel/polyfill';
import 'whatwg-fetch';

//Init Notification
const notification = new Notification();

// Init Ajax
const ajax = new Ajax();

// Init UI
const ui = new UI();

//Init Observer
const validationForm = new EventObserver();

//Subscribe ob task event
validationForm.subscribe(notification.show);

const moreBtn = document.getElementById('moreBtn');
const subscribeForm = document.forms['subscribeForm'];
const emailInput = subscribeForm.elements['emailInput'];
const galleryList = document.getElementById('gallery-list');

function getPost() {
    ui.preloader(moreBtn);

    ajax.getPosts()
        .then(info => {
            if (info.message === 'Not Found') {
                ui.preloader(moreBtn)
            } else {
                return ui.generatePost(info);
            }
        })
        .then(post => {
            ui.showPost(post);
        })
        .then(() => {
            ui.preloader(moreBtn);
        });
}

function getGalleryImages() {
    ui.preloader(galleryList);

    ajax.getGalleryImages()
        .then(info => {
            return ui.generateGallery(info);
        })
        .then((gallery) => {
            ui.showGallery(gallery);
        })
        .then(() => {
            ui.preloader(galleryList);
        });
}

getPost();
getGalleryImages();

moreBtn.addEventListener('click', function (e) {
    e.preventDefault();

    getPost();
});

subscribeForm.addEventListener('submit', function (e) {
    e.preventDefault();

    if (!emailInput.value) {
        validationForm.fire('Please enter your email');
    } else if (!ui.validateForm(emailInput)) {
        validationForm.fire('Please check your email, and try again');
    } else {
        this.submit();
    }
});