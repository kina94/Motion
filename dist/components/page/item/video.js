import { BaseComponent } from "../../component.js";
export class VideoComponent extends BaseComponent {
    constructor(title, url) {
        super(`
        <section class="video">
    <div class="video__player">
    <h2 class="video__title"></h3>
        <iframe class="video__iframe"></iframe>
    </div>
</section>
        `);
        const titleElement = this.element.querySelector(".video__title");
        titleElement.textContent = title;
        const iframe = this.element.querySelector(".video__iframe");
        iframe.src = this.convertToEmbeddedURL(url);
    }
    convertToEmbeddedURL(url) {
        const regExp = /^(?:https?:\/\/)?(?:www\.)?(?:(?:youtube.com\/(?:(?:watch\?v=)|(?:embed\/))([a-zA-Z0-9-]{11}))|(?:youtu.be\/([a-zA-Z0-9-]{11})))/;
        const match = url.match(regExp);
        const videoId = match ? match[1] || match[2] : undefined;
        if (videoId) {
            return `https://www.youtube.com/embed/${videoId}`;
        }
        return url;
    }
}
