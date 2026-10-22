document.addEventListener("DOMContentLoaded", () => {
    // 1. Cấu hình URL MockAPI
    const API_URL = "https://6ad6f0c0f71f154ac48776d1.mockapi.io/api/v1/users";

    // 2. Lấy các phần tử DOM
    const loginTab = document.getElementById("login-tab");
    const registerTab = document.getElementById("register-tab");
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");

    // ==========================================
    // LOGIC CHUYỂN TAB
    // ==========================================

    loginTab.addEventListener("click", (e) => {
        e.preventDefault();
        loginTab.classList.add("active");
        registerTab.classList.remove("active");
        
        loginForm.style.display = "flex";
        registerForm.style.display = "none";
    });

    registerTab.addEventListener("click", (e) => {
        e.preventDefault();
        registerTab.classList.add("active");
        loginTab.classList.remove("active");
        
        registerForm.style.display = "flex";
        loginForm.style.display = "none";
    });

    // ==========================================
    // LOGIC XỬ LÝ ĐĂNG KÝ VỚI MOCKAPI
    // ==========================================

    registerForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const fullname = document.getElementById("reg-fullname").value;
        const email = document.getElementById("reg-email").value;
        const password = document.getElementById("reg-password").value;

        // Tạo object đẩy lên MockAPI
        const newUser = { fullname, email, password };

        try {
            const res = await fetch(API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newUser)
            });

            if (res.ok) {
                alert("Đăng ký tài khoản thành công! Mời bạn đăng nhập.");
                registerForm.reset(); // Làm sạch ô nhập
                loginTab.click();     // Chuyển sang Tab Đăng Nhập
            } else {
                alert("Đăng ký thất bại, vui lòng kiểm tra lại cấu hình MockAPI!");
            }
        } catch (err) {
            console.error(err);
            alert("Không thể kết nối đến máy chủ API!");
        }
    });

    // ==========================================
    // LOGIC XỬ LÝ ĐĂNG NHẬP VỚI MOCKAPI
    // ==========================================

    loginForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        // Đã sửa lại lấy đúng ID: login-username
        const userInput = document.getElementById("login-username").value;
        const passwordInput = document.getElementById("login-password").value;

        try {
            const res = await fetch(API_URL);
            const users = await res.json();

            // Cho phép nhập Tên tài khoản (fullname) HOẶC Email để đăng nhập
            const foundUser = users.find(
                (u) => (u.fullname === userInput || u.email === userInput) && u.password === passwordInput
            );

            if (foundUser) {
                alert(`Đăng nhập thành công! Chào mừng ${foundUser.fullname}`);
                
                // Lưu thông tin user vào bộ nhớ trình duyệt
                localStorage.setItem("currentUser", JSON.stringify(foundUser));
                
                // Chuyển hướng về trang chủ
                window.location.href = "index.html"; 
            } else {
                alert("Tài khoản/Email hoặc Mật khẩu không chính xác!");
            }
        } catch (err) {
            console.error(err);
            alert("Lỗi kết nối máy chủ!");
        }
    });
});