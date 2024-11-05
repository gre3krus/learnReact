import { useState } from 'react';
import { GameLayout } from './GameLayout';
import { STATUS, PLAYER } from './constants';
import { checkWin, checkEmptyCell } from './utils';

export const Game = () => {
	const [status, setStatus] = useState(STATUS.TURN);
	const [currentPlayer, setCurrentPlayer] = useState(PLAYER.CROSS);

	const [field, setField] = useState(new Array(9).fill(PLAYER.NOBODY));

	const handleCellClick = (cellIndex) => {
		if (
			status === STATUS.WIN ||
			status === STATUS.DRAW ||
			field[cellIndex] !== PLAYER.NOBODY
		) {
			return;
		}

		const newField = [...field];

		newField[cellIndex] = currentPlayer;

		setField(newField);

		if (checkWin(newField, currentPlayer)) {
			setStatus(STATUS.WIN);
		} else if (checkEmptyCell(newField)) {
			setCurrentPlayer(
				currentPlayer === PLAYER.CROSS ? PLAYER.NOUGHT : PLAYER.CROSS,
			);
		} else {
			setStatus(STATUS.DRAW);
		}
	};

	const handleRestartClick = () => {
		setStatus(STATUS.TURN);
		setCurrentPlayer(PLAYER.CROSS);
		setField(new Array(9).fill(PLAYER.NOBODY));
	};

	return (
		<GameLayout
			status={status}
			currentPlayer={currentPlayer}
			field={field}
			handleCellClick={handleCellClick}
			handleRestartClick={handleRestartClick}
		/>
	);
};
