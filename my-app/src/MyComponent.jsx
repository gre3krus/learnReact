import { useState } from 'react';
import styles from './MyComponent.module.css';

export const MyComponent = () => {
	let [value, setValue] = useState('');
	let [error, setError] = useState(false);
	let [list, setList] = useState([]);

	const handleError = () => {
		setError(true);
	};

	const handlePrompt = () => {
		let getValue = prompt('Введите значение');
		if (getValue.length >= 3) {
			setValue(getValue);
			setError(false);
		} else {
			handleError();
		}
	};

	const handleList = () => {
		setList((prevList) => [...prevList, value]);
		setValue('');
	};

	return (
		<div className={styles['app']}>
			<h1 className={styles['page-heading']}>Ввод значения</h1>
			<p className={styles['no-margin-text']}>
				Текущее значение <code>{value}</code>: "
				<output className={styles['current-value']}>{value}</output>"
			</p>
			{error && (
				<div className={styles['error']}>
					Введенное значение должно содержать минимум 3 символа
				</div>
			)}
			<div className={styles['buttons-container']}>
				<button className={styles['button']} onClick={handlePrompt}>
					Ввести новое
				</button>
				<button
					className={styles['button']}
					onClick={handleList}
					disabled={!value}
				>
					Добавить в список
				</button>
			</div>
			<div className={styles['list-container']}>
				<h2 className={styles['list-heading']}>Список:</h2>
				{list.length === 0 ? (
					<p className={styles['no-margin-text']}>Нет добавленных элементов</p>
				) : (
					<ul className={styles['list']}>
						{list.map((item, index) => (
							<li key={index} className={styles['list-item']}>
								{item}
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
};
