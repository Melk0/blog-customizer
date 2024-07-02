import arrow from 'src/images/arrow.svg';
import clsx from 'clsx';
import styles from './ArrowButton.module.scss';

/** Функция для обработки открытия/закрытия формы */
export type OnClick = (e: React.MouseEvent) => void;
type TState = {
	flag: boolean;
	handleClick: OnClick;
};
export const ArrowButton = ({ flag, handleClick }: TState) => {
	return (
		/* Не забываем указаывать role и aria-label атрибуты для интерактивных элементов */
		<div
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			className={
				flag ? clsx(styles.container, styles.container_open) : styles.container
			}
			onClick={(e: React.MouseEvent) => {
				handleClick(e);
			}}>
			<img
				src={arrow}
				alt='иконка стрелочки'
				className={flag ? clsx(styles.arrow, styles.arrow_open) : styles.arrow}
			/>
		</div>
	);
};
