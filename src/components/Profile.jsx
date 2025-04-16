import React, { useEffect, useState } from "react";
import "./profile.css";
import { useParams } from "react-router-dom";
import { auth, db } from "../firebase";

const Profile = () => {
  document.title = "Your Profile | Universal Cloud";

  const [profileData, setProfileData] = useState({});


  const [editUsername, setEditUsername] = useState("");
  const [editEmail, setEditEmail] = useState("");

  const params = useParams();

  const getProfileData = async () => {
    const result = await db.collection("users").doc(params.id).get();
    setProfileData(result.data());
    setEditUsername(result.data().username);
    setEditEmail(result.data().email);
  }

  useEffect(() => {
    getProfileData();
  }, [])


  console.log(editUsername + " " + editEmail);


  const goBack = () => {
    window.history.back();
  }

  function showTab(tabId, e) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.add('hidden'));
    document.getElementById(tabId).classList.remove('hidden');
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('tab-active'));
    e.target.classList.add('tab-active');
  }

  async function logout() {
    alert('Logging out...');
    await auth.signOut();
  }

  function uploadAvatar(e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (event) {
        document.getElementById('avatar').src = event.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  function openEditModal() {
    document.getElementById('editModal').classList.remove('hidden');
  }

  function closeEditModal() {
    document.getElementById('editModal').classList.add('hidden');
  }

  async function saveProfile() {
    await db.collection("users").doc(params.id).set({
      username: editUsername,
      email: profileData.email,
      rank: profileData.rank,
      photoURL: profileData.photoURL
    })
    alert('Profile updated!');
    closeEditModal();
  }

  console.log(auth.currentUser)

  function renew(id) {
    alert('Renewing item with ID: ' + id);
  }
  return (
    <div className="profile p-6">
      <div className="max-w-5xl mx-auto">
        {/* <!-- Back Button --> */}
        <div className="mb-4">
          <button onClick={() => goBack()} className="flex items-center gap-2 text-[#00ffff] hover:text-cyan-300 neon">
            &larr;
            <span>Back</span>
          </button>
        </div>

        {/* <!-- Profile Info --> */}
        <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
          <div className="relative">
            <img id="avatar" src={profileData.photoURL} className="w-24 h-24 rounded-full border-4 neon-border" />
            <input type="file" accept="image/*" className="absolute bottom-0 right-0 w-8 h-8 opacity-0 cursor-pointer"
              onchange="uploadAvatar(event)" />
            <i className="fas fa-camera absolute bottom-0 right-0 text-cyan-300"></i>
          </div>
          <div>
            <h2 id="username" className="text-3xl font-bold neon">{profileData.username}</h2>
            <p id="email" className="text-[#00ffff]">{profileData.email}</p>
            <p className="mt-1 text-sm text-gray-400">Rank: <span className="text-[#0ff]">{profileData.rank}</span></p>
          </div>
          <div className="ml-auto flex flex-col gap-2">
            <button onClick={() => openEditModal()} className="bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded neon-border">Edit
              Profile</button>
            <button onClick={() => logout()} className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded neon-border">Logout</button>
          </div>
        </div>

        {/* <!-- Tabs --> */}
        <div>
          <div className="flex border-b border-gray-600 mb-4">
            <button onClick={(event) => showTab('servers', event)} className="tab-btn px-4 py-2 border-b-2 tab-active">Servers /
              VPS</button>
            <button onClick={(event) => showTab('others', event)} className="tab-btn px-4 py-2 border-b-2 text-gray-400">Other
              Purchases</button>
            <button onClick={(event) => showTab('billing', event)} className="tab-btn px-4 py-2 border-b-2 text-gray-400">Billing</button>
          </div>

          {/* <!-- Servers/VPS Tab --> */}
          <div id="servers" className="tab-content">
            <div className="grid gap-4">
              <div className="bg-[#1a1a1a] p-4 rounded-lg neon-border flex justify-between items-center">
                <div>
                  <h4 className="text-lg font-semibold text-[#00ffff]">Minecraft Server</h4>
                  <p className="text-sm text-gray-400">Expires: 2025-05-10 | Status: Active</p>
                </div>
                <button onClick={() => renew('srv001')}
                  className="bg-[#00ffff] text-black font-bold px-3 py-1 rounded hover:bg-cyan-400">Renew</button>
              </div>
            </div>
          </div>

          {/* <!-- Other Purchases Tab --> */}
          <div id="others" className="tab-content hidden">
            <div className="bg-[#1a1a1a] p-4 rounded-lg neon-border">
              <h4 className="text-lg font-semibold text-[#00ffff]">Plugin Development</h4>
              <p className="text-sm text-gray-400">Status: Completed</p>
            </div>
          </div>

          {/* <!-- Billing Tab --> */}
          <div id="billing" className="tab-content hidden">
            <div className="bg-[#1a1a1a] p-4 rounded-lg neon-border">
              <h4 className="text-lg font-semibold text-[#00ffff] mb-2">Billing Summary</h4>
              <ul className="list-disc pl-4 text-sm text-gray-300">
                <li>Invoice #001 - $10.00 - Paid</li>
                <li>Invoice #002 - $15.00 - Pending</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Edit Modal --> */}
      <div id="editModal" className="fixed inset-0 hidden items-center justify-center z-50">
        <div className="modal p-6 rounded-lg neon-border w-96">
          <h3 className="text-xl font-bold text-[#00ffff] mb-4">Edit Profile</h3>
          <input id="editName" type="text"
            className="w-full mb-3 px-3 py-2 rounded bg-[#1a1a1a] text-white border border-cyan-500" placeholder="Username" value={editUsername} onChange={(e) => setEditUsername(e.target.value)} />
          <input id="editEmail" type="email"
            className="w-full mb-3 px-3 py-2 rounded bg-[#1a1a1a] text-white border border-cyan-500" placeholder="Email" value={editEmail} onChange={(e) => setEditEmail(e.target.value)} disabled />
          <div className="flex justify-end gap-2">
            <button onClick={() => closeEditModal()} className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded">Cancel</button>
            <button onClick={() => saveProfile()}
              className="bg-[#00ffff] text-black font-bold px-4 py-2 rounded hover:bg-cyan-400">Save</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;