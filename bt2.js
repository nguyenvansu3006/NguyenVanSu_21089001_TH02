function confirmFormSubmit() {
    var name = document.getElementById("fullname").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var customer_type = document.getElementById("customer_type").value;
    var product_code = document.getElementById("product_code").value;
    var content = document.getElementById("content").value;
  
    // Kiểm tra xem các trường bắt buộc đã được điền hay chưa (tùy chọn)
    if (!name || !phone || !email) {
      alert("Vui lòng điền đầy đủ các trường bắt buộc.");
      return false;
    }
  
    var message = "Thông tin của bạn:\n\n" +
                  "Họ và tên: " + name + "\n" +
                  "Số điện thoại: " + phone + "\n" +
                  "Email: " + email + "\n" +
                  "Loại khách hàng: " + customer_type + "\n" +
                  "Mã sản phẩm: " + product_code + "\n" +  // Thêm dấu cách ở đây
                  "Nội dung góp ý: " + content;
  
    if (confirm(message)) {
      // Người dùng xác nhận, gửi form
      return true;
    } else {
      // Người dùng hủy, ngăn chặn việc gửi form
      return false;
    }
  }
  