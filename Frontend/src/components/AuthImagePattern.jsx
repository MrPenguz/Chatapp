const AuthImagePattern = ({ title, subtitle }) => {
    return (
      <div className="hidden md:flex items-center justify-center bg-base-200 p-12 rounded-lg shadow-lg">
        <div className="max-w-md text-center space-y-6">
          {/* Decorative Grid */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {[...Array(9)].map((_, i) => (
              <div
                key={i}
                className={`aspect-square rounded-xl ${
                  i % 2 === 0 ? "bg-primary/20 animate-pulse" : "bg-primary/10"
                } transition-transform duration-300 hover:scale-105 shadow-md`}
                aria-hidden="true"
              />
            ))}
          </div>
  
          {/* Title */}
          <h2 className="text-3xl font-extrabold text-base-content mb-4">
            {title}
          </h2>
  
          {/* Subtitle */}
          <p className="text-base-content/70 text-lg leading-relaxed">{subtitle}</p>
        </div>
      </div>
    );
  };
  
  export default AuthImagePattern;
