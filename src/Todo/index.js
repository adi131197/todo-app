import React from 'react';
import Header from './Header';
import Form from './Form';
import TodoList from './TodoList';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        textAlign: "center",
        height: "100%"
    }
})

const Todo = () => {
    const classes = useStyles();
    return ( 
        <div className={classes.root}>
            <Header/>
            <Form />
            <TodoList/>
        </div>
     );
}
 
export default Todo;