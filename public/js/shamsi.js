// Load the jalali plugin
dayjs.extend(window.dayjs_plugin_jalali);

// Wait for the document to be ready
document.addEventListener("DOMContentLoaded", function() {
  // Find all elements that show the post date in PaperMod
  const dateElements = document.querySelectorAll("span.post-date, .list-page time");

  dateElements.forEach(el => {
    try {
      // Get the gregorian date text
      const gregorianDate = el.dateTime || el.innerText;
      // Convert and format it to Shamsi
      const shamsiDate = dayjs(gregorianDate).calendar('jalali').format('D MMMM YYYY');
      // Replace the text
      el.innerText = shamsiDate;
    } catch (e) {
      console.error("Could not convert date:", e);
    }
  });
});