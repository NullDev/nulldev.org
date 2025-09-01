// @ts-nocheck
// https://vitepress.dev/guide/custom-theme
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
    // registering global components
        app.component("PostInfo", PostInfo);
        app.component("Title", Title);
        app.component("Tags", Tags);

    // https://github.com/vuejs/vitepress/issues/3100
    // router.onBeforeRouteChange = () => {}
    },
};
