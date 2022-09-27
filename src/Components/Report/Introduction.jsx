import React from "react";
import styles from "./Introduction.module.css";

const Interaction = () => {
  return (
    <>
      <div className="container my-5">
        <h1 className="my-5">
          <span className="badge" style={{ borderRadius: "0", backgroundColor: "#414141" }}> <span className="me-1 fw-bold" style={{ fontFamily: 'Brush Script MT' }}>A</span>nswer rating introduction</span>
        </h1>
        <div className={styles.para}>
          <p align='justify'>
            Congratulations on completing the virtual interaction on the above subject. This feedback report provides insights on
            your performance as perceived by others in the context of the interaction. The interactions are analyzed by our state
            of art proprietary models and reviewed by expert coaches, where applicable.
          </p>
          <p align='justify'>
            This report is generated by an assessment of the candidate’s interaction with our AI models. It scores them according to the industry
            standards to give a clear idea of where they stand. This report points out the candidate’s strengths and areas of improvement as well.
            This report generates scores in various formats including bar graphs and percentiles. Using this report, an estimate of the candidate’s
            compatibility for the role (as demonstrated by the interaction) can be made.
          </p>
          <p align='justify'>
            While we do calculate absolute scores ( available on request), we convert them into cohorts that demonstrate the relative performance of the
            candidate in comparison with others. (Just like a bell curve, popularly used by HR departments). These cohorts provide an estimate in terms of
            what separates top performers from the rest.
          </p>
          <ol type="a">
            <li>
              <strong>Cohort A :</strong> Top 25% of the candidates.
            </li>
            <li>
              <strong>Cohort B :</strong> Top 50% of the candidates.
            </li>
            <li>
              <strong>Cohort C :</strong> Bottom 50% of the candidates.
            </li>
            <li>
              <strong>Cohort D :</strong> Bottom 25% of the candidates.
            </li>
          </ol>
          <p align='justify'>
            AI development has escalated over the past few years and is being used widely in many fields ranging from security to the fashion industry,
            from medical to agricultural. Emotion and sentiment detection via AI models have matured in recent years with the explosion of advanced speech
            to text, and other text analytics models aided by flawless audio & video capture technology. With HR & human psychology experts we have broken
            down the emotion into more recognizable components - we called them power skills. These power skills form the basic framework of our evaluation.
          </p>
        </div>
      </div>
      {/* </div>
      </div> */}
    </>
  );
};

export default Interaction;
