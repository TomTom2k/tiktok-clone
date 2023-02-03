import { useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import PropTypes from 'prop-types';

import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import { Wrapper as PopperWrapper } from '../../Popper';
import Header from './Header';

const cx = classNames.bind(styles);

const defaultFn = () => {};

const Menu = ({
	children,
	items = [],
	onChange = defaultFn,
	hideOnClick = false,
}) => {
	const [history, setHistory] = useState([{ data: items }]);
	const current = history[history.length - 1];

	const handleResetToFirstPage = () => {
		setHistory((prev) => prev.slice(0, 1));
	};

	const handleBack = () => {
		setHistory((prev) => prev.slice(0, prev.length - 1));
	};

	const renderItems = () => {
		return current.data.map((item, index) => {
			const isParent = !!item.children;
			return (
				<MenuItem
					key={index}
					data={item}
					onClick={() => {
						if (isParent) {
							setHistory((prev) => [...prev, item.children]);
						} else {
							onChange(item);
						}
					}}
				/>
			);
		});
	};

	const renderResult = (attrs) => (
		<div className={cx('menu-list')} tabIndex="-1" {...attrs}>
			<PopperWrapper className={cx('menu-popper')}>
				{history.length > 1 && (
					<Header title={current.title} onBack={handleBack} />
				)}
				<div className={cx('menu-body')}>{renderItems()}</div>
			</PopperWrapper>
		</div>
	);

	return (
		<Tippy
			interactive
			// visible
			delay={[0, 700]}
			offset={[12, 8]}
			placement="bottom-end"
			hideOnClick={hideOnClick}
			render={renderResult}
			onHide={handleResetToFirstPage}
		>
			{children}
		</Tippy>
	);
};

Menu.propTypes = {
	children: PropTypes.node.isRequired,
	items: PropTypes.array,
	onChange: PropTypes.func,
	hideOnClick: PropTypes.func,
};

export default Menu;
