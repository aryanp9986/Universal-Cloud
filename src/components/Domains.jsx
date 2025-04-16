import React from "react";
import { domains } from "../api/serversAPI";
import { NavLink, redirect } from "react-router-dom";
import "./domains.css";

const Domains = () => {
  document.title = "Domains | Universal Cloud";

  const redirectToPayment = (planName) => {
    window.location(`/pay/Domains/${planName}`);
  }
  return (
    <div className="domains domains-body">
      <div className="max-w-3xl mx-auto py-10 px-4">
        <NavLink to="/shop" className="back-button">&larr; Back</NavLink>
        <div className="neon-box">

          <section>
            <div className="max-w-6xl mx-auto px-4 py-10">
              <h1 className="title-text">Secure Your Dream Domain</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {domains.map(plan => {
                  return <>
                    <div className="glow-card">
                      <div className="glow-border"></div>
                      <h2 className="text-xl font-bold text-cyan-300" x-text="domain.name">{plan.name}</h2>
                      <p className="text-sm text-cyan-100 mt-1">Extension: <span x-text="domain.extension">{plan.extension}</span></p>
                      <p className="mt-2 text-cyan-200 font-semibold text-lg">₹<span x-text="domain.price.toFixed(2)">{plan.price}</span>/year
                      </p>
                      <p className="text-sm text-cyan-100 mt-1">Popularity: <span x-text="domain.popularity">{plan.popularity}</span></p>
                      <p className="text-sm text-cyan-100">Reviews: <span x-text="domain.reviews">{plan.reviews}</span> reviews</p>
                      <a href="#payment" className="glow-button mt-4 block text-center" onClick={() => redirectToPayment(plan.name)}>Buy Now</a>
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

export default Domains;