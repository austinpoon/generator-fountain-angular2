const fountain = require('fountain-generator');

module.exports = fountain.Base.extend({
  writing() {
    [
      'src/index.js',
      'src/index.css',
      'src/app/hello.js',
      'src/app/hello.spec.js'
    ].map(file => this.copyTemplate(file, file));
  }
});
