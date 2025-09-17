const themeConfig = {
    // https://vitepress.dev/reference/site-config
    base: "/blog/",
    lang: "en-EN",
    logo: "https://nulldev.org/img/favicon.png",
    favicon: "/../img/favicon.png",
    title: "NullDev Blog",
    description: "Random thoughts ad infinitum, ad nauseam, ad mortem",
    hostname: "https://nulldev.org",
    lastUpdated: true,
    cacheDir: "./node_modules/vitepress_cache",
    appearance: /** @type {boolean | "dark" | "force-dark" | "force-auto" | (Omit<Boolean, "initialValue"> & { initialValue?: "dark" | undefined; }) | undefined} */ (
        "force-dark"
    ),
    cleanUrls: true,
    mdMath: true,  // math equations
    mdLineNums: true,  // line numbers for code block
    // https://vitepress.dev/reference/default-theme-config
    nav: [
        { text: "📚 Blog", link: "/" },
        { text: "🏠 Home", link: "https://nulldev.org", target: "_self" },
        { text: "🔖 Tags", link: "/tags" },
    ],
    aside: false,
    socialLinks: [
        { icon: "github", link: "https://github.com/NullDev" },
        { icon: "twitter", link: "https://twitter.com/null_ping" },
    ],
    footer: {
        message: `© NullDev ${new Date().getFullYear()}`,
    },
    // custom theme config
    postsPerPage: 10,
    giscus: {
        repo: "NullDev/nulldev.org",
        repoId: "R_kgDOK2aEog",
        category: "Announcements",
        categoryId: "DIC_kwDOK2aEos4Cu3o4",
    },
};

export default themeConfig;
