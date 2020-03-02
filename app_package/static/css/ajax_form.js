function ajax_main(dest,data){
    var xmlhttp;
    if(window.XMLHttpRequest){
        xmlhttp=new XMLHttpRequest();
    }
    else{
        xmlhttp=ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange=function(){
        if(xmlhttp.readyState==4 && xmlhttp.status==200){
            document.getElementById("result").innerHTML=xmlhttp.responseText;
        }
    }
    xmlhttp.open("POST",dest,true);
    xmlhttp.setRequestHeader("Content-type","Application/json");
    xmlhttp.send(JSON.stringify(data));
}

function ajax_add(){
    var v1=document.getElementById("value1").value;
    var v2=document.getElementById("value2").value;
    data={"value1":v1,"value2":v2,"action":"add"};
    ajax_main("/",data);
}

function ajax_subtract(){
    var v1=document.getElementById("value1").value;
    var v2=document.getElementById("value2").value;
    data={"value1":v1,"value2":v2,"action":"subtract"};
    ajax_main("/",data);
}


function ajax_multiply(){
    var v1=document.getElementById("value1").value;
    var v2=document.getElementById("value2").value;
    data={"value1":v1,"value2":v2,"action":"multiply"};
    ajax_main("/",data);
}


function ajax_divide(){
    var v1=document.getElementById("value1").value;
    var v2=document.getElementById("value2").value;
    data={"value1":v1,"value2":v2,"action":"divide"};
    ajax_main("/",data);
}



