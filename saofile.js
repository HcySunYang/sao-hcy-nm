const superb = require('superb')

module.exports = {
  prompts() {
    return [
      {
        name: 'name',
        message: 'What is the name of the new project',
        default: this.outFolder,
        filter: val => val.toLowerCase()
      },
      {
        name: 'description',
        message: 'How would you descripe the new project',
        default: `my ${superb()} project`
      },
      {
        name: 'username',
        message: 'What is your GitHub username',
        default: this.gitUser.username || this.gitUser.name,
        store: true
      },
      {
        name: 'email',
        message: 'What is your email?',
        default: this.gitUser.email,
        store: true
      },
      {
        name: 'website',
        message: 'The URL of your website',
        default({ username }) {
          return `github.com/${username}`
        },
        store: true
      },
      {
        name: 'test',
        message: 'Which test framework do you use?',
        type: 'list',
        default: 'ava',
        store: true,
        choices: ['jest', 'ava', 'disable']
      },
      {
        name: 'coverage',
        message: 'Do you want to add test coverage support',
        type: 'confirm',
        default: false,
        when: answers => answers.test !== 'disable'
      },
      {
        name: 'compile',
        message: 'Do you need to compile ES2015 code',
        type: 'confirm',
        default: false
      },
      {
        name: 'badges',
        message: 'Choose the badge you want to add',
        type: 'checkbox',
        default: ['commitizen-friendly', 'npm-version', 'npm-download', 'license', 'patreon'],
        choices: [
          { name: 'Commitizen friendly', value: 'commitizen-friendly' },
          { name: 'NPM version', value: 'npm-version' },
          { name: 'NPM download', value: 'npm-download' },
          { name: 'License', value: 'license' },
          { name: 'Patreon', value: 'patreon' }
        ]
      }
    ]
  },
  actions() {
    return [
      {
        type: 'add',
        files: '**',
        filters: {
          'jest.config.js': 'test === "jest"',
          '.babelrc': 'compile',
          'src/__test__/index.spec.js': 'test === "jest" && !compile',
          'src/__test__/index.spec.compile.js': 'test === "jest" && compile',
          'src/__test__/index.spec.ava.js': 'test === "ava"',
          'src/index.js': '!compile',
          'src/index.compile.js': 'compile',
        }
      },
      {
        type: 'move',
        patterns: {
          gitignore: '.gitignore',
          '_eslintrc.js': '.eslintrc.js',
          '_package.json': 'package.json',
          'src/index.compile.js': 'src/index.js',
          'src/__test__/index.spec.compile.js': 'src/__test__/index.spec.js',
          'src/__test__/index.spec.ava.js': 'src/__test__/index.spec.js',
        }
      },
      {
        type: 'modify',
        files: 'package.json',
        handler: () => require('./lib/update-pkg')(this.answers)
      },
      {
        type: 'modify',
        files: '.gitignore',
        handler: (data) => require('./lib/update-gitignore')(this.answers, data)
      }
    ]
  },
  async completed() {
    this.gitInit()
    await this.npmInstall()
    this.showProjectTips()
  }
}
