var spawn = require('child_process').spawn;

var sass = spawn('sass', ['--watch', './source/sass/main.sass:./app/css/main.css']);

//babel server compiler
var babelServerCompiler = spawn('babel',['--watch', 'server-source', '--out-dir', 'server', '--presets', 'es2015,stage-2,react,env']);

//babel client compiler
var babelClientCompiler = spawn('babel',['--watch', 'source/js', '--out-dir', 'app/js', '--presets', 'es2015,stage-2,react,env']);

//sass and pug data output goes here
sass.stdout.on('data', data=> {
  console.log(`sass stdout: ${data}`);
} );

babelServerCompiler.stdout.on('data', data=> {
	console.log(`babel server compiler: ${data}`);
} );

babelClientCompiler.stdout.on('data', data=> {
	console.log(`babel client stdout: ${data}`);
} );

//sass and pug error codes go here
sass.stderr.on('data', data=> {
  console.log(`sass stderr: ${data}`);
});

babelServerCompiler.stderr.on('data', data=> {
	console.log(`babel server compiler: ${data}`);
} );

babelClientCompiler.stderr.on('data', data=> {
	console.log(`babel client stdout: ${data}`);
} );


//sass nad pug close codes go here
sass.on('close', code=> {
  console.log(`sass child process exited with code ${code}`);
});

babelServerCompiler.on('close', code=> {
  console.log(`babel server child process exited code ${code}`);
})

babelClientCompiler.on('close', code=> {
  console.log(`babel client child process exited code ${code}`);
})


