var database = firebase.database();
function writeUserData( name, msg) {
    firebase.database().ref('/').push({
      username: name,
      msg: msg,
     
    });
    
  }
var html="";
    var query = firebase.database().ref("/").orderByKey();
query.once("value")
  .then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      // key will be "ada" the first time and "alan" the second time
      // childData will be the actual contents of the child
      var childData = childSnapshot.val();
      html+= "<div class='row'><div class='col-lg-6'><h3>"+childData.username+" : <span class='label label-default'>"+childData.msg+"</span></h3> </div></div>"
      //<h3>Example heading <span class="label label-default">New</span></h3>
      //html+="<h3>"+childData.username+" </h3><p> said: "+childData.msg+"</p>";
  });

  console.log(html)
  $(".test").html(html);
  
});
$(".sendMsg").click(function(){
    var placeholder1= $(".userName").val();
    var placeholder2=$(".userMsg").val();
    $(".userName").val(""); 
    $(".userMsg").val("");
    
    if(placeholder1.length > 0 && placeholder2.length>0){
    writeUserData(placeholder1,placeholder2);
    var html="";
    var query = firebase.database().ref("/").orderByKey();
query.once("value")
  .then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      // key will be "ada" the first time and "alan" the second time
      // childData will be the actual contents of the child
      var childData = childSnapshot.val();
      html+= "<div class='row'><div class='col-lg-6'><h3>"+childData.username+" : <span class='label label-default'>"+childData.msg+"</span></h3> </div></div>"
      //<h3>Example heading <span class="label label-default">New</span></h3>
      //html+="<h3>"+childData.username+" </h3><p> said: "+childData.msg+"</p>";
  });

  console.log(html)
  $(".test").html(html);
  
});
    }else{
      alert("Please Fill in all the boxes");
    }
});



