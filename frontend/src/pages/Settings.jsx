function Settings() {
  return (
    <div>

      <div className="mb-10">
        <h1 className="text-5xl font-black text-white">
          Settings
        </h1>

        <p className="text-slate-400 mt-2">
          Manage your preferences.
        </p>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-3xl p-8 max-w-2xl">

        <div className="mb-6">
          <label className="block text-slate-300 mb-2">
            Full Name
          </label>

          <input
            type="text"
            placeholder="Keren Moreno"
            className="w-full bg-[#0f172a] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none"
          />
        </div>

        <div className="mb-6">
          <label className="block text-slate-300 mb-2">
            Email
          </label>

          <input
            type="email"
            placeholder="keren@email.com"
            className="w-full bg-[#0f172a] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none"
          />
        </div>

        <button className="bg-cyan-400 text-black px-6 py-4 rounded-2xl font-semibold hover:scale-105 transition">
          Save Changes
        </button>

      </div>
    </div>
  )
}

export default Settings