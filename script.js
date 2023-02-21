//your code here
// let userphoto = document.getElementsByTagName("img");
// let name = document.getElementsByClassName("name");
let buttons = document.querySelectorAll("input");
fetch("https://randomuser.me/api/")
.then((response)=>response.json())
.then((data)=>{
    console.log("data" ,data);
    let details = data.results;
    console.log(details);
    details.map((results)=>{
        let pictures = results.picture.medium;
        console.log(pictures);
        // userphoto.src = pictures;
        let div = document.createElement("img");
        div.src = pictures;
        document.body.prepend(div);
        let name = document.createElement("p");
        name = `${results.name.first} ${results.name.last}`;
        document.body.append(name);
        let para = document.createElement("p");
        buttons[0].addEventListener("click" ,()=>{
            para.innerHTML = results.dob.age;
            document.body.append(para);
        })
        buttons[1].addEventListener("click" ,()=>{
            para.innerHTML = results.email;
            document.body.append(para);
        })
        buttons[2].addEventListener("click" ,()=>{
            para.innerHTML = results.phone;
            document.body.append(para);
        })
        buttons[3].addEventListener("click" ,()=>{
            location.reload();
        })
       

    })
})

