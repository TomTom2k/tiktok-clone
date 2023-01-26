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
	faCloudArrowUp,
	faMessage,
	faUser,
	faCoins,
	faCog,
	faSignOut,
} from '@fortawesome/free-solid-svg-icons';

import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';

import styles from './Header.module.scss';
import { Wrapper as PopperWrapper } from '../../../Popper';
import images from '../../../../assets/images';
import AccountItem from '../../../AccountItem';
import Button from '../../../Button';
import Menu from '../../../Popper/Menu';
import { InboxIcon, MessageIcon } from '../../../Icons';
import Image from '../../../Image';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
	{
		icon: <FontAwesomeIcon icon={faEarthAsia} />,
		title: 'English',
		children: {
			title: 'Language',
			data: [
				{
					type: 'language',
					code: 'en',
					title: 'English',
				},
				{
					type: 'language',
					code: 'vn',
					title: 'Tiếng Việt',
				},
			],
		},
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

	const handlerMenuChange = (menuItem) => {
		switch (menuItem.type) {
			case 'language': {
				break;
			}
			default:
				break;
		}
	};

	const userMenu = [
		{
			icon: <FontAwesomeIcon icon={faUser} />,
			title: 'View profile',
			to: '/@hoaa',
		},
		{
			icon: <FontAwesomeIcon icon={faCoins} />,
			title: 'Get Coins',
			to: '/coin',
		},
		{
			icon: <FontAwesomeIcon icon={faCog} />,
			title: 'Setting',
			to: '/settings',
		},
		...MENU_ITEMS,
		{
			icon: <FontAwesomeIcon icon={faSignOut} />,
			title: 'Log Out',
			to: '/logout',
			separate: true,
		},
	];

	const currentUser = true;

	return (
		<header className={cx('wrapper')}>
			<div className={cx('inner')}>
				<div className={cx('logo')}>
					<img src={images.logo} alt="" />
				</div>
				<HeadlessTippy
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
				</HeadlessTippy>

				<div className={cx('actions')}>
					{currentUser ? (
						<>
							<Tippy content="Upload video" placement="bottom">
								<button className={cx('action-btn')}>
									<FontAwesomeIcon icon={faCloudArrowUp} />
								</button>
							</Tippy>
							<Tippy content="Message" placement="bottom">
								<button className={cx('action-btn')}>
									<MessageIcon />
								</button>
							</Tippy>
							<Tippy content="Inbox" placement="bottom">
								<button className={cx('action-btn')}>
									<InboxIcon />
								</button>
							</Tippy>

							{/* <div className={cx('current-user')}></div> */}
						</>
					) : (
						<>
							<Button text>Upload</Button>
							<Button primary>Log in</Button>
						</>
					)}
					<Menu
						items={currentUser ? userMenu : MENU_ITEMS}
						onChange={handlerMenuChange}
					>
						{currentUser ? (
							<Image
								className={cx('user-avatar')}
								src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/c116e49cfa7d637049def7d2abf1e64f~c5"
								alt="nguyen van a"
							/>
						) : (
							<button className={cx('more-btn')}>
								<FontAwesomeIcon icon={faEllipsisVertical} />
							</button>
						)}
					</Menu>
				</div>
			</div>
		</header>
	);
};

export default Header;
