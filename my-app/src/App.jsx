import React from 'react';
import logo from './logo.svg';
import './App.css';

export const App = () => {
	let date = new Date().getFullYear(); // Императивный стиль: создаем объект Date и получаем из него текующий год

	return React.createElement(
		'div',
		{ className: 'App' },
		React.createElement(
			'header',
			{ className: 'App-header' },
			React.createElement('img', { src: logo, className: 'App-logo', alt: 'logo' }),
			React.createElement(
				'p',
				null,
				'Edit ',
				React.createElement('code', null, 'src/App.js'),
				' and save to reload.',
			),
			React.createElement(
				'a',
				{
					className: 'App-link',
					href: 'https://reactjs.org',
					target: '_blank',
					rel: 'noopener noreferrer',
				},
				'Learn React',
			),
			React.createElement('span', null, date),
			// Декларативный стиль: описываем, что хотим отрисовать на экране
		),
	);
};
