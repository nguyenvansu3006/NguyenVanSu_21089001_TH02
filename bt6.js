// Biến để lưu trữ thông tin đăng nhập
const loginInfo = {
    username: "",
    password: "",
  };
  
  // Hàm để xử lý sự kiện đăng nhập
  function handleLogin() {
    // Lấy giá trị từ các trường đầu vào
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // Lưu thông tin đăng nhập vào biến
    loginInfo.username = username;
    loginInfo.password = password;
  
    // Xử lý đăng nhập (ví dụ: kiểm tra với API)
    // ...
  
    // Hiển thị thông báo đăng nhập thành công hoặc thất bại
    if (loginSuccess) {
      // Chuyển hướng đến trang chủ hoặc trang đích
      window.location.href = "Bai6.html";
    } else {
      // Hiển thị thông báo lỗi
      alert("Đăng nhập thất bại!");
    }
  }
  
  // Thêm sự kiện lắng nghe cho nút đăng nhập
  document.getElementById("login-button").addEventListener("click", handleLogin);
  
  // Hàm để xử lý sự kiện quên mật khẩu
  function handleForgotPassword() {
    // Hiển thị hộp thoại quên mật khẩu
    // ...
  
    // Gửi yêu cầu đặt lại mật khẩu
    // ...
  }
  
  // Thêm sự kiện lắng nghe cho liên kết quên mật khẩu
  document.getElementById("forgot-password-link").addEventListener("click", handleForgotPassword);
  
  // Hàm để xử lý sự kiện ghi nhớ tôi
  function handleRememberMe() {
    // Lưu thông tin đăng nhập vào bộ nhớ cục bộ
    // ...
  }
  
  // Thêm sự kiện lắng nghe cho hộp kiểm ghi nhớ tôi
  document.getElementById("remember-me").addEventListener("change", handleRememberMe);
  