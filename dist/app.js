import { ImageComponent } from "./components/page/item/image.js";
import { PageComponent } from "./components/page/page.js";
class App {
    constructor(appRoot) {
        this.page = new PageComponent();
        this.page.attachTo(appRoot);
        const image = new ImageComponent("new Image", "https://src.hidoc.co.kr/image/lib/2021/4/28/1619598179113_0.jpg");
        image.attachTo(appRoot, "beforeend");
    }
}
new App(document.querySelector(".document"));
