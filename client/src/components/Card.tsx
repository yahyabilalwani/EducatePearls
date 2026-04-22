interface CardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
}

const Card = ({ title, description, icon, className = '' }: CardProps) => {
  return (
    <div className={`glass-card-premium rounded-3xl p-8 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 group ${className}`}>
      {icon && (
        <div className="mb-6 inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl text-white shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
          {icon}
        </div>
      )}
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed text-lg">{description}</p>
    </div>
  );
};

export default Card;