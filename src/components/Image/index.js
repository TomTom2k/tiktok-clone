import { forwardRef, useState } from 'react';
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

export default Image;
