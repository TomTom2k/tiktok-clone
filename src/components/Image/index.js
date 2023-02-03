import { forwardRef, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './Image.module.scss';
import images from '../../assets/images';

const Image = forwardRef(
	(
		{
			fallback: customFallback = images.noImage,
			className,
			src = images.noImage,
			alt,
			...props
		},
		ref
	) => {
		const [fallback, setFallback] = useState('');
		const handlerError = () => {
			setFallback(customFallback);
		};
		return (
			<img
				className={classNames(styles.wrapper, className)}
				ref={ref}
				src={fallback || src}
				alt={alt}
				{...props}
				onError={handlerError}
			/>
		);
	}
);

Image.propTypes = {
	fallback: PropTypes.string,
	className: PropTypes.string,
	src: PropTypes.string,
	alt: PropTypes.string,
};

export default Image;
