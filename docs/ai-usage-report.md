# Báo cáo minh bạch sử dụng AI (AI Usage Report)
**Dự án:** CareRoute - Nhóm 3

Dưới đây là báo cáo trung thực về quá trình sử dụng các công cụ AI hỗ trợ trong quá trình phát triển dự án, cũng như các phần việc nhóm tự thực hiện kiểm chứng và chỉnh sửa.

## 1. Các công cụ AI đã sử dụng
* **Công cụ:** Gemini / Qooder /Antigravity
* **Mục đích:** Hỗ trợ tạo khung cấu trúc HTML cơ bản, giải thích các lỗi CSS layout, và hướng dẫn các lệnh Git/GitHub cơ bản để triển khai dự án.

## 2. Các câu lệnh (Prompt) tiêu biểu
* *"Tạo khung HTML cơ bản cho form đăng nhập/đăng ký."*
* *"Hướng dẫn cách tạo bảng kiểm kê màn hình bằng Markdown."*
* *"Cách sửa lỗi chia nhánh và gộp Pull Request trên GitHub."*

## 3. Phần mã nguồn/tài liệu do AI sinh ra
* Cấu trúc thẻ HTML cơ bản (boilerplate) cho các trang.
* Một số đoạn CSS dùng để dàn trang (Flexbox/Grid) ở mức độ khung sườn.
* Cấu trúc văn bản cho các file tài liệu trong thư mục `docs/` (`screen-inventory.md`, `README.md`).

## 4. Phần sinh viên tự kiểm chứng, viết code và chỉnh sửa
Nhóm đã trực tiếp rà soát toàn bộ code do AI gợi ý và **tự thực hiện code thủ công** các phần quan trọng sau để hoàn thiện sản phẩm:

* **Chỉnh sửa toàn diện màu sắc (Color Theme):** Nhóm tự viết lại các thuộc tính CSS để áp dụng đúng tông màu nhận diện của dự án CareRoute (màu vàng và than chì) lên các nút bấm, header, footer và background.
* **Tích hợp tài nguyên hình ảnh (Assets):** Nhóm tự tìm kiếm, cắt cúp và code thêm các thẻ `<img>`, `background-image` vào giao diện để trang web trực quan và phù hợp với chủ đề y tế.
* **Xây dựng luồng điều hướng (Routing/Linking):** Toàn bộ các liên kết giữa các file (từ `index.html` chuyển hướng sang `Tracuu.html`, `Sign up.html`, `tintuc.html`...) đều do nhóm tự code bằng thẻ `<a>` và JavaScript để đảm bảo User Flow hoạt động chính xác theo đúng sơ đồ đã thiết kế.
* **Gỡ lỗi và tuỳ biến:** Tự điều chỉnh lại các tham số CSS (padding, margin, font-size) để giao diện hiển thị không bị lỗi trên trình duyệt.