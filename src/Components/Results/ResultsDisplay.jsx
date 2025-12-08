import { useState } from "react";
import { useUserContext } from "../../Context/UserContext";
import { useNavigate } from "react-router-dom";
import profile from "../../assets/images/navbar/profile.png";
import profileemma from "../../assets/images/resultpage/profile-emma.png";
import profilealex from "../../assets/images/resultpage/profile-alex.png";
import profilesarah from "../../assets/images/resultpage/profile-sarah.png";
import profilemike from "../../assets/images/resultpage/profile-mike.png";
import trophy from "../../assets/icons/resultsPage/trophy.svg";
import home from "../../assets/icons/resultsPage/home.svg";
import checkGreen from "../../assets/icons/resultsPage/checkGreen.svg";
import { ToastContainer, toast } from "react-toastify";
import "../../styles/ResultsDisplay.css";
import "react-toastify/dist/ReactToastify.css";

export default function ResultsDisplay() {
  const { quizScore } = useUserContext();
  const initialTeamPoints = 1772;
  const displayedScore = quizScore || 85;
  const newTeamPoints = initialTeamPoints + displayedScore;
  const [nudgedTeammates, setNudgedTeammates] = useState({});

  const pendingTeammates = [
    { id: 1, name: "Alex K.", img: profilealex },
    { id: 2, name: "Sarah C.", img: profilesarah },
    { id: 3, name: "Mike R.", img: profilemike },
  ];

  const handleNudge = (id, teammate) => {
    if (nudgedTeammates[id]) return;
    toast.success(
      `Friendly nudge sent to ${teammate}! Thanks for helping the team.`,
      {
        className: "toast-green",
      }
    );
    setNudgedTeammates((prev) => ({ ...prev, [id]: true }));
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
            <h1>Points Earned: {displayedScore}</h1>
            <p>
              <span>Great work, Lisa! </span>
              <br />
              These have been applied to your team points.
            </p>
          </div>
          <div className="Team-points-info">
            <span>{newTeamPoints.toLocaleString("en-US")}</span>
            <p>New Team Total</p>
          </div>
        </div>
        <div className="Mission-Info-container">
          <div className="Mission-status-container">
            <h2>Mission Status</h2>
            <p>
              This mission is now complete for you, but the team's work
              continues! Once everyone on the team has contributed, the mission
              can reset for a new round of activities.
            </p>
            <p>
              <span>
                Still waiting for {pendingTeammates.length} teammates.
              </span>
            </p>
          </div>
          {/* Accomplished */}

          <div className="Avatar-accolades-container">
            <span className="Section-title">Accomplished by:</span>

            <div className="Avatar-group-accolades">
              <div className="Person">
                <img src={profile} alt="Lisa P." />
                <p>Lisa P.</p>
              </div>

              <div className="Person">
                <img src={profileemma} alt="Emma" />
                <p>Emma J.</p>
              </div>
            </div>
          </div>

          {/* Pending */}
          <div className="Mission-pending-container">
            <span className="Section-title">Mission Pending:</span>
            <p className="Pending-instruction">(Click to send a nudge)</p>

            <div className="Avatar-group-pending">
              {pendingTeammates.map((teammate) => (
                <div className="Person" key={teammate.id}>
                  {nudgedTeammates[teammate.id] && (
                    <img
                      src={checkGreen}
                      alt="checked"
                      className="Nudge-check"
                    />
                  )}
                  <button
                    onClick={() => handleNudge(teammate.id, teammate.name)}
                    disabled={nudgedTeammates[teammate.id]}
                  >
                    <img src={teammate.img} alt={teammate.name} />
                  </button>
                  <p>{teammate.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="Results-Buttons-Container">
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
          autoClose={8000}
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
