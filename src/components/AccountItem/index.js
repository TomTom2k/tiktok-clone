import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import PropType from 'prop-types';
import classNames from 'classnames/bind';

import styles from './AccountItem.module.scss';
import Image from '../Image';
const cx = classNames.bind(styles);

const AccountItem = ({ data }) => {
	return (
		<Link to={`/${data.nickname}`} className={cx('wrapper')}>
			<Image
				className={cx('avatar')}
				src={data.avatar}
				alt={data.full_name}
			/>
			<div className={cx('info')}>
				<h4 className={cx('name')}>
					<span>{data.full_name}</span>
					{data.tick && (
						<FontAwesomeIcon
							icon={faCheckCircle}
							className={cx('check')}
						/>
					)}
				</h4>
				<span className={cx('username')}>{data.nickname}</span>
			</div>
		</Link>
	);
};

AccountItem.propTypes = {
	data: PropType.object.isRequired,
};

export default AccountItem;
