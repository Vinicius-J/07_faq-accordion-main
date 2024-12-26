const checkboxes = document.querySelectorAll('.checkbox');

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', () =>{
    checkboxes.forEach(otherCheckbox => {
      if (otherCheckbox !== checkbox){
        otherCheckbox.checked = false;
      }
    });
  });
});