const THOUSAND_COMMA_REGEX = /(\d)(?=(\d{3})+\b)/g;

export const thousandNumberFormat = (n) => {
    if (typeof n === "number")
        return n.toString().replace(THOUSAND_COMMA_REGEX, "$1,");

    if (typeof n === "string" || n instanceof String)
        return n.replace(THOUSAND_COMMA_REGEX, "$1,")
};

export const setViewCount = (viewCount) => {
    return viewCount > 10000 ? thousandNumberFormat(Math.floor(viewCount / 10000)) + "만" : thousandNumberFormat(viewCount)
}