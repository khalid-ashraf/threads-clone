import useGetUser from "./hooks/useGetUser";

import { Feed, Header, Nav, PopUp } from "./components";

const App = () => {
  const { user, threads, viewThreadsFeed, setViewThreadsFeed } = useGetUser();

  return (
    <>
      {user && (
        <div className='app'>
          <Nav url={user.instagram_url} />
          <Header
            user={user}
            viewThreadsFeed={viewThreadsFeed}
            setViewThreadsFeed={setViewThreadsFeed}
          />
          <Feed />
          {/* <PopUp /> */}
        </div>
      )}
    </>
  );
};

export default App;

