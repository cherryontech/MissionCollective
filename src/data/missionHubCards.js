import calendar from "../assets/icons/missionHub/calendar.svg";
import completed from "../assets/icons/missionHub/completed.svg";
import idea from "../assets/icons/missionHub/idea.svg";
import masks from "../assets/icons/missionHub/masks.svg";
import olympics from "../assets/icons/missionHub/olympics.svg";
import scale from "../assets/icons/missionHub/scale.svg";
import team from "../assets/icons/missionHub/team.svg";
import world from "../assets/icons/missionHub/world.svg";

export const cardContent = [
  {
    id: 0,
    headline: "Different Cultures Trivia",
    body: "Collaborate to explore world traditions, holidays, and cultural customs.",
    minutes: "5-10 minutes",
    points: "10-100 points",
    numCompleted: 1,
    icon: world,
    alt: "world icon",
  },
  {
    id: 1,
    headline: "Pet Peeves",
    body: "Guess your teammates' pet peeves and discover what they find annoying.",
    minutes: "10-15 minutes",
    points: "15-150 points",
    numCompleted: 0,
    icon: team,
    alt: "team icon",
  },
  {
    id: 2,
    headline: "This or That?",
    body: "Share your preferences and see how well your teammates know your choices.",
    minutes: "3-8 minutes",
    points: "5-50 points",
    numCompleted: 3,
    icon: scale,
    alt: "scale icon",
  },
  {
    id: 3,
    headline: "Quick Fire Questions",
    body: "Fast-paced questions to connect on personal and workplace favorites.",
    minutes: "8-12 minutes",
    points: "12-120 points",
    numCompleted: 2,
    icon: completed,
    alt: "checkmark icon",
  },
  {
    id: 4,
    headline: "Office Olympics",
    body: "Rapid-fire choices on preferred work style, desk snacks, and office habits.",
    minutes: "10-15 minutes",
    points: "15-150 points",
    numCompleted: 1,
    icon: olympics,
    alt: "olympic torch icon",
  },
  {
    id: 5,
    headline: "Two Truths and a Lie",
    body: "Based on teammate submissions, guess which statement is the fib.",
    minutes: "5-10 minutes",
    points: "10-100 points",
    numCompleted: 2,
    icon: masks,
    alt: "drama mask icon",
  },
  {
    id: 6,
    headline: "Global Calendar Challenge",
    body: "Match international holidays, festivals, and cultural dates to the country of origin.",
    minutes: "10-15 minutes",
    points: "15-150 points",
    numCompleted: 4,
    icon: calendar,
    alt: "calendar icon",
  },
  {
    id: 7,
    headline: "What's My Motto?",
    body: "Identify which teammate submitted the quote or philosophy they try to live by.",
    minutes: "8-12 minutes",
    points: "12-120 points",
    numCompleted: 0,
    icon: idea,
    alt: "lightbulb icon",
  },
];
