import "./App.css";

import profile_image from "./assets/profile-picture.png";

function App() {
  return (
    <>
      <div className=" h-screen flex items-center justify-center bg-neutral-900">
        <div className="bg-[#1f1f1f] max-w-sm w-full p-8 rounded-xl shadow-lg flex flex-col items-center">
          <img
            className="rounded-full h-[120px] w-[120px] mt-6"
            src={profile_image}
            alt="Umut Yavuz Profile Picture"
          />
          <h1 className="mt-5 text-white font-bold text-xl ">
            Umut Yavuz
          </h1>
          <p className="text-lime-400 font-medium">Istanbul, Turkey</p>
          <p className="text-sm text-white mt-4 text-center font-light">
            "Front-end developer and avid reader."
          </p>
          <div className="flex flex-col gap-4 mt-6 text-center w-full">
            <a className="pill-link" target="blank" href="https://github.com/umutyavyz"> Github</a>
            <a className="pill-link" target="blank" href="https://www.frontendmentor.io/profile/umutyavyz"> Frontend Mentor</a>
            <a className="pill-link" target="blank" href="https://www.linkedin.com/in/umutyavyz/"> Linkedin</a>
            <a className="pill-link" target="blank" href="https://x.com/realbaymayan"> Twitter</a>
            <a className="pill-link" target="blank" href="https://www.instagram.com/umutyavyz/"> Instagram</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
