import { Breadcrumb } from 'semantic-ui-react';

const AdmissionsStep = () => (
  <div className="admissions-step">
    <Breadcrumb size="mini">
      <Breadcrumb.Section active>Opportunities</Breadcrumb.Section>
      <Breadcrumb.Divider icon="right arrow" />
      <Breadcrumb.Section><a href="#cost">Cost</a></Breadcrumb.Section>
      <Breadcrumb.Divider icon="right arrow" />
      <Breadcrumb.Section><a href="#dates">Dates</a></Breadcrumb.Section>
      <Breadcrumb.Divider icon="right arrow" />
      <Breadcrumb.Section><a href="#apply">Apply</a></Breadcrumb.Section>
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
