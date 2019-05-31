class Ajax {
    constructor() {
        this.firstPost = 0;
        this.lastPost = 6;
    }

    async getPosts() {
        const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?_start=${this.firstPost}&_end=${this.lastPost}`);
        const postsImages = await fetch(`https://picsum.photos/v2/list?page=2&limit=${this.lastPost}`);

        const postData = await posts.json();
        const imagesData = await postsImages.json();

        this.firstPost = this.lastPost;
        this.lastPost += 6;

        return {postData, imagesData};
    }

    async getGalleryImages() {
        const galleryImages = await fetch(`https://jsonplaceholder.typicode.com/photos?_end=18`);

        const galleryImagesData = await galleryImages.json();

        return galleryImagesData;
    }
}