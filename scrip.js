// Tạo sao băng liên tục
const starContainer = document.getElementById('star-container');

function createComet() {
    const comet = document.createElement('div');
    comet.classList.add('comet');

    // Vị trí ban đầu ngẫu nhiên
    comet.style.top = Math.random() * 50 + '%';
    comet.style.left = Math.random() * 100 + '%';

    // Thêm vào container
    starContainer.appendChild(comet);

    // Xóa sau khi hoàn thành
    setTimeout(() => {
        comet.remove();
    }, 5000);
}

// Tạo sao băng mỗi 3 giây
setInterval(createComet, 3000);
