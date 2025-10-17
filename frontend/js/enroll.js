document.addEventListener('DOMContentLoaded', function() {
    // Form validation
    const form = document.getElementById('enrollmentForm');
    const loader = document.getElementById('loader');
    const paymentDetails = document.getElementById('paymentDetails');
    const successMessage = document.getElementById('successMessage');
    const fileInput = document.getElementById('paymentReceipt');
    const filePreview = document.getElementById('filePreview');
    const previewImage = document.getElementById('previewImage');
    const fileName = document.getElementById('fileName');
    const removeFile = document.getElementById('removeFile');
    const submitReceiptBtn = document.getElementById('submitReceiptBtn');
    const fileUploadContainer = document.getElementById('fileUploadContainer');
    
    let uploadedFile = null;
    
    // Initialize clipboard.js
    new ClipboardJS('.copy-btn');
    
    // Handle form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        event.stopPropagation();
        
        if (form.checkValidity()) {
            // Show loader
            form.style.display = 'none';
            loader.style.display = 'block';
            
            // Update step indicator
            document.getElementById('step1').classList.add('completed');
            document.getElementById('step2').classList.add('active');
            
            // Simulate API call to backend
            setTimeout(function() {
                // Hide loader
                loader.style.display = 'none';
                
                // Show payment details
                paymentDetails.classList.add('show');
                
                // Update step indicator
                document.getElementById('step2').classList.add('completed');
                document.getElementById('step3').classList.add('active');
            }, 2000); // Simulate 2 second API call
        }
        
        form.classList.add('was-validated');
    });
    
    // File input change handler
    fileInput.addEventListener('change', function(e) {
        if (this.files && this.files[0]) {
            uploadedFile = this.files[0];
            
            // Validate file type and size
            const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf'];
            const maxSize = 5 * 1024 * 1024; // 5MB
            
            if (!validTypes.includes(uploadedFile.type)) {
                alert('Please select a valid file type (JPG, PNG, or PDF)');
                this.value = '';
                return;
            }
            
            if (uploadedFile.size > maxSize) {
                alert('File size must be less than 5MB');
                this.value = '';
                return;
            }
            
            // Show file preview
            fileName.textContent = uploadedFile.name;
            
            if (uploadedFile.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    previewImage.src = e.target.result;
                    previewImage.style.display = 'block';
                }
                reader.readAsDataURL(uploadedFile);
            } else {
                // For PDF files, show a placeholder
                previewImage.src = '';
                previewImage.style.display = 'none';
            }
            
            filePreview.classList.add('show');
            submitReceiptBtn.classList.add('show');
            
            // Update step indicator
            document.getElementById('step3').classList.add('completed');
            document.getElementById('step4').classList.add('active');
        }
    });
    
    // Remove file handler
    removeFile.addEventListener('click', function() {
        fileInput.value = '';
        uploadedFile = null;
        filePreview.classList.remove('show');
        submitReceiptBtn.classList.remove('show');
        
        // Update step indicator
        document.getElementById('step3').classList.remove('completed');
        document.getElementById('step4').classList.remove('active');
    });
    
    // Submit receipt handler
    submitReceiptBtn.addEventListener('click', function() {
        if (!uploadedFile) {
            alert('Please select a payment receipt file');
            return;
        }
        
        // Show loader
        submitReceiptBtn.disabled = true;
        submitReceiptBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Submitting...';
        
        // Create FormData to send to backend
        const formData = new FormData();
        formData.append('name', document.getElementById('name').value);
        formData.append('email', document.getElementById('email').value);
        formData.append('phone', document.getElementById('phone').value);
        formData.append('paymentReceipt', uploadedFile);
        
        // Simulate API call to backend
        setTimeout(function() {
            // Hide payment details and show success
            paymentDetails.style.display = 'none';
            successMessage.style.display = 'block';
            
            // Update step indicator
            document.getElementById('step4').classList.add('completed');
        }, 2000); // Simulate 2 second API call
        
        // In a real implementation, you would use fetch or XMLHttpRequest:
        /*
        fetch('your-backend-endpoint', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            // Handle success
            paymentDetails.style.display = 'none';
            successMessage.style.display = 'block';
            document.getElementById('step4').classList.add('completed');
        })
        .catch(error => {
            // Handle error
            console.error('Error:', error);
            alert('There was an error submitting your receipt. Please try again.');
            submitReceiptBtn.disabled = false;
            submitReceiptBtn.innerHTML = '<i class="fas fa-check-circle me-2"></i>Submit Payment Receipt';
        });
        */
    });
    
    // Drag and drop functionality
    fileUploadContainer.addEventListener('dragover', function(e) {
        e.preventDefault();
        fileUploadContainer.classList.add('dragover');
    });
    
    fileUploadContainer.addEventListener('dragleave', function() {
        fileUploadContainer.classList.remove('dragover');
    });
    
    fileUploadContainer.addEventListener('drop', function(e) {
        e.preventDefault();
        fileUploadContainer.classList.remove('dragover');
        
        if (e.dataTransfer.files.length) {
            fileInput.files = e.dataTransfer.files;
            const event = new Event('change', { bubbles: true });
            fileInput.dispatchEvent(event);
        }
    });
    
    // Add event listeners to all enroll buttons on the page
    document.querySelectorAll('.btn-enroll, .btn-gradient, .cta-button, .pricing-btn, [href="#enroll"]').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const enrollmentModal = new bootstrap.Modal(document.getElementById('enrollmentModal'));
            enrollmentModal.show();
        });
    });
    
    // Phone number validation
    const phoneInput = document.getElementById('phone');
    phoneInput.addEventListener('input', function() {
        const phoneRegex = /^[\+]?[0-9]{10,15}$/;
        if (!phoneRegex.test(this.value)) {
            this.setCustomValidity('Please enter a valid phone number');
        } else {
            this.setCustomValidity('');
        }
    });
    
    // Reset form when modal is closed
    document.getElementById('enrollmentModal').addEventListener('hidden.bs.modal', function() {
        form.reset();
        form.classList.remove('was-validated');
        form.style.display = 'block';
        loader.style.display = 'none';
        paymentDetails.classList.remove('show');
        paymentDetails.style.display = 'block';
        successMessage.style.display = 'none';
        fileInput.value = '';
        uploadedFile = null;
        filePreview.classList.remove('show');
        submitReceiptBtn.classList.remove('show');
        submitReceiptBtn.disabled = false;
        submitReceiptBtn.innerHTML = '<i class="fas fa-check-circle me-2"></i>Submit Payment Receipt';
        
        // Reset step indicator
        document.getElementById('step1').classList.remove('completed');
        document.getElementById('step2').classList.remove('active', 'completed');
        document.getElementById('step3').classList.remove('active', 'completed');
        document.getElementById('step4').classList.remove('active', 'completed');
        document.getElementById('step1').classList.add('active');
    });
});