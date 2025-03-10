import React, { useState } from "react";
import { getCreditScorePrediction } from "../../api/ml"; // Use API function
import "./CreditScoreForm.css";

const CreditScoreForm = () => {
  const [formData, setFormData] = useState({
    monthly_income: "",
    monthly_expenses: "",
    credit_card_balance: "",
    loan_balance: "",
    on_time_payments: "",
    late_payments: "",
  });

  const [predictionData, setPredictionData] = useState(null);
  const [error, setError] = useState(null); // State for error messages

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const calculateDerivedValues = (data) => {
    const income = parseFloat(data.monthly_income) || 1;
    const expenses = parseFloat(data.monthly_expenses) || 0;
    const creditCardBalance = parseFloat(data.credit_card_balance) || 0;
    const loanBalance = parseFloat(data.loan_balance) || 0;
    const onTimePayments = parseFloat(data.on_time_payments) || 0;
    const latePayments = parseFloat(data.late_payments) || 0;

    return {
      monthly_income: income,
      monthly_expenses: expenses,
      credit_card_balance: creditCardBalance,
      loan_balance: loanBalance,
      on_time_payments: onTimePayments,
      late_payments: latePayments,
      debt_to_income: (creditCardBalance + loanBalance) / income,
      credit_utilization: creditCardBalance / income,
      savings_ratio: (income - expenses) / income,
      loan_to_income: loanBalance / income,
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Clear previous errors

    const computedData = calculateDerivedValues(formData);
    try {
      const res = await getCreditScorePrediction(computedData); // ✅ Using API function
      console.log("Prediction Data:", res);
      setPredictionData(res);
    } catch (err) {
      console.error("Error fetching prediction:", err);
      setError(err || "Something went wrong");
    }
  };

  return (
    <div className="container">
      <h2>Credit Score Predictor</h2>
      <form onSubmit={handleSubmit}>
        {Object.keys(formData).map((key) => (
          <div className="form-group" key={key}>
            <label>{key.replace(/_/g, " ")}</label>
            <input
              type="number"
              name={key}
              value={formData[key]}
              onChange={handleChange}
              required
            />
          </div>
        ))}
        <button type="submit">Predict</button>
      </form>
      {error && <p className="error-message">{error}</p>} {/* Display Errors */}
      {predictionData && (
        <div className="prediction-results">
          <h3>Prediction Results</h3>
          <p>
            <strong>Current Credit Score:</strong>{" "}
            {predictionData.current_credit_score}
          </p>
          <p>
            <strong>Best Improvement Action:</strong>{" "}
            {predictionData.best_improvement_action || "No improvement needed"}
          </p>
          <p>
            <strong>New Predicted Score:</strong>{" "}
            {predictionData.new_predicted_score}
          </p>
          <h4>Personalized Tips:</h4>
          <ul>
            {predictionData.personalized_tips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CreditScoreForm;
