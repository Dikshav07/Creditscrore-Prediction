import pandas as pd
import pickle
from flask import Flask, request, jsonify

# Load model and scaler
with open("model.pkl", "rb") as model_file:
    best_model = pickle.load(model_file)

with open("scaler.pkl", "rb") as scaler_file:
    scaler = pickle.load(scaler_file)

# Define expected feature order
expected_features = [
    "monthly_income", "monthly_expenses", "credit_card_balance", "loan_balance",
    "on_time_payments", "late_payments", "debt_to_income", "credit_utilization",
    "savings_ratio", "loan_to_income"
]

app = Flask(__name__)

def preprocess_data(user_data):
    """Ensure input data matches expected features before prediction."""
    user_df = pd.DataFrame([user_data])

    # Add missing features with default values
    for col in expected_features:
        if col not in user_df:
            user_df[col] = 0  

    # Ensure correct column order
    user_df = user_df[expected_features]

    # Scale data
    user_df_scaled = scaler.transform(user_df)
    return user_df_scaled

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        processed_data = preprocess_data(data)

        # Predict credit score
        predicted_score = best_model.predict(processed_data)[0]

        return jsonify({"predicted_credit_score": predicted_score})

    except Exception as e:
        return jsonify({"error": str(e)})

if __name__ == '__main__':
    app.run(debug=True)
