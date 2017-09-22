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
        <h1>{`We can't wait to meet you, ${name}!`}</h1>
        <p>When you donate to One Heart Source, you are supporting our mission to eliminate poverty through high quality global initiatives focused on education and health. We appreciate your support!</p>
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
