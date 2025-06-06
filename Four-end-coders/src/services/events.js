import { articles } from "../data/events.js";

export const getEvents = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(articles);
    }, 1500);
  });
};
