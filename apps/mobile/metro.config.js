const path = require('path');
const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

const projectRoot = __dirname;
const monorepoRoot = path.resolve(__dirname, '../../..');

const config = {
  watchFolders: [
    monorepoRoot, // 루트의 node_modules도 Metro가 감시하게 설정
  ],
  resolver: {
    extraNodeModules: {
      '@babel/runtime': path.resolve(monorepoRoot, 'node_modules', '@babel', 'runtime'),
    },
  },
};

module.exports = mergeConfig(getDefaultConfig(projectRoot), config);