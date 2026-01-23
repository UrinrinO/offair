const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-[var(--bg-primary)] py-8 text-center border-t border-[var(--border-color)]">
      <p className="text-[var(--text-muted)] text-sm">
        © {year} OffAir with Ponciano. All Rights Reserved | Developed by Cymrai
        Software Solutions
      </p>
    </footer>
  );
};

export default Footer;
