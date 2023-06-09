export const capitalize = (_string: string): string => {
    return _string[0].toUpperCase() + _string.slice(1);
}

export const formatPhoneNumber = (phoneNumber: string): string => {
    const cleaned = ('' + phoneNumber).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    return match ? '(' + match[1] + ') ' + match[2] + '-' + match[3] : '';
}

export const _capitalize = (_string: string): string => {
return _string[0].toLowerCase() + _string.slice(1);
}