// صبر کن تا کل صفحه بارگذاری شود
document.addEventListener('DOMContentLoaded', function() {

  // مطمئن شو که کتابخانه moment-jalaali (shamsi.js) لود شده است
  if (typeof m === 'function') {

    // قالب PaperMod تاریخ‌ها را در تگ <time> قرار می‌دهد
    var timeElements = document.querySelectorAll('time');

    timeElements.forEach(function(el) {
      var dateTime = el.getAttribute('datetime');
      if (dateTime) {
        try {
          // تاریخ میلادی را بگیر و به شمسی تبدیل کن
          // فرمت: ۱۳ آبان ۱۴۰۴
          // برای اعداد فارسی از 'fa' استفاده می‌کنیم
          var shamsiDate = m(dateTime).locale('fa').format('jD jMMMM jYYYY');

          // متن داخل تگ <time> را با تاریخ شمسی جایگزین کن
          el.innerText = shamsiDate;
        } catch(e) {
          console.error("خطا در تبدیل تاریخ:", el.innerText, e);
        }
      }
    });
  } else {
    console.error("کتابخانه shamsi.js (moment-jalaali) بارگذاری نشده است.");
  }
});