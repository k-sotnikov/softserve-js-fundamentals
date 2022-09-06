module.exports.inviteUser = function (username) {
    return `
    <p>Date of request: ${Date()}</p>
    <p>Good evening, ${username}</p>
    `;
}