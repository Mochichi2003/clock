var stop_watch_time = null;

var vue = new Vue({
  el: "#app",
  data: {
    second_hand_angle: 0,
    minute_hand_angle: 0,
    hour_hand_angle: 0,

    stop_watch: null,
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
        // console.log("実行したで");
        // console.log("time  = " +time);
        return time;
      }

      return setInterval(timeSetNow, 1000);
    },
  },

  methods: {
    start_and_stop_button: function () {
      if (vue.stop_watch === null) {
        stop_watch_time = moment();
      } else {
        console.log(moment() - stop_watch_time);
      }
      vue.stop_watch = vue.stop_watch + moment() - stop_watch_time;

      // console.log("押したよ");
      this.stop_watch = moment();
      console.log(moment());
    },
  },
});

console.log(
  (new Date(new Date().toLocaleString({ timeZone: "Asia/Tokyo" })).getTime() %
    86400000) /
    1000
);

console.log(moment().millisecond() + "  ミリ秒"); //ミリ秒
console.log(moment().second() + "  秒"); //秒
console.log(moment().minute() + "  分"); //分
console.log(moment().hours() + "  時間"); //分

setInterval(() => {
  //時間をしていするところ
  // vue.elapsed_millisecond = moment().locale("ja").format("Y/M/d h:mm:ss a");
  // var now_time = new Date().getTime();
  var now_time = moment();
  vue.now_date = now_time.toDate();

  // vue.elapsed_millisecond = Date.parse(now_time) % 86400000;
  vue.elapsed_millisecond = now_time % 86400000;
  vue.elapsed_second = Math.floor(vue.elapsed_millisecond / 1000);
  vue.elapsed_minute = Math.floor(vue.elapsed_second / 60);
  vue.elapsed_hour = Math.floor(vue.elapsed_minute / 60);
  // console.log(elapsed_millisecond);
  // console.log(moment().millisecond()/1000 + moment().second())
  /**
   * アナログ時計の針の角度を計算しているところ
   */
  //秒新の角度
  vue.second_hand_angle =
    "rotate(" +
    Math.round(
      (((moment().millisecond() / 1000 + moment().second()) / 60 ) * 360 -
        90) *
        100
    ) /
      100 +
    "deg)";
  if ((Math.round(((moment().millisecond() / 1000 + moment().second() / 60 + 1) * 360 - 90 ) * 100 ) / 10) >= 269) {
    console.log("もう少しで60秒");
    
  }
  // console.log(((moment().millisecond() / 1000 + moment().second()) / 60) * 360 - 90);

  //分針の角度
  vue.minute_hand_angle =
    "rotate(" +
    Math.round(
      (((moment().minute() + moment().second() / 60) * 360) / 60 - 90) * 100
    ) /
      100 +
    "deg)";
  // console.log((((moment().minute() + moment().second() / 60) * 360) / 60)-90);

  //時針の角度
  vue.hour_hand_angle =
    "rotate(" +
    Math.round(
      ((moment().minute() / 60 + moment().hour()) * 15 * 2 - 90) * 100
    ) /
      100 +
    "deg)";
}, 1000);

console.log(moment().locale("ja").format("Y/M/d h:mm:ss a"));
