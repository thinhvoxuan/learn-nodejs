export function mapping(listMember, listToken) {
    var result = [];
    listToken.forEach((obj, idx) => {
        let token = Object.keys(obj)[0]
        let userId = obj[token].userId;
        if (listMember.indexOf(userId) != -1) {
            result.push(token)
        }
    })
    return result;
}