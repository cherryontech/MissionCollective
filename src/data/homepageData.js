import pinkDice from "../assets/icons/pinkDice.svg";
import pinkLoop from "../assets/icons/pinkLoop.svg";
import pinkPartner from "../assets/icons/pinkPartner.svg";
import stars from "../assets/icons/stars.svg";
import profileValerie from "../assets/profileValerie.png";
import profileLucas from "../assets/profileLucas.png";
import profilePatrick from "../assets/profilePatrick.png";

export const MISSIONSTEPS = [
  {
    id: 1,
    icon: pinkDice,
    title: "Start a Mission",
    text: "A teammate selects a quick, gamified mission from the Mission Hub, choosing a high-impact activity to kick off the collaborative fun.",
  },
  {
    id: 2,
    icon: pinkLoop,
    title: "Collaborate & Learn",
    text: "Each team member answers questions, learns something new about the topic or each other, and earns points for their contribution.",
  },
  {
    id: 3,
    icon: pinkPartner,
    title: "Thrive, Together",
    text: "Points are converted into shared team rewards, such as a donation goal, training budget, or a group activity.",
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    profile: profileValerie,
    name: "Valerie, UX Designer",
    text: "I love that it doesn't take much time, and I can do it when it works for me. It's the first team activity where I felt like I wasn't being judged or put on the spot. Finally, a team activity that isn't awkward!",
    rating: stars,
  },
  {
    id: 2,
    profile: profileLucas,
    name: "Lucas, Project Manager",
    text: "It's the first team tool that feels authentic. Earning points for a shared training budget makes team-building feel valuable, like a direct investment in our skills.",
    rating: stars,
  },
  {
    id: 3,
    profile: profilePatrick,
    name: "Patrick, Engineer",
    text: "Since we focused on a team goal, not individual bragging rights, it made me feel like my small contribution was moving the whole team forward. It genuinely feels like we're working together to improve our connection.",
    rating: stars,
  },
];
