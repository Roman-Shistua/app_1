import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { setUserProfile } from './../../redux/profile-reducer';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { profileAPI } from '../../API/api';

// class ProfileContainer extends React.Component {

//   componentDidMount() {
//     axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`)
//       .then(response => {
//         this.props.setUserProfile(response.data);
//       });
//   }

//   render() {
//     return (
//       <Profile {...this.props} profile={this.props.profile} />
//     )
//   }
// }

const ProfileContainer = (props) => {

  const { id } = useParams();

  useEffect(() => {
    profileAPI.getProfile(id).then(data => {
      props.setUserProfile(data);
    });

  }, [id]);



  // Нужно решить вопрос с переключением, когда я нажимаю на страницу profile там должен
  // загружатся мой профиль. На данный момент, страница не рендерится.

  return (
    <Profile {...props} profile={props.profile} />
  )
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile
});




export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);