import { Helmet } from "react-helmet";
import Footer5 from "../../components/Footer5";
import LoginSection from "./LoginSection";
import React from "react";

export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title>User Login - Access Your EZShop Account</title>
        <meta
          name="description"
          content="Log in to your EZShop account to access your personal dashboard, track orders, and enjoy a personalized shopping experience. Don't miss out on our exclusive offers!"
        />
      </Helmet>
      <div className="flex w-full flex-col gap-[100px] bg-indigo-100 md:gap-[75px] sm:gap-[50px]">
        {/* login section */}
        <LoginSection />
        <Footer5 />
      </div>
    </>
  );
}



