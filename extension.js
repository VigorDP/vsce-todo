const vscode = require("vscode");

function activate(context) {
  console.log('Congratulations, your extension "todo" is now active!');
  let disposable = vscode.commands.registerCommand(
    "extension.helloWorld",
    function() {
      vscode.window.showInformationMessage("Hello World!");
    }
  );
  context.subscriptions.push(disposable);
  var WordCounter = require("./wordCounter");
  var counter = new WordCounter(vscode);
  //需要释放的资源都在这里依次push到这个数组里面
  context.subscriptions.push(counter);
}
exports.activate = activate;

function deactivate() {}

module.exports = {
  activate,
  deactivate
};
