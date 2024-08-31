import React from 'react'
import Navbar from '../../../../components/Navbar';
import { IoMdAdd } from "react-icons/io";

const Policies = () => {
  return (
    <>
      <Navbar />
      <div className="w-full  bg-white text-black py-12 px-6">
        <div className="max-w-screen-lg mt-20 mx-auto">
          {/* Refund Section */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-center mb-6">Refund</h2>
            <ul className="list-disc list-inside text-lg ">
              <li>We appreciate your purchase at Createnary.</li>
              <li>
                We encourage users to carefully review their selections before completing a purchase. In case of technical issues or discrepancies with the purchased content,
                please reach out to our customer support team at <a href="mailto:support@vybstore.com" className="text-teal-900 underline">support@vybstore.com</a> for assistance.
              </li>
              <li>
                Createnary reserves the right to make exceptions to this policy on a case-by-case basis, at our sole discretion. We appreciate your understanding and cooperation.
              </li>
              <li>
                By using our services, you agree to abide by this no refund policy. If you have any questions or concerns, please contact us at <a href="mailto:support@vybstore.com" className="text-teal-900 underline">support@vybstore.com</a>.
              </li>
            </ul>
          </div>

          {/* Refund Policies List */}
          <div className="space-y-6">
            <div className="flex justify-between items-center border-b text-teal-900 rounded-3xl p-5 bg-[#E5F0F1] pb-4">
              <h3 className="text-2xl font-semibold">Refund Policy for Digital</h3>
              <button className="text-teal-900">
                <IoMdAdd size={24} />
              </button>
            </div>
            <div className="flex justify-between items-center  text-teal-900 rounded-3xl p-5 bg-[#E5F0F1] pb-4">
              <h3 className="text-2xl font-semibold">Refund Policy for Itinerary</h3>
              <button className="text-teal-900">
                <IoMdAdd size={24} />
              </button>
            </div>
            <div className="flex justify-between items-center  text-teal-900 rounded-3xl p-5 bg-[#E5F0F1] pb-4">
              <h3 className="text-2xl font-semibold">Refund Policy for Merchandise</h3>
              <button className="text-teal-900">
                <IoMdAdd size={24} />
              </button>
            </div>
            <div className="flex justify-between items-center  text-teal-900 rounded-3xl p-5 bg-[#E5F0F1] pb-4">
              <h3 className="text-2xl font-semibold">Refund Policy for Brand</h3>
              <button className="text-teal-900">
                <IoMdAdd size={24} />
              </button>
            </div>
          </div>

          {/* Privacy Policy Section */}
          <div className="mt-10">
            <h2 className="text-3xl font-bold text-center mb-6">Privacy Policy</h2>
            <div className="text-lg space-y-4">
              <p>
                This privacy policy (“Policy”) relates to the manner BNERD TECH LLP (“we”, “us”, “our”) in which we use, 
                handle and process the data that you provide us in connection with using the products or services we offer.
                By using this website or by availing goods or services offered by us, you agree to the terms and
                conditions of this Policy, and consent to our use, storage, disclosure, and transfer of your
                information or data in the manner described in this Policy.
              </p>
              <p>
                We are committed to ensuring that your privacy is protected in accordance with applicable laws 
                and regulations. We urge you to acquaint yourself with this Policy to familiarize yourself with
                the manner in which your data is being handled by us.
              </p>
              <p>
                BNERD TECH LLP may change this Policy periodically and we urge you to check this page for the latest version of the Policy in order to keep yourself updated.
              </p>

              <h3 className="text-2xl font-semibold">We may collect the following information from you:</h3>
              <ul className="list-disc list-inside">
                <li>Name</li>
                <li>Contact information including address and email address.</li>
                <li>Demographic information or preferences or interests.</li>
                <li>Personal Data or Other information relevant/required for providing the goods or services to you.</li>
                <li>
                  The meaning of Personal Data will be as defined under relevant Indian laws. Note: Notwithstanding
                  anything under this Policy as required under applicable Indian laws, we will not be storing
                  any credit card, debit card or any other similar card data of yours.
                </li>
              </ul>

              <h3 className="text-2xl font-semibold">What we do with the data we gather:</h3>
              <ul className="list-disc list-inside">
                <li>Internal record keeping.</li>
                <li>For improving our products or services.</li>
                <li>For providing updates to you regarding our products or services including any special offers.</li>
                <li>To communicate information to you.</li>
                <li>For internal training and quality assurance purposes.</li>
              </ul>

              <h3 className="text-2xl font-semibold">Who do we share your data with:</h3>
              <ul className="list-disc list-inside">
                <li>Third parties including our service providers in order to facilitate the provisions 
                  of goods or services to you, carry out your requests, respond to your queries, fulfil your
                  orders or for other operational and business reasons.
                </li>
                <li>With our group companies (to the extent relevant).</li>
                <li>Our auditors or advisors to the extent required by them for performing their services.</li>
                <li>For Governmental bodies, regulatory authorities, law enforcement authorities pursuant to our legal obligations or compliance requirements.</li>
              </ul>
            </div>
          </div>

          {/* Terms and Conditions Section */}
          <div className="mt-10">
            <h2 className="text-3xl font-bold text-center mb-6">T&C</h2>
            <div className="text-lg space-y-4">
              <div>
                <h3 className="text-2xl font-semibold">Welcome to Createnary!</h3>
                <p>
                  By accessing and using our website, you agree to comply with and be 
                  bound by the following terms and conditions. Please read them carefully before using our services.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold">1. Acceptance of Terms:</h4>
                <p>
                  By using our website, you acknowledge that you have read, understood, and agree to be 
                  bound by these terms and conditions. If you do not agree to these terms, please do not
                  use our services.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold">2. Eligibility:</h4>
                <p>
                  You must be at least 18 years old or have the legal capacity to enter into a contract to use 
                  our services. If you are accessing our services on behalf of a company or other legal entity,
                  you represent that you have the authority to bind such entity to these terms.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold">3. Premium Digital Content:</h4>
                <p>
                  Our website offers premium digital content, including but not limited to, videos, images, and 
                  other media. The access to and use of premium content is subject to payment and compliance with
                  these terms.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold">4. Payment:</h4>
                <p>
                  All payments for premium digital content are processed securely through our payment gateway.
                  You agree to provide accurate and complete payment information and authorize us to charge the
                  specified amount to your chosen payment method.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold">5. Refund Policy:</h4>
                <p>
                  We appreciate your purchase at Createnary. Please note that all transactions for premium
                  digital content are final, and we do not offer refunds. Once a payment is made and access
                  to the content is provided, no refunds will be issued.
                </p>
                <p>
                  We encourage users to carefully review their selections before completing a purchase. In case of technical issues or
                  discrepancies with the purchased content, please reach out to our customer support 
                  team at <a href="mailto:yatharthgupta112@gmail.com" className="text-teal-900 underline">yatharthgupta112@gmail.com</a> for assistance.
                </p>
                <p>
                  Createnary reserves the right to make exceptions to this policy on a case-by-case basis, at our sole discretion. 
                  We appreciate your understanding and cooperation.
                </p>
                <p>
                  By using our services, you agree to abide by this no refund policy. If you have any questions or concerns, 
                  please contact us at <a href="mailto:yatharthgupta112@gmail.com" className="text-teal-900 underline">yatharthgupta112@gmail.com</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Policies;
