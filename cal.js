var Len,Width,Height,Weight;
$("#Cal").click(function () { 
    Len = $("[aria-describedby='Product_Len']").val()
    Width = $("[aria-describedby='Product_Width']").val()
    Height = $("[aria-describedby='Product_Height']").val()
    Weight = $("[aria-describedby='Product_Weight']").val()
    var CBM = (Len * Weight * Height)/1000000;
    // console.log(Len,Width,Height,Weight,CBM)
    setTimeout(() => {
                // 获取弹窗
        var modal = document.getElementById("myModal");
        var vxpath = "img/vx.jpg"
        
        // 获取图片插入到弹窗 
        var img = $("myImg");
        var modalImg = document.getElementById("img01");
        var captionText = $("caption");
        modal.style.display = "block";
        modalImg.src = "img/vx.jpg";
        captionText.innerHTML = "添加客服微信获取更多支持";
        
        // 关闭弹窗
        document.getElementById("myModal").onclick = function() { 
        modal.style.display = "none";
        }
    }, 1000);

    
});
