module.exports = function isPelindrome(list) {
    if (list === undefined) {
        return undefined;
    }

    let revList = list.reverse();
    let result = true;
    list.forEach(elem => {
        if (elem != revList.pop()) {
            result = false;
        }
    });
    return result;
};