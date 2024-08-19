import { useState, useEffect } from "react";

const useGetUser = () => {
  const [user, setUser] = useState(null);
  const [threads, setThreads] = useState(null);
  const [viewThreadsFeed, setViewThreadsFeed] = useState(true);
  const [filteredThreads, setFilteredThreads] = useState(null);

  const userId = "99909a67-7e83-47ff-b1ac-f4cc10513373";

  const getUser = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/users?user_uuid=${userId}`
      );
      const data = await response.json();

      setUser(data[0]);
    } catch (error) {
      console.error(error);
    }
  };

  const getThreads = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/threads?thread_from=${userId}`
      );
      const data = await response.json();
      setThreads(data);
    } catch (error) {
      console.error(error);
    }
  };

  const getThreadsFeed = async () => {
    if (viewThreadsFeed) {
      const standAloneThreads = threads?.filter(
        (thread) => thread.reply_to === null
      );
      setFilteredThreads(standAloneThreads);
    }

    if (!viewThreadsFeed) {
      const replyThreads = threads?.filter(
        (thread) => thread.reply_to !== null
      );
      setFilteredThreads(replyThreads);
    }
  };

  useEffect(() => {
    getUser();
    getThreads();
  }, []);

  useEffect(() => {
    getThreadsFeed();
  }, [user, threads, viewThreadsFeed]);

  console.log(filteredThreads);

  return { user, threads, viewThreadsFeed, setViewThreadsFeed };
};

export default useGetUser;
