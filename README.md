# sao-hcy-nm

> Personal favorite new project template - SAO generator

## Status

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![](https://img.shields.io/npm/v/sao-hcy-nm.svg)](https://www.npmjs.com/package/sao-hcy-nm)
[![](https://img.shields.io/npm/l/sao-hcy-nm.svg)](https://www.npmjs.com/package/sao-hcy-nm)

![](https://github.com/HcySunYang/sao-hcy-nm/blob/master/imgs/preview.png)

## Why sao-hcy-nm ?

- ✅ Respect the code style of prettier
- ✅ Automatically formatted when saving (You need to install the [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) plugin)
- ✅ Automatic fix code style before commit (Thanks to [husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged))
- ✅ Check committed messages when committing
- ✅ Use `yarn commit` instead of `git commit` (Thanks to [commitizen](http://commitizen.github.io/cz-cli/))
- ✅ Automatically generate changelog using `yarn changelog` (Thanks to [conventional-changelog-cli](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-cli))
- ✅ Automatic deployment with `yarn release` (Thanks to [release-it](https://github.com/webpro/release-it))
- ✅ Optionally Unit test ([jest](https://github.com/facebook/jest) or [ava](https://github.com/avajs/ava))
- ✅ Optionally compile ES2015 code using [bili](https://github.com/unipahq/bili)

## Usage

`sao-hcy-nm` is a generator for [SAO](https://github.com/saojs/sao), Install it first.

```bash
yarn global add sao
# or
npm i -g sao
```

### From npm

```bash
sao hcy-nm my-project
```

### From git

```bash
sao HcySunYang/sao-hcy-nm my-project
```

## License

MIT &copy; [HcySunYang](github.com/HcySunYang)
