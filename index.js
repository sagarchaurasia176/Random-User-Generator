let btnClk = document.querySelector("#click");
let userImgApi = "https://randomuser.me/api";

let userImg = async function imgGet() {
    try {
        let datas = await fetch(userImgApi);
        let resp = await datas.json();

        resp.results.filter((userFtch) => {
            let crtDiv = document.createElement("div");

            crtDiv.innerHTML = `
           
            <img src="${userFtch.picture.medium}" alt="" class="userImg">
            <div class = "user-dtl">
            <p>${userFtch.name.title}</p>&nbsp;
            <p>${userFtch.name.first}</p>&nbsp;
            <p>${userFtch.name.last}</p>&nbsp;
</div>
            `;
            document.querySelector("#showImg").appendChild(crtDiv);
        });
    } catch {
        console.log("err");
    }
};

btnClk.addEventListener("click", () => {
    userImg();
});