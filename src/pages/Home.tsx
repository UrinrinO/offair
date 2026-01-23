import { useState, useEffect, useMemo } from "react";

import Post from "../components/news/Post";
import Trending from "../components/news/Trending";

import postImg from "../assets/images/main-bg.jpg";
import bgImage from "../assets/images/main-bg.jpg";

import { Search } from "lucide-react";

type PostData = {
  title: string;
  category: string;
  date: string;
  image: string;
};

type TrendingData = {
  title: string;
  rank: number;
  image: string;
};

const posts: PostData[] = [
  {
    title: "Chris Brown is going on tour with Bryson Tiller and Summer Walker",
    category: "Music",
    date: "Jan 21, 2026",
    image: postImg,
  },
  {
    title: "London Noise Scene: The Real Story",
    category: "Underground",
    date: "Jan 19, 2026",
    image: postImg,
  },
  {
    title: "Blood & Vinyl: Late Night Sessions",
    category: "Sessions",
    date: "Jan 18, 2026",
    image: postImg,
  },
  {
    title: "Off Air: Studio Secrets",
    category: "Behind The Scenes",
    date: "Jan 15, 2026",
    image: postImg,
  },
];

const trends: TrendingData[] = [
  { title: "Blood & Vinyl: Late Night Sessions", rank: 1, image: postImg },
  { title: "Unfiltered Noise: London Underground", rank: 2, image: postImg },
  { title: "Welcome To Off Air: The Pelicans", rank: 3, image: postImg },
  { title: "No Cameras: Pure Sound", rank: 4, image: postImg },
  { title: "Rooftop Recordings: London", rank: 5, image: postImg },
  { title: "Underground Sessions Vol. 2", rank: 6, image: postImg },
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const POSTS_PER_PAGE = 2;
  const [visiblePosts, setVisiblePosts] = useState(POSTS_PER_PAGE);
  const TRENDS_PER_PAGE = 3;
  const [trendPage, setTrendPage] = useState(1);
  const [trendSearch, setTrendSearch] = useState("");

  const slides = [
    { title: "WELCOME TO OFF AIR", subtitle: "THE PELICANS" },
    { title: "UNFILTERED NOISE", subtitle: "LONDON UNDERGROUND" },
    { title: "BLOOD & VINYL", subtitle: "LATE NIGHT SESSIONS" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);

    return () => clearInterval(timer);
  }, [slides.length]);

  // Filter trends by search
  const filteredTrends = useMemo(() => {
    const q = trendSearch.trim().toLowerCase();
    if (!q) return trends;
    return trends.filter((t) => t.title.toLowerCase().includes(q));
  }, [trendSearch]);

  const totalTrendPages = Math.max(
    1,
    Math.ceil(filteredTrends.length / TRENDS_PER_PAGE),
  );

  const pagedTrends = useMemo(() => {
    const start = (trendPage - 1) * TRENDS_PER_PAGE;
    return filteredTrends.slice(start, start + TRENDS_PER_PAGE);
  }, [filteredTrends, trendPage]);

  // Reset trending page when search changes
  useEffect(() => {
    setTrendPage(1);
  }, [trendSearch]);

  return (
    <div className="w-full">
      {/* Slider */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center p-0">
        <div className="absolute inset-0 z-0">
          <img
            src={bgImage}
            alt="Background"
            className="w-full h-full object-cover grayscale opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-primary)] via-transparent to-[var(--bg-primary)]" />
        </div>

        <div className="relative z-10 w-full px-[var(--section-px)] text-center">
          <h1 className="uppercase font-[var(--style-font)] text-white tracking-tighter leading-[0.75] text-[3rem] md:text-[4rem] lg:text-[6rem]">
            {slides[currentSlide].title}
          </h1>

          <p className="font-black uppercase mt-3 tracking-[0.6em] md:tracking-[0.8em] text-xs md:text-md">
            {slides[currentSlide].subtitle}
          </p>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-4 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full shrink-0 p-0 border-0 transition-all duration-300
                ${
                  currentSlide === index
                    ? "bg-white scale-125"
                    : "bg-white/30 hover:bg-white/60"
                }`}
            />
          ))}
        </div>
      </section>

      {/* Posts & Trending */}
      <section className="w-full bg-[var(--bg-primary)] py-[100px]">
        <div className="w-full px-[var(--section-px)]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2 flex flex-col gap-14 bg-[var(--bg-secondary)] p-10">
              <div>
                <h3 className="text-sm md:text-md font-[var(--style-font)] uppercase tracking-tight bg-[var(--main)] inline-block px-4 py-2">
                  Latest Articles
                </h3>
              </div>

              {posts.slice(0, visiblePosts).map((post, index) => (
                <Post key={index} {...post} />
              ))}

              <div className="flex flex-col items-center gap-4 pt-4">
                <p className="text-white/50 text-sm uppercase tracking-[0.25em]">
                  Showing {Math.min(visiblePosts, posts.length)} /{" "}
                  {posts.length}
                </p>

                {visiblePosts < posts.length && (
                  <button
                    onClick={() =>
                      setVisiblePosts((prev) =>
                        Math.min(prev + POSTS_PER_PAGE, posts.length),
                      )
                    }
                    className="bg-[var(--main)] text-white font-black uppercase tracking-widest px-10 py-4 hover:bg-[var(--main-dark)] transition-all duration-300"
                  >
                    Load More
                  </button>
                )}
              </div>
            </div>

            <div className="hidden lg:flex lg:col-span-1 flex-col gap-10 bg-[var(--bg-secondary)] p-10 h-fit">
              <div className="flex flex-col gap-5">
                <h3 className="text-sm md:text-md font-[var(--style-font)] uppercase tracking-tight bg-[var(--main)] inline-block px-4 py-2 w-fit">
                  Trending
                </h3>

                <div className="relative w-full">
                  <Search
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40"
                  />
                  <input
                    value={trendSearch}
                    onChange={(e) => setTrendSearch(e.target.value)}
                    placeholder="Search trends..."
                    className="w-full bg-black/30 border border-white/10 text-white placeholder:text-white/30
                         pl-12 pr-4 py-3 outline-none focus:border-[var(--main)] transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-8">
                {pagedTrends.map((trend) => (
                  <Trending key={trend.rank} {...trend} />
                ))}
              </div>

              <div className="flex items-center justify-between pt-2">
                <p className="text-white/50 text-xs uppercase tracking-[0.25em]">
                  Page {trendPage} / {totalTrendPages}
                </p>

                <button
                  onClick={() =>
                    setTrendPage((prev) =>
                      prev >= totalTrendPages ? 1 : prev + 1,
                    )
                  }
                  className="text-white font-black uppercase tracking-widest text-sm hover:text-[var(--main)] transition-all"
                >
                  Next →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
