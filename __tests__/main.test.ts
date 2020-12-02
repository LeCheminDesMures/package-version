import * as fs from 'fs';

import getVersion, { findPackageJson } from '../src/getVersion';

const fixturePath = './__tests__/fixture';
const fixture = `./__tests__/fixture/package.json`;

describe('getVersion', () => {
  test('find package.json', () => {
    const result = findPackageJson(fixturePath);

    expect(result).toBe(fs.readFileSync(fixture).toString());
  });

  test('get version in package.json', () => {
    const result = getVersion(fixturePath);

    expect(result).toBe('0.0.0');
  });
});