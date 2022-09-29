export function isItYesterday() {
    const today = new Date();
    const yesterday = new Date(today.getDate() - 1);

    yesterday.setDate(today.getDate() - 1);

    return today.getDate() === yesterday.getDate();
}
