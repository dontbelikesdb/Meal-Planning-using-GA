import React, { useState } from "react";
import { generatePlan } from "../api/planApi";

export default function GeneratePlan() {
  const [userId, setUserId] = useState("");

  const generate = async () => {
    try {
      const res = await generatePlan({ user_id: Number(userId), days: 1 });
      alert("Plan started: " + res.data.plan_id);
    } catch (err) {
      console.error(err);
      alert("Error generating plan");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Generate Plan</h2>
      <input placeholder="User ID" value={userId} onChange={e => setUserId(e.target.value)} /><br/>
      <button onClick={generate}>Generate</button>
    </div>
  );
}
