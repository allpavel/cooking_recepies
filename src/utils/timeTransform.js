export const timeTransform = (time) => {
    const hours = Math.floor(time / 60);
    const minutes = (time % 60);
    return `${hours} ${hours !== 1 ? 'hours' : 'hour'} ${minutes} mins`;
};