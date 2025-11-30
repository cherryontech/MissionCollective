import { useState } from "react";
import { useNavigate } from "react-router-dom";
import profile from "../assets/images/navbar/profile.png";
import profileemma from "../assets/images/resultpage/profile-emma.png";
import profilealex from "../assets/images/resultpage/profile-alex.png";
import profilesarah from "../assets/images/resultpage/profile-sarah.png";
import profilemike from "../assets/images/resultpage/profile-mike.png";
import trophy from "../assets/icons/resultsPage/trophy.svg";
import home from "../assets/icons/resultsPage/home.svg";
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
  const navigate = useNavigate();

  const handleViewMissionHub = () => {
    navigate("/mission-hub");
  };
  const handleGoToDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <>
      <div className="Results-grid-container">
        <div className="Points-earned-container">
          <div className="Points-earned-text">
            <h1>Points Earned: 90</h1>
            <h3>
              <span>Great work, Lisa! </span>
              <br />
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
          {/* Accomplished */}

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

          {/* Pending */}
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
        <div className="Results-Page-Buttons">
          <div>
            <button className="View-Mission-Hub" onClick={handleViewMissionHub}>
              <img src={trophy} alt="trophy icon" className="Trophy-Icon" />
              <span className="View-Mission-Hub-Text">View Mission Hub</span>
            </button>
          </div>
          <div>
            <button className="Go-to-Dashboard" onClick={handleGoToDashboard}>
              <img src={home} alt="home icon" className="Home-Icon" />
              <span className="Go-to-Dashboard-Text">Go to Dashboard</span>
            </button>
          </div>
        </div>
        <ToastContainer
          toastClassName="toast-body"
          position="top-center"
          autoClose={5000}
          newestOnTop
          hideProgressBar={true}
          closeOnClick={false}
          // closeButton={true}
          pauseOnFocusLoss
          pauseOnHover
          theme="colored"
        />
      </div>
    </>
  );
}
