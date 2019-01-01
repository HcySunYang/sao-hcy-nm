const read = require('@commitlint/read')
const chalk = require('chalk')

const commitRule = /^(revert: )?(feat|opti|fix|docs|style|refactor|perf|test|workflow|build|ci|chore|types|wip)(\(.+\))?: .{1,50}/

const linter = async () => {
  const msg = await read({ edit: true })
  if (!commitRule.test(msg)) {
    console.log()
    console.error(
      `  ${chalk.bgRed.white(' ERROR ')} ${chalk.red(
        `invalid commit message format.`
      )}\n\n` +
        chalk.red(
          `  Proper commit message format is required for automated changelog generation. Examples:\n\n`
        ) +
        `    ${chalk.green(`feat(compiler): add 'comments' option`)}\n` +
        `    ${chalk.green(`fix(dialog): handle events on close`)}\n\n` +
        chalk.red(`  Commit msg must satisfy the RegExp:.\n\n`) +
        `  ${chalk.green(commitRule.toString())}\n\n`
    )
    process.exit(1)
  }
}

linter()
