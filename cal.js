// 定价规则
var Pao = 6000;   /* 计抛系数 */ 
var Box_de_cbm = 13.568;    /* 箱子体积 */
var Box_de_Weight = 21.5;    /* 箱子重量 */
// 入库费用
var Input_ups = 0.6;      /* 快递退货箱件 */
var Input_truck = 12;     /* LTL卡车整托盘退货 */
var Input_check = 0.15;   /* 入库箱内数量清点 */
var Input_check_more = 0.2;   /* 入库箱内数量清点 Sku 大于3*/
// 贴标费
var Re_1 = 0.5;      /* 1-2 */     
var Re_2 = 0.6;      /* 2-5 */      
var Re_3 = 1;        /* 5-10 */    
var Re_4 = 1.8;      /* 10-30 */
var Re_5 = 3.5;      /* 30-50 */      
var Re_6 = 6;        /* 50-70 */
var Re_Box = 0.5;
// 装箱费
var Box_s = 3.5;        
var Box_m = 4;        
var Box_l = 5;
// 打包费
var Pack_A = 3;
var Pack_B = 3.5;
var Pack_C = 4.2;
var Pack_D = 5;
var Pack_T = 18;
// 附加服务费


// 自提出库费
var Out_ups = 1;
var Out_truck = 12;
var Out_time = 20;

// 获取表单信息
    var Len,Width,Height,Weight,P_num,Sku_num,CM,KG;
    $("#Cal").click(function () { 
        Len = $("[aria-describedby='Product_Len']").val()
        Width = $("[aria-describedby='Product_Width']").val()
        Height = $("[aria-describedby='Product_Height']").val()
        Weight = $("[aria-describedby='Product_Weight']").val()
        P_num = $("[aria-describedby='P_Number']").val()
        Sku_num = $("[aria-describedby='Sku_Number']").val()
    // 转化单位
    function Tr_CBM_Weight(Len,Width,Height,Weight) {
        // var CBM = (Len * Width * Height)/1000000;
        // var pao = (Len * Width * Height)/Pao;
        // if (pao>Weight) {Weight = pao;}
        Weight = Math.max((Len * Width * Height)/1000000,(Len * Width * Height)/Pao);
        var LB = Weight * 0.75;
        return {
            CBM : CBM,
            Weight : Weight,
            LB : LB,
        }
    }
// 计算公式
    /* 贴标费用 单位LB */
    var PorductA = Tr_CBM_Weight(Len,Width,Height,Weight)
    console.log(PorductA)
    var Flag_re = null;
    switch (PorductA.LB) {
        case PorductA.LB<2:Flag_re = Re_1
            break;
        case PorductA.LB<5:Flag_re = Re_2
            break;
        case PorductA.LB<10:Flag_re = Re_3
            break;
        case PorductA.LB<30:Flag_re = Re_4
            break;
        case PorductA.LB<50:Flag_re = Re_5
            break;
        case PorductA.LB<70:Flag_re = Re_6
            break;
        case PorductA.LB<0:
            alert("重量错误")
        default:
            alert("重量过大")
            break;
    }
    console.log(Flag_re);
    /* 预估箱子数量 */
        var Flag_Box = null;
        var Box_max = Math.ceil(Math.max((PorductA.CBM * P_num) / Box_de_cbm,(PorductA.Weight * P_num) / Box_de_Weight))    /* 总CBM/箱子CBM  总重量/箱子重量 */
        /* 打包费 */
        // switch (LB) {
        //     case value:
                
        //         break;

        //     default:
        //         break;
        // }
    /* 箱子费用 */
    alert("贴标费"+(Flag_re*P_num)+"预估箱子数量"+Box_max)










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
    }, 10000);

    
});
