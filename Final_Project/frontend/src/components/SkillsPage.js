// SkillsPage.js
import React, { useState } from 'react';
import './SkillsPage.css';

const SkillsPage = () => {
  const [formData, setFormData] = useState({
    technologyName: '',
    proficiency: 5, // Default proficiency value
    projects: '',
    isApproved: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className='login-container'>
      <h2>Add New Skill</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="technologyName">Technology Name:</label>
          <input
            type="text"
            id="technologyName"
            name="technologyName"
            value={formData.technologyName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="proficiency">Proficiency:</label>
          {/* Slider for proficiency */}
          <input
            type="range"
            id="proficiency"
            name="proficiency"
            min="1"
            max="10"
            value={formData.proficiency}
            onChange={handleChange}
          />
          {/* Display current proficiency value */}
          <span>{formData.proficiency}</span>
        </div>
        <div>
          <label htmlFor="projects">Name of Real-time Projects:</label>
          <input
            type="text"
            id="projects"
            name="projects"
            value={formData.projects}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="isApproved">Is Approved:</label>
          <input
            type="checkbox"
            id="isApproved"
            name="isApproved"
            checked={formData.isApproved}
            onChange={(e) =>
              setFormData({ ...formData, isApproved: e.target.checked })
            }
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SkillsPage;
