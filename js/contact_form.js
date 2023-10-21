
    var openModalButton = document.getElementById('openModalButton'); 
    var modal = document.getElementById('exampleModal'); 
    var closeButton = modal.querySelector('.btn-close'); 
    var overlay = document.querySelector('.modal-backdrop'); 

    // Sự kiện click nút "Contact Us"
    openModalButton.addEventListener('click', function() {
        modal.style.display = 'block'; 
        overlay.style.display = 'block';
    });

    // Sự kiện click nút đóng
    closeButton.addEventListener('click', function() {
        modal.style.display = 'none'; 
        overlay.style.display = 'none'; 
    });

    // Sự kiện click ra ngoài modal
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none'; 
            overlay.style.display = 'none'; 
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