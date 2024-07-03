import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState } from 'react';
import clsx from 'clsx';
import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import {
	ArticleStateType,
	defaultArticleState,
} from './constants/articleProps';
import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);
export type Tbool = {
	flag: boolean;
};
const App = () => {
	const [value, setOpen] = useState<boolean>(false);
	const handleOpen = () => {
		setOpen((prevValue) => !prevValue);
		console.log(1);
	};
	const [pageSettings, setSettings] = useState(defaultArticleState);
	const handleSetSettings = (value: ArticleStateType) => {
		setSettings(value);
	};
	return (
		<div
			className={clsx(styles.main)}
			style={
				{
					'--font-family': pageSettings.fontFamilyOption.value,
					'--font-size': pageSettings.fontSizeOption.value,
					'--font-color': pageSettings.fontColor.value,
					'--container-width': pageSettings.contentWidth.value,
					'--bg-color': pageSettings.backgroundColor.value,
				} as CSSProperties
			}
			onClick={(e: React.MouseEvent) => {
				if (value) handleOpen();
			}}>
			<ArticleParamsForm
				flag={value}
				handleClick={(e: React.MouseEvent) => {
					handleOpen();
					e.stopPropagation();
				}}
				pageSettings={pageSettings}
				handleSetSettings={handleSetSettings}
			/>
			<Article />
		</div>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
