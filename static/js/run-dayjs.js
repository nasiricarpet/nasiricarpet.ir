// پلاگین جلالی و زبان فارسی را به dayjs اضافه کن
// اینها باید قبلاً از CDN لود شده باشند
dayjs.extend(dayjs_plugin_jalali);
dayjs.locale('fa');

// صبر کن تا کل صفحه بارگذاری شود
document.addEventListener('DOMContentLoaded', function() {
  
  // تمام تگ‌های <time> که قالب برای تاریخ استفاده می‌کند را پیدا کن
  var timeElements = document.querySelectorAll('time');
  
  timeElements.forEach(function(el) {
    // تاریخ میلادی را از ویژگی datetime بخوان
    var dateTime = el.getAttribute('datetime');
    if (dateTime) {
      try {
        // تاریخ میلادی را بگیر و با استفاده از dayjs به شمسی تبدیل کن
        // فرمت خروجی: ۱۳ آبان ۱۴۰۴
        var shamsiDate = dayjs(dateTime).calendar('jalali').format('D MMMM YYYY');
        
        // متن داخل تگ <time> را با تاریخ شمسی جایگزین کن
        el.innerText = shamsiDate;
      } catch(e) {
        console.error("خطا در تبدیل تاریخ:", dateTime, e);
      }
    }
  });
});