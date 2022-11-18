function getCookie(name){
    if (document.cookie.length>0) {
    ind=document.cookie.indexOf(name);
    if (ind!=-1) {
    ind=ind+name.length+1 ;
    ind1=document.cookie.indexOf(";",ind);
    if (ind1==-1) ind1=document.cookie.length;
    return unescape(document.cookie.substring(ind,ind1));
      }
    }
    return ""
}
  
function setCookie(value){
  var dt=new Date();
  dt.setDate(dt.getDate()+1);
  document.cookie="uname=" +escape(value)+"";
  expires=""+dt.toGMTString();
}
  
function checkCookie(){
  username=getCookie('uname');
  if (username!=null && username!="") {
  document.forms[0].uname.value=username;
  }
}
