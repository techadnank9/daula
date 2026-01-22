import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import './InsuranceCard.css';

const InsuranceCard = () => {

  const idCardRef = useRef(null);

  const downloadImage = async () => {
    const element = idCardRef.current;
    const canvas = await html2canvas(element, {
      scale: 2,
      backgroundColor: "#f4f1ea"
    });

    const data = canvas.toDataURL('image/png');
    const link = document.createElement('a');

    link.href = data;
    link.download = 'Insurance-ID-Card.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="id-card-section">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3 className="section-title">Insurance ID Card</h3>
        <button onClick={downloadImage} className="download-btn">
          Download ID Card
        </button>
      </div>
      <div className="id-card" ref={idCardRef}>
        <div className="id-card-header">
          <div className="id-logo-area">
            <span className="id-brand">GEICO AI</span>
            <div className="id-company-details">
              <p>GEICO PROTECTION INSURANCE COMPANY</p>
              <p>PO BOX 9506</p>
              <p>Fredericksburg, VA 22403-9506</p>
            </div>
          </div>
          <div className="id-naic">
            <p>NAIC</p>
            <p className="naic-number">17511</p>
          </div>
        </div>

        <div className="id-phone">1-800-841-3000</div>
        <div className="id-title">California Evidence of Liability Insurance</div>

        <div className="id-grid">
          <div className="id-grid-item">
            <label>Policy Number</label>
            <p>6237749699</p>
          </div>
          <div className="id-grid-item">
            <label>Effective Date</label>
            <p>12/26/2025</p>
          </div>
          <div className="id-grid-item">
            <label>Expiration Date</label>
            <p>06/26/2026</p>
          </div>
        </div>

        <div className="id-insured">
          <div className="insured-label">Insured</div>
          <div className="insured-details">
            <p>Dulat Akan</p>
            <p>2233 N 1St St</p>
            <p>Fresno CA 93703</p>
          </div>
        </div>

        <div className="id-vin-row">
          <label>VIN</label>
          <p>1N4AL3AP5FC440513</p>
        </div>

        <div className="id-grid car-details">
          <div className="id-grid-item">
            <label>Year</label>
            <p>2015</p>
          </div>
          <div className="id-grid-item">
            <label>Make</label>
            <p>NISSAN</p>
          </div>
          <div className="id-grid-item">
            <label>Model</label>
            <p>ALTIMA</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsuranceCard;
