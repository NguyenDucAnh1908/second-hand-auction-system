import { Helmet } from "react-helmet";
import AppraisalFormSection from "./AppraisalFormSection";
import React from "react";

export default function AppraisalFormPage() {
  return (
    <>
      <Helmet>
        <title>Appraisal Form - Detailed Product Assessment</title>
        <meta
          name="description"
          content="Complete the appraisal form with product details, images, and documentation. Ensure accuracy and compliance with safety regulations for a smooth product listing experience."
        />
      </Helmet>
      <div className="w-full bg-bg-white py-[86px] md:py-5">
        {/* appraisal form section */}
        <AppraisalFormSection />
      </div>
    </>
  );
}



