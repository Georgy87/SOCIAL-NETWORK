export const requireLength = (max) => (value) => {
    if (value) {
        if (value.length > max) return `Line length should be no more ${max}`;
        return undefined;
    }
}
