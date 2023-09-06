import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box, Button, CircularProgress, List, ListItem, Typography } from "@mui/material";
import { userApi } from "api";
import { useAsyncFn, useEffectOnce } from "hooks";
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
      <Typography variant='h4'>All users Click them to edit their details</Typography>
      {isLoading ? (
        <CircularProgress size={50} />
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
