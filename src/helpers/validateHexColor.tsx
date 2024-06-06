import { hexToRgbConverter } from "./hexToRgbConverter.tsx";

export const ERROR = 'Ошибка ввода значения цвета!'
export const MAX_LENGTH = 7;

/**
 * Validator HEX color
 * @param {string} value
 */
export const validateHexColor = (value: string): string => {
    if (value.length < MAX_LENGTH) {
        return '';
    }

    return /#[a-f\d]{6}\b/gi.test(value) ? hexToRgbConverter(value) : ERROR;
}