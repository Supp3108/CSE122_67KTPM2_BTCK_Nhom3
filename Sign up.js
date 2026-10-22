document.addEventListener("DOMContentLoaded", () => {
    const loginTab = document.getElementById("login-tab");
    const registerTab = document.getElementById("register-tab");
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");

    // Khi click vào Đăng Nhập
    loginTab.addEventListener("click", (e) => {
        e.preventDefault();
        // Đổi trạng thái tab
        loginTab.classList.add("active");
        registerTab.classList.remove("active");
        
        // Hiển thị form đăng nhập, ẩn form đăng ký
        loginForm.style.display = "flex";
        registerForm.style.display = "none";
    });

    // Khi click vào Đăng Ký
    registerTab.addEventListener("click", (e) => {
        e.preventDefault();
        // Đổi trạng thái tab
        registerTab.classList.add("active");
        loginTab.classList.remove("active");
        
        // Hiển thị form đăng ký, ẩn form đăng nhập
        registerForm.style.display = "flex";
        loginForm.style.display = "none";
    });
});