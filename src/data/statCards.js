import book from "../assets/icons/dashboard/book.svg";
import calendar from "../assets/icons/dashboard/calendar.svg";
import people from "../assets/icons/dashboard/people.svg";
import star from "../assets/icons/dashboard/star.svg";

export const statCardContent = [
  {
    id: 0,
    icon: star,
    alt: "star icon",
    initialNumber: 1772,
    activityNumber: 1772,
    rewardNumber: 2000,
    stat: "Points Earned",
  },
  {
    id: 1,
    icon: people,
    alt: "people icon",
    initialNumber: 246,
    activityNumber: 247,
    rewardNumber: 250,
    stat: "Total Missions",
  },
  {
    id: 2,
    icon: book,
    alt: "book icon",
    initialNumber: 326,
    activityNumber: 336,
    rewardNumber: 400,
    stat: "Questions Answered",
  },
  {
    id: 3,
    icon: calendar,
    alt: "calendar icon",
    initialNumber: 85,
    activityNumber: 89,
    rewardNumber: 100,
    stat: "Rewards Progress",
  },
];
