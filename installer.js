//Author Jonathan R. Lopez
//this file will install es6 features on too your project
var process = require('child_process')

var spawn = process.spawn;
var exec = process.exec;

var fs = require('fs');

// check if package .json file is there
fs.stat('package.json', (err, stat)=> {
  // if there is an error run this script
  if(err){

    var echoError = spawn('echo', [ '-e', "\\e[44myou must initialize project "
    +"run command\\e[0m \\e[41m npm init \\e[0m \\e[44mthen try again\\e[0m "]);
    echoError.stdout.on('data', data=> {
      console.error(`${data}`);

    })
    // you return so the program won't be left hanging
    return;
  } //end of errors

  // write to babel rc
  var babelrcFile = '{\"presets\": [\"env\"]}';

  fs.writeFile('.babelrc', babelrcFile, err=> {
    if(err) console.error(err);
    console.log('.babelrc file written');
  })

  //if no error run this script
  exec('npm install --save-dev babel-cli babel-preset-env babel-polyfill babel-preset-react babel-loader babel-preset-es2015 babel-preset-stage-2'
  ,(err, stdout, stderr)=> {
    console.log(`${stdout}`);
    console.log(`${stderr}`);
    if(err) {
      console.error(`exec has an error: ${err}`);
    }
  });

  //finish running the script h

})
