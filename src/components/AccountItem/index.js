import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
const cx = classNames.bind(styles);
const AccountItem = () => {
	return (
		<div className={cx('wrapper')}>
			<img
				className={cx('avatar')}
				src="https://media.thieunien.vn/upload/traht/2022/02/24/tiktoker-dao-le-phuong-hoa-dat-10-trieu-follow-lot-top-10-tai-khoan-nhieu-nguoi-theo-doi-nhat-1645685521-5.jpg"
				alt="Hoaa"
			/>
			<div className={cx('info')}>
				<h4 className={cx('name')}>
					<span>Nguyen van A</span>
					<FontAwesomeIcon
						icon={faCheckCircle}
						className={cx('check')}
					/>
				</h4>
				<span className={cx('username')}>nguyenvana</span>
			</div>
		</div>
	);
};

export default AccountItem;
