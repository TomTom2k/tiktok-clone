import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faEllipsisVertical,
	faEarthAsia,
	faKeyboard,
	faCircleQuestion,
	faCloudArrowUp,
	faUser,
	faCoins,
	faCog,
	faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';

import styles from './Header.module.scss';
import images from '../../../../assets/images';
import Button from '../../../Button';
import Menu from '../../../Popper/Menu';
import { InboxIcon, MessageIcon } from '../../../Icons';
import Image from '../../../Image';
import Search from '../Search';

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

				<Search />

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
								src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/c116e49cfa7d637049def7d2abf1e64f~c5_100x100.jpeg?x-expires=1674918000&x-signature=wwkaZrsTLGIvVjXGLUWoB2Tt16Y%3D"
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
