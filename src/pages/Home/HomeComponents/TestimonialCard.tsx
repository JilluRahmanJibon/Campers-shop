type TestimonialCardProps = {
	testimonial: {
		name: string;
		role: string;
		message: string;
		image_url: string;
	};
};

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
	return (
		<div>
			<div className="bg-white rounded-lg shadow-md overflow-hidden p-4">
				<div className="flex items-center mb-4">
					<img
						className="w-16 h-16 rounded-full object-cover"
						src={testimonial.image_url}
						alt={testimonial.name}
					/>
					<div className="ml-4">
						<h3 className="text-lg font-semibold text-gray-900">
							{testimonial.name}
						</h3>
						<p className="text-gray-600">{testimonial.role}</p>
					</div>
				</div>
				<p className="text-gray-800">{testimonial.message}</p>
			</div>
		</div>
	);
};

export default TestimonialCard;
