import { ImageComponent } from "./components/page/item/image.js";
import { NoteComponent } from "./components/page/item/note.js";
import { TodoComponent } from "./components/page/item/todo.js";
import { VideoComponent } from "./components/page/item/video.js";
import { PageComponent } from "./components/page/page.js";
class App {
    constructor(appRoot) {
        this.page = new PageComponent();
        this.page.attachTo(appRoot);
        const image = new ImageComponent("new Image", "https://src.hidoc.co.kr/image/lib/2021/4/28/1619598179113_0.jpg");
        image.attachTo(appRoot, "beforeend");
        const note = new NoteComponent("Note Title", "Note Body");
        this.page.addChild(note);
        const todo = new TodoComponent("Todo Title", "Todo Item");
        this.page.addChild(todo);
        const video = new VideoComponent("Video Title", "https://www.youtube.com/watch?v=aaQ6ZwrU7Ag");
        this.page.addChild(video);
    }
}
new App(document.querySelector(".document"));
