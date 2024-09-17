import { useState } from 'react';
import styles from './MyComponent.module.css';

export const MyComponent = () => {
	const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

	const [displayValue, setDisplayValue] = useState('');
	const [operand1, setOperand1] = useState(null);
	const [operand2, setOperand2] = useState('');
	const [operator, setOperator] = useState('');
	const [isResult, setIsResult] = useState(false);

	const handleNumberClick = (num) => {
		if (isResult) {
			setDisplayValue(num);
			setOperand1(num);
			setOperator('');
			setOperand2('');
			setIsResult(false);
		} else if (operator) {
			setOperand2((prev) => prev + num);
			setDisplayValue((prev) => prev + num);
		} else {
			setOperand1((prev) => (prev ? prev + num : num));
			setDisplayValue((prev) => prev + num);
		}
	};

	const handleOperatorClick = (op) => {
		if (isResult) {
			setOperator(op);
			setDisplayValue(`${operand1} ${op} `);
			setIsResult(false);
		} else if (!operator && operand1) {
			setOperator(op);
			setDisplayValue((prev) => prev + ' ' + op + ' ');
		}
	};

	const handleEqualClick = () => {
		if (operand1 && operator && operand2) {
			const op1 = parseFloat(operand1);
			const op2 = parseFloat(operand2);
			let result = 0;

			if (operator === '+') {
				result = op1 + op2;
			} else if (operator === '-') {
				result = op1 - op2;
			}

			setDisplayValue(result.toString());
			setOperand1(result.toString());
			setOperator('');
			setOperand2('');
			setIsResult(true);
		}
	};

	const handleResetClick = () => {
		setOperand1(null);
		setOperator('');
		setOperand2('');
		setDisplayValue('');
		setIsResult(false);
	};

	const handleBackClick = () => {
		if (operand2) {
			setOperand2((prev) => prev.slice(0, -1));
			setDisplayValue((prev) => prev.slice(0, -1));
		} else if (operator) {
			setOperator('');
			setDisplayValue((prev) => prev.slice(0, -3));
		} else if (operand1) {
			setOperand1((prev) => prev.slice(0, -1));
			setDisplayValue((prev) => prev.slice(0, -1));
		}
	};

	return (
		<div className={styles.container}>
			<div className={styles.box}>
				<div className={styles.display}>
					<span
						className={`${isResult ? styles.resultDisplay : styles.display_values}`}
					>
						{displayValue || 0}
					</span>
				</div>
				<div className={styles.buttons}>
					{nums.map((num) => (
						<button
							key={num}
							className={styles.button}
							onClick={() => handleNumberClick(num)}
						>
							{num}
						</button>
					))}
					<button
						className={styles.button}
						onClick={() => handleOperatorClick('+')}
					>
						+
					</button>
					<button
						className={styles.button}
						onClick={() => handleOperatorClick('-')}
					>
						-
					</button>
					<button className={styles.button} onClick={handleEqualClick}>
						=
					</button>
					<button className={styles.button} onClick={handleResetClick}>
						C
					</button>
					<button className={styles.button} onClick={handleBackClick}>
						back
					</button>
				</div>
			</div>
		</div>
	);
};
