export function initArchives(posts){
    const data = {};
    for (let i = 0; i < posts.length; i++){
        const post = posts[i];
        const year = post.date.string.slice(0, 4);
        if (!data[year]){
            data[year] = [];
        }
        data[year].push(post);
    }

    return data;
}

export function initCategory(posts){
    const data = {};
    for (let i = 0; i < posts.length; i++){
        const post = posts[i];
        const {category} = post;
        if (!data[category]){
            data[category] = [];
        }
        data[category].push(post);
    }

    return data;
}

export function initTags(posts){
    const data = {};
    for (let i = 0; i < posts.length; i++){
        const post = posts[i];
        const {tags} = post;
        if (Array.isArray(tags)){
            tags.forEach(tag => {
                if (!data[tag]){
                    data[tag] = [];
                }
                data[tag].push(post);
            });
        }
    }

    return Object.fromEntries(Object.entries(data).sort());
}
