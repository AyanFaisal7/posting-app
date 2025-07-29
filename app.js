let selectedBg = "";

function bgPicSet(imgElement) {
    selectedBg = imgElement.src;

    let draftBox = document.getElementById("draft");
    draftBox.style.backgroundImage = `url(${selectedBg})`;
    draftBox.style.backgroundSize = "cover";
    draftBox.style.backgroundPosition = "center";
}

function postIt() {
    let user = document.getElementById("user_name").value.trim();
    let draft = document.getElementById("draft").value.trim();

    if (user === "") {
        user = "anonymous";
    }
    if(draft === ""){
        alert("error ! your have to write something in your post-box")
        return
    }
    const post_div = document.getElementById('all_posts');
    const child_div = document.createElement('div');

    const head_name = document.createElement('h3');
    head_name.textContent = user;

    const time = document.createElement("p");
    let currentTime = new Date().toLocaleString();
    time.textContent = currentTime;
    time.style.fontSize = "12px";
    time.style.marginTop = "-10px";
    time.style.color = "gray";

    const final_post = document.createElement('p');
    final_post.textContent = draft;
    final_post.style.backgroundImage = `url(${selectedBg})`;
    final_post.style.backgroundSize = "cover";
    final_post.style.backgroundPosition = "center";
    final_post.style.padding = "10px";
    final_post.style.borderRadius = "8px";

    let likeBtn = document.createElement("button");
    likeBtn.innerText = "Like";

    let likeCount = 0;
    let likeCounter = document.createElement("span");
    likeCounter.innerText = ` ${likeCount} `
    likeCounter.style.marginLeft = "10px";

    likeBtn.onclick = function () {
        likeCount++;
        likeCounter.innerText = ` ${likeCount} `
    };

    let del = document.createElement('button');
    del.innerText = "Delete";
    del.style.marginTop = "10px";
    del.onclick = function () {
        post_div.removeChild(child_div);
    };

    let comment = document.createElement("button");
    comment.innerText = "Comment";

    comment.onclick = function () {
        let comm_name = document.createElement("input");
        comm_name.placeholder = "Enter your name";

        let text = document.createElement("input");
        text.placeholder = "Write your comment";

        let add = document.createElement("button");
        add.innerText = "Add Comment";

        add.onclick = function () {
            let span = document.createElement("div");
            span.innerHTML = `<strong>${comm_name.value}</strong><br>${text.value}`;
            span.style.marginTop = "5px";

            let comm_del = document.createElement("button");
            comm_del.innerText = "Delete Comment";
            comm_del.style.display = "block";
            comm_del.style.marginBottom = "10px";

            comm_del.onclick = function () {
                span.remove();
                comm_del.remove();
            };

            comment.parentElement.appendChild(span);
            comment.parentElement.appendChild(comm_del);
            text.value = "";
        };

        comment.parentElement.appendChild(comm_name);
        comment.parentElement.appendChild(text);
        comment.parentElement.appendChild(add);
    };

    child_div.appendChild(head_name);
    child_div.appendChild(time);
    child_div.appendChild(final_post);
    post_div.appendChild(child_div);
    child_div.appendChild(likeBtn);
    child_div.appendChild(likeCounter);
    child_div.appendChild(del);
    child_div.appendChild(comment);

    document.getElementById("user_name").value = "";
    document.getElementById("draft").value = "";
}
