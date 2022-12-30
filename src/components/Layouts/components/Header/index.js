import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faXmarkCircle,
	faSearch,
	faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.scss';

import images from '../../../../assets/images';

const cx = classNames.bind(styles);

const Header = () => {
	return (
		<header className={cx('wrapper')}>
			<div className={cx('inner')}>
				<div className={cx('logo')}>
					<img src={images.logo} alt="" />
				</div>
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

				<div className={cx('actions')}></div>
			</div>
		</header>
	);
};

export default Header;
