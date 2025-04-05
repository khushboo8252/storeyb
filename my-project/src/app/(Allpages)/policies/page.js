import React from 'react';
import Navbar from '../../../../components/Navbar';
import { IoMdAdd } from "react-icons/io";

const Policies = () => {
  return (
    <>
      <Navbar />
      <div className="w-full bg-white text-black py-8 px-4 sm:px-6 lg:px-10">
        <div className="max-w-screen-lg mx-auto mt-16 sm:mt-20">

          {/* Refund Section */}
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">Refund</h2>
            <ul className="list-disc list-inside text-base sm:text-lg space-y-2">
              <li>We appreciate your purchase at Createnary.</li>
              <li>
                Please review your selections carefully before purchase. For issues, contact: 
                <a href="mailto:support@vybstore.com" className="text-teal-900 underline ml-1">support@vybstore.com</a>.
              </li>
              <li>
                Createnary may make exceptions at its discretion. Thanks for understanding.
              </li>
              <li>
                Using our services means you accept this no-refund policy. Questions? 
                <a href="mailto:support@vybstore.com" className="text-teal-900 underline ml-1">support@vybstore.com</a>.
              </li>
            </ul>
          </div>

          {/* Refund Policies Accordion Style List */}
          <div className="space-y-6">
            {[
              "Refund Policy for Digital",
              "Refund Policy for Itinerary",
              "Refund Policy for Merchandise",
              "Refund Policy for Brand"
            ].map((title, index) => (
              <div key={index} className="flex justify-between items-center border-b text-teal-900 rounded-3xl px-5 py-4 bg-[#E5F0F1]">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold">{title}</h3>
                <button className="text-teal-900">
                  <IoMdAdd size={24} />
                </button>
              </div>
            ))}
          </div>

          {/* Privacy Policy Section */}
          <div className="mt-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">Privacy Policy</h2>
            <div className="text-base sm:text-lg space-y-5">
              <p>
                This privacy policy explains how BNERD TECH LLP uses and processes your data when you use our services. By using this site, you agree to these terms.
              </p>
              <p>
                We are committed to protecting your privacy and complying with applicable laws.
              </p>
              <p>
                This policy may be updated. Please check back for the latest version.
              </p>

              <h3 className="text-xl sm:text-2xl font-semibold mt-6">We may collect:</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Name</li>
                <li>Contact information (address, email)</li>
                <li>Preferences or demographic info</li>
                <li>Data necessary for our services</li>
                <li>We do not store credit/debit card info as per Indian law</li>
              </ul>

              <h3 className="text-xl sm:text-2xl font-semibold mt-6">Use of data:</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>For record keeping and internal training</li>
                <li>To improve services and send updates</li>
                <li>To communicate and support you</li>
              </ul>

              <h3 className="text-xl sm:text-2xl font-semibold mt-6">Sharing your data:</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>With service providers to fulfill requests</li>
                <li>Group companies and consultants</li>
                <li>Legal or regulatory authorities if required</li>
              </ul>
            </div>
          </div>

          {/* Terms and Conditions Section */}
          <div className="mt-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">T&C</h2>
            <div className="text-base sm:text-lg space-y-6">

              <div>
                <h3 className="text-xl sm:text-2xl font-semibold">Welcome to Createnary!</h3>
                <p>
                  By accessing our site, you agree to these terms. Please read carefully.
                </p>
              </div>

              <div>
                <h4 className="text-lg sm:text-xl font-semibold">1. Acceptance of Terms:</h4>
                <p>
                  By using our services, you agree to these terms. If not, please do not use our site.
                </p>
              </div>

              <div>
                <h4 className="text-lg sm:text-xl font-semibold">2. Eligibility:</h4>
                <p>
                  Users must be 18+ or have legal capacity. Representatives must have authority.
                </p>
              </div>

              <div>
                <h4 className="text-lg sm:text-xl font-semibold">3. Premium Digital Content:</h4>
                <p>
                  Premium content is available upon payment. Use is subject to terms.
                </p>
              </div>

              <div>
                <h4 className="text-lg sm:text-xl font-semibold">4. Payment:</h4>
                <p>
                  Payments are processed securely. Ensure details are accurate.
                </p>
              </div>

              <div>
                <h4 className="text-lg sm:text-xl font-semibold">5. Refund Policy:</h4>
                <p>
                  All digital sales are final. No refunds after access is granted.
                </p>
                <p>
                  Technical issue? Contact <a href="mailto:yatharthgupta112@gmail.com" className="text-teal-900 underline">yatharthgupta112@gmail.com</a>.
                </p>
                <p>
                  Createnary may offer case-by-case exceptions.
                </p>
                <p>
                  Use of service means acceptance of this policy.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Policies;
