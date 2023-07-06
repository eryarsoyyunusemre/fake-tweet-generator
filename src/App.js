import './style.scss';
import {LikeIcon, ReplyIcon, RetweetIcon, ShareIcon, VerifiedIcon} from "./icons/icons";

function App() {
  return (
      <>
        <div className="tweet">

          <div className="tweet-author">
            <img src='https://picsum.photos/200/100' alt='resim'/>
            <div className='name'>
              Yunus Emre Eryarsoy
              <VerifiedIcon/>
            </div>
            <div className="username">@yunusemre</div>
          </div>

          <div className="tweet-content">
            <p>Bu tweet fake tweet generator uygulaması için atılmıştır.</p>
          </div>
          <div className="tweet-stats">
        <span>
          <b>24</b>Retweet
        </span>
            <span>
          <b>24</b>Alıntı Tweet
        </span>
            <span>
          <b>24</b>Beğeni
        </span>
          </div>

          <div className="tweet-actions">
        <span>
          <ReplyIcon/>
        </span>
            <span>
          <RetweetIcon/>
        </span>
            <span>
          <LikeIcon/>
        </span>
            <span>
          <ShareIcon/>
        </span>
          </div>
        </div>
      </>
  );
}

export default App;
