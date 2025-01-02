function ChipList({ labels, variant = "primary" }) {
    const variantClasses = {
      primary: "text-black bg-seafoam-500 border border-seafoam-700",
      primaryLighten: "text-white bg-fuschia-50/40 border border-fuschia-muted",
      secondary: "text-seafoam-500 bg-grey border border-blue-50",
    };
  
    return (
      <ul className="flex flex-wrap gap-2">
        {labels.map((label) => (
          <li
            key={label}
            className={`${variantClasses[variant]} text-base leading-none lowercase py-1.5 px-2 md:py-2 md:px-3 rounded-lg`}
          >
            {label}
          </li>
        ))}
      </ul>
    );
  }
  
  export default ChipList;