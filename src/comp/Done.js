// Done.js
import React from 'react';
import './Done.css'; // استيراد الأنماط من ملف CSS

const Done = () => {
  return (
    <div className="done-container">
      <h1 className="done-header">Thank You!</h1>
      <p className="done-message">
   <p> We have received your videos, and they are now in our possession.</p>
  <p>  They will be published after review. Please feel free to reach out to us,</p>
   <p> and we will respond as soon as possible.</p>
  <p> +964  7734977237</p>
  <p>f7623170@gmail.com</p></p>


      
      {/* إضافة الصورة هنا */}
      <img src="../Done.png" alt="Submission Success" className="done-image" />
    </div>
  );
};

export default Done;