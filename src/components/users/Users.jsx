import axios from 'axios';
import React from 'react';
import styles from './Users.module.css';
import userPhoto from '../../assets/images/Profile-Male-PNG.png'

export default class Users extends React.Component {
  componentDidMount() {
    if (this.props.users.length === 0) {
      axios.get(`https://fir-project-7e156-default-rtdb.firebaseio.com/.json?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        if (response.data.users !== null && response.data.users !== undefined) {
          if (response.data.users.length > 0) {
            this.props.setUsers(response.data.users);
          }
        }
      })
      .catch( error => {
        console.error("Internet error", error )
      })
    }
  }

  render() {

// let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

// let pages = [];
// for (let i = 1; i <= pagesCount; i++) {
//   pages.push(i);
// }

    return(
      <div className={styles.main}>
        <div className={styles.container}>
          {/* <div>
            {
              pages.map(page => {
                return <span className={this.props.currentPage === page && styles.selectedPage}>{page}</span>
              })
            }
          </div> */}
          <div className={styles.users}>
            {
              this.props.users.map( user => (
                <div className={styles.user} key={user.id}>
                  <div className={styles.profile}>
                    <div>
                      <img alt="avatar" src={userPhoto} className={styles.avatar} />
                    </div>
                    <div className={styles.info}>
                      <div>
                        {user.name} 
                      </div>
                      <div className={styles.location}>
                        {user.location.country}
                      </div>
                      <div className={styles.location}>
                        {user.location.city}
                      </div>
                    </div>
                  </div>
                  <div className={styles.buttons}>
                    <div>
                      <button className={styles.ignoreButton}>
                        Ignore
                      </button>
                    </div>
                    <div>
                      {user.followed ? 
                      <button className={styles.addButton} onClick={() => {this.props.unfollow(user.id)}}>Follow</button> : 
                      <button className={styles.addButton} onClick={() => {this.props.follow(user.id)}}>Unfollow</button>}
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <div className={styles.recomendations}>
          Recomendations
        </div>
      </div>
    );
  }
}
