function LinkSocial({
    url,
    target = "_blank",
    icon: Icon,
    title,
  }) {
    return (
      <a
        href={url}
        target={target}
        className="flex md:flex-col lg:flex-row gap-2 md:gap-1 lg:gap-4 group"
      >
        <Icon className="text-seafoam-500 text-3xl shrink-0" />
        <div className="flex-auto flex flex-col gap-1">
          <p className="text-xl font-medium group-hover:text-seafoam-500 transition-colors duration-300">
            {title}
          </p>
        </div>
      </a>
    );
  }
  
  export default LinkSocial;