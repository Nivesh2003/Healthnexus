import cbc from './img/cbc-blood-test.jpg'
import liver from './img/liver-test.webp'
import kidney from './img/kft.jpg'
import vitamin from './img/v-d.webp'
import fullBody from './img/f-body.png'
import thyroid from './img/thp.avif'
import liquid from './img/lp.jpg'
import diabetes from './img/Diabetes.webp'
import c1 from './img/c-1.webp'
import c2 from './img/c-2.webp'
import c3 from './img/c-3.png'
import c4 from './img/c-4.avif'


const tests = [
  {
    "id": 1,
    "name": "Complete Blood Count (CBC)",
    "description": "Basic blood test to check overall health",
    "price": 350,
    "turnaround": "24-48 hrs",
    "image": [cbc]
  },
  {
    "id": 2,
    "name": "Liver Function Test (LFT)",
    "description": "Checks liver enzymes and function",
    "price": 550,
    "turnaround": "24-48 hrs",
    "image": [liver]
  },
  {
    "id": 3,
    "name": "Kidney Function Test (KFT)",
    "description": "Assess kidney health",
    "price": 450,
    "turnaround": "24-48 hrs",
    "image": [kidney]
  },
  {
    "id": 4,
    "name": "Thyroid Profile",
    "description": "Thyroid stimulating and related hormones",
    "price": 700,
    "turnaround": "48-72 hrs",
    "image": [thyroid]
  },
  {
    "id": 5,
    "name": "Lipid Profile",
    "description": "Cholesterol and triglycerides",
    "price": 600,
    "turnaround": "24-48 hrs",
    "image": [liquid]
  },
  {
    "id": 6,
    "name": "Diabetes (HbA1c)",
    "description": "Glycated hemoglobin for blood sugar control",
    "price": 500,
    "turnaround": "24-48 hrs",
    "image": [diabetes]
  },
  {
    "id": 7,
    "name": "Vitamin D",
    "description": "Vitamin D levels in blood",
    "price": 800,
    "turnaround": "48-72 hrs",
    "image": [vitamin]
  },
  {
    "id": 8,
    "name": "Full Body Checkup (Basic)",
    "description": "Package including common health tests",
    "price": 2499,
    "turnaround": "48-72 hrs",
    "image": [fullBody]
  },
  {
    "id": 9,
    "name": "Thyroid Stimulating Hormone (TSH)",
    "description": "Measures TSH levels for thyroid function",
    "price": 400,
    "turnaround": "24-48 hrs",
    "image": [thyroid]
  },
  {
    "id": 10,
    "name": "Calcium Test",
    "description": "Checks calcium levels in blood",
    "price": 350,
    "turnaround": "24-48 hrs",
    "image": [vitamin]
  },
  {
    "id": 11,
    "name": "Iron Studies",
    "description": "Evaluates iron, ferritin, and TIBC",
    "price": 650,
    "turnaround": "48-72 hrs",
    "image": [cbc]
  },
  {
    "id": 12,
    "name": "Blood Urea Nitrogen (BUN)",
    "description": "Assesses kidney function",
    "price": 300,
    "turnaround": "24-48 hrs",
    "image": [kidney]
  },
  {
    "id": 13,
    "name": "Electrolyte Panel",
    "description": "Measures sodium, potassium, chloride",
    "price": 400,
    "turnaround": "24-48 hrs",
    "image": [liquid]
  },
  {
    "id": 14,
    "name": "Blood Glucose Fasting",
    "description": "Fasting blood sugar level",
    "price": 200,
    "turnaround": "12-24 hrs",
    "image": [diabetes]
  },
  {
    "id": 15,
    "name": "Postprandial Blood Sugar",
    "description": "Blood sugar after meal",
    "price": 200,
    "turnaround": "12-24 hrs",
    "image": [diabetes]
  },
  {
    "id": 16,
    "name": "Urine Routine & Microscopy",
    "description": "Basic urine analysis",
    "price": 150,
    "turnaround": "12-24 hrs",
    "image": [c1]
  },
  {
    "id": 17,
    "name": "Prostate Specific Antigen (PSA)",
    "description": "Screening for prostate health",
    "price": 900,
    "turnaround": "48-72 hrs",
    "image": [c2]
  },
  {
    "id": 18,
    "name": "C-Reactive Protein (CRP)",
    "description": "Detects inflammation in the body",
    "price": 500,
    "turnaround": "24-48 hrs",
    "image": [c3]
  },
  {
    "id": 19,
    "name": "Hepatitis B Surface Antigen (HBsAg)",
    "description": "Screening for Hepatitis B infection",
    "price": 700,
    "turnaround": "48-72 hrs",
    "image": [c4]
  },
  {
    "id": 20,
    "name": "Rheumatoid Factor (RF)",
    "description": "Test for rheumatoid arthritis",
    "price": 600,
    "turnaround": "48-72 hrs",
    "image": [cbc]
  }
];
export { c1, c2, c3, c4 };
export default tests;