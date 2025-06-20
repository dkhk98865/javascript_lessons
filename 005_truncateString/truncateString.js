/*
function truncateString(string, num) {

    if (string.length > num) {
        result = string.slice(0, num);
        return result + "...";
    } else if (string.length <= num) {
        return string;
    }

}
*/

/*
function truncateString(string, num) {

    if (string.length > num) {
        return string.slice(0, num) + "...";
    } else if (string.length <= num) {
        return string;
    }

}
*/

const truncateString = (string, num) => {
    if (string.length > num) {
        return string.slice(0, num) + "...";
    } else if (string.length <= num) {
        return string;
    }
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11));

console.log(truncateString("A-tisket a-tasket A green and yello basket", "A-tisket a-tasket A green and yellow basket".length));

console.log(truncateString("A-tisket a-tasket A green and yello basket", "A-tisket a-tasket A green and yellow basket".length + 2));

console.log(truncateString("A-", 1));

console.log(truncateString("Absolutely Longer", 2));