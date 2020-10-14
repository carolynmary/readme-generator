function getTesting(testing) {
    if (testing) {
        return (`## Testing
  
<!-- Go the extra mile and write tests for your application. Then provide examples on how to run them. -->
${testing}`)
    };
};

module.exports = getTesting;