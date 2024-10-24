import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // استيراد useNavigate
import './TrainerForm.css';

const TrainerForm = () => {
  const navigate = useNavigate(); // إنشاء دالة لتوجيه المستخدم
  const [message, setMessage] = useState(''); // حالة لتخزين رسالة الشكر

  const handleSubmit = (e) => {
    e.preventDefault(); // منع الإرسال الافتراضي للنموذج
    setMessage('شكراً! تم استلام بياناتك بنجاح.'); // تعيين رسالة الشكر
    setTimeout(() => {
      navigate('/done'); // توجيه المستخدم إلى صفحة Done بعد 3 ثوانٍ
    }, 3000); // تأخير التوجيه لمدة 3 ثوانٍ
  };

  return (
    <div className="trainer-page">
      <div className="trainer-form-container">
        <div className="transparent-box">
          <div className="form-section">
            <form onSubmit={handleSubmit}> {/* إضافة دالة handleSubmit */}
              <h2><label>Trainer Profile</label></h2>

              <div className="form-group">
                <label>Trainer Name:</label>
                <input type="text" placeholder="Enter your name" required />
              </div>

              <div className="form-group">
                <label>Course Category:</label>
                <select>
                  <option value="Technical">Technical</option>
                  <option value="Soft Skills">Soft Skills</option>
                  <option value="Creative Skills">Creative Skills</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                </select>
              </div>

              <div className="form-group">
                <label>Course Description:</label>
                <textarea rows="4" placeholder="Enter course description"></textarea>
              </div>

              <div className="form-group">
                <label>Upload the Link Lecture:</label>
                <input type="text" placeholder="Upload your link" />
              </div>

              <div className="form-group">
                <button type="button" className="upload-btn">
                  <i className="fa fa-cloud-upload" aria-hidden="true"></i> Upload your link
                </button>
              </div>
              <br />

              <div className="form-group">
                <button type="submit" className="submit-btn">Submit</button>
                {/* عرض رسالة الشكر بعد الإرسال */}
                {message && <div className="success-message">{message}</div>}
              </div>
            </form>
          </div>

          <div className="image-section">
            <img src="../Teach.png" alt="Description" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainerForm;
