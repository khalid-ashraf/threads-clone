const Header = ({ user, viewThreadsFeed, setViewThreadsFeed }) => {
  return (
    <header>
      <div className='info-container'>
        <div className='user-info-container'>
          <h1>{user.username}</h1>
          <p>
            {user.handle}{" "}
            <span className='threads-info sub-text '>threads.net</span>
          </p>
        </div>
        <div className='img-container'>
          <img src={user.img} alt='profile avatar' />
        </div>
      </div>
      <p>{user.bio}</p>
      <div className='sub-info-container'>
        <p className='sub-text'>
          {user.followers.length} followers •{" "}
          <a className='sub-text' href={user.link} target='_blank'>
            {user.link.replace("https://", "")}
          </a>
        </p>
      </div>
      <button
        className='primary'
        onClick={() => navigator.clipboard.writeText("I am a url")}>
        Share Profile
      </button>
      <div className='button-container'>
        <button
          className={viewThreadsFeed ? "current" : null}
          onClick={() => setViewThreadsFeed(true)}>
          Threads
        </button>
        <button
          className={!viewThreadsFeed ? "current" : null}
          onClick={() => setViewThreadsFeed(false)}>
          Replies
        </button>
      </div>
    </header>
  );
};

export default Header;
