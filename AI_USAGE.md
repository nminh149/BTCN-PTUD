# AI Usage Log

## 1. Công cụ AI

- **Tên công cụ:** ChatGPT (OpenAI).
- **Cách sử dụng:** Trao đổi trực tiếp để phân tích website, xây dựng giao diện demo, giải thích và kiểm tra mã HTML/CSS.

## 2. Mục đích sử dụng

Em sử dụng AI để:

- Hỗ trợ phân tích các khu vực giao diện và chức năng của website Hella Beauty.
- Đề xuất hướng cải tiến khu vực tìm kiếm sản phẩm: ô tìm kiếm, từ khóa gợi ý, lịch sử tìm kiếm và sản phẩm phổ biến.
- Hỗ trợ tạo giao diện bằng HTML5, CSS3 và JavaScript thuần, không sử dụng backend/cơ sở dữ liệu.
- Giải thích vai trò của các thẻ, thuộc tính HTML và các quy tắc CSS.
- Hỗ trợ tìm lỗi khi định dạng nút “Xem chi tiết” không được áp dụng.

## 3. Prompt đã sử dụng

Dưới đây là các prompt chính, được trích hoặc tóm tắt từ quá trình trao đổi với ChatGPT:

**Prompt 1 – Phân tích và đề xuất cải tiến:**

> Tôi đang thực hiện bài tập phát triển giao diện website thương mại điện tử bằng HTML5 và CSS3. Tôi muốn cải tiến khu vực tìm kiếm sản phẩm của Hella Beauty. Hãy đề xuất cấu trúc giao diện gồm ô tìm kiếm, từ khóa gợi ý, lịch sử tìm kiếm và sản phẩm phổ biến.

**Prompt 2 – Tạo mã giao diện:**

> Dựa trên phương án đã thống nhất, hãy tạo một trang giao diện thương mại điện tử bằng HTML5 và CSS3; có tiêu đề, tối thiểu 4 sản phẩm mẫu (ảnh, tên, giá, nút thao tác), hỗ trợ máy tính và điện thoại; CSS tách riêng, không dùng backend hoặc cơ sở dữ liệu. Giải thích cách chạy và kiểm tra.

**Prompt 3 – Nhận xét giao diện và đề xuất tự chỉnh sửa:**

> Đây là giao diện HTML AI đã tạo. Thầy yêu cầu tự chỉnh sửa ít nhất một điểm và giải thích HTML/CSS. Tôi sẽ thay hình ảnh, tên sản phẩm cho tương ứng; còn đề xuất cải tiến nào khác không?

**Prompt 4 – Thêm nút:**

> Tôi muốn thêm button “Xem chi tiết” cho mỗi sản phẩm.

**Prompt 5 – Kiểm tra lỗi CSS:**

> Tôi đã thêm CSS nhưng nút không thay đổi. Hãy kiểm tra đoạn HTML và CSS của tôi để tìm nguyên nhân.

**Prompt 6 – Viết phần giải thích:**

> Hãy giúp tôi trình bày những phần đã tự chỉnh sửa: thay ảnh thực tế, đồng bộ `data-name`, `data-keywords`, danh mục, mô tả và thêm nút “Xem chi tiết”; giải thích vai trò HTML/CSS.

## 4. Kết quả AI đề xuất

- Đề xuất giao diện tìm kiếm với ô nhập nổi bật, gợi ý từ khóa và khu vực sản phẩm phổ biến.
- Hỗ trợ tạo bố cục danh sách sản phẩm theo dạng lưới responsive và định dạng giao diện bằng CSS.
- Đề xuất bổ sung nút “Xem chi tiết” cho mỗi thẻ sản phẩm.
- Gợi ý CSS cho nút có nền hồng, chữ trắng, hiệu ứng `:hover` và Media Query dành cho điện thoại.
- Phát hiện sự không thống nhất giữa class HTML `btn-detail` và bộ chọn CSS `.product-details`, khiến kiểu nút chưa được áp dụng.

Các nhận xét AI đưa ra được xem là đề xuất, cần đối chiếu với website và mã nguồn thực tế trước khi sử dụng.

## 5. Kiểm tra và điều chỉnh

Sau khi nhận kết quả từ AI, em đã thực hiện:

- Quan sát và kiểm tra giao diện demo trên trình duyệt.
- Thay hình ảnh minh họa bằng ảnh sản phẩm thực tế của Hella Beauty trong thư mục `image/`.
- Cập nhật đường dẫn `src`, mô tả ảnh `alt`, tên sản phẩm (`data-name`), từ khóa (`data-keywords`), danh mục (`product-category`) và mô tả (`product-description`) để đồng bộ với ảnh sản phẩm.
- Bổ sung nút “Xem chi tiết” vào HTML ở từng thẻ sản phẩm.
- Đối chiếu HTML và CSS, sửa bộ chọn CSS từ `.product-details` thành `.btn-detail` để phù hợp với class đã dùng trong HTML.
- Kiểm tra cách hiển thị của bố cục trên máy tính và mô phỏng điện thoại bằng Chrome DevTools.

**Giới hạn:** Việc bổ sung nút bằng HTML/CSS không có nghĩa là tính năng mở chi tiết đã hoàn thiện. Chức năng này cần được kiểm tra trong `script.js` nếu muốn khẳng định có tương tác thực tế.

## 6. Phần tôi hiểu và có thể giải thích

**Về HTML5:**

- `<article>` tạo một khối nội dung sản phẩm độc lập.
- `<img>` dùng để hiển thị ảnh; `src` xác định đường dẫn; `alt` mô tả hình ảnh.
- `data-name` và `data-keywords` lưu dữ liệu để JavaScript có thể sử dụng cho tìm kiếm.
- `class="product-category"` và `class="product-description"` kết nối các đoạn nội dung với quy tắc định dạng CSS.
- `<button>` tạo nút thao tác; `type="button"` không tự gửi biểu mẫu; `data-product` lưu tên sản phẩm cho xử lý tương tác.

**Về CSS3:**

- `.btn-detail` lựa chọn và định dạng những phần tử có class `btn-detail`.
- `width`, `margin-bottom`, `background-color`, `color` và `border` điều chỉnh kích thước, khoảng cách, màu nền, màu chữ và đường viền nút.
- `.btn-detail:hover` thay đổi giao diện nút khi đưa chuột vào.
- `@media (max-width: 520px)` điều chỉnh kích thước và khoảng cách nút trên màn hình nhỏ.
- `.product-grid` sử dụng CSS Grid; Media Queries giúp bố cục sản phẩm thích ứng giữa desktop và điện thoại.

Qua quá trình thực hiện, em hiểu rằng các thuộc tính/class trong HTML phải khớp với bộ chọn trong CSS, và cần kiểm tra lại kết quả AI trước khi đưa vào dự án.
