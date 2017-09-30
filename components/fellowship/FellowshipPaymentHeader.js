import { Divider } from 'semantic-ui-react';

const SecureHeader = (props) => {
  const {
    name = '',
  } = props;

  return (
    <div>
      <div className="secure-header">
        <h1>Secure Your Position</h1>
        <Divider />
      </div>
      <div className="secure-subheader">
        <h1>Fellowship 2018</h1>
        <p>{`Welcome back, ${name}! We are honored to have you on our global team once more.`}</p>
      </div>
      <style jsx>{`
      .secure-header h1 {
        font-weight: 300;
        font-size: 36px;
        margin-bottom: 20px;
      }

      .secure-subheader h1 {
        margin-top: 30px;
        font-weight: 300;
        font-size: 24px;
      }

      .secure-subheader p {
        color: rgba(34,34,34,.7);
        font-size: 16px;
        margin-bottom: 30px;
      }  
      `}</style>
    </div>
  );
};

export default SecureHeader;
