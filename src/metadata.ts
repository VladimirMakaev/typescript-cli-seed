require("pkginfo")(module);
const version = module.exports.version; //This takes version from package.json at runtime
const toolName = module.exports.name; //This takes name from package.json
const description = module.exports.description;

export { version, description, toolName };