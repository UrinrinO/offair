type PickProps = {
  title: string;
  image: string;
};

const Picks = ({ title, image }: PickProps) => {
  return (
    <div className="flex items-center gap-4 group cursor-pointer">
      <div className="relative w-20 h-20 shrink-0 overflow-hidden rounded-md">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>
      <h4 className="text-sm font-bold text-white/90 leading-tight group-hover:text-[var(--main)] transition-colors">
        {title}
      </h4>
    </div>
  );
};

export default Picks;
