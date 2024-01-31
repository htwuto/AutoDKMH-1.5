function login(){
    chrome.storage.sync.get(['user','password'],function (result){
        try{
            let loginButton = document.getElementsByClassName("btn-success")[0];
            if(loginButton.innerText.includes("Đăng nhập")){
                let userArea = document.getElementById("LoginName");
                let passArea = document.getElementById("Password");
                userArea.value = result.user;
                passArea.value = result.password;
                loginButton.click();
            }
        }catch{
            console.log("Đã xảy ra lỗi khi thực hiện đăng nhập tự động"); //có thể do quá tải
            setTimeout(window.location.reload(), 300);
        }
    })
}

let page_url = window.location.href;
if(page_url.includes("dang-ky-mon-hoc")){
    var s = document['createElement']('script');
    s['src'] = chrome['extension']['getURL']('js/content.js');
    s['onload'] = function() {
        this['parentNode']['removeChild'](this)
    };
    (document['head'] || document['documentElement'])['appendChild'](s);
}else if(page_url.includes("dang-nhap")){
    chrome.storage.sync.get('autologin', function (data){
    if(data.autologin)
       login();
    });
}