import React, {useEffect} from 'react';
import ToDoList from './ToDoList';
import Nav from './Nav';
import { auth } from '../Firebase';
import { UserInterface, findOrCreateUser } from '../Redux/Actions';
import { connect } from 'react-redux';
import { StoreState } from '../Redux/Reducers';

interface UserProps {
  user: UserInterface | {}
  findOrCreateUser(dates: UserInterface): void
}

const User: React.FC<UserProps> = ({findOrCreateUser}): JSX.Element => {

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      user? findOrCreateUser({id: user.uid, email: user.email}) : null
    })
  }, []);

  return (
    <div>
        <Nav />
        <ToDoList />
    </div>
  )
}

const mapDispatchToProps = {
  findOrCreateUser,
}

const mapStateToProps = (state: StoreState): {user: UserInterface | {}} => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);