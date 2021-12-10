var request=new XMLHttpRequest();
request.open('GET','http://api.countrylayer.com/v2/language?access_key=3f711eebf490e28965d03291a5ed0ef2');
request.send();
request.onload=function (){
    var result=JSON.parse(this.response);
    for(let i=0;i<result.length;i++)
    {
        console.log(result[i]);
    }
}