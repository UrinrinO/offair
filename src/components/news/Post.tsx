type PostProps = {
  title: string;
  category: string;
  date: string;
  image: string;
};

const Post = ({ title, category, date, image }: PostProps) => {
  return (
    <article className="w-full">
      <div className="flex items-center justify-between mb-3 text-xs uppercase tracking-[0.25em]">
        <span className="text-white/70">{category}</span>
        <span className="text-white/50">{date}</span>
      </div>

      <div className="relative w-full overflow-hidden rounded-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-[320px] md:h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />

        <h1 className="absolute bottom-10 left-5 right-5 text-gray-300 font-[600] tracking-tight leading-tight text-[1.6rem] md:text-[2rem] 2xl:text-[3.2rem]">
          {title}
        </h1>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-[var(--main)]" />
      </div>
    </article>
  );
};

export default Post;
