const HeaderSecondary = () => (
  <div className="header-secondary">
    <h1 className="header-secondary-title">ONE HEART SOURCE</h1>
    <style jsx>{`
        .header-secondary {
        text-align: center;
        position: absolute;
        top: 65%;
        transform: translateY(-50%);
        width: 100%;
        z-index: 1;
        color: white;
      }

      .header-secondary-title {
        font-size: 48px;
        font-weight: 300;
      }

      @media (max-width: 768px) {
        .header-secondary {
          top: 35%;
          color: black;
        }

        .header-secondary-title {
          font-size: 30px;
          font-weight: 500;
        }
      }
    `}</style>
  </div>
);

export default HeaderSecondary;
