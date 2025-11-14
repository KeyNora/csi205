import React from 'react';
import './Home.css'; 

const Home = () => {
  return (
    <div className="home-container">
      <div className="profile-card">
        
        <img 
          src="Keyyes.gif" 
          alt="รูปโปรไฟล์ของกฤษฎา"
          className="profile-pic"
        />
        
        <h1 className="profile-name">ณัฐวุฒิ นรสาร (คีย์)</h1>
        <p className="student-id">รหัสนักศึกษา: 67130389</p>
        
        <div className="education-info">
          <p>ชั้นปีที่ 2</p>
          <p>สาขาวิทยาการคอมพิวเตอร์ ( การพัฒนาซอฟต์แวร์ Fullstack )</p>
          <p>คณะเทคโนโลยีสารสนเทศ </p>
          <p>บางครั้งมนุษย์เราก็ต้องพึงพาในสัญชาตญาณ บางทีความรู้เพียงเสี้ยวอาจชักนำให้ใจเราเลือกทางที่ถูกต้อง </p>
          <p>หลายครั้งเราเองก็ต้องเลือกเดินไปบนทางมืด ๆ โดยไม่มีเเสงไฟฉาย</p>
          <p>ทางข้างหน้าอาจไกลหรือใกล้</p>
          <br />
          <p>ผมอายุ 20 เกิดเดือนกรกฎาคม ในวันที่ 3 เลือดกรุ๊ปเอ เเละเชื่อเรื่อง ฮวงจุ๊ย</p>
          
        </div>
        

      </div>
    </div>
  );
}

export default Home;

