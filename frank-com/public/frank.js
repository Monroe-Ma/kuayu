const request = new XMLHttpRequest()
request.open("get", "http://qq.com:8888/friends.json")
request.onreadystatechange = () => {
    console.log("/friends.json")
    if (request.readyState === 4 && request.status === 200) {
        console.log(request.response)
     }
}
request.send()