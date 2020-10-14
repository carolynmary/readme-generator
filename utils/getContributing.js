function getContributing(contributing) {
  if (contributing) {
      return (`## Contributing

<!-- The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard. -->
${contributing}`)
  };
};

module.exports = getContributing;