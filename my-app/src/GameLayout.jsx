import { Information } from './components/information/Information';
import { Field } from './components/field/Field';
import styles from './gameLayout.module.css';
export const GameLayout = ({
	status,
	currentPlayer,
	field,
	handleCellClick,
	handleRestartClick,
}) => (
	<div className={styles.game_layout}>
		<Information status={status} currentPlayer={currentPlayer} />
		<Field field={field} handleCellClick={handleCellClick} />
		<button className={styles.restartButton} onClick={handleRestartClick}>
			Начать заново
		</button>
	</div>
);
