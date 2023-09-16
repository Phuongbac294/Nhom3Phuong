const headers = [
    { avatar: '../img/img_2.jpg', slogan: "Cố gắng không ngừng, lỗ lực mỗi ngày"},
    { avatar: '../img/img_3.jpg', slogan: "mỗi hành động nhỏ tích góp thành bão"},
    { avatar: '../img/img_4.jpg', slogan: "tập chóng đẩy mỗi ngày thêm 1"},
    { avatar: '../img/img_5.jpg', slogan: "Chạy mỗi ngày thêm 500m"},

]

const logo  = document.querySelector('.header_logo-img')
const title = document.querySelector('.header_slogan-title')

const header = (item) => {
    logo.src = item.avatar
    title.innerHTML = item.slogan
}

header(headers[1])