import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faXmarkCircle,
	faSearch,
	faSpinner,
	faEllipsisVertical,
	faEarthAsia,
	faKeyboard,
	faCircleQuestion,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import styles from './Header.module.scss';
import { Wrapper as PopperWrapper } from '../../../Popper';
import images from '../../../../assets/images';
import AccountItem from '../../../AccountItem';
import Button from '../../../Button';
import Menu from '../../../Popper/Menu';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
	{
		icon: <FontAwesomeIcon icon={faEarthAsia} />,
		title: 'English',
	},
	{
		icon: <FontAwesomeIcon icon={faCircleQuestion} />,
		title: 'Feedback and help',
		to: '/feedback',
	},
	{
		icon: <FontAwesomeIcon icon={faKeyboard} />,
		title: 'Keyboard shortcuts',
	},
];

const Header = () => {
	const [searchResult, setSearchResult] = useState([]);
	useEffect(() => {
		setTimeout(() => {
			setSearchResult([]);
		}, 0);
	});
	return (
		<header className={cx('wrapper')}>
			<div className={cx('inner')}>
				<div className={cx('logo')}>
					<img src={images.logo} alt="" />
				</div>
				<Tippy
					visible={searchResult.length > 0}
					interactive
					render={(attrs) => (
						<div
							className={cx('search-result')}
							tabIndex="-1"
							{...attrs}
						>
							<PopperWrapper>
								<h4 className={cx('search-title')}>Account</h4>
								<AccountItem />
								<AccountItem />
								<AccountItem />
							</PopperWrapper>
						</div>
					)}
				>
					<div className={cx('search')}>
						<input
							type="text"
							placeholder="Search accounts and videos"
						/>
						<button className={cx('clear')}>
							<FontAwesomeIcon icon={faXmarkCircle} />
						</button>
						<FontAwesomeIcon
							icon={faSpinner}
							className={cx('loading')}
						/>

						<button className={cx('search-btn')}>
							<FontAwesomeIcon icon={faSearch} />
						</button>
					</div>
				</Tippy>

				<div className={cx('actions')}>
					<Button text>Upload</Button>
					<Button primary>Log in</Button>
					<Menu items={MENU_ITEMS}>
						<button className={cx('more-btn')}>
							<FontAwesomeIcon icon={faEllipsisVertical} />
						</button>
					</Menu>
				</div>
			</div>
		</header>
	);
};

export default Header;
