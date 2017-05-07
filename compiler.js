var spawn = require('child_process').spawn;

var sass = spawn('sass', ['--watch', './source/sass/main.sass:./app/css/main.css']);
var babelServerCompiler = spawn('babel',['--watch', 'server-source', '--out-dir', 'server']);
var babelClientCompiler = spawn('babel',['--watch', 'source/js', '--out-dir', 'app/js']);



//sass and pug data output goes here
sass.stdout.on('data', data=> {
  console.log(`sass stdout: ${data}`);
} )


babelServerCompiler.stdout.on('data', data=> {
	console.log(`babel server compiler: ${data}`);
} )

babelClientCompiler.stdout.on('data', data=> {
	console.log(`babel client stdout: ${data}`);
} )

//sass and pug error codes go here
sass.stderr.on('data', data=> {
  console.log(`sass stderr: ${data}`);
});

babelServerCompiler.stderr.on('data', data=> {
	console.log(`babel server compiler: ${data}`);
} )

babelClientCompiler.stderr.on('data', data=> {
	console.log(`babel client stdout: ${data}`);
} )



//sass nad pug close codes go here
sass.on('close', code=> {
  console.log(`sass child process exited with code ${code}`);
});

babelServerCompiler.on('closes', code=> {
  console.log(`babel server close`)
})

babelClientCompiler.on('closes', code=> {
  console.log(`babel client close`)
})
