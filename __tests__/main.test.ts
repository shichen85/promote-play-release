import { expect, test } from '@jest/globals'
import { RunOptions, RunTarget } from 'github-action-ts-run-api'
import dotenv from 'dotenv'
dotenv.config()
const target = RunTarget.mainJs('action.yml')

async function expectRunInitiatesUpload(options: RunOptions) {
  const result = await target.run(options)
}

test('correct bare minimum inputs', async () => {
  const minimumOptions = RunOptions.create().setInputs({
    'service-account-json-raw': process.env.SERVICE_ACCOUNT_JSON_RAW,
    'package-name': process.env.PACKAGE_NAME,
    'inapp-update-priority': '0',
    'user-fraction': '1.0',
    'from-track': 'staging',
    'to-track': 'internal'
  })
  await expectRunInitiatesUpload(minimumOptions)
})
