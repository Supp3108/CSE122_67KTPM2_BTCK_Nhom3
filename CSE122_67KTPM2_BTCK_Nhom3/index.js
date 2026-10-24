document.addEventListener("DOMContentLoaded", function() {
    // 1. Lấy các phần tử cần thiết
    const loginBtn = document.getElementById('login-btn');
    const loginModal = document.getElementById('login-modal');
    const closeModal = document.getElementById('close-modal');

    // ==========================================
    // 2. KIỂM TRA XEM ĐÃ ĐĂNG NHẬP HAY CHƯA
    // ==========================================
    const currentUserStr = localStorage.getItem("currentUser");

    if (currentUserStr) {
        // --- TRƯỜNG HỢP ĐÃ ĐĂNG NHẬP ---
        const currentUser = JSON.parse(currentUserStr); // Dịch dữ liệu từ bộ nhớ
        
        if (loginBtn) {
            loginBtn.classList.remove("user-avatar");
            loginBtn.id = "logged-in-user";
            loginBtn.href = "#";
            loginBtn.style.textDecoration = "none";
            loginBtn.style.display = "flex";
            loginBtn.style.alignItems = "center";

            // Đổi cái icon Avatar thành tên người dùng (lấy từ trường fullname)
            loginBtn.innerHTML = `
                <span style="color: #e6a030; font-weight: bold; font-size: 15px; margin-right: 10px;">
                    Xin chào, ${currentUser.fullname}
                </span>
                <i id="logout-btn" class="fa-solid fa-right-from-bracket" title="Đăng xuất" style="color: red; cursor: pointer; font-size: 18px;"></i>
            `;

            // Bắt sự kiện khi bấm vào nút Đăng xuất (icon màu đỏ)
            const logoutBtn = document.getElementById('logout-btn');
            if (logoutBtn) {
                logoutBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    // Xóa dữ liệu tài khoản khỏi bộ nhớ
                    localStorage.removeItem("currentUser");
                    // Tải lại trang (giao diện sẽ tự động quay về hình Avatar gốc)
                    window.location.reload(); 
                });
            }
        }

    } else {
        // --- TRƯỜNG HỢP CHƯA ĐĂNG NHẬP (Làm như cũ) ---
        if (loginBtn && loginModal) {
            loginBtn.addEventListener('click', function(event) {
                event.preventDefault(); 
                loginModal.style.display = 'flex'; // Hiện popup
            });
        }
    }

    // ==========================================
    // 3. XỬ LÝ ĐÓNG POPUP
    // ==========================================
    if (closeModal && loginModal) {
        closeModal.addEventListener('click', function() {
            loginModal.style.display = 'none';
        });
    }

    // Click ra vùng đen mờ bên ngoài tự đóng
    if (loginModal) {
        window.addEventListener('click', function(event) {
            if (event.target === loginModal) {
                loginModal.style.display = 'none';
            }
        });
    }

    // ==========================================
    // 4. XỬ LÝ TÌM KIẾM TRÊN BANNER TRANG CHỦ
    // ==========================================
    const heroSearchBtn = document.getElementById('heroSearchBtn');
    const heroSearchInput = document.getElementById('heroSearchInput');

    function executeHeroSearch() {
        if (!heroSearchInput) return;
        const query = heroSearchInput.value.trim();
        if (!query) {
            window.location.href = 'Tracuu.html';
            return;
        }
        window.location.href = `Tracuu.html?q=${encodeURIComponent(query)}`;
    }

    if (heroSearchBtn) {
        heroSearchBtn.addEventListener('click', function(e) {
            e.preventDefault();
            executeHeroSearch();
        });
    }

    if (heroSearchInput) {
        heroSearchInput.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                executeHeroSearch();
            }
        });
    }
});
