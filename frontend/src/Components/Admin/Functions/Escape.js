export const Escape = (str) => {
    return ('' + str)
    .replace(/\\/g, '\\\\')
    .replace(/\t/g, '\\t')
    .replace(/\n/g, '\\n')
    .replace(/\u00A0/g, '\\u00A0')
    .replace(/&/g, '\\x26')
    .replace(/'/g, '\\x27')
    .replace(/"/g, '\\x22')
    .replace(/</g, '\\x3C')
    .replace(/>/g, '\\x3E');
}