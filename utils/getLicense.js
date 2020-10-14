function getLicense(license) {
    let UsersLicenseURL = ""
    if (license === "MIT") { UsersLicenseURL = UsersLicenseURL.toLowerCase() };
    if (license === "APACHE 2.0") { UsersLicenseURL = "apache-2.0" };
    if (license === "GPL 3.0") { UsersLicenseURL = "gpl-3.0" };
    if (license === "AGPL 3.0") { UsersLicenseURL =  "agpl-3.0" };
    if (license === "ISC") { UsersLicenseURL =  "isc" };
    if (license === "None") { return }
    return (`## License
    
The code is licensed under the [${license}](https://choosealicense.com/licenses/${UsersLicenseURL}/) License.`);
};

module.exports = getLicense;

// How to add the UsersLicenseURL variable to the Badges? 
