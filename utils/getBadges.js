function getBadges(badges, license) {
    if (badges) {
        return (`<!-- Badges: MAY NEED TO ADJUST LICENSE BADGE URL -->

![HTML](https://img.shields.io/badge/HTML-red) ![CSS](https://img.shields.io/badge/CSS-purple) ![JavaScript](https://img.shields.io/badge/JavaScript-yellow) ![License](https://img.shields.io/badge/License-${license}-green) ![Customize](https://img.shields.io/badge/CustomizeBadge@img.shields.io-darkblue) </br>`)
    };
};

module.exports = getBadges;