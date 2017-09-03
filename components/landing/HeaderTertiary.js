const HeaderTertiary = () => (
  <div className="header-tertiary">
    <h1 className="header-tertiary-title">Most Meaningful Global Experience Ever.</h1>
    <style jsx>{`
        .header-tertiary {
        text-align: center;
        position: absolute;
        top: 72%;
        transform: translateY(-50%);
        width: 100%;
        color: white;
      }

      .header-tertiary-title {
        font-size: 22px;
        font-weight: 300;
      }

      @media (max-width: 768px) {
        .header-tertiary {
          top: 45%;
          color: black;
        }
      }
    `}</style>
  </div>
);

export default HeaderTertiary;
