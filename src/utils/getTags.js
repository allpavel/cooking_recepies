export const getTags = (tags = []) => {
    const tagsList = {};
    tags.forEach(tag => {
        tag.content.tags.forEach(tag => {
            if (tagsList[tag]) {
                tagsList[tag] += 1;
            } else {
                tagsList[tag] = 1;
            }
        });
    });
    return Object.entries(tagsList).sort((a, b) => a[0].localeCompare(b[0]));
};
