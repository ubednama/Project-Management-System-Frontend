import React from 'react'
import SubscriptionCard from './SubscriptionCard'

const Subscription = () => {

  const monthlyPlan = [
    "Add unlimited",
    "Access to Live chat",
    "Add unlimited team member",
    "Advanced Reporting",
    "Priority Support",
    "Customization Options",
    "Integration Support",
    "Advanced Security",
    "Training and Resources",
    "Access Control",
    "Custom Workflows"
  ]

  const annualPlan = [
    "Add Unlimited project",
    "Access Live Chat",
    "Add Unlimited team members",
    "Advanced Reporting",
    "Priority Support",
    "Everything which monthly plan has"
  ]

  const freePlan = [
    "Add only 3 Projects",
    "Basic Task Management",
    "Project Collaboration",
    "Basic Reporting",
    "Email Notification",
    "Basic Access Control"
  ]
  return (
    <div className="p-10">
      <h1 className="text-5x1 font-semibold py-5 pb-16 text-center">Pricing</h1>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-9">
        <SubscriptionCard
          data={{
            planName: "Free Plan",
            features: freePlan,
            planType: "Free",
            price: 0,
            button: "Get Started",
          }}
        />
        <SubscriptionCard
          data={{
            planName: "Monthly Plan",
            features: monthlyPlan,
            planType: "Monthly",
            price: 799,
            button: true ? "Current Plan" : "Get Started",
          }}
        />
        <SubscriptionCard
          data={{
            planName: "Annual Plan",
            features: annualPlan,
            planType: "Annual",
            price: 6711,
            button: true ? "Current Plan" : "Get Started",
          }}
        />
      </div>
    </div>
  );
}

export default Subscription
