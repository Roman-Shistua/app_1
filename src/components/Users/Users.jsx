import { useState } from "react";
import classes from './Users.module.css'

let Users = (props) => {

    const [totalUsersCount, setTotalUsersCount] = useState(100)

    let pagesCount = Math.ceil(totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div className={classes.pagesBox}>
                <button disabled={props.followingInProgress} className={classes.btn} onClick={props.getUsers}>get users</button>
                <div className={classes.pages}>
                    {pages.map((p, index) => {
                        return <span key={index} className={props.currentPage === p && classes.selectedPage}
                            onClick={() => { props.onPageChanget(p); }} >{p}</span>
                    })}
                </div>
            </div>
            {props.users.map(u => <div key={u.id}>
                <div className={classes.inner}>
                    <div className={classes.title}>{u.title}</div>
                    <div className={classes.body}>{u.body}</div>
                </div>
            </div>)
            }
        </div>
    )
}

export default Users;