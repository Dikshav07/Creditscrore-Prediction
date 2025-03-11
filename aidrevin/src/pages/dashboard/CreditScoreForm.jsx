import React, { useState } from "react";
import { getCreditScorePrediction } from "../../api/ml";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // ✅ Import toast styles
import "./CreditScoreForm.css";

const CreditScoreForm = ({ setPredictionData }) => {
  const [formData, setFormData] = useState({
    monthly_income: "",
    monthly_expenses: "",
    credit_card_balance: "",
    loan_balance: "",
    on_time_payments: "",
    late_payments: "",
  });

  const [error, setError] = useState(null);

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
    setError(null);

    const computedData = calculateDerivedValues(formData);
    try {
      const res = await getCreditScorePrediction(computedData);
      console.log("Prediction Data:", res);

      setPredictionData({
        ...res,
        best_improvement_action: res?.best_improvement_action || "No improvement needed",
        personalized_tips: res?.personalized_tips || ["No personalized tips available"],
      });

      // ✅ Success toast
      toast.success("🎉 Credit Score Predicted Successfully!", {
        position: "top-right",
        autoClose: 3000, // Close after 3 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (err) {
      console.error("Error fetching prediction:", err);
      setError(err || "Something went wrong");

      // ❌ Error toast
      toast.error("⚠ Failed to fetch prediction. Please try again.", {
        position: "top-right",
        autoClose: 3000,
      });
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
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default CreditScoreForm;
