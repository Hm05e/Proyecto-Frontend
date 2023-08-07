// Dashboard.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';
import SalesChart from '../components/SalesChart';

const Dashboard = () => {

  const [salesStats, setSalesStats] = useState({});

  const fetchSalesStats = async () => {

    const token = localStorage.getItem('token');

    const response = await axios.get('/api/stats/sales', {
      headers: {
        Authorization: `Bearer ${token}`  
      }
    });

    const salesData = response.data;

    setSalesStats(salesData);

  };

  useEffect(() => {

    fetchSalesStats();

  }, []);

  return (
    <Row>
      <Col md="6">
        <h2>Estadísticas de Ventas</h2>
        
        <SalesChart 
          data={salesStats}
        />

      </Col>

      <Col md="6">
        {/* más información */}
      </Col>

    </Row>
  );

};

export default Dashboard;