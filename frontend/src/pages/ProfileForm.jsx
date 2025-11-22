import React, { useState } from "react";
import { saveProfile } from "../api/profileApi";

export default function ProfileForm() {
  const [form, setForm] = useState({
    name: "",
    age: "",
    height_cm: "",
    weight_kg: "",
    allergies: "",
  });

  const submit = async (e) => {
    e.preventDefault();

    const payload = {
      name: form.name,
      age: Number(form.age),
      height_cm: Number(form.height_cm),
      weight_kg: Number(form.weight_kg),
      allergies: form.allergies.split(",").map((x) => x.trim()),
    };

    try {
      const res = await saveProfile(payload);
      alert("Saved! User ID: " + res.data.user_id);
    } catch (err) {
      console.error(err);
      alert("Error saving profile");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Create Profile</h2>
      <form onSubmit={submit}>
        <input placeholder="Name" onChange={(e)=>setForm({...form, name:e.target.value})} /><br/>
        <input placeholder="Age" onChange={(e)=>setForm({...form, age:e.target.value})} /><br/>
        <input placeholder="Height (cm)" onChange={(e)=>setForm({...form, height_cm:e.target.value})} /><br/>
        <input placeholder="Weight (kg)" onChange={(e)=>setForm({...form, weight_kg:e.target.value})} /><br/>
        <input placeholder="Allergies (comma separated)" onChange={(e)=>setForm({...form, allergies:e.target.value})} /><br/>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
