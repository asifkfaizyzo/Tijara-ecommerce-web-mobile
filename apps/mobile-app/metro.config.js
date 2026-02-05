const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const projectRoot = __dirname;
const monorepoRoot = path.resolve(projectRoot, '../..');

const config = getDefaultConfig(projectRoot);

// Watch monorepo folders
config.watchFolders = [monorepoRoot];

// Only resolve from local node_modules first
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(monorepoRoot, 'node_modules'),
];

// Disable looking up the hierarchy
config.resolver.disableHierarchicalLookup = false;

// Block problematic metro-cache imports
config.resolver.blockList = [
  // Ignore metro-cache from root
  /node_modules\/metro-cache\/src\/stores\//,
];

module.exports = config;
