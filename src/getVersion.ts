import fs from 'fs'
import {join} from 'path'

/**
 * Find package.json with path.
 * @param {string|undefined} path
 */
export const findPackageJson = (path?: string): string => {
  return fs.readFileSync(join(path || './', 'package.json')).toString()
}

/**
 * Get version field within package.json
 * @param {string|undefined} path
 * @returns {string}
 */
const getVersion = (path?: string): string => {
  const packageJson = findPackageJson(path)

  return JSON.parse(packageJson).version
}

export default getVersion
