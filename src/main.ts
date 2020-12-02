import * as core from '@actions/core'
import getVersion from './getVersion'

async function run(): Promise<void> {
  try {
    const path = core.getInput('path')

    core.debug(`Load package.json at ${path}`)

    const version = getVersion(path)

    core.debug(`set output: version: ${version}`)
    core.setOutput('version', version)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
