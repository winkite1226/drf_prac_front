const backend_base_url = "http://127.0.0.1:8000"

//회원가입
async function handleSignup() {
    const signupData = {
        username : document.getElementById("exampleFormControlInput1").value,
        password : document.getElementById("inputPassword").value
    }

    const response = await fetch('http://127.0.0.1:8000/users/signup/', {
        headers: {
            'content-type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(signupData)
    })

    console.log(response)

    if (response.status==201){
        window.location.replace('http://127.0.0.1:5500/signin.html');
    } else {
        alert(response.status)
    }

    // const response_json = await response.json()

    // if (response.status==200){
    //     window.location.replace('http://127.0.0.1:8000/users/signup/');
    // } else {
    //     alert(response.status)
    // }
}

//로그인
async function handleSignin() {
    const signinData = {
        username : document.getElementById("exampleFormControlInput1").value,
        password : document.getElementById("inputPassword").value
    }

    const response = await fetch('http://127.0.0.1:8000/users/api/token/', {
        headers: {
            'content-type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(signinData)
    })

    const response_json = await response.json()
    console.log(response_json)

    localStorage.setItem("access", response_json.access);
    localStorage.setItem("refresh", response_json.refresh);

    const base64Url = response_json.access.split('.')[1]
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    localStorage.setItem("payload", jsonPayload);
    window.location.replace('http://127.0.0.1:5500/')

    // if (response.status==200){
    //     window.location.replace('http://127.0.0.1:8000/users/signup/');
    // } else {
    //     alert(response.status)
    // }
}

//로그아웃
function handleLogout() {
    localStorage.removeItem("access")
    localStorage.removeItem("refresh")
    localStorage.removeItem("payload")
    alert("로그아웃 되었습니다")
    location.reload()
}

//게시글 생성
async function createArticle() {
    const payload = localStorage.getItem("payload");
    const parsed_payload = await JSON.parse(payload)
    console.log(parsed_payload)

    content = document.getElementById("article_content").value
    title = document.getElementById("article_title").value
    restaurant = document.getElementById("article_restaurant").value
    image = document.getElementById("formFile").files[0]
    console.log(image)

    const formData = new FormData();

    formData.append('post_title', title)
    formData.append('post_restaurant', restaurant)
    formData.append('post_content', content)
    formData.append('post_image', image)

    const response = await fetch('http://127.0.0.1:8000/articles/', {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("access")
        },
        method: 'POST',
        body: formData
    })

    if (response.status==200){
        alert("게시물 등록")
        window.location.replace('http://127.0.0.1:5500/')
    }
    // if (response.status==200){
    //     window.location.replace('http://127.0.0.1:8000/users/signup/');
    // } else {
    //     alert(response.status)
    // }
}

//사용자 정보 보내기
async function handleMock() {
    const response = await fetch('http://127.0.0.1:8000/articles/', {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("access")
        },
        method: 'GET',
    })
}

async function getArticles() {
    const response = await fetch('http://127.0.0.1:8000/articles/', {
        method: 'GET',
    })
    response_json = await response.json()
    return response_json
}

async function articleDetail(id) {
    console.log(id)
    location.href='/article_detail.html'
    const response = await fetch(`http://127.0.0.1:8000/articles/${id}/`, {
        method: 'GET',
    })
    response_json = await response.json()
    return response_json
}

async function handleRecommend() {
    const response = await fetch('http://127.0.0.1:8000/recommends/', {
        headers: {
            'Authorization': 'Bearer ' + localStorage.getItem("access")
        },
        method: 'GET',
    })
}