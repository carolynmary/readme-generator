function getInstall(installation) {
    if (installation) {
        return (`## Installation
  
${installation}`)
    };
};

module.exports = getInstall;