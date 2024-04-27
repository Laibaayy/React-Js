import "./App.css";
import React, { useState } from "react";
import Accord from "./Components/Accord";
function App() {
  let myarray = [
    {
      title: "What is Cyber Security?",
      text: "Cyber security is the process of protecting hardware, software, and data from hackers. The primary purpose of implementing these cyber security techniques is to protect against different cyberattacks such as changing, accessing, or destroying sensitive data. ",
    },
    {
      title: "What are The Main Advantages of Cyber Security?",
      text: "It protects the business against unauthorized access, including ransomware, social engineering, malware, and phishing Protects end-users and improves the business continuity managementImproves stakeholder confidence Provide adequate protection for both data as well as networks Increase recovery time after any breach",
    },
    {
      title: "What Do You Mean By Cryptography?",
      text: "Cryptography is the technique used to protect confidential information from third parties called adversaries. It allows both the sender and receiver of any message to read its details.",
    },
  ];
  const [faqs, setfaqs] = useState(myarray);
  return (
    <div className="Container">
      <h1 className="main">Frequently Asked Question</h1>
      <Accord faqs={faqs} />
    </div>
  );
}

export default App;
