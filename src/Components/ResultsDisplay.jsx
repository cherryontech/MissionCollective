import { useState } from "react";
import profile from "../assets/images/navbar/profile.png";
import profileemma from "../assets/images/resultpage/profile-emma.png";
import profilealex from "../assets/images/resultpage/profile-alex.png";
import profilesarah from "../assets/images/resultpage/profile-sarah.png";
import profilemike from "../assets/images/resultpage/profile-mike.png";
import { ToastContainer, toast } from "react-toastify";
import "../styles/ResultsDisplay.css";
import "react-toastify/dist/ReactToastify.css";

export default function ResultsDisplay() {
  const [nudgedTeammates, setNudgedTeammates] = useState({});

  const pendingTeammates = [
    { name: "Alex", img: profilealex },
    { name: "Sarah", img: profilesarah },
    { name: "Mike", img: profilemike },
  ];

  const handleNudge = (teammate) => {
    console.log("Clicked teammate:", teammate);
    if (nudgedTeammates[teammate]) {
      toast.info(
        `You recently nudged ${teammate}. Try again tomorrow to give them time to contribute.`,
        {
          className: "toast-blue",
        }
      );
    } else {
      toast.success(
        `Friendly nudge sent to ${teammate}! Thanks for helping the team.`,
        {
          className: "toast-green",
        }
      );
      setNudgedTeammates((prev) => ({ ...prev, [teammate]: true }));
    }
  };
  return (
    <>
      <div className="Results-grid-container">
        <div className="Points-earned-container">
          <div className="Points-earned-text">
            <h1>Points Earned: 90</h1>
            <h3>
              <span>Great work, Lisa! </span>
              These have been applied to your team points.
            </h3>
          </div>
          <div className="Team-points-info">
            <span>1,890</span>
            <p>New Team Total</p>
          </div>
        </div>
        <div className="Mission-Info-container">
          <div className="Mission-status-container">
            <h3>Mission Status</h3>
            <p>
              This mission is now complete for you, but the team's work
              continues! Once everyone on the team has contributed, the mission
              can reset for a new round of activities.
            </p>
            <p>
              <span>Still waiting for 3 teammates.</span>
            </p>
          </div>
          {/* ACCOMPLISHED */}

          <div className="Avatar-accolades-container">
            <span className="Section-title">Accomplished by:</span>

            <div className="Avatar-group-accolades">
              <div className="person">
                <img src={profile} alt="Lisa" />
                <p>Lisa P.</p>
              </div>

              <div className="person">
                <img src={profileemma} alt="Emma" />
                <p>Emma J.</p>
              </div>
            </div>
          </div>

          {/* PENDING */}
          <div className="Mission-pending-container">
            <span className="Section-title">Mission Pending:</span>
            <p className="pending-instruction">(Click to send a nudge)</p>

            <div className="Avatar-group-pending">
              {pendingTeammates.map((teammate) => (
                <div className="person" key={teammate.name}>
                  <button onClick={() => handleNudge(teammate.name)}>
                    <img src={teammate.img} alt={teammate.name} />
                  </button>
                  <p>{teammate.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <ToastContainer
          className="toast-container"
          bodyClassName="toast-body"
          position="top-center"
          autoClose={false}
          newestOnTop
          hideProgressBar={true}
          closeOnClick
          closeButton={true}
          pauseOnFocusLoss
          theme="colored"
        />
      </div>
    </>
  );
}
