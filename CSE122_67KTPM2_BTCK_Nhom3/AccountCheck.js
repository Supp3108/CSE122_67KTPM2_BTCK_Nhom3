document.addEventListener("DOMContentLoaded", function () {
    const loginBtn = document.getElementById("login-btn");
    const currentUserStr = localStorage.getItem("currentUser");

    if (loginBtn) {
        if (currentUserStr) {
            // ĐÃ ĐĂNG NHẬP: Hiển thị "Xin chào, [fullname]" và icon Đăng xuất giống hệt trang chủ
            const currentUser = JSON.parse(currentUserStr);

            loginBtn.classList.remove("user-avatar");
            loginBtn.id = "logged-in-user";
            loginBtn.href = "#";
            loginBtn.style.textDecoration = "none";
            loginBtn.style.display = "flex";
            loginBtn.style.alignItems = "center";
            loginBtn.innerHTML = `
                <span style="color: #e6a030; font-weight: bold; font-size: 15px; margin-right: 10px;">
                    Xin chào, ${currentUser.fullname}
                </span>
                <i id="logout-btn" class="fa-solid fa-right-from-bracket" title="Đăng xuất" style="color: red; cursor: pointer; font-size: 18px;"></i>
            `;

            // Bắt sự kiện khi bấm vào nút Đăng xuất (icon màu đỏ)
            const logoutBtn = document.getElementById("logout-btn");
            if (logoutBtn) {
                logoutBtn.addEventListener("click", function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    // Xóa dữ liệu tài khoản khỏi bộ nhớ
                    localStorage.removeItem("currentUser");
                    // Tải lại trang (giao diện sẽ tự động quay về hình Avatar gốc)
                    window.location.reload();
                });
            }
        } else {
            // CHƯA ĐĂNG NHẬP:
            const loginModal = document.getElementById("login-modal");
            loginBtn.addEventListener("click", function (e) {
                if (loginModal) {
                    e.preventDefault();
                    loginModal.style.display = "flex";
                } else {
                    // Nếu ở trang phụ chưa có modal, chuyển về trang chủ để đăng nhập
                    e.preventDefault();
                    window.location.href = "index.html";
                }
            });
        }
    }

    // Xử lý đóng modal nếu trang có popup đăng nhập
    const loginModal = document.getElementById("login-modal");
    const closeModal = document.getElementById("close-modal");
    if (closeModal && loginModal) {
        closeModal.addEventListener("click", function () {
            loginModal.style.display = "none";
        });
    }
    if (loginModal) {
        window.addEventListener("click", function (event) {
            if (event.target === loginModal) {
                loginModal.style.display = "none";
            }
        });
    }
});
