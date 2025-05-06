import { createContentLoader } from "vitepress";

const data = [];

const formatDate = function(raw){
    const date = new Date(raw);
    return {
        time: +date,
        string: date.toISOString().slice(0, 10),
    };
};

export default createContentLoader("posts/*.md", {
    excerpt: true,
    transform(raw){
        return raw
            .map(({ url, frontmatter, excerpt }) => ({
                title: frontmatter.title,
                url,
                excerpt,
                category: frontmatter.category,
                tags: frontmatter.tags,
                date: formatDate(frontmatter.date),
            }))
            .sort((a, b) => b.date.time - a.date.time);
    },
});

export { data };
