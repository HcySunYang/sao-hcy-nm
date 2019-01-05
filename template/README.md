# <%= name %>

> <%= description %>

<% if (badges.length > 0) { -%>
## Status
<% } -%>

<% if (badges.indexOf('commitizen-friendly') > -1) { -%>
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
<% } -%>
<% if (badges.indexOf('circleci') > -1) { -%>
[![](https://img.shields.io/circleci/project/github/<%= username %>/<%= name %>.svg)](https://circleci.com/gh/<%= username %>/<%= name %>/tree/master)
<% } -%>
<% if (badges.indexOf('npm-version') > -1) { -%>
[![](https://img.shields.io/npm/v/<%= name %>.svg)](https://www.npmjs.com/package/<%= name %>)
<% } -%>
<% if (badges.indexOf('npm-download') > -1) { -%>
[![](https://img.shields.io/npm/dm/<%= name %>.svg)](https://www.npmjs.com/package/<%= name %>)
<% } -%>
<% if (badges.indexOf('license') > -1) { -%>
[![](https://img.shields.io/npm/l/<%= name %>.svg)](https://www.npmjs.com/package/<%= name %>)
<% } -%>
<% if (badges.indexOf('patreon') > -1) { -%>
[![](https://img.shields.io/badge/support%20me-donate-ff00ff.svg)](https://www.patreon.com/<%= username %>)
<% } -%>
<% if (badges.indexOf('prettier') > -1) { -%>
[![](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
<% } -%>

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `yarn run commit`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

**<%= name %>** © [<%= username %>](https://github.com/<%= username %>), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by HcySunYang.

> [<%= website %>](https://<%= website %>) · GitHub [@<%= username %>](https://github.com/<%= username %>) · Twitter [@<%= username %>](https://twitter.com/<%= username %>)

## License

MIT &copy; <%= username %>
