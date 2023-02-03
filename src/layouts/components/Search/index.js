import { useEffect, useState, useRef } from 'react';

import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import {
	faXmarkCircle,
	faSearch,
	faSpinner,
} from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper } from '../../../components/Popper';
import AccountItem from '../../../components/AccountItem';
import { useDebounce } from '../../../hooks';
import * as searchServices from '../../../services/searchService';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

const Search = () => {
	const [searchValue, setSearchValue] = useState('');
	const [searchResult, setSearchResult] = useState([]);
	const [showResult, setShowResult] = useState(false);
	const [loading, setLoading] = useState(false);

	const debouncedValue = useDebounce(searchValue, 500);

	const inputRef = useRef();

	useEffect(() => {
		if (!debouncedValue.trim()) {
			setSearchResult([]);
			return;
		}
		const fetchApi = async () => {
			setLoading(true);

			const result = await searchServices.search(debouncedValue);
			setSearchResult(result);

			setLoading(false);
		};

		fetchApi();
	}, [debouncedValue]);

	const handlerClear = () => {
		setSearchValue('');
		inputRef.current.focus();
	};

	const handlerHideResult = () => {
		setShowResult(false);
	};

	const handlerChange = (e) => {
		const searchValue = e.target.value;
		if (searchValue.startsWith(' ')) return;
		setSearchValue(searchValue);
	};

	return (
		<div>
			<HeadlessTippy
				visible={searchResult.length > 0 && showResult}
				interactive
				render={(attrs) => (
					<div
						className={cx('search-result')}
						tabIndex="-1"
						{...attrs}
					>
						<PopperWrapper>
							<h4 className={cx('search-title')}>Account</h4>
							{searchResult.map((result) => (
								<AccountItem key={result.id} data={result} />
							))}
						</PopperWrapper>
					</div>
				)}
				onClickOutside={handlerHideResult}
			>
				<div className={cx('search')}>
					<input
						ref={inputRef}
						value={searchValue}
						type="text"
						placeholder="Search accounts and videos"
						onChange={handlerChange}
						onFocus={() => setShowResult(true)}
					/>
					{!!searchValue && !loading && (
						<button className={cx('clear')} onClick={handlerClear}>
							<FontAwesomeIcon icon={faXmarkCircle} />
						</button>
					)}
					{loading && (
						<FontAwesomeIcon
							icon={faSpinner}
							className={cx('loading')}
						/>
					)}

					<button
						className={cx('search-btn')}
						onMouseDown={(e) => e.preventDefault()}
					>
						<FontAwesomeIcon icon={faSearch} />
					</button>
				</div>
			</HeadlessTippy>
		</div>
	);
};

export default Search;
