import { useState } from 'react';
import styles from './MyComponent.module.css';
import data from './data.json';

export const MyComponent = () => {
	const [steps] = useState(data);
	const [activeIndex, setActiveIndex] = useState(0);

	const isFirstStep = activeIndex === 0;
	const isLastStep = activeIndex === steps.length - 1;

	const handleNextStep = () => {
		if (isLastStep) {
			setActiveIndex(0);
		} else {
			setActiveIndex((prevIndex) => prevIndex + 1);
		}
	};

	const handlePrevStep = () => {
		if (!isFirstStep) {
			setActiveIndex((prevIndex) => prevIndex - 1);
		}
	};

	const handleStepClick = (index) => {
		setActiveIndex(index);
	};

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles['steps-content']}>
						{steps[activeIndex].content}
					</div>
					<ul className={styles['steps-list']}>
						{steps.map((step, index) => (
							<li
								key={step.id}
								className={
									styles['steps-item'] +
									' ' +
									(index <= activeIndex ? styles.done : '') +
									' ' +
									(index === activeIndex ? styles.active : '')
								}
							>
								<button
									className={styles['steps-item-button']}
									onClick={() => handleStepClick(index)}
								>
									{index + 1}
								</button>
								{step.title}
							</li>
						))}
					</ul>
					<div className={styles['buttons-container']}>
						<button
							className={styles.button}
							onClick={handlePrevStep}
							disabled={isFirstStep}
						>
							Назад
						</button>
						<button className={styles.button} onClick={handleNextStep}>
							{isLastStep ? 'Начать сначала' : 'Далее'}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
