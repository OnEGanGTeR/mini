document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // ส่งข้อมูลไปยังเซิร์ฟเวอร์ (ในที่นี้จะเป็นการแสดงข้อมูลที่คอนโซล)
    console.log("ชื่อ-สกุล: " + fullName);
    console.log("อีเมล: " + email);
    console.log("รหัสผ่าน: " + password);

    // แสดงข้อความยืนยันลงทะเบียน
    document.getElementById("message").innerText = "ลงทะเบียนสำเร็จแล้ว!";
});

// function exportToExcel(data) {
    // สร้างข้อมูลสำหรับ CSV
    // var csvContent = "data:text/csv;charset=utf-8,";
    // csvContent += "ชื่อ-สกุล,อีเมล,รหัสผ่าน\n"; // เพิ่มหัวข้อคอลัมน์

    // data.forEach(function(row) {
        // csvContent += row.fullName + "," + row.email + "," + row.password + "\n"; // เพิ่มข้อมูลแต่ละแถว
    // });

    // สร้างลิงก์สำหรับดาวน์โหลดไฟล์ CSV
//     var encodedUri = encodeURI(csvContent);
//     var link = document.createElement("a");
//     link.setAttribute("href", encodedUri);
//     link.setAttribute("download", "user_data.csv");
//     document.body.appendChild(link); // ใช้งานกับ Firefox
//     link.click();
// }

// ตัวอย่างข้อมูลที่จะเก็บ
// var users = [
//     { fullName: "John Doe", email: "john@example.com", password: "password1" },
//     { fullName: "Jane Doe", email: "jane@example.com", password: "password2" },
//     // เพิ่มข้อมูลเพิ่มเติมได้ตามต้องการ
// ];

// // เรียกใช้ฟังก์ชันสำหรับสร้างไฟล์ Excel
// exportToExcel(users);


document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // ส่งข้อมูลไปยังเซิร์ฟเวอร์ (ในที่นี้จะเป็นการแสดงข้อมูลที่คอนโซล)
    console.log("ชื่อ-สกุล: " + fullName);
    console.log("อีเมล: " + email);
    console.log("รหัสผ่าน: " + password);

    // เก็บข้อมูลลงในอาร์เรย์
    var userData = { fullName: fullName, email: email, password: password };
    users.push(userData); // เพิ่มข้อมูลลงในอาร์เรย์ users

    // แสดงข้อความยืนยันลงทะเบียน
    document.getElementById("message").innerText = "ลงทะเบียนสำเร็จแล้ว!";

    // เรียกใช้ฟังก์ชันสำหรับสร้างไฟล์ Excel ด้วยข้อมูลผู้ใช้งาน
    exportToExcel(users);
});