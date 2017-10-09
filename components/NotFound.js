const NotFound = () => {
  return (
    <div>
      <div className="not-found-page-header">
        <h1>
          Validating Your Credentials
        </h1>
        <p>This may take a few moments. If you have any questions, please contact our team at admissions@oneheartsource.org</p>
        <a href="/" className="go-home-button">
          Go Home
        </a>
      </div>
      <style jsx>{`
        .not-found-page-header {
          width: 85%;
          margin-left: auto;
          margin-right: auto;
          margin-top: 100px;
          margin-bottom: 50px;
        }
        
        h1 {
          font-weight: 300;
          font-size: 36px;
          margin-bottom: 20px;
        }

        p {
          color: rgba(34,34,34,.7);
          font-size: 16px;
          margin-bottom: 30px;
        }

        .go-home-button {
          transition: 1s;
          padding: 15px 20px;
          color: white;
          cursor: pointer;
          background: rgb(250,95,91);
        }
      `}</style>
    </div>
  );
};

export default NotFound;
