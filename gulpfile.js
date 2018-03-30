const gulp = require('gulp')
const exec = require('child_process').exec
const l = console.log

const MONGO_DIR = 'D:/workspace/mongodb/bin/'


function runCommand(command) {
  return function (cb, errHandler) {
    exec(command, function (err, stdout, stderr) {
        l('command : ', command)
        l('stdout : ', stdout);
        l('stderr : ', stderr);

      	if (err !== null) {
      		l('exec error: ' + err);
          if(errHandler) errHandler()
    	  }

        if (cb) cb()
    });
  }
}


var mongodStartPath = `${MONGO_DIR}mongod -f ${MONGO_DIR}mongod.conf`
var mongoPath = MONGO_DIR + 'mongo'
var mongodStopPath = mongoPath + ` --eval "db.getSiblingDB('admin').shutdownServer()"`


gulp.task('mongodStart', runCommand(mongodStartPath))

gulp.task('mongodStop', runCommand(mongodStopPath))

gulp.task('default', ['mongodStart'])




