import { useState } from "react"
import { Link } from "react-router-dom"
import {
  FaGoogle,
  FaGithub,
  FaUser,
} from "react-icons/fa"

import { MdEmail } from "react-icons/md"

import { RiLockPasswordFill } from "react-icons/ri"

function SignUp() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    })
    setErrors({ ...errors, [name]: "" })
  }

  const validate = () => {
    const newErrors = {}

    if (!formData.firstName.trim()) newErrors.firstName = "Requis"
    if (!formData.lastName.trim()) newErrors.lastName = "Requis"
    
    if (!formData.username.trim()) {
      newErrors.username = "Le pseudo est requis"
    } else if (formData.username.length < 3) {
      newErrors.username = "Doit contenir au moins 3 caractères"
    }

    if (!formData.email) {
      newErrors.email = "L'email est requis"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Format d'email invalide"
    }

    if (!formData.password) {
      newErrors.password = "Mot de passe requis"
    } else if (formData.password.length < 6) {
      newErrors.password = "Au moins 6 caractères"
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Les mots de passe ne correspondent pas"
    }

    if (!formData.terms) {
      newErrors.terms = "Vous devez accepter les conditions"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) {
      console.log("Formulaire Inscription Valide !", formData)
      // Appel API back-end ici plus tard
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">

      <div className="w-full max-w-lg bg-white backdrop-blur-2xl border border-slate-200 rounded-3xl shadow-2xl shadow-slate-200/50 p-8 sm:p-10">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-emerald-600">
            FutureKawa
          </h1>

          <p className="text-slate-600 mt-2">
            Create your account
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>

          {/* First Name + Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <div>
              <label className="text-slate-600 text-sm mb-2 block">
                First Name
              </label>

              <div className="relative">
                <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="John"
                  className={`w-full bg-slate-50 text-slate-900 rounded-xl py-3 pl-12 pr-4 outline-none border transition ${
                    errors.firstName ? "border-red-500" : "border-slate-300 focus:border-green-400"
                  }`}
                />
              </div>
              {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
            </div>

            <div>
              <label className="text-slate-600 text-sm mb-2 block">
                Last Name
              </label>

              <div className="relative">
                <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Doe"
                  className={`w-full bg-slate-50 text-slate-900 rounded-xl py-3 pl-12 pr-4 outline-none border transition ${
                    errors.lastName ? "border-red-500" : "border-slate-300 focus:border-green-400"
                  }`}
                />
              </div>
              {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
            </div>

          </div>

          {/* Username */}
          <div>
            <label className="text-slate-600 text-sm mb-2 block">
              Username
            </label>

            <div className="relative">
              <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />

              <input
                type="text"
                name="username"
                value={formData.username}
                  onChange={handleChange}
                placeholder="futurekawa_user"
                className={`w-full bg-slate-50 text-slate-900 rounded-xl py-3 pl-12 pr-4 outline-none border transition ${
                  errors.username ? "border-red-500" : "border-slate-300 focus:border-green-400"
                }`}
              />
            </div>
            {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username}</p>}
          </div>

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
                  errors.email ? "border-red-500" : "border-slate-300 focus:border-green-400"
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
                placeholder="Create password"
                className={`w-full bg-slate-50 text-slate-900 rounded-xl py-3 pl-12 pr-4 outline-none border transition ${
                  errors.password ? "border-red-500" : "border-slate-300 focus:border-green-400"
                }`}
              />
            </div>
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="text-slate-600 text-sm mb-2 block">
              Confirm Password
            </label>

            <div className="relative">
              <RiLockPasswordFill className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl" />

              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm password"
                className={`w-full bg-slate-50 text-slate-900 rounded-xl py-3 pl-12 pr-4 outline-none border transition ${
                  errors.confirmPassword ? "border-red-500" : "border-slate-300 focus:border-green-400"
                }`}
              />
            </div>
            {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
          </div>

          {/* Terms */}
          <div>
            <label className="flex items-start gap-3 text-sm text-slate-600">
              <input 
                type="checkbox" 
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
                className="mt-1" 
              />

              <span>
                I agree to the{" "}
                <span className="text-emerald-600 cursor-pointer hover:text-green-300">
                  Terms of Service
                </span>{" "}
                and{" "}
                <span className="text-emerald-600 cursor-pointer hover:text-green-300">
                  Privacy Policy
                </span>
              </span>
            </label>
            {errors.terms && <p className="text-red-500 text-xs mt-1">{errors.terms}</p>}
          </div>

          {/* Button */}
          <button 
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 hover:shadow-lg hover:shadow-green-500/30 transition-all duration-300 text-white font-semibold py-3 flex justify-center rounded-xl"
          >
            Create Account
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

        {/* Social */}
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
          Already have an account?{" "}
          <Link to="/signin" className="text-emerald-600 cursor-pointer hover:text-green-300">
            Sign In
          </Link>
        </p>

      </div>
    </div>
  )
}

export default SignUp