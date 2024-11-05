import { PLAYER_ACTION, PLAYER_NAME, STATUS } from '../../constants';
import { InformationLayout } from './InformationLayout';

export const Information = ({ status, currentPlayer }) => {
	const playerAction = PLAYER_ACTION[status];
	const playerName = PLAYER_NAME[currentPlayer];

	const information =
		status === STATUS.DRAW
			? `${PLAYER_ACTION[STATUS.DRAW]}`
			: `${playerAction} ${playerName}`;

	return <InformationLayout information={information} />;
};
