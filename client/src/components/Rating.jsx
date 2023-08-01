import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const Rating = ({ value, text }) => {
	return (
		<div className='rating'>
			{[1, 2, 3, 4, 5].map((rating) => (
				<span key={rating} className='rating'>
					{rating - value <= 0 ? (
						<FaStar />
					) : rating - value === 0.5 ? (
						<FaStarHalfAlt />
					) : (
						<FaRegStar />
					)}
				</span>
			))}
			<span>{text && text}</span>
		</div>
	);
};

export default Rating;
