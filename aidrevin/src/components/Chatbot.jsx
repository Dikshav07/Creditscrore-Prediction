import { useState } from "react";
import "./Chatbot.css";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const responses = {
    "hi": "Hello! Hope you're having a great day. How can I assist you with your finances?",
    "hello": "Hi there! Your financial assistant is here to help. 😊",
    "how are you": "I'm doing great! Your financial assistant is always ready to help. 😊",
    "where can i check my finance score": "You can check your credit score on the Dashboard. Just log in to see the latest updates!",
    "what new updates for women": "Standard Chartered Bank has introduced various policies to support women financially. Check our website for exclusive benefits!",
    "how to improve my credit score": "Improving your credit score requires timely payments, keeping your credit utilization low, and maintaining a good credit history. Need more help? I'm here!",
    "can i get a loan with a low credit score": "Yes! There are special loan options available. Consider secured loans or improving your score for better rates.",
    "how can i get financial guidance": "You can attend our financial literacy workshops or talk to one of our financial advisors!",
    
    // New responses
    "what is a good credit score": "A credit score above 700 is considered good, while 750+ is excellent. Aim for higher scores to get better loan and credit card offers!",
    "what happens if i miss a loan payment": "Missing a loan payment can lower your credit score and lead to penalties. It's best to set reminders or automate payments to avoid this.",
    "does checking my credit score lower it": "No, checking your own credit score (a soft inquiry) does not lower it. However, multiple hard inquiries from lenders can have a small impact.",
    "how can i increase my credit limit": "You can request a credit limit increase from your bank, but ensure your income and repayment history support it.",
    "are there special loan schemes for women": "Yes! We offer special business and personal loans for women with lower interest rates and flexible repayment options. Contact us for more info!",
    "how to build credit from scratch": "Start with a secured credit card, pay bills on time, and keep your credit utilization low. Over time, your score will improve!",
    "how can i reduce my credit card debt": "Try the snowball or avalanche method: pay off high-interest debts first, or clear small debts to build momentum!",
    "is it safe to take a loan online": "Yes, but always apply through trusted banks and financial institutions to avoid scams.",
    "what is the best way to save money": "Budget wisely, cut unnecessary expenses, invest wisely, and always have an emergency fund!",
    "what are the benefits of a high credit score": "A high credit score helps you secure lower interest rates, better loan options, and higher credit limits!",
    "what is financial literacy": "Financial literacy is understanding how money works—saving, investing, credit management, and making informed financial decisions.",
    "can i get a credit card with no credit history": "Yes, you can apply for a secured credit card or starter credit cards designed for beginners.",
    "how do banks calculate interest on loans": "Interest is calculated based on your principal amount, tenure, and interest rate. Some loans use compound interest, while others use simple interest.",
    "should i take a personal loan or credit card loan": "It depends! Personal loans have fixed EMIs, while credit card loans can have high interest. Choose based on your repayment ability.",
    "how can i protect myself from financial fraud": "Never share your OTPs or account details, use strong passwords, and be cautious of phishing scams!",
    "why is my credit score not increasing": "It could be due to missed payments, high credit utilization, or errors in your credit report. Regularly check and manage your finances wisely!"
  };

  const sendMessage = () => {
    if (!message.trim()) return;

    const lowerCaseMessage = message.toLowerCase();
    const botResponse = responses[lowerCaseMessage] || "I'm not sure about that. Try asking about credit scores, finance tips, or banking services!";
    setResponse(botResponse);
    setMessage("");
  };

  return (
    <div>
      <button className="chatbot-button" onClick={() => setIsOpen(!isOpen)}>💬</button>

      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h3>Chat with Us</h3>
            <button className="close-button" onClick={() => setIsOpen(false)}>×</button>
          </div>
          <div className="chatbot-body">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask about your credit score, financial guidance, or loans..."
              rows="4"
              cols="30"
            />
            <button className="send-button" onClick={sendMessage}>Send</button>
            <div className="chatbot-response">
              <strong>Response:</strong>
              <p>{response}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;