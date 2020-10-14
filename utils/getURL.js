function getURL(urlLink) {
  if (urlLink) {
      return (`[${urlLink}](https://www.${urlLink})`)
  }
  else { return (` `)}
};

module.exports = getURL;