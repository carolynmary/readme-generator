function getTOC(toc) {
  const usersTOC = []
  if (toc.includes("Installation")) { usersTOC.push(`[Installation](#installation) // `) };
  if (toc.includes("How to Use")) { usersTOC.push(`[How to Use](#how-to-use) // `) };
  if (toc.includes("Testing")) { usersTOC.push(`[Testing](#testing) // `) };
  if (toc.includes("What’s Next")) { usersTOC.push(`[What’s Next](#whats-next) // `) };
  if (toc.includes("Credits")) { usersTOC.push(`[Credits](#credits) // `) };
  if (toc.includes("Contributing")) { usersTOC.push(`[Contributing](#contributing) // `) };
  if (toc.includes("License")) { usersTOC.push(`[License](#license) // `) };
  if (toc.includes("Questions & Feedback")) { usersTOC.push(`[Questions & Feedback](#questions-feedback) `) };
  return (usersTOC.join(""));
};

module.exports = getTOC;

// LINKS NOT WORKING AFTER GENERATION
// Is there a way to remove text? 
// How to get usersTOC array to be in order of asked?