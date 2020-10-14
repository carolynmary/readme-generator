function getCredits(credits, creditsName, creditsWork, creditsLink) {
    if (credits) {
        return (`## Credits
  
<!-- Third Party Asset Creators? Tutorials> // link to web presence -->
<!-- [Open Weather](http://api.openweathermap.org) // weather API -->
[${creditsName}](${creditsLink}) // ${creditsWork} </br>`)
    };
};

module.exports = getCredits;