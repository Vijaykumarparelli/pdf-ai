import SingleSignonBtn from "@components/single-signon-btn";
import styles from "@styles/auth.module.scss";
import { loginForm } from "@utls/autn-forms";
import { classNames, googleSignOnUrl } from "@utls/common";
import { setCookie } from "@utls/cookie-store";
import { jwt_token } from "@utls/dummy";
import DisplayForm from "@views/auth/display-form";
import Head from "next/head";
import { useRouter } from "next/router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function LogIn() {
  const router = useRouter();
  const onSubmit = (data) => {
    if (data.email === "admin@gmail.com") {
      setCookie({ name: "token", params: jwt_token });
      router.push("/documents");
    }
  };
  const getGoogleInfo = (data) => {
    console.log(JSON.stringify(data.data));
  };

  return (
    <>
      <Head>
        <title>Sign in</title>
      </Head>
      <div className="bg-ys-light px-3 py-5 full-container">
        <h3 className="text-center mt-5">
          <span>Log In Here!</span>
        </h3>
        <div className="px-3 d-flex align-items-center justify-content-center mt-4"></div>
        <div className={classNames(styles.form, "my-5")}>
          <DisplayForm
            onSubmit={onSubmit}
            styles={styles}
            formFields={loginForm}
            colums={12}
            btnClassName="w-100"
            // termsUi={<a href="">Forget Password?</a>}
            btnName="Log In"
          />
          <div className="mt-4">
            <SingleSignonBtn
              title="Log in with Google"
              variant="outline-ys-primary"
              className="w-100 single-sign-on"
              size="lg"
              img="google.svg"
              href={googleSignOnUrl().href}
              callback={getGoogleInfo}
            />
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

const btns = [
  {
    name: "Candidate",
    value: "1",
    className: "",
  },
  {
    name: "Company",
    value: "2",
    className: "ms-3",
  },
];
