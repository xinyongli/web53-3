$(function(){
    //点击添加，在tbody里添加一行数据
    $("#add").click(function(){
        var date = new Date();
        var m=document.form2.flm.value;
        var child = $("#tbody").children().length+1;
        var y = $("<tr><td>"+child+"</td><td>"+m+"</td><td>"+date.getFullYear()+"-"+date.getMonth()+"-"+date.getDate()+"  "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()+"</td><td><img src='../img/category/pencil.png' title='编辑'>  <img class='delete' src='../img/category/clear.png' title='删除'></td></tr>");

        $("#tbody").append(y);

    //点击删除正行   
    $(".delete").click(function(){
        $(this).parent().parent().css("display","none");

        // $(this).parent().parent().remove();
    })

    })

})