const btn = document.getElementById('btn');

btn.addEventListener('click', function onClick() {
  btn.style.backgroundColor = 'salmon';
  btn.style.color = 'white';
});

function  Pack_Your_Bags() {
  // Change 'new_page.html' to the URL of your new page
  window.location.href = 'Pack_Your_Bags.html';
}


document.getElementById("packButton").addEventListener("click", function() {
  var form = document.getElementById("shippingForm");
  var formData = new FormData(form);
  
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "send_email.php", true);
  xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
          alert(xhr.responseText);
      }
  };
  xhr.send(formData);
});

