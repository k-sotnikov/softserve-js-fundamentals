module.exports.inviteUser = function (username) {
    const currentDate = new Date();
    const hour = currentDate.getHours();
    let greeting;

    switch (true) {
        case hour > 5 && hour < 11:
            greeting = "Good morning";
            break;
        case hour >= 11 && hour < 17:
            greeting = "Good day";
            break;
        case hour >= 17 && hour < 23:
            greeting = "Good day";
            break;
        case hour >= 23 || hour < 5:
            greeting = "Goodnight";
            break;
    }

    return `
    <p>Date of request: ${currentDate}</p>
    <p>${greeting}, ${username}</p>
    `;
}