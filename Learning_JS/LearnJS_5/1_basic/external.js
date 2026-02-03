function showMessage() {
    alert("สวัสดีจาก JavaScript!");
}

// เลือกปุ่มจาก id แล้วสั่งให้ทำงานเมื่อมีการคลิก (Click)
document.getElementById("btn").addEventListener("click", showMessage);

console.log("สคริปต์ทำงานแล้ว");