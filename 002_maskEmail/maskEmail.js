function maskEmail(email) {
    const atIndex = email.indexOf('@');
    const username = email.slice(0, atIndex);
    const domain = email.slice(atIndex);

    if (username.length <= 2) {
        // Too short to mask properly
        return username[0] + domain;
    }

    const masked = username[0] + '*'.repeat(username.length - 2) + username[username.length - 1];
    return masked + domain;
}

const email = "freecodecamp@example.com";
console.log(maskEmail(email));