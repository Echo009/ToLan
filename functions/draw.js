/* 
 * Author : echo0 
 * Email   : ech0.extreme@foxmail.com
 * Time    : 2017年5月20日06:46:31
 */

//function printHeart(id){
//    document.getElementById(id).innerHTML="<pre>                *********           *********               <br>            *****************   *****************           <br>          ****************************************          <br>         *******************************************        <br>        *********************************************       <br>        *********************************************       <br>        *********************************************       <br>        *********************************************       <br>        *********************************************       <br>        *********************************************       <br>         *******************************************        <br>          *****************************************         <br>          ****************************************          <br>            *************************************           <br>             ***********************************            <br>              *********************************             <br>                *****************************               <br>                  *************************                 <br>                    *********************                   <br>                       ***************                      <br>                          *********                         <br>                             ***                            </pre>";
//}
function printHeart(id){
       document.getElementById(id).innerHTML=genHeart(2);
}
function genHeart(scale){  //利用数学表达式控制输出 ，方便控制心形的大小。
    // 一行的字符数为 3/deltaY , 原始比例下 为 30
    // 一列的字符数为 3/deltaY , 原始比例下 为 60
    var x,y,a,temp;
    var blank='1';
    var entity='l';
    var lineSeparator = "<br>";
    var heartString="<pre>"; 
    var deltaX= 0.05*(1/scale);
    var deltaY= 0.1*(1/scale);
    for(y=1.3;y>-1.3;y-=deltaY){
        for (x=-1.5;x<1.5;x+=deltaX){
            a=x*x+y*y-1;
            temp = a*a*a - x*x*y*y*y<=0.0 ? entity :blank;
                // 是不是 还得加点什么 。 。 。 感觉有点单调~
            heartString = heartString + temp ;
        }
        heartString = heartString + lineSeparator;
    }
    return heartString + "</pre>";
}