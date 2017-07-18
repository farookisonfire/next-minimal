const HeaderSecondary = () => (
  <div className="header-secondary">
    <h1 className="header-secondary-title">ONE·HEART·SOURCE</h1>
    <style jsx>{`
        .header-secondary {
        text-align: center;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 100%;
        z-index: 1;
      }

      .header-secondary-title {
        font-size: 100px;
        font-weight: 300;
      }
    `}</style>
  </div>
);

export default HeaderSecondary;