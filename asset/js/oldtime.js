// 文字时钟js文件
var he = 0;

// 先运行五次，之后100秒运行一次
function hehu() {
  he = he + 1;
  if (he < 5) {
    chtime();
    window.setTimeout("hehu()", 1000);
  } else {
    checkTime();
  }
};
hehu();

// 循环检查元素并每100秒运行一次
function checkTime() {
  window.setTimeout("checkTime()", 100000);
  chtime();
};

// 文字数组：小写数字xxsz、大写数字dxsz
var xxsz = ['〇', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
var dxsz = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖', '拾'];
// 设定十天干tg、十二地支dz、十二生肖sx数组（循环两遍）
var tgg = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
var tg = tgg.concat(tgg);
var dzz = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];
var dz = dzz.concat(dzz);
var sxx = ['鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪'];
var sx = sxx.concat(sxx);
var cz = ['正', '初'];

// 时刻描述
var sksm = [
  '【子时】夜半，又名子夜、中夜：十二时辰的第一个时辰。',
  '【丑时】鸡鸣，又名荒鸡：十二时辰的第二个时辰。',
  '【寅时】平旦，又称黎明、早晨、日旦等：时是夜与日的交替之际。',
  '【卯时】日出，又名日始、破晓、旭日等：指太阳刚刚露脸，冉冉初升的那段时间。',
  '【辰时】食时，又名早食等：古人“朝食”之时也就是吃早饭时间。',
  '【巳时】隅中，又名日禺等：临近中午的时候称为隅中。',
  '【午时】日中，又名日正、中午等。',
  '【未时】日昳，又名日跌、日央等：太阳偏西为日跌。',
  '【申时】哺时，又名日铺、夕食等。',
  '【酉时】日入，又名日落、日沉、傍晚：意为太阳落山的时候。',
  '【戌时】黄昏，又名日夕、日暮、日晚等：此时太阳已经落山，天将黑未黑。天地昏黄，万物朦胧，故称黄昏。',
  '【亥时】人定，又名定昏等：此时夜色已深，人们也已经停止活动，安歇睡眠了。人定也就是人静。（北京时间21时至23时）'
];

function chtime() {
  // 获取现在时间
  var Tor = new Date();
  var TorYear = Tor.getFullYear();
  var TorMonth = Tor.getMonth() + 1;
  var TorDate = Tor.getDate();
  var TorHour = Tor.getHours();
  var TorMinute = Tor.getMinutes();
  var TorSecond = Tor.getSeconds();
  // 年份取余得天干（/10 +6）地支（/12 +8）数
  var tgs = (TorYear % 10) + 6;
  var dzs = (TorYear % 12) + 8;
  // 时辰数（小时数取整qz）,正初数获得（小时数取余qy）
  var qy = TorHour % 2;
  var qz = Math.floor((TorHour + 1) / 2);

  // 输出结果
  if (!document.getElementById('shichen')) {
    return;
  } else {
    document.getElementById("shichen").innerHTML = tg[tgs] + dz[dzs] + "年" + cz[qy] + dz[qz] + "时" + sx[qz];
  };
  if (!document.getElementById('Totime')) {
    return;
  } else {
    document.getElementById("Totime").innerHTML = sksm[qy]
  };
};
