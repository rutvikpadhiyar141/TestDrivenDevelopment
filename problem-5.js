module.exports = function reverseList(list) {
    if (list === undefined)
        return undefined;

    return list.reverse();

    // reverse = new Array();
    // while (list.length > 0) {
    //     reverse.push(list.pop());
    // }
    // return reverse;
};

