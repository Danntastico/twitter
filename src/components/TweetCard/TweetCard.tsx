interface TweetCardProps {
  profileName: string;
  userName: string;
  date: string;
  children: React.ReactNode
}

interface TweetUserInfoProps {
  profileName: string;
  userName: string;
  date: string;
}

const TweetCard = (props: TweetCardProps): JSX.Element => {
  const {profileName, userName, date, children} = props
  return (
    <div className='tweetcard'>
      <div className="tweetcard-column">
        <img src="" alt="" />
      </div>
      <div className="tweetcard-column">
        <TweetUserInfo profileName={profileName} userName={userName} date={date}/>
        <div className="tweetcard-body">
          {children}
        </div>
        <div className="tweetcard-options">
          <p>💬</p>
          <p>🔁</p>
          <p>❤️</p>
        </div>
      </div>
    </div>
  )
}

const TweetUserInfo = ({profileName, userName, date}: TweetUserInfoProps): JSX.Element => { 
  return (
    <div className="tweetcard-userinfo">
      <span className="userinfo-profileName">
        {profileName}
      </span>
      <span className="userinfo-username">{userName}</span>
      <span className="tweetcard-date">
        {date}
      </span>
    </div>
  )
}

interface TweetBodyProps {
  children: string;
}
const TweetBody = ({children} :TweetBodyProps) => { 
  return (
    <div>{children}</div>
  )
 }
interface CompoundTweetCard {
  Body: typeof TweetBody
}




export default TweetCard

/**
 * Desired API
 * 
  <TweetCard>
    <TweetContext {...contextInformation}/>
    <TweetUserInfo profileName='Danilo P.' username='danntastico'/>
    <TweetBody>
      {description}
    </TweetBody>
    <TweetMedia src={mediaSource}/>
  </TweetCard>
 */