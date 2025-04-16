import React from "react";
import "./shop.css";
import { NavLink } from "react-router-dom";

const Shop = () => {
  document.title = "Shop | Universal Cloud";
  return (
    <div className="shop shop-body">
      <div className="max-w-3xl mx-auto py-10 px-4">
        <NavLink to="/home" className="back-button">&larr; Back</NavLink>
        <div className="neon-box">

          <section className="min-h-screen p-6">

            <h1 className="text-4xl font-bold text-center mb-10 neon-text">Explore Our Universal Plans</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

              <NavLink to="/shop/budget-servers" className="block rounded-xl glow-border category-card p-6">
                <h2 className="text-2xl font-bold neon-text mb-2">Budget Server Plans</h2>
                <p className="neon-subtext">Affordable hosting for starters and small communities.</p>
              </NavLink>

              <NavLink to="/shop/premium-servers" className="block rounded-xl glow-border category-card p-6">
                <h2 className="text-2xl font-bold text-green-400 mb-2">Premium Server Plans</h2>
                <p className="neon-subtext">Powerful hosting for medium to large-scale games.</p>
              </NavLink>

              <NavLink to="/shop/pro-vps" className="block rounded-xl glow-border category-card p-6">
                <h2 className="text-2xl font-bold text-purple-400 mb-2">Pro VPS Plans</h2>
                <p className="neon-subtext">Dedicated resources and pro-grade performance.</p>
              </NavLink>

              <NavLink to="/shop/ultra-vps" className="block rounded-xl glow-border category-card p-6">
                <h2 className="text-2xl font-bold text-pink-400 mb-2">Ultra VPS Plans</h2>
                <p className="neon-subtext">Extreme performance with high bandwidth and SSD power.</p>
              </NavLink>

              <NavLink to="/shop/domains" className="block rounded-xl glow-border category-card p-6">
                <h2 className="text-2xl font-bold text-yellow-400 mb-2">Domains</h2>
                <p className="neon-subtext">Buy and manage your gaming domains like <strong>.gg</strong>, <strong>.dev</strong>,
                  and more.</p>
              </NavLink>

              <NavLink to="/shop/devlopers" className="block rounded-xl glow-border category-card p-6">
                <h2 className="text-2xl font-bold text-cyan-400 mb-2">Developers</h2>
                <p className="neon-subtext">Hire vetted developers to build your server plugins or websites.</p>
              </NavLink>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Shop;