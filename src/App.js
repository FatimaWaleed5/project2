import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TrainerForm from './comp/TrainerForm';
import ProfileForm from './comp/ProfileForm'; 
import Done from './comp/Done';

function App() {
  const [role, setRole] = useState(''); 
  const [submitted, setSubmitted] = useState(false); 

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleSubmit = (role) => {
    setSubmitted(true);
    setRole(role);
  };

  return (
    <Router>
      <div className="container">
        <Routes>
          <Route 
            path="/" 
            element={!submitted ? (
              <ProfileForm handleRoleChange={handleRoleChange} onSubmit={handleSubmit} />
            ) : (
              role === 'Trainer' ? (
                <TrainerForm /> // عرض TrainerForm إذا كان الدور "مدرب"
              ) : (
                <div>

                "Thank you, your information has been registered."</div> // عرض رسالة الشكر إذا كان الدور "طالب"
              )
            )} 
          />
          <Route path="/Done" element={<Done />} /> {/* يمكنك الاحتفاظ بها في حال احتجتها لاحقًا */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
