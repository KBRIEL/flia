import '../App.css';
import DataUser from './DataUser'
import TwitterCenter from './TwitterCenter';
import Followers from './Followers';


function TwitterBody() {
  return (
    <div className="twitterBody" >
      <DataUser className="left"/>
      
      <TwitterCenter/>
        <Followers />

    </div>
  );
}

export default TwitterBody;
