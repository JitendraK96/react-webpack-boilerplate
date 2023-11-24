import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar.jsx';
import './Dashboard.css';

const renderMicroComponents = () => {
  return <div className="container">MFE</div>;
};

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />

      {renderMicroComponents()}
    </div>
  );
};

export default Dashboard;
