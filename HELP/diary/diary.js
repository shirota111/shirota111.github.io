 // 読込
 function load() {
    var mydata = "";
    if(!localStorage.getItem('mydata')) {
      mydata = "データがありません";
    } else {
      mydata = localStorage.getItem('mydata');
    }
    console.log(`mydata= ${mydata}`);
    document.getElementById("mydata_out").innerHTML = mydata;
  }
  // 保存
  function save() {
    var mydata = document.getElementById("mydata_in").value;
    console.log(`mydata_in = ${mydata_in}`);
    localStorage.setItem('mydata', mydata);
  }