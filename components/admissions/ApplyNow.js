const ApplyNow = () => (
  <div className="apply-now-header" id="apply">
    <a href="https://oneheartsource.typeform.com/to/tU0wcN?refcode=webadmissions" className="apply-now-button">Apply Now</a>
    <style jsx>{`
      .apply-now-header {
        text-align: center;
        margin-top: 70px;
        margin-bottom: 70px;
      }
      .apply-now-button {
        cursor: pointer;
        font-size: 40px;
        font-weight: 300;
        text-align: center;
        padding-left: 24px;
        padding-right: 24px;
        padding-top: 16px;
        padding-bottom: 16px;
        color: #FB605B;
        transition-duration: 1s;
        border: 1px solid rgba(51,51,51,1);

      }

      .apply-now-button:hover {
        background-color: rgba(250,95,91,1);
        border: 1px solid #FB605B;
        border-radius: 4px;
        color: white;
      }
    `}</style>
  </div>
);

export default ApplyNow;