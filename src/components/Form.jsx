import React from "react";
import { useForm } from "react-hook-form";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    alert("Thank you! Your Enquiry details have been submitted.");
    reset();
    // You can also send `data` to your backend here
  };

  return (
    <div id="talk" className="bg-gray-100">
      <form
        className="max-w-2xl mx-auto bg-gray-100 p-8 rounded-xl font-mono"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Let's Talk</h2>
        <p>
          Got an idea or a project in mind? Feel free to send an enquiry.<br />
          It’s just a click away and the first step toward bringing your vision to life!
        </p>

        <div>
          <label className="block font-semibold mb-1">Your Name</label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            className="w-full border px-3 py-2 rounded"
          />
          {errors.name && <span className="text-red-600">{errors.name.message}</span>}
        </div>

        <div>
          <label className="block font-semibold mb-1">Email Address</label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            })}
            className="w-full border px-3 py-2 rounded"
          />
          {errors.email && <span className="text-red-600">{errors.email.message}</span>}
        </div>

        <div>
          <label className="block font-semibold mb-1">Company/Organization (optional)</label>
          <input
            type="text"
            {...register("company")}
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Type of Website</label>
          <select
            {...register("websiteType", { required: "Please select a website type" })}
            className="w-full border px-3 py-2 rounded"
          >
            <option value="">Select type</option>
            <option value="Personal/Portfolio">Personal/Portfolio</option>
            <option value="Business/Corporate">Business/Corporate</option>
            <option value="E-commerce">E-commerce</option>
            <option value="Blog/News">Blog/News</option>
            <option value="Landing Page">Landing Page</option>
            <option value="Other">Other</option>
          </select>
          {errors.websiteType && <span className="text-red-600">{errors.websiteType.message}</span>}
        </div>

        <div>
          <label className="block font-semibold mb-1">Key Features Needed</label>
          <textarea
            {...register("features")}
            className="w-full border px-3 py-2 rounded"
            rows={2}
            placeholder="e.g., Contact form, gallery, payment integration"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Reference Websites (optional)</label>
          <input
            type="text"
            {...register("referenceSites")}
            className="w-full border px-3 py-2 rounded"
            placeholder="Paste links separated by commas"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Additional Notes</label>
          <textarea
            {...register("additionalNotes")}
            className="w-full border px-3 py-2 rounded"
            rows={2}
            placeholder="Anything else you'd like to add?"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gray-900 text-white py-2 rounded hover:bg-gray-800 transition"
        >
          Submit Enquiry Request
        </button>
      </form>
    </div>
  );
}
