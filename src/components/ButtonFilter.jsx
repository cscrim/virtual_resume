function ButtonFilter({ label, handleClick, ariaPressed }) {
    return (
      <button
        onClick={handleClick}
        aria-pressed={ariaPressed}
        className="font-heading text-base text-blue-50 lowercase 
          border-b-2 border-transparent
          flex justify-center items-center
          hover:border-seafoam-500 
          aria-pressed:border-seafoam-500"
      >
        {label}
      </button>
    );
  }
  
  export default ButtonFilter;