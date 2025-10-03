'use strict';

document.addEventListener('DOMContentLoaded', function ()
{
	const email = document.getElementById('text-conversion').firstChild;

	email.nodeValue = email.nodeValue
		.replace(' ', '@')
		.replaceAll(' ', '.')
		.replaceAll(new RegExp('[zy]', 'g'), '')
		.replace('example', 'tohoku.ac.jp');
});
