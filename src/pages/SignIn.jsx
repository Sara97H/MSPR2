import { useState } from "react"
import { Link } from "react-router-dom"
import { FaGoogle, FaGithub } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { RiLockPasswordFill } from "react-icons/ri"

function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const [errors, setErrors] = useState({})

  // Gestion de la saisie
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    // On efface l'erreur du champ quand l'utilisateur tape
    setErrors({ ...errors, [e.target.name]: "" })
  }

  // Fonction de validation
  const validate = () => {
    const newErrors = {}

    // Vérification Email
    if (!formData.email) {
      newErrors.email = "L'email est requis"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Le format de l'email est invalide"
    }

    // Vérification Password
    if (!formData.password) {
      newErrors.password = "Le mot de passe est requis"
    } else if (formData.password.length < 6) {
      newErrors.password = "Le mot de passe doit contenir au moins 6 caractères"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0 // Retourne true si pas d'erreurs
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) {
      console.log("Formulaire valide !", formData)
      // Ici, tu pourras appeler ton Back-end plus tard
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      
      <div className="w-full max-w-md bg-white backdrop-blur-2xl border border-slate-200 rounded-3xl shadow-2xl shadow-slate-200/50 p-8 sm:p-10">

        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-emerald-600">
            FutureKawa
          </h1>

          <p className="text-slate-600 mt-2">
            Welcome back
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>

          {/* Email */}
          <div>
            <label className="text-slate-600 text-sm mb-2 block">
              Email
            </label>

            <div className="relative">
              <MdEmail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl" />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className={`w-full bg-slate-50 text-slate-900 rounded-xl py-3 pl-12 pr-4 outline-none border transition ${
                  errors.email ? "border-red-500 focus:border-red-500" : "border-slate-300 focus:border-green-400"
                }`}
              />
            </div>
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          {/* Password */}
          <div>
            <label className="text-slate-600 text-sm mb-2 block">
              Password
            </label>

            <div className="relative">
              <RiLockPasswordFill className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl" />

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className={`w-full bg-slate-50 text-slate-900 rounded-xl py-3 pl-12 pr-4 outline-none border transition ${
                  errors.password ? "border-red-500 focus:border-red-500" : "border-slate-300 focus:border-green-400"
                }`}
              />
            </div>
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </div>

          {/* Remember */}
          <div className="flex items-center justify-between text-sm">

            <label className="flex items-center gap-2 text-slate-600">
              <input type="checkbox" />
              Remember me
            </label>

            <button
              type="button"
              className="text-emerald-600 hover:text-green-300"
            >
              Forgot password?
            </button>

          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 hover:shadow-lg hover:shadow-green-500/30 transition-all duration-300 text-white font-semibold py-3 flex justify-center rounded-xl"
          >
            Sign In
          </button>

        </form>

        {/* Divider */}
        <div className="flex items-center gap-4 my-6">
          <div className="h-px bg-slate-200 flex-1"></div>

          <span className="text-slate-400 text-sm">
            OR
          </span>

          <div className="h-px bg-slate-200 flex-1"></div>
        </div>

        {/* Social login */}
        <div className="grid grid-cols-2 gap-4">

          <button className="flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 transition text-slate-900 py-3 rounded-xl">
            <FaGoogle />
            Google
          </button>

          <button className="flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 transition text-slate-900 py-3 rounded-xl">
            <FaGithub />
            GitHub
          </button>

        </div>

        {/* Footer */}
        <p className="text-center text-slate-400 mt-8">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-emerald-600 cursor-pointer hover:text-green-300">
            Sign Up
          </Link>
        </p>

      </div>
    </div>
  )
}

export default SignIn