const modal = new bootstrap.Modal(document.getElementById("viewPostModal"));
const postTitle = document.getElementById('viewPostModalTitle');
const postDescription = document.getElementById('viewPostModalDescription');
const postName = document.getElementById('viewPostModalName');
const postEmail = document.getElementById('viewPostModalEmail');
const postCreatedAt = document.getElementById('viewPostModalCreatedAt');
const modalData = document.getElementById('viewPostModalData');
const loader = document.getElementById('loader');
document.body.addEventListener('click', e => {
    if (e.target.className.search('show-post') !== -1 || e.target.parentElement.className.search('show-post') !== -1) {
        const postId = e.target.getAttribute('data-post-id');
        loader.classList.remove('d-none');
        loader.classList.add('d-flex');
        modalData.classList.add('d-none');
        modalData.classList.remove('d-block');
        modal.show();
        fetch(`/posts/api/${postId}`)
        .then(r => r.json())
        .then(({data}) => {
            setTimeout(() => {
                const {title, description, human_readable_date, user} = data;
                postTitle.textContent = title;
                postDescription.textContent = description;
                postName.textContent = user.name;
                postEmail.textContent = user.email;
                postCreatedAt.textContent = human_readable_date;
                loader.classList.remove('d-flex');
                loader.classList.add('d-none');
                modalData.classList.remove('d-none');
                modalData.classList.add('d-block');
            }, 2000);
        })

    }
});
