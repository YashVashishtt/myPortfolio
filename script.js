document.addEventListener('DOMContentLoaded', function () {
   const cursor = document.querySelector('.cursor');

   const handleMouseMove = (event) => {
      let x = event.pageX - cursor.offsetWidth + 100;
      let y = event.pageY - cursor.offsetHeight + 140;
      cursor.style.left = `${x}px`;
      cursor.style.top = `${y}px`;
   };

   const handleMouseLeave = () => {
      cursor.style.display = 'none';
   };

   const handleMouseEnter = () => {
      cursor.style.display = 'block';
   };

   document.body.addEventListener('mousemove', handleMouseMove);
   document.body.addEventListener('mouseleave', handleMouseLeave);
   document.body.addEventListener('mouseenter', handleMouseEnter);

   // Cleanup event listeners on page unload
   window.addEventListener('beforeunload', () => {
      document.body.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
   });
});



document.addEventListener('DOMContentLoaded', function () {
   const array1 = ["Programmer    ", "Coder    ", "FrontEnd-Developer    "];

   let index = 0;
   let letterIndex = 0;
   let currentString = '';

   const updateText = () => {
      const string = array1[index];

      if (letterIndex < string.length) {
         currentString += string[letterIndex];
         letterIndex += 1;
      } else {
         letterIndex = 0;
         currentString = '';

         // Update index in a way that it loops back to 0 when reaching the end
         index = (index + 1) % array1.length;
      }
      document.getElementById('textchange').textContent = currentString;

   };

   const intervalId = setInterval(updateText, 200);

   // Clear the interval when the page is closed or unloaded
   window.addEventListener('beforeunload', () => {
      clearInterval(intervalId);
   });
});

document.addEventListener('DOMContentLoaded', function () {
   let isDropdownOpen = false;

   const toggleDropdown = () => {
       const dropdownContent = document.getElementById('dropdownContent');
       isDropdownOpen = !isDropdownOpen;

       if (isDropdownOpen) {
           dropdownContent.style.display = 'block';
       } else {
           dropdownContent.style.display = 'none';
       }
   };

   document.querySelector('.dropdown button').addEventListener('click', toggleDropdown);

   // Close the dropdown when clicking outside of it
   document.addEventListener('click', function (event) {
       if (!event.target.closest('.dropdown')) {
           isDropdownOpen = false;
           document.getElementById('dropdownContent').style.display = 'none';
       }
   });
});