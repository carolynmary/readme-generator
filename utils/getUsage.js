function getUsage(usage) {
    if (usage) {
        return (`## How to Use 

<!-- ![demo of application](path-to-file-here) -->
${usage}`)
    };
};

module.exports = getUsage;