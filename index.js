function removeUrlAnchor(url){
    let newUrl = []
    for(let i = 0; i<url.length; i++){
      if(url[i]== "#"){
         break
         }else{
        newUrl.push(url[i])
      }
    }
    return newUrl.join("")
}