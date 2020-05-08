var 
var vue = new Vue({
  el: "#app",
  data: {
    test: "あいう",
    date: "2020/5/8 Fri 8:09:26",
  },
  computed: {
    // tetstttt:setInterval(() => {
    //   return "あｓｄｇｊはｌｋｓｆｈｌｆｇｈｋｓｊｄｈｆｇヵｊｈｆｌｄｋｇｊｈヵｓ，ｃんｖ"
    // }, interval);

    clickHandler: function あいうえお() {
      var time = "あいうえお";
      for (let i = 0; i < 40; i++) {
        // const element = array[i];
        time = time + "あいうえお";
      }
      function timeSetNow() {
        time = time + "あいうえお";
        console.log("実行したで");
        // console.log("time  = " +time);
        return time
      }

      
      return setInterval(timeSetNow, 1000);
    },
  },
});

console.log(moment().locale("ja").format("Y/M/d h:mm:ss a"));
