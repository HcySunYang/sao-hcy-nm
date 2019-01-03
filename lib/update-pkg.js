const when = (condition, value, fallback) => (condition ? value : fallback)

module.exports = (
  {
    name,
    description,
    username,
    email,
    test,
    coverage,
    compile
  }
) => {

  const useAVA = test === 'ava'
  const useJest = test === 'jest'
  const needCompileAndUseJest = compile && useJest
  const needCompileAndUseAVA = compile && useAVA

  return {
    name,
    version: '0.0.0',
    description,
    main: when(compile, `dist/${name}.cjs.js`, 'src/index.js'),
    files: when(compile, ['dist'], ['src']),
    keywords: [],
    scripts: {
      build: when(compile, 'bili'),
      lint: "eslint src/** --fix",
      test: when(useJest,
        when(coverage, `${test} --coverage`, test),
        when(useAVA,
          when(coverage, `nyc ${test}`, test)
        )
      ),
      commit: "git-cz",
      changelog: "conventional-changelog -i CHANGELOG.md -s -r 0",
      release: "release-it --no-git.requireCleanWorkingDir",
      prepublishOnly: when(compile, 'yarn build')
    },
    repository: {
      url: `${username}/${name}`,
      type: 'git'
    },
    author: `${username}<${email}>`,
    license: 'MIT',
    dependencies: {},
    devDependencies: {
      '@babel/core': when(compile, '^7.2.2'),
      '@babel/preset-env': when(compile, '^7.2.3'),
      '@babel/register': when(needCompileAndUseAVA, '^7.0.0'),
      '@commitlint/read': '^7.1.2',
      'babel-core': when(needCompileAndUseJest, '^7.0.0-bridge.0'),
      'babel-jest': when(needCompileAndUseJest, '^23.6.0'),
      'ava': when(useAVA, '^1.0.1'),
      'bili': when(compile, '^3.4.2'),
      'chalk': '^2.4.1',
      'commitizen': '^3.0.5',
      'conventional-changelog-cli': '^2.0.11',
      'cz-conventional-changelog': '2.1.0',
      'eslint': "^5.11.1",
      'eslint-config-prettier': '^3.3.0',
      'eslint-plugin-prettier': '^3.0.1',
      'husky': '^1.3.1',
      'jest': when(useJest, '^23.6.0'),
      'lint-staged': '^8.1.0',
      'nyc': when(useAVA && coverage, '^13.1.0'),
      'prettier': '^1.15.3',
      'release-it': '^9.4.3',
    },
    jest: when(useJest, {
      testEnvironment: 'node'
    }),
    'lint-staged': {
      '*.{js}': [
        'npm run lint',
        'git add'
      ]
    },
    husky: {
      hooks: {
        'pre-commit': 'yarn lint',
        'commit-msg': 'node ./scripts/commit-lint.js'
      }
    },
    ava: when(useAVA, {
      files: [
        '**/__test__/**/*.test.js',
        '**/__test__/**/*.spec.js'
      ],
      require: when(needCompileAndUseAVA, [
        '@babel/register'
      ])
    }),
    config: {
      commitizen: {
        path: 'cz-conventional-changelog'
      }
    }
  }
}