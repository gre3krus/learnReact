import styles from './informationLayout.module.css';
export const InformationLayout = ({ information }) => (
	<div className={styles.information_layout}>{information}</div>
);
