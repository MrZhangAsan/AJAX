let n = 1;
getPage.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('get',`/page${n +1}`)
    request.onreadystatechange = () =>{
        if(request.readyState ===4 && request.status ===200){
            const array = JSON.parse(request.response)
            array.forEach(item => {
                const li = document.createElement('li')
                li.textContent = item.id    
                xxx.appendChild(li);            
            });
            n += 1
        }
    }
    request.send()
}
getJSON.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("get","/5.json")
    request.onreadystatechange = () =>{
        if(request.readyState ===4 && request.status ===200){
        const object = JSON.parse(request.response)
        console.log(object)
        myName.textContent = object.name
        }
    }
    request.send()
}
getXML.onclick = () =>{
    const request = new XMLHttpRequest();
    request.open('GET','/4.xml');
    request.onreadystatechange = ()=>{
        if(request.readyState ===4 && request.status ===200) {
            const dom = (request.responseXML)
            const text = dom.getElementsByTagName('warning')[0].textContent
            console.log(text.trim())
        }
    }
    request.send()
}

getHTML.onclick = ()=>{
    const request = new XMLHttpRequest();
    request.open('GET',"/3.html");
    request.onload = ()=>{
        console.log(request.response)
        const div = document.createElement('div')
        div.innerHTML = request.response
        document.body.appendChild(div)
    };   
    request.onerror = ()=>{
    };
    request.send()
}

getJS.onclick = ()=>{
    const request = new XMLHttpRequest();
    request.open('GET',"/2.js");
    request.onload = ()=>{
        console.log()
        const script = document.createElement('script')
        script.innerHTML = request.response
        document.body.appendChild(script)
    };   

    request.send()
}



getCSS.onclick = ()=>{
    const request = new XMLHttpRequest();
    request.open('GET',"/style.css");//readyState = 1
    request.onreadystatechange= ()=>{
        //下载完成，但不知道是成功还是失败
        console.log(request.readyState)
        if(request.readyState === 4){
            console.log('下载完成')
            if(request.status >=200 && request.status <300){
                const style = document.createElement('style')
                style.innerHTML = request.response
                document.head.appendChild(style)
            } else{
                alert('加载CSS 失败')
            }
        }

    };
    request.send(); //readyState = 2
}
