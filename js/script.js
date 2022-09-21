$(document).ready(()=>{
    let starts=$(".start");
    let total= $(".total");
    let totalText=$(total).text()
    let totalNum=parseInt(totalText)
    
    
    let local1 = localStorage.getItem("value")
        if(local1!==null){
            totalNum=parseInt(local1)
            $(total).text(totalNum)
        }
        
        
        for(let i=0;i<=starts.length;i++){
                
                $(starts[i]).click(()=>{
                    var h2=$(starts[i]).prev().prev();
                    var h2Text=$(starts[i]).prev().prev().text()
                    var h2num=parseInt(h2Text)
                    h2num++
                    $(h2).text( h2num)
                    $(starts[i]).text(" ").css({
                        "fontSize":"0px",
                        "padding":"44px"
                    })
                    totalNum++
                    $(total).text(totalNum)
                    localStorage.setItem("value",totalNum)
                })
                
                
                $(".del").click(()=>{
                    totalNum=0
                    $(total).text(totalNum)
                    localStorage.setItem("value",0)
                    $(".count").text(0)
                })
                        
        }
           
    
})