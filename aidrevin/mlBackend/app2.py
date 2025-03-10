from flask import Flask, request, jsonify
import pickle
import pandas as pd
import numpy as np

app = Flask(__name__)

# Load the trained ML model and scaler
with open("model.pkl", "rb") as model_file:
    best_model = pickle.load(model_file)

with open("scaler.pkl", "rb") as scaler_file:
    scaler = pickle.load(scaler_file)

# Define feature names based on training data
features = [
    "monthly_income", "monthly_expenses", "credit_card_balance", "loan_balance",
    "on_time_payments", "late_payments", "debt_to_income", "credit_utilization",
    "savings_ratio", "loan_to_income"
]

# Function to predict credit score
def predict_credit_score(user_data):
    user_df = pd.DataFrame([user_data])
    
    # Ensure all expected features exist
    for col in features:
        if col not in user_df:
            user_df[col] = 0  # Default to zero if missing
    
    user_df = user_df[features]  # Ensure correct column order
    user_df_scaled = scaler.transform(user_df)  # Scale the data
    return best_model.predict(user_df_scaled)[0]  # Return predicted score

# Function to simulate credit score improvements
def simulate_action(user_data, action):
    simulated_data = user_data.copy()

    if action == "Pay off credit card balance":
        simulated_data["credit_card_balance"] = 0
    elif action == "Reduce loan balance by 50%":
        simulated_data["loan_balance"] *= 0.5
    elif action == "Increase on-time payments":
        simulated_data["on_time_payments"] += 2
    elif action == "Reduce late payments":
        simulated_data["late_payments"] = max(0, simulated_data["late_payments"] - 1)
    
    # Recalculate ratios
    simulated_data["debt_to_income"] = (simulated_data["credit_card_balance"] + simulated_data["loan_balance"]) / (simulated_data["monthly_income"] + 1)
    simulated_data["credit_utilization"] = simulated_data["credit_card_balance"] / (simulated_data["monthly_income"] + 1)
    simulated_data["savings_ratio"] = (simulated_data["monthly_income"] - simulated_data["monthly_expenses"]) / (simulated_data["monthly_income"] + 1)
    simulated_data["loan_to_income"] = simulated_data["loan_balance"] / (simulated_data["monthly_income"] + 1)
    
    return simulated_data

# Function to generate personalized credit improvement suggestions
def generate_tips(user_data):
    tips = []

    if user_data["credit_utilization"] > 0.3:
        tips.append("Reduce your credit card balance to lower utilization.")
    
    if user_data["late_payments"] > 1:
        tips.append("Make on-time payments to improve your payment history.")
    
    if user_data["debt_to_income"] > 0.4:
        tips.append("Lower your debt-to-income ratio by paying off some debt.")

    if user_data["savings_ratio"] < 0.2:
        tips.append("Increase your savings to maintain better financial stability.")
    
    if not tips:
        tips.append("You're on the right track! Keep managing your finances well.")

    return tips

# API Endpoint to improve credit score
@app.route("/improve_score", methods=["POST"])
def improve_score():
    try:
        user_data = request.json  # Get user data from request
        
        # Predict current credit score
        current_score = predict_credit_score(user_data)

        # Define improvement actions
        actions = ["Pay off credit card balance", "Reduce loan balance by 50%", "Increase on-time payments", "Reduce late payments"]
        
        # Simulate actions and find the best improvement
        best_improvement = None
        best_new_score = current_score

        for action in actions:
            simulated_data = simulate_action(user_data, action)
            new_score = predict_credit_score(simulated_data)

            if new_score > best_new_score:
                best_new_score = new_score
                best_improvement = action

        # Generate personalized tips
        tips = generate_tips(user_data)

        response = {
            "current_credit_score": round(current_score, 2),
            "best_improvement_action": best_improvement,
            "new_predicted_score": round(best_new_score, 2),
            "personalized_tips": tips
        }

        return jsonify(response), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 400

# Health Check Endpoint
@app.route("/health", methods=["GET"])
def health_check():
    return jsonify({"status": "API is running"}), 200

# Get Default Credit Tips
@app.route("/default_tips", methods=["GET"])
def default_tips():
    tips = [
        "Reduce your credit card balance to lower utilization.",
        "Make on-time payments to improve your payment history.",
        "Lower your debt-to-income ratio by paying off some debt.",
        "Increase your savings to maintain better financial stability."
    ]
    return jsonify({"default_tips": tips}), 200

if __name__ == "__main__":
    app.run(debug=True)
