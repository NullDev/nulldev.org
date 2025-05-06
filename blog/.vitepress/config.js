import { defineConfig } from "vitepress";

export default defineConfig({
    head: [["link", { rel: "icon", href: "/favicon.png" }]],
    base: "/blog/",
    lang: "en-EN",
    title: "NullDev Blog",
    outDir: "../dist/blog",
    description: "A blog powered by VitePress",
    lastUpdated: true,
    cacheDir: "./node_modules/vitepress_cache",
    appearance: "dark",
    cleanUrls: true,
    themeConfig: {
        nav: [
            { text: "📚 Blog", link: "/" },
            { text: "🏠 Home", link: "../" },
            { text: "🔖 Tags", link: "/tags" },
        ],
        logo: "/img/logo.png",
        socialLinks: [
            { icon: "github", link: "https://github.com/NullDev" },
            { icon: "twitter", link: "https://twitter.com/null_ping" },
        ],
        search: {
            provider: "local",
            options: {
                detailedView: true,
                _render: (src, env, md) => {
                    const html = md.render(src, env);
                    if (env.frontmatter?.search === false) return "";
                    return env.frontmatter?.title ? md.render("# " + env.frontmatter?.title) + html : html;
                },
            },
        },
        footer: {
            message: `© NullDev ${new Date().getFullYear()}`,
        },
    },
    markdown: {
        math: true,
        lineNumbers: true,
    },
    sitemap: {
        hostname: "https://nulldev.org",
    },
});
