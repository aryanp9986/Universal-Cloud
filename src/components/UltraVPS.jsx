import React from "react";
import { ultraVPS } from "../api/serversAPI";
import "./ultravps.css";
import { NavLink, redirect } from "react-router-dom";

const UltraVPS = () => {
  document.title = "Ultra VPS | Universal Cloud";

  const redirectToPayment = (planName) => {
    window.location.replace(`/pay/UltraVPS/${planName}`);
  }
  return (
    <div className="uvps uvps-body">
      <div className="max-w-3xl mx-auto py-10 px-4">
        <NavLink to="/shop" className="back-button">&larr; Back</NavLink>
        <div className="neon-box">

          <section
            x-data="{ page: 'home', selectedPlan: null, selectPlan(plan) { this.selectedPlan = plan; this.page = 'payment'; } }">
            <div className="px-4 py-10 max-w-6xl mx-auto">
              <h1 className="section-title">Ultra VPS Hosting Plans</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {ultraVPS.map(plan => {
                  return <>
                    <div className="card">
                      <h2 className="neon-title">{plan.name}</h2>
                      <p className="mt-2 text-gray-300" x-text="plan.ram + ' RAM, ' + plan.storage + ' SSD, 99.9% Uptime'">{`${plan.ram} RAM, ${plan.storage} SSD, 99.9% Uptime`}</p>
                      <div className="mt-4 text-lime-400 font-bold text-lg">
                        ₹<span x-text="plan.price.toFixed(2)">{plan.price}</span>
                        <span className="line-through text-red-400 ml-2 text-sm">₹<span
                          x-text="plan.original.toFixed(2)">{plan.original}</span></span>
                      </div>
                      <div className="mt-2 text-sm text-cyan-200">
                        <span x-text="plan.rating">{plan.rating}</span> (<span x-text="plan.reviews">{plan.reviews}</span> reviews)
                      </div>
                      <button className="buy-button mt-4" onClick={() => redirectToPayment(plan.name2)}>Buy <span x-text="plan.name">{plan.name}</span></button>
                    </div>
                  </>
                })}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default UltraVPS;