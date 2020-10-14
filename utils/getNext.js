function getNext(next) {
    if (next) {
        return (`## What’s Next

${next}`)
    };
};

module.exports = getNext;