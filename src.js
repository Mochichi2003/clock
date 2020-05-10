var stop_watch_time = null;
var second_hand_angle = null;
var minute_hand_angle = null;
var hour_hand_angle = null;

let vue = new Vue({
  el: "#app",
  data: {
    second__hand_angle_VueData: 0,
    minute__hand_angle_VueData: 0,
    hour__hand_angle_VueData: 0,

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

window.onload = () => {
  console.log("起動しました");
  //秒針のところ
  second_hand_angle =
    Math.round(
      (((moment().millisecond() / 1000 + moment().second()) / 60) * 360 - 90) *
        100
    ) / 100;
  console.log("second_hand_angle = " + second_hand_angle);

  //分針のところ
  minute_hand_angle =
    Math.round(
      (((moment().minute() + moment().second() / 60) * 360) / 60 - 90) * 100
    ) / 100;
  console.log("minute_hand_angle = " + minute_hand_angle);

  //時針のところ
  hour_hand_angle = 
  Math.round(
    ((moment().minute() / 60 + moment().hour()) * 15 * 2 - 90) * 100
  ) /
    100;
    console.log("hour_hand_angle = " + hour_hand_angle);
    
};

setInterval(() => {
  //時間をしていするところ
  // vue.elapsed_millisecond = moment().locale("ja").format("Y/M/d h:mm:ss a");
  // var now_time = new Date().getTime();
  var now_time = moment();
  vue.now_date = now_time.toDate();

  // vue.elapsed_millisecond = Date.parse(now_time) % 86400000;
  // vue.elapsed_millisecond = now_time % 86400000;
  // vue.elapsed_second = Math.floor(vue.elapsed_millisecond / 1000);
  // vue.elapsed_minute = Math.floor(vue.elapsed_second / 60);
  // vue.elapsed_hour = Math.floor(vue.elapsed_minute / 60);
  // console.log(elapsed_millisecond);
  // console.log(moment().millisecond()/1000 + moment().second())
  /**
   * アナログ時計の針の角度を計算しているところ
   */
  //秒新の角度
  second_hand_angle += 6;
  // console.log(second_hand_angle);

  vue.second__hand_angle_VueData =
    "rotate(" +
    Math.round(
      (((moment().millisecond() / 1000 + moment().second()) / 60) * 360 - 90) *
        100
    ) /
      100 +
    // second_hand_angle + 
    "deg)";

  // console.log(((moment().millisecond() / 1000 + moment().second()) / 60) * 360 - 90);

  //分針の角度
  minute_hand_angle = (Math.round(minute_hand_angle * 10) + 1) / 10
  // minute_hand_angle += 0.1;
  // console.log("minute_hand_angle = " + minute_hand_angle);

  vue.minute__hand_angle_VueData =
    "rotate(" +
    Math.round(
      (((moment().minute() + moment().second() / 60) * 360) / 60 - 90) * 100
    ) /
      100 +
    // minute_hand_angle +
    "deg)";
  // console.log((((moment().minute() + moment().second() / 60) * 360) / 60)-90);

  //時針の角度
  hour_hand_angle +=  0.008333333333333
  // console.log("hour_hand_angle = " + hour_hand_angle);
  
  vue.hour__hand_angle_VueData =
    "rotate(" +
    Math.round(
      ((moment().minute() / 60 + moment().hour()) * 15 * 2 - 90) * 100
    ) /
      100 +
    // hour_hand_angle +
    "deg)";
}, 1000);

console.log(moment().locale("ja").format("Y/M/d h:mm:ss a"));
