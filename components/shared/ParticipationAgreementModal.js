import { Component } from 'react';
import { Button, Icon, Modal } from 'semantic-ui-react';

class ParticipationAgreementModal extends Component {
  constructor() {
    super();

    this.state = {
      open: false,
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ open: true });
  }

  closeModal() {
    this.setState({ open: false });
  }

  render() {
    return (
      <Modal
        open={this.state.open}
        basic
        trigger={(
          <p>I have read and agree to the 
            <a
              onClick={this.openModal}
              href="#">
              {' Terms & Conditions '}
            </a>
            of the OHS Participation Agreement
          </p>)}>
        <Modal.Content>
          <Modal.Description>
            <iframe
              title="participation-agreement"
              src="https://drive.google.com/file/d/0BzbaS_y-z_nwa1ZBUF8wSTV1bXM/preview"
              width="100%"
              height="480" />
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={this.closeModal} primary>
            Proceed <Icon name="right chevron" />
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default ParticipationAgreementModal;
