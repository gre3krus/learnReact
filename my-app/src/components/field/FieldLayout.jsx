import { PLAYER_SIGN } from '../../constants';
import styles from './FieldLayout.module.css';

export const FieldLayout = ({ field, handleCellClick }) => (
	<div className={styles.field_layout}>
		{field.map((cellPlayer, index) => (
			<button
				key={index}
				className={styles.cell}
				onClick={() => handleCellClick(index)}
			>
				{PLAYER_SIGN[cellPlayer]}
			</button>
		))}
	</div>
);
