import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PlanResult() {
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const [plan, setPlan] = useState([]);

  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
      return;
    }

    const stored = localStorage.getItem(`mealplan_${currentUser.email}`);
    if (stored) {
      setPlan(JSON.parse(stored));
    }
  }, [currentUser, navigate]);

  if (!plan.length) {
    return (
      <div className="min-h-screen page flex items-center justify-center bg-gradient-to-b from-blue-50 to-white">
        <p className="text-gray-500">No meal results found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen page bg-gradient-to-b from-blue-50 to-white px-4 pt-8 pb-28">
      <h2 className="text-2xl font-bold mb-1">Meal Results</h2>
      <p className="text-gray-500 mb-6">
        Based on your search preferences
      </p>

      <div className="space-y-6">
        {plan.map((day) => (
          <div
            key={day.day}
            className="bg-white rounded-2xl shadow p-5"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg font-bold">
                Day {day.day}
              </h3>
              <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
                Suggested
              </span>
            </div>

            {/* Focus */}
            <p className="text-sm text-gray-600 mb-4">
              🔍 Focus: <b>{day.focus}</b>
            </p>

            {/* Meals */}
            <div className="space-y-3">
              {day.meals.map((meal, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 rounded-xl p-3 text-gray-800"
                >
                  {meal}
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="mt-5 flex gap-3">
              <button className="flex-1 bg-blue-50 text-blue-600 py-2 rounded-xl text-sm">
                Swap
              </button>
              <button className="flex-1 bg-red-50 text-red-500 py-2 rounded-xl text-sm">
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Actions */}
      <div className="mt-10 space-y-4">
        <button
          onClick={() => navigate("/generate")}
          className="w-full bg-green-600 text-white py-4 rounded-2xl text-lg shadow-lg"
        >
          Search Again
        </button>

        <button
          onClick={() => navigate("/profile")}
          className="w-full bg-gray-200 text-gray-700 py-3 rounded-xl"
        >
          Update Profile
        </button>
      </div>
    </div>
  );
}
