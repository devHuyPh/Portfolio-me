import { useState, useEffect } from "react";

import { navLinks } from "../constants";

const NavBar = () => {
  // theo dõi xem  đã cuộn xuống trang chưa
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // hàm xử lý cuộn
    const handleScroll = () => {
      // kiểm tra xem người dùng đã cuộn xuống ít nhất 10px chưa
      // nếu có, đặt trạng thái thành true
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };
    // thêm sự kiện cuộn vào cửa sổ
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <a href="#hero" className="logo">
          P.huy - HST
        </a>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className="contact-btn group">
          <div className="inner">
            <span>Contact me</span>
          </div>
        </a>
      </div>
    </header>
  );
};

export default NavBar;
