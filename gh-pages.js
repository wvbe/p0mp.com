const ghpages = require('gh-pages');

console.log('Publishing');
ghpages.publish(
	'build',
	{
		repo: 'git@github.com:wvbe/p0mp.com.git',
		branch: 'gh-pages'
	},
	err => err ?
		console.error('  FAIL\n\n' + err.message) :
		console.log('  OK')
);
