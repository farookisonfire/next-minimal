const HeaderTertiary = () => (
  <div className="header-tertiary">
    <h1 className="header-tertiary-title">Most Meaningful Global Experience Ever.</h1>
    <style jsx>{`
        .header-tertiary {
        text-align: center;
        position: absolute;
        top: 73%;
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

// original styles
// .header-tertiary {
//         text-align: center;
//         position: absolute;
//         top: 75%;
//         transform: translateY(-50%);
//         width: 100%;
//       }

//       .header-tertiary-title {
//         font-size: 30px;
//         font-weight: 300;
//       }
