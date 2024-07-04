import logo from './logo.svg';
import './App.css';

export const App = () => {
	let date = new Date().getFullYear(); // Императивный стиль: создаем объект Date и получаем из него текующий год
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<span>{date}</span>
				{/* Декларативный стиль: описываем, что хотим отрисовать
				на экране  */}
			</header>
		</div>
	);
};
