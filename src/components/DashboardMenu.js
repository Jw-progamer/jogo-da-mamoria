import React from 'react'
import Paper from "@material-ui/core/Paper"
import { withStyles } from "@material-ui/core/styles"
import Typograph from "@material-ui/core/Typography"

const styles = theme => ({
    root: {
        padding: theme.spacing.unit * 6
    },
    title: {
        padding: theme.spacing.unit * 6
    }
})

function DashboardMenu({ children, classes, title }) {
    return (
        <Paper className={classes.root}>
            <Typograph variant="h4" justify="center" className={classes.title}>
                {title}
            </Typograph>
            {children}
        </Paper>
    );
}

export default withStyles(styles)(DashboardMenu);
