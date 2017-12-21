let fs = require('fs');
let util = require('util');
let date= require('date');
let i=1;
let path='H:/node/filesystem/file/';
for(i=1;i<7;i++)
{
fs.openSync(path+'file'+i+'.txt', 'w');
}
fs.readdir(path, function(err, files) {
	if(files)
	{
		for(let j=0;j<4;j++)
		{
		var stats = fs.statSync(path+files[j]);
		var mtime1 = new Date(util.inspect(stats.mtime));
		var x=Date.parse(mtime1)-864000000;
		var newmtime=new Date(x);
		fs.utimesSync(path+files[j], newmtime, newmtime);
		}
	}
	 /* files.forEach(function(file, index) {
	  	var stats = fs.statSync(path+file);
		var mtime1 = new Date(util.inspect(stats.mtime));
		var x=Date.parse(mtime1)-864000000;
		var newmtime=new Date(x);
		fs.utimesSync(path+file, newmtime, newmtime);
	  });*/
});