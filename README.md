# Meal-Planning-using-GA
Constraint-based meal planning using Genetic Algorithms (focusing on Indian Cuisine)
🍽️ AI-Powered Constraint-Based Meal Planning Web App

Personalized nutrition planning using Genetic Algorithms (GA), Medical Guidelines, and Recipe Datasets

This project is a full-stack web application that generates personalized, health-constrained meal plans using a Genetic Algorithm engine, real nutrition data, and recipe metadata (inspired by the MealRec+ SIGIR dataset you uploaded).

✨ Built with:

🟦 React — Modern frontend

🟥 FastAPI — Lightweight, fast Python backend

🟨 Python GA Engine — Constraint-based GA for meal planning

🟩 PostgreSQL + Redis — Robust data & caching layer

🐳 Docker — Full development & deployment environment

🚀 Features
🧑‍⚕️ Personalized Nutrition

User inputs: height, weight, age, activity level, medical restrictions

Dietary preferences & allergies

Auto-computed nutrition needs (BMR, TDEE, macros)

🧬 Genetic Algorithm Meal Planner

Multi-objective fitness:

Nutrition score

Medical constraints

Healthiness (FSA/WHO score)

Calorie balance

Mutation/crossover for recipe optimization

Supports multi-day plans

🍲 Smart Recipe System

Recipe dataset ingestion (including meal-course mapping)

Nutrition analysis (calories, macros, sodium, sugar…)

FSA/WHO scoring system

📊 Interactive UI

Meal plan dashboard

Nutrition charts

Replace/regenerate meals

Fully responsive

☁️ Ready for Deployment

Dockerized multi-service environment

CI/CD friendly

Works on AWS/GCP/Render/Railway
