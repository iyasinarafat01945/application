function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let reason = document.getElementById("reason").value;

  // Check if all required fields are filled
  if (name === "" || email === "" || phone === "" || reason === "") {
    alert("অনুগ্রহ করে সব ফিল্ড পূরণ করুন।");
    return false;
  }

  // Optionally, you can add more validation here, like email format or phone number length
  alert("ধন্যবাদ! আপনার আবেদন সফলভাবে জমা দেওয়া হয়েছে।");
  return true;
}
