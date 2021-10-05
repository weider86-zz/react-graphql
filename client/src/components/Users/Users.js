import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { LOAD_USERS } from '../../GraphQl/Queries';

const Users = () => {
  const { error, loading, data } = useQuery(LOAD_USERS);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    if (data) {
      console.log(data);
      setUsers(data.getAllUsers);
    }
  }, [data]);

  if (error) console.log(error);
  if (loading) return <>loading data...</>;

  return (
    <div>
      {users.map((user) => {
        return (
          <ul key={user.id} style={{ borderBottom: '1px solid lightgray' }}>
            <li>
              <strong>{`${user.firstName} - ${user.id}`}</strong>
            </li>
            <li>{user.email}</li>
            <li>{user.password}</li>
          </ul>
        );
      })}
    </div>
  );
};

export { Users };
