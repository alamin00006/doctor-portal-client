import React from 'react';
import {useQuery} from 'react-query';
import Loding from '../Shared/Loding';
import RowUser from './RowUser';

const User = () => {
    const {data: users, isLoading, refetch} = useQuery('users', () => fetch('http://localhost:5000/user',{
      method:'GET',
      headers:{
        authorization:`Bearer ${localStorage.getItem('accessToken')}`
      }
    }).then(res =>res.json()))
    if(isLoading){
      return  <Loding></Loding>
    }
    return (
        <div>
            <h1>users{users.length}</h1>
            <div class="overflow-x-auto">
  <table class="table w-full">
    
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
        {users.map((user, index) =><RowUser 
        key={user._id} user={user} index={index} refetch={refetch}>

        </RowUser>)}
    </tbody>
  </table>
</div>
        </div>
    );
};

export default User;