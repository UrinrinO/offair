import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 py-2 ${
        isScrolled
          ? "bg-[var(--bg-primary)] border-b border-[var(--border-color)] shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent border-b border-transparent"
      }`}
      style={{
        paddingLeft: "var(--section-px)",
        paddingRight: "var(--section-px)",
      }}
    >
      <div className="flex items-center justify-between w-full">
        <Link
          to="/"
          className="text-sm uppercase tracking-widest hover:text-[var(--variant-main)] transition-colors"
        >
          Home
        </Link>

        <Link
          to="/about"
          className="text-sm uppercase tracking-widest hover:text-[var(--variant-main)] transition-colors"
        >
          About
        </Link>

        <Link to="/" className="flex-shrink-0">
          <img
            src={logo}
            alt="Logo"
            className={`transition-all duration-500 object-contain ${
              isScrolled ? "h-16" : "h-24"
            }`}
          />
        </Link>

        <Link
          to="/team"
          className="text-sm uppercase tracking-widest hover:text-[var(--variant-main)] transition-colors"
        >
          Meet The Team
        </Link>

        <Link
          to="/contact"
          className="text-sm uppercase tracking-widest hover:text-[var(--variant-main)] transition-colors"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
