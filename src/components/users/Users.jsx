import axios from 'axios';
import React from 'react';
import styles from './Users.module.css';
import userPhoto from '../../assets/images/Profile-Male-PNG.png'

export default class Users extends React.Component {
  componentDidMount() {
    if (this.props.users.length === 0) {
      axios.get(`https://fir-project-7e156-default-rtdb.firebaseio.com/.json?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
        this.props.setUsers(response.data.users);
      });
    }
  }

  render() {

let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

let pages = [];
for (let i = 1; i <= pagesCount; i++) {
  pages.push(i);
}

    return(
      <div>
        <div>
          {
            pages.map(page => {
              return <span className={this.props.currentPage === page && styles.selectedPage}>{page}</span>
            })
          }
        </div>
        {
          this.props.users.map( user => (
            <div key={user.id}>
              <span>
                <div>
                  <img src={userPhoto} className={styles.userPhoto} />
                </div>
                <div>
                  {user.followed ? <button onClick={() => {this.props.unfollow(user.id)}}>Follow</button> : <button onClick={() => {this.props.follow(user.id)}}>Unfollow</button>}
                </div>
              </span>
              <span>
                <span>
                  <div>
                    {user.name}
                  </div>
                  <div>
                    {user.status}
                  </div>
                </span>
                <span>
                  <div>
                    {"user.location.country"}
                  </div>
                  <div>
                    {"user.location.city"}
                  </div>
                </span>
              </span>
            </div>
          ))
        }
      </div>
    );
  }
}
