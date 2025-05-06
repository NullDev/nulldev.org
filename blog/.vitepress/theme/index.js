import Theme from "vitepress/theme";
import ThemeLayout from "./ThemeLayout.vue";
import PostInfo from "./components/PostInfo.vue";
import Title from "./components/Title.vue";
import Tags from "./components/Tags.vue";
import "./style.css";

export default {
    "extends": Theme,
    Layout: ThemeLayout,
    // eslint-disable-next-line no-unused-vars
    enhanceApp({ app, router, siteData }){
        app.component("PostInfo", PostInfo);
        app.component("Title", Title);
        app.component("Tags", Tags);
    },
};
