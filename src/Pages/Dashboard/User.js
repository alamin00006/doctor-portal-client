import React from 'react';
import {useQuery} from 'react-query';
import Loding from '../Shared/Loding';

const User = () => {
    const {data: users, isLoading} = useQuery('users', () => fetch('http://localhost:5000/user').then(res =>res.json()))
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
        {users.map((user, index) =><tr key={user._id}>
        <th>{index + 1}</th>
        <td>{user.email}</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>)}
    </tbody>
  </table>
</div>
        </div>
    );
};

export default User;