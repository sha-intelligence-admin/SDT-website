export default function Button({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'md',
  className = ''
}) {
  const baseStyles = 'rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-primary hover:bg-secondary text-white focus:ring-primary/50',
    secondary: 'bg-secondary hover:bg-secondary/90 text-white focus:ring-secondary/50',
    outline: 'border border-gray-500 hover:bg-gray-100 text-primary focus:ring-gray-200'
  };
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
}