import './Claim.css';

const Claims = ({ onComplete }) => {
    return (
        <div className="form-view">
            <h2 className="title">File a New Claim</h2>
            <p className="subtitle">Please provide details about the incident.</p>

            <form className="claims-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                    <label>Incident Type</label>
                    <select className="form-input">
                        <option>Collision</option>
                        <option>Theft</option>
                        <option>Windshield/Glass</option>
                        <option>Natural Disaster</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Date of Incident</label>
                    <input type="date" className="form-input" />
                </div>

                <div className="form-group">
                    <label>Location</label>
                    <input type="text" className="form-input" placeholder="City, State" />
                </div>

                <div className="form-group">
                    <label>Description</label>
                    <textarea className="form-input" rows="4" placeholder="Describe what happened..."></textarea>
                </div>

                <div className="form-group">
                    <label>Upload Photos</label>
                    <div className="photo-upload-placeholder">
                        <span>📷 Tap to add photos</span>
                    </div>
                </div>

                <button type="submit" className="submit-claim-btn" onClick={() => { alert("Claim Submitted!"); onComplete(); }}>
                    Submit Claim
                </button>
            </form>
        </div>
    );
};

export default Claims;
