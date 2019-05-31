const UI = function () {
    const postsList = document.getElementById('news-list');
    const galleryList = document.getElementById('gallery-list');

    const generatePost = function (posts) {
       let output = '';

       for (let i = 0; i < posts.postData.length; i++) {
           output += `
            <li>
                <div class="img-holder" style="background-image: url(${posts.imagesData[i].download_url});">
                </div>
                <div class="news-content">
                    <h3>${posts.postData[i].title}</h3>
                    <div class="news-description">
                        <p>${posts.postData[i].body}</p>
                    </div>
                    <a href="http://link${posts.postData[i].id}" class="link-more">Read me</a>
                </div>
            </li>
        `;
       }

       return output;
    };

    const showPost = function(posts) {
        postsList.insertAdjacentHTML("beforeend", posts);
    };

    const preloader = function (elem) {
        const preloaderHolder = elem.parentNode.querySelector('.preloader-holder');
        preloaderHolder.classList.toggle('active');
    };

    const generateGallery = function (imageList) {
        let output = '';

        for (let i = 0; i < imageList.length; i = i + 2) {
            output += `
                <li>
                    <div class="img-holder w-50p">
                        <img src="${imageList[i].url}" alt="">
                    </div>
                    <div class="img-holder w-50p">
                        <img src="${imageList[++i].url}" alt="">
                    </div>
                    <div class="img-holder">
                        <img src="${imageList[i + 1].url}" alt="">
                    </div>
                </li>
            `;
        }

        return output;
    };

    const showGallery = function(galleryImages) {
        galleryList.insertAdjacentHTML("beforeend", galleryImages);
    };

    const validateForm = function (input) {
        let regEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

        return regEmail.test(input.value);
    };

    return {
        generatePost,
        showPost,
        generateGallery,
        showGallery,
        preloader,
        validateForm
    }
};