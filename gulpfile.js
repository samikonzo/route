const gulp = require('gulp')
const exec = require('child_process').exec

function runCommand(command) {
  return function (cb) {
    exec(command, function (err, stdout, stderr) {
      	console.log(stdout);
      	console.log(stderr);

      	if (err !== null) {
      		console.log('exec error: ' + err);
    	}
    });
  }
}

/*gulp.task('start-mongo', runCommand('mongod'))
gulp.task('default', 'start-mongo')*/

var mongodRun = 'D:/workspace/mongodb/bin/mongod -f D:/workspace/mongodb/bin/mongod.conf'
//var mongodRun = 'D:/workspace/mongodb/bin/mongod --help'

gulp.task('stop-mongo', runCommand('mongo --eval "use admin; db.shutdownServer();"'));

gulp.task('default', () => { 
    runCommand(mongodRun)
    setTimeout(() => {
      runCommand('D:/workspace/mongodb/bin/mongo --eval "use admin; db.shutdownServer();"')
    }, 2000)
})






/*gulp.task('default', () => {
	var l = console.log;
	l('bebebe')

	exec('ping localhost', function(err, stdout, stderr){
		l(stdout)
		l(stderr)

	})
})*/