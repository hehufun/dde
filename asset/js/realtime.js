// 标题和文字实时时钟js文件

// 循环检查元素并每一秒运行一次
function ctkTime() {
  window.setTimeout("ctkTime()", 500);
  if (!document.getElementById('Totime')) {
    return;
  } else {
    Totimes();
  };
};
ctkTime();


// 文字数组：小写数字xxsz、大写数字dxsz
var xxsz = ['〇', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];

// 设置整数
var r = /^[0-9]+.?[0-9]*/;

// 数字转换成中文数字函数(两位数)
function changeNumToHan(num) {
  var arr = ['', '十', '百', '千', '万', '十', '百', '千', '亿', '十', '百', '千', '万', '十', '百', '千', '亿'];
  // 数字输入
  if (!r.test(num)) {
    return '数据格式错误';
  };
  if (!num || isNaN(num)) {
    return '〇';
  };
  var eng = num.toString();
  var result = '';
  for (var i = 0; i < eng.length; i++) {
    var des_i = eng.length - 1 - i// 倒序排列设值
    result = arr[i] + result
    var xxsz_index = eng[des_i]
    result = xxsz[xxsz_index] + result
  };
  // 将【〇十】换成【〇】 【十〇】换成【十】
  result = result.replace(/〇(千|百|十)/g, '〇').replace(/十〇/g, '十');
  // 合并中间多个零为一个零
  result = result.replace(/〇+/g, '〇');
  // 将【零亿】换成【亿】【零万】换成【万】
  result = result.replace(/〇亿/g, '亿').replace(/〇万/g, '万');
  // 将【亿万】换成【亿】
  result = result.replace(/亿万/g, '亿');
  // 移除末尾的〇
  result = result.replace(/〇+$/, '');
  // 将【一十】换成【十】
  result = result.replace(/^一十/g, '十');
  return result;
};

function Totimes() {
  // 获取现在时间
  var Too = new Date();
  var TooYear = Too.getFullYear();
  var TooMonth = Too.getMonth() + 1;
  var TooDate = Too.getDate();
  var TooHour = Too.getHours();
  var TooMinute = Too.getMinutes();
  var TooSecond = Too.getSeconds();
  // 标题栏-数字时间
  document.title = TooYear + "-" + TooMonth + "-" + TooDate +
    " 📆 " + TooHour + ":" + TooMinute + ":" + TooSecond;
  // 实时更新的中文时间
  // 转换年份时间为文字格式
  var Yea = TooYear.toString();
  var Yeare = '';
  for (var i = 0; i < Yea.length; i++) {
    var des_i = Yea.length - 1 - i;
    Yeare = xxsz[Yea[des_i]] + Yeare;
  };
  // 转换其他时间为中文并输出
  var Monre = changeNumToHan(TooMonth);
  var Dayre = changeNumToHan(TooDate);
  var Houre = changeNumToHan(TooHour);
  var Minre = changeNumToHan(TooMinute);
  var Secre = changeNumToHan(TooSecond);
  document.getElementById("Ttime").innerHTML =
    Yeare + "年" +
    Monre + "月" +
    Dayre + "号" +
    Houre + "点" +
    Minre + "分" +
    Secre + "秒";
  // 如果日期为负数，则报错，即日期不对。
  if (!r.test(TooYear)) {
    document.getElementById("Totime").innerHTML = '程序日期格式获取错误';
  } else {
    return;
  };
};
