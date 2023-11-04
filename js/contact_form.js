// Lấy tham chiếu đến các modal và nút "Sign In" và "Sign Up"
var signInModal = document.getElementById("signInModal");
var signUpModal = document.getElementById("signUpModal");
var signInButton = document.querySelector('[data-target="signInModal"]');
var signUpButton = document.querySelector('[data-target="signUpModal"]');
var switchToSignInLink = document.getElementById("switchToSignIn");
var switchToSignUpLink = document.getElementById("switchToSignUp");

// Khi người dùng click vào "Sign In," hiển thị modal Sign In và ẩn modal Sign Up
signInButton.addEventListener("click", function (e) {
  e.preventDefault();
  signInModal.style.display = "block";
  signUpModal.style.display = "none";
});

// Khi người dùng click vào "Sign Up," hiển thị modal Sign Up và ẩn modal Sign In
signUpButton.addEventListener("click", function (e) {
  e.preventDefault();
  signUpModal.style.display = "block";
  signInModal.style.display = "none";
});

// Khi người dùng click vào liên kết "Sign In," chuyển đổi qua modal Sign In và ẩn modal Sign Up
switchToSignInLink.addEventListener("click", function (e) {
  e.preventDefault();
  signInModal.style.display = "block";
  signUpModal.style.display = "none";
});

// Khi người dùng click vào liên kết "Sign Up," chuyển đổi qua modal Sign Up và ẩn modal Sign In
switchToSignUpLink.addEventListener("click", function (e) {
  e.preventDefault();
  signUpModal.style.display = "block";
  signInModal.style.display = "none";
});

// Khi người dùng click vào overlay (vùng xung quanh), tắt cả hai modal
document.addEventListener("click", function (e) {
  if (e.target === signInModal || e.target === signUpModal) {
    e.target.style.display = "none";
  }
});


    // valid form

    function validateForm() {
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var number = document.getElementById('number').value;
        var comments = document.getElementById('comments').value;
        var errorMsg = document.getElementById('error-msg');

        // Kiểm tra xem có trường nào bị bỏ trống
        if (name === '' || email === '' || number === '' || comments === '') {
            errorMsg.innerHTML = 'Please fill in all required fields.';
            errorMsg.style.color = 'red';
            return false;
        }

        // Kiểm tra số điện thoại
        var phoneNumberPattern = /^\d{10}$/;
        if (!phoneNumberPattern.test(number)) {
            errorMsg.innerHTML = 'Please enter a valid 10-digit phone number.';
            errorMsg.style.color = 'red';
            return false;
        }

        errorMsg.innerHTML = ''; // Xóa thông báo lỗi nếu tất cả đều hợp lệ
        return true;
    }