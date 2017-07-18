import { Breadcrumb } from 'semantic-ui-react';

const AdmissionsStep = () => (
  <div className="admissions-step">
    <Breadcrumb size='mini'>
      <Breadcrumb.Section active>Opportunities</Breadcrumb.Section>
      <Breadcrumb.Divider icon='right arrow' />
      <Breadcrumb.Section link>Cost</Breadcrumb.Section>
      <Breadcrumb.Divider icon='right arrow' />
      <Breadcrumb.Section link>Dates</Breadcrumb.Section>
      <Breadcrumb.Divider icon='right arrow' />
      <Breadcrumb.Section link>Apply</Breadcrumb.Section>
    </Breadcrumb>
    <style jsx>{`
        .admissions-step {
        padding-top: 50px;
        text-align: center;
        margin-bottom: 20px;
      }
      
      .active.section {
        border: none;
        font-weight: bold;
      }
    `}</style>
  </div>
);

export default AdmissionsStep;