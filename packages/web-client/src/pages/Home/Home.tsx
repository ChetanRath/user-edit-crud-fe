import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box, Button, List, ListItem, Typography } from "@mui/material";
import { userApi } from "api";
import { useAsyncFn } from "hooks/useAsync";
import { useEffectOnce } from "hooks/useEffectOnce";
import { PageURL } from "router/pageURL";

export const Home = () => {
  const navigate = useNavigate();
  const { isLoading, res: userData, asyncFunc: getUsers } = useAsyncFn( userApi.getAllUsers );

  useEffectOnce( () => {
    getUsers();
  });

  return (
    <Box
      sx={{
        padding: "2rem",
      }}
    >
      <Button variant='contained' onClick={() => navigate( PageURL.CREATE_USER )}>
        Create New User
      </Button>
      <Typography variant='h4'>All users list. Click them to edit their details</Typography>
      {isLoading ? (
        <>{"Loading..."}</>
      ) : (
        <List>
          {userData &&
            userData.map( user => (
              <ListItem key={user._id}>
                <Link className='link__common' to={`/update-user/${user._id}`}>
                  {user.first_name}
                </Link>
              </ListItem>
            ) )}
        </List>
      )}
    </Box>
  );
};
