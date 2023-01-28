import React from 'react';
import Survey from "../../components/survey/survey.jsx";

const SurveyPage = () => {
    return (
        <main>
            <article>
                <h2>ОПРОС</h2>
                <p>Просим Вас принять участие в опросе, это не займет много времени</p>
                <Survey />
            </article>
        </main>
    );
};

export default SurveyPage;
