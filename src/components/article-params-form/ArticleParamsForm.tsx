import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { Select } from 'components/select';
import styles from './ArticleParamsForm.module.scss';
import { SyntheticEvent, useState } from 'react';
import {
	ArticleStateType,
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
} from '../../constants/articleProps';
import { RadioGroup } from '../radio-group/RadioGroup';
import { Separator } from '../separator/Separator';
import { Text } from '../text/Text';
import clsx from 'clsx';
type TState = {
	flag: boolean;
	handleClick: OnClick;
	pageSettings: ArticleStateType;
	handleSetSettings: EditSettings;
};
export type OnClick = (e: React.MouseEvent) => void;
export type EditSettings = (value: ArticleStateType) => void;
export const ArticleParamsForm = ({
	flag,
	handleClick,
	pageSettings,
	handleSetSettings,
}: TState) => {
	const [selectedFamily, setSelectedFamily] = useState(
		pageSettings.fontFamilyOption
	);
	const [selectedSize, setSelectedSize] = useState(pageSettings.fontSizeOption);
	const [selectedFontColor, setSelectedFontColor] = useState(
		pageSettings.fontColor
	);
	const [selectedBackgroundColor, setSelectedBackgroundColor] = useState(
		pageSettings.backgroundColor
	);
	const [selectedContentWidth, setSelectedContentWidth] = useState(
		pageSettings.contentWidth
	);
	return (
		<>
			<ArrowButton flag={flag} handleClick={handleClick} />
			<aside
				onClick={(e: React.MouseEvent) => {
					e.stopPropagation();
				}}
				className={
					flag
						? clsx(styles.container, styles.container_open)
						: styles.container
				}>
				<form
					className={styles.form}
					onSubmit={(e: SyntheticEvent) => {
						e.preventDefault();
						handleSetSettings(pageSettings);
					}}>
					<Text
						size={31}
						uppercase={true}
						family='open-sans'
						as={'h2'}
						weight={800}
						fontStyle='normal'>
						Задайте параметры
					</Text>
					<Select
						selected={selectedFamily}
						onChange={setSelectedFamily}
						options={fontFamilyOptions}
						title='Шрифт'
					/>
					<RadioGroup
						selected={selectedSize}
						name='radio'
						onChange={setSelectedSize}
						options={fontSizeOptions}
						title='Размер шрифта'
					/>
					<Select
						selected={selectedFontColor}
						onChange={setSelectedFontColor}
						options={fontColors}
						title='Цвет шрифта'
					/>
					<Separator />
					<Select
						selected={selectedBackgroundColor}
						onChange={setSelectedBackgroundColor}
						options={backgroundColors}
						title='Цвет фона'
					/>
					<Select
						selected={selectedContentWidth}
						onChange={setSelectedContentWidth}
						options={contentWidthArr}
						title='Ширина контента'
					/>
					<div className={styles.bottomContainer}>
						<Button
							title='Сбросить'
							type='reset'
							onClick={() => {
								handleSetSettings(defaultArticleState);
								setSelectedBackgroundColor(defaultArticleState.backgroundColor);
								setSelectedContentWidth(defaultArticleState.contentWidth);
								setSelectedFamily(defaultArticleState.fontFamilyOption);
								setSelectedFontColor(defaultArticleState.fontColor);
								setSelectedSize(defaultArticleState.fontSizeOption);
							}}
						/>
						<Button
							title='Применить'
							type='submit'
							onClick={() => {
								pageSettings = {
									fontFamilyOption: selectedFamily,
									fontColor: selectedFontColor,
									backgroundColor: selectedBackgroundColor,
									contentWidth: selectedContentWidth,
									fontSizeOption: selectedSize,
								};
							}}
						/>
					</div>
				</form>
			</aside>
		</>
	);
};
