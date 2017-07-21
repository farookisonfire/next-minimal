import { Input } from 'semantic-ui-react'
import { Grid } from 'semantic-ui-react';

const DonateForm = () => (
  <div>
    <Grid stackable columns={2}>
      <Grid.Row>
        <Input className="donate-input" placeholder="Card Holder Name"/> <br />
        <Input className="donate-input" placeholder="Email"/> <br />
      </Grid.Row>
      <Grid.Row>
        <Input className="donate-input" placeholder="Billing Address Line 1"/> <br />
        <Input className="donate-input" placeholder="Billing Address Line 2"/> <br />
      </Grid.Row>
      <Grid.Row>
        <Input className="donate-input" placeholder="City"/> <br />
        <Input className="donate-input" placeholder="State/Province"/> <br />
      </Grid.Row>
      <Grid.Row>
        <Input className="donate-input" placeholder="Country"/> <br />
        <Input className="donate-input" placeholder="Zip/Postal Code"/>
      </Grid.Row>
    </Grid>
  </div>
)

export default DonateForm;