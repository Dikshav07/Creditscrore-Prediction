import pickle

# Load the trained model
with open("model.pkl", "rb") as model_file:
    best_model = pickle.load(model_file)

# Print feature names used in training
print("Expected Features:", best_model.feature_importances_.shape)

with open("scaler.pkl", "rb") as scaler_file:
    scaler = pickle.load(scaler_file)

print("Features Used in Scaling:", scaler.feature_names_in_)
