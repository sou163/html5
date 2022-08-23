function calculate()
{
    var sub1=parseInt(document.getElementById("sub1").value);
    var sub2=parseInt(document.getElementById("sub2").value);
    var sub3=parseInt(document.getElementById("sub3").value);
    var sub4=parseInt(document.getElementById("sub4").value);
    var sub5=parseInt(document.getElementById("sub5").value);

    var tot1=parseInt(document.getElementById("tot1").value);
    var tot2=parseInt(document.getElementById("tot2").value);
    var tot3=parseInt(document.getElementById("tot3").value);
    var tot4=parseInt(document.getElementById("tot4").value);
    var tot5=parseInt(document.getElementById("tot5").value);

    var per1=sub1*100/tot1;
    var per2=sub2*100/tot2;
    var per3=sub3*100/tot3;
    var per4=sub4*100/tot4;
    var per5=sub5*100/tot5;

    var total=sub1+sub2+sub3+sub4+sub5;
    var totalT=tot1+tot2+tot3+tot4+tot5;
    var totpercent=total*100/totalT;

    document.getElementById("per1").value=per1.toFixed(2);
    document.getElementById("per2").value=per2.toFixed(2);
    document.getElementById("per3").value=per3.toFixed(2);
    document.getElementById("per4").value=per4.toFixed(2);
    document.getElementById("per5").value=per5.toFixed(2);

    if(per1<40)
        document.getElementById("per1").style.color="red";
    if(per2<40)
        document.getElementById("per2").style.color="red";
    if(per3<40)
        document.getElementById("per3").style.color="red";
    if(per4<40)
        document.getElementById("per4").style.color="red";
    if(per5<40)
        document.getElementById("per5").style.color="red";

    var grade='';
    if(totpercent >=70)
        grade='A';
    else if(totpercent >=55)
        grade='B';
    else if(totpercent>=40)
        grade='C';
    else
    {
        grade="F";
        document.getElementById("grade").style.color="red";
    }
    if(totpercent<40)
    {
        document.getElementById("totalP").style.color="red";
    }
    document.getElementById("totalP").value=totpercent.toFixed(2);
    document.getElementById("grade").value=grade;
}

function refresh(){
    location.reload();
}