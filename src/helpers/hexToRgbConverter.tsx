/**
 * Converter color from HEX to RGB format
 * @param {string} value
 */
export const hexToRgbConverter = (value: string): string => {
    const red: number = parseInt(value.slice(1, 3), 16);
    const green: number = parseInt(value.slice(3, 5), 16);
    const blue: number = parseInt(value.slice(5, 7), 16);

    return `rgb(${red}, ${green}, ${blue})`;
}