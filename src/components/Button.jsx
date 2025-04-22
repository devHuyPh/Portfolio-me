/**
 * A reusable CTA button component.
 * When clicked, it scrolls smoothly to the section with ID "counter",
 * with a small offset from the top for better visual placement.
 */

const Button = ({ text, className, id }) => {
  return (
    <a
      onClick={(e) => {
        e.preventDefault(); //Dừng liên kết nhảy ngay lập tức

        const target = document.getElementById("counter"); // Tìm phần có ID "counter"
        
        // Chỉ cuộn nếu tìm thấy phần đó và một ID được truyền vào
//  ngăn không cho nút liên lạc cuộn lên trên cùng
        if (target && id) {
          const offset = window.innerHeight * 0.15; // 

          // Tính toán vị trí cuộn
          const top =
            target.getBoundingClientRect().top + window.pageYOffset - offset;

          // Cuộn đến vị trí đã tính toán
          window.scrollTo({ top, behavior: "smooth" });
        }
      }}
      className={`${className ?? ""} cta-wrapper`} // Thêm className nếu có
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  );
};

export default Button;
