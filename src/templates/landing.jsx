export const LandingPage = () => {
  return (
    <div className="landingPage basicLight">
      <div className="landBox">
        <div className="mg-lg fw-xxl landingContent">
          <div className="mg-lg landingHeader">
            <div className="imageInside mg-r-sm">
              <img src="Images/reversed.png" alt="meowPic" />
            </div>
            Pomodoro
          </div>
          <div className="landingDescription mg-lg">
            Are you having trouble in managing time efficiently? Do you not have
            the confidence to complete a big tiresome task? Do you like Cats?
            Introducing
            <span className="snippets mg-x-sm">meowmodoro!</span> The Solution
            which includes divide and conquer approach as well as cats!1
          </div>
          <a href="/Pomodoro">
            <button className="fs-lg  btn btn-primary mg-lg">
              Get Started
            </button>
          </a>
          <a
            href="https://github.com/Sameony/pomodoro"
            target="__blank"
            className="fs-lg btn btn-secondary basicLight mg-lg"
          >
            <span className="disableMe">Github</span><i className="mg-x-sm fab fa-github"></i>
          </a>
        </div>

        <div className="mg-l-xl imageOutside">
          <img src="Images/reversed.png" alt="meowPic" />
        </div>
      </div>
    </div>
  );
};
